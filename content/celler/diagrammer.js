/* =====================================================================
   Celler og virus – TEGNINGENE (modellene)
   ---------------------------------------------------------------------
   Hver tegning er laget med kode (SVG). Hver del som kan klikkes, ligger i
   en gruppe med data-part="id", der id-en må finnes i strukturer.js.
   parts: rekkefølgen her = rekkefølgen på numrene i tegningen.
   at: [x, y] = hvor nummeret (nålen) skal stå.
   note: ekstra tekst om delen akkurat i denne modellen.
   Du trenger vanligvis ikke endre denne filen.
   ===================================================================== */
(function () {
  const N = window.NatLab;
  const f = (n) => Math.round(n * 10) / 10;

  /* ---------- Hjelpefunksjoner for tegning ---------- */
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function smoothClosed(pts) {
    const n = pts.length;
    let d = 'M' + f(pts[0][0]) + ',' + f(pts[0][1]);
    for (let i = 0; i < n; i++) {
      const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      d += 'C' + f(p1[0] + (p2[0] - p0[0]) / 6) + ',' + f(p1[1] + (p2[1] - p0[1]) / 6) + ' ' +
        f(p2[0] - (p3[0] - p1[0]) / 6) + ',' + f(p2[1] - (p3[1] - p1[1]) / 6) + ' ' + f(p2[0]) + ',' + f(p2[1]);
    }
    return d + 'Z';
  }
  function smoothOpen(pts) {
    const n = pts.length;
    let d = 'M' + f(pts[0][0]) + ',' + f(pts[0][1]);
    for (let i = 0; i < n - 1; i++) {
      const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, n - 1)];
      d += 'C' + f(p1[0] + (p2[0] - p0[0]) / 6) + ',' + f(p1[1] + (p2[1] - p0[1]) / 6) + ' ' +
        f(p2[0] - (p3[0] - p1[0]) / 6) + ',' + f(p2[1] - (p3[1] - p1[1]) / 6) + ' ' + f(p2[0]) + ',' + f(p2[1]);
    }
    return d;
  }
  /** Punkt på en «klump» med radiusfunksjon rf(vinkel) */
  function blobPt(cx, cy, rx, ry, rf, a) { const r = rf(a); return [cx + rx * r * Math.cos(a), cy + ry * r * Math.sin(a)]; }
  function blob(cx, cy, rx, ry, rf, n) {
    const pts = [];
    for (let k = 0; k < n; k++) pts.push(blobPt(cx, cy, rx, ry, rf, (k / n) * Math.PI * 2));
    return smoothClosed(pts);
  }
  function rr(x, y, w, h, r) {
    return 'M' + (x + r) + ',' + y + 'H' + (x + w - r) + 'A' + r + ',' + r + ' 0 0 1 ' + (x + w) + ',' + (y + r) +
      'V' + (y + h - r) + 'A' + r + ',' + r + ' 0 0 1 ' + (x + w - r) + ',' + (y + h) + 'H' + (x + r) +
      'A' + r + ',' + r + ' 0 0 1 ' + x + ',' + (y + h - r) + 'V' + (y + r) + 'A' + r + ',' + r + ' 0 0 1 ' + (x + r) + ',' + y + 'Z';
  }
  function arc(cx, cy, r, a0, a1) {
    const rad = Math.PI / 180;
    const x0 = cx + r * Math.cos(a0 * rad), y0 = cy + r * Math.sin(a0 * rad);
    const x1 = cx + r * Math.cos(a1 * rad), y1 = cy + r * Math.sin(a1 * rad);
    const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
    return 'M' + f(x0) + ',' + f(y0) + 'A' + r + ',' + r + ' 0 ' + large + ' 1 ' + f(x1) + ',' + f(y1);
  }

  /* ---------- Organeller ---------- */
  function mito(cx, cy, rx, ry, rot) {
    let z = '';
    const steps = Math.max(5, Math.round(rx / 7));
    for (let i = 0; i <= steps; i++) {
      const x = -rx * 0.72 + (i / steps) * rx * 1.44;
      const y = (i % 2 ? 1 : -1) * ry * 0.5;
      z += (i ? 'L' : 'M') + f(x) + ',' + f(y);
    }
    return '<g transform="translate(' + cx + ' ' + cy + ') rotate(' + rot + ')">' +
      '<ellipse rx="' + rx + '" ry="' + ry + '" fill="#f7a877" stroke="#e8712f" stroke-width="3.5"/>' +
      '<path d="' + z + '" fill="none" stroke="#c4531a" stroke-width="2.2" stroke-linejoin="round"/></g>';
  }
  function chloro(cx, cy, rx, ry, rot) {
    let g = '';
    const n = 4;
    for (let i = 0; i < n; i++) {
      const x = -rx * 0.6 + (i / (n - 1)) * rx * 1.2;
      g += '<rect x="' + f(x - 5) + '" y="' + f(-ry * 0.45) + '" width="10" height="' + f(ry * 0.9) + '" rx="2.5" fill="#23743a"/>' +
        '<path d="M' + f(x - 5) + ',' + f(-ry * 0.15) + 'h10M' + f(x - 5) + ',' + f(ry * 0.15) + 'h10" stroke="#7fd08f" stroke-width="1.3"/>';
    }
    return '<g transform="translate(' + cx + ' ' + cy + ') rotate(' + rot + ')">' +
      '<ellipse rx="' + rx + '" ry="' + ry + '" fill="#5cbf6d" stroke="#2a7d3f" stroke-width="3"/>' +
      '<path d="M' + f(-rx * 0.8) + ',0H' + f(rx * 0.8) + '" stroke="#9ee0a9" stroke-width="2"/>' + g + '</g>';
  }
  function lyso(cx, cy, r) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#e8b0d6" stroke="#b23f8c" stroke-width="2.5"/>' +
      '<circle cx="' + f(cx - r * 0.35) + '" cy="' + f(cy - r * 0.2) + '" r="' + f(r * 0.17) + '" fill="#b23f8c"/>' +
      '<circle cx="' + f(cx + r * 0.3) + '" cy="' + f(cy + r * 0.05) + '" r="' + f(r * 0.17) + '" fill="#b23f8c"/>' +
      '<circle cx="' + f(cx - r * 0.05) + '" cy="' + f(cy + r * 0.4) + '" r="' + f(r * 0.17) + '" fill="#b23f8c"/>';
  }
  function vesicle(cx, cy, r) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#c7e6f7" stroke="#4aa3d6" stroke-width="2.5"/>';
  }
  function ribo(cx, cy, r) { return '<circle cx="' + f(cx) + '" cy="' + f(cy) + '" r="' + (r || 3.4) + '" fill="#2a62d9"/>'; }
  function golgiStack(cx, cy, len, n, gap, bend) {
    let s = '';
    for (let i = 0; i < n; i++) {
      const x = cx + (i - (n - 1) / 2) * gap;
      const half = len / 2 - i * 3;
      const d = 'M' + f(x) + ',' + f(cy - half) + 'Q' + f(x - bend) + ',' + cy + ' ' + f(x) + ',' + f(cy + half);
      s += '<path d="' + d + '" fill="none" stroke="#d99a1e" stroke-width="10" stroke-linecap="round"/>' +
        '<path d="' + d + '" fill="none" stroke="#f8d98f" stroke-width="4" stroke-linecap="round"/>';
    }
    return s;
  }
  function membrane(d, w) {
    w = w || 9;
    return '<path d="' + d + '" fill="none" stroke="transparent" stroke-width="' + (w + 14) + '"/>' +
      '<path d="' + d + '" fill="none" stroke="#d6457a" stroke-width="' + w + '"/>' +
      '<path d="' + d + '" fill="none" stroke="#f6b6cd" stroke-width="' + f(w * 0.38) + '"/>';
  }
  function nucleus(p, cx, cy, r, seed) {
    const R = rng(seed);
    let chrom = '';
    for (let i = 0; i < 6; i++) {
      const pts = [];
      let a = R() * Math.PI * 2, d = R() * r * 0.55;
      for (let k = 0; k < 5; k++) {
        pts.push([cx + Math.cos(a) * d, cy + Math.sin(a) * d]);
        a += (R() - 0.5) * 2.2; d = Math.min(r * 0.7, Math.max(r * 0.15, d + (R() - 0.5) * r * 0.5));
      }
      chrom += '<path d="' + smoothOpen(pts) + '" fill="none" stroke="#4b36a8" stroke-opacity=".45" stroke-width="2.4" stroke-linecap="round"/>';
    }
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="url(#' + p + 'nuc)"/>' + chrom +
      '<circle cx="' + f(cx + r * 0.2) + '" cy="' + f(cy - r * 0.18) + '" r="' + f(r * 0.28) + '" fill="#5b43c2" fill-opacity=".85"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#4d36b5" stroke-width="6" stroke-dasharray="22 5"/>';
  }
  function defs(p) {
    return '<defs>' +
      '<radialGradient id="' + p + 'nuc" cx="40%" cy="38%" r="70%"><stop offset="0" style="stop-color:var(--c-nuc)"/><stop offset="1" style="stop-color:var(--c-nuc-2)"/></radialGradient>' +
      '<radialGradient id="' + p + 'cyto" cx="45%" cy="40%" r="75%"><stop offset="0" style="stop-color:var(--c-cyto)"/><stop offset="1" style="stop-color:var(--c-cyto-2)"/></radialGradient>' +
      '</defs>';
  }
  function scatter(seed, count, ok, box) {
    const R = rng(seed), out = [];
    let tries = 0;
    while (out.length < count && tries < count * 60) {
      tries++;
      const x = box[0] + R() * (box[2] - box[0]), y = box[1] + R() * (box[3] - box[1]);
      if (!ok(x, y)) continue;
      if (out.some((q) => (q[0] - x) ** 2 + (q[1] - y) ** 2 < 260)) continue;
      out.push([x, y]);
    }
    return out;
  }
  const dist = (x, y, a, b) => Math.hypot(x - a, y - b);
  function inEll(x, y, cx, cy, rx, ry) { return ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 < 1; }

  /* ================= DYRECELLE ================= */
  const animalRf = (a) => 1 + 0.035 * Math.sin(3 * a + 0.6) + 0.025 * Math.sin(5 * a + 2.1);
  const AC = { cx: 400, cy: 285, rx: 330, ry: 225 };
  const NUC_A = [365, 285, 92];
  const memAnchor = blobPt(AC.cx, AC.cy, AC.rx, AC.ry, animalRf, (-145 * Math.PI) / 180);

  N.diagrams.dyrecelle = {
    topic: 'celler',
    title: { nb: 'Modell av en dyrecelle', en: 'Model of an animal cell' },
    viewBox: '0 0 800 590',
    scale: { x1: 40, x2: 370, y: 572, label: '10 µm' },
    parts: [
      { id: 'cellemembran', at: memAnchor },
      { id: 'cytoplasma', at: [282, 150] },
      { id: 'cellekjerne', at: [330, 318] },
      { id: 'mitokondrie', at: [200, 180] },
      { id: 'ribosom', at: [252, 248] },
      { id: 'er', at: [478, 350] },
      { id: 'golgi', at: [588, 310] },
      { id: 'lysosom', at: [692, 300] },
      { id: 'vesikkel', at: [652, 378] }
    ],
    draw: function (p) {
      const outline = blob(AC.cx, AC.cy, AC.rx, AC.ry, animalRf, 48);
      // ER-buer rundt kjernen
      let er = '', erRibo = '';
      [112, 130, 148].forEach(function (r, i) {
        const d = arc(NUC_A[0], NUC_A[1], r, -55 + i * 4, 62 - i * 4);
        er += '<path d="' + d + '" fill="none" stroke="#1f9bb8" stroke-width="12" stroke-linecap="round"/>' +
          '<path d="' + d + '" fill="none" stroke="#a6e3ee" stroke-width="6" stroke-linecap="round"/>';
        for (let a = -50 + i * 4; a <= 58 - i * 4; a += 9) {
          const rad = (a * Math.PI) / 180, rr2 = r + 9;
          erRibo += ribo(NUC_A[0] + rr2 * Math.cos(rad), NUC_A[1] + rr2 * Math.sin(rad), 3);
        }
      });
      const free = scatter(11, 46, function (x, y) {
        return inEll(x, y, AC.cx, AC.cy, AC.rx * 0.9, AC.ry * 0.88) && dist(x, y, NUC_A[0], NUC_A[1]) > 168 &&
          dist(x, y, 600, 310) > 75 && dist(x, y, 692, 300) > 26;
      }, [80, 70, 720, 500]);
      free.push([252, 248]);
      const mitos = mito(200, 180, 46, 22, -25) + mito(230, 412, 44, 21, 18) + mito(560, 150, 42, 20, 16) + mito(470, 460, 40, 19, -10) + mito(140, 300, 34, 17, 80);
      return defs(p) +
        '<g data-part="cytoplasma"><path d="' + outline + '" fill="url(#' + p + 'cyto)"/></g>' +
        '<g data-part="ribosom">' + free.map(function (q) { return ribo(q[0], q[1]); }).join('') + erRibo + '</g>' +
        '<g data-part="er">' + er + '</g>' +
        '<g data-part="cellekjerne">' + nucleus(p, NUC_A[0], NUC_A[1], NUC_A[2], 5) + '</g>' +
        '<g data-part="golgi">' + golgiStack(600, 310, 120, 5, 15, 24) + '</g>' +
        '<g data-part="vesikkel">' + vesicle(652, 378, 9) + vesicle(634, 404, 6.5) + vesicle(666, 228, 7) + vesicle(700, 405, 6) + '</g>' +
        '<g data-part="lysosom">' + lyso(692, 300, 14) + lyso(300, 470, 12) + lyso(470, 110, 11) + '</g>' +
        '<g data-part="mitokondrie">' + mitos + '</g>' +
        '<g data-part="cellemembran">' + membrane(outline, 9) + '</g>';
    }
  };

  /* ================= PLANTECELLE ================= */
  const vacRf = (a) => 1 + 0.04 * Math.sin(2 * a + 1) + 0.03 * Math.sin(5 * a + 0.3);
  const NUC_P = [150, 150, 58];
  N.diagrams.plantecelle = {
    topic: 'celler',
    title: { nb: 'Modell av en plantecelle', en: 'Model of a plant cell' },
    viewBox: '0 0 800 570',
    scale: { x1: 50, x2: 190, y: 548, label: '10 µm' },
    parts: [
      { id: 'cellevegg', at: [400, 48] },
      { id: 'cellemembran', at: [66, 365] },
      { id: 'cytoplasma', at: [375, 116] },
      { id: 'cellekjerne', at: [138, 168] },
      { id: 'kloroplast', at: [300, 96] },
      { id: 'vakuole', at: [430, 290] },
      { id: 'mitokondrie', at: [240, 88] },
      { id: 'ribosom', at: [522, 124] },
      { id: 'er', at: [165, 236] },
      { id: 'golgi', at: [684, 290] },
      { id: 'vesikkel', at: [658, 326] }
    ],
    draw: function (p) {
      const wall = rr(50, 40, 700, 470, 34) + rr(66, 56, 668, 438, 24);
      const inner = rr(66, 56, 668, 438, 24);
      const vac = blob(430, 285, 205, 150, vacRf, 36);
      const isVac = (x, y) => inEll(x, y, 430, 285, 215, 160);
      let er = '';
      [72, 86].forEach(function (r) {
        const d = arc(NUC_P[0], NUC_P[1], r, 38, 122);
        er += '<path d="' + d + '" fill="none" stroke="#1f9bb8" stroke-width="10" stroke-linecap="round"/>' +
          '<path d="' + d + '" fill="none" stroke="#a6e3ee" stroke-width="4.5" stroke-linecap="round"/>';
      });
      const chl = [[300, 96, 0], [450, 92, -4], [600, 98, 6], [684, 220, 90], [688, 362, 85], [580, 466, 2], [430, 468, -3], [285, 462, 5], [118, 300, 88], [122, 430, 95]];
      const free = scatter(21, 48, function (x, y) {
        if (!inEll(x, y, 400, 275, 330, 214) || isVac(x, y) || dist(x, y, NUC_P[0], NUC_P[1]) > 0 && dist(x, y, NUC_P[0], NUC_P[1]) < 100) return false;
        if (chl.some((c) => dist(x, y, c[0], c[1]) < 38)) return false;
        return dist(x, y, 684, 290) > 30;
      }, [72, 60, 730, 492]);
      free.push([522, 124]);
      return defs(p) +
        '<g data-part="cellevegg"><path d="' + wall + '" fill="#b5d98b" fill-rule="evenodd" stroke="#5d8f2f" stroke-width="3"/>' +
        '<path d="M120,40v16M210,40v16M330,40v16M470,40v16M610,40v16M700,40v16M50,150h16M50,300h16M50,430h16M734,130h16M734,260h16M734,410h16M150,494v16M300,494v16M450,494v16M620,494v16" stroke="#7fae55" stroke-width="2"/></g>' +
        '<g data-part="cytoplasma"><path d="' + inner + '" fill="url(#' + p + 'cyto)"/></g>' +
        '<g data-part="ribosom">' + free.map((q) => ribo(q[0], q[1], 3.2)).join('') + '</g>' +
        '<g data-part="vakuole"><path d="' + vac + '" fill="var(--c-vac)" stroke="#2f9fa9" stroke-width="3.5"/>' +
        '<path d="M330,200 q20,-14 40,0 M500,350 q22,-14 44,0 M450,230 q14,-10 28,0" fill="none" stroke="#2f9fa9" stroke-opacity=".35" stroke-width="2.5" stroke-linecap="round"/></g>' +
        '<g data-part="er">' + er + '</g>' +
        '<g data-part="cellekjerne">' + nucleus(p, NUC_P[0], NUC_P[1], NUC_P[2], 9) + '</g>' +
        '<g data-part="golgi">' + golgiStack(684, 290, 54, 3, 11, 12) + '</g>' +
        '<g data-part="vesikkel">' + vesicle(658, 326, 6) + vesicle(712, 262, 5.5) + vesicle(712, 318, 4.5) + '</g>' +
        '<g data-part="kloroplast">' + chl.map((c) => chloro(c[0], c[1], 34, 15, c[2])).join('') + '</g>' +
        '<g data-part="mitokondrie">' + mito(240, 88, 22, 11, 15) + mito(690, 120, 22, 11, 60) + mito(690, 455, 22, 11, -30) + mito(190, 470, 22, 11, 10) + mito(190, 262, 22, 11, 70) + '</g>' +
        '<g data-part="cellemembran">' + membrane(inner, 6) + '</g>';
    }
  };

  /* ================= BAKTERIE ================= */
  const nucRf = (a) => 1 + 0.22 * Math.sin(5 * a) + 0.13 * Math.sin(9 * a + 1);
  const nucRf2 = (a) => 0.85 + 0.2 * Math.sin(6 * a + 2) + 0.12 * Math.sin(4 * a + 0.4);
  const flagY = (x) => 230 + 22 * Math.sin(((x - 620) / 70) * Math.PI * 2) * Math.min(1, (x - 620) / 60);
  function pillPoint(t) {
    // t 0..1 rundt kanten på ytterveggen (x 140–620, y 120–340, r 110)
    const L = 260, C = Math.PI * 110, P = 2 * L + 2 * C;
    let s = t * P;
    if (s < L) return [250 + s, 120, 0, -1];
    s -= L;
    if (s < C) { const a = -Math.PI / 2 + s / 110; return [510 + 110 * Math.cos(a), 230 + 110 * Math.sin(a), Math.cos(a), Math.sin(a)]; }
    s -= C;
    if (s < L) return [510 - s, 340, 0, 1];
    s -= L;
    const a = Math.PI / 2 + s / 110; return [250 + 110 * Math.cos(a), 230 + 110 * Math.sin(a), Math.cos(a), Math.sin(a)];
  }
  N.diagrams.bakterie = {
    topic: 'celler',
    title: { nb: 'Modell av en bakterie', en: 'Model of a bacterium' },
    viewBox: '0 0 900 470',
    scale: { x1: 140, x2: 380, y: 440, label: '1 µm' },
    parts: [
      { id: 'kapsel', at: [128, 230] },
      { id: 'cellevegg', at: [380, 126] },
      { id: 'cellemembran', at: [380, 326] },
      { id: 'cytoplasma', at: [205, 292] },
      { id: 'arvestoff', at: blobPt(380, 230, 100, 48, nucRf, 0.35), note: { nb: 'Bakterien har ingen cellekjerne. Arvestoffet er én stor ring av DNA som ligger sammenfiltret i cytoplasmaet.', en: 'The bacterium has no nucleus. Its genetic material is one large ring of DNA lying tangled up in the cytoplasm.' } },
      { id: 'ribosom', at: [585, 232] },
      { id: 'plasmid', at: [565, 188] },
      { id: 'flagell', at: [770, flagY(770)] },
      { id: 'pili', at: (function () { const q = pillPoint(0.08); return [q[0] + q[2] * 32, q[1] + q[3] * 32]; })() }
    ],
    draw: function () {
      const wall = rr(140, 120, 480, 220, 110) + rr(152, 132, 456, 196, 98);
      const mem = rr(154, 134, 452, 192, 96);
      const cyto = rr(157, 137, 446, 186, 93);
      const inPill = (x, y, m) => {
        const cx = Math.min(Math.max(x, 250), 510);
        return dist(x, y, cx, 230) < 93 - m;
      };
      const free = scatter(31, 60, function (x, y) {
        return inPill(x, y, 10) && Math.abs(((x - 380) / 112) ** 2 + ((y - 230) / 60) ** 2 - 1) > 0.25 &&
          dist(x, y, 565, 188) > 20 && dist(x, y, 560, 280) > 20 && dist(x, y, 200, 240) > 20;
      }, [160, 140, 600, 320]);
      free.push([585, 232]);
      let pili = '';
      for (let i = 0; i < 30; i++) {
        const t = (i + 0.5) / 30;
        const q = pillPoint(t);
        if (q[0] > 600 && Math.abs(q[1] - 230) < 40) continue;
        const len = 30 + (i % 3) * 5;
        pili += '<path d="M' + f(q[0]) + ',' + f(q[1]) + 'q' + f(q[2] * len * 0.5 - q[3] * 4) + ',' + f(q[3] * len * 0.5 + q[2] * 4) + ' ' + f(q[2] * len) + ',' + f(q[3] * len) + '" fill="none" stroke="#a88a5c" stroke-width="2.6" stroke-linecap="round"/>';
      }
      const fl = [];
      for (let x = 618; x <= 880; x += 6) fl.push([x, flagY(x)]);
      const flD = smoothOpen(fl);
      let nuc = '';
      [[nucRf, 100, 48], [nucRf2, 92, 44]].forEach(function (c) { nuc += '<path d="' + blob(380, 230, c[1], c[2], c[0], 60) + '" fill="none" stroke="#9b3fc4" stroke-width="3.2"/>'; });
      return '<g data-part="kapsel"><path d="' + rr(118, 98, 524, 264, 132) + '" fill="#7fb069" fill-opacity=".22" stroke="#7fb069" stroke-width="2.5" stroke-dasharray="7 6"/></g>' +
        '<g data-part="pili">' + pili + '</g>' +
        '<g data-part="flagell"><path d="' + flD + '" fill="none" stroke="transparent" stroke-width="22"/><path d="' + flD + '" fill="none" stroke="#8b6a45" stroke-width="5.5" stroke-linecap="round"/></g>' +
        '<g data-part="cellevegg"><path d="' + wall + '" fill="#b5d98b" fill-rule="evenodd" stroke="#5d8f2f" stroke-width="2.5"/></g>' +
        '<g data-part="cytoplasma"><path d="' + cyto + '" fill="var(--c-cyto)"/></g>' +
        '<g data-part="ribosom">' + free.map((q) => ribo(q[0], q[1], 3.6)).join('') + '</g>' +
        '<g data-part="arvestoff"><path d="' + blob(380, 230, 100, 48, nucRf, 60) + '" fill="none" stroke="transparent" stroke-width="16"/>' + nuc + '</g>' +
        '<g data-part="plasmid">' + [[565, 188, 13], [560, 280, 12], [200, 240, 11]].map((c) => '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="transparent" stroke="#c7356f" stroke-width="3.6"/>').join('') + '</g>' +
        '<g data-part="cellemembran">' + membrane(mem, 4.5) + '</g>';
    }
  };

  /* ================= INFLUENSAVIRUS ================= */
  function spikesRound(cx, cy, r0, len, n, kinds) {
    let s = '';
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + 0.05;
      const c = Math.cos(a), sn = Math.sin(a);
      const x0 = cx + r0 * c, y0 = cy + r0 * sn, x1 = cx + (r0 + len) * c, y1 = cy + (r0 + len) * sn;
      const deg = (a * 180) / Math.PI + 90;
      if (kinds[i % kinds.length] === 'H') {
        s += '<line x1="' + f(x0) + '" y1="' + f(y0) + '" x2="' + f(x1) + '" y2="' + f(y1) + '" stroke="#c42b4f" stroke-width="7" stroke-linecap="round"/>' +
          '<rect x="-8" y="-9" width="16" height="18" rx="7" fill="#c42b4f" transform="translate(' + f(x1) + ' ' + f(y1) + ') rotate(' + f(deg) + ')"/>';
      } else {
        s += '<line x1="' + f(x0) + '" y1="' + f(y0) + '" x2="' + f(x1) + '" y2="' + f(y1) + '" stroke="#e0607a" stroke-width="4" stroke-linecap="round"/>' +
          '<rect x="-9" y="-6" width="18" height="12" rx="2" fill="#e0607a" transform="translate(' + f(x1) + ' ' + f(y1) + ') rotate(' + f(deg) + ')"/>';
      }
    }
    return s;
  }
  function rnaRod(x, y, rot, h) {
    let stripes = '';
    for (let k = -h / 2 + 8; k < h / 2 - 4; k += 9) stripes += '<path d="M-11,' + f(k) + 'L11,' + f(k + 6) + '" stroke="#7c2aa6" stroke-width="2"/>';
    return '<g transform="translate(' + f(x) + ' ' + f(y) + ') rotate(' + rot + ')"><rect x="-13" y="' + (-h / 2) + '" width="26" height="' + h + '" rx="12" fill="#c49ae0" stroke="#9b3fc4" stroke-width="2.5"/>' + stripes + '</g>';
  }
  N.diagrams.influensa = {
    topic: 'celler',
    title: { nb: 'Modell av et influensavirus', en: 'Model of an influenza virus' },
    viewBox: '0 0 600 615',
    scale: { x1: 30, x2: 220, y: 598, label: '50 nm' },
    parts: [
      { id: 'overflateprotein', at: [300 + 238 * Math.cos(-1.05), 300 + 238 * Math.sin(-1.05)], note: { nb: 'Influensaviruset har to slags pigger: H (de lange) og N (de med firkantet hode).', en: 'The influenza virus has two kinds of spikes: H (the long ones) and N (the ones with a square head).' } },
      { id: 'lipidhylster', at: [300 + 190 * Math.cos(2.8), 300 + 190 * Math.sin(2.8)] },
      { id: 'kapsid', at: [300 + 171 * Math.cos(0.35), 300 + 171 * Math.sin(0.35)], note: { nb: 'Hos influensaviruset ligger proteinet som et lag på innsiden av hylsteret (matriksprotein), og hver RNA-bit er også pakket inn i protein.', en: 'In the influenza virus the protein forms a layer on the inside of the envelope (matrix protein), and each RNA piece is also wrapped in protein.' } },
      { id: 'arvestoff', at: [300, 300], note: { nb: 'Influensaviruset har arvestoff av RNA, delt opp i åtte biter.', en: 'The influenza virus has genetic material made of RNA, split into eight pieces.' } }
    ],
    draw: function () {
      let rna = rnaRod(300, 300, 0, 96);
      for (let i = 0; i < 7; i++) {
        const a = (i / 7) * Math.PI * 2 - 0.3;
        rna += rnaRod(300 + 82 * Math.cos(a), 300 + 82 * Math.sin(a), Math.round((a * 180) / Math.PI) + 90 + (i % 2 ? 12 : -12), 78 + (i % 3) * 8);
      }
      return '<g data-part="overflateprotein">' + spikesRound(300, 300, 192, 42, 34, ['H', 'H', 'N', 'H', 'H', 'H', 'N']) + '</g>' +
        '<g data-part="lipidhylster"><circle cx="300" cy="300" r="190" fill="var(--c-virus-in)" stroke="#e8964f" stroke-width="18"/><circle cx="300" cy="300" r="190" fill="none" stroke="#f7d0a6" stroke-width="5"/></g>' +
        '<g data-part="kapsid"><circle cx="300" cy="300" r="171" fill="none" stroke="transparent" stroke-width="18"/><circle cx="300" cy="300" r="171" fill="none" stroke="#e0533f" stroke-width="9" stroke-dasharray="14 4"/></g>' +
        '<g data-part="arvestoff">' + rna + '</g>';
    }
  };

  /* ================= BAKTERIOFAG ================= */
  N.diagrams.bakteriofag = {
    topic: 'celler',
    title: { nb: 'Modell av en bakteriofag (T4)', en: 'Model of a bacteriophage (T4)' },
    viewBox: '0 0 600 690',
    scale: { x1: 30, x2: 135, y: 26, label: '50 nm' },
    parts: [
      { id: 'kapsid', at: [372, 112], note: { nb: 'Hos bakteriofagen kalles proteinkappen ofte «hodet».', en: 'In the bacteriophage the protein coat is often called the “head”.' } },
      { id: 'arvestoff', at: [300, 168], note: { nb: 'T4-fagen har arvestoff av DNA, tett pakket i hodet.', en: 'The T4 phage has genetic material made of DNA, tightly packed in the head.' } },
      { id: 'hale', at: [300, 372] },
      { id: 'halefiber', at: [170, 566] }
    ],
    draw: function (p, t) {
      const head = 'M300,40L385,95L385,215L300,270L215,215L215,95Z';
      const pts = [];
      for (let th = 0; th < Math.PI * 22; th += 0.18) {
        const r = 52 * (0.55 + 0.45 * Math.sin(th * 0.37));
        pts.push([300 + r * Math.cos(th) * 1.05, 158 + r * Math.sin(th) * 1.45]);
      }
      let stripes = '';
      for (let y = 292; y < 446; y += 12) stripes += '<path d="M276,' + y + 'H324" stroke="#6f7f93" stroke-width="2"/>';
      const fibre = function (pts2) { return '<path d="' + smoothOpen(pts2) + '" fill="none" stroke="#4d5a6b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'; };
      const fibres = fibre([[246, 462], [205, 500], [178, 528], [168, 575], [160, 622]]) + fibre([[270, 466], [245, 520], [235, 560], [244, 612]]) +
        fibre([[354, 462], [395, 500], [422, 528], [432, 575], [440, 622]]) + fibre([[330, 466], [355, 520], [365, 560], [356, 612]]);
      return '<path d="M20,652 Q300,632 580,652 L580,690 L20,690Z" fill="#b5d98b" fill-opacity=".35" stroke="#5d8f2f" stroke-opacity=".5" stroke-width="2"/>' +
        '<text class="svg-note" x="300" y="676" text-anchor="middle">' + N.esc(t({ nb: 'overflaten til en bakterie', en: 'the surface of a bacterium' })) + '</text>' +
        '<g data-part="halefiber"><path d="M160,622 L178,528 M244,612 L245,520 M440,622 L422,528 M356,612 L355,520" stroke="transparent" stroke-width="22"/>' + fibres + '</g>' +
        '<g data-part="hale"><rect x="278" y="268" width="44" height="12" fill="#8a97a8"/><rect x="276" y="280" width="48" height="170" rx="6" fill="#b4bfcc" stroke="#6f7f93" stroke-width="3"/>' + stripes +
        '<path d="M240,450H360L374,468H226Z" fill="#8a97a8" stroke="#6f7f93" stroke-width="3" stroke-linejoin="round"/></g>' +
        '<g data-part="kapsid"><path d="' + head + '" fill="#f6bdb2" stroke="#e0533f" stroke-width="5" stroke-linejoin="round"/>' +
        '<path d="M215,95L300,140L385,95M300,140V270M215,215L300,140L385,215" fill="none" stroke="#e0533f" stroke-opacity=".45" stroke-width="2"/></g>' +
        '<g data-part="arvestoff"><path d="' + smoothOpen(pts) + '" fill="none" stroke="#9b3fc4" stroke-width="2.4" stroke-opacity=".9"/></g>';
    }
  };

  /* ================= MESLINGVIRUS ================= */
  const mRf = (a) => 1 + 0.045 * Math.sin(3 * a + 0.5) + 0.03 * Math.sin(5 * a + 1.3);
  N.diagrams.meslinger = {
    topic: 'celler',
    title: { nb: 'Modell av et meslingvirus', en: 'Model of a measles virus' },
    viewBox: '0 0 600 615',
    scale: { x1: 30, x2: 130, y: 598, label: '50 nm' },
    parts: [
      { id: 'overflateprotein', at: (function () { const q = blobPt(300, 300, 200, 190, mRf, -0.9); const r = 40; return [q[0] + Math.cos(-0.9) * r, q[1] + Math.sin(-0.9) * r]; })(), note: { nb: 'Meslingviruset har to slags pigger: H-proteinet fester viruset til cellen, og F-proteinet hjelper hylsteret å smelte sammen med cellemembranen.', en: 'The measles virus has two kinds of spikes: the H protein attaches the virus to the cell, and the F protein helps the envelope merge with the cell membrane.' } },
      { id: 'lipidhylster', at: blobPt(300, 300, 200, 190, mRf, 2.6) },
      { id: 'kapsid', at: blobPt(300, 300, 182, 172, mRf, 0.45), note: { nb: 'Hos meslingviruset ligger et lag av protein (matriksprotein) på innsiden av hylsteret, og RNA-tråden er pakket inn i protein.', en: 'In the measles virus a layer of protein (matrix protein) lies on the inside of the envelope, and the RNA strand is wrapped in protein.' } },
      { id: 'arvestoff', at: [196, 262], note: { nb: 'Meslingviruset har én lang tråd av RNA, pakket inn i protein som en spiral.', en: 'The measles virus has one long strand of RNA, wrapped in protein like a spiral.' } }
    ],
    draw: function () {
      const env = blob(300, 300, 200, 190, mRf, 48);
      const inner = blob(300, 300, 182, 172, mRf, 48);
      let sp = '';
      for (let i = 0; i < 30; i++) {
        const a = (i / 30) * Math.PI * 2 + 0.1;
        const q = blobPt(300, 300, 200, 190, mRf, a);
        const len = 36;
        const x1 = q[0] + Math.cos(a) * len, y1 = q[1] + Math.sin(a) * len;
        const deg = (a * 180) / Math.PI + 90;
        if (i % 2 === 0) sp += '<line x1="' + f(q[0]) + '" y1="' + f(q[1]) + '" x2="' + f(x1) + '" y2="' + f(y1) + '" stroke="#c42b4f" stroke-width="6" stroke-linecap="round"/><circle cx="' + f(x1) + '" cy="' + f(y1) + '" r="8" fill="#c42b4f"/>';
        else sp += '<line x1="' + f(q[0]) + '" y1="' + f(q[1]) + '" x2="' + f(x1 - Math.cos(a) * 4) + '" y2="' + f(y1 - Math.sin(a) * 4) + '" stroke="#e0607a" stroke-width="8" stroke-linecap="round"/><rect x="-5" y="-4" width="10" height="8" rx="2" fill="#e0607a" transform="translate(' + f(x1 - Math.cos(a) * 4) + ' ' + f(y1 - Math.sin(a) * 4) + ') rotate(' + f(deg) + ')"/>';
      }
      const coil = smoothOpen([[196, 262], [240, 186], [330, 180], [372, 236], [352, 300], [270, 318], [232, 380], [300, 420], [390, 392], [420, 320], [410, 250]]);
      return '<g data-part="overflateprotein">' + sp + '</g>' +
        '<g data-part="lipidhylster"><path d="' + env + '" fill="var(--c-virus-in)" stroke="#e8964f" stroke-width="16"/><path d="' + env + '" fill="none" stroke="#f7d0a6" stroke-width="4.5"/></g>' +
        '<g data-part="kapsid"><path d="' + inner + '" fill="none" stroke="transparent" stroke-width="16"/><path d="' + inner + '" fill="none" stroke="#e0533f" stroke-width="8" stroke-dasharray="12 4"/></g>' +
        '<g data-part="arvestoff"><path d="' + coil + '" fill="none" stroke="#c49ae0" stroke-width="18" stroke-linecap="round"/><path d="' + coil + '" fill="none" stroke="#9b3fc4" stroke-width="18" stroke-linecap="round" stroke-dasharray="3 6"/></g>';
    }
  };

  /* ================= VIRUSSYKLUS (trinnvis figur) ================= */
  function miniVirus(x, y, s, extra) {
    let sp = '';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      sp += '<line x1="' + f(x + 22 * s * Math.cos(a)) + '" y1="' + f(y + 22 * s * Math.sin(a)) + '" x2="' + f(x + 31 * s * Math.cos(a)) + '" y2="' + f(y + 31 * s * Math.sin(a)) + '" stroke="#c42b4f" stroke-width="' + f(4 * s) + '" stroke-linecap="round"/>';
    }
    return '<g ' + (extra || '') + '>' + sp + '<circle cx="' + x + '" cy="' + y + '" r="' + f(22 * s) + '" fill="#fff3ec" stroke="#e8964f" stroke-width="' + f(5 * s) + '"/>' +
      '<path d="M' + f(x - 10 * s) + ',' + f(y + 3 * s) + 'q' + f(5 * s) + ',' + f(-12 * s) + ' ' + f(10 * s) + ',0 t' + f(10 * s) + ',0" fill="none" stroke="#9b3fc4" stroke-width="' + f(3.5 * s) + '" stroke-linecap="round"/></g>';
  }
  function rnaBit(x, y, rot) {
    return '<path d="M' + x + ',' + y + 'q6,-10 12,0 t12,0 t12,0" fill="none" stroke="#9b3fc4" stroke-width="4" stroke-linecap="round" transform="rotate(' + rot + ' ' + x + ' ' + y + ')"/>';
  }
  N.figures.virussyklus = {
    viewBox: '0 0 800 430',
    draw: function (p, t) {
      const cell = 'M0,170 C160,150 300,148 400,150 C520,152 660,156 800,172 L800,430 L0,430 Z';
      let receptors = '';
      [120, 250, 330, 470, 560, 690].forEach(function (x) {
        const y = x < 400 ? 152 + (400 - x) * 0.02 * ((400 - x) / 120) : 153 + (x - 400) * 0.03 * ((x - 400) / 150);
        receptors += '<path d="M' + x + ',' + f(y) + 'v-10m0,0l-6,-7m6,7l6,-7" stroke="#2a62d9" stroke-width="3" fill="none" stroke-linecap="round"/>';
      });
      return defs(p) +
        '<path d="' + cell + '" fill="url(#' + p + 'cyto)"/>' +
        '<path d="' + cell.replace(' L800,430 L0,430 Z', '') + '" fill="none" stroke="#d6457a" stroke-width="8"/>' + receptors +
        '<ellipse cx="610" cy="335" rx="120" ry="64" fill="url(#' + p + 'nuc)" stroke="#4d36b5" stroke-width="5" stroke-dasharray="20 5"/>' +
        '<text class="svg-note" x="610" y="340" text-anchor="middle">' + N.esc(t({ nb: 'cellekjerne', en: 'nucleus' })) + '</text>' +
        '<text class="svg-note" x="40" y="410">' + N.esc(t({ nb: 'vertscelle', en: 'host cell' })) + '</text>' +
        /* 1 feste seg */
        miniVirus(330, 108, 1.1, 'data-st="1"') +
        '<path data-st="1" d="M240,70 q40,-20 70,10" fill="none" stroke="var(--c-ink)" stroke-width="2.5" stroke-dasharray="5 5" marker-end=""/>' +
        /* 2 inn i cellen */
        '<g data-st="2"><circle cx="330" cy="235" r="42" fill="none" stroke="#d6457a" stroke-width="4"/>' + miniVirus(330, 235, 1.0) +
        '<path d="M330,160 v28" stroke="var(--c-ink)" stroke-width="3" stroke-linecap="round"/><path d="M322,180 l8,10 8,-10" fill="none" stroke="var(--c-ink)" stroke-width="3" stroke-linecap="round"/></g>' +
        /* 3 kopiering */
        '<g data-st="3">' + rnaBit(250, 260, -10) + rnaBit(310, 300, 15) + rnaBit(390, 250, -25) + rnaBit(440, 300, 5) + rnaBit(470, 230, 30) + rnaBit(360, 350, -5) +
        [[280, 230], [300, 330], [420, 280], [500, 270], [380, 300], [260, 300], [450, 340]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="5" fill="#c42b4f"/><circle cx="' + (q[0] + 9) + '" cy="' + (q[1] - 4) + '" r="3.4" fill="#2a62d9"/>'; }).join('') + '</g>' +
        /* 4 montering */
        '<g data-st="4">' + miniVirus(270, 270, 0.8) + miniVirus(380, 300, 0.8) + miniVirus(480, 250, 0.8) + miniVirus(330, 215, 0.8) + '</g>' +
        /* 5 frigjøring */
        '<g data-st="5">' + miniVirus(420, 112, 0.8) + miniVirus(520, 80, 0.8) + miniVirus(600, 118, 0.8) + miniVirus(700, 70, 0.8) +
        '<path d="M380,190 q40,-40 60,-60 M500,200 q20,-50 20,-90 M600,200 q10,-30 0,-55" fill="none" stroke="var(--c-ink)" stroke-width="2.5" stroke-dasharray="5 5"/>' +
        '<path d="M320,166 a26,26 0 0 1 52,0" fill="#fff3ec" stroke="#e8964f" stroke-width="4"/></g>';
    }
  };
})();
