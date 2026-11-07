/* =====================================================================
   Historien om Jorda – TEGNINGENE (modellene)
   ---------------------------------------------------------------------
   Hver tegning er laget med kode (SVG). Hver del som kan klikkes, ligger i
   en gruppe med data-part="id", der id-en må finnes i strukturer.js.
   parts: rekkefølgen her = rekkefølgen på numrene i tegningen.
   at: [x, y] = hvor nummeret (nålen) skal stå.
   note: ekstra tekst om delen akkurat i denne modellen.
   Tegningene er modeller: Lagene er ikke tegnet i riktig målestokk.
   ===================================================================== */
(function () {
  const N = window.NatLab;
  const f = (n) => Math.round(n * 10) / 10;
  const part = (id, svg) => '<g data-part="' + id + '">' + svg + '</g>';
  const o = (nb, en) => ({ nb: nb, en: en });

  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  /** Jordskjelv-symbol (stjerne) */
  function quake(x, y, s) {
    s = s || 1;
    let d = '';
    for (let i = 0; i < 16; i++) {
      const a = i * Math.PI / 8, r = (i % 2 ? 5 : 12) * s;
      d += (i ? 'L' : 'M') + f(x + r * Math.cos(a)) + ' ' + f(y + r * Math.sin(a));
    }
    return '<path d="' + d + 'Z" fill="#ffd23f" stroke="#8a5a00" stroke-width="1.5"/>';
  }
  /** Vulkan med krater og litt røyk */
  function volcano(x, y, w, h, smoke) {
    return '<path d="M' + f(x - w / 2) + ' ' + y + ' L' + f(x - w * 0.09) + ' ' + f(y - h) + ' L' + f(x + w * 0.09) + ' ' + f(y - h) + ' L' + f(x + w / 2) + ' ' + y + 'Z" fill="#6d4c3d" stroke="#3b2a22" stroke-width="1.5"/>' +
      '<path d="M' + f(x - w * 0.09) + ' ' + f(y - h) + ' q' + f(w * 0.09) + ' 8 ' + f(w * 0.18) + ' 0" fill="#e2401f"/>' +
      '<path d="M' + f(x - w * 0.05) + ' ' + f(y - h + 2) + ' q-4 ' + f(h * 0.35) + ' 3 ' + f(h * 0.6) + '" stroke="#e2401f" stroke-width="3" fill="none"/>' +
      (smoke === false ? '' : '<g fill="#b8bec7" opacity=".85"><circle cx="' + f(x) + '" cy="' + f(y - h - 12) + '" r="9"/><circle cx="' + f(x + 10) + '" cy="' + f(y - h - 26) + '" r="12"/><circle cx="' + f(x + 24) + '" cy="' + f(y - h - 42) + '" r="14"/></g>');
  }
  /** Pil (bevegelse) */
  function arrow(x, y, dx, col) {
    const dir = dx > 0 ? 1 : -1, L = Math.abs(dx);
    return '<path d="M' + x + ' ' + (y - 4) + 'h' + f(dir * (L - 14)) + 'v-7l' + f(dir * 14) + ' 11l' + f(-dir * 14) + ' 11v-7h' + f(-dir * (L - 14)) + 'Z" fill="' + (col || '#ffffff') + '" stroke="#14203a" stroke-width="1.2" stroke-linejoin="round"/>';
  }
  function mantleDefs(p) {
    return '<defs><linearGradient id="' + p + 'man" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--c-mantle)"/><stop offset="1" style="stop-color:var(--c-mantle-2)"/></linearGradient>' +
      '<linearGradient id="' + p + 'sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fc4ec"/><stop offset="1" stop-color="#2b78b4"/></linearGradient>' +
      '<linearGradient id="' + p + 'sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--slide-glow)"/><stop offset="1" style="stop-color:var(--slide)"/></linearGradient>' +
      '<radialGradient id="' + p + 'mag" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd166"/><stop offset=".55" stop-color="#ff7a1a"/><stop offset="1" stop-color="#d1300f"/></radialGradient>' +
      '<pattern id="' + p + 'strata" width="40" height="18" patternUnits="userSpaceOnUse"><rect width="40" height="18" style="fill:var(--c-crust)"/><path d="M0 9h40" stroke="#a9834c" stroke-width="2"/></pattern></defs>';
  }
  const lab = (x, y, text, cls) => '<text class="dlab' + (cls ? ' ' + cls : '') + '" x="' + x + '" y="' + y + '">' + N.esc(N.t(text)) + '</text>';

  /* ======================= 1) JORDAS LAG ======================= */
  N.diagrams.lagene = {
    topic: 'jorda',
    title: o('Jordas lag (tverrsnitt)', 'The layers of the Earth (cross-section)'),
    viewBox: '0 0 900 560',
    parts: [
      { id: 'jordskorpe', at: [160, 50], note: o('På den store kula er skorpa tegnet altfor tykk – ellers ville den vært tynnere enn en strek. Den er bare 5–70 km tykk.', 'On the big globe the crust is drawn far too thick – otherwise it would be thinner than a line. It is only 5–70 km thick.') },
      { id: 'mantel', at: [150, 200] },
      { id: 'ytrekjerne', at: [210, 270] },
      { id: 'indrekjerne', at: [270, 290] },
      { id: 'havskorpe', at: [620, 205] },
      { id: 'kontinentalskorpe', at: [800, 200] },
      { id: 'litosfare', at: [600, 300], level: 'deeper' },
      { id: 'astenosfare', at: [700, 440], level: 'deeper' }
    ],
    draw: function (p) {
      const cx = 270, cy = 290, R = 250, Rm = 238, Rc = 136.6, Ri = 52;
      // tverrsnitt av kula
      let s = mantleDefs(p) +
        '<defs><radialGradient id="' + p + 'core" cx="50%" cy="50%" r="50%"><stop offset="0" style="stop-color:var(--c-core-2)"/><stop offset="1" style="stop-color:var(--c-core)"/></radialGradient>' +
        '<radialGradient id="' + p + 'mant" cx="50%" cy="50%" r="50%"><stop offset=".55" stop-color="#d9683c"/><stop offset="1" stop-color="#f0a46c"/></radialGradient>' +
        '<clipPath id="' + p + 'inset"><rect x="560" y="60" width="320" height="440" rx="14"/></clipPath></defs>';
      s += part('jordskorpe', '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="#8a6a45"/>' +
        '<path d="M' + (cx - 200) + ' ' + (cy - 150) + ' a250 250 0 0 1 120 -96 l20 12 -40 40z M' + (cx + 150) + ' ' + (cy - 200) + ' a250 250 0 0 1 80 110 l-14 4 -30 -60z M' + (cx - 240) + ' ' + (cy + 60) + ' a250 250 0 0 0 70 140 l12 -14 -40 -70z" fill="#4f8f3a" opacity=".85"/>');
      s += part('mantel', '<circle cx="' + cx + '" cy="' + cy + '" r="' + Rm + '" fill="url(#' + p + 'mant)"/>');
      s += part('ytrekjerne', '<circle cx="' + cx + '" cy="' + cy + '" r="' + Rc + '" fill="#f2b632"/>');
      s += part('indrekjerne', '<circle cx="' + cx + '" cy="' + cy + '" r="' + Ri + '" fill="url(#' + p + 'core)" stroke="#fff6c8" stroke-width="2"/>');
      // dybdeskala langs en radius
      s += '<g class="depth" aria-hidden="true"><line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + R) + '" y2="' + cy + '" stroke="#14203a" stroke-width="1.5" stroke-dasharray="4 3"/>' +
        [[cx + R, '0 km', -10, 0], [cx + Rc, '2900 km', -10, 0], [cx + Ri, '5100 km', -10, 14], [cx, '6370 km', 24, 0]].map(function (d) {
          return '<line x1="' + f(d[0]) + '" y1="' + (cy - 6) + '" x2="' + f(d[0]) + '" y2="' + (cy + 6) + '" stroke="#14203a" stroke-width="2"/><text class="dnum" x="' + f(d[0] + d[3]) + '" y="' + (cy + d[2]) + '">' + d[1] + '</text>';
        }).join('') + '</g>';
      // forstørrelse
      s += '<path d="M' + (cx + 180) + ' ' + (cy - 172) + ' L560 60 M' + (cx + 224) + ' ' + (cy - 112) + ' L560 500" stroke="var(--c-ink)" stroke-opacity=".45" stroke-width="1.5" stroke-dasharray="5 4" fill="none"/>' +
        '<circle cx="' + (cx + 202) + '" cy="' + (cy - 145) + '" r="26" fill="none" stroke="var(--c-ink)" stroke-width="2.5"/>';
      let ins = '<rect x="560" y="60" width="320" height="440" fill="url(#' + p + 'sky)"/>';
      ins += part('astenosfare', '<rect x="560" y="300" width="320" height="200" fill="#ef9d63"/>' +
        '<path d="M600 470 q60 -40 120 0 M760 470 q50 -40 100 0" stroke="#d9683c" stroke-width="3" fill="none" stroke-dasharray="6 6"/>');
      ins += part('litosfare', '<path d="M560 175 H720 L740 160 H880 V380 Q800 392 720 360 Q640 330 560 300 Z" fill="#c9714a"/>' +
        '<path d="M560 300 Q640 330 720 360 Q800 392 880 380" stroke="#14203a" stroke-width="2" stroke-dasharray="7 5" fill="none"/>');
      ins += '<rect x="560" y="105" width="165" height="50" fill="url(#' + p + 'sea)" opacity=".9"/>';
      ins += part('havskorpe', '<path d="M560 155 H720 V182 H560 Z" fill="var(--c-ocrust)"/>');
      ins += part('kontinentalskorpe', '<path d="M720 182 V140 Q730 110 760 112 L790 84 L815 108 L838 92 L880 112 V252 Q840 290 800 286 Q760 280 735 238 Z" fill="url(#' + p + 'strata)" stroke="#8a6a45" stroke-width="1.5"/>');
      ins += lab(578, 140, o('Hav', 'Ocean'), 'light-ish') + lab(574, 485, o('Mantel', 'Mantle'), '');
      s += '<g clip-path="url(#' + p + 'inset)">' + ins + '</g><rect x="560" y="60" width="320" height="440" rx="14" fill="none" stroke="var(--c-ink)" stroke-width="2"/>';
      s += '<text class="svg-note" x="720" y="530" text-anchor="middle">' + N.esc(N.t(o('De øverste ca. 400 km (forstørret)', 'The top ca. 400 km (magnified)'))) + '</text>';
      return s;
    }
  };

  /* ================= 2) PLATEGRENSER – TVERRSNITT ================= */
  const VB = '0 0 900 460';
  function stars(list) { return list.map(function (q) { return quake(q[0], q[1], q[2] || 1); }).join(''); }

  N.diagrams.spredning = {
    topic: 'jorda',
    title: o('Plater som beveger seg fra hverandre i havet (midthavsrygg)', 'Plates moving apart in the ocean (mid-ocean ridge)'),
    viewBox: VB,
    parts: [
      { id: 'grense_spredning', at: [450, 40] },
      { id: 'midthavsrygg', at: [330, 128] },
      { id: 'havskorpe', at: [120, 178] },
      { id: 'magma', at: [450, 300] },
      { id: 'astenosfare', at: [140, 400] },
      { id: 'jordskjelv', at: [520, 120], note: o('Ved midthavsryggene er jordskjelvene oftest små og skjer nær overflaten.', 'At mid-ocean ridges the earthquakes are usually small and shallow.') },
      { id: 'magnetstriper', at: [700, 170], level: 'deeper' }
    ],
    draw: function (p) {
      let s = mantleDefs(p) + '<rect width="900" height="460" fill="url(#' + p + 'sky)"/>';
      s += part('astenosfare', '<rect x="0" y="150" width="900" height="310" fill="url(#' + p + 'man)"/>' +
        '<path d="M450 440 C450 380 300 330 160 300 M450 440 C450 380 600 330 740 300" stroke="#b9451f" stroke-width="3" fill="none" stroke-dasharray="8 6"/>');
      s += '<rect x="0" y="40" width="900" height="110" fill="url(#' + p + 'sea)"/>';
      // litosfære (stiv mantel) som blir tykkere bort fra ryggen
      s += '<path d="M0 170 Q300 160 430 132 L450 132 L470 132 Q600 160 900 170 V250 Q700 240 520 170 L450 150 L380 170 Q200 240 0 250 Z" fill="#c9714a" opacity=".9"/>';
      s += part('havskorpe', '<path d="M0 150 Q300 140 425 112 L438 122 L450 108 L462 122 L475 112 Q600 140 900 150 V172 Q600 162 470 136 L450 130 L430 136 Q300 162 0 172 Z" fill="var(--c-ocrust)"/>');
      s += part('midthavsrygg', '<path d="M250 146 Q360 132 425 112 L438 122 L450 108 L462 122 L475 112 Q540 132 650 146" fill="none" stroke="#ffd166" stroke-width="5" stroke-linejoin="round"/>');
      s += part('magma', '<path d="M430 460 C420 380 425 240 440 150 Q450 128 460 150 C475 240 480 380 470 460 Z" fill="url(#' + p + 'mag)"/>');
      s += part('magnetstriper', [-1, 1].map(function (dir) {
        let b = '';
        [[20, '#14203a'], [45, '#f7f3e8'], [80, '#14203a'], [110, '#f7f3e8'], [160, '#14203a'], [205, '#f7f3e8'], [260, '#14203a'], [330, '#f7f3e8']].reduce(function (x0, st) {
          const x1 = st[0];
          b += '<path d="M' + f(450 + dir * x0) + ' 0 H' + f(450 + dir * x1) + '" stroke="' + st[1] + '" stroke-width="8" transform="translate(0 ' + 0 + ')"/>';
          return x1;
        }, 0);
        return '<g transform="translate(0 196)">' + b + '</g>';
      }).join('') + '<text class="svg-note" x="450" y="222" text-anchor="middle">N S N S</text>');
      s += part('grense_spredning', '<path d="M450 34 V100" stroke="#14203a" stroke-width="3" stroke-dasharray="6 4"/>');
      s += part('jordskjelv', stars([[508, 126, 0.8], [395, 126, 0.7]]));
      s += arrow(300, 92, -110) + arrow(600, 92, 110);
      s += lab(60, 80, o('Havplate', 'Oceanic plate'), 'light') + lab(760, 80, o('Havplate', 'Oceanic plate'), 'light');
      return s;
    }
  };

  N.diagrams.rift = {
    topic: 'jorda',
    title: o('Et kontinent som sprekker opp (riftdal)', 'A continent splitting apart (rift valley)'),
    viewBox: VB,
    parts: [
      { id: 'grense_rift', at: [450, 30] },
      { id: 'riftdal', at: [380, 150] },
      { id: 'kontinentalskorpe', at: [120, 200] },
      { id: 'vulkan', at: [490, 70] },
      { id: 'magma', at: [450, 330] },
      { id: 'jordskjelv', at: [560, 210] },
      { id: 'astenosfare', at: [160, 410] }
    ],
    draw: function (p) {
      let s = mantleDefs(p) + '<rect width="900" height="460" fill="url(#' + p + 'sky)"/>';
      s += part('astenosfare', '<rect x="0" y="270" width="900" height="190" fill="url(#' + p + 'man)"/>');
      s += part('kontinentalskorpe', '<path d="M0 110 H300 L330 150 L360 150 L380 180 H520 L540 150 L570 150 L600 110 H900 V270 Q700 268 560 300 Q450 330 340 300 Q200 268 0 270 Z" fill="url(#' + p + 'strata)" stroke="#8a6a45" stroke-width="1.5"/>' +
        '<path d="M0 110 H300 M600 110 H900" stroke="#4f8f3a" stroke-width="6"/>');
      s += part('riftdal', '<path d="M300 110 L330 150 L360 150 L380 180 H520 L540 150 L570 150 L600 110" fill="none" stroke="#ffd166" stroke-width="5" stroke-linejoin="round"/>' +
        '<path d="M330 150 L355 260 M380 180 L400 280 M520 180 L500 280 M570 150 L545 260" stroke="#5b3d23" stroke-width="2.5" stroke-dasharray="6 4"/>' +
        '<rect x="395" y="170" width="60" height="10" rx="5" fill="#2b78b4"/>');
      s += part('magma', '<path d="M420 460 C410 400 430 330 440 260 Q450 200 465 180 Q470 230 475 270 C490 340 500 400 490 460 Z" fill="url(#' + p + 'mag)"/>');
      s += part('vulkan', volcano(480, 182, 90, 70));
      s += part('jordskjelv', stars([[350, 210, 0.8], [545, 215, 0.9], [392, 250, 0.7]]));
      s += part('grense_rift', '<path d="M450 20 V48" stroke="#14203a" stroke-width="3" stroke-dasharray="6 4"/>');
      s += arrow(220, 70, -120) + arrow(680, 70, 120);
      s += lab(40, 60, o('Kontinentalplate', 'Continental plate'), '') + lab(680, 40, o('Kontinentalplate', 'Continental plate'), '');
      return s;
    }
  };

  N.diagrams.subduksjon = {
    topic: 'jorda',
    title: o('Havbunn mot kontinent (subduksjon)', 'Ocean floor against a continent (subduction)'),
    viewBox: VB,
    parts: [
      { id: 'grense_subduksjon', at: [470, 230] },
      { id: 'havskorpe', at: [160, 165] },
      { id: 'kontinentalskorpe', at: [800, 200] },
      { id: 'dyphavsgrop', at: [410, 110] },
      { id: 'vulkan', at: [640, 40] },
      { id: 'fjellkjede', at: [760, 60] },
      { id: 'magma', at: [640, 260] },
      { id: 'jordskjelv', at: [540, 320], note: o('Langs platen som synker, kommer jordskjelvene både grunt og dypt – helt ned til rundt 700 km. Her kommer de kraftigste jordskjelvene på Jorda.', 'Along the sinking plate, earthquakes happen both shallow and deep – down to about 700 km. The strongest earthquakes on Earth happen here.') },
      { id: 'astenosfare', at: [140, 400] }
    ],
    draw: function (p) {
      let s = mantleDefs(p) + '<rect width="900" height="460" fill="url(#' + p + 'sky)"/>';
      s += part('astenosfare', '<rect x="0" y="180" width="900" height="280" fill="url(#' + p + 'man)"/>');
      s += '<path d="M0 50 H440 L470 160 H0 Z" fill="url(#' + p + 'sea)"/>';
      // synkende havplate
      s += part('havskorpe', '<path d="M0 150 H400 Q440 152 460 172 L700 460 H630 L430 205 Q410 190 390 188 H0 Z" fill="var(--c-ocrust)"/>' +
        '<path d="M0 188 H390 Q410 190 430 205 L630 460 H560 L410 230 Q395 222 380 222 H0 Z" fill="#c9714a" opacity=".85"/>');
      s += part('dyphavsgrop', '<path d="M395 150 Q430 152 445 168 L455 160 Q440 120 470 115" fill="none" stroke="#ffd166" stroke-width="5"/>');
      s += part('kontinentalskorpe', '<path d="M470 115 Q520 100 560 92 L600 70 L640 82 L690 40 L730 72 L770 50 L820 80 L900 90 V300 Q800 290 720 300 Q640 290 560 230 Q500 190 470 172 Z" fill="url(#' + p + 'strata)" stroke="#8a6a45" stroke-width="1.5"/>');
      s += part('fjellkjede', '<path d="M600 70 L640 82 L690 40 L730 72 L770 50 L820 80" fill="none" stroke="#ffffff" stroke-width="5" stroke-linejoin="round"/><path d="M684 46 l6 -6 6 8z M764 56 l6 -6 7 8z" fill="#fff"/>');
      s += part('magma', '<path d="M600 330 C590 280 610 230 625 170 Q640 110 655 100 Q660 140 660 180 C670 240 690 290 660 330 Z" fill="url(#' + p + 'mag)"/><circle cx="615" cy="340" r="12" fill="#ff7a1a"/><circle cx="640" cy="352" r="8" fill="#ff7a1a"/>');
      s += part('vulkan', volcano(650, 100, 70, 52));
      s += part('jordskjelv', stars([[455, 190, 0.8], [505, 255, 0.9], [560, 320, 0.8], [610, 385, 0.7]]));
      s += part('grense_subduksjon', '<path d="M430 205 L630 460" stroke="#14203a" stroke-width="3" stroke-dasharray="7 5"/>');
      s += arrow(150, 108, 150) + arrow(840, 140, -90);
      s += lab(30, 78, o('Havplate', 'Oceanic plate'), 'light') + lab(720, 250, o('Kontinentalplate', 'Continental plate'), '');
      return s;
    }
  };

  N.diagrams.oybue = {
    topic: 'jorda',
    title: o('Havbunn mot havbunn (øybue)', 'Ocean floor against ocean floor (island arc)'),
    viewBox: VB,
    parts: [
      { id: 'grense_oybue', at: [470, 240] },
      { id: 'havskorpe', at: [160, 170] },
      { id: 'dyphavsgrop', at: [420, 210] },
      { id: 'oybue', at: [680, 40] },
      { id: 'magma', at: [650, 280] },
      { id: 'jordskjelv', at: [560, 330] },
      { id: 'astenosfare', at: [140, 400] }
    ],
    draw: function (p) {
      let s = mantleDefs(p) + '<rect width="900" height="460" fill="url(#' + p + 'sky)"/>';
      s += part('astenosfare', '<rect x="0" y="200" width="900" height="260" fill="url(#' + p + 'man)"/>');
      s += '<rect x="0" y="70" width="900" height="110" fill="url(#' + p + 'sea)"/>';
      s += part('havskorpe', '<path d="M0 170 H400 Q440 172 460 192 L700 460 H630 L430 225 Q410 210 390 208 H0 Z" fill="var(--c-ocrust)"/>' +
        '<path d="M0 208 H390 Q410 210 430 225 L630 460 H560 L410 250 Q395 242 380 242 H0 Z" fill="#c9714a" opacity=".85"/>' +
        '<path d="M470 168 H900 V196 H470 Z" fill="var(--c-ocrust)"/><path d="M480 196 H900 V250 Q760 246 640 240 Z" fill="#c9714a" opacity=".85"/>');
      s += part('dyphavsgrop', '<path d="M395 170 Q430 172 445 188 L456 180 Q445 170 470 168" fill="none" stroke="#ffd166" stroke-width="5"/>');
      s += part('magma', '<path d="M610 340 C600 290 620 240 640 190 Q655 150 665 140 Q670 180 668 210 C680 260 700 300 670 340 Z" fill="url(#' + p + 'mag)"/><circle cx="625" cy="352" r="11" fill="#ff7a1a"/>');
      s += part('oybue', volcano(660, 120, 110, 82, true) + volcano(780, 140, 80, 50, false) + volcano(560, 150, 60, 30, false) +
        '<path d="M0 70 H900" stroke="#ffffff" stroke-opacity=".6" stroke-width="2"/>');
      s += part('jordskjelv', stars([[455, 210, 0.8], [510, 275, 0.9], [565, 340, 0.8], [615, 400, 0.7]]));
      s += part('grense_oybue', '<path d="M430 225 L630 460" stroke="#14203a" stroke-width="3" stroke-dasharray="7 5"/>');
      s += arrow(150, 128, 150) + arrow(860, 165, -80);
      s += lab(30, 100, o('Havplate', 'Oceanic plate'), 'light') + lab(720, 230, o('Havplate', 'Oceanic plate'), 'light');
      return s;
    }
  };

  N.diagrams.kollisjon = {
    topic: 'jorda',
    title: o('Kontinent mot kontinent (kollisjon)', 'Continent against continent (collision)'),
    viewBox: VB,
    parts: [
      { id: 'grense_kollisjon', at: [470, 280] },
      { id: 'kontinentalskorpe', at: [110, 200] },
      { id: 'fjellkjede', at: [460, 40] },
      { id: 'foldning', at: [560, 150], level: 'deeper' },
      { id: 'jordskjelv', at: [330, 160], note: o('Ved kollisjoner kommer jordskjelvene i et bredt belte, for eksempel i Himalaya og Nepal.', 'In collisions the earthquakes happen in a wide belt, for example in the Himalayas and Nepal.') },
      { id: 'astenosfare', at: [140, 410] }
    ],
    draw: function (p) {
      let s = mantleDefs(p) + '<rect width="900" height="460" fill="url(#' + p + 'sky)"/>';
      s += part('astenosfare', '<rect x="0" y="300" width="900" height="160" fill="url(#' + p + 'man)"/>' +
        '<path d="M430 300 L470 300 L520 440 L470 440 Z" fill="var(--c-ocrust)" opacity=".8"/>');
      s += part('kontinentalskorpe', '<path d="M0 140 H260 Q330 130 360 110 L400 70 L440 40 L470 30 L505 45 L540 75 L580 110 Q620 130 680 140 H900 V280 Q760 282 640 300 Q560 360 470 380 Q380 360 300 300 Q160 282 0 280 Z" fill="url(#' + p + 'strata)" stroke="#8a6a45" stroke-width="1.5"/>' +
        '<path d="M0 140 H260 M680 140 H900" stroke="#4f8f3a" stroke-width="6"/>');
      s += part('foldning', '<g fill="none" stroke="#6b4a2a" stroke-width="3">' +
        [0, 22, 44, 66].map(function (dy) { return '<path d="M330 ' + (150 + dy) + ' q35 -40 70 0 t70 0 t70 0 t70 0"/>'; }).join('') + '</g>');
      s += part('fjellkjede', '<path d="M360 110 L400 70 L440 40 L470 30 L505 45 L540 75 L580 110" fill="none" stroke="#ffffff" stroke-width="6" stroke-linejoin="round"/><path d="M462 36 l8 -8 8 10z M432 46 l8 -7 7 9z" fill="#fff"/>');
      s += part('jordskjelv', stars([[340, 190, 0.8], [420, 240, 0.8], [520, 260, 0.9], [600, 200, 0.7], [470, 320, 0.7]]));
      s += part('grense_kollisjon', '<path d="M470 120 L470 380" stroke="#14203a" stroke-width="3" stroke-dasharray="7 5"/>');
      s += arrow(140, 110, 130) + arrow(770, 110, -130);
      s += lab(30, 260, o('Kontinentalplate', 'Continental plate'), '') + lab(700, 260, o('Kontinentalplate', 'Continental plate'), '');
      return s;
    }
  };

  N.diagrams.transform = {
    topic: 'jorda',
    title: o('Plater som glir forbi hverandre (transformforkastning)', 'Plates sliding past each other (transform fault)'),
    viewBox: VB,
    parts: [
      { id: 'grense_transform', at: [470, 60] },
      { id: 'forskyvning', at: [340, 250] },
      { id: 'jordskjelv', at: [520, 330], note: o('Platene hekter seg fast i hverandre. Når spenningen blir for stor, glipper de plutselig – og det blir et jordskjelv.', 'The plates get stuck. When the stress gets too big, they suddenly slip – and there is an earthquake.') }
    ],
    draw: function (p) {
      let s = mantleDefs(p) + '<rect width="900" height="460" fill="url(#' + p + 'sky)"/>';
      // to blokker sett ovenfra/skrått
      s += '<path d="M60 80 L440 80 L460 400 L80 400 Z" fill="#a8c98a"/><path d="M440 80 L840 80 L860 400 L460 400 Z" fill="#c4d9a4"/>' +
        '<path d="M80 400 L460 400 V440 H80 Z M460 400 L860 400 V440 H460 Z" fill="url(#' + p + 'strata)" stroke="#8a6a45"/>';
      // vei som er forskjøvet
      s += part('forskyvning', '<path d="M60 220 H448" stroke="#4b5563" stroke-width="22"/><path d="M60 220 H448" stroke="#fff" stroke-width="3" stroke-dasharray="14 10"/>' +
        '<path d="M452 290 H860" stroke="#4b5563" stroke-width="22"/><path d="M452 290 H860" stroke="#fff" stroke-width="3" stroke-dasharray="14 10"/>' +
        '<path d="M120 120 C200 150 300 160 446 150 M454 220 C600 230 700 250 840 300" stroke="#2b78b4" stroke-width="8" fill="none"/>');
      s += part('grense_transform', '<path d="M440 70 L462 412" stroke="#14203a" stroke-width="4" stroke-dasharray="10 6"/>');
      s += part('jordskjelv', quake(455, 330, 1.4) + '<g fill="none" stroke="#8a5a00" stroke-width="2" opacity=".7"><circle cx="455" cy="330" r="26"/><circle cx="455" cy="330" r="42"/></g>');
      s += '<path d="M250 370 V300 l-12 14 M250 300 l12 14" stroke="#14203a" stroke-width="4" fill="none" stroke-linecap="round"/>' +
        '<path d="M650 120 V190 l-12 -14 M650 190 l12 -14" stroke="#14203a" stroke-width="4" fill="none" stroke-linecap="round"/>';
      s += lab(90, 112, o('Plate A', 'Plate A'), '') + lab(740, 112, o('Plate B', 'Plate B'), '');
      return s;
    }
  };

  /* =============== 3) MANTELEN SOM MOTOR (ANIMERT) =============== */
  N.diagrams.konveksjon = {
    topic: 'jorda',
    animated: true,
    title: o('Mantelen i bevegelse (modell)', 'The moving mantle (model)'),
    viewBox: '0 0 900 520',
    parts: [
      { id: 'konveksjon', at: [250, 330] },
      { id: 'oppstromning', at: [450, 250] },
      { id: 'midthavsrygg', at: [450, 70] },
      { id: 'havskorpe', at: [620, 105] },
      { id: 'kontinentalskorpe', at: [150, 70] },
      { id: 'nedsynking', at: [790, 230] },
      { id: 'ytrekjerne', at: [450, 495] },
      { id: 'ryggskyv', at: [370, 140], level: 'deeper' },
      { id: 'platetrekk', at: [740, 160], level: 'deeper' }
    ],
    draw: function (p) {
      const anim = function (dur, to) { return '<animate attributeName="stroke-dashoffset" from="0" to="' + to + '" dur="' + dur + 's" repeatCount="indefinite"/>'; };
      const blob = function (path, dur, begin, col) {
        return '<circle r="7" fill="' + col + '" opacity=".9"><animateMotion dur="' + dur + 's" begin="' + begin + 's" repeatCount="indefinite" path="' + path + '"/></circle>';
      };
      const cellL = 'M450 450 C450 300 450 200 430 150 C330 140 200 140 90 160 C60 240 60 380 90 450 C200 470 350 470 450 450';
      const cellR = 'M450 450 C450 300 450 200 470 150 C570 140 700 140 770 170 C800 260 810 380 790 450 C700 470 550 470 450 450';
      let s = mantleDefs(p) +
        '<defs><linearGradient id="' + p + 'deep" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9935a"/><stop offset="1" stop-color="#c2410c"/></linearGradient>' +
        '<clipPath id="' + p + 'clipL"><path d="M0 108 H440 V136 H0 Z"/></clipPath><clipPath id="' + p + 'clipR"><path d="M460 108 H770 V136 H460 Z"/></clipPath>' +
        '<pattern id="' + p + 'stripes" width="48" height="30" patternUnits="userSpaceOnUse"><rect width="48" height="30" style="fill:var(--c-ocrust)"/><rect width="24" height="30" fill="#8a919c"/></pattern></defs>' +
        '<rect width="900" height="520" fill="url(#' + p + 'sky)"/>';
      s += '<rect x="0" y="130" width="900" height="350" fill="url(#' + p + 'deep)"/>';
      s += part('ytrekjerne', '<rect x="0" y="470" width="900" height="50" fill="#f2b632"/><path d="M0 470 H900" stroke="#fbe28a" stroke-width="4"/>' +
        '<g fill="#fbe28a" opacity=".8"><circle cx="150" cy="495" r="5"/><circle cx="450" cy="490" r="7"/><circle cx="700" cy="497" r="5"/></g>');
      s += part('konveksjon', '<g fill="none" stroke="#7c2d12" stroke-width="5" stroke-linecap="round" stroke-dasharray="14 16">' +
        '<path d="' + cellL + '">' + anim(3, -60) + '</path><path d="' + cellR + '">' + anim(3, -60) + '</path></g>' +
        blob(cellL, 9, 0, '#fff1d6') + blob(cellL, 9, -3, '#fff1d6') + blob(cellL, 9, -6, '#fff1d6') +
        blob(cellR, 9, 0, '#fff1d6') + blob(cellR, 9, -3, '#fff1d6') + blob(cellR, 9, -6, '#fff1d6'));
      s += part('oppstromning', '<path d="M425 450 C420 360 425 220 440 140 H460 C475 220 480 360 475 450 Z" fill="url(#' + p + 'mag)" opacity=".85"/>' +
        '<g fill="#fff3b0"><circle r="5"><animateMotion dur="4s" repeatCount="indefinite" path="M450 440 V150"/></circle><circle r="4"><animateMotion dur="4s" begin="-2s" repeatCount="indefinite" path="M445 440 V150"/></circle></g>');
      // hav
      s += '<rect x="0" y="40" width="900" height="70" fill="url(#' + p + 'sea)"/>';
      // plater: striper som beveger seg utover fra ryggen (sømløs bevegelse)
      s += part('havskorpe', '<g clip-path="url(#' + p + 'clipL)"><rect x="-48" y="108" width="540" height="28" fill="url(#' + p + 'stripes)"><animateTransform attributeName="transform" type="translate" from="0 0" to="-48 0" dur="6s" repeatCount="indefinite"/></rect></g>' +
        '<g clip-path="url(#' + p + 'clipR)"><rect x="410" y="108" width="420" height="28" fill="url(#' + p + 'stripes)"><animateTransform attributeName="transform" type="translate" from="0 0" to="48 0" dur="6s" repeatCount="indefinite"/></rect></g>');
      s += part('nedsynking', '<path d="M770 108 Q800 110 820 135 L880 420 L835 430 L780 150 Q770 138 760 136 Z" fill="var(--c-ocrust)"/>' +
        '<path d="M808 200 l20 90" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/><path d="M820 290 l8 4 4 -9" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round"/>');
      s += '<path d="M770 108 Q800 70 900 60 V40 H860 Q820 40 790 80 Z" fill="url(#' + p + 'strata)"/>';
      s += part('midthavsrygg', '<path d="M420 108 L440 92 L450 100 L460 92 L480 108 Z" fill="#59606b" stroke="#ffd166" stroke-width="3"/>');
      // kontinent som flyter med platen
      s += part('kontinentalskorpe', '<g><path d="M60 108 V70 Q90 40 130 46 L170 30 L210 50 Q240 60 260 80 L280 108 Z" fill="url(#' + p + 'strata)" stroke="#8a6a45" stroke-width="1.5"/>' +
        '<animateTransform attributeName="transform" type="translate" values="40 0; -40 0" dur="16s" repeatCount="indefinite"/>' +
        '<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur="16s" repeatCount="indefinite"/></g>');
      s += part('ryggskyv', arrow(400, 160, -90, '#ffd166') + arrow(500, 160, 90, '#ffd166'));
      s += part('platetrekk', '<path d="M730 190 l50 120" stroke="#ffd166" stroke-width="10" stroke-linecap="round"/><path d="M760 300 l22 22 6 -32z" fill="#ffd166" stroke="#14203a"/>');
      s += arrow(300, 92, -100) + arrow(600, 92, 100);
      s += lab(20, 210, o('Mantel', 'Mantle'), 'light') + lab(20, 505, o('Ytre kjerne', 'Outer core'), '');
      return s;
    }
  };

  /* ================== 4) BERGARTENES KRETSLØP ================== */
  N.diagrams.kretslop = {
    topic: 'jorda',
    title: o('Bergartenes kretsløp', 'The rock cycle'),
    viewBox: '0 0 900 600',
    parts: [
      { id: 'magma', at: [205, 470] },
      { id: 'storkning', at: [90, 400] },
      { id: 'magmatisk', at: [110, 230] },
      { id: 'forvitring', at: [250, 70] },
      { id: 'sediment', at: [510, 60] },
      { id: 'herding', at: [868, 160] },
      { id: 'sedimentar', at: [820, 240] },
      { id: 'omdanning', at: [868, 410] },
      { id: 'metamorf', at: [720, 470] },
      { id: 'smelting', at: [545, 540] }
    ],
    draw: function (p) {
      let s = mantleDefs(p) + '<defs><marker id="' + p + 'ar" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" style="fill:var(--c-ink)"/></marker></defs>';
      const arc = function (d, dash) { return '<path d="' + d + '" fill="none" style="stroke:var(--c-ink)" stroke-width="4" marker-end="url(#' + p + 'ar)"' + (dash ? ' stroke-dasharray="8 7"' : '') + '/>'; };
      // prosesspiler (klikkbare)
      s += part('storkning', arc('M215 430 C150 400 130 350 160 300') + '<rect x="30" y="345" width="120" height="34" rx="17" fill="var(--surface, #fff)" stroke="#d1300f" stroke-width="2"/>' + lab(90, 367, o('Størkning', 'Cooling'), 'mid'));
      s += part('forvitring', arc('M190 175 C240 90 330 70 400 75') + '<rect x="170" y="88" width="190" height="34" rx="17" fill="var(--surface, #fff)" stroke="#2b78b4" stroke-width="2"/>' + lab(265, 110, o('Forvitring og erosjon', 'Weathering and erosion'), 'mid'));
      s += part('herding', arc('M610 80 C700 85 760 120 770 175') + '<rect x="640" y="102" width="210" height="34" rx="17" fill="var(--surface, #fff)" stroke="#8a6a45" stroke-width="2"/>' + lab(745, 124, o('Avsetning og herding', 'Deposition and hardening'), 'mid'));
      s += part('omdanning', arc('M790 320 C800 370 790 410 760 430') + '<rect x="690" y="356" width="190" height="34" rx="17" fill="var(--surface, #fff)" stroke="#8a3fb0" stroke-width="2"/>' + lab(785, 378, o('Trykk og varme', 'Pressure and heat'), 'mid'));
      s += part('smelting', arc('M650 520 C560 560 400 560 300 515') + '<rect x="400" y="522" width="120" height="34" rx="17" fill="var(--surface, #fff)" stroke="#d1300f" stroke-width="2"/>' + lab(460, 544, o('Smelting', 'Melting'), 'mid'));
      s += arc('M210 270 C330 330 520 420 650 450', true);
      s += '<text class="svg-note" x="430" y="330" text-anchor="middle">' + N.esc(N.t(o('snarvei: trykk og varme', 'shortcut: pressure and heat'))) + '</text>';
      // bergartene
      s += part('magma', '<ellipse cx="230" cy="500" rx="95" ry="48" fill="url(#' + p + 'mag)"/>' + lab(230, 506, o('Magma', 'Magma'), 'mid light'));
      const rr = rng(7); let speck = '';
      for (let i = 0; i < 40; i++) speck += '<circle cx="' + f(60 + rr() * 120) + '" cy="' + f(185 + rr() * 70) + '" r="' + f(2 + rr() * 4) + '" fill="' + ['#1f2937', '#f1c3b5', '#e5e7eb'][i % 3] + '"/>';
      s += part('magmatisk', '<path d="M50 180 L190 175 L200 260 L45 265 Z" fill="#d8b4a6" stroke="#6b4a3a" stroke-width="2"/>' + speck + lab(125, 290, o('Magmatisk bergart', 'Igneous rock'), 'mid'));
      s += part('sediment', '<path d="M420 100 Q500 40 600 100 Z" fill="#e8c88a" stroke="#a9834c" stroke-width="2"/>' +
        '<g fill="#a9834c">' + [440, 470, 500, 530, 560, 585].map(function (x, i) { return '<circle cx="' + x + '" cy="' + (92 - (i % 2) * 8) + '" r="3"/>'; }).join('') + '</g>' + lab(510, 130, o('Sediment (sand, leire, grus)', 'Sediment (sand, clay, gravel)'), 'mid'));
      s += part('sedimentar', '<rect x="700" y="190" width="160" height="90" fill="url(#' + p + 'strata)" stroke="#8a6a45" stroke-width="2"/>' +
        '<g fill="none" stroke="#8a6a45" stroke-width="2"><path d="M700 208 H860 M700 226 H860 M700 244 H860 M700 262 H860"/></g>' +
        '<path d="M760 236 a8 8 0 1 1 8 8 a4 4 0 1 1 -4 -4" fill="none" stroke="#5b3d23" stroke-width="2"/>' + lab(780, 305, o('Sedimentær bergart', 'Sedimentary rock'), 'mid'));
      s += part('metamorf', '<rect x="610" y="440" width="170" height="80" fill="#cfc6d9" stroke="#5b4a6a" stroke-width="2"/>' +
        '<g fill="none" stroke="#5b4a6a" stroke-width="5">' + [455, 475, 495].map(function (y) { return '<path d="M610 ' + y + ' q20 -14 42 0 t42 0 t42 0 t42 0"/>'; }).join('') + '</g>' + lab(695, 540, o('Metamorf bergart', 'Metamorphic rock'), 'mid'));
      return s;
    }
  };

  /* ===================== 5) GRANITT UNDER LUPEN ===================== */
  N.diagrams.granitt = {
    topic: 'jorda',
    title: o('Granitt under lupen: mineraler i en bergart', 'Granite under the magnifier: minerals in a rock'),
    viewBox: '0 0 900 520',
    parts: [
      { id: 'feltspat', at: [150, 120] },
      { id: 'kvarts', at: [330, 90] },
      { id: 'glimmer', at: [420, 380] },
      { id: 'atomer', at: [740, 110], level: 'deeper' }
    ],
    draw: function (p) {
      const cx = 280, cy = 260, R = 220, r = rng(42);
      let fel = '', kv = '', gl = '';
      for (let i = 0; i < 60; i++) {
        const x = cx - R + r() * 2 * R, y = cy - R + r() * 2 * R, w = 20 + r() * 34, h = 14 + r() * 26, a = r() * 180;
        fel += '<rect x="' + f(x) + '" y="' + f(y) + '" width="' + f(w) + '" height="' + f(h) + '" rx="3" transform="rotate(' + f(a) + ' ' + f(x) + ' ' + f(y) + ')" fill="' + (i % 3 ? '#f2b8a2' : '#fbe9e1') + '" stroke="#c98a73" stroke-width="1"/>';
      }
      for (let i = 0; i < 40; i++) {
        const x = cx - R + r() * 2 * R, y = cy - R + r() * 2 * R, k = 10 + r() * 16;
        let d = '';
        for (let j = 0; j < 6; j++) { const a = j * Math.PI / 3 + r() * 0.5; d += (j ? 'L' : 'M') + f(x + k * Math.cos(a) * (0.7 + r() * 0.5)) + ' ' + f(y + k * Math.sin(a) * (0.7 + r() * 0.5)); }
        kv += '<path d="' + d + 'Z" fill="#c7ccd4" fill-opacity=".9" stroke="#8b939e" stroke-width="1"/>';
      }
      for (let i = 0; i < 26; i++) {
        const x = cx - R + r() * 2 * R, y = cy - R + r() * 2 * R, k = 5 + r() * 8;
        let d = '';
        for (let j = 0; j < 6; j++) { const a = j * Math.PI / 3; d += (j ? 'L' : 'M') + f(x + k * Math.cos(a)) + ' ' + f(y + k * 0.7 * Math.sin(a)); }
        gl += '<path d="' + d + 'Z" fill="#1f2328" stroke="#56606b" stroke-width="1"/>';
      }
      let s = '<defs><clipPath id="' + p + 'lens"><circle cx="' + cx + '" cy="' + cy + '" r="' + R + '"/></clipPath></defs>';
      s += '<g clip-path="url(#' + p + 'lens)">' + part('feltspat', '<rect x="' + (cx - R) + '" y="' + (cy - R) + '" width="' + 2 * R + '" height="' + 2 * R + '" fill="#e9a58c"/>' + fel) +
        part('kvarts', kv) + part('glimmer', gl) + '</g>';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#3b4252" stroke-width="14"/><path d="M' + (cx + 150) + ' ' + (cy + 160) + ' l70 70" stroke="#3b4252" stroke-width="26" stroke-linecap="round"/>';
      // innsiden av kvarts: atomer
      let at = '<rect x="600" y="70" width="270" height="260" rx="14" fill="var(--slide)" stroke="var(--c-ink)" stroke-width="2"/>';
      for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
        const x = 640 + i * 62, y = 110 + j * 58;
        at += '<line x1="' + x + '" y1="' + y + '" x2="' + (x + 31) + '" y2="' + (y + 29) + '" stroke="#8b939e" stroke-width="3"/>';
        at += '<circle cx="' + (x + 31) + '" cy="' + (y + 29) + '" r="7" fill="#d1300f"/><circle cx="' + x + '" cy="' + y + '" r="12" fill="#1f4fc4"/>';
      }
      s += part('atomer', at + lab(735, 350, o('Inni kvarts: silisium (blå) og oksygen (rød)', 'Inside quartz: silicon (blue) and oxygen (red)'), 'mid small'));
      s += '<path d="M440 150 L600 120" stroke="var(--c-ink)" stroke-opacity=".5" stroke-width="2" stroke-dasharray="5 4"/>';
      return s;
    }
  };

  /* ================= 6) WEGENERS BEVIS PÅ PANGEA ================= */
  N.diagrams.gondwana = {
    topic: 'jorda',
    title: o('Bevisene for kontinentaldrift, tegnet på Pangea', 'The evidence for continental drift, drawn on Pangaea'),
    viewBox: '240 22 600 420',
    parts: [
      { id: 'kystlinjer', at: [455, 240] },
      { id: 'mesosaurus', at: [528, 352] },
      { id: 'glossopteris', at: [660, 345] },
      { id: 'lystrosaurus', at: [612, 270] },
      { id: 'isspor', at: [700, 395] },
      { id: 'fjellkjede_bevis', at: [455, 80] }
    ],
    draw: function (p) {
      const K = N.geoKit, G = N.geo, q = K.rots(250);
      const zones = (N.topics.jorda.zones || []);
      let s = '<rect x="0" y="0" width="1000" height="500" style="fill:var(--c-sea)"/>';
      const cols = { na: '#e8c9a0', sa: '#d9c08a', gr: '#e3d3b5', eu: '#e8c9a0', af: '#e2c486', ma: '#d9c08a', in: '#e2c486', an: '#dfe7ee', au: '#d9c08a' };
      Object.keys(G.cont).forEach(function (k) {
        if (k === 'sa' || k === 'af') return;
        s += '<path d="' + K.ringsPath(G.cont[k], q[k], false) + '" fill="' + cols[k] + '" stroke="#8a6a45" stroke-width=".8"/>';
      });
      s += part('kystlinjer', '<path d="' + K.ringsPath(G.cont.sa, q.sa, false) + '" fill="' + cols.sa + '" stroke="#c42b4f" stroke-width="2.2"/>' +
        '<path d="' + K.ringsPath(G.cont.af, q.af, false) + '" fill="' + cols.af + '" stroke="#c42b4f" stroke-width="2.2"/>');
      s += K.zonesSvg(zones, q, { part: true });
      return s;
    }
  };

  /* ================ 7) HVORDAN VET GEOLOGENE DET? ================ */
  N.diagrams.geolog = {
    topic: 'jorda',
    title: o('Slik finner geologer ut av ting', 'How geologists find things out'),
    viewBox: '0 0 900 520',
    parts: [
      { id: 'feltarbeid', at: [200, 250] },
      { id: 'lagdeling', at: [690, 200] },
      { id: 'fossil', at: [610, 330] },
      { id: 'datering', at: [100, 420] },
      { id: 'seismograf', at: [430, 300] },
      { id: 'boring', at: [380, 110] },
      { id: 'satellitt', at: [130, 60] }
    ],
    draw: function (p) {
      let s = mantleDefs(p) + '<rect width="900" height="520" fill="url(#' + p + 'sky)"/>';
      s += '<path d="M0 360 Q200 340 420 350 L560 330 V520 H0 Z" fill="#9cc47c"/>';
      // klippe med lag
      const cols = ['#d6b37c', '#b8875a', '#e2c99a', '#9f7a55', '#cfa874', '#8f6a48'];
      let layers = '';
      cols.forEach(function (c, i) { layers += '<path d="M540 ' + (120 + i * 60) + ' L900 ' + (110 + i * 60) + ' V' + (170 + i * 60) + ' L540 ' + (180 + i * 60) + ' Z" fill="' + c + '"/>'; });
      s += part('lagdeling', '<path d="M540 120 L900 110 V520 H520 Z" fill="#b8875a"/>' + layers +
        '<text class="svg-note" x="860" y="150" text-anchor="end">' + N.esc(N.t(o('yngst', 'youngest'))) + '</text><text class="svg-note" x="860" y="505" text-anchor="end">' + N.esc(N.t(o('eldst', 'oldest'))) + '</text>');
      s += part('fossil', '<g transform="translate(640 330)"><path d="M0 0 a10 10 0 1 1 10 10 a16 16 0 1 1 -16 -16 a22 22 0 1 1 22 22" fill="none" stroke="#4b3621" stroke-width="3.5"/></g>');
      // geolog med hammer
      s += part('feltarbeid', '<g transform="translate(250 300)"><circle cx="0" cy="-70" r="16" fill="#f3c9a8"/><path d="M-16 -82 q16 -18 32 0z" fill="#e98a15"/>' +
        '<path d="M-18 -52 h36 l6 60 h-48z" fill="#1f4fc4"/><path d="M-12 8 l-6 52 M12 8 l6 52" stroke="#14203a" stroke-width="9" stroke-linecap="round"/>' +
        '<path d="M18 -40 l40 -20" stroke="#f3c9a8" stroke-width="8" stroke-linecap="round"/><path d="M58 -60 l14 -30" stroke="#6b4a2a" stroke-width="5"/><rect x="62" y="-98" width="22" height="10" rx="2" fill="#4b5563" transform="rotate(24 72 -93)"/>' +
        '<rect x="-46" y="-40" width="26" height="32" rx="3" fill="#fff" stroke="#14203a" stroke-width="2"/></g>');
      // borerigg
      s += part('boring', '<path d="M360 350 L380 160 L400 350" fill="none" stroke="#4b5563" stroke-width="6"/><path d="M366 290 H394 M372 230 H388" stroke="#4b5563" stroke-width="4"/>' +
        '<path d="M380 350 V500" stroke="#4b5563" stroke-width="4" stroke-dasharray="8 5"/><rect x="372" y="470" width="16" height="30" fill="#b8875a" stroke="#4b5563"/>');
      // seismograf
      s += part('seismograf', '<rect x="420" y="320" width="110" height="60" rx="6" fill="#ffffff" stroke="#14203a" stroke-width="2"/>' +
        '<path d="M428 352 h18 l6 -16 l8 30 l8 -36 l8 40 l8 -24 l6 10 h30" fill="none" stroke="#c42b4f" stroke-width="2.5"/>');
      // lab / datering
      s += part('datering', '<g transform="translate(70 400)"><rect x="-10" y="60" width="110" height="12" rx="4" fill="#4b5563"/><path d="M40 60 V20 l20 -30" stroke="#14203a" stroke-width="10" stroke-linecap="round"/>' +
        '<rect x="48" y="-26" width="18" height="34" rx="4" fill="#1f4fc4" transform="rotate(30 57 -9)"/><rect x="10" y="44" width="70" height="8" fill="#94a3b8"/><circle cx="96" cy="40" r="10" fill="#ffd23f" stroke="#8a5a00"/></g>');
      // satellitt
      s += part('satellitt', '<g transform="translate(140 80) rotate(-20)"><rect x="-14" y="-10" width="28" height="20" rx="3" fill="#94a3b8" stroke="#14203a" stroke-width="2"/><rect x="-60" y="-8" width="40" height="16" fill="#1f4fc4" stroke="#14203a"/><rect x="20" y="-8" width="40" height="16" fill="#1f4fc4" stroke="#14203a"/></g>' +
        '<path d="M150 100 L230 300" stroke="#1f4fc4" stroke-width="2" stroke-dasharray="6 6"/>');
      return s;
    }
  };

  /* ============== STEG-FIGUR: SLIK BLE JORDA TIL ============== */
  N.figures.jordablirtil = {
    viewBox: '0 0 1000 240',
    draw: function (p) {
      const cx = function (i) { return 100 + i * 200; };
      let s = '<defs><radialGradient id="' + p + 'hot"><stop offset="0" stop-color="#ffe08a"/><stop offset=".6" stop-color="#ff7a1a"/><stop offset="1" stop-color="#b8260b"/></radialGradient>' +
        '<radialGradient id="' + p + 'sun"><stop offset="0" stop-color="#fff6c8"/><stop offset="1" stop-color="#f2b632"/></radialGradient></defs>';
      s += '<rect width="1000" height="240" rx="18" fill="#0b1324"/>';
      const r = rng(3);
      let dust = ''; for (let i = 0; i < 70; i++) dust += '<circle cx="' + f(cx(0) - 80 + r() * 160) + '" cy="' + f(40 + r() * 150) + '" r="' + f(0.8 + r() * 2.4) + '" fill="#c7b9a0" opacity=".8"/>';
      s += '<g data-st="1"><circle cx="' + cx(0) + '" cy="115" r="22" fill="url(#' + p + 'sun)"/>' + dust + '</g>';
      let rocks = ''; for (let i = 0; i < 12; i++) { const x = cx(1) - 70 + r() * 140, y = 50 + r() * 130, k = 5 + r() * 12; rocks += '<ellipse cx="' + f(x) + '" cy="' + f(y) + '" rx="' + f(k) + '" ry="' + f(k * 0.75) + '" fill="#8b7a66" stroke="#5a4a3a"/>'; }
      s += '<g data-st="2">' + rocks + '<path d="M' + (cx(1) - 20) + ' 120 l-30 -10 M' + (cx(1) + 20) + ' 110 l30 10" stroke="#ffd166" stroke-width="3"/></g>';
      s += '<g data-st="3"><circle cx="' + cx(2) + '" cy="120" r="70" fill="url(#' + p + 'hot)"/><circle cx="' + cx(2) + '" cy="120" r="28" fill="#9ca3af" opacity=".85"/>' +
        '<path d="M' + (cx(2) - 50) + ' 70 l20 20 M' + (cx(2) + 50) + ' 70 l-20 20 M' + (cx(2) - 50) + ' 170 l20 -20 M' + (cx(2) + 50) + ' 170 l-20 -20" stroke="#e5e7eb" stroke-width="3"/></g>';
      s += '<g data-st="4"><circle cx="' + cx(3) + '" cy="120" r="70" fill="#5a4636"/><path d="M' + (cx(3) - 60) + ' 100 q30 -20 60 0 q30 20 50 -6 v40 q-50 20 -110 6z" fill="#2b78b4" opacity=".85"/>' +
        '<path d="M' + (cx(3) - 10) + ' 52 l10 -14 l10 14z" fill="#e2401f"/><circle cx="' + (cx(3) + 6) + '" cy="30" r="7" fill="#b8bec7"/></g>';
      s += '<g data-st="5"><circle cx="' + cx(4) + '" cy="120" r="70" fill="#2b78b4"/><path d="M' + (cx(4) - 40) + ' 70 q20 -14 40 0 q10 20 -10 30 q-30 6 -30 -30z M' + (cx(4) + 10) + ' 120 q30 -10 40 10 q-6 40 -30 40 q-14 -20 -10 -50z" fill="#4f8f3a"/>' +
        '<path d="M' + cx(4) + ' 120 L' + (cx(4) + 70) + ' 120 A70 70 0 0 0 ' + cx(4) + ' 50 Z" fill="#e9935a"/><path d="M' + cx(4) + ' 120 L' + (cx(4) + 38) + ' 120 A38 38 0 0 0 ' + cx(4) + ' 82 Z" fill="#f2b632"/><path d="M' + cx(4) + ' 120 L' + (cx(4) + 14) + ' 120 A14 14 0 0 0 ' + cx(4) + ' 106 Z" fill="#fbe28a"/></g>';
      [1, 2, 3, 4, 5].forEach(function (n, i) { s += '<text x="' + cx(i) + '" y="225" text-anchor="middle" fill="#e7edf8" font-family="var(--f-mono)" font-size="16" font-weight="700">' + n + '</text>'; });
      return s;
    }
  };
})();
