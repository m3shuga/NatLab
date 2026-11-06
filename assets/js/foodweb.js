/* =====================================================================
   NatLab – interaktivt næringsnett
   Tre visninger: Utforsk · Hva skjer hvis …? · Energipyramiden
   Pilene peker i retningen energien går: fra den som blir spist,
   til den som spiser.
   Dataene ligger i content/<tema>/naeringsnett.js og arter.js.
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;

  function fmtNum(x) {
    const loc = N.settings.lang === 'en' ? 'en-GB' : 'nb-NO';
    const v = x >= 10 ? Math.round(x) : Math.round(x * 100) / 100;
    return v.toLocaleString(loc);
  }
  N.fmtNum = fmtNum;

  function graph(web) {
    const foods = {}, eaters = {};
    web.nodes.forEach(function (n) { foods[n.id] = []; eaters[n.id] = []; });
    web.links.forEach(function (l) { if (foods[l[1]]) foods[l[1]].push(l[0]); if (eaters[l[0]]) eaters[l[0]].push(l[1]); });
    return { foods: foods, eaters: eaters };
  }

  /** Mulige følger av at noen arter forsvinner (enkel modell, to steg) */
  N.webEffects = function (web, removed) {
    const g = graph(web);
    const eff = {};
    const add = function (id, dir, why) {
      if (removed.indexOf(id) >= 0) return;
      if (!eff[id]) eff[id] = { dirs: [], why: [] };
      if (eff[id].dirs.indexOf(dir) < 0) eff[id].dirs.push(dir);
      eff[id].why.push(why);
    };
    removed.forEach(function (r) {
      g.eaters[r].forEach(function (pred) {
        const left = g.foods[pred].filter(function (x) { return removed.indexOf(x) < 0; });
        if (!left.length) add(pred, 'gone', { k: 'noFood', a: r });
        else add(pred, 'down', { k: 'lessFood', a: r });
      });
      g.foods[r].forEach(function (prey) { add(prey, 'up', { k: 'fewerEnemies', a: r }); });
    });
    // steg 2: arter som øker, beiter mer på maten sin; arter som forsvinner, gir mindre mat videre
    Object.keys(eff).forEach(function (id) {
      if (eff[id].dirs.indexOf('up') >= 0) g.foods[id].forEach(function (f) { if (!eff[f]) add(f, 'down', { k: 'moreEaten', a: id }); });
      if (eff[id].dirs.indexOf('gone') >= 0) g.eaters[id].forEach(function (p) { if (!eff[p]) add(p, 'down', { k: 'lessFood', a: id }); });
    });
    Object.keys(eff).forEach(function (id) {
      const d = eff[id].dirs;
      eff[id].dir = d.indexOf('gone') >= 0 ? 'gone' : (d.indexOf('up') >= 0 && d.indexOf('down') >= 0 ? 'mixed' : d[0]);
    });
    return eff;
  };

  const WHY = {
    noFood: { nb: 'har ikke mer mat igjen i modellen når {a} er borte', en: 'has no food left in the model when {a} is gone' },
    lessFood: { nb: 'mister {a} som matkilde', en: 'loses {a} as a food source' },
    fewerEnemies: { nb: 'blir ikke lenger spist av {a}', en: 'is no longer eaten by {a}' },
    moreEaten: { nb: 'blir spist mer fordi det blir flere av {a}', en: 'gets eaten more because there are more {a}' }
  };
  const DIR = {
    up: { sym: '↑', nb: 'Kan øke', en: 'May increase' },
    down: { sym: '↓', nb: 'Kan minke', en: 'May decrease' },
    gone: { sym: '✕', nb: 'Kan forsvinne fra området', en: 'May disappear from the area' },
    mixed: { sym: '↕', nb: 'Usikkert – påvirkes begge veier', en: 'Uncertain – affected both ways' }
  };

  N.foodweb = function (root, cfg) {
    const T = N.topics[cfg.topic];
    const page = T.pages[cfg.page];
    const state = { web: cfg.web || Object.keys(T.webs)[0], mode: cfg.mode === 'hvis' ? 'hvis' : (cfg.mode === 'pyramide' ? 'pyramide' : 'utforsk'), sel: null, removed: [], scenario: null, E0: 10000, pct: 10 };
    const S = function (id) { return T.structures[id]; };
    const nm = function (id) { return N.t(S(id).short || S(id).name); };
    const role = function (id) { return T.roles[S(id).role]; };

    function toolbar() {
      return '<div class="fw-toolbar"><div class="seg" role="group" aria-label="' + N.esc(N.t({ nb: 'Velg økosystem', en: 'Choose ecosystem' })) + '">' +
        Object.keys(T.webs).map(function (w) { return '<button type="button" data-web="' + w + '" aria-pressed="' + (state.web === w) + '">' + N.esc(N.t(T.webs[w].title)) + '</button>'; }).join('') + '</div>' +
        '<div class="tabs fw-tabs" role="tablist">' + [['utforsk', 'target', page.tabs.utforsk], ['hvis', 'compare', page.tabs.hvis], ['pyramide', 'layers', page.tabs.pyramide]].map(function (t) {
          return '<button type="button" role="tab" data-mode="' + t[0] + '" aria-selected="' + (state.mode === t[0]) + '">' + N.icon(t[1]) + N.esc(N.t(t[2])) + '</button>';
        }).join('') + '</div></div>';
    }
    function legend() {
      return '<ul class="fw-legend" aria-label="' + N.esc(N.t({ nb: 'Forklaring', en: 'Key' })) + '">' + Object.keys(T.roles).map(function (k) {
        return '<li><span class="swatch" style="--c:' + T.roles[k].color + '"></span>' + N.esc(N.t(T.roles[k].name)) + '</li>';
      }).join('') + '<li><svg width="34" height="10" aria-hidden="true"><line x1="2" y1="5" x2="26" y2="5" stroke="currentColor" stroke-width="2"/><path d="M24,1 L32,5 L24,9z" fill="currentColor"/></svg>' + N.esc(N.t({ nb: 'Pila viser hvor energien går (blir spist av)', en: 'The arrow shows where the energy goes (is eaten by)' })) + '</li></ul>';
    }

    function render() {
      root.innerHTML = '<div class="fw">' + toolbar() + '<div class="fw-layout"><div class="fw-stage" id="fw-stage"></div>' +
        '<aside class="ex-panel fw-panel" id="fw-panel" aria-live="polite" tabindex="-1" data-read-scope></aside></div></div>';
      if (state.mode === 'pyramide') renderPyramid(); else renderWeb();
    }

    /* ---------- Nettet ---------- */
    function renderWeb() {
      const web = T.webs[state.web];
      const stage = N.$('#fw-stage', root);
      let top = '';
      if (state.mode === 'hvis') {
        const sc = (page.scenarios || []).filter(function (x) { return x.web === state.web; });
        top = '<p class="act-help">' + N.fmt(page.help.hvis) + '</p><div class="scale-stops">' + sc.map(function (x) {
          return '<button type="button" class="btn btn-sm" data-scn="' + x.id + '" aria-pressed="' + (state.scenario === x.id) + '">' + N.esc(N.t(x.title)) + '</button>';
        }).join('') + '<button type="button" class="btn btn-sm btn-ghost" data-reset>' + N.icon('retry') + N.u('fwReset') + '</button></div>';
      } else top = '<p class="act-help">' + N.fmt(page.help.utforsk) + '</p>';
      stage.innerHTML = top + '<figure class="slide fw-slide"><svg class="fw-svg mode-' + state.mode + '" viewBox="0 0 1000 700" role="group" aria-label="' + N.esc(N.t(web.title)) + '">' + N.ecoWebSvg(web, { p: 'fw-' }) + '</svg>' +
        '<figcaption>' + N.esc(N.t(web.caption || web.title)) + '</figcaption></figure>' + legend();
      const svg = N.$('svg', stage);
      N.$$('.fw-node', svg).forEach(function (g) {
        const id = g.dataset.node;
        g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button');
        g.setAttribute('aria-label', nm(id) + ', ' + N.t(role(id).name));
        const act = function () { if (state.mode === 'hvis') toggleRemove(id); else select(id); };
        g.addEventListener('click', act);
        g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
      });
      if (state.mode === 'hvis') applyEffects(); else applySelection(false);
    }

    function applySelection(scroll) {
      const svg = N.$('.fw-svg', root);
      const web = T.webs[state.web];
      const g = graph(web);
      const id = state.sel;
      svg.classList.toggle('has-sel', !!id);
      N.$$('.fw-node', svg).forEach(function (n) {
        const x = n.dataset.node;
        n.classList.toggle('is-selected', x === id);
        n.classList.toggle('is-prey', !!id && g.foods[id].indexOf(x) >= 0);
        n.classList.toggle('is-pred', !!id && g.eaters[id].indexOf(x) >= 0);
      });
      N.$$('.fw-link', svg).forEach(function (l) {
        l.classList.toggle('is-in', l.dataset.to === id);
        l.classList.toggle('is-out', l.dataset.from === id);
      });
      const panel = N.$('#fw-panel', root);
      if (!id) {
        panel.innerHTML = '<div class="panel-empty"><h3>' + N.u('fwPick') + '</h3><p>' + N.u('pickPartHelp') + '</p>' + (page.intro ? '<p data-say style="color:var(--ink)">' + N.fmt(page.intro) + '</p>' : '') + '</div>';
        return;
      }
      const s = S(id), r = role(id);
      const chips = function (ids, cls) {
        if (!ids.length) return '<span class="act-help">' + N.esc(N.t(s.role === 'produsent' && cls === 'prey' ? { nb: 'Lager sin egen næring med energi fra sola (fotosyntese).', en: 'Makes its own food using energy from the sun (photosynthesis).' } : (s.role === 'nedbryter' && cls === 'prey' ? { nb: 'Døde planter, døde dyr og avføring fra alle de andre.', en: 'Dead plants, dead animals and droppings from all the others.' } : { nb: 'Ingen i denne modellen', en: 'No one in this model' }))) + '</span>';
        return '<span class="fw-chips">' + ids.map(function (x) { return '<button type="button" class="fw-chip ' + cls + '" data-goto="' + x + '">' + N.esc(nm(x)) + '</button>'; }).join('') + '</span>';
      };
      panel.innerHTML = '<div class="sp-head" style="--c:' + r.color + '"><span class="sp-dot" aria-hidden="true"></span><h3 data-say>' + N.esc(N.t(s.name)) + '</h3>' +
        '<button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button>' +
        (N.otherLang(s.name) ? '<p class="alt-name">' + N.esc(N.otherLang(s.name)) + '</p>' : '') + '</div>' +
        '<p class="sp-tag" data-say>' + N.esc(N.t(r.name)) + (s.trophic ? ' · ' + N.esc(N.t(s.trophic)) : '') + '</p>' +
        '<dl><div><dt>' + N.u('fwEats') + '</dt><dd>' + chips(graph(web).foods[id], 'prey') + '</dd></div>' +
        '<div><dt>' + N.u('fwEatenBy') + '</dt><dd>' + chips(graph(web).eaters[id], 'pred') + '</dd></div>' +
        (s.does ? '<div><dt>' + N.esc(N.t(T.panelLabels.does)) + '</dt><dd data-say>' + N.fmt(s.does) + '</dd></div>' : '') +
        (s.fact ? '<div><dt>' + N.esc(N.t(T.panelLabels.fact)) + '</dt><dd data-say>' + N.fmt(s.fact) + '</dd></div>' : '') + '</dl>' +
        (s.src && s.src.length ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(cfg.topic, s.src) + '</p>' : '');
      if (scroll && window.matchMedia('(max-width: 979px)').matches) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function select(id) { state.sel = state.sel === id ? null : id; applySelection(true); }

    function toggleRemove(id) {
      const i = state.removed.indexOf(id);
      if (i >= 0) state.removed.splice(i, 1); else state.removed.push(id);
      state.scenario = null;
      N.$$('[data-scn]', root).forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      applyEffects(true);
    }
    function applyEffects(scroll) {
      const svg = N.$('.fw-svg', root);
      const web = T.webs[state.web];
      const eff = N.webEffects(web, state.removed);
      N.$$('.fw-node', svg).forEach(function (n) {
        const id = n.dataset.node;
        const e = eff[id];
        n.classList.toggle('is-removed', state.removed.indexOf(id) >= 0);
        ['up', 'down', 'gone', 'mixed'].forEach(function (d) { n.classList.toggle('eff-' + d, !!e && e.dir === d); });
        const b = N.$('.fw-badge', n);
        const sym = state.removed.indexOf(id) >= 0 ? '−' : (e ? DIR[e.dir].sym : '');
        b.innerHTML = sym ? '<circle cx="30" cy="-30" r="14"/><text x="30" y="-30">' + sym + '</text>' : '';
      });
      N.$$('.fw-link', svg).forEach(function (l) { l.classList.toggle('is-cut', state.removed.indexOf(l.dataset.from) >= 0 || state.removed.indexOf(l.dataset.to) >= 0); });
      const panel = N.$('#fw-panel', root);
      if (!state.removed.length) {
        panel.innerHTML = '<div class="panel-empty"><h3>' + N.u('fwWhatIf') + '</h3><p data-say>' + N.fmt(page.help.hvisPanel) + '</p></div>';
        return;
      }
      const scn = (page.scenarios || []).filter(function (x) { return x.id === state.scenario; })[0];
      const groups = ['gone', 'down', 'mixed', 'up'];
      let list = '';
      groups.forEach(function (d) {
        const ids = Object.keys(eff).filter(function (k) { return eff[k].dir === d; });
        if (!ids.length) return;
        list += '<div><dt><span class="eff-sym eff-' + d + '">' + DIR[d].sym + '</span> ' + N.esc(N.t(DIR[d])) + '</dt><dd><ul class="eff-list">' + ids.map(function (id) {
          const why = eff[id].why.map(function (w) { return N.t(WHY[w.k]).replace('{a}', nm(w.a).toLowerCase()); });
          return '<li data-say><strong>' + N.esc(nm(id)) + '</strong> – ' + N.esc(why.filter(function (x, i) { return why.indexOf(x) === i; }).join('; ')) + '</li>';
        }).join('') + '</ul></dd></div>';
      });
      panel.innerHTML = '<h3>' + N.u('fwRemoved') + ': ' + N.esc(state.removed.map(nm).join(', ')) + '</h3>' +
        '<button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button>' +
        (scn ? '<div class="callout model"><p class="co-title">' + N.icon('compare') + N.esc(N.t(scn.title)) + '</p><p data-say>' + N.fmt(scn.text) + '</p></div>' : '') +
        '<dl>' + (list || '<p>' + N.esc(N.t({ nb: 'Ingen andre arter i modellen blir direkte påvirket.', en: 'No other species in the model are directly affected.' })) + '</p>') + '</dl>' +
        '<p class="act-help" style="font-size:.9rem" data-say>' + N.fmt(page.help.modelLimit) + '</p>' +
        (scn && scn.discuss ? '<div class="prompt"><span class="p-icon">' + N.icon('compare') + '</span><div><p class="co-title">' + N.u('discuss') + '</p><p data-say>' + N.fmt(scn.discuss) + '</p></div></div>' : '');
      if (scroll && window.matchMedia('(max-width: 979px)').matches) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ---------- Energipyramiden ---------- */
    function renderPyramid() {
      const web = T.webs[state.web];
      const stage = N.$('#fw-stage', root);
      stage.innerHTML = '<p class="act-help">' + N.fmt(page.help.pyramide) + '</p>' +
        '<div class="pyr-controls"><div class="set-row"><span class="set-label">' + N.u('fwStartEnergy') + '</span><div class="seg" role="group">' +
        [1000, 10000, 100000].map(function (v) { return '<button type="button" data-e0="' + v + '" aria-pressed="' + (state.E0 === v) + '">' + fmtNum(v) + ' kJ</button>'; }).join('') + '</div></div>' +
        '<div class="set-row"><label class="set-label" for="pyr-pct">' + N.u('fwPassOn') + ': <span class="mono" id="pyr-pct-val">' + state.pct + ' %</span></label>' +
        '<input type="range" id="pyr-pct" min="5" max="20" step="1" value="' + state.pct + '"><span class="set-help">' + N.u('fwPassOnHelp') + '</span></div></div>' +
        '<figure class="slide"><svg class="pyr-svg" viewBox="0 0 900 380" role="img" aria-label="' + N.esc(N.t(page.tabs.pyramide)) + '"></svg></figure>';
      drawPyramid();
      N.$('#pyr-pct', root).addEventListener('input', function (e) { state.pct = Number(e.target.value); N.$('#pyr-pct-val', root).textContent = state.pct + ' %'; drawPyramid(); });
    }
    function drawPyramid() {
      const web = T.webs[state.web];
      const chain = web.chain;
      const p = state.pct / 100;
      const E = chain.map(function (x, i) { return state.E0 * Math.pow(p, i); });
      const H = 70, gap = 14, top = 26;
      let s = '';
      for (let i = chain.length - 1; i >= 0; i--) {
        const row = chain.length - 1 - i;
        const y = top + row * (H + gap);
        const w = Math.max(10, 420 * (E[i] / E[0]));
        const id = chain[i];
        const col = role(id).color;
        s += '<rect x="' + (515 - w / 2) + '" y="' + y + '" width="' + w + '" height="' + H + '" rx="8" fill="' + col + '"/>' +
          '<g transform="translate(70 ' + (y + H / 2) + ')"><circle r="30" fill="var(--surface)" stroke="' + col + '" stroke-width="3"/>' + N.ecoIcon(id, 0, 0, 0.55) + '</g>' +
          '<text class="pyr-name" x="112" y="' + (y + H / 2 - 6) + '">' + N.esc(nm(id)) + '</text><text class="pyr-role" x="112" y="' + (y + H / 2 + 16) + '">' + N.esc(N.t(role(id).name)) + '</text>' +
          '<text class="pyr-val" x="760" y="' + (y + H / 2 + 7) + '">' + fmtNum(E[i]) + ' kJ</text>';
        if (i > 0) s += '<text class="pyr-heat" x="760" y="' + (y + H + gap / 2 + 26) + '">♨ −' + fmtNum(E[i - 1] - E[i]) + ' kJ</text>';
      }
      N.$('.pyr-svg', root).innerHTML = s;
      const panel = N.$('#fw-panel', root);
      panel.innerHTML = '<h3>' + N.u('fwCalc') + '</h3><button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button>' +
        '<ol class="calc-list">' + chain.map(function (id, i) {
          if (i === 0) return '<li data-say><strong>' + N.esc(nm(id)) + '</strong>: ' + N.esc(N.t({ nb: 'binder', en: 'captures' })) + ' <span class="mono">' + fmtNum(E[0]) + ' kJ</span> ' + N.esc(N.t({ nb: 'fra sollyset', en: 'from sunlight' })) + '</li>';
          return '<li data-say><strong>' + N.esc(nm(id)) + '</strong>: <span class="mono">' + fmtNum(E[i - 1]) + ' kJ × ' + fmtNum(p) + ' = ' + fmtNum(E[i]) + ' kJ</span></li>';
        }).join('') + '</ol>' +
        '<p data-say>' + N.fmt(page.help.pyramidePanel).replace('{pct}', String(100 - state.pct)) + '</p>' +
        '<div class="callout fact"><p class="co-title">' + N.icon('eye') + N.u('didYouKnow') + '</p><p data-say>' + N.fmt(page.help.pyramideFact) + '</p></div>';
    }

    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.dataset.web) { state.web = b.dataset.web; state.sel = null; state.removed = []; state.scenario = null; render(); return; }
      if (b.dataset.mode) { state.mode = b.dataset.mode; state.sel = null; state.removed = []; state.scenario = null; render(); return; }
      if (b.dataset.goto) { state.sel = b.dataset.goto; applySelection(false); const n = N.$('.fw-node[data-node="' + b.dataset.goto + '"]', root); n && n.focus({ preventScroll: true }); return; }
      if (b.dataset.scn) {
        const sc = page.scenarios.filter(function (x) { return x.id === b.dataset.scn; })[0];
        state.removed = sc.remove.slice(); state.scenario = sc.id;
        N.$$('[data-scn]', root).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        applyEffects(true); return;
      }
      if (b.hasAttribute('data-reset')) { state.removed = []; state.scenario = null; N.$$('[data-scn]', root).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); applyEffects(); return; }
      if (b.dataset.e0) { state.E0 = Number(b.dataset.e0); N.$$('[data-e0]', root).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); }); drawPyramid(); }
    });
    render();
  };

  /* =========================== BYGG NÆRINGSNETTET =========================== */
  N.activity = N.activity || {};
  N.activity.webbuild = function (root, cfg) {
    const T = N.topics[cfg.topic];
    const full = T.webs[cfg.web];
    const ids = cfg.nodes;
    const nodes = full.nodes.filter(function (n) { return ids.indexOf(n.id) >= 0; });
    const truth = full.links.filter(function (l) { return ids.indexOf(l[0]) >= 0 && ids.indexOf(l[1]) >= 0; }).map(function (l) { return l[0] + '>' + l[1]; });
    const web = { nodes: nodes, links: [] };
    const state = { arrows: [], pending: null, checked: false, solved: false };
    const xs = nodes.map(function (n) { return n.x; }), ys = nodes.map(function (n) { return n.y; });
    const vb = [Math.min.apply(null, xs) - 90, Math.min.apply(null, ys) - 80, Math.max.apply(null, xs) - Math.min.apply(null, xs) + 180, Math.max.apply(null, ys) - Math.min.apply(null, ys) + 170];
    const nm = function (id) { return N.t(T.structures[id].short || T.structures[id].name); };

    function linkPath(a, b) {
      const A = nodes.filter(function (n) { return n.id === a; })[0], B = nodes.filter(function (n) { return n.id === b; })[0];
      const dx = B.x - A.x, dy = B.y - A.y, d = Math.hypot(dx, dy);
      const x1 = A.x + (dx / d) * 40, y1 = A.y + (dy / d) * 40, x2 = B.x - (dx / d) * 46, y2 = B.y - (dy / d) * 46;
      const mx = (x1 + x2) / 2 - (dy / d) * 14, my = (y1 + y2) / 2 + (dx / d) * 14;
      return 'M' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' Q' + mx.toFixed(1) + ',' + my.toFixed(1) + ' ' + x2.toFixed(1) + ',' + y2.toFixed(1);
    }
    function render() {
      let ok = 0;
      const shown = state.solved ? truth.slice() : state.arrows;
      let paths = shown.map(function (k) {
        const ab = k.split('>');
        let cls = '';
        if (state.checked) { if (truth.indexOf(k) >= 0) { cls = ' is-ok'; ok++; } else cls = ' is-bad'; }
        return '<path class="fw-link user' + cls + '" d="' + linkPath(ab[0], ab[1]) + '"/>';
      }).join('');
      if (state.checked && !state.solved) paths += truth.filter(function (k) { return state.arrows.indexOf(k) < 0; }).map(function (k) { const ab = k.split('>'); return '<path class="fw-link is-miss" d="' + linkPath(ab[0], ab[1]) + '"/>'; }).join('');
      const wrong = state.arrows.filter(function (k) { return truth.indexOf(k) < 0; }).length;
      root.innerHTML = '<div class="activity"><p class="act-help">' + N.fmt(cfg.help || N.ui.webBuildHelp) + '</p>' +
        '<figure class="slide fw-slide"><svg class="fw-svg build" viewBox="' + vb.join(' ') + '" role="group" aria-label="' + N.esc(N.t(cfg.title)) + '">' +
        N.ecoWebSvg(web, { p: 'wb-' }).replace('<g class="fw-links"></g>', '<g class="fw-links">' + paths + '</g>') + '</svg></figure>' +
        '<p class="act-help" aria-live="polite" id="wb-status">' + (state.pending ? N.esc(N.t({ nb: 'Valgt: ', en: 'Selected: ' })) + '<strong>' + N.esc(nm(state.pending)) + '</strong> – ' + N.esc(N.t({ nb: 'trykk nå på den som spiser den.', en: 'now tap the one that eats it.' })) : N.esc(N.t({ nb: 'Piler tegnet: ', en: 'Arrows drawn: ' })) + state.arrows.length) + '</p>' +
        '<div class="act-bar"><button type="button" class="btn btn-primary" data-act="check">' + N.icon('check') + N.u('check') + '</button>' +
        '<button type="button" class="btn" data-act="reset">' + N.icon('retry') + N.u('tryAgain') + '</button>' +
        '<button type="button" class="btn btn-ghost" data-act="solve">' + N.icon('eye') + N.u('showSolution') + '</button></div>' +
        '<p class="act-result ' + (state.checked && !state.solved ? (ok === truth.length && !wrong ? 'good' : 'bad') : '') + '" aria-live="polite">' +
        (state.checked && !state.solved ? (ok === truth.length && !wrong ? N.u('allCorrect') : ok + ' ' + N.u('of') + ' ' + truth.length + ' ' + N.esc(N.t({ nb: 'piler riktige', en: 'arrows correct' })) + (wrong ? ', ' + wrong + ' ' + N.esc(N.t({ nb: 'feil (røde). Grå stiplete piler mangler.', en: 'wrong (red). Grey dashed arrows are missing.' })) : '.')) : '') + '</p></div>';
      N.$$('.fw-node', root).forEach(function (g) {
        const id = g.dataset.node;
        g.classList.toggle('is-pending', state.pending === id);
        g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.setAttribute('aria-label', nm(id));
        const act = function () { tap(id); };
        g.addEventListener('click', act);
        g.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
      });
    }
    function tap(id) {
      if (state.solved) return;
      state.checked = false;
      if (!state.pending) state.pending = id;
      else if (state.pending === id) state.pending = null;
      else {
        const k = state.pending + '>' + id, i = state.arrows.indexOf(k);
        if (i >= 0) state.arrows.splice(i, 1); else state.arrows.push(k);
        state.pending = null;
      }
      render();
      const n = N.$('.fw-node[data-node="' + id + '"]', root); n && n.focus({ preventScroll: true });
    }
    root.addEventListener('click', function (e) {
      const b = e.target.closest('button[data-act]');
      if (!b) return;
      if (b.dataset.act === 'check') { state.checked = true; state.pending = null; }
      if (b.dataset.act === 'reset') { state.arrows = []; state.checked = false; state.solved = false; state.pending = null; }
      if (b.dataset.act === 'solve') { state.solved = true; state.checked = true; state.pending = null; }
      render();
    });
    render();
  };
})();
