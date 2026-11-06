/* =====================================================================
   NatLab – oppstart, navigasjon og innstillinger
   Sidene har adresser som #celler, #celler-dyrecelle, #celler-quiz osv.
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;

  /* ---------------- Ruter (adresse -> side) ---------------- */
  function route() {
    const h = decodeURIComponent((location.hash || '').replace(/^#\/?/, ''));
    const parts = h.split('-').filter(Boolean);
    const P = N.pages;
    if (!parts.length) return { page: P.home(), nav: 'home' };
    const top = { mal: 'goals', ordliste: 'glossary', personvern: 'privacy', kilder: 'credits' }[parts[0]];
    if (top && parts.length === 1) return { page: P[top](), nav: parts[0] };
    const T = N.topics[parts[0]];
    if (!T) return { page: P.notFound() };
    const tid = parts[0], a = parts[1], b = parts[2], c = parts[3];
    if (!a) return { page: P.topic(tid), nav: 'home' };
    if (T.organisms && T.organisms[a]) {
      if (b === 'les') return { page: P.organism(tid, a, 'les'), nav: 'home' };
      if (b === 'del' && c) return { page: P.organism(tid, a, 'utforsk', c), nav: 'home' };
      return { page: P.organism(tid, a, 'utforsk'), nav: 'home' };
    }
    if (T.pages && T.pages[a]) return { page: P.custom(tid, a, b), nav: 'home' };
    if (a === 'storrelse') return { page: P.scale(tid), nav: 'home' };
    if (a === 'quiz') return { page: P.quiz(tid, b), nav: 'home' };
    if (a === 'ov' && !b) return { page: P.practice(tid), nav: 'home' };
    if (a === 'ov') return { page: P.activity(tid, b, c) || P.notFound(), nav: 'home' };
    return { page: P.notFound() };
  }

  function render(keepScroll) {
    N.readAloud && N.readAloud.stop();
    closePop();
    N.missing.length = 0;
    const r = route();
    const main = document.getElementById('main');
    main.innerHTML = r.page.html;
    if (r.page.mount) r.page.mount(main);
    document.title = (r.page.title ? r.page.title + ' · ' : '') + 'NatLab';
    N.$$('.main-nav a').forEach(function (a) {
      if (a.dataset.nav === r.nav) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    if (!keepScroll) window.scrollTo(0, 0);
    if (N._navigated) { const h1 = N.$('h1', main); if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); } }
    N._navigated = true;
    devBanner();
  }

  function devBanner() {
    const el = document.getElementById('dev-banner');
    if (!el) return;
    if (!N.dev || !N.missing.length) { el.hidden = true; return; }
    el.hidden = false;
    el.innerHTML = '<div class="wrap">' + N.u('devMissing') + ' (' + N.missing.length + '): ' + N.missing.slice(0, 4).map(function (m) { return '«' + N.esc(m.text) + '»'; }).join(', ') + '</div>';
  }

  /* ---------------- Topptekst og bunntekst ---------------- */
  function chrome() {
    document.getElementById('site-header').innerHTML =
      '<div class="wrap header-row">' +
      '<a class="brand" href="#" aria-label="NatLab – ' + N.esc(N.u('home')) + '"><img src="assets/img/logo.svg" alt="" width="38" height="38"><span class="brand-word">Nat<span>Lab</span></span></a>' +
      '<nav class="main-nav" aria-label="' + N.esc(N.t({ nb: 'Hovedmeny', en: 'Main menu' })) + '">' +
      '<a href="#" data-nav="home">' + N.u('navTopics') + '</a>' +
      '<a href="#mal" data-nav="mal">' + N.u('navGoals') + '</a>' +
      '<a href="#ordliste" data-nav="ordliste">' + N.u('navGlossary') + '</a></nav>' +
      '<div class="header-tools">' +
      '<button type="button" class="btn btn-sm lang-btn" id="lang-toggle" aria-label="' + N.esc(N.u('switchLang')) + '" title="' + N.esc(N.u('switchLang')) + '">' + N.u('langShort') + '</button>' +
      '<button type="button" class="btn btn-icon btn-ghost" id="open-settings" aria-label="' + N.esc(N.u('settings')) + '" title="' + N.esc(N.u('settings')) + '">' + N.icon('gear') + '</button>' +
      '</div></div>';
    document.getElementById('site-footer').innerHTML =
      '<div class="wrap footer-row"><span style="display:flex;gap:.6rem;align-items:center"><img src="assets/img/logo.svg" alt="" width="28" height="28"><span>' + N.u('footerMade') + '</span></span>' +
      '<nav aria-label="' + N.esc(N.t({ nb: 'Bunnmeny', en: 'Footer menu' })) + '"><a href="#personvern">' + N.u('privacy') + '</a><a href="#kilder">' + N.u('credits') + '</a><a href="#mal">' + N.u('navGoals') + '</a></nav></div>';
    N.$('.skip').textContent = N.u('skip');
    const pl = document.getElementById('player');
    pl.innerHTML = '<span class="pl-text"></span><button type="button" class="btn btn-sm" data-pl="pause"></button><button type="button" class="btn btn-sm" data-pl="stop">' + N.icon('stop') + '<span>' + N.u('stop') + '</span></button>';
  }

  /* ---------------- Innstillinger ---------------- */
  function seg(name, opts, cur) {
    return '<div class="seg" role="radiogroup" aria-label="' + N.esc(name) + '">' + opts.map(function (o) {
      return '<button type="button" role="radio" data-set="' + o[0] + '" data-val="' + o[1] + '" aria-checked="' + (String(cur) === String(o[1])) + '" aria-pressed="' + (String(cur) === String(o[1])) + '">' + N.esc(o[2]) + '</button>';
    }).join('') + '</div>';
  }
  function settingsHtml() {
    const s = N.settings;
    const v = N.pickVoice(s.lang === 'en' ? 'en' : 'nb');
    const voiceInfo = !N.readAloud.supported ? '<p class="voice-status warn">' + N.u('noSpeech') + '</p>' :
      (v ? '<p class="voice-status">' + N.u('voiceFound') + ' <strong>' + N.esc(v.name) + '</strong> (' + N.esc(v.lang) + ')</p>' : '<p class="voice-status warn">' + N.u('noNorwegianVoice') + '</p>');
    return '<div class="settings-inner"><div class="settings-head"><h2 id="settings-title" style="font-size:1.4rem">' + N.u('settings') + '</h2>' +
      '<button type="button" class="btn btn-icon btn-ghost" data-close aria-label="' + N.esc(N.u('close')) + '">' + N.icon('cross') + '</button></div>' +
      '<div class="set-row"><span class="set-label">' + N.u('setLang') + '</span>' + seg(N.u('setLang'), [['lang', 'nb', 'Norsk (bokmål)'], ['lang', 'en', 'English']], s.lang) + '</div>' +
      '<div class="set-row"><span class="set-label">' + N.u('setFont') + '</span>' + seg(N.u('setFont'), [['font', 'standard', N.u('setFontStandard')], ['font', 'dyslexic', N.u('setFontDyslexic')]], s.font) +
      '<span class="set-help">' + N.u('setFontHelp') + '</span></div>' +
      '<div class="set-row"><span class="set-label">' + N.u('setSize') + '</span>' + seg(N.u('setSize'), [['size', 0, N.u('setSize0')], ['size', 1, N.u('setSize1')], ['size', 2, N.u('setSize2')]], s.size) + '</div>' +
      '<div class="set-row"><span class="set-label">' + N.u('setSpacing') + '</span>' + seg(N.u('setSpacing'), [['spacing', 'normal', N.u('setSpacingNormal')], ['spacing', 'wide', N.u('setSpacingWide')]], s.spacing) + '</div>' +
      '<div class="set-row"><span class="set-label">' + N.u('setTheme') + '</span>' + seg(N.u('setTheme'), [['theme', 'auto', N.u('setThemeAuto')], ['theme', 'light', N.u('setThemeLight')], ['theme', 'dark', N.u('setThemeDark')]], s.theme) + '</div>' +
      '<div class="set-row"><span class="set-label">' + N.u('setLevel') + '</span>' + seg(N.u('setLevel'), [['level', 'basic', N.u('levelBasic')], ['level', 'deeper', N.u('levelDeeper')]], s.level) +
      '<span class="set-help">' + N.u('setLevelHelp') + '</span></div>' +
      '<div class="set-row"><label class="set-label" for="set-rate">' + N.u('setRate') + ' <span class="mono" id="rate-val">' + Number(s.rate).toFixed(1) + '×</span></label>' +
      '<input type="range" id="set-rate" min="0.6" max="1.4" step="0.1" value="' + s.rate + '">' +
      '<div><button type="button" class="btn btn-sm" data-test-voice>' + N.icon('speaker') + N.u('setTestVoice') + '</button></div>' + voiceInfo +
      '<span class="set-help">' + N.u('voiceHelp') + '</span></div>' +
      '<p class="set-help" style="display:flex;gap:.4rem;align-items:center;color:var(--muted);font-size:.88rem">' + N.icon('lock') + N.u('setSavedLocal') + '</p>' +
      '<div class="act-bar"><button type="button" class="btn btn-primary" data-close>' + N.icon('check') + N.u('close') + '</button><button type="button" class="btn btn-ghost" data-reset-settings>' + N.icon('retry') + N.u('setReset') + '</button></div></div>';
  }
  function openSettings() {
    const d = document.getElementById('settings');
    d.innerHTML = settingsHtml();
    if (typeof d.showModal === 'function') d.showModal(); else d.setAttribute('open', '');
    N.emit = function (ev) { if (ev === 'voices' && d.open) { const st = window.scrollY; d.innerHTML = settingsHtml(); window.scrollTo(0, st); } };
  }
  function changeSetting(key, val, dialog) {
    if (key === 'size') val = Number(val);
    N.settings[key] = val;
    N.saveSettings();
    N.applySettings();
    if (key === 'lang' || key === 'level') { chrome(); render(true); }
    if (dialog) {
      const focusSel = '[data-set="' + key + '"][data-val="' + val + '"]';
      dialog.innerHTML = settingsHtml();
      const f = N.$(focusSel, dialog); f && f.focus();
    }
  }

  /* ---------------- Ordforklaring ---------------- */
  let pop = null, popFor = null;
  function closePop() { if (pop) { pop.remove(); pop = null; if (popFor) popFor.setAttribute('aria-expanded', 'false'); popFor = null; } }
  function openPop(btn) {
    closePop();
    const term = N.findTerm(btn.dataset.term);
    if (!term) return;
    const alt = N.otherLang(term.name);
    pop = document.createElement('div');
    pop.className = 'term-pop';
    pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-label', N.t(term.name));
    pop.innerHTML = '<h4>' + N.esc(N.t(term.name)) + '</h4>' + (alt ? '<p class="en">' + N.esc(alt) + '</p>' : '') + '<p>' + N.esc(N.plain(term.def)) + '</p>' +
      '<div class="tp-actions"><button type="button" class="read-btn" data-say-text="' + N.esc(N.t(term.name) + '. ' + N.plain(term.def)) + '">' + N.icon('speaker') + N.u('readAloud') + '</button>' +
      '<a class="read-btn" href="#ordliste" style="text-decoration:none">' + N.icon('book') + N.u('seeGlossary') + '</a>' +
      '<button type="button" class="read-btn" data-close-pop>' + N.icon('cross') + N.u('close') + '</button></div>';
    document.body.appendChild(pop);
    const r = btn.getBoundingClientRect();
    const pw = Math.min(340, window.innerWidth - 32);
    let left = r.left + window.scrollX;
    left = Math.max(16 + window.scrollX, Math.min(left, window.scrollX + window.innerWidth - pw - 16));
    pop.style.left = left + 'px';
    pop.style.top = (r.bottom + window.scrollY + 8) + 'px';
    btn.setAttribute('aria-expanded', 'true');
    popFor = btn;
    N.$('[data-close-pop]', pop).focus({ preventScroll: true });
  }

  /* ---------------- Felles klikk ---------------- */
  document.addEventListener('click', function (e) {
    const t = e.target;
    if (t.closest('.skip')) { e.preventDefault(); document.getElementById('main').focus(); return; }
    const term = t.closest('.term');
    if (term) { e.preventDefault(); if (popFor === term) closePop(); else openPop(term); return; }
    if (pop && !pop.contains(t)) closePop();
    if (t.closest('[data-close-pop]')) { const f = popFor; closePop(); f && f.focus(); return; }
    const sayText = t.closest('[data-say-text]');
    if (sayText) { N.readAloud.sayText(sayText.dataset.sayText); return; }
    const sc = t.closest('[data-scroll]');
    if (sc) {
      e.preventDefault();
      const target = document.getElementById(sc.dataset.scroll);
      if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
      return;
    }
    const rb = t.closest('[data-read]');
    if (rb) {
      const scope = rb.closest('[data-read-scope]') || rb.closest('section') || document.getElementById('main');
      N.readAloud.readScope(scope);
      return;
    }
    const pl = t.closest('[data-pl]');
    if (pl) { if (pl.dataset.pl === 'stop') N.readAloud.stop(); else N.readAloud.togglePause(); return; }
    if (t.closest('#lang-toggle')) { changeSetting('lang', N.settings.lang === 'en' ? 'nb' : 'en'); N.$('#lang-toggle').focus(); return; }
    if (t.closest('#open-settings')) { openSettings(); return; }
    const dlg = t.closest('#settings');
    if (dlg) {
      if (t === dlg) { dlg.close(); return; }
      const sb = t.closest('[data-set]');
      if (sb) { changeSetting(sb.dataset.set, sb.dataset.val, dlg); return; }
      if (t.closest('[data-close]')) { dlg.close(); return; }
      if (t.closest('[data-test-voice]')) { N.readAloud.sayText(N.u('testSentence')); return; }
      if (t.closest('[data-reset-settings]')) { N.resetSettings(); N.applySettings(); chrome(); render(true); dlg.innerHTML = settingsHtml(); return; }
    }
  });
  document.addEventListener('input', function (e) {
    if (e.target.id === 'set-rate') {
      N.settings.rate = Number(e.target.value); N.saveSettings();
      const rv = document.getElementById('rate-val'); if (rv) rv.textContent = N.settings.rate.toFixed(1) + '×';
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (pop) { const f = popFor; closePop(); f && f.focus(); } else N.readAloud && N.readAloud.stop(); }
  });
  window.addEventListener('hashchange', function () { render(false); });

  /* ---------------- Start ---------------- */
  N.applySettings();
  chrome();
  render(false);
})();
