/* =====================================================================
   NatLab – interaktive verktøy for temaet «Klimaendringer»
   ---------------------------------------------------------------------
   Sidetyper (N.pageTypes), brukes med type: '…' i T.pages:
     carbon     – karbonkretsløpet: utforsk · raskt og langsomt · hva skjer hvis?
     greenhouse – drivhuseffekten: utforsk · hva skjer hvis?
     footprint  – klimafotavtrykk (modell, ikke fasit)
   Nye byggeklosser i artikler (N.articleBlocks):
     { chart: 'keeling' | 'temperatur' | 'iskjerne' }
     { beforeafter: { items: [{ photo, label }], caption } }
     { claims: [{ claim, verdict: 'myte' | 'fakta' | 'delvis', explain, src }] }
     { reading: { articles: [...] } }  – helhetslesing av en forskningsartikkel
   Måledataene ligger i content/klima/data.js (NatLab.klimaData).
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  N.pageTypes = N.pageTypes || {};
  N.articleBlocks = N.articleBlocks || {};
  N.articleWirers = N.articleWirers || [];
  const o = (nb, en) => ({ nb: nb, en: en });
  const T = (x) => N.t(x);
  const f1 = (n) => Math.round(n * 10) / 10;
  const loc = () => (N.settings.lang === 'en' ? 'en-GB' : 'nb-NO');
  const num = (v, d) => Number(v).toLocaleString(loc(), { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 });
  const reduced = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const SVGNS = 'http://www.w3.org/2000/svg';
  const L = {
    explore: o('Utforsk', 'Explore'), fastSlow: o('Raskt og langsomt', 'Fast and slow'), whatIf: o('Hva skjer hvis?', 'What if?'),
    showNums: o('Vis tall', 'Show numbers'), pause: o('Pause', 'Pause'), play: o('Spill av', 'Play'),
    reset: o('Tilbakestill', 'Reset'), yourChoice: o('Ditt valg', 'Your choice')
  };

  /* -------------------- felles: animasjonsløkke -------------------- */
  function loop(el, step) {
    let last = 0, paused = reduced();
    function tick(t) {
      if (!el.isConnected) return;
      const dt = last ? Math.min(0.05, (t - last) / 1000) : 0;
      last = t;
      if (!paused) step(dt);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    return {
      get paused() { return paused; },
      set paused(v) { paused = !!v; last = 0; }
    };
  }
  function el(tag, attrs) {
    const e = document.createElementNS(SVGNS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function levelSeg(state) {
    return '<span class="label" id="cm-lvl">' + N.u('levelLabel') + '</span><div class="seg" role="group" aria-labelledby="cm-lvl">' +
      '<button type="button" data-level="basic" aria-pressed="' + (state.level === 'basic') + '">' + N.u('levelBasic') + '</button>' +
      '<button type="button" data-level="deeper" aria-pressed="' + (state.level === 'deeper') + '">' + N.u('levelDeeper') + '</button></div>';
  }
  function modeTabs(modes, cur) {
    return '<div class="tabs cm-tabs" role="tablist">' + modes.map(function (m) {
      return '<button type="button" role="tab" data-mode="' + m[0] + '" aria-selected="' + (m[0] === cur) + '">' + N.icon(m[1]) + N.esc(T(m[2])) + '</button>';
    }).join('') + '</div>';
  }
  function emptyPanel(title, text, extra) {
    return '<div class="panel-empty"><h3>' + N.esc(T(title)) + '</h3><p data-say>' + N.fmt(text) + '</p>' + (extra || '') + '</div>';
  }
  function legendHtml(items) {
    return '<ul class="cm-legend">' + items.map(function (it) { return '<li><span class="cm-sw" style="--c:' + it[0] + '"></span>' + N.esc(T(it[1])) + '</li>'; }).join('') + '</ul>';
  }

  /* =================================================================
     1) KARBONKRETSLØPET
     ================================================================= */
  // Enkel karbonmodell (to «bokser») – se forklaring i content/klima/sider.js
  N.carbonProjection = function (opt) {
    const E0f = 10, E0l = 1.5;           // Gt C/år i dag (fossilt + avskoging)
    const ppm0 = 427.4, pre = 280, GT = 2.12; // 2,12 Gt C = 1 ppm
    let A = (ppm0 - pre) * GT, Af = 229 / 312.5 * A, As = A - Af;
    const Tnow = 1.35, tcre = 0.002;      // °C per Gt C (CO2 + andre gasser, forenklet)
    const out = [];
    let cum = 0, T15 = null;
    for (let y = 2026; y <= 2100; y++) {
      const E = E0f * opt.fossil / 100 + E0l * opt.forest / 100 - opt.plant - opt.capture;
      Af += 0.7 * E - 0.025 * Af;
      As += 0.3 * E - 0.002 * As;
      cum += E;
      const t = Tnow + tcre * cum;
      if (T15 === null && t >= 1.5) T15 = y;
      out.push([y, pre + (Af + As) / GT, t, E]);
    }
    return { series: out, t15: T15 };
  };

  N.pageTypes.carbon = function (root, cfg) {
    const topic = cfg.topic, page = cfg.page;
    const def = N.diagrams.karbonkretslop;
    const state = { mode: ['utforsk', 'tid', 'hvis'].indexOf(cfg.sub) >= 0 ? cfg.sub : 'utforsk', level: N.settings.level, pins: true, nums: false, selected: null, speed: 'fast',
      fossil: 100, forest: 100, plant: 0, capture: 0 };
    let anim = null, dots = [];

    function render() {
      const tools = '<div class="ex-toolbar">' + levelSeg(state) +
        '<button type="button" class="btn btn-sm" data-pins aria-pressed="' + state.pins + '">' + N.icon('target') + N.u('showNumbers') + '</button>' +
        '<button type="button" class="btn btn-sm" data-nums aria-pressed="' + state.nums + '">' + N.icon('chart') + N.esc(T(L.showNums)) + '</button>' +
        '<button type="button" class="btn btn-sm" data-anim aria-pressed="true">' + N.icon('pause') + N.esc(T(L.pause)) + '</button></div>';
      const speedSeg = state.mode === 'tid' ? '<div class="seg cm-speed" role="group" aria-label="' + N.esc(T(L.fastSlow)) + '">' + [['fast', page.speeds.fast.name], ['slow', page.speeds.slow.name], ['human', page.speeds.human.name]].map(function (x) {
        return '<button type="button" data-speed="' + x[0] + '" aria-pressed="' + (state.speed === x[0]) + '">' + N.esc(T(x[1])) + '</button>';
      }).join('') + '</div>' : '';
      root.innerHTML = '<div class="cm">' + modeTabs([['utforsk', 'target', L.explore], ['tid', 'retry', L.fastSlow], ['hvis', 'compare', L.whatIf]], state.mode) +
        '<div class="fw-layout"><div class="cm-stage"><p class="act-help">' + N.fmt(page.help[state.mode]) + '</p>' + speedSeg + tools +
        '<figure class="slide cm-slide' + (state.nums ? ' show-nums' : '') + '">' + N.renderDiagram('karbonkretslop', { interactive: true, pins: state.pins, level: state.level }) +
        '<figcaption>' + N.esc(T(page.caption)) + '</figcaption></figure>' +
        legendHtml([[N.klimaArt.KIND.fast, page.legend.fast], [N.klimaArt.KIND.ocean, page.legend.ocean], [N.klimaArt.KIND.slow, page.legend.slow], [N.klimaArt.KIND.human, page.legend.human]]) +
        (state.level === 'basic' ? '<p class="act-help" style="font-size:.92rem">' + N.u('deeperPartsHidden') + '</p>' : '') +
        '</div><aside class="ex-panel" id="cm-panel" aria-live="polite" tabindex="-1" data-read-scope></aside></div></div>';
      const svg = N.$('svg.diagram', root);
      N.wireDiagram(svg, { interactive: true, onSelect: select });
      const sm = N.$('.smil-dots', svg); if (sm) sm.remove();
      setupDots(svg);
      applyMode(svg);
      panel();
    }

    function flowMult(id) {
      if (state.mode !== 'hvis') return 1;
      if (id === 'forbrenning') return state.fossil / 100;
      if (id === 'avskoging') return state.forest / 100;
      return 1;
    }
    function setupDots(svg) {
      const g = el('g', { class: 'cm-dots', 'aria-hidden': 'true' });
      svg.insertBefore(g, N.$('.pins', svg));
      dots = [];
      def.flows.forEach(function (fl) {
        if (fl.level === 'deeper' && state.level !== 'deeper') return;
        const path = N.$('[data-flow="' + fl.id + '"] .flow-line', svg);
        if (!path) return;
        const len = path.getTotalLength();
        const base = Math.max(1, Math.min(9, Math.round(Math.sqrt(fl.value) * 0.8)));
        const n = fl.id === 'forbrenning' || fl.id === 'avskoging' ? Math.round(base * flowMult(fl.id) * 1.6) : base;
        const speed = fl.kind === 'slow' ? 26 : 70;
        for (let i = 0; i < n; i++) {
          const c = el('circle', { r: 5, fill: '#ffffff', stroke: N.klimaArt.KIND[fl.kind], 'stroke-width': 2.8, 'data-k': fl.kind });
          g.appendChild(c);
          dots.push({ c: c, path: path, len: len, s: (i / n) * len, speed: speed, kind: fl.kind });
        }
      });
      const move = function (dt) {
        dots.forEach(function (d) {
          d.s = (d.s + d.speed * dt) % d.len;
          const pt = d.path.getPointAtLength(d.s);
          d.c.setAttribute('cx', f1(pt.x)); d.c.setAttribute('cy', f1(pt.y));
        });
      };
      move(0.001);
      const wasPaused = anim ? anim.paused : reduced();
      anim = loop(svg, move);
      anim.paused = wasPaused;
      syncAnimBtn();
    }
    function syncAnimBtn() {
      const b = N.$('[data-anim]', root);
      if (!b) return;
      b.setAttribute('aria-pressed', String(!anim.paused));
      b.innerHTML = N.icon(anim.paused ? 'play' : 'pause') + N.esc(T(anim.paused ? L.play : L.pause));
    }
    function applyMode(svg) {
      N.$$('[data-flow]', svg).forEach(function (g) {
        const k = g.dataset.kind;
        const on = state.mode !== 'tid' || (state.speed === 'fast' ? (k === 'fast' || k === 'ocean') : k === state.speed);
        g.classList.toggle('cm-dim', !on);
      });
      N.$$('.cm-dots circle', svg).forEach(function (c) {
        const k = c.dataset.k;
        const on = state.mode !== 'tid' || (state.speed === 'fast' ? (k === 'fast' || k === 'ocean') : k === state.speed);
        c.style.opacity = on ? 1 : 0.12;
      });
      // CO2 i lufta: flere molekyler når modellen gir mer CO2
      const extra = N.$('.co2-extra', svg);
      if (extra) {
        let n = 0;
        if (state.mode === 'hvis') {
          const pr = N.carbonProjection(state).series;
          n = clamp(Math.round((pr[pr.length - 1][1] - 427) / 25), 0, 14);
        }
        let h = '';
        const spots = [[330, 140], [420, 40], [600, 140], [700, 90], [180, 110], [520, 40], [880, 140], [270, 160], [640, 200], [420, 200], [760, 40], [940, 100], [360, 230], [560, 230]];
        for (let i = 0; i < n; i++) h += '<g transform="translate(' + spots[i][0] + ' ' + spots[i][1] + ')"><circle cx="-10" r="6" fill="#e0473a" stroke="#1d2433"/><circle cx="10" r="6" fill="#e0473a" stroke="#1d2433"/><circle r="7" fill="#3b3f46" stroke="#1d2433"/></g>';
        extra.innerHTML = h;
      }
    }

    function select(id) {
      state.selected = id;
      if (state.mode === 'hvis') state.mode = 'utforsk', render();
      const svg = N.$('svg.diagram', root);
      N.highlight(svg, id);
      panel();
      if (window.innerWidth < 980) N.$('#cm-panel', root).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function panel() {
      const p = N.$('#cm-panel', root);
      if (state.mode === 'hvis') { p.innerHTML = whatIfPanel(); wireWhatIf(p); return; }
      if (state.mode === 'tid' && !state.selected) {
        const sp = page.speeds[state.speed];
        p.innerHTML = '<div class="sp-head" style="--c:' + (state.speed === 'fast' ? N.klimaArt.KIND.fast : N.klimaArt.KIND[state.speed]) + '"><span class="sp-dot" aria-hidden="true"></span><h3 data-say>' + N.esc(T(sp.name)) + '</h3>' +
          '<button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button></div>' +
          '<dl><div><dt>' + N.esc(T(o('Hvor fort?', 'How fast?'))) + '</dt><dd data-say>' + N.fmt(sp.time) + '</dd></div>' +
          '<div><dt>' + N.esc(T(o('Hva skjer?', 'What happens?'))) + '</dt><dd data-say>' + N.fmt(sp.text) + '</dd></div>' +
          (sp.fact ? '<div><dt>' + N.u('didYouKnow') + '</dt><dd data-say>' + N.fmt(sp.fact) + '</dd></div>' : '') + '</dl>' +
          (sp.src ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(topic, sp.src) + '</p>' : '');
        return;
      }
      if (!state.selected) { p.innerHTML = emptyPanel(o('Klikk på en del av modellen', 'Click a part of the model'), page.intro); return; }
      const part = def.parts.filter(function (x) { return x.id === state.selected; })[0];
      const fl = def.flows.filter(function (x) { return x.id === state.selected; })[0];
      const st = N.klimaArt.carbonStocks.filter(function (x) { return x.id === state.selected; })[0];
      let extra = '';
      if (fl && fl.value >= 1) extra = '<p class="cm-figure" data-say>' + N.icon('chart') + N.fmt(o('Ca. **' + num(fl.value, fl.value < 2 ? 1 : 0) + ' milliarder tonn karbon** per år' + (fl.id === 'celleanding' ? ' (celleånding og nedbrytning på land til sammen: ca. 137)' : '') + '.', 'About **' + num(fl.value, fl.value < 2 ? 1 : 0) + ' billion tonnes of carbon** per year' + (fl.id === 'celleanding' ? ' (respiration and decomposition on land together: about 137)' : '') + '.')) + '</p>';
      if (st) extra = '<p class="cm-figure" data-say>' + N.icon('layers') + N.fmt(o('Lager: ca. **' + st.text + ' milliarder tonn karbon**.', 'Store: about **' + st.text + ' billion tonnes of carbon**.')) + '</p>';
      p.innerHTML = N.structurePanel(topic, state.selected, part) + extra;
    }

    /* ---- Hva skjer hvis? ---- */
    function whatIfPanel() {
      const pr = N.carbonProjection(state);
      const s = pr.series, last = s[s.length - 1], y50 = s[2050 - 2026];
      const net = last[3];
      const tcls = last[2] < 1.6 ? 'good' : (last[2] < 2.05 ? 'mid' : 'bad');
      const slider = function (key, min, max, step, label, unit) {
        return '<div class="cm-slider"><label for="cm-' + key + '"><span>' + N.esc(T(label)) + '</span><output class="mono" id="cm-' + key + '-v">' + (unit === '%' ? num(state[key]) + ' %' : num(state[key], 1) + ' ' + T(o('Gt C/år', 'Gt C/yr'))) + '</output></label>' +
          '<input type="range" id="cm-' + key + '" data-k="' + key + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + state[key] + '"></div>';
      };
      return '<div class="sp-head" style="--c:var(--accent)"><span class="sp-dot" aria-hidden="true"></span><h3>' + N.esc(T(L.whatIf)) + '</h3>' +
        '<button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button></div>' +
        '<p class="act-help" data-say>' + N.fmt(page.whatif.help) + '</p>' +
        '<div class="scale-stops cm-presets">' + page.whatif.presets.map(function (x, i) { return '<button type="button" class="btn btn-sm" data-preset="' + i + '">' + N.esc(T(x.name)) + '</button>'; }).join('') + '</div>' +
        slider('fossil', 0, 150, 10, page.whatif.fossil, '%') + slider('forest', 0, 200, 10, page.whatif.forest, '%') +
        slider('plant', 0, 3, 0.5, page.whatif.plant, 'gt') + (state.level === 'deeper' ? slider('capture', 0, 3, 0.5, page.whatif.capture, 'gt') : '') +
        '<div class="cm-results"><div><span class="cm-big mono">' + num(last[1]) + ' ppm</span><span>' + N.esc(T(o('CO₂ i lufta i år 2100', 'CO₂ in the air in 2100'))) + '</span></div>' +
        '<div class="cm-t ' + tcls + '"><span class="cm-big mono">+' + num(last[2], 1) + ' °C</span><span>' + N.esc(T(o('oppvarming i 2100', 'warming in 2100'))) + '</span></div></div>' +
        '<figure class="cm-mini">' + miniChart(s) + '<figcaption>' + N.esc(T(o('CO₂ i lufta: målt (heltrukket) og modell (stiplet)', 'CO₂ in the air: measured (solid) and model (dashed)'))) + '</figcaption></figure>' +
        '<p data-say>' + N.fmt(verdict(net, last, y50, pr.t15)) + '</p>' +
        '<div class="callout model"><p class="co-title">' + N.icon('layers') + N.u('modelLimits') + '</p><p data-say>' + N.fmt(page.whatif.limits) + '</p></div>' +
        (page.whatif.src ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(topic, page.whatif.src) + '</p>' : '');
    }
    function verdict(net, last, y50, t15) {
      const V = page.whatif.verdicts;
      let txt;
      if (net <= 0.05) txt = V.zero;
      else if (net < 5) txt = V.low;
      else if (net < 12.5) txt = V.mid;
      else txt = V.high;
      const t15t = t15 ? o(' I modellen passerer oppvarmingen 1,5 °C rundt år **' + t15 + '**.', ' In the model, warming passes 1.5 °C around **' + t15 + '**.') : o(' I modellen holder oppvarmingen seg under 1,5 °C.', ' In the model, warming stays below 1.5 °C.');
      return T(txt) + T(t15t);
    }
    function miniChart(s) {
      const D = N.klimaData.co2;
      const W = 320, H = 150, x0 = 34, x1 = W - 8, y0 = H - 22, y1 = 10;
      const ymin = 300, ymax = Math.max(600, Math.ceil(Math.max.apply(null, s.map((r) => r[1])) / 50) * 50);
      const X = (y) => x0 + (y - 1958) / (2100 - 1958) * (x1 - x0), Y = (v) => y0 - (v - ymin) / (ymax - ymin) * (y0 - y1);
      let g = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + N.esc(T(o('Graf over CO₂ i lufta fra 1959 til 2100', 'Graph of CO₂ in the air from 1959 to 2100'))) + '">';
      [ymin, (ymin + ymax) / 2, ymax].forEach(function (v) { g += '<line x1="' + x0 + '" x2="' + x1 + '" y1="' + f1(Y(v)) + '" y2="' + f1(Y(v)) + '" class="ch-grid"/><text class="ch-tick" x="' + (x0 - 4) + '" y="' + f1(Y(v) + 4) + '" text-anchor="end">' + Math.round(v) + '</text>'; });
      [1960, 2000, 2050, 2100].forEach(function (y) { g += '<text class="ch-tick" x="' + f1(X(y)) + '" y="' + (H - 6) + '" text-anchor="' + (y === 2100 ? 'end' : 'middle') + '">' + y + '</text>'; });
      g += '<path class="ch-line" d="' + D.map(function (r, i) { return (i ? 'L' : 'M') + f1(X(r[0])) + ' ' + f1(Y(r[1])); }).join('') + '"/>';
      g += '<path class="ch-line ch-model" d="M' + f1(X(D[D.length - 1][0])) + ' ' + f1(Y(D[D.length - 1][1])) + s.map(function (r) { return 'L' + f1(X(r[0])) + ' ' + f1(Y(r[1])); }).join('') + '"/>';
      return g + '</svg>';
    }
    function wireWhatIf(p) {
      N.$$('input[type=range]', p).forEach(function (inp) {
        inp.addEventListener('input', function () {
          state[inp.dataset.k] = Number(inp.value);
          refreshWhatIf(inp.id);
        });
      });
      N.$$('[data-preset]', p).forEach(function (b) {
        b.addEventListener('click', function () {
          const pr = page.whatif.presets[Number(b.dataset.preset)];
          ['fossil', 'forest', 'plant', 'capture'].forEach(function (k) { if (pr[k] !== undefined) state[k] = pr[k]; });
          refreshWhatIf();
        });
      });
    }
    function refreshWhatIf(focusId) {
      const p = N.$('#cm-panel', root);
      p.innerHTML = whatIfPanel(); wireWhatIf(p);
      if (focusId) { const i = N.$('#' + focusId, p); i && i.focus(); }
      const svg = N.$('svg.diagram', root);
      N.$('.cm-dots', svg).remove();
      setupDots(svg); applyMode(svg);
    }

    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.dataset.mode) { state.mode = b.dataset.mode; state.selected = null; render(); return; }
      if (b.dataset.level) { state.level = b.dataset.level; render(); return; }
      if (b.hasAttribute('data-pins')) { state.pins = !state.pins; render(); return; }
      if (b.hasAttribute('data-nums')) { state.nums = !state.nums; N.$('.cm-slide', root).classList.toggle('show-nums', state.nums); b.setAttribute('aria-pressed', String(state.nums)); return; }
      if (b.hasAttribute('data-anim')) { anim.paused = !anim.paused; syncAnimBtn(); return; }
      if (b.dataset.speed) { state.speed = b.dataset.speed; state.selected = null; render(); }
    });
    render();
  };

  /* =================================================================
     2) DRIVHUSEFFEKTEN
     ================================================================= */
  const GAS = [0, 180, 280, 427, 560, 1120];
  const GAS_MOL = [0, 10, 16, 24, 32, 48];
  const GAS_ABS = [0, 0.42, 0.5, 0.58, 0.65, 0.76];
  N.greenhouseTemp = function (gi, ice, feedback) {
    const alb0 = [0.285, 0.30, 0.32][ice];
    const te = function (a) { return 255 * Math.pow((1 - a) / 0.7, 0.25) - 273.15; };
    if (GAS[gi] === 0) return { t: te(alb0), alb: alb0 };
    let alb = alb0, t = 0;
    for (let i = 0; i < 12; i++) {
      t = 15 + 3 * Math.log2(GAS[gi] / 280) + (te(alb) + 18.15);
      if (!feedback) break;
      alb = clamp(alb0 - 0.0045 * (t - 15), 0.25, 0.36);
    }
    return { t: t, alb: alb };
  };

  N.pageTypes.greenhouse = function (root, cfg) {
    const topic = cfg.topic, page = cfg.page;
    const def = N.diagrams.drivhuseffekt;
    const state = { mode: cfg.sub === 'hvis' ? 'hvis' : 'utforsk', level: N.settings.level, pins: true, selected: null, gas: 3, ice: 1, feedback: false };
    let anim = null, P = [];

    function render() {
      const tools = '<div class="ex-toolbar">' + levelSeg(state) +
        '<button type="button" class="btn btn-sm" data-pins aria-pressed="' + state.pins + '">' + N.icon('target') + N.u('showNumbers') + '</button>' +
        '<button type="button" class="btn btn-sm" data-anim aria-pressed="true">' + N.icon('pause') + N.esc(T(L.pause)) + '</button></div>';
      root.innerHTML = '<div class="cm gh">' + modeTabs([['utforsk', 'target', L.explore], ['hvis', 'compare', L.whatIf]], state.mode) +
        '<div class="fw-layout"><div class="cm-stage"><p class="act-help">' + N.fmt(page.help[state.mode]) + '</p>' + tools +
        '<figure class="slide cm-slide">' + N.renderDiagram('drivhuseffekt', { interactive: true, pins: state.pins && state.mode === 'utforsk', level: state.level }) +
        '<figcaption>' + N.esc(T(page.caption)) + '</figcaption></figure>' +
        legendHtml([['#f2b705', page.legend.sun], ['#e2402a', page.legend.heat], ['#3b3f46', page.legend.gas]]) +
        '</div><aside class="ex-panel" id="cm-panel" aria-live="polite" tabindex="-1" data-read-scope></aside></div></div>';
      const svg = N.$('svg.diagram', root);
      N.wireDiagram(svg, { interactive: true, onSelect: select });
      const sm = N.$('.smil-dots', svg); if (sm) sm.remove();
      setup(svg);
      panel();
    }
    function scene(svg) {
      const n = GAS_MOL[state.gas];
      N.$$('[data-mol]', svg).forEach(function (m) { m.style.display = Number(m.dataset.mol) < n ? '' : 'none'; });
      const r = N.greenhouseTemp(state.gas, state.ice, state.feedback);
      const iceScale = clamp(0.35 + (0.36 - r.alb) * 14 * (state.feedback ? 1 : 0) + [0.55, 1, 1.35][state.ice] - 0.35, 0.25, 1.5);
      const ice = N.$('.ice', svg);
      if (ice) ice.setAttribute('transform', 'translate(180 440) scale(' + f1(iceScale) + ') translate(-180 -440)');
      const fill = N.$('.thermo-fill', svg), tt = N.$('.thermo-text', svg);
      const h = clamp((r.t + 22) / 50, 0.04, 1) * 180;
      if (fill) { fill.setAttribute('y', f1(396 - h)); fill.setAttribute('height', f1(h)); }
      if (tt) tt.textContent = num(r.t, 0) + ' °C';
      return r;
    }
    function setup(svg) {
      const g = el('g', { class: 'gh-photons', 'aria-hidden': 'true' });
      svg.insertBefore(g, N.$('.pins', svg));
      P = [];
      let tSun = 0, tIr = 0;
      const spawn = function (x, y, vx, vy, kind) {
        const c = el('circle', { r: 5, fill: kind === 'sun' ? '#ffd23f' : '#ff6a4d', stroke: kind === 'sun' ? '#c48a00' : '#9c1f0c', 'stroke-width': 1.5 });
        g.appendChild(c);
        const p = { c: c, x: x, y: y, vx: vx, vy: vy, kind: kind, stop: null, wait: 0 };
        P.push(p); return p;
      };
      const step = function (dt) {
        const gas = state.gas, r = N.greenhouseTemp(gas, state.ice, state.feedback);
        tSun += dt; tIr += dt;
        if (tSun > 0.16) {
          tSun = 0;
          const tx = 180 + Math.random() * 700, sx = 120 + Math.random() * 40, sy = 112;
          const L2 = Math.hypot(tx - sx, 432 - sy), sp = 260;
          spawn(sx, sy, (tx - sx) / L2 * sp, (432 - sy) / L2 * sp, 'sun');
        }
        if (tIr > 0.2 - clamp(r.t, -20, 30) / 600) {
          tIr = 0;
          const x = 200 + Math.random() * 700;
          const p = spawn(x, 430, (Math.random() - 0.5) * 30, -170, 'ir');
          if (Math.random() < GAS_ABS[gas]) p.stop = 130 + Math.random() * 270;
        }
        for (let i = P.length - 1; i >= 0; i--) {
          const p = P[i];
          if (p.wait > 0) { p.wait -= dt; if (p.wait <= 0) { p.c.setAttribute('r', 5); const down = Math.random() < 0.5; p.vy = down ? 170 : -170; p.vx = (Math.random() - 0.5) * 60; } continue; }
          p.x += p.vx * dt; p.y += p.vy * dt;
          if (p.kind === 'sun' && p.vy > 0 && p.y >= 432) {
            const onIce = p.x < 330 && state.ice > 0;
            if (Math.random() < (onIce ? 0.75 : r.alb * 0.9)) { p.vy = -260; p.vx = 40 + Math.random() * 60; p.kind = 'refl'; p.c.setAttribute('fill', '#fff2a8'); }
            else { p.c.remove(); P.splice(i, 1); continue; }
          }
          if (p.kind === 'ir' && p.stop !== null && p.vy < 0 && p.y <= p.stop) { p.stop = null; p.wait = 0.25; p.c.setAttribute('r', 8); continue; }
          if (p.kind === 'ir' && p.vy > 0 && p.y >= 432) { p.c.remove(); P.splice(i, 1); continue; }
          if (p.y < 0 || p.x < -10 || p.x > 1010) { p.c.remove(); P.splice(i, 1); continue; }
          p.c.setAttribute('cx', f1(p.x)); p.c.setAttribute('cy', f1(p.y));
        }
      };
      const wasPaused = anim ? anim.paused : reduced();
      anim = loop(svg, step);
      anim.paused = wasPaused;
      syncAnimBtn();
      scene(svg);
    }
    function syncAnimBtn() {
      const b = N.$('[data-anim]', root);
      if (!b) return;
      b.setAttribute('aria-pressed', String(!anim.paused));
      b.innerHTML = N.icon(anim.paused ? 'play' : 'pause') + N.esc(T(anim.paused ? L.play : L.pause));
    }
    function select(id) {
      if (state.mode === 'hvis') return;
      state.selected = id;
      N.highlight(N.$('svg.diagram', root), id);
      panel();
      if (window.innerWidth < 980) N.$('#cm-panel', root).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    function panel() {
      const p = N.$('#cm-panel', root);
      if (state.mode === 'utforsk') {
        if (!state.selected) { p.innerHTML = emptyPanel(o('Klikk på en del av modellen', 'Click a part of the model'), page.intro); return; }
        const part = def.parts.filter(function (x) { return x.id === state.selected; })[0];
        p.innerHTML = N.structurePanel(topic, state.selected, part);
        return;
      }
      const r = N.greenhouseTemp(state.gas, state.ice, state.feedback);
      const pre = N.greenhouseTemp(2, 1, false).t;
      const stop = page.stops[state.gas];
      p.innerHTML = '<div class="sp-head" style="--c:#e2402a"><span class="sp-dot" aria-hidden="true"></span><h3>' + N.esc(T(L.whatIf)) + '</h3>' +
        '<button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button></div>' +
        '<div class="cm-slider"><label for="gh-gas"><span>' + N.esc(T(page.gasLabel)) + '</span><output class="mono">' + N.esc(T(stop.name)) + '</output></label>' +
        '<input type="range" id="gh-gas" min="0" max="5" step="1" value="' + state.gas + '" aria-valuetext="' + N.esc(T(stop.name)) + '"></div>' +
        '<div class="cm-slider"><span class="cm-lab">' + N.esc(T(page.iceLabel)) + '</span><div class="seg" role="group">' + page.iceNames.map(function (x, i) {
          return '<button type="button" data-ice="' + i + '" aria-pressed="' + (state.ice === i) + '">' + N.esc(T(x)) + '</button>';
        }).join('') + '</div></div>' +
        '<label class="cm-check"><input type="checkbox" id="gh-fb"' + (state.feedback ? ' checked' : '') + '> ' + N.esc(T(page.feedbackLabel)) + '</label>' +
        '<div class="cm-results"><div><span class="cm-big mono">' + num(r.t, 1) + ' °C</span><span>' + N.esc(T(o('global middeltemperatur', 'global average temperature'))) + '</span></div>' +
        '<div class="cm-t ' + (r.t - pre < 1.6 ? 'good' : r.t - pre < 2.1 ? 'mid' : 'bad') + '"><span class="cm-big mono">' + (r.t - pre >= 0 ? '+' : '−') + num(Math.abs(r.t - pre), 1) + ' °C</span><span>' + N.esc(T(o('sammenlignet med før industrien', 'compared with pre-industrial times'))) + '</span></div></div>' +
        '<p data-say>' + N.fmt(stop.text) + '</p>' +
        (state.feedback ? '<div class="callout fact"><p class="co-title">' + N.icon('retry') + N.esc(T(o('Tilbakekobling', 'Feedback'))) + '</p><p data-say>' + N.fmt(page.feedbackText) + '</p></div>' : '') +
        '<div class="callout model"><p class="co-title">' + N.icon('layers') + N.u('modelLimits') + '</p><p data-say>' + N.fmt(page.limits) + '</p></div>' +
        (page.src ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(topic, page.src) + '</p>' : '');
      const svg = N.$('svg.diagram', root);
      N.$('#gh-gas', p).addEventListener('input', function (e) { state.gas = Number(e.target.value); scene(svg); panel(); N.$('#gh-gas', root).focus(); });
      N.$('#gh-fb', p).addEventListener('change', function (e) { state.feedback = e.target.checked; scene(svg); panel(); N.$('#gh-fb', root).focus(); });
    }
    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.dataset.mode) { state.mode = b.dataset.mode; state.selected = null; render(); return; }
      if (b.dataset.level) { state.level = b.dataset.level; render(); return; }
      if (b.hasAttribute('data-pins')) { state.pins = !state.pins; render(); return; }
      if (b.hasAttribute('data-anim')) { anim.paused = !anim.paused; syncAnimBtn(); return; }
      if (b.dataset.ice) { state.ice = Number(b.dataset.ice); scene(N.$('svg.diagram', root)); panel(); }
    });
    render();
  };

  /* =================================================================
     3) GRAFER MED EKTE MÅLINGER
     ================================================================= */
  const MONTHS = { nb: ['jan.', 'feb.', 'mars', 'april', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'], en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] };
  const CH = {
    keeling: {
      title: o('CO₂ i lufta målt på Mauna Loa (Hawaii)', 'CO₂ in the air measured at Mauna Loa (Hawaii)'),
      views: [['alle', o('1958 til i dag', '1958 to today')], ['zoom', o('De siste fem årene', 'The last five years')]]
    },
    temperatur: {
      title: o('Global temperatur sammenlignet med 1850–1900', 'Global temperature compared with 1850–1900'),
      views: [['aar', o('Hvert år', 'Each year')], ['snitt', o('Med 10-års snitt', 'With 10-year average')]]
    },
    iskjerne: {
      title: o('CO₂ og temperatur de siste 800 000 årene (iskjerner fra Antarktis)', 'CO₂ and temperature over the last 800,000 years (ice cores from Antarctica)'),
      views: [['uten', o('Fortiden', 'The past')], ['idag', o('Vis CO₂ i dag', 'Show CO₂ today')]]
    }
  };
  function chartSvg(kind, view) {
    const D = N.klimaData;
    const W = 720, H = kind === 'iskjerne' ? 440 : 340, ml = 58, mr = 16, mt = 22, mb = 40;
    let s = '', pts = [], xr, X, Y, Y2;
    const grid = function (vals, Yf, fmt, x0, x1) {
      return vals.map(function (v) { return '<line class="ch-grid" x1="' + x0 + '" x2="' + x1 + '" y1="' + f1(Yf(v)) + '" y2="' + f1(Yf(v)) + '"/><text class="ch-tick" x="' + (x0 - 6) + '" y="' + f1(Yf(v) + 4) + '" text-anchor="end">' + fmt(v) + '</text>'; }).join('');
    };
    const xticks = function (vals, fmt, yb) { return vals.map(function (v) { return '<text class="ch-tick" x="' + f1(X(v)) + '" y="' + (yb + 18) + '" text-anchor="' + (X(v) > W - mr - 24 ? 'end' : X(v) < ml + 24 ? 'start' : 'middle') + '">' + fmt(v) + '</text><line class="ch-tickmark" x1="' + f1(X(v)) + '" x2="' + f1(X(v)) + '" y1="' + yb + '" y2="' + (yb + 5) + '"/>'; }).join(''); };
    if (kind === 'keeling') {
      const all = D.co2m;
      const rows = view === 'zoom' ? all.filter(function (r) { return r[0] >= all[all.length - 1][0] - 5; }) : all;
      xr = [rows[0][0], rows[rows.length - 1][0]];
      const vmin = Math.floor((Math.min.apply(null, rows.map((r) => r[1])) - 2) / 5) * 5, vmax = Math.ceil((Math.max.apply(null, rows.map((r) => r[1])) + 2) / 5) * 5;
      X = (x) => ml + (x - xr[0]) / (xr[1] - xr[0]) * (W - ml - mr); Y = (v) => H - mb - (v - vmin) / (vmax - vmin) * (H - mb - mt);
      const step = view === 'zoom' ? 5 : 20;
      const vals = []; for (let v = Math.ceil(vmin / step) * step; v <= vmax; v += step) vals.push(v);
      s += grid(vals, Y, (v) => v, ml, W - mr);
      const yt = []; const ys = view === 'zoom' ? 1 : 10; for (let y = Math.ceil(xr[0] / ys) * ys; y <= xr[1]; y += ys) yt.push(y);
      s += xticks(yt, (v) => v, H - mb);
      s += '<path class="ch-line" d="' + rows.map(function (r, i) { return (i ? 'L' : 'M') + f1(X(r[0])) + ' ' + f1(Y(r[1])); }).join('') + '"/>';
      s += '<text class="ch-axis" x="14" y="' + (mt + 4) + '">ppm</text>';
      pts = rows.map(function (r) {
        const yr = Math.floor(r[0]), m = Math.min(11, Math.floor((r[0] - yr) * 12));
        return { x: X(r[0]), y: Y(r[1]), text: MONTHS[N.settings.lang === 'en' ? 'en' : 'nb'][m] + ' ' + yr + ': ' + num(r[1], 1) + ' ppm' };
      });
    }
    if (kind === 'temperatur') {
      const rows = D.temp;
      xr = [rows[0][0] - 1, rows[rows.length - 1][0] + 1];
      const vmin = -0.6, vmax = 1.7;
      X = (x) => ml + (x - xr[0]) / (xr[1] - xr[0]) * (W - ml - mr); Y = (v) => H - mb - (v - vmin) / (vmax - vmin) * (H - mb - mt);
      s += grid([-0.5, 0, 0.5, 1, 1.5], Y, (v) => (v > 0 ? '+' : v < 0 ? '−' : '') + num(Math.abs(v), 1), ml, W - mr);
      s += xticks([1860, 1900, 1940, 1980, 2020], (v) => v, H - mb);
      const bw = (W - ml - mr) / (xr[1] - xr[0]) * 0.8;
      s += rows.map(function (r) {
        const y = Y(Math.max(0, r[1])), h = Math.abs(Y(r[1]) - Y(0));
        return '<rect class="' + (r[1] >= 0 ? 'ch-warm' : 'ch-cold') + '" x="' + f1(X(r[0]) - bw / 2) + '" y="' + f1(y) + '" width="' + f1(bw) + '" height="' + f1(Math.max(0.8, h)) + '"/>';
      }).join('');
      s += '<line class="ch-limit" x1="' + ml + '" x2="' + (W - mr) + '" y1="' + f1(Y(1.5)) + '" y2="' + f1(Y(1.5)) + '"/><text class="ch-limit-t" x="' + (ml + 8) + '" y="' + f1(Y(1.5) - 6) + '">' + N.esc(T(o('1,5 °C (Parisavtalen)', '1.5 °C (Paris Agreement)'))) + '</text>';
      if (view === 'snitt') {
        const avg = rows.map(function (r, i) { const w = rows.slice(Math.max(0, i - 9), i + 1); return [r[0], w.reduce((a, b) => a + b[1], 0) / w.length]; }).slice(9);
        s += '<path class="ch-line ch-avg" d="' + avg.map(function (r, i) { return (i ? 'L' : 'M') + f1(X(r[0])) + ' ' + f1(Y(r[1])); }).join('') + '"/>';
      }
      s += '<text class="ch-axis" x="14" y="' + (mt + 4) + '">°C</text>';
      pts = rows.map(function (r) { return { x: X(r[0]), y: Y(r[1]), text: r[0] + ': ' + (r[1] >= 0 ? '+' : '−') + num(Math.abs(r[1]), 2) + ' °C' }; });
    }
    if (kind === 'iskjerne') {
      const c = D.iceCo2, t = D.iceTemp;
      xr = [-805000, 0];
      X = function (age) { return ml + (W - mr - ml) * (1 - age / 805000); };
      const topH = 230, top0 = mt, top1 = mt + topH - 30, bot0 = mt + topH + 4, bot1 = H - mb;
      const cmax = view === 'idag' ? 440 : 310;
      Y = (v) => top1 - (v - 160) / (cmax - 160) * (top1 - top0);
      Y2 = (v) => bot1 - (v + 11) / (16) * (bot1 - bot0);
      s += grid(view === 'idag' ? [200, 280, 360, 440] : [180, 220, 260, 300], Y, (v) => v, ml, W - mr);
      s += grid([-8, -4, 0, 4], Y2, (v) => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v), ml, W - mr);
      s += xticks([800000, 600000, 400000, 200000, 0], (v) => (v ? num(v / 1000) + ' 000' : T(o('i dag', 'today'))), H - mb);
      s += '<path class="ch-line" d="' + c.map(function (r, i) { return (i ? 'L' : 'M') + f1(X(r[0])) + ' ' + f1(Y(r[1])); }).join('') + '"/>';
      s += '<path class="ch-line ch-temp" d="' + t.map(function (r, i) { return (i ? 'L' : 'M') + f1(X(r[0])) + ' ' + f1(Y2(r[1])); }).join('') + '"/>';
      s += '<text class="ch-axis" x="' + (ml + 6) + '" y="' + (top0 + 12) + '">' + N.esc(T(o('CO₂ (ppm)', 'CO₂ (ppm)'))) + '</text><text class="ch-axis ch-temp-t" x="' + (ml + 6) + '" y="' + (bot0 + 14) + '">' + N.esc(T(o('Temperatur i Antarktis (°C, sammenlignet med de siste 1000 årene)', 'Temperature in Antarctica (°C, compared with the last 1000 years)'))) + '</text>';
      s += '<text class="ch-note" x="' + f1(X(20000)) + '" y="' + f1(Y2(-9.6)) + '" text-anchor="end">' + N.esc(T(o('siste istid', 'last ice age'))) + '</text>';
      s += '<text class="ch-note" x="' + f1(X(125000)) + '" y="' + f1(Y2(4.6)) + '" text-anchor="middle">' + N.esc(T(o('mellomistid', 'interglacial'))) + '</text>';
      if (view === 'idag') {
        const now = D.co2[D.co2.length - 1];
        s += '<line class="ch-limit" x1="' + ml + '" x2="' + (W - mr) + '" y1="' + f1(Y(now[1])) + '" y2="' + f1(Y(now[1])) + '"/><circle cx="' + f1(X(0) - 3) + '" cy="' + f1(Y(now[1])) + '" r="7" class="ch-now"/>' +
          '<text class="ch-limit-t" x="' + f1(W - mr - 10) + '" y="' + f1(Y(now[1]) - 10) + '" text-anchor="end">' + N.esc(T(o('I dag: ', 'Today: '))) + num(now[1]) + ' ppm (' + now[0] + ')</text>';
      }
      pts = c.map(function (r) {
        let best = t[0]; t.forEach(function (q) { if (Math.abs(q[0] - r[0]) < Math.abs(best[0] - r[0])) best = q; });
        return { x: X(r[0]), y: Y(r[1]), y2: Y2(best[1]), text: T(o('For ca. ', 'About ')) + num(Math.round(r[0] / 1000) * 1000) + T(o(' år siden: ', ' years ago: ')) + num(r[1]) + ' ppm CO₂, ' + (best[1] >= 0 ? '+' : '−') + num(Math.abs(best[1]), 1) + ' °C' };
      }).reverse();
    }
    const svg = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + N.esc(T(CH[kind].title)) + '">' + s +
      '<line class="ch-axisline" x1="' + ml + '" x2="' + (W - mr) + '" y1="' + (H - mb) + '" y2="' + (H - mb) + '"/>' +
      '<g class="ch-cursor" style="display:none"><line y1="' + mt + '" y2="' + (H - mb) + '"/><circle r="6"/>' + (kind === 'iskjerne' ? '<circle class="c2" r="6"/>' : '') + '</g></svg>';
    return { svg: svg, pts: pts };
  }
  N.klimaChart = function (box, kind) {
    const cfg = CH[kind];
    if (!cfg || !N.klimaData) { box.innerHTML = ''; return; }
    let view = cfg.views[0][0];
    function draw() {
      const c = chartSvg(kind, view);
      box.innerHTML = '<div class="ch-head"><p class="ch-title">' + N.esc(T(cfg.title)) + '</p><div class="seg" role="group" aria-label="' + N.esc(T(o('Velg visning', 'Choose view'))) + '">' + cfg.views.map(function (v) {
        return '<button type="button" data-view="' + v[0] + '" aria-pressed="' + (view === v[0]) + '">' + N.esc(T(v[1])) + '</button>';
      }).join('') + '</div></div><div class="ch-wrap">' + c.svg + '</div>' +
        '<label class="ch-range"><span class="sr-only">' + N.esc(T(o('Velg et punkt i grafen', 'Choose a point on the graph'))) + '</span><input type="range" min="0" max="' + (c.pts.length - 1) + '" value="' + (c.pts.length - 1) + '"></label>' +
        '<p class="ch-read mono" aria-live="polite">' + N.esc(T(o('Pek på grafen eller bruk glidebryteren for å lese av verdiene.', 'Point at the graph or use the slider to read the values.'))) + '</p>';
      const svg = N.$('svg', box), cur = N.$('.ch-cursor', svg), read = N.$('.ch-read', box), rng = N.$('input', box);
      const show = function (i) {
        const p = c.pts[i]; if (!p) return;
        cur.style.display = '';
        N.$('line', cur).setAttribute('x1', f1(p.x)); N.$('line', cur).setAttribute('x2', f1(p.x));
        const cs = N.$$('circle', cur); cs[0].setAttribute('cx', f1(p.x)); cs[0].setAttribute('cy', f1(p.y));
        if (cs[1]) { cs[1].setAttribute('cx', f1(p.x)); cs[1].setAttribute('cy', f1(p.y2)); }
        read.textContent = p.text;
      };
      const pick = function (e) {
        const r = svg.getBoundingClientRect(), vb = svg.viewBox.baseVal;
        const x = (e.clientX - r.left) / r.width * vb.width;
        let bi = 0, bd = 1e9;
        c.pts.forEach(function (p, i) { const d = Math.abs(p.x - x); if (d < bd) { bd = d; bi = i; } });
        rng.value = bi; show(bi);
      };
      svg.addEventListener('pointermove', pick);
      svg.addEventListener('pointerdown', pick);
      rng.addEventListener('input', function () { show(Number(rng.value)); });
    }
    box.addEventListener('click', function (e) { const b = e.target.closest('[data-view]'); if (b) { view = b.dataset.view; draw(); } });
    draw();
  };
  N.articleBlocks.chart = function (c, b) {
    return '<figure class="chart-fig" data-chart="' + b.chart + '"><div class="chart-box"></div>' +
      (b.caption ? '<figcaption><span data-say>' + N.fmt(b.caption) + '</span> ' + c.cite(b.src) + '</figcaption>' : (b.src ? '<figcaption>' + c.cite(b.src) + '</figcaption>' : '')) + '</figure>';
  };
  N.articleWirers.push(function (root) {
    N.$$('[data-chart]', root).forEach(function (fig) { N.klimaChart(N.$('.chart-box', fig), fig.dataset.chart); });
  });

  /* =================================================================
     4) FØR OG ETTER (bilder)
     ================================================================= */
  N.articleBlocks.beforeafter = function (c, b) {
    const x = b.beforeafter;
    return '<div class="ba"><div class="ba-pair">' + x.items.map(function (it, i) {
      return '<div class="ba-item"><span class="ba-year mono">' + N.esc(T(it.label)) + '</span>' + N.articlePhoto(c, it.photo, it.caption) + '</div>' + (i < x.items.length - 1 ? '<span class="ba-arrow" aria-hidden="true">' + N.icon('arrow') + '</span>' : '');
    }).join('') + '</div>' + (x.caption ? '<p class="ba-cap" data-say>' + N.fmt(x.caption) + c.cite(b.src) + '</p>' : '') + '</div>';
  };

  /* =================================================================
     5) MYTE ELLER FAKTA?
     ================================================================= */
  const VERDICT = { myte: o('Myte', 'Myth'), fakta: o('Fakta', 'Fact'), delvis: o('Delvis riktig', 'Partly true') };
  N.articleBlocks.claims = function (c, b) {
    return '<div class="claims">' + b.claims.map(function (x, i) {
      return '<div class="claim" data-claim data-verdict="' + x.verdict + '"><p class="claim-q" data-say>«' + N.fmt(x.claim) + '»</p>' +
        '<div class="claim-btns"><button type="button" class="btn btn-sm" data-guess="myte">' + N.esc(T(VERDICT.myte)) + '</button><button type="button" class="btn btn-sm" data-guess="fakta">' + N.esc(T(VERDICT.fakta)) + '</button></div>' +
        '<div class="claim-a" hidden><p class="claim-v v-' + x.verdict + '">' + N.esc(T(VERDICT[x.verdict])) + '</p><p data-say>' + N.fmt(x.explain) + c.cite(x.src) + '</p></div></div>';
    }).join('') + '</div>';
  };
  N.articleWirers.push(function (root) {
    N.$$('[data-claim]', root).forEach(function (card) {
      card.addEventListener('click', function (e) {
        const b = e.target.closest('[data-guess]'); if (!b) return;
        const v = card.dataset.verdict, ok = v === b.dataset.guess || (v === 'delvis');
        N.$$('[data-guess]', card).forEach(function (x) { x.disabled = true; });
        b.classList.add(ok ? 'is-correct' : 'is-wrong');
        const a = N.$('.claim-a', card); a.hidden = false;
        a.insertAdjacentHTML('afterbegin', '<p class="fb-title ' + (ok ? 'good' : 'bad') + '">' + N.icon(ok ? 'check' : 'cross') + N.u(ok ? 'correct' : 'notQuite') + '</p>');
      });
    });
  });

  /* =================================================================
     6) HELHETSLESING AV EN FORSKNINGSARTIKKEL
     ================================================================= */
  N.articleBlocks.reading = function (c, b) {
    const R = b.reading;
    return '<div class="reading" data-reading="' + N.esc(JSON.stringify(R.articles.map(function (a) { return a.id; }))) + '">' +
      '<p class="eyebrow">' + N.esc(T(o('Velg en artikkel', 'Choose an article'))) + '</p><div class="rd-choose">' + R.articles.map(function (a, i) {
        return '<button type="button" class="rd-art" data-art="' + i + '" aria-pressed="' + (i === 0) + '"><strong>' + N.esc(a.title) + '</strong><span>' + N.esc(a.publisher) + ' · ' + N.esc(a.date) + '</span><span class="rd-about">' + N.fmt(a.about) + '</span></button>';
      }).join('') + '</div>' + R.articles.map(function (a, i) { return '<div class="rd-body" data-body="' + i + '"' + (i ? ' hidden' : '') + '>' + readingBody(c, a, R.phases) + '</div>'; }).join('') + '</div>';
  };
  function readingBody(c, a, phases) {
    const task = function (t, k) {
      return '<div class="rd-task"><label for="rd-' + a.id + '-' + k + '" data-say>' + N.fmt(t.q) + '</label>' +
        (t.hint ? '<p class="rd-hint">' + N.fmt(t.hint) + '</p>' : '') +
        '<textarea id="rd-' + a.id + '-' + k + '" rows="' + (t.rows || 3) + '" data-q="' + N.esc(N.plain ? N.plain(t.q) : T(t.q)) + '"></textarea>' +
        (t.answer ? '<details class="rd-ans"><summary>' + N.esc(T(o('Vis et forslag', 'Show a suggestion'))) + '</summary><p data-say>' + N.fmt(t.answer) + '</p></details>' : '') + '</div>';
    };
    let k = 0;
    const ph = [['before', 'eye'], ['during', 'book'], ['after', 'doc'], ['critic', 'search']];
    return '<div class="rd-head"><p><strong>' + N.esc(a.title) + '</strong><br><span class="rd-meta">' + N.esc(a.author) + ' · ' + N.esc(a.publisher) + ' · ' + N.esc(a.date) + ' · ' + N.esc(T(a.kind)) + '</span></p>' +
      '<a class="btn btn-primary" href="' + N.esc(a.url) + '" target="_blank" rel="noopener">' + N.icon('ext') + N.esc(T(o('Åpne artikkelen', 'Open the article'))) + '</a></div>' +
      '<div class="rd-steps" data-stepper-rd>' + ph.map(function (p, i) {
        const P = phases[p[0]];
        return '<section class="rd-phase" data-ph="' + i + '"' + (i ? ' hidden' : '') + '><h3 data-say>' + N.icon(p[1]) + ' ' + (i + 1) + '. ' + N.esc(T(P.title)) + '</h3><p class="rd-why" data-say>' + N.fmt(P.text) + '</p>' +
          (p[0] === 'during' && a.words ? '<div class="callout fact"><p class="co-title">' + N.icon('book') + N.esc(T(o('Vanskelige ord i artikkelen', 'Difficult words in the article'))) + '</p><dl class="rd-words">' + a.words.map(function (w) { return '<div><dt>' + N.esc(T(w.w)) + '</dt><dd data-say>' + N.fmt(w.def) + '</dd></div>'; }).join('') + '</dl></div>' : '') +
          a[p[0]].map(function (t) { return task(t, k++); }).join('') + '</section>';
      }).join('') +
      '<div class="rd-nav"><button type="button" class="btn" data-rd-prev disabled>' + N.icon('back') + N.u('previous') + '</button><span class="rd-dots">' + ph.map(function (p, i) {
        return '<button type="button" data-rd-go="' + i + '"' + (i === 0 ? ' aria-current="step"' : '') + ' aria-label="' + N.esc(T(phases[p[0]].title)) + '">' + (i + 1) + '</button>';
      }).join('') + '</span><button type="button" class="btn" data-rd-next>' + N.u('next') + N.icon('arrow') + '</button></div></div>' +
      '<div class="rd-tools"><button type="button" class="btn btn-sm" data-rd-copy>' + N.icon('doc') + N.esc(T(o('Kopier svarene mine', 'Copy my answers'))) + '</button>' +
      '<span class="rd-note">' + N.esc(T(o('Svarene lagres ikke. Kopier dem til dokumentet ditt før du lukker siden.', 'Your answers are not saved. Copy them to your document before you close the page.'))) + '</span></div>';
  }
  N.articleWirers.push(function (root) {
    N.$$('.reading', root).forEach(function (rd) {
      rd.addEventListener('click', function (e) {
        const b = e.target.closest('button'); if (!b) return;
        if (b.dataset.art !== undefined) {
          N.$$('.rd-art', rd).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          N.$$('.rd-body', rd).forEach(function (x) { x.hidden = x.dataset.body !== b.dataset.art; });
          return;
        }
        const body = b.closest('.rd-body'); if (!body) return;
        const phs = N.$$('.rd-phase', body);
        let cur = phs.findIndex(function (x) { return !x.hidden; });
        if (b.hasAttribute('data-rd-prev')) cur--;
        else if (b.hasAttribute('data-rd-next')) cur++;
        else if (b.dataset.rdGo !== undefined) cur = Number(b.dataset.rdGo);
        else if (b.hasAttribute('data-rd-copy')) {
          const title = N.$('.rd-head strong', body).textContent;
          const txt = title + '\n\n' + N.$$('textarea', body).map(function (t) { return t.dataset.q + '\n' + (t.value || '–'); }).join('\n\n');
          const done = function () { N.toast(T(o('Svarene er kopiert. Lim dem inn i dokumentet ditt.', 'Your answers have been copied. Paste them into your document.'))); };
          if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, function () { N.toast(T(o('Kunne ikke kopiere. Marker teksten og kopier selv.', 'Could not copy. Select the text and copy it yourself.'))); });
          return;
        } else return;
        cur = clamp(cur, 0, phs.length - 1);
        phs.forEach(function (x, i) { x.hidden = i !== cur; });
        N.$$('[data-rd-go]', body).forEach(function (x, i) { if (i === cur) x.setAttribute('aria-current', 'step'); else x.removeAttribute('aria-current'); });
        N.$('[data-rd-prev]', body).disabled = cur === 0;
        N.$('[data-rd-next]', body).disabled = cur === phs.length - 1;
        const h = N.$('h3', phs[cur]); h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true });
        phs[cur].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  });

  /* =================================================================
     7) KLIMAFOTAVTRYKK (modell)
     ================================================================= */
  N.pageTypes.footprint = function (root, cfg) {
    const F = cfg.page.footprint, topic = cfg.topic;
    const st = { school: F.school.modes[0].id, km: 3, trip: F.trip.modes[0].id, tripKm: 1000, trips: 1 };
    F.food.items.forEach(function (it) { st[it.id] = it.start; });
    const factor = function (list, id) { return list.filter(function (x) { return x.id === id; })[0]; };
    function calc() {
      const sc = factor(F.school.modes, st.school), tr = factor(F.trip.modes, st.trip);
      const school = sc.g * st.km * 2 * F.school.days / 1000;
      const trip = tr.g * st.tripKm * 2 * st.trips / 1000;
      const food = F.food.items.reduce(function (a, it) { return a + st[it.id] * 52 * it.kg * it.co2; }, 0);
      return [[F.school.title, school, '#3d6fd1'], [F.trip.title, trip, '#c92a63'], [F.food.title, food, '#2e9e5b']];
    }
    const sel = function (key, modes) {
      return '<select id="fp-' + key + '" data-k="' + key + '">' + modes.map(function (m) { return '<option value="' + m.id + '"' + (st[key] === m.id ? ' selected' : '') + '>' + N.esc(T(m.name)) + '</option>'; }).join('') + '</select>';
    };
    const range = function (key, min, max, step, unit) {
      return '<input type="range" id="fp-' + key + '" data-k="' + key + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + st[key] + '"><output class="mono" id="fp-' + key + '-v">' + num(st[key]) + ' ' + N.esc(T(unit)) + '</output>';
    };
    root.innerHTML = '<div class="fp"><div class="callout model"><p class="co-title">' + N.icon('layers') + N.esc(T(o('Dette er en modell – ikke en fasit', 'This is a model – not an answer key'))) + '</p><p data-say>' + N.fmt(F.disclaimer) + '</p></div>' +
      '<div class="fp-grid"><div class="fp-inputs">' +
      '<fieldset class="fp-card"><legend>' + N.icon('arrow') + N.esc(T(F.school.title)) + '</legend><label for="fp-school">' + N.esc(T(F.school.how)) + '</label>' + sel('school', F.school.modes) +
      '<label for="fp-km">' + N.esc(T(F.school.dist)) + '</label><div class="fp-r">' + range('km', 0, 20, 0.5, o('km', 'km')) + '</div></fieldset>' +
      '<fieldset class="fp-card"><legend>' + N.icon('planet') + N.esc(T(F.trip.title)) + '</legend><label for="fp-trip">' + N.esc(T(F.trip.how)) + '</label>' + sel('trip', F.trip.modes) +
      '<label for="fp-tripKm">' + N.esc(T(F.trip.dist)) + '</label><div class="fp-r">' + range('tripKm', 100, 9000, 100, o('km', 'km')) + '</div>' +
      '<label for="fp-trips">' + N.esc(T(F.trip.count)) + '</label><div class="fp-r">' + range('trips', 0, 4, 1, o('per år', 'per year')) + '</div></fieldset>' +
      '<fieldset class="fp-card"><legend>' + N.icon('leaf') + N.esc(T(F.food.title)) + '</legend><p class="act-help">' + N.fmt(F.food.help) + '</p>' + F.food.items.map(function (it) {
        return '<label for="fp-' + it.id + '">' + N.esc(T(it.name)) + '</label><div class="fp-r">' + range(it.id, 0, 7, 1, o('per uke', 'per week')) + '</div>';
      }).join('') + '<p class="fp-sum mono" id="fp-days"></p></fieldset></div>' +
      '<div class="fp-out" aria-live="polite"></div></div>' +
      '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(topic, F.src) + '</p></div>';
    function out() {
      const rows = calc(), tot = rows.reduce(function (a, r) { return a + r[1]; }, 0);
      const mx = Math.max(1, Math.max.apply(null, rows.map((r) => r[1])));
      const days = F.food.items.reduce(function (a, it) { return a + st[it.id]; }, 0);
      N.$('#fp-days', root).textContent = T(o('Middager valgt: ', 'Dinners chosen: ')) + days + ' / 7' + (days > 7 ? T(o(' – det er flere enn 7!', ' – that is more than 7!')) : '');
      N.$('.fp-out', root).innerHTML = '<h3>' + N.esc(T(o('Utslipp per år (modell)', 'Emissions per year (model)'))) + '</h3><div class="fp-bars">' + rows.map(function (r) {
        return '<div class="fp-bar"><span class="fp-lab">' + N.esc(T(r[0])) + '</span><span class="fp-track"><span style="width:' + f1(r[1] / mx * 100) + '%;background:' + r[2] + '"></span></span><span class="mono">' + num(r[1]) + ' kg</span></div>';
      }).join('') + '</div><p class="fp-total"><span class="mono">' + num(tot) + ' kg CO₂e</span> ' + N.esc(T(o('til sammen per år', 'in total per year'))) + '</p>' +
        '<p data-say>' + N.fmt(o('Det er omtrent like mye som å kjøre **' + num(tot / 0.17) + ' km** med en bensinbil alene.', 'That is about the same as driving **' + num(tot / 0.17) + ' km** alone in a petrol car.')) + '</p>' +
        '<div class="prompt"><span class="p-icon">' + N.icon('compare') + '</span><div><p class="co-title">' + N.u('discuss') + '</p><p data-say>' + N.fmt(F.discuss) + '</p></div></div>';
      N.$$('output[id$="-v"]', root).forEach(function (op) { const k = op.id.slice(3, -2); const unit = k === 'km' || k === 'tripKm' ? 'km' : k === 'trips' ? T(o('per år', 'per year')) : T(o('per uke', 'per week')); op.textContent = num(st[k], k === 'km' ? 1 : 0) + ' ' + unit; });
    }
    root.addEventListener('input', function (e) {
      const k = e.target.dataset.k; if (!k) return;
      st[k] = e.target.tagName === 'SELECT' ? e.target.value : Number(e.target.value);
      out();
    });
    out();
  };
})();
