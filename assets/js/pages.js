/* =====================================================================
   NatLab – sidene i appen
   Hver side er en funksjon som lager HTML og eventuelt «monterer»
   interaktive deler etterpå.
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  const P = (N.pages = {});

  function crumbs(items) {
    return '<nav class="crumbs" aria-label="' + N.esc(N.t({ nb: 'Brødsmulesti', en: 'Breadcrumb' })) + '">' + items.map(function (it, i) {
      const last = i === items.length - 1;
      return (i ? '<span aria-hidden="true">›</span>' : '') + (last || !it[1] ? '<span' + (last ? ' aria-current="page"' : '') + '>' + N.esc(it[0]) + '</span>' : '<a href="' + it[1] + '">' + N.esc(it[0]) + '</a>');
    }).join('') + '</nav>';
  }
  P.crumbs = crumbs;

  function topicOf(id) { return N.topics[id]; }

  /** Tegning til kort: en klikkbar modell (N.diagrams) eller en figur (N.figures) */
  N.renderArt = function (id) {
    if (N.diagrams[id]) return N.renderDiagram(id, { scale: false });
    const f = N.figures[id];
    if (f) return '<svg viewBox="' + f.viewBox + '" role="img" aria-hidden="true" focusable="false">' + f.draw('art' + id + '-', N.t) + '</svg>';
    return N.icon('flask');
  };
  function defaultTools(tid) {
    return [
      { icon: 'compare', href: '#' + tid + '-sammenlign', title: N.ui.compareTitle, desc: N.ui.compareDesc },
      { icon: 'ruler', href: '#' + tid + '-storrelse', title: N.ui.scaleTitle, desc: N.ui.scaleDesc },
      { icon: 'puzzle', href: '#' + tid + '-ov', title: N.ui.practiceTitle, desc: N.ui.practiceDesc },
      { icon: 'quiz', href: '#' + tid + '-quiz', title: N.ui.quizTitle, desc: N.ui.quizDesc }
    ];
  }

  /* ---------------- Dekorativ tegning på forsiden ---------------- */
  function eyepiece() {
    const D = N.diagrams;
    const put = function (id, x, y, s, rot, cls) {
      return '<g class="' + cls + '"><g transform="translate(' + x + ' ' + y + ') rotate(' + (rot || 0) + ') scale(' + s + ')">' + D[id].draw('ep' + id + '-', N.t) + '</g></g>';
    };
    let ticks = '';
    for (let i = 0; i <= 10; i++) ticks += '<line x1="' + (130 + i * 18) + '" y1="372" x2="' + (130 + i * 18) + '" y2="' + (i % 5 === 0 ? 360 : 366) + '" stroke="var(--c-ink)" stroke-opacity=".55" stroke-width="2"/>';
    return '<svg viewBox="0 0 440 440" aria-hidden="true" focusable="false"><defs><clipPath id="ep-clip"><circle cx="220" cy="220" r="200"/></clipPath>' +
      '<radialGradient id="ep-bg" cx="50%" cy="45%" r="60%"><stop offset="0" style="stop-color:var(--slide)"/><stop offset="1" style="stop-color:var(--slide-glow)"/></radialGradient></defs>' +
      '<circle cx="220" cy="220" r="216" fill="var(--ink)" opacity=".9"/>' +
      '<circle cx="220" cy="220" r="200" fill="url(#ep-bg)"/>' +
      '<g clip-path="url(#ep-clip)">' +
      put('plantecelle', -40, 20, 0.36, -8, 'float-b') +
      put('dyrecelle', 150, 170, 0.34, 6, 'float-a') +
      put('bakterie', 40, 290, 0.21, -18, 'float-c') +
      put('bakterie', 250, 40, 0.15, 25, 'float-a') +
      put('influensa', 330, 300, 0.085, 0, 'float-b') +
      put('influensa', 70, 230, 0.06, 0, 'float-c') +
      put('bakteriofag', 360, 140, 0.075, 15, 'float-a') +
      put('meslinger', 280, 380, 0.07, 0, 'float-c') +
      '</g>' + ticks +
      '<text x="220" y="398" text-anchor="middle" font-family="var(--f-mono)" font-size="13" fill="var(--c-ink)" fill-opacity=".7">10 µm</text>' +
      '<circle cx="220" cy="220" r="200" fill="none" stroke="var(--ink)" stroke-opacity=".25" stroke-width="2"/></svg>';
  }

  /* ---------------- Forside ---------------- */
  P.home = function () {
    const isLive = function (r) { return r.status === 'klar' && N.topics[r.id]; };
    const cards = '<div class="topic-grid live-' + Math.min(4, N.registry.filter(isLive).length) + '">' + N.registry.filter(isLive).map(function (r) {
      return '<a class="topic-card" href="#' + r.id + '"><div class="tc-art">' + (r.art ? N.renderArt(r.art) : N.icon(r.icon || 'flask')) + '</div>' +
        '<span class="badge live">' + N.u('available') + '</span><h3>' + N.esc(N.t(r.title)) + '</h3><p>' + N.esc(N.t(r.text)) + '</p></a>';
    }).join('') + '</div>';
    const soonList = N.registry.filter(function (r) { return !isLive(r); });
    const soon = soonList.length ? '<div class="soon-row"><p class="eyebrow">' + N.u('comingSoon') + '</p><ul>' + soonList.map(function (r) {
      return '<li><span class="soon-icon">' + N.icon(r.icon || 'flask') + '</span><span><strong>' + N.esc(N.t(r.title)) + '</strong><small>' + N.esc(N.t(r.text)) + '</small></span></li>';
    }).join('') + '</ul></div>' : '';
    const html = '<div class="wrap page">' +
      '<section class="hero"><div><p class="eyebrow">NatLab · ' + N.u('appTagline') + '</p><h1>' + N.t(N.ui.heroTitle) + '</h1>' +
      '<p class="lead">' + N.u('heroLead') + '</p>' +
      '<div class="hero-actions"><a class="btn btn-primary" href="#celler">' + N.icon('arrow') + N.u('heroStart') + '</a>' +
      '<a class="btn" href="#mal">' + N.icon('target') + N.u('heroGoals') + '</a></div>' +
      '<p style="margin-top:1rem;font-size:.92rem;color:var(--muted);display:flex;gap:.45rem;align-items:center">' + N.icon('lock') + N.u('privacyShort') + '</p></div>' +
      '<div class="eyepiece">' + eyepiece() + '</div></section>' +
      '<section style="display:grid;gap:1rem"><div class="section-title"><h2>' + N.u('topicsTitle') + '</h2><p style="color:var(--muted)">' + N.u('topicsLead') + '</p></div>' +
      cards + soon + '</section>' +
      '<section style="display:grid;gap:1rem"><h2>' + N.u('shortcuts') + '</h2><div class="quick-links">' +
      N.registry.filter(isLive).map(function (r) {
        return '<a class="quick-link" href="#' + r.id + '-quiz"><span class="qi">' + N.icon('quiz') + '</span><span>' + N.u('quizTitle') + '<small>' + N.esc(N.t(r.title)) + '</small></span></a>';
      }).join('') +
      '<a class="quick-link" href="#ordliste"><span class="qi">' + N.icon('book') + '</span><span>' + N.u('navGlossary') + '<small>' + N.t({ nb: 'Fagord på norsk og engelsk', en: 'Key terms in Norwegian and English' }) + '</small></span></a>' +
      '<a class="quick-link" href="#mal"><span class="qi">' + N.icon('target') + '</span><span>' + N.u('navGoals') + '<small>' + N.t({ nb: 'Hva skal du kunne?', en: 'What should you know?' }) + '</small></span></a>' +
      '</div></section></div>';
    return { title: null, html: html };
  };

  /* ---------------- Temaside ---------------- */
  P.topic = function (tid) {
    const T = topicOf(tid);
    const orgs = Object.keys(T.organisms || {}).map(function (k) {
      const o = T.organisms[k];
      return '<a class="org-card" href="#' + tid + '-' + k + '"><div class="oc-art">' + N.renderArt(o.art || o.diagrams[0]) + '</div>' +
        '<div class="oc-body"><span class="specimen">' + N.esc(T.cardLabel ? N.t(T.cardLabel) : N.u('specimen')) + ' <b>' + o.code + '</b>' + (o.size ? '<span class="nu">' + N.esc(N.t(o.size)) + '</span>' : '') + '</span>' +
        '<h3>' + N.esc(N.t(o.title)) + '</h3><p>' + N.esc(N.t(o.sub)) + '</p></div></a>';
    }).join('');
    const g = T.goals;
    let goals = '';
    if (g) {
      const items = [];
      g.groups.forEach(function (gr) { gr.items.forEach(function (it) { items.push(it); }); });
      goals = '<section class="goals-box"><div class="section-title"><h2 style="font-size:1.25rem">' + N.u('topicGoals') + '</h2><a href="#mal">' + N.u('allGoals') + ' →</a></div><ul>' +
        items.slice(0, 6).map(function (it) { return '<li>' + N.icon('target') + '<span>' + N.fmt(it.text) + '</span></li>'; }).join('') +
        (items.length > 6 ? '<li style="color:var(--muted)">+ ' + (items.length - 6) + ' ' + N.t({ nb: 'flere', en: 'more' }) + '</li>' : '') + '</ul></section>';
    }
    const html = '<div class="wrap page">' +
      '<header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title)]]) +
      '<span class="specimen">NAT · ' + N.esc(N.t(T.title)) + ' · <b>' + Object.keys(T.organisms).length + '</b> ' + N.t(T.cardCount || { nb: 'prøver', en: 'specimens' }) + '</span>' +
      '<h1>' + N.esc(N.t(T.title)) + '</h1><p class="lead">' + N.fmt(T.lead) + '</p></header>' +
      goals +
      '<section style="display:grid;gap:1rem"><div><h2>' + N.esc(N.t(T.cardsTitle || N.ui.organisms)) + '</h2><p style="color:var(--muted);margin-top:.3rem">' + N.fmt(T.cardsLead || N.ui.organismsLead) + '</p></div><div class="org-grid">' + orgs + '</div></section>' +
      '<section style="display:grid;gap:1rem"><h2>' + N.u('tools') + '</h2><div class="tool-row">' +
      (T.tools || defaultTools(tid)).map(function (x) {
        return '<a class="quick-link" href="' + x.href + '"><span class="qi">' + N.icon(x.icon) + '</span><span>' + N.esc(N.t(x.title)) + '<small>' + N.esc(N.t(x.desc)) + '</small></span></a>';
      }).join('') +
      '</div></section>' +
      (T.featured ? '<section style="display:grid;gap:1rem"><div><h2>' + N.u('learnMore') + '</h2><p style="color:var(--muted);margin-top:.3rem">' + N.u('learnMoreLead') + '</p></div>' + N.resourceCards(tid, T.featured) + '</section>' : '') +
      '</div>';
    return { title: N.t(T.title), html: html };
  };

  /* ---------------- Organisme: utforsk / les ---------------- */
  P.organism = function (tid, oid, mode, selectPart) {
    const T = topicOf(tid);
    const o = T.organisms[oid];
    const base = '#' + tid + '-' + oid;
    const hasModel = !!(o.diagrams && o.diagrams.length);
    if (!hasModel) mode = 'les';
    const practiceHref = o.practiceHref || (hasModel ? '#' + tid + '-ov-merk-' + o.diagrams[0] : '#' + tid + '-ov');
    const head = '<header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title), '#' + tid], [N.t(o.title)]]) +
      '<span class="specimen">' + N.esc(T.cardLabel ? N.t(T.cardLabel) : N.u('specimen')) + ' <b>' + o.code + '</b><span>' + N.esc(N.t(o.title)) + '</span>' + (o.size ? '<span>' + N.u('sizeLabel') + ': <span class="nu">' + N.esc(N.t(o.size)) + '</span></span>' : '') + '</span>' +
      '<h1>' + N.esc(N.t(o.title)) + '</h1><p class="lead">' + N.fmt(o.lead) + '</p></header>' +
      '<nav class="tabs" aria-label="' + N.esc(N.t(o.title)) + '">' +
      (hasModel ? '<a href="' + base + '"' + (mode === 'utforsk' ? ' aria-current="page"' : '') + '>' + N.icon('target') + N.u('explore') + '</a>' : '') +
      '<a href="' + base + '-les"' + (mode === 'les' ? ' aria-current="page"' : '') + '>' + N.icon('book') + N.u('read') + '</a>' +
      (o.extraTabs || []).map(function (x) { return '<a href="' + x.href + '">' + N.icon(x.icon || 'arrow') + N.esc(N.t(x.label)) + '</a>'; }).join('') +
      '<a href="' + practiceHref + '">' + N.icon('puzzle') + N.u('practiceThis') + '</a></nav>';
    const html = '<div class="wrap page">' + head + '<div id="org-body"></div></div>';
    return {
      title: N.t(o.title),
      html: html,
      mount: function (main) {
        const body = N.$('#org-body', main);
        if (mode === 'les') {
          body.innerHTML = N.renderArticle(tid, o.page);
          N.wireArticle(body);
        } else {
          N.explorer(body, { topic: tid, diagrams: o.diagrams, modelNames: o.modelNames || {}, compareWith: o.compareWith, compareLabel: o.compareLabel, intro: o.intro, select: selectPart, legendTitle: o.legendTitle });
        }
      }
    };
  };

  /* ---------------- Egne sider (artikkel, næringsnett, feltarbeid) ---------------- */
  P.custom = function (tid, pid, sub) {
    const T = topicOf(tid);
    const c = T.pages[pid];
    if (c.type === 'foodweb') return P.foodweb(tid, pid, sub);
    if (c.type === 'fieldwork') return P.fieldwork(tid, pid);
    return P.compare(tid, pid);
  };
  P.foodweb = function (tid, pid, sub) {
    const T = topicOf(tid);
    const c = T.pages[pid];
    return {
      title: N.t(c.title),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title), '#' + tid], [N.t(c.title)]]) +
        '<h1>' + N.esc(N.t(c.title)) + '</h1><p class="lead">' + N.fmt(c.lead) + '</p></header><div id="fw-body"></div>' +
        (c.page ? '<div id="fw-article"></div>' : '') + '</div>',
      mount: function (main) {
        N.foodweb(N.$('#fw-body', main), { topic: tid, page: pid, mode: sub || 'utforsk', web: c.defaultWeb });
        if (c.page) { const a = N.$('#fw-article', main); a.innerHTML = N.renderArticle(tid, c.page); N.wireArticle(a); }
      }
    };
  };
  P.fieldwork = function (tid, pid) {
    const T = topicOf(tid);
    const c = T.pages[pid];
    return {
      title: N.t(c.title),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title), '#' + tid], [N.t(c.title)]]) +
        '<h1>' + N.esc(N.t(c.title)) + '</h1><p class="lead">' + N.fmt(c.lead) + '</p></header><div id="fwk-intro"></div><div id="fwk-sheet"></div></div>',
      mount: function (main) {
        const a = N.$('#fwk-intro', main); a.innerHTML = N.renderArticle(tid, c.page); N.wireArticle(a);
        N.fieldSheet(N.$('#fwk-sheet', main), c.sheet);
      }
    };
  };

  /* ---------------- Sammenligning / artikkelside ---------------- */
  P.compare = function (tid, pid) {
    const T = topicOf(tid);
    const c = T.pages[pid || 'sammenlign'];
    return {
      title: N.t(c.title),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title), '#' + tid], [N.t(c.title)]]) +
        '<h1>' + N.esc(N.t(c.title)) + '</h1><p class="lead">' + N.fmt(c.lead) + '</p></header><div id="cmp-body"></div></div>',
      mount: function (main) { const b = N.$('#cmp-body', main); b.innerHTML = N.renderArticle(tid, c.page); N.wireArticle(b); }
    };
  };

  /* ---------------- Størrelser ---------------- */
  P.scale = function (tid) {
    const T = topicOf(tid);
    return {
      title: N.u('scaleTitle'),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title), '#' + tid], [N.u('scaleTitle')]]) +
        '<h1>' + N.u('scaleTitle') + '</h1><p class="lead">' + N.u('scaleLead') + '</p></header><div id="scale-body"></div></div>',
      mount: function (main) { N.scaleView(N.$('#scale-body', main), T.scale); }
    };
  };

  /* ---------------- Øving ---------------- */
  function modelName(d) { return N.t(N.diagrams[d].title).replace(/^(Modell av (en|et) |Model of (an|a) )/i, ''); }
  P.practice = function (tid) {
    const T = topicOf(tid);
    const pr = T.practice;
    const list = function (kind) {
      return '<div class="scale-stops">' + pr[kind].map(function (d) { return '<a class="btn btn-sm" href="#' + tid + '-ov-' + kind + '-' + d + '">' + N.esc(modelName(d)) + '</a>'; }).join('') + '</div>';
    };
    const named = function (route, key) {
      return '<div class="scale-stops">' + pr[key || route].map(function (o) { return '<a class="btn btn-sm" href="#' + tid + '-ov-' + route + '-' + o.id + '">' + N.esc(N.t(o.title)) + '</a>'; }).join('') + '</div>';
    };
    const card = function (icon, title, desc, inner) {
      return '<section class="card-plain"><div style="display:flex;gap:.8rem;align-items:center"><span class="qi" style="width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:var(--brand-soft);color:var(--brand)">' + N.icon(icon) + '</span>' +
        '<div><h2 style="font-size:1.25rem">' + title + '</h2><p style="color:var(--muted)">' + desc + '</p></div></div>' + inner + '</section>';
    };
    const html = '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title), '#' + tid], [N.u('practiceTitle')]]) +
      '<h1>' + N.u('practiceTitle') + '</h1><p class="lead">' + N.u('practiceLead') + '</p></header>' +
      '<div style="display:grid;gap:1rem;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr))">' +
      (pr.merk ? card('target', N.u('labelTitle'), N.u('labelDesc'), list('merk')) : '') +
      (pr.koble ? card('puzzle', N.u('matchTitle'), N.u('matchDesc'), list('koble')) : '') +
      (pr.grupper ? card('layers', N.u('binsTitle'), N.u('binsDesc'), named('grupper')) : '') +
      (pr.par ? card('puzzle', N.u('pairsTitle'), N.u('pairsDesc'), named('par')) : '') +
      (pr.nett ? card('compare', N.u('webBuildTitle'), N.u('webBuildDesc'), named('nett')) : '') +
      (pr.sort ? card('compare', N.u('sortTitle'), N.u('sortDesc'), '<div><a class="btn btn-sm" href="#' + tid + '-ov-sorter">' + N.icon('arrow') + N.u('open') + '</a></div>') : '') +
      (pr.order ? card('layers', N.u('orderTitle'), N.u('orderHelp'), named('rekkefolge', 'order')) : '') +
      '</div>' +
      '<p><a class="btn btn-primary" href="#' + tid + '-quiz">' + N.icon('quiz') + N.u('quizTitle') + '</a></p></div>';
    return { title: N.u('practiceTitle'), html: html };
  };

  P.activity = function (tid, kind, arg) {
    const T = topicOf(tid);
    let title = '', sub = '', mount;
    const levelBar = function (redraw, diagramId) {
      return function (main) {
        const def = N.diagrams[diagramId];
        if (!def.parts.some(function (pt) { return N.partLevel(def, pt) === 'deeper'; })) {
          N.$('#act-level', main).remove();
          redraw(N.$('#act-body', main), 'basic');
          return;
        }
        let level = N.settings.level;
        const bar = N.$('#act-level', main);
        const draw = function () {
          bar.innerHTML = '<span class="label" style="font-size:.85rem;color:var(--muted);font-weight:700">' + N.u('levelLabel') + '</span><div class="seg" role="group"><button type="button" data-lv="basic" aria-pressed="' + (level === 'basic') + '">' + N.u('levelBasic') + '</button><button type="button" data-lv="deeper" aria-pressed="' + (level === 'deeper') + '">' + N.u('levelDeeper') + '</button></div>';
          const cur = N.$('#act-body', main); const fresh = cur.cloneNode(false); cur.parentNode.replaceChild(fresh, cur);
          redraw(fresh, level);
        };
        bar.addEventListener('click', function (e) { const b = e.target.closest('[data-lv]'); if (b) { level = b.dataset.lv; draw(); } });
        draw();
      };
    };
    if (kind === 'merk' && N.diagrams[arg]) {
      title = N.u('labelTitle'); sub = modelName(arg);
      mount = levelBar(function (el, level) { N.activity.label(el, { diagram: arg, level: level }); }, arg);
    } else if (kind === 'koble' && N.diagrams[arg]) {
      title = N.u('matchTitle'); sub = modelName(arg);
      mount = levelBar(function (el, level) { N.activity.match(el, { diagram: arg, level: level }); }, arg);
    } else if (kind === 'sorter') {
      title = N.u('sortTitle');
      mount = function (main) { N.$('#act-level', main).remove(); N.activity.sort(N.$('#act-body', main), { topic: tid, rows: T.practice.sort.rows, cols: T.practice.sort.cols }); };
    } else if (kind === 'grupper' || kind === 'par' || kind === 'nett') {
      const o = (T.practice[kind] || []).filter(function (x) { return x.id === arg; })[0];
      if (!o) return null;
      title = N.u({ grupper: 'binsTitle', par: 'pairsTitle', nett: 'webBuildTitle' }[kind]); sub = N.t(o.title);
      mount = function (main) {
        N.$('#act-level', main).remove();
        const el = N.$('#act-body', main);
        if (kind === 'grupper') N.activity.bins(el, o);
        else if (kind === 'par') N.activity.pairs(el, o);
        else N.activity.webbuild(el, Object.assign({ topic: tid }, o));
      };
    } else if (kind === 'rekkefolge') {
      const o = T.practice.order.filter(function (x) { return x.id === arg; })[0];
      if (!o) return null;
      title = N.u('orderTitle'); sub = N.t(o.title);
      mount = function (main) { N.$('#act-level', main).remove(); N.activity.order(N.$('#act-body', main), o); };
    } else return null;
    // andre modeller av samme type
    let others = '';
    if (kind === 'merk' || kind === 'koble') {
      others = '<div class="scale-stops" aria-label="' + N.esc(N.u('chooseModel')) + '">' + T.practice[kind].map(function (d) {
        return '<a class="btn btn-sm" href="#' + tid + '-ov-' + kind + '-' + d + '"' + (d === arg ? ' aria-current="page" style="border-color:var(--brand);background:var(--brand-soft)"' : '') + '>' + N.esc(modelName(d)) + '</a>';
      }).join('') + '</div>';
    }
    return {
      title: title + (sub ? ' – ' + sub : ''),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title), '#' + tid], [N.u('practiceTitle'), '#' + tid + '-ov'], [title]]) +
        '<h1>' + N.esc(title) + (sub ? ': <span style="color:var(--brand)">' + N.esc(sub) + '</span>' : '') + '</h1>' + others +
        '<div class="ex-toolbar" id="act-level"></div></header><div id="act-body"></div></div>',
      mount: mount
    };
  };

  /* ---------------- Quiz ---------------- */
  P.quiz = function (tid, set) {
    const T = topicOf(tid);
    return {
      title: N.u('quizTitle'),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.t(T.title), '#' + tid], [N.u('quizTitle')]]) +
        '<h1>' + N.u('quizTitle') + '</h1><p class="lead">' + N.u('quizLead') + '</p></header><div id="quiz-body"></div></div>',
      mount: function (main) { N.quiz(N.$('#quiz-body', main), tid, { set: set }); }
    };
  };

  /* ---------------- Læringsmål ---------------- */
  P.goals = function () {
    let n = 0;
    const blocks = N.registry.filter(function (r) { return r.status === 'klar' && N.topics[r.id] && N.topics[r.id].goals; }).map(function (r) {
      const T = N.topics[r.id], g = T.goals;
      n = 0;
      return '<section class="goal-topic" id="mal-' + r.id + '" data-read-scope><div class="section-title"><h2 data-say>' + N.esc(N.t(T.title)) + '</h2>' +
        '<button type="button" class="read-btn" data-read="section">' + N.icon('speaker') + N.u('readAloud') + '</button></div>' +
        (g.intro ? '<p data-say>' + N.fmt(g.intro) + '</p>' : '') +
        g.groups.map(function (gr) {
          return '<div class="goal-group"><h3 data-say>' + N.esc(N.t(gr.title)) + '</h3><ol class="goal-list">' + gr.items.map(function (it) {
            n++;
            return '<li><span class="gnum">' + n + '</span><span><span data-say>' + N.fmt(it.text) + '</span>' +
              (it.link ? ' <a class="glink" href="' + it.link + '">' + N.u('goToPage') + ' →</a>' : '') +
              (it.level === 'deeper' ? ' <span class="level-note">(' + N.u('deeperNote') + ')</span>' : '') + '</span></li>';
          }).join('') + '</ol></div>';
        }).join('') +
        (g.official ? '<details class="deeper"><summary>' + N.icon('book') + N.u('officialAims') + '</summary><div class="deeper-body"><div class="official"><ul>' +
          g.official.map(function (a) { return '<li>' + N.esc(N.t(a)) + '</li>'; }).join('') + '</ul><p class="src-meta">' + N.u('officialNote') + '</p></div></div></details>' : '') +
        '</section>';
    }).join('');
    return {
      title: N.u('navGoals'),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.u('navGoals')]]) + '<h1>' + N.u('navGoals') + '</h1><p class="lead">' + N.u('goalsLead') + '</p></header>' + blocks +
        N.registry.filter(function (r) { return r.status !== 'klar'; }).map(function (r) { return '<section class="goal-topic" style="border-style:dashed;background:transparent"><h2 style="color:var(--muted)">' + N.esc(N.t(r.title)) + '</h2><p style="color:var(--muted)">' + N.u('comingSoon') + '</p></section>'; }).join('') + '</div>'
    };
  };

  /* ---------------- Ordliste ---------------- */
  P.glossary = function () {
    const entries = [];
    Object.keys(N.topics).forEach(function (tid) {
      const g = N.topics[tid].glossary || {};
      Object.keys(g).forEach(function (id) { entries.push(Object.assign({ id: id, topic: tid }, g[id])); });
    });
    const coll = N.settings.lang === 'en' ? 'en' : 'nb';
    entries.sort(function (a, b) { return N.t(a.name).localeCompare(N.t(b.name), coll); });
    const where = function (e) {
      const T = N.topics[e.topic];
      if (!T.structures || !T.structures[e.id]) return '';
      const org = Object.keys(T.organisms).filter(function (k) { return T.organisms[k].diagrams.some(function (d) { return N.diagrams[d].parts.some(function (p) { return p.id === e.id; }); }); })[0];
      return org ? '<a href="#' + e.topic + '-' + org + '-del-' + e.id + '">' + N.u('seeInModel') + ' →</a>' : '';
    };
    const html = '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.u('navGlossary')]]) + '<h1>' + N.u('navGlossary') + '</h1><p class="lead">' + N.u('glossaryLead') + '</p>' +
      '<label class="search" for="gloss-search">' + N.icon('search') + '<span class="sr-only">' + N.u('searchPlaceholder') + '</span><input id="gloss-search" type="search" placeholder="' + N.esc(N.u('searchPlaceholder')) + '" autocomplete="off"></label></header>' +
      '<div class="gloss-list" id="gloss-list">' + entries.map(function (e) {
        const alt = N.otherLang(e.name);
        return '<article class="gloss-item" id="ord-' + e.id + '" data-search="' + N.esc((e.name.nb + ' ' + e.name.en + ' ' + N.plain(e.def)).toLowerCase()) + '" data-read-scope>' +
          '<h3 data-say>' + N.esc(N.t(e.name)) + '</h3>' + (alt ? '<p class="en">' + N.esc(alt) + '</p>' : '') + '<p data-say>' + N.fmt(e.def) + '</p>' +
          '<p style="display:flex;gap:.8rem;flex-wrap:wrap;align-items:center"><button type="button" class="read-btn" data-read="section">' + N.icon('speaker') + N.u('readAloud') + '</button>' + where(e) + '</p></article>';
      }).join('') + '</div><p id="gloss-none" hidden>' + N.u('noResults') + '</p></div>';
    return {
      title: N.u('navGlossary'), html: html,
      mount: function (main) {
        const inp = N.$('#gloss-search', main);
        inp.addEventListener('input', function () {
          const q = inp.value.trim().toLowerCase();
          let shown = 0;
          N.$$('.gloss-item', main).forEach(function (el) { const hit = !q || el.dataset.search.indexOf(q) >= 0; el.hidden = !hit; if (hit) shown++; });
          N.$('#gloss-none', main).hidden = shown > 0;
        });
      }
    };
  };

  /* ---------------- Personvern ---------------- */
  P.privacy = function () {
    const c = N.content && N.content.privacy;
    return {
      title: N.u('privacy'),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.u('privacy')]]) + '<h1>' + N.u('privacy') + '</h1><p class="lead">' + N.fmt(c.lead) + '</p></header>' +
        '<div class="prose" data-read-scope><p><button type="button" class="read-btn" data-read="section">' + N.icon('speaker') + N.u('readAloud') + '</button></p>' +
        c.sections.map(function (s) { return '<section style="display:grid;gap:.5rem"><h2 data-say style="font-size:1.3rem">' + N.esc(N.t(s.title)) + '</h2>' + s.text.map(function (p) { return '<p data-say>' + N.fmt(p) + '</p>'; }).join('') + '</section>'; }).join('') +
        '</div></div>'
    };
  };

  /* ---------------- Kilder og bilder ---------------- */
  P.credits = function () {
    let media = '', sources = '';
    Object.keys(N.topics).forEach(function (tid) {
      const T = N.topics[tid];
      Object.keys(T.media || {}).forEach(function (k) {
        const m = T.media[k];
        media += '<div class="credit-item"><img src="' + m.file + '" alt="" loading="lazy" width="96" height="72"><p><strong>' + N.esc(m.title) + '</strong><br>' +
          N.t({ nb: 'Fotograf/opphav', en: 'Author' }) + ': ' + N.esc(m.author) + '<br>' + N.t({ nb: 'Lisens', en: 'Licence' }) + ': ' +
          (m.licenseUrl ? '<a href="' + N.esc(m.licenseUrl) + '" target="_blank" rel="noopener">' + N.esc(m.license) + '</a>' : N.esc(m.license)) +
          ' · <a href="' + N.esc(m.url) + '" target="_blank" rel="noopener">' + N.esc(m.source) + '</a></p></div>';
      });
      const ids = Object.keys(T.sources || {});
      sources += '<h3>' + N.esc(N.t(T.title)) + '</h3><ul style="margin:0;padding-left:1.2rem;display:grid;gap:.3rem">' + ids.map(function (id) {
        const s = T.sources[id];
        return '<li><a href="' + N.esc(s.url) + '" target="_blank" rel="noopener">' + N.esc(s.title) + '</a> – ' + N.esc(s.publisher) + (s.login ? ' (' + N.u('requiresLogin') + ')' : '') + '</li>';
      }).join('') + '</ul>';
    });
    const fonts = [
      ['Atkinson Hyperlegible', 'Braille Institute of America', 'SIL Open Font License 1.1'],
      ['Atkinson Hyperlegible Mono', 'Braille Institute of America', 'SIL Open Font License 1.1'],
      ['Bricolage Grotesque', 'Mathieu Triay', 'SIL Open Font License 1.1'],
      ['OpenDyslexic', 'Abbie Gonzalez', 'SIL Open Font License 1.1']
    ];
    return {
      title: N.u('credits'),
      html: '<div class="wrap page"><header class="page-head">' + crumbs([[N.u('home'), '#'], [N.u('credits')]]) + '<h1>' + N.u('credits') + '</h1><p class="lead">' + N.u('creditsLead') + '</p></header>' +
        '<section class="card-plain"><h2>' + N.u('drawings') + '</h2><p>' + N.u('drawingsText') + '</p></section>' +
        '<section class="card-plain"><h2>' + N.u('images') + '</h2><div class="credits-list">' + media + '</div></section>' +
        '<section class="card-plain"><h2>' + N.u('sources') + '</h2>' + sources + '</section>' +
        '<section class="card-plain"><h2>' + N.u('curriculum') + '</h2><p>Læreplan i naturfag (NAT01-05). Kunnskapsdepartementet / Utdanningsdirektoratet. <a href="https://www.udir.no/lk20/NAT01-05" target="_blank" rel="noopener">udir.no/lk20/NAT01-05</a></p></section>' +
        '<section class="card-plain"><h2>' + N.u('fonts') + '</h2><ul style="margin:0;padding-left:1.2rem">' + fonts.map(function (f) { return '<li><strong>' + f[0] + '</strong> – ' + f[1] + ' – ' + f[2] + '</li>'; }).join('') + '</ul>' +
        '<p style="font-size:.9rem;color:var(--muted)">' + N.t({ nb: 'Lisensfilene ligger i mappen assets/fonts/lisenser.', en: 'The licence files are in the folder assets/fonts/lisenser.' }) + '</p></section></div>'
    };
  };

  P.notFound = function () {
    return { title: N.u('notFound'), html: '<div class="wrap page"><header class="page-head"><h1>' + N.u('notFound') + '</h1><p class="lead">' + N.u('notFoundText') + '</p></header><p><a class="btn btn-primary" href="#">' + N.icon('back') + N.u('home') + '</a></p></div>' };
  };
})();
