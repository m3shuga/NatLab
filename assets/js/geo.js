/* =====================================================================
   NatLab – kart (Historien om Jorda)
   1) N.geoKit  – projeksjon og rotasjon av kontinenter på kula
   2) N.geomap  – interaktivt kart over plategrenser, jordskjelv og vulkaner
   3) N.drift   – «Kartet gjennom tid»: kontinentene fra Pangea til i dag
   Kartdataene ligger i content/jorda/kartdata.js (NatLab.geo).
   Innholdet (tekster, vulkaner, jordskjelv, hendelser) ligger i content/jorda/.
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  const R2D = 180 / Math.PI;

  /* ============================ 1) GEOKIT ============================ */
  const K = (N.geoKit = {});
  K.W = 1000; K.H = 500;
  K.px = function (lon) { return (lon + 180) * K.W / 360; };
  K.py = function (lat) { return (90 - lat) * K.H / 180; };
  K.vec = function (lon, lat) {
    const a = lon / R2D, b = lat / R2D;
    return [Math.cos(b) * Math.cos(a), Math.cos(b) * Math.sin(a), Math.sin(b)];
  };
  K.ll = function (v) { return [Math.atan2(v[1], v[0]) * R2D, Math.asin(Math.max(-1, Math.min(1, v[2]))) * R2D]; };
  K.qMul = function (a, b) {
    return [a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3], a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
      a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1], a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]];
  };
  K.qRot = function (q, v) {
    // v' = q v q*  (optimalisert)
    const w = q[0], x = q[1], y = q[2], z = q[3];
    const tx = 2 * (y * v[2] - z * v[1]), ty = 2 * (z * v[0] - x * v[2]), tz = 2 * (x * v[1] - y * v[0]);
    return [v[0] + w * tx + (y * tz - z * ty), v[1] + w * ty + (z * tx - x * tz), v[2] + w * tz + (x * ty - y * tx)];
  };
  /** Rotasjon fra «ingen rotasjon» til q, andel f (0–1) */
  K.slerp = function (q, f) {
    const th = Math.acos(Math.max(-1, Math.min(1, q[0])));
    if (th < 1e-6 || f <= 0) return [1, 0, 0, 0];
    const s = Math.sin(th), a = Math.sin((1 - f) * th) / s, b = Math.sin(f * th) / s;
    const r = [a + b * q[0], b * q[1], b * q[2], b * q[3]];
    const L = Math.hypot(r[0], r[1], r[2], r[3]);
    return [r[0] / L, r[1] / L, r[2] / L, r[3] / L];
  };
  /** Myk overgang: 1 før tidspunktet a (millioner år siden), 0 etter b */
  K.ss = function (t, a, b) { if (t >= a) return 1; if (t <= b) return 0; const x = (t - b) / (a - b); return x * x * (3 - 2 * x); };

  /**
   * Rotasjonene for hvert kontinent ved tiden t (millioner år siden).
   * Afrika (og Eurasia) holdes fast. Tidspunktene er forenklet fra
   * Store norske leksikon (Pangea, Gondwanaland, Himalayas geologi).
   */
  K.rots = function (t) {
    const R = N.geo.rot, I = [1, 0, 0, 0], q = { af: I, eu: I };
    q.na = K.slerp(R.na, K.ss(t, 195, 0));        // Atlanterhavet åpner seg (fra ca. 180–200 mill. år siden)
    q.gr = K.slerp(R.gr, K.ss(t, 62, 0));         // Grønland og Norge skilles (ca. 55–60)
    q.sa = K.slerp(R.sa, K.ss(t, 140, 0));        // Sør-Atlanterhavet åpner seg (fra ca. 140)
    q.ma = K.slerp(R.ma, K.ss(t, 170, 120));      // Madagaskar (og India) løsner fra Afrika
    q.in = K.qMul(q.ma, K.slerp(R.in_rel, K.ss(t, 90, 45))); // India drar nordover og kolliderer med Asia (ca. 50)
    q.an = K.slerp(R.an, K.ss(t, 165, 40));       // Antarktis drar mot sørpolen
    q.au = K.qMul(q.an, K.slerp(R.au_rel, K.ss(t, 85, 30))); // Australia løsner fra Antarktis
    return q;
  };
  /** Punkt (dagens lengde/bredde) som følger kontinentet k ved tiden t -> [x, y] */
  K.point = function (q, lon, lat) {
    const p = K.ll(K.qRot(q, K.vec(lon, lat)));
    return [K.px(p[0]), K.py(p[1])];
  };
  /** SVG-sti for ringer (lengde/bredde) rotert med q. copies: også ±1000 px (rundt kloden) */
  K.ringsPath = function (rings, q, copies) {
    let d = '';
    rings.forEach(function (ring) {
      let prev = null, off = 0, s = '';
      for (let i = 0; i < ring.length; i++) {
        const p = K.ll(K.qRot(q, K.vec(ring[i][0], ring[i][1])));
        let lo = p[0];
        if (prev !== null) { while (lo + off - prev > 180) off -= 360; while (lo + off - prev < -180) off += 360; }
        lo += off; prev = lo;
        s += (i ? 'L' : 'M') + K.px(lo).toFixed(1) + ' ' + K.py(p[1]).toFixed(1);
      }
      d += s + 'Z';
    });
    if (!copies) return d;
    return d + shift(d, 1000) + shift(d, -1000);
  };
  function shift(d, dx) {
    return d.replace(/([ML])(-?[\d.]+) /g, function (m, c, x) { return c + (parseFloat(x) + dx).toFixed(1) + ' '; });
  }
  /** Glatt lukket kurve gjennom punkter (til soner og «klatter») */
  K.blob = function (pts, pad) {
    // konveks innhylling + litt luft rundt
    const P = pts.slice().sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
    if (P.length < 3) {
      const c = P[0], r = pad || 8;
      return 'M' + (c[0] - r) + ' ' + c[1] + 'a' + r + ' ' + r + ' 0 1 0 ' + (2 * r) + ' 0a' + r + ' ' + r + ' 0 1 0 ' + (-2 * r) + ' 0Z';
    }
    const cross = function (o, a, b) { return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); };
    const lo = [], up = [];
    P.forEach(function (p) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); });
    for (let i = P.length - 1; i >= 0; i--) { const p = P[i]; while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
    const hull = lo.slice(0, -1).concat(up.slice(0, -1));
    let cx = 0, cy = 0; hull.forEach(function (p) { cx += p[0]; cy += p[1]; }); cx /= hull.length; cy /= hull.length;
    const g = hull.map(function (p) { const dx = p[0] - cx, dy = p[1] - cy, L = Math.hypot(dx, dy) || 1; return [p[0] + dx / L * (pad || 6), p[1] + dy / L * (pad || 6)]; });
    const n = g.length; let d = 'M' + g[0][0].toFixed(1) + ' ' + g[0][1].toFixed(1);
    for (let i = 0; i < n; i++) {
      const p0 = g[(i - 1 + n) % n], p1 = g[i], p2 = g[(i + 1) % n], p3 = g[(i + 2) % n];
      d += 'C' + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) + ' ' +
        (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) + ' ' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
    }
    return d + 'Z';
  };
  /** Bevissoner (fossiler, isspor, fjellkjeder) tegnet på kontinentene ved tiden t */
  K.zonesSvg = function (zones, q, o) {
    o = o || {};
    return zones.map(function (z) {
      const pieces = {};
      z.pts.forEach(function (p) { (pieces[p[0]] = pieces[p[0]] || []).push(K.point(q[p[0]], p[1], p[2])); });
      const d = Object.keys(pieces).map(function (k) { return K.blob(pieces[k], z.pad || 7); }).join('');
      const attrs = o.part ? ' data-part="' + z.id + '"' : ' data-zone="' + z.id + '"';
      return '<g class="zone"' + attrs + '><path d="' + d + '" fill="' + z.color + '" fill-opacity=".45" stroke="' + z.color + '" stroke-width="2.5"' +
        (z.dash ? ' stroke-dasharray="6 4"' : '') + '/>' +
        (z.mark ? Object.keys(pieces).map(function (k) {
          return pieces[k].map(function (p) { return '<text x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '" class="zone-mark" fill="' + z.color + '">' + z.mark + '</text>'; }).join('');
        }).join('') : '') + '</g>';
    }).join('');
  };
  K.dec = function (x, d) { return Number(x).toFixed(d == null ? 1 : d).replace('.', N.settings.lang === 'en' ? '.' : ','); };

  /* ======================= 2) PLATEGRENSEKARTET ======================= */
  const OCEANIC = ['PA', 'NZ', 'CO', 'JF', 'PS', 'RI', 'MA', 'TO', 'KE', 'NH', 'CL', 'MN', 'NB', 'SB', 'SS', 'WL', 'NI', 'FT', 'BR', 'CR', 'EA', 'GP', 'JZ', 'SW', 'CA', 'SC', 'BS', 'MS'];
  function kindOf(b) {
    const t = b.t;
    if (t === 'OSR') return 'spredning';
    if (t === 'CRB') return 'rift';
    if (t === 'OTF' || t === 'CTF') return 'transform';
    if (t === 'CCB') return 'kollisjon';
    const pl = b.p.split(/[-\\/]/);
    return (OCEANIC.indexOf(pl[0]) >= 0 && OCEANIC.indexOf(pl[1]) >= 0) ? 'oybue' : 'subduksjon';
  }
  const VIEWS = {
    verden: '0 30 1000 420',
    stillehavet: '600 40 640 380',
    atlanterhavet: '250 40 400 360',
    asia: '640 80 300 200',
    norden: '400 18 230 130'
  };

  N.geomap = function (root, cfg) {
    const G = N.geo, T = N.topics[cfg.topic], C = cfg.page;
    const kinds = C.kinds;
    const state = { layers: { plater: false, grenser: true, skjelv: true, vulkaner: true }, view: 'verden', sel: null };

    // --- statisk SVG-innhold (tegnes én gang, to kopier side om side) ---
    const bounds = G.bounds.map(function (b, i) { return Object.assign({ i: i, k: kindOf(b) }, b); });
    const plateName = function (code) { return C.plates[code] ? N.t(C.plates[code]) : N.t({ nb: 'en liten plate', en: 'a small plate' }); };
    function world() {
      const plates = G.plates.map(function (p) { return '<path d="' + p.d + '" data-pl="' + p.c + '"/>'; }).join('');
      const quake = bounds.map(function (b) { return '<path d="' + b.d + '" class="qz qz-' + b.k + '" data-bi="' + b.i + '"/>'; }).join('');
      const lines = bounds.map(function (b) { return '<path d="' + b.d + '" class="bd bd-' + b.k + '" data-bi="' + b.i + '"/>'; }).join('');
      return '<g class="gm-plates">' + plates + '</g>' +
        '<path class="gm-land" d="' + G.land + '"/>' +
        '<g class="gm-quake">' + quake + '</g>' +
        '<g class="gm-bounds">' + lines + '</g>';
    }
    function markers() {
      const v = (C.volcanoes || []).map(function (x, i) {
        const X = K.px(x.lon), Y = K.py(x.lat);
        return '<g class="gm-v' + (x.hotspot ? ' is-hot' : '') + '" data-v="' + i + '" tabindex="0" role="button" aria-label="' + N.esc(N.t(x.name)) + '">' +
          '<path d="M' + X.toFixed(1) + ' ' + (Y - 6).toFixed(1) + 'l5.5 9.5h-11z"/></g>';
      }).join('');
      const q = (C.quakes || []).map(function (x, i) {
        const X = K.px(x.lon), Y = K.py(x.lat), r = 2.2 + Math.max(0, x.mag - 5) * 1.6;
        return '<g class="gm-q" data-q="' + i + '" tabindex="0" role="button" aria-label="' + N.esc(N.t(x.name)) + '">' +
          '<circle cx="' + X.toFixed(1) + '" cy="' + Y.toFixed(1) + '" r="' + r.toFixed(1) + '"/></g>';
      }).join('');
      return '<g class="gm-volc">' + v + '</g><g class="gm-eq">' + q + '</g>';
    }
    const inner = world();
    const marks = markers();
    const legendItems = ['spredning', 'rift', 'subduksjon', 'oybue', 'kollisjon', 'transform'];

    root.innerHTML = '<div class="explorer geomap">' +
      '<div class="ex-stage">' +
      '<div class="ex-toolbar gm-tools" role="group" aria-label="' + N.esc(N.t({ nb: 'Kartlag', en: 'Map layers' })) + '">' +
      ['grenser', 'skjelv', 'vulkaner', 'plater'].map(function (k) {
        return '<button type="button" class="btn btn-sm gm-layer" data-layer="' + k + '" aria-pressed="' + state.layers[k] + '"><span class="gm-sw gm-sw-' + k + '" aria-hidden="true"></span>' + N.esc(N.t(C.layerNames[k])) + '</button>';
      }).join('') + '</div>' +
      '<div class="seg gm-views" role="group" aria-label="' + N.esc(N.t({ nb: 'Velg område', en: 'Choose area' })) + '">' +
      Object.keys(VIEWS).map(function (k) { return '<button type="button" data-view="' + k + '" aria-pressed="' + (k === state.view) + '">' + N.esc(N.t(C.viewNames[k])) + '</button>'; }).join('') + '</div>' +
      '<figure class="slide gm-figure"><svg class="gm-svg" viewBox="' + VIEWS.verden + '" role="group" aria-label="' + N.esc(N.t(C.title)) + '">' +
      '<rect x="-1000" y="0" width="3000" height="500" class="gm-sea"/>' +
      '<g class="gm-world">' + inner + '</g><g class="gm-world" transform="translate(1000 0)">' + inner + '</g>' +
      '<g class="gm-world" transform="translate(-1000 0)" aria-hidden="true">' + inner + '</g>' +
      '<g class="gm-marks">' + marks + '</g><g class="gm-marks" transform="translate(1000 0)" aria-hidden="true">' + marks + '</g>' +
      '</svg><figcaption>' + N.fmt(C.caption) + '</figcaption></figure>' +
      '<ul class="gm-legend" aria-label="' + N.esc(N.t({ nb: 'Tegnforklaring', en: 'Legend' })) + '">' +
      legendItems.map(function (k) { return '<li><button type="button" data-kind="' + k + '"><span class="gm-line bd-' + k + '" aria-hidden="true"></span>' + N.esc(N.t(kinds[k].name)) + '</button></li>'; }).join('') +
      '<li><span class="gm-tri" aria-hidden="true"></span>' + N.esc(N.t({ nb: 'Vulkan', en: 'Volcano' })) + '</li>' +
      '<li><span class="gm-tri is-hot" aria-hidden="true"></span>' + N.esc(N.t({ nb: 'Vulkan over en varm flekk', en: 'Hotspot volcano' })) + '</li>' +
      '<li><span class="gm-dot" aria-hidden="true"></span>' + N.esc(N.t({ nb: 'Kjent jordskjelv (større ring = sterkere)', en: 'Well-known earthquake (bigger ring = stronger)' })) + '</li>' +
      '<li><span class="gm-zone" aria-hidden="true"></span>' + N.esc(N.t({ nb: 'Jordskjelvsone', en: 'Earthquake zone' })) + '</li></ul>' +
      '<div class="gm-examples"><p class="label">' + N.esc(N.t({ nb: 'Hopp til et eksempel:', en: 'Jump to an example:' })) + '</p><div class="scale-stops">' +
      C.examples.map(function (e, i) { return '<button type="button" class="btn btn-sm" data-ex="' + i + '">' + N.esc(N.t(e.name)) + '</button>'; }).join('') + '</div></div>' +
      '</div>' +
      '<aside class="ex-panel" id="gm-panel" aria-live="polite" tabindex="-1" data-read-scope></aside></div>';

    const svg = N.$('.gm-svg', root);
    const panel = N.$('#gm-panel', root);

    function applyLayers() {
      Object.keys(state.layers).forEach(function (k) { svg.classList.toggle('show-' + k, state.layers[k]); });
      N.$$('[data-layer]', root).forEach(function (b) { b.setAttribute('aria-pressed', String(state.layers[b.dataset.layer])); });
    }
    function setView(v) {
      state.view = v;
      svg.setAttribute('viewBox', VIEWS[v]);
      svg.classList.toggle('is-zoomed', v !== 'verden');
      N.$$('[data-view]', root).forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.view === v)); });
    }
    function mark(sel) {
      N.$$('.is-sel', svg).forEach(function (el) { el.classList.remove('is-sel'); });
      svg.classList.toggle('has-sel', !!sel);
      if (!sel) return;
      if (sel.b != null) {
        const b = bounds[sel.b];
        N.$$('.bd', svg).forEach(function (el) { if (bounds[el.dataset.bi].p === b.p && bounds[el.dataset.bi].k === b.k) el.classList.add('is-sel'); });
      }
      if (sel.v != null) N.$$('[data-v="' + sel.v + '"]', svg).forEach(function (el) { el.classList.add('is-sel'); });
      if (sel.q != null) N.$$('[data-q="' + sel.q + '"]', svg).forEach(function (el) { el.classList.add('is-sel'); });
      if (sel.pl) N.$$('[data-pl="' + sel.pl + '"]', svg).forEach(function (el) { el.classList.add('is-sel'); });
      if (sel.kind) N.$$('.bd-' + sel.kind, svg).forEach(function (el) { el.classList.add('is-sel'); });
    }

    function kindBlock(k) {
      const x = kinds[k];
      return '<div><dt>' + N.esc(N.t({ nb: 'Hva skjer her?', en: 'What happens here?' })) + '</dt><dd data-say>' + N.fmt(x.what) + '</dd></div>' +
        '<div><dt>' + N.esc(N.t({ nb: 'Det fører til', en: 'This leads to' })) + '</dt><dd><ul class="gm-results">' + x.results.map(function (r) { return '<li data-say>' + N.fmt(r) + '</li>'; }).join('') + '</ul></dd></div>' +
        (x.examples ? '<div><dt>' + N.esc(N.t({ nb: 'Eksempler', en: 'Examples' })) + '</dt><dd data-say>' + N.fmt(x.examples) + '</dd></div>' : '');
    }
    function head(color, title, sub) {
      return '<div class="sp-head" style="--c:' + color + '"><span class="sp-dot" aria-hidden="true"></span><h3 data-say>' + N.esc(title) + '</h3>' +
        '<button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button></div>' +
        (sub ? '<p class="sp-tag" data-say>' + N.fmt(sub) + '</p>' : '');
    }
    function linkTo(k) {
      const x = kinds[k];
      return x.link ? '<p><a class="btn btn-sm" href="' + x.link + '">' + N.icon('target') + N.esc(N.t({ nb: 'Se tverrsnittet', en: 'See the cross-section' })) + '</a></p>' : '';
    }
    function showPanel() {
      const s = state.sel;
      mark(s);
      if (!s) {
        panel.innerHTML = '<div class="panel-empty"><h3>' + N.esc(N.t({ nb: 'Oppdag sammenhengen', en: 'Discover the connection' })) + '</h3>' +
          '<p>' + N.esc(N.t({ nb: 'Klikk på en plategrense, en vulkan eller et jordskjelv. Eller følg stegene:', en: 'Click a plate boundary, a volcano or an earthquake. Or follow the steps:' })) + '</p>' +
          '<ol class="gm-steps">' + C.steps.map(function (st, i) {
            return '<li><p data-say>' + N.fmt(st.q) + '</p><button type="button" class="btn btn-sm" data-step="' + i + '">' + N.icon('eye') + N.esc(N.t({ nb: 'Vis meg', en: 'Show me' })) + '</button>' +
              '<details class="gm-answer"><summary>' + N.esc(N.t({ nb: 'Se svaret', en: 'See the answer' })) + '</summary><p data-say>' + N.fmt(st.a) + '</p></details></li>';
          }).join('') + '</ol></div>';
        return;
      }
      let h = '';
      if (s.b != null) {
        const b = bounds[s.b], pl = b.p.split(/[-\\/]/);
        h = head(kinds[b.k].color, N.t(kinds[b.k].name), { nb: 'Her møtes **' + plateName(pl[0]) + '** og **' + plateName(pl[1]) + '**.', en: 'Here **' + plateName(pl[0]) + '** and **' + plateName(pl[1]) + '** meet.' }) +
          '<dl><div><dt>' + N.esc(N.t({ nb: 'Fart', en: 'Speed' })) + '</dt><dd data-say>' + N.esc(N.t({ nb: 'Platene beveger seg omtrent ' + K.dec(b.v / 10) + ' cm per år i forhold til hverandre her.', en: 'The plates move about ' + K.dec(b.v / 10) + ' cm per year relative to each other here.' })) + '</dd></div>' +
          kindBlock(b.k) + '</dl>' + linkTo(b.k);
      } else if (s.kind) {
        h = head(kinds[s.kind].color, N.t(kinds[s.kind].name), N.t({ nb: 'Alle grenser av denne typen er uthevet på kartet.', en: 'All boundaries of this type are highlighted on the map.' })) + '<dl>' + kindBlock(s.kind) + '</dl>' + linkTo(s.kind);
      } else if (s.v != null) {
        const v = C.volcanoes[s.v];
        h = head('#c42b4f', N.t(v.name), v.place) + '<dl><div><dt>' + N.esc(N.t({ nb: 'Hvorfor er det en vulkan her?', en: 'Why is there a volcano here?' })) + '</dt><dd data-say>' + N.fmt(v.why) + '</dd></div>' +
          (v.fact ? '<div><dt>' + N.u('didYouKnow') + '</dt><dd data-say>' + N.fmt(v.fact) + '</dd></div>' : '') + '</dl>' +
          (v.src ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(cfg.topic, v.src) + '</p>' : '');
      } else if (s.q != null) {
        const q = C.quakes[s.q];
        h = head('#b07d12', N.t(q.name), { nb: 'Styrke ' + K.dec(q.mag) + ' · ' + q.year, en: 'Magnitude ' + K.dec(q.mag) + ' · ' + q.year }) +
          '<dl><div><dt>' + N.esc(N.t({ nb: 'Hvorfor skjedde det her?', en: 'Why did it happen here?' })) + '</dt><dd data-say>' + N.fmt(q.why) + '</dd></div>' +
          (q.fact ? '<div><dt>' + N.u('didYouKnow') + '</dt><dd data-say>' + N.fmt(q.fact) + '</dd></div>' : '') + '</dl>' +
          (q.src ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(cfg.topic, q.src) + '</p>' : '');
      } else if (s.pl) {
        const big = !!C.plates[s.pl];
        h = head('#5b6b7a', plateName(s.pl), null) + '<dl><div><dt>' + N.u('whatIsIt') + '</dt><dd data-say>' +
          N.fmt(big ? C.plateText : C.smallPlateText) + '</dd></div></dl>';
      } else if (s.ex != null) {
        const e = C.examples[s.ex];
        h = head(kinds[e.kind].color, N.t(e.name), kinds[e.kind].name) + '<dl><div><dt>' + N.esc(N.t({ nb: 'Hva skjer her?', en: 'What happens here?' })) + '</dt><dd data-say>' + N.fmt(e.text) + '</dd></div></dl>' +
          linkTo(e.kind) + (e.src ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(cfg.topic, e.src) + '</p>' : '');
      }
      panel.innerHTML = '<p style="margin-bottom:.4rem"><button type="button" class="btn btn-sm btn-ghost" data-clear>' + N.icon('back') + N.esc(N.t({ nb: 'Tilbake til stegene', en: 'Back to the steps' })) + '</button></p>' + h;
    }
    function select(s, scroll) {
      state.sel = s;
      N.readAloud && N.readAloud.stop();
      showPanel();
      if (scroll && window.matchMedia('(max-width: 979px)').matches) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    svg.addEventListener('click', function (e) {
      const t = e.target.closest('[data-bi],[data-v],[data-q],[data-pl]');
      if (!t) { select(null); return; }
      if (t.dataset.bi != null) select({ b: +t.dataset.bi }, true);
      else if (t.dataset.v != null) select({ v: +t.dataset.v }, true);
      else if (t.dataset.q != null) select({ q: +t.dataset.q }, true);
      else if (t.dataset.pl && state.layers.plater) select({ pl: t.dataset.pl }, true);
    });
    svg.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const t = e.target.closest('[data-v],[data-q]');
      if (!t) return;
      e.preventDefault();
      if (t.dataset.v != null) select({ v: +t.dataset.v }, true); else select({ q: +t.dataset.q }, true);
    });
    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b) || svg.contains(b)) return;
      if (b.dataset.layer) { state.layers[b.dataset.layer] = !state.layers[b.dataset.layer]; applyLayers(); return; }
      if (b.dataset.view) { setView(b.dataset.view); return; }
      if (b.dataset.kind) { select({ kind: b.dataset.kind }, true); return; }
      if (b.dataset.ex != null) { const ex = C.examples[+b.dataset.ex]; setView(ex.view); select({ ex: +b.dataset.ex }, true); N.$$('.bd-' + ex.kind, svg).forEach(function (el) { el.classList.add('is-sel'); }); svg.classList.add('has-sel'); return; }
      if (b.hasAttribute('data-clear')) { select(null); return; }
      if (b.dataset.step != null) {
        const st = C.steps[+b.dataset.step];
        Object.keys(state.layers).forEach(function (k) { state.layers[k] = st.layers.indexOf(k) >= 0; });
        applyLayers(); setView(st.view || 'verden');
        mark(null);
        if (st.kind) { N.$$('.bd-' + st.kind, svg).forEach(function (el) { el.classList.add('is-sel'); }); svg.classList.add('has-sel'); }
        if (st.volcano != null) { N.$$('[data-v="' + st.volcano + '"]', svg).forEach(function (el) { el.classList.add('is-sel'); }); svg.classList.add('has-sel'); }
        if (window.matchMedia('(max-width: 979px)').matches) svg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });

    applyLayers();
    setView('verden');
    showPanel();
  };

  /* ===================== 3) KARTET GJENNOM TID ===================== */
  N.drift = function (root, cfg) {
    const G = N.geo, C = cfg.page;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MAX = C.start || 250;
    const state = { t: MAX, playing: false, zones: false, names: true, sel: null };
    const order = ['an', 'au', 'sa', 'af', 'ma', 'in', 'eu', 'na', 'gr'];

    root.innerHTML = '<div class="explorer drift">' +
      '<div class="ex-stage">' +
      '<div class="ex-toolbar">' +
      '<button type="button" class="btn btn-sm btn-primary" data-play>' + N.icon('play') + '<span>' + N.esc(N.t({ nb: 'Spill av', en: 'Play' })) + '</span></button>' +
      '<button type="button" class="btn btn-sm" data-zones aria-pressed="false">' + N.icon('eye') + N.esc(N.t({ nb: 'Vis fossiler og andre bevis', en: 'Show fossils and other evidence' })) + '</button>' +
      '<button type="button" class="btn btn-sm" data-names aria-pressed="true">' + N.icon('book') + N.esc(N.t({ nb: 'Navn', en: 'Names' })) + '</button>' +
      '</div>' +
      '<div class="dr-time"><label for="dr-range" class="dr-label"><span class="dr-big" id="dr-now"></span></label>' +
      '<input type="range" id="dr-range" min="0" max="' + MAX + '" step="1" value="0" aria-valuetext="">' +
      '<div class="dr-scale" aria-hidden="true"><span>' + MAX + '</span><span>' + Math.round(MAX * 0.6) + '</span><span>' + Math.round(MAX * 0.2) + '</span><span>0</span></div>' +
      '<div class="scale-stops dr-stops">' + C.events.map(function (ev, i) { return '<button type="button" class="btn btn-sm" data-go="' + ev.t + '">' + ev.t + '</button>'; }).join('') + '</div></div>' +
      '<figure class="slide dr-figure"><svg class="dr-svg" viewBox="0 18 1000 452" role="group" aria-label="' + N.esc(N.t(C.title)) + '">' +
      '<rect x="-10" y="0" width="1020" height="500" class="dr-sea"/>' +
      '<g class="dr-grid" aria-hidden="true">' + [-60, -30, 0, 30, 60].map(function (la) { return '<line x1="0" x2="1000" y1="' + K.py(la) + '" y2="' + K.py(la) + '"' + (la === 0 ? ' class="eq"' : '') + '/>'; }).join('') + '</g>' +
      '<g class="dr-oceans" aria-hidden="true"></g>' +
      '<g class="dr-conts">' + order.map(function (k) { return '<path data-c="' + k + '" class="dr-c dr-c-' + k + '" tabindex="0" role="button" aria-label="' + N.esc(N.t(C.names[k])) + '"/>'; }).join('') + '</g>' +
      '<g class="dr-zones"></g><g class="dr-names" aria-hidden="true"></g>' +
      '</svg><figcaption>' + N.fmt(C.caption) + '</figcaption></figure>' +
      '<div class="dr-event" aria-live="polite"></div>' +
      '</div>' +
      '<aside class="ex-panel" id="dr-panel" aria-live="polite" tabindex="-1" data-read-scope></aside></div>';

    const svg = N.$('.dr-svg', root), range = N.$('#dr-range', root), panel = N.$('#dr-panel', root);
    const paths = {}; N.$$('.dr-c', svg).forEach(function (p) { paths[p.dataset.c] = p; });
    const gZones = N.$('.dr-zones', svg), gNames = N.$('.dr-names', svg), gOcean = N.$('.dr-oceans', svg);
    const evBox = N.$('.dr-event', root);
    let lastEvent = null;

    function eventAt(t) {
      let e = C.events[0];
      C.events.forEach(function (x) { if (t <= x.t) e = x; });
      return e;
    }
    function draw() {
      const t = state.t, q = K.rots(t);
      order.forEach(function (k) { paths[k].setAttribute('d', K.ringsPath(G.cont[k], q[k], true)); });
      gZones.innerHTML = state.zones ? K.zonesSvg(C.zones, q) : '';
      gNames.innerHTML = state.names ? order.map(function (k) {
        const c = C.centers[k]; if (!c) return '';
        const p = K.point(q[k], c[0], c[1]);
        return '<text x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '">' + N.esc(N.t(C.names[k])) + '</text>';
      }).join('') : '';
      gOcean.innerHTML = C.oceans.filter(function (o) { return t <= o.from && t >= o.to; }).map(function (o) {
        return '<text x="' + o.x + '" y="' + o.y + '">' + N.esc(N.t(o.name)) + '</text>';
      }).join('');
      const txt = N.t({ nb: t === 0 ? 'I dag' : t + ' millioner år siden', en: t === 0 ? 'Today' : t + ' million years ago' });
      N.$('#dr-now', root).textContent = txt;
      range.value = String(MAX - t);
      range.setAttribute('aria-valuetext', txt);
      const ev = eventAt(t);
      if (ev !== lastEvent) {
        lastEvent = ev;
        evBox.innerHTML = '<p class="co-title">' + N.icon('book') + N.esc(N.t(ev.title)) + '</p><p data-say>' + N.fmt(ev.text) + '</p>';
        N.$$('[data-go]', root).forEach(function (b) { b.setAttribute('aria-pressed', String(+b.dataset.go === ev.t)); });
      }
    }
    function showPanel() {
      N.$$('.dr-c', svg).forEach(function (p) { p.classList.toggle('is-sel', p.dataset.c === state.sel); });
      svg.classList.toggle('has-sel', !!state.sel);
      if (!state.sel) {
        panel.innerHTML = '<div class="panel-empty"><h3>' + N.esc(N.t({ nb: 'Klikk på et kontinent', en: 'Click a continent' })) + '</h3><p data-say>' + N.fmt(C.intro) + '</p></div>';
        return;
      }
      const k = state.sel, info = C.info[k];
      panel.innerHTML = '<div class="sp-head" style="--c:var(--dr-' + k + ')"><span class="sp-dot" aria-hidden="true"></span><h3 data-say>' + N.esc(N.t(C.names[k])) + '</h3>' +
        '<button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button></div>' +
        '<dl><div><dt>' + N.esc(N.t({ nb: 'Reisen', en: 'The journey' })) + '</dt><dd data-say>' + N.fmt(info.text) + '</dd></div>' +
        (info.fact ? '<div><dt>' + N.u('didYouKnow') + '</dt><dd data-say>' + N.fmt(info.fact) + '</dd></div>' : '') + '</dl>' +
        (info.src ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(cfg.topic, info.src) + '</p>' : '');
    }
    let raf = 0, lastTs = 0;
    function setPlaying(p) {
      state.playing = p;
      const b = N.$('[data-play]', root);
      b.innerHTML = N.icon(p ? 'pause' : 'play') + '<span>' + N.esc(N.t(p ? { nb: 'Pause', en: 'Pause' } : { nb: 'Spill av', en: 'Play' })) + '</span>';
      cancelAnimationFrame(raf);
      if (p) { if (state.t <= 0) state.t = MAX; lastTs = 0; raf = requestAnimationFrame(tick); }
    }
    function tick(ts) {
      if (!root.isConnected) return;
      if (lastTs) {
        const dt = Math.min(0.1, (ts - lastTs) / 1000);
        state.t = Math.max(0, state.t - dt * (C.speed || 12));
      }
      lastTs = ts;
      const shown = Math.round(state.t);
      const save = state.t; state.t = shown; draw(); state.t = save;
      if (state.t <= 0) { state.t = 0; setPlaying(false); draw(); return; }
      raf = requestAnimationFrame(tick);
    }
    range.addEventListener('input', function () { setPlaying(false); state.t = MAX - Number(range.value); draw(); });
    root.addEventListener('click', function (e) {
      const c = e.target.closest('.dr-c');
      if (c) { state.sel = state.sel === c.dataset.c ? null : c.dataset.c; showPanel(); return; }
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.hasAttribute('data-play')) { setPlaying(!state.playing); return; }
      if (b.hasAttribute('data-zones')) { state.zones = !state.zones; b.setAttribute('aria-pressed', String(state.zones)); draw(); return; }
      if (b.hasAttribute('data-names')) { state.names = !state.names; b.setAttribute('aria-pressed', String(state.names)); draw(); return; }
      if (b.dataset.go) { setPlaying(false); state.t = +b.dataset.go; draw(); return; }
    });
    svg.addEventListener('keydown', function (e) {
      const c = e.target.closest('.dr-c');
      if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); state.sel = c.dataset.c; showPanel(); }
    });
    draw();
    showPanel();
    if (reduce) { /* ingen automatisk avspilling */ }
  };
})();
