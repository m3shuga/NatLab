/* =====================================================================
   Klimaendringer – TEGNINGENE (modellene)
   ---------------------------------------------------------------------
   Hver tegning er laget med kode (SVG). Hver del som kan klikkes, ligger i
   en gruppe med data-part="id", der id-en må finnes i strukturer.js.
   parts: rekkefølgen her = rekkefølgen på numrene i tegningen.
   at: [x, y] = hvor nummeret (nålen) skal stå.
   Karbonkretsløpet og drivhuseffekten brukes også i de interaktive
   modellene (assets/js/klima.js). Der hentes pilene fra «flows».
   Tegningene er modeller: Ingenting er tegnet i riktig målestokk.
   ===================================================================== */
(function () {
  const N = window.NatLab;
  const f = (n) => Math.round(n * 10) / 10;
  const part = (id, svg, extra) => '<g data-part="' + id + '"' + (extra || '') + '>' + svg + '</g>';
  const o = (nb, en) => ({ nb: nb, en: en });
  const lab = (x, y, text, cls, anchor) => '<text class="dlab' + (cls ? ' ' + cls : '') + '" x="' + x + '" y="' + y + '"' + (anchor ? ' text-anchor="' + anchor + '"' : '') + '>' + N.esc(N.t(text)) + '</text>';
  N.klimaArt = N.klimaArt || {};

  /* ---------------------------- småtegninger ---------------------------- */
  function tree(x, y, s, col) {
    s = s || 1;
    return '<rect x="' + f(x - 4 * s) + '" y="' + f(y - 26 * s) + '" width="' + f(8 * s) + '" height="' + f(26 * s) + '" fill="#7a5230"/>' +
      '<path d="M' + f(x) + ' ' + f(y - 92 * s) + ' L' + f(x + 26 * s) + ' ' + f(y - 44 * s) + ' L' + f(x + 16 * s) + ' ' + f(y - 44 * s) + ' L' + f(x + 32 * s) + ' ' + f(y - 18 * s) + ' L' + f(x - 32 * s) + ' ' + f(y - 18 * s) + ' L' + f(x - 16 * s) + ' ' + f(y - 44 * s) + ' L' + f(x - 26 * s) + ' ' + f(y - 44 * s) + 'Z" fill="' + (col || '#2f7d46') + '" stroke="#1d5530" stroke-width="1.5" stroke-linejoin="round"/>';
  }
  function leafTree(x, y, s) {
    s = s || 1;
    return '<rect x="' + f(x - 4 * s) + '" y="' + f(y - 30 * s) + '" width="' + f(8 * s) + '" height="' + f(30 * s) + '" fill="#7a5230"/>' +
      '<circle cx="' + f(x) + '" cy="' + f(y - 46 * s) + '" r="' + f(24 * s) + '" fill="#4f9f45" stroke="#2f6e2a" stroke-width="1.5"/>' +
      '<circle cx="' + f(x - 14 * s) + '" cy="' + f(y - 38 * s) + '" r="' + f(14 * s) + '" fill="#5bb04f"/><circle cx="' + f(x + 13 * s) + '" cy="' + f(y - 52 * s) + '" r="' + f(12 * s) + '" fill="#5bb04f"/>';
  }
  function elk(x, y, s) {
    s = s || 1;
    const P = (dx, dy) => f(x + dx * s) + ' ' + f(y + dy * s);
    return '<g stroke="#3b2414" stroke-width="1.5" stroke-linejoin="round">' +
      '<path d="M' + P(-28, -40) + ' Q' + P(-30, -58) + ' ' + P(-6, -58) + ' L' + P(22, -56) + ' Q' + P(34, -54) + ' ' + P(34, -40) + ' L' + P(30, -30) + ' L' + P(-24, -28) + 'Z" fill="#6b4226"/>' +
      '<path d="M' + P(-24, -30) + ' V' + P(-24, 0) + ' M' + P(-12, -30) + ' V' + P(-12, 0) + ' M' + P(18, -30) + ' V' + P(18, 0) + ' M' + P(28, -32) + ' V' + P(28, 0) + '" stroke-width="' + f(4 * s) + '" stroke="#4a2c18"/>' +
      '<path d="M' + P(28, -54) + ' L' + P(40, -70) + ' Q' + P(46, -76) + ' ' + P(54, -70) + ' L' + P(62, -56) + ' Q' + P(56, -50) + ' ' + P(46, -54) + ' L' + P(36, -42) + 'Z" fill="#6b4226"/>' +
      '<path d="M' + P(40, -72) + ' l' + f(-8 * s) + ' ' + f(-12 * s) + ' m' + f(4 * s) + ' ' + f(6 * s) + ' l' + f(-10 * s) + ' ' + f(-2 * s) + ' M' + P(46, -74) + ' l' + f(6 * s) + ' ' + f(-14 * s) + ' m' + f(-3 * s) + ' ' + f(7 * s) + ' l' + f(9 * s) + ' ' + f(-3 * s) + '" fill="none" stroke="#c9a46a" stroke-width="' + f(3 * s) + '" stroke-linecap="round"/></g>';
  }
  function cloud(x, y, s, col, op) {
    s = s || 1;
    return '<g fill="' + (col || '#ffffff') + '" opacity="' + (op || 0.95) + '"><ellipse cx="' + f(x) + '" cy="' + f(y) + '" rx="' + f(46 * s) + '" ry="' + f(20 * s) + '"/>' +
      '<circle cx="' + f(x - 18 * s) + '" cy="' + f(y - 12 * s) + '" r="' + f(20 * s) + '"/><circle cx="' + f(x + 14 * s) + '" cy="' + f(y - 18 * s) + '" r="' + f(24 * s) + '"/></g>';
  }
  function house(x, y, s, roof) {
    s = s || 1;
    return '<rect x="' + f(x) + '" y="' + f(y - 34 * s) + '" width="' + f(44 * s) + '" height="' + f(34 * s) + '" fill="#e9dcc3" stroke="#5b4a33" stroke-width="1.5"/>' +
      '<path d="M' + f(x - 6 * s) + ' ' + f(y - 32 * s) + ' L' + f(x + 22 * s) + ' ' + f(y - 56 * s) + ' L' + f(x + 50 * s) + ' ' + f(y - 32 * s) + 'Z" fill="' + (roof || '#b3412f') + '" stroke="#5b2a1f" stroke-width="1.5"/>' +
      '<rect x="' + f(x + 8 * s) + '" y="' + f(y - 24 * s) + '" width="' + f(10 * s) + '" height="' + f(10 * s) + '" fill="#8fc3e8"/><rect x="' + f(x + 26 * s) + '" y="' + f(y - 20 * s) + '" width="' + f(10 * s) + '" height="' + f(20 * s) + '" fill="#7a5230"/>';
  }
  function factory(x, y, s) {
    s = s || 1;
    return '<rect x="' + f(x + 40 * s) + '" y="' + f(y - 92 * s) + '" width="' + f(14 * s) + '" height="' + f(70 * s) + '" fill="#8b8f98" stroke="#4a4f59" stroke-width="1.5"/>' +
      '<path d="M' + f(x) + ' ' + f(y) + ' V' + f(y - 40 * s) + ' L' + f(x + 20 * s) + ' ' + f(y - 28 * s) + ' V' + f(y - 40 * s) + ' L' + f(x + 40 * s) + ' ' + f(y - 28 * s) + ' V' + f(y - 40 * s) + ' L' + f(x + 60 * s) + ' ' + f(y - 28 * s) + ' V' + f(y) + 'Z" fill="#a3a8b2" stroke="#4a4f59" stroke-width="1.5"/>' +
      '<rect x="' + f(x + 8 * s) + '" y="' + f(y - 18 * s) + '" width="' + f(9 * s) + '" height="' + f(8 * s) + '" fill="#ffd166"/><rect x="' + f(x + 30 * s) + '" y="' + f(y - 18 * s) + '" width="' + f(9 * s) + '" height="' + f(8 * s) + '" fill="#ffd166"/>';
  }
  function car(x, y, s, col) {
    s = s || 1;
    return '<path d="M' + f(x) + ' ' + f(y - 8 * s) + ' V' + f(y - 20 * s) + ' L' + f(x + 12 * s) + ' ' + f(y - 22 * s) + ' L' + f(x + 20 * s) + ' ' + f(y - 33 * s) + ' H' + f(x + 42 * s) + ' L' + f(x + 52 * s) + ' ' + f(y - 22 * s) + ' L' + f(x + 60 * s) + ' ' + f(y - 20 * s) + ' V' + f(y - 8 * s) + 'Z" fill="' + (col || '#3d6fd1') + '" stroke="#1e3a74" stroke-width="1.5"/>' +
      '<path d="M' + f(x + 23 * s) + ' ' + f(y - 30 * s) + ' H' + f(x + 30 * s) + ' V' + f(y - 22 * s) + ' H' + f(x + 16 * s) + 'Z M' + f(x + 33 * s) + ' ' + f(y - 30 * s) + ' H' + f(x + 41 * s) + ' L' + f(x + 47 * s) + ' ' + f(y - 22 * s) + ' H' + f(x + 33 * s) + 'Z" fill="#cfe6f7"/>' +
      '<circle cx="' + f(x + 14 * s) + '" cy="' + f(y - 7 * s) + '" r="' + f(7 * s) + '" fill="#222"/><circle cx="' + f(x + 46 * s) + '" cy="' + f(y - 7 * s) + '" r="' + f(7 * s) + '" fill="#222"/>';
  }
  function fish(x, y, s, col) {
    s = s || 1;
    return '<path d="M' + f(x) + ' ' + f(y) + ' q' + f(14 * s) + ' ' + f(-10 * s) + ' ' + f(28 * s) + ' 0 l' + f(10 * s) + ' ' + f(-7 * s) + ' v' + f(14 * s) + ' l' + f(-10 * s) + ' ' + f(-7 * s) + ' q' + f(-14 * s) + ' ' + f(10 * s) + ' ' + f(-28 * s) + ' 0z" fill="' + (col || '#9fb7c9') + '" stroke="#3c5568" stroke-width="1"/>';
  }
  /** Molekyler: CO2, H2O og CH4 */
  function molecule(type, x, y, s, extra) {
    s = s || 1;
    const at = (cx, cy, r, c) => '<circle cx="' + f(x + cx * s) + '" cy="' + f(y + cy * s) + '" r="' + f(r * s) + '" fill="' + c + '" stroke="#1d2433" stroke-width="1"/>';
    let g = '';
    if (type === 'co2') g = at(-11, 0, 6.5, '#e0473a') + at(11, 0, 6.5, '#e0473a') + at(0, 0, 7.5, '#3b3f46');
    if (type === 'h2o') g = at(-9, 6, 4.5, '#f1f3f6') + at(9, 6, 4.5, '#f1f3f6') + at(0, -1, 7.5, '#e0473a');
    if (type === 'ch4') g = at(-9, -7, 4, '#f1f3f6') + at(9, -7, 4, '#f1f3f6') + at(-9, 8, 4, '#f1f3f6') + at(9, 8, 4, '#f1f3f6') + at(0, 0, 7.5, '#3b3f46');
    return '<g class="mol"' + (extra || '') + '>' + g + '</g>';
  }
  /** Bølgete linje (varmestråling) */
  function wave(x1, y1, x2, y2, amp, per) {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, nx = -uy, ny = ux;
    const n = Math.max(2, Math.round(L / per));
    let d = 'M' + f(x1) + ' ' + f(y1);
    for (let i = 1; i <= n * 2; i++) {
      const t = i / (n * 2), sgn = i % 2 ? 1 : -1;
      const mx = x1 + dx * (t - 0.25 / n), my = y1 + dy * (t - 0.25 / n);
      d += ' Q' + f(mx + nx * amp * sgn) + ' ' + f(my + ny * amp * sgn) + ' ' + f(x1 + dx * t) + ' ' + f(y1 + dy * t);
    }
    return d;
  }
  /** Buet pil med pilspiss. Returnerer svg-tekst. Linjen har klassen flow-line. */
  function qarrow(a, w, col, cls) {
    const x1 = a[0], y1 = a[1], cx = a[2], cy = a[3], x2 = a[4], y2 = a[5];
    let dx = x2 - cx, dy = y2 - cy; const L = Math.hypot(dx, dy) || 1; dx /= L; dy /= L;
    const h = w * 1.05 + 12, hw = w * 0.95 + 7;
    const bx = x2 - dx * h, by = y2 - dy * h;
    return '<path class="flow-line' + (cls ? ' ' + cls : '') + '" d="M' + f(x1) + ' ' + f(y1) + ' Q' + f(cx) + ' ' + f(cy) + ' ' + f(bx + dx * 2) + ' ' + f(by + dy * 2) + '" fill="none" stroke="' + col + '" stroke-width="' + f(w) + '" stroke-linecap="round"/>' +
      '<path class="flow-head" d="M' + f(x2) + ' ' + f(y2) + ' L' + f(bx - dy * hw) + ' ' + f(by + dx * hw) + ' L' + f(bx + dy * hw) + ' ' + f(by - dx * hw) + 'Z" fill="' + col + '" stroke="' + col + '" stroke-width="2" stroke-linejoin="round"/>';
  }
  const KIND = { fast: '#2e9e5b', ocean: '#2b7bbd', slow: '#9a6a32', human: '#d6452f' };
  N.klimaArt.KIND = KIND;
  const flowWidth = (v) => f(Math.min(26, 4 + 1.7 * Math.sqrt(v)));
  /** Merkelapp med tall (vises bare når «Vis tall» er slått på) */
  function numTag(x, y, text, col) {
    const w = 14 + text.length * 10.5;
    return '<g class="numtag" aria-hidden="true"><rect x="' + f(x - w / 2) + '" y="' + f(y - 15) + '" width="' + f(w) + '" height="28" rx="14" fill="#ffffff" stroke="' + (col || '#14203a') + '" stroke-width="2"/>' +
      '<text x="' + f(x) + '" y="' + f(y + 5) + '" text-anchor="middle">' + text + '</text></g>';
  }
  N.klimaArt.numTag = numTag;

  /* ======================= 1) KARBONKRETSLØPET ======================= */
  /* Tall: FNs klimapanel (IPCC AR6, kap. 5, figur 5.12), gjennomsnitt 2010–2019, avrundet.
     value = milliarder tonn karbon per år (Gt C/år). stock = lager i milliarder tonn karbon. */
  const carbonFlows = [
    { id: 'fotosyntese', kind: 'fast', value: 140, a: [150, 120, 128, 190, 140, 250], num: [104, 178] },
    { id: 'celleanding', kind: 'fast', value: 70, a: [218, 252, 244, 196, 222, 126], num: [262, 170], numText: '137*' },
    { id: 'nedbrytning', kind: 'fast', value: 67, a: [36, 352, 14, 250, 40, 140] },
    { id: 'spising', kind: 'fast', value: 3, a: [252, 290, 280, 266, 312, 292], level: 'deeper' },
    { id: 'dod', kind: 'fast', value: 60, a: [182, 318, 196, 336, 182, 360], level: 'deeper' },
    { id: 'avskoging', kind: 'human', value: 1.5, a: [282, 318, 298, 240, 290, 156], num: [318, 196] },
    { id: 'forbrenning', kind: 'human', value: 10, a: [438, 168, 450, 130, 432, 92], num: [478, 122] },
    { id: 'vulkan', kind: 'slow', value: 0.1, a: [552, 236, 566, 196, 552, 150], num: [592, 176] },
    { id: 'havopptak', kind: 'ocean', value: 80, a: [700, 128, 676, 230, 704, 334], num: [650, 230] },
    { id: 'havutslipp', kind: 'ocean', value: 78, a: [786, 334, 812, 230, 786, 128], num: [846, 230] },
    { id: 'synking', kind: 'ocean', value: 10, a: [910, 410, 930, 470, 908, 532], num: [956, 470] },
    { id: 'begraving', kind: 'slow', value: 0.2, a: [840, 548, 830, 566, 846, 590], level: 'deeper' },
    { id: 'fossildannelse', kind: 'slow', value: 0.05, a: [128, 396, 112, 430, 132, 468], level: 'deeper' }
  ];
  const carbonStocks = [
    { id: 'atmosfare', at: [500, 66], text: '870' },
    { id: 'planter', at: [96, 300], text: '450' },
    { id: 'jord', at: [250, 380], text: '1700' },
    { id: 'havoverflate', at: [960, 372], text: '900' },
    { id: 'dyphav', at: [760, 530], text: '37 000' },
    { id: 'havbunn', at: [700, 616], text: '1750' },
    { id: 'fossilt', at: [300, 556], text: '~930' }
  ];
  N.klimaArt.carbonFlows = carbonFlows;
  N.klimaArt.carbonStocks = carbonStocks;

  N.diagrams.karbonkretslop = {
    topic: 'klima',
    title: o('Karbonkretsløpet (modell)', 'The carbon cycle (model)'),
    viewBox: '0 0 1000 640',
    animated: true,
    flows: carbonFlows,
    parts: [
      { id: 'atmosfare', at: [500, 30] },
      { id: 'fotosyntese', at: [104, 140] },
      { id: 'planter', at: [60, 236] },
      { id: 'celleanding', at: [252, 120] },
      { id: 'dyr', at: [352, 232] },
      { id: 'jord', at: [178, 380] },
      { id: 'nedbrytning', at: [20, 196] },
      { id: 'forbrenning', at: [420, 214] },
      { id: 'fossilt', at: [210, 520] },
      { id: 'avskoging', at: [262, 300] },
      { id: 'vulkan', at: [528, 290] },
      { id: 'havopptak', at: [664, 110] },
      { id: 'havutslipp', at: [820, 110] },
      { id: 'havoverflate', at: [970, 410] },
      { id: 'plankton', at: [862, 352] },
      { id: 'dyphav', at: [700, 480] },
      { id: 'havbunn', at: [960, 616] },
      { id: 'synking', at: [940, 520], level: 'deeper' },
      { id: 'spising', at: [276, 254], level: 'deeper' },
      { id: 'dod', at: [210, 350], level: 'deeper' },
      { id: 'begraving', at: [868, 586], level: 'deeper' },
      { id: 'fossildannelse', at: [96, 440], level: 'deeper' }
    ],
    draw: function (p) {
      let s = '<defs><linearGradient id="' + p + 'sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fcdf0"/><stop offset="1" stop-color="#e3f2fc"/></linearGradient>' +
        '<linearGradient id="' + p + 'sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fb0e0"/><stop offset="1" stop-color="#3a8fc9"/></linearGradient>' +
        '<linearGradient id="' + p + 'deep" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a6fa8"/><stop offset="1" stop-color="#173f6e"/></linearGradient>' +
        '<linearGradient id="' + p + 'rock" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a08f7a"/><stop offset="1" stop-color="#7d6d5c"/></linearGradient></defs>';
      // atmosfæren
      s += part('atmosfare', '<rect width="1000" height="336" fill="url(#' + p + 'sky)"/>' +
        '<g class="co2-cloud">' + [[380, 60], [560, 96], [640, 50], [300, 92], [470, 120], [880, 70], [240, 44], [760, 160]].map(function (q, i) { return molecule('co2', q[0], q[1], 0.9, ' data-mol="' + i + '"'); }).join('') + '</g>' +
        '<g class="co2-extra"></g>' +
        lab(500, 104, o('Atmosfæren', 'The atmosphere'), 'big', 'middle'));
      s += '<g aria-hidden="true"><circle cx="64" cy="56" r="30" fill="#ffd23f" stroke="#f2a20c" stroke-width="3"/>' + cloud(820, 60, 0.8) + '</g>';
      // berggrunn under land
      s += '<path d="M0 392 H600 L640 400 L700 470 L760 576 V640 H0Z" fill="url(#' + p + 'rock)"/>';
      s += part('fossilt', '<path d="M30 470 Q160 452 300 474 L300 492 Q160 470 30 490Z" fill="#1d1d1f"/><path d="M60 500 Q170 488 280 504 L280 514 Q170 500 60 512Z" fill="#2b2b2e"/>' +
        '<path d="M360 600 Q370 540 440 528 Q510 540 520 600Z" fill="#4a3a1a" stroke="#2b2010" stroke-width="2"/><path d="M380 596 Q392 556 440 548 Q488 556 500 596Z" fill="#1a1410"/><path d="M392 560 Q440 540 488 560 Q440 552 392 560Z" fill="#d9e3ea" opacity=".85"/>' +
        lab(40, 535, o('Kull', 'Coal'), 'light') + lab(440, 626, o('Olje og gass', 'Oil and gas'), 'light', 'middle'));
      // havet
      s += part('dyphav', '<path d="M640 420 H1000 V580 H760 Z" fill="url(#' + p + 'deep)"/>' + lab(830, 520, o('Dyphavet', 'The deep ocean'), 'light'));
      s += part('havoverflate', '<path d="M600 336 H1000 V420 H640 Z" fill="url(#' + p + 'sea)"/><path d="M604 342 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#d6efff" stroke-width="3" fill="none"/>' +
        fish(950, 404, 0.8));
      s += part('plankton', '<g fill="#3ea86b">' + [[830, 362], [846, 374], [866, 360], [884, 378], [900, 364], [918, 382], [854, 392], [876, 396], [936, 372]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="4.5" stroke="#1f6b40" stroke-width="1"/>'; }).join('') + '</g>' +
        lab(760, 398, o('Plankton', 'Plankton'), '', 'middle'));
      s += part('havbunn', '<path d="M700 470 L760 576 L1000 580 V640 H640 Z" fill="#d9c79f"/><path d="M700 600 H1000 M720 620 H1000" stroke="#bfa774" stroke-width="3"/>' +
        '<g fill="#f4ecd8" stroke="#a8915e" stroke-width="1.2"><path d="M800 590 q8 -10 16 0z"/><path d="M880 596 q7 -9 14 0z"/><path d="M940 588 q8 -10 16 0z"/></g>' + lab(980, 604, o('Kalk og sediment', 'Lime and sediment'), '', 'end'));
      // land og jord
      s += '<path d="M0 336 Q120 318 240 330 Q380 342 520 330 L600 336 L604 344 L0 344Z" fill="#6fb35a"/>';
      s += part('jord', '<path d="M0 340 L604 344 L640 400 L0 396Z" fill="#7a5533"/>' +
        '<g fill="#a7794a">' + [[40, 362], [90, 378], [150, 358], [210, 384], [270, 366], [330, 380], [400, 360], [460, 382], [530, 366]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="3"/>'; }).join('') + '</g>' +
        '<path d="M300 372 q10 -8 20 0 q10 8 20 0" stroke="#e7a0a0" stroke-width="4" fill="none" stroke-linecap="round"/>' +
        '<g><rect x="231" y="352" width="4" height="10" fill="#efe2c8"/><path d="M225 353 q8 -12 16 0z" fill="#c8553d"/><rect x="511" y="352" width="4" height="10" fill="#efe2c8"/><path d="M505 353 q8 -12 16 0z" fill="#d9a441"/></g>');
      // skog
      s += part('planter', tree(50, 338, 0.95) + leafTree(92, 340, 0.9) + tree(136, 338, 1.1) + leafTree(182, 342, 0.85) + tree(222, 338, 0.9) +
        '<g fill="#d9a441"><circle cx="150" cy="346" r="3"/><circle cx="196" cy="350" r="3"/><circle cx="70" cy="348" r="3"/></g>');
      s += part('dyr', elk(340, 336, 0.85));
      s += part('avskoging', '<g fill="#9a6a3a" stroke="#5b3a1d" stroke-width="1.5"><path d="M262 338 v-10 h14 v10z"/><ellipse cx="269" cy="328" rx="7" ry="3" fill="#d9b27a"/><path d="M286 338 v-7 h12 v7z"/><ellipse cx="292" cy="331" rx="6" ry="2.5" fill="#d9b27a"/></g>' +
        '<path d="M248 344 l40 -10 l3 6 l-40 10z" fill="#7a5230"/>');
      s += part('forbrenning', factory(392, 340, 1) + car(458, 340, 0.7) +
        '<g fill="#8d939c" opacity=".8"><circle cx="440" cy="236" r="9"/><circle cx="448" cy="218" r="12"/><circle cx="442" cy="196" r="14"/></g>' +
        '<path d="M438 340 V470" stroke="#1d1d1f" stroke-width="6" stroke-dasharray="10 6"/>');
      s += part('vulkan', '<path d="M506 340 L540 266 L566 266 L598 340Z" fill="#6d4c3d" stroke="#3b2a22" stroke-width="1.5"/><path d="M540 266 q13 8 26 0" fill="#e2401f"/>' +
        '<g fill="#9ba1aa" opacity=".85"><circle cx="553" cy="252" r="9"/><circle cx="560" cy="238" r="11"/></g>');
      // piler
      carbonFlows.forEach(function (fl) {
        const col = KIND[fl.kind];
        s += part(fl.id, qarrow(fl.a, flowWidth(fl.value), col), ' data-flow="' + fl.id + '" data-kind="' + fl.kind + '"');
      });
      // animerte karbonprikker (SMIL) – modellsiden fjerner dem og animerer selv
      s += '<g class="smil-dots" aria-hidden="true">' + carbonFlows.map(function (fl) {
        const a = fl.a, d = 'M' + a[0] + ' ' + a[1] + ' Q' + a[2] + ' ' + a[3] + ' ' + a[4] + ' ' + a[5];
        const n = Math.max(1, Math.min(6, Math.round(Math.sqrt(fl.value) / 2)));
        const dur = fl.kind === 'slow' ? 7 : 3.2;
        let g = '';
        for (let i = 0; i < n; i++) g += '<circle r="4.5" fill="#ffffff" stroke="' + KIND[fl.kind] + '" stroke-width="2.5"' + (fl.level ? ' class="lvl-deeper"' : '') + '><animateMotion dur="' + dur + 's" begin="' + f(-i * dur / n) + 's" repeatCount="indefinite" path="' + d + '"/></circle>';
        return '<g data-dots="' + fl.id + '">' + g + '</g>';
      }).join('') + '</g>';
      // tall (vises med «Vis tall»)
      s += '<g class="numtags">' + carbonFlows.filter(function (fl) { return fl.num; }).map(function (fl) {
        return numTag(fl.num[0], fl.num[1], fl.numText || String(fl.value).replace('.', N.settings.lang === 'en' ? '.' : ','), KIND[fl.kind]);
      }).join('') + carbonStocks.map(function (st) { return numTag(st.at[0], st.at[1], st.text, '#14203a'); }).join('') + '</g>';
      return s;
    }
  };

  /* ======================= 2) DRIVHUSEFFEKTEN ======================= */
  // Plassene til molekylene i atmosfæren (modellen viser flere eller færre)
  const molSpots = [];
  (function () {
    let seed = 7;
    const r = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const kinds = ['co2', 'h2o', 'co2', 'ch4', 'h2o', 'co2'];
    for (let i = 0; i < 48; i++) molSpots.push([f(40 + r() * 820), f(130 + r() * 250), kinds[i % kinds.length]]);
  })();
  N.klimaArt.molSpots = molSpots;

  N.diagrams.drivhuseffekt = {
    topic: 'klima',
    title: o('Drivhuseffekten (modell)', 'The greenhouse effect (model)'),
    viewBox: '0 0 1000 600',
    animated: true,
    parts: [
      { id: 'sol', at: [92, 40] },
      { id: 'sollys', at: [226, 160] },
      { id: 'refleksjon', at: [356, 160] },
      { id: 'absorpsjon', at: [330, 478] },
      { id: 'jordoverflate', at: [600, 540] },
      { id: 'varmestraling', at: [560, 300] },
      { id: 'drivhusgasser', at: [700, 200] },
      { id: 'tilbakestraling', at: [800, 330] },
      { id: 'atmosfare', at: [470, 400] },
      { id: 'verdensrommet', at: [640, 36] },
      { id: 'isogsno', at: [170, 430] },
      { id: 'skyer', at: [880, 140], level: 'deeper' },
      { id: 'temperatur', at: [958, 268] }
    ],
    draw: function (p) {
      let s = '<defs><linearGradient id="' + p + 'air" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe0f7"/><stop offset="1" stop-color="#e8f4fd"/></linearGradient>' +
        '<linearGradient id="' + p + 'space" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1430"/><stop offset="1" stop-color="#1c2a55"/></linearGradient>' +
        '<radialGradient id="' + p + 'glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffcf4d" stop-opacity=".9"/><stop offset="1" stop-color="#ffcf4d" stop-opacity="0"/></radialGradient></defs>';
      s += part('verdensrommet', '<rect width="1000" height="96" fill="url(#' + p + 'space)"/>' +
        '<g fill="#fff">' + [[300, 20], [420, 60], [520, 26], [760, 50], [860, 22], [930, 70], [660, 74], [200, 76]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="1.8"/>'; }).join('') + '</g>' +
        lab(740, 84, o('Verdensrommet', 'Space'), 'light'));
      s += part('atmosfare', '<rect y="96" width="1000" height="334" fill="url(#' + p + 'air)"/><path d="M0 96 H1000" stroke="#7fb6de" stroke-width="3" stroke-dasharray="10 6"/>' +
        lab(660, 412, o('Atmosfæren', 'The atmosphere'), 'big', 'middle'));
      s += part('skyer', cloud(870, 180, 1.1));
      s += part('drivhusgasser', '<g class="mols">' + molSpots.map(function (m, i) { return molecule(m[2], m[0], m[1], 0.9, ' data-mol="' + i + '"'); }).join('') + '</g>');
      // bakken
      s += part('jordoverflate', '<path d="M0 430 Q200 418 420 432 Q520 438 620 430 V600 H0Z" fill="#6fae55"/><path d="M620 430 H1000 V600 H620Z" fill="#3f8fca"/>' +
        '<path d="M630 446 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#bfe3fb" stroke-width="3" fill="none"/>' +
        '<path d="M0 470 Q300 460 620 470 V600 H0Z" fill="#8a6a45" opacity=".55"/>' + house(440, 440, 0.9) + tree(520, 438, 0.6) + tree(548, 440, 0.7) + lab(800, 560, o('Hav', 'Ocean'), 'light'));
      s += part('isogsno', '<g class="ice"><path d="M70 438 L150 330 L190 372 L230 318 L320 438Z" fill="#9aa4ae" stroke="#5f6a74" stroke-width="1.5"/>' +
        '<path d="M126 362 L150 330 L170 352 L190 372 L210 344 L230 318 L254 350 L238 360 L220 352 L200 378 L178 366 L160 380 L144 366Z" fill="#ffffff" stroke="#c9d6e2" stroke-width="1.5"/>' +
        '<path d="M40 440 Q120 430 200 440 Q130 452 40 450Z" fill="#ffffff" stroke="#c9d6e2" stroke-width="1.5"/></g>');
      s += part('absorpsjon', '<ellipse cx="330" cy="444" rx="58" ry="14" fill="url(#' + p + 'glow)"/><ellipse cx="330" cy="444" rx="20" ry="5" fill="#ffd23f" opacity=".8"/>');
      // sola og strålene
      s += part('sol', '<circle cx="92" cy="74" r="44" fill="#ffd23f" stroke="#f2a20c" stroke-width="4"/>' +
        '<g stroke="#f2a20c" stroke-width="4" stroke-linecap="round">' + [0, 1, 2, 3, 4, 5, 6, 7].map(function (i) {
          const a = i * Math.PI / 4; return '<path d="M' + f(92 + 54 * Math.cos(a)) + ' ' + f(74 + 54 * Math.sin(a)) + ' L' + f(92 + 66 * Math.cos(a)) + ' ' + f(74 + 66 * Math.sin(a)) + '"/>';
        }).join('') + '</g>');
      s += part('sollys', qarrow([150, 120, 230, 270, 320, 432], 12, '#f2b705') + qarrow([128, 140, 190, 300, 244, 432], 9, '#f2b705'));
      s += part('refleksjon', qarrow([256, 418, 300, 300, 382, 104], 7, '#f7cf3a') + '<path d="M246 420 l10 -4 l8 10" fill="none" stroke="#f2b705" stroke-width="3"/>');
      s += part('varmestraling', '<path class="flow-line" d="' + wave(520, 428, 560, 104, 9, 34) + '" fill="none" stroke="#e2402a" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M560 100 l-12 18 h24z" fill="#e2402a"/>' +
        '<path d="' + wave(610, 428, 680, 250, 8, 30) + '" fill="none" stroke="#e2402a" stroke-width="5" stroke-linecap="round"/><circle cx="680" cy="248" r="9" fill="#ff9a7a" opacity=".8"/>');
      s += part('tilbakestraling', '<path d="' + wave(760, 230, 790, 428, 8, 30) + '" fill="none" stroke="#e2402a" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 0"/><path d="M790 432 l-12 -18 h24z" fill="#e2402a"/>');
      // animerte fotoner (SMIL) – modellsiden fjerner dem og animerer selv
      const fot = function (d, col, dur, n) { let g = ''; for (let i = 0; i < n; i++) g += '<circle r="5" fill="' + col + '" stroke="#ffffff" stroke-width="1.5"><animateMotion dur="' + dur + 's" begin="' + f(-i * dur / n) + 's" repeatCount="indefinite" path="' + d + '"/></circle>'; return g; };
      s += '<g class="smil-dots" aria-hidden="true">' + fot('M150 120 Q230 270 320 432', '#ffd23f', 2.6, 3) + fot('M256 418 Q300 300 382 104', '#ffe680', 2.6, 2) +
        fot('M520 428 L560 104', '#ff6a4d', 2.6, 3) + fot('M610 428 L680 250', '#ff6a4d', 1.8, 2) + fot('M760 230 L790 428', '#ff6a4d', 2, 2) + '</g>';
      // termometer
      s += part('temperatur', '<rect x="930" y="196" width="56" height="236" rx="28" fill="#ffffff" stroke="#14203a" stroke-width="2.5"/>' +
        '<rect x="950" y="216" width="16" height="180" rx="8" fill="#e9eef5"/><rect class="thermo-fill" x="950" y="300" width="16" height="96" rx="8" fill="#e2402a"/><circle cx="958" cy="404" r="18" fill="#e2402a" stroke="#14203a" stroke-width="2"/>' +
        '<text class="thermo-text dnum" x="958" y="186" text-anchor="middle">15 °C</text>');
      s += lab(176, 286, o('Sollys', 'Sunlight'), '', 'end') + lab(612, 160, o('Varmestråling', 'Heat radiation'), '');
      return s;
    }
  };

  /* ======================= 3) KLIMASYSTEMET ======================= */
  N.diagrams.klimasystem = {
    topic: 'klima',
    title: o('Klimasystemet: alt henger sammen', 'The climate system: everything is connected'),
    viewBox: '0 0 1000 560',
    parts: [
      { id: 'sol', at: [80, 50] },
      { id: 'atmosfare', at: [300, 70] },
      { id: 'vaer', at: [560, 70] },
      { id: 'klima', at: [880, 90] },
      { id: 'hav', at: [800, 470] },
      { id: 'kryosfaren', at: [170, 230] },
      { id: 'landjord', at: [430, 380] },
      { id: 'biosfaren', at: [560, 300] },
      { id: 'mennesker', at: [360, 290] },
      { id: 'havstrom', at: [690, 520], level: 'deeper' }
    ],
    draw: function (p) {
      let s = '<defs><linearGradient id="' + p + 'sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fcdf0"/><stop offset="1" stop-color="#e3f2fc"/></linearGradient>' +
        '<linearGradient id="' + p + 'sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4ea4dc"/><stop offset="1" stop-color="#1f5f99"/></linearGradient></defs>';
      s += part('atmosfare', '<rect width="1000" height="330" fill="url(#' + p + 'sky)"/>' + cloud(300, 120, 0.9) + cloud(760, 200, 0.7));
      s += part('sol', '<circle cx="80" cy="80" r="40" fill="#ffd23f" stroke="#f2a20c" stroke-width="4"/>');
      s += part('vaer', cloud(560, 120, 1.2, '#8f9aa8', 1) + '<g stroke="#2b7bbd" stroke-width="3" stroke-linecap="round">' + [520, 545, 570, 595].map(function (x) { return '<path d="M' + x + ' 150 l-8 22"/>'; }).join('') + '</g>');
      s += part('klima', '<rect x="800" y="40" width="170" height="120" rx="12" fill="#ffffff" stroke="#14203a" stroke-width="2"/>' +
        '<path d="M818 136 L850 120 L880 126 L910 104 L940 92 L956 80" fill="none" stroke="#e2402a" stroke-width="3"/><path d="M818 140 H956 M818 140 V60" stroke="#14203a" stroke-width="1.5"/>' +
        '<text class="dnum" x="885" y="62" text-anchor="middle">30 ' + N.esc(N.t(o('år', 'years'))) + '</text>');
      s += part('hav', '<path d="M560 330 H1000 V560 H520 Z" fill="url(#' + p + 'sea)"/><path d="M566 338 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#cfe9fb" stroke-width="3" fill="none"/>' + fish(860, 420) + fish(760, 470, 0.8, '#c9a46a'));
      s += part('havstrom', '<path d="M600 520 Q760 470 960 500" fill="none" stroke="#e2402a" stroke-width="5" stroke-dasharray="12 8"/><path d="M960 500 l-16 -10 l2 16z" fill="#e2402a"/>');
      s += part('landjord', '<path d="M0 330 L150 190 L220 250 L300 170 L420 300 L540 330 L520 560 H0Z" fill="#8c7b65"/><path d="M0 400 Q260 380 530 400 L520 560 H0Z" fill="#6fae55"/>');
      s += part('kryosfaren', '<path d="M110 228 L150 190 L176 214 L200 236 L220 250 L248 222 L300 170 L330 204 L300 214 L272 238 L248 250 L222 270 L196 252 L170 262 L150 240 L130 252Z" fill="#ffffff" stroke="#c9d6e2" stroke-width="1.5"/>' +
        '<path d="M880 330 h90 l-10 10 h-70z M820 340 h50 l-6 8 h-38z" fill="#f4f8fb" stroke="#b9cbdb" stroke-width="1.5"/>');
      s += part('biosfaren', tree(470, 400, 0.8) + tree(500, 404, 1) + leafTree(440, 404, 0.8) + elk(560, 410, 0.6) + fish(650, 380, 0.7, '#e6a64b'));
      s += part('mennesker', house(300, 408, 0.9) + house(350, 410, 0.7, '#2f5f9a') + car(380, 420, 0.6, '#c92a63'));
      s += lab(780, 540, o('Hav', 'Ocean'), 'light') + lab(200, 470, o('Land', 'Land'), 'light');
      return s;
    }
  };

  /* ======================= 4) NATURLIGE ÅRSAKER ======================= */
  N.diagrams.naturlige = {
    topic: 'klima',
    title: o('Naturlige årsaker til klimaendringer', 'Natural causes of climate change'),
    viewBox: '0 0 1000 560',
    parts: [
      { id: 'solaktivitet', at: [230, 200] },
      { id: 'jordbane', at: [290, 70] },
      { id: 'aksehelning', at: [480, 210] },
      { id: 'presesjon', at: [520, 120], level: 'deeper' },
      { id: 'vulkanutbrudd', at: [690, 50] },
      { id: 'kontinentdrift', at: [690, 190] },
      { id: 'istid', at: [690, 330] },
      { id: 'iskjerne', at: [690, 470] }
    ],
    draw: function (p) {
      let s = '<defs><radialGradient id="' + p + 'sp" cx="40%" cy="50%" r="70%"><stop offset="0" stop-color="#1c2a55"/><stop offset="1" stop-color="#080d20"/></radialGradient></defs>';
      s += '<rect width="640" height="560" rx="18" fill="url(#' + p + 'sp)"/>' +
        '<g fill="#fff" opacity=".8">' + [[40, 40], [120, 500], [600, 60], [560, 520], [40, 300], [360, 520], [600, 300], [300, 30]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="1.8"/>'; }).join('') + '</g>';
      s += part('jordbane', '<ellipse cx="300" cy="280" rx="250" ry="200" fill="none" stroke="#9fb3d9" stroke-width="3" stroke-dasharray="8 7"/>' +
        '<path d="M300 80 l14 -6 l-2 12z" fill="#9fb3d9"/>');
      s += part('solaktivitet', '<circle cx="240" cy="280" r="58" fill="#ffd23f" stroke="#f2a20c" stroke-width="4"/><circle cx="222" cy="262" r="7" fill="#c47b0c"/><circle cx="262" cy="300" r="5" fill="#c47b0c"/><circle cx="252" cy="250" r="4" fill="#c47b0c"/>');
      s += part('aksehelning', '<circle cx="550" cy="280" r="34" fill="#2f74c0" stroke="#bcd8f5" stroke-width="2"/><path d="M536 262 q12 -10 22 -2 q6 10 -6 16 q-14 4 -16 -14z M552 292 q10 -4 14 6 q-4 10 -14 4z" fill="#4f9f45"/>' +
        '<path d="M536 236 L564 324" stroke="#ffffff" stroke-width="3"/><path d="M550 226 V334" stroke="#9fb3d9" stroke-width="1.5" stroke-dasharray="4 4"/>' +
        '<text class="dnum light" x="584" y="236">23,4°</text>');
      s += part('presesjon', '<ellipse cx="535" cy="232" rx="18" ry="6" fill="none" stroke="#ffd166" stroke-width="2.5"/><path d="M552 230 l6 4 l-7 3z" fill="#ffd166"/>');
      s += lab(240, 368, o('Sola', 'The sun'), 'light', 'middle') + lab(550, 352, o('Jorda', 'The Earth'), 'light', 'middle');
      const box = function (y, id, inner, title) {
        return part(id, '<rect x="660" y="' + y + '" width="330" height="126" rx="14" fill="var(--slide)" stroke="var(--c-ink)" stroke-width="2"/>' + inner + lab(842, y + 116, title, '', 'middle'));
      };
      s += box(10, 'vulkanutbrudd', '<path d="M760 112 L800 50 L822 50 L860 112Z" fill="#6d4c3d" stroke="#3b2a22" stroke-width="1.5"/><path d="M800 50 q11 6 22 0" fill="#e2401f"/>' +
        '<g fill="#8d939c" opacity=".9"><circle cx="812" cy="36" r="12"/><circle cx="836" cy="26" r="15"/><circle cx="868" cy="24" r="16"/><circle cx="900" cy="30" r="14"/><circle cx="930" cy="40" r="11"/></g>', o('Store vulkanutbrudd', 'Large volcanic eruptions'));
      s += box(150, 'kontinentdrift', '<path d="M710 190 q40 -24 70 -4 q16 30 -10 46 q-30 6 -46 -14z" fill="#c9a46a" stroke="#8a6a45"/><path d="M800 200 q30 -20 56 0 q10 22 -10 36 q-30 4 -42 -10z" fill="#c9a46a" stroke="#8a6a45"/><path d="M880 178 q40 -10 60 10 q4 30 -26 40 q-30 -6 -34 -30z" fill="#c9a46a" stroke="#8a6a45"/>' +
        '<path d="M786 214 h12 M862 206 h14" stroke="#14203a" stroke-width="2" marker-end=""/>', o('Kontinentene flytter seg', 'The continents move'));
      s += box(290, 'istid', '<path d="M700 380 Q760 300 860 310 Q930 316 960 360 Q900 396 820 390 Q760 392 700 380Z" fill="#ffffff" stroke="#9fb7cc" stroke-width="2"/><path d="M790 340 q20 -18 40 -4 q10 20 -10 30 q-24 4 -30 -26z" fill="#c9a46a" opacity=".55"/>' +
        '<text class="dnum" x="830" y="356" text-anchor="middle">−20 000 ' + N.esc(N.t(o('år', 'yrs'))) + '</text>', o('Istider og mellomistider', 'Ice ages and interglacials'));
      s += box(430, 'iskjerne', '<rect x="740" y="452" width="190" height="34" rx="17" fill="#dff1fb" stroke="#7fb6de" stroke-width="2"/>' +
        '<g fill="#ffffff" stroke="#7fb6de">' + [[770, 462], [800, 474], [830, 464], [860, 476], [892, 466], [912, 474]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="4"/>'; }).join('') + '</g>', o('Iskjerner: luft fra fortiden', 'Ice cores: air from the past'));
      return s;
    }
  };

  /* ======================= 5) LØSNINGER ======================= */
  N.diagrams.losninger = {
    topic: 'klima',
    title: o('Løsninger: Slik kan utslippene kuttes', 'Solutions: how emissions can be cut'),
    viewBox: '0 0 1000 560',
    parts: [
      { id: 'vannkraft', at: [110, 170] },
      { id: 'vindkraft', at: [300, 60] },
      { id: 'solenergi', at: [520, 210] },
      { id: 'energisparing', at: [600, 330] },
      { id: 'transport', at: [460, 470] },
      { id: 'mat', at: [800, 330] },
      { id: 'skogogmyr', at: [900, 210] },
      { id: 'co2fangst', at: [240, 470] },
      { id: 'forbruk', at: [700, 470] }
    ],
    draw: function (p) {
      let s = '<defs><linearGradient id="' + p + 'sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a7d4f3"/><stop offset="1" stop-color="#eaf6fd"/></linearGradient></defs>';
      s += '<rect width="1000" height="560" fill="url(#' + p + 'sky)"/>';
      s += '<path d="M0 300 L90 150 L170 240 L240 120 L330 300Z" fill="#8c95a0"/><path d="M60 200 L90 150 L120 186 L100 200Z M210 170 L240 120 L270 168 L250 176Z" fill="#fff"/>';
      s += '<path d="M0 320 Q500 290 1000 320 V560 H0Z" fill="#7fbf62"/>';
      s += part('vannkraft', '<path d="M60 300 L70 230 H160 L170 300Z" fill="#c3c8cf" stroke="#5f6a74" stroke-width="2"/><path d="M70 236 H160" stroke="#5f6a74" stroke-width="3"/><path d="M0 236 H66 V300 H0Z" fill="#4e9ad6" opacity=".9"/>' +
        '<path d="M120 300 q10 20 30 26" stroke="#4e9ad6" stroke-width="10" fill="none"/>');
      s += part('vindkraft', [[300, 230], [380, 250]].map(function (q) {
        return '<path d="M' + q[0] + ' ' + q[1] + ' L' + (q[0] + 4) + ' ' + (q[1] - 150) + ' L' + (q[0] + 8) + ' ' + q[1] + 'Z" fill="#f4f6f8" stroke="#8a939d"/>' +
          '<g transform="translate(' + (q[0] + 4) + ' ' + (q[1] - 150) + ')"><g class="spin">' + [0, 120, 240].map(function (a) { return '<path d="M0 0 L4 -54 L-2 -54Z" fill="#ffffff" stroke="#8a939d" transform="rotate(' + a + ')"/>'; }).join('') + '<circle r="5" fill="#cfd5db" stroke="#8a939d"/></g></g>';
      }).join(''));
      s += part('solenergi', house(470, 330, 1.4, '#2f3e57') + '<g fill="#1f3c88" stroke="#c9d6e2" stroke-width="1.5"><path d="M472 280 L500 258 L520 270 L492 292Z"/><path d="M496 260 L524 238 L540 250 L512 272Z"/></g>');
      s += part('energisparing', '<rect x="560" y="268" width="80" height="62" fill="#efe4cc" stroke="#5b4a33" stroke-width="2"/><path d="M552 270 L600 236 L648 270Z" fill="#6c8f3a" stroke="#3d5520" stroke-width="2"/>' +
        '<rect x="644" y="300" width="22" height="26" rx="3" fill="#dfe5ea" stroke="#5f6a74" stroke-width="1.5"/><circle cx="655" cy="313" r="7" fill="none" stroke="#5f6a74" stroke-width="1.5"/><rect x="574" y="282" width="14" height="14" fill="#8fc3e8"/>');
      s += part('skogogmyr', tree(870, 330, 1.1) + tree(910, 332, 0.9) + tree(950, 330, 1.2) + '<path d="M840 350 Q900 340 980 352 Q920 366 840 360Z" fill="#6b7d3a"/><g fill="#e9f0ff"><circle cx="880" cy="352" r="3"/><circle cx="930" cy="354" r="3"/></g>');
      s += part('mat', '<path d="M720 360 H880 V400 H720Z" fill="#8a6a45"/><g stroke="#3a8a3a" stroke-width="4" stroke-linecap="round">' + [735, 755, 775, 795, 815, 835, 855].map(function (x) { return '<path d="M' + x + ' 362 v-14 M' + (x - 5) + ' 352 l5 -6 l5 6"/>'; }).join('') + '</g>' +
        '<g fill="#e2401f">' + [745, 785, 825].map(function (x) { return '<circle cx="' + x + '" cy="346" r="5"/>'; }).join('') + '</g>');
      s += part('transport', '<rect x="340" y="420" width="150" height="46" rx="10" fill="#2e9e5b" stroke="#1d6b3c" stroke-width="2"/><g fill="#cfe6f7">' + [352, 382, 412, 442].map(function (x) { return '<rect x="' + x + '" y="428" width="22" height="16" rx="2"/>'; }).join('') + '</g>' +
        '<circle cx="370" cy="470" r="9" fill="#222"/><circle cx="460" cy="470" r="9" fill="#222"/><path d="M380 416 l8 -12 h20 l8 12" stroke="#14203a" stroke-width="2" fill="none"/>' +
        '<g stroke="#14203a" stroke-width="3" fill="none"><circle cx="530" cy="466" r="12"/><circle cx="570" cy="466" r="12"/><path d="M530 466 L546 446 L570 466 M546 446 H560 L570 466 M546 446 L542 438"/></g>');
      s += part('co2fangst', factory(180, 400, 1) + '<path d="M240 400 V520 H140 V546" stroke="#4a4f59" stroke-width="8" fill="none"/><path d="M90 546 H300" stroke="#14203a" stroke-width="2"/>' +
        '<g fill="#5f6a74">' + [[150, 552], [170, 554], [130, 556]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="4"/>'; }).join('') + '</g>' +
        '<text class="dnum" x="250" y="540">CO₂</text>');
      s += part('forbruk', '<rect x="650" y="420" width="96" height="50" rx="8" fill="#ffffff" stroke="#14203a" stroke-width="2"/><path d="M698 432 l12 18 h-24z" fill="none" stroke="#2e9e5b" stroke-width="3"/>' +
        '<path d="M672 452 a26 26 0 0 0 52 0" fill="none" stroke="#2e9e5b" stroke-width="3"/><path d="M720 446 l6 8 l4 -10" fill="none" stroke="#2e9e5b" stroke-width="3"/>');
      return s;
    }
  };

  /* ======================= 6) HVORDAN VET VI DET? ======================= */
  N.diagrams.malinger = {
    topic: 'klima',
    title: o('Hvordan vet vi det? Målinger av klimaet', 'How do we know? Measuring the climate'),
    viewBox: '0 0 1000 560',
    parts: [
      { id: 'satellitt', at: [520, 40] },
      { id: 'maunaloa', at: [180, 200] },
      { id: 'vaerstasjon', at: [420, 290] },
      { id: 'havboye', at: [820, 290] },
      { id: 'iskjerne', at: [90, 400] },
      { id: 'treringer', at: [540, 400] },
      { id: 'bremaling', at: [300, 130] },
      { id: 'vannstand', at: [700, 250] }
    ],
    draw: function (p) {
      let s = '<defs><linearGradient id="' + p + 'sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2a55"/><stop offset=".35" stop-color="#9fcdf0"/><stop offset="1" stop-color="#e3f2fc"/></linearGradient>' +
        '<linearGradient id="' + p + 'sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4ea4dc"/><stop offset="1" stop-color="#1f5f99"/></linearGradient></defs>';
      s += '<rect width="1000" height="560" fill="url(#' + p + 'sky)"/>';
      s += part('satellitt', '<g transform="translate(520 64) rotate(-12)"><rect x="-16" y="-12" width="32" height="24" rx="3" fill="#d9dde3" stroke="#5f6a74" stroke-width="1.5"/><rect x="-66" y="-9" width="44" height="18" fill="#1f3c88" stroke="#c9d6e2"/><rect x="22" y="-9" width="44" height="18" fill="#1f3c88" stroke="#c9d6e2"/></g>' +
        '<path d="M520 80 L470 200 M520 80 L600 200" stroke="#ffd166" stroke-width="2" stroke-dasharray="5 5"/>');
      s += '<path d="M0 330 Q300 300 640 330 V560 H0Z" fill="#7fbf62"/>';
      s += part('maunaloa', '<path d="M60 330 L180 230 L300 330Z" fill="#6d4c3d"/><rect x="164" y="214" width="32" height="18" fill="#ffffff" stroke="#14203a" stroke-width="1.5"/><path d="M180 214 V196" stroke="#14203a" stroke-width="2"/><circle cx="180" cy="194" r="4" fill="#e2402a"/>');
      s += part('bremaling', '<path d="M250 230 Q300 170 380 190 Q420 230 400 300 Q330 290 250 300Z" fill="#ffffff" stroke="#9fb7cc" stroke-width="2"/><path d="M330 196 V276" stroke="#e2402a" stroke-width="4"/><g stroke="#14203a" stroke-width="2"><path d="M326 210 h8 M326 230 h8 M326 250 h8"/></g>');
      s += part('vaerstasjon', '<rect x="400" y="262" width="46" height="36" fill="#ffffff" stroke="#14203a" stroke-width="2"/><path d="M404 270 h38 M404 278 h38 M404 286 h38" stroke="#8a939d" stroke-width="2"/><path d="M412 298 V328 M434 298 V328" stroke="#14203a" stroke-width="3"/>' +
        '<path d="M470 330 V240" stroke="#14203a" stroke-width="2"/><g transform="translate(470 240)"><path d="M0 0 h-16 M0 0 l12 8 M0 0 l12 -8" stroke="#14203a" stroke-width="2"/><circle r="3" fill="#14203a"/></g>');
      s += part('treringer', '<ellipse cx="560" cy="350" rx="44" ry="18" fill="#d9b27a" stroke="#7a5230" stroke-width="2"/>' + [34, 26, 18, 10].map(function (r) { return '<ellipse cx="560" cy="350" rx="' + r + '" ry="' + f(r * 0.4) + '" fill="none" stroke="#9a6a3a" stroke-width="1.5"/>'; }).join('') +
        '<path d="M516 350 V380 Q560 396 604 380 V350" fill="#9a6a3a" stroke="#7a5230" stroke-width="2"/>');
      s += part('iskjerne', '<path d="M0 360 Q80 340 180 362 L180 560 H0Z" fill="#f4f8fb" stroke="#b9cbdb" stroke-width="2"/><path d="M60 300 L80 360 M100 300 L80 360 M60 300 H100" stroke="#5f6a74" stroke-width="3" fill="none"/>' +
        '<rect x="74" y="360" width="12" height="160" fill="#cfe7f7" stroke="#7fb6de" stroke-width="1.5"/>');
      s += part('vannstand', '<path d="M640 330 H700 V300 H720 V560" stroke="#7a5230" stroke-width="6" fill="none"/><rect x="706" y="320" width="10" height="120" fill="#ffffff" stroke="#14203a"/><g stroke="#14203a"><path d="M706 340 h6 M706 360 h6 M706 380 h6 M706 400 h6 M706 420 h6"/></g>');
      s += '<path d="M640 330 H1000 V560 H640Z" fill="url(#' + p + 'sea)" opacity=".95"/><path d="M646 338 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0" stroke="#cfe9fb" stroke-width="3" fill="none"/>';
      s += part('havboye', '<path d="M820 320 V470" stroke="#14203a" stroke-width="2" stroke-dasharray="4 4"/><rect x="810" y="470" width="20" height="56" rx="10" fill="#ffd166" stroke="#8a5a00" stroke-width="2"/><path d="M820 470 V452" stroke="#14203a" stroke-width="2"/><circle cx="820" cy="326" r="8" fill="#ffd166" stroke="#8a5a00" stroke-width="2"/>');
      return s;
    }
  };
  /* ======================= Trinnfigur: tilbakekobling ======================= */
  N.figures = N.figures || {};
  N.figures.tilbakekobling = {
    viewBox: '0 0 1000 240',
    draw: function (p) {
      const cx = function (i) { return 125 + i * 250; };
      let s = '<rect width="1000" height="240" rx="18" fill="#0b1324"/>';
      // 1: litt varmere
      s += '<g data-st="1 2 3 4"><rect x="' + (cx(0) - 14) + '" y="40" width="28" height="130" rx="14" fill="#ffffff"/><rect x="' + (cx(0) - 6) + '" y="90" width="12" height="72" rx="6" fill="#e2402a"/><circle cx="' + cx(0) + '" cy="172" r="20" fill="#e2402a" stroke="#ffffff" stroke-width="3"/>' +
        '<path d="M' + (cx(0) + 32) + ' 110 l14 -22 l14 22" fill="none" stroke="#ff9a7a" stroke-width="5" stroke-linecap="round"/>' +
        molecule('co2', cx(0) - 62, 70, 1) + molecule('co2', cx(0) - 58, 130, 1) + '</g>';
      // 2: isen smelter
      s += '<g data-st="2 3 4"><path d="M' + (cx(1) - 90) + ' 170 Q' + cx(1) + ' 150 ' + (cx(1) + 90) + ' 170 Z" fill="#2b78b4"/><path d="M' + (cx(1) - 50) + ' 168 L' + (cx(1) - 30) + ' 120 L' + (cx(1) + 10) + ' 112 L' + (cx(1) + 40) + ' 168 Z" fill="#ffffff" stroke="#9fb7cc" stroke-width="2"/>' +
        '<path d="M' + (cx(1) + 52) + ' 118 q8 14 0 22 q-8 -8 0 -22z M' + (cx(1) + 70) + ' 132 q7 12 0 19 q-7 -7 0 -19z" fill="#8fd0ff"/></g>';
      // 3: mørkt hav absorberer
      s += '<g data-st="3 4"><circle cx="' + (cx(2) - 70) + '" cy="50" r="22" fill="#ffd23f"/><path d="M' + (cx(2) - 90) + ' 172 Q' + cx(2) + ' 156 ' + (cx(2) + 90) + ' 172 V200 H' + (cx(2) - 90) + 'Z" fill="#1c4f86"/>' +
        '<g stroke="#ffd23f" stroke-width="5" stroke-linecap="round"><path d="M' + (cx(2) - 52) + ' 70 L' + (cx(2) - 10) + ' 150"/><path d="M' + (cx(2) - 36) + ' 64 L' + (cx(2) + 20) + ' 150"/></g>' +
        '<ellipse cx="' + cx(2) + '" cy="166" rx="44" ry="8" fill="#ff7a4d" opacity=".7"/></g>';
      // 4: og rundt igjen
      s += '<g data-st="4"><path d="M' + (cx(3) - 48) + ' 120 a48 48 0 1 1 20 39" fill="none" stroke="#ff9a7a" stroke-width="8" stroke-linecap="round"/><path d="M' + (cx(3) - 40) + ' 150 l12 18 l14 -16z" fill="#ff9a7a"/>' +
        '<text x="' + cx(3) + '" y="128" text-anchor="middle" fill="#ffffff" font-family="var(--f-mono)" font-size="26" font-weight="700">+</text></g>';
      [1, 2, 3, 4].forEach(function (n, i) { s += '<text x="' + cx(i) + '" y="228" text-anchor="middle" fill="#e7edf8" font-family="var(--f-mono)" font-size="16" font-weight="700">' + n + '</text>'; });
      return s;
    }
  };
  /* ======================= Trinnfigur: forsøk med to glass ======================= */
  N.figures.forsokglass = {
    viewBox: '0 0 1000 240',
    draw: function (p) {
      const cx = function (i) { return 125 + i * 250; };
      const jar = function (x, lab, extra) {
        return '<path d="M' + (x - 34) + ' 70 h68 v110 q0 14 -14 14 h-40 q-14 0 -14 -14z" fill="#dff1fb" fill-opacity=".35" stroke="#cfe7f7" stroke-width="3"/><rect x="' + (x - 38) + '" y="58" width="76" height="14" rx="4" fill="#8a939d"/>' +
          '<rect x="' + (x - 4) + '" y="76" width="8" height="70" rx="4" fill="#ffffff"/><circle cx="' + x + '" cy="150" r="8" fill="#e2402a"/><rect x="' + (x - 2) + '" y="104" width="4" height="44" fill="#e2402a"/>' +
          '<text x="' + x + '" y="214" text-anchor="middle" fill="#e7edf8" font-family="var(--f-mono)" font-size="15" font-weight="700">' + lab + '</text>' + (extra || '');
      };
      let s = '<rect width="1000" height="240" rx="18" fill="#0b1324"/>';
      s += '<g data-st="1 2 3 4">' + jar(cx(0) - 45, 'A') + jar(cx(0) + 45, 'B') + '</g>';
      s += '<g data-st="2 3 4"><rect x="' + (cx(1) - 30) + '" y="120" width="60" height="60" rx="6" fill="#f4ecd8" stroke="#cfd5db" stroke-width="2"/><path d="M' + (cx(1) - 26) + ' 140 h52 v36 h-52z" fill="#e9dcc3"/>' +
        '<g fill="#ffffff">' + [[-12, 130], [0, 112], [10, 124], [-4, 96], [14, 104]].map(function (q) { return '<circle cx="' + (cx(1) + q[0]) + '" cy="' + q[1] + '" r="5" stroke="#9fb7cc"/>'; }).join('') + '</g>' +
        molecule('co2', cx(1) + 50, 76, 1) + '<text x="' + cx(1) + '" y="214" text-anchor="middle" fill="#e7edf8" font-family="var(--f-mono)" font-size="14">CO₂</text></g>';
      s += '<g data-st="3 4"><path d="M' + (cx(2) - 20) + ' 40 h40 l14 30 h-68z" fill="#ffd166"/><circle cx="' + cx(2) + '" cy="82" r="14" fill="#fff6c8"/><path d="M' + cx(2) + ' 20 V40" stroke="#8a939d" stroke-width="4"/>' +
        '<g stroke="#ffd166" stroke-width="3" stroke-dasharray="6 6"><path d="M' + (cx(2) - 20) + ' 100 L' + (cx(2) - 60) + ' 170"/><path d="M' + (cx(2) + 20) + ' 100 L' + (cx(2) + 60) + ' 170"/></g>' +
        '<rect x="' + (cx(2) - 80) + '" y="170" width="40" height="30" rx="4" fill="#dff1fb" fill-opacity=".4" stroke="#cfe7f7"/><rect x="' + (cx(2) + 40) + '" y="170" width="40" height="30" rx="4" fill="#dff1fb" fill-opacity=".4" stroke="#cfe7f7"/></g>';
      s += '<g data-st="4"><path d="M' + (cx(3) - 80) + ' 170 H' + (cx(3) + 80) + ' M' + (cx(3) - 80) + ' 170 V60" stroke="#e7edf8" stroke-width="2"/>' +
        '<path d="M' + (cx(3) - 76) + ' 160 Q' + cx(3) + ' 120 ' + (cx(3) + 76) + ' 96" fill="none" stroke="#ff9a7a" stroke-width="4"/><path d="M' + (cx(3) - 76) + ' 160 Q' + cx(3) + ' 128 ' + (cx(3) + 76) + ' 112" fill="none" stroke="#8fd0ff" stroke-width="4"/>' +
        '<text x="' + (cx(3) + 80) + '" y="92" fill="#ff9a7a" font-family="var(--f-mono)" font-size="14" text-anchor="end">B</text><text x="' + (cx(3) + 80) + '" y="130" fill="#8fd0ff" font-family="var(--f-mono)" font-size="14" text-anchor="end">A</text></g>';
      [1, 2, 3, 4].forEach(function (n, i) { s += '<text x="' + cx(i) + '" y="232" text-anchor="middle" fill="#e7edf8" font-family="var(--f-mono)" font-size="16" font-weight="700">' + n + '</text>'; });
      return s;
    }
  };
})();
