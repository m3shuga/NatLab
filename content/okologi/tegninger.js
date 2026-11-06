/* =====================================================================
   Økologi – TEGNINGENE
   ---------------------------------------------------------------------
   1) Ikoner av arter og faktorer (brukes i næringsnettet og scenene)
   2) To klikkbare økosystem-scener: skog og hav
   3) Næringsnettene som tegninger (brukes i quiz med «klikk på …»)
   4) Små figurer til kortene på temasiden
   Hver klikkbar del ligger i <g data-part="id">, og id-en må finnes i arter.js.
   ===================================================================== */
(function () {
  const N = window.NatLab;
  const I = (N.ecoIcons = N.ecoIcons || {});
  const f = (n) => Math.round(n * 10) / 10;

  /* ======================= 1) IKONER =======================
     Hvert ikon er tegnet rundt (0,0) og er omtrent 80 × 80 stort. */
  I.gran = '<rect x="-4" y="20" width="8" height="14" rx="2" fill="#7a5230"/><path d="M0,-36 L15,-14 L8,-14 L21,4 L12,4 L26,23 L-26,23 L-12,4 L-21,4 L-8,-14 L-15,-14Z" fill="#2f7d43" stroke="#1d5a2d" stroke-width="2" stroke-linejoin="round"/><path d="M0,-30 L6,-20 M-8,-6 L0,2 L8,-6 M-12,12 L0,19 L12,12" stroke="#4fa35f" stroke-width="2" fill="none"/>';
  I.bjork = '<path d="M-3,34 L-2,-2 L2,-2 L3,34Z" fill="#f2efe6" stroke="#8a8478" stroke-width="1.5"/><path d="M-3,8 h3 M0,18 h3 M-3,26 h3" stroke="#2b2b2b" stroke-width="2"/><circle cx="-12" cy="-12" r="14" fill="#7cb342"/><circle cx="10" cy="-16" r="15" fill="#8bc34a"/><circle cx="0" cy="-28" r="12" fill="#9ccc65"/><circle cx="14" cy="-2" r="10" fill="#7cb342"/><circle cx="-16" cy="2" r="9" fill="#8bc34a"/>';
  I.blaabaer = '<path d="M0,30 C-2,10 -6,0 -16,-10 M0,30 C2,8 8,-4 18,-12 M0,30 C0,10 0,-8 0,-22" stroke="#7a5a2f" stroke-width="2.5" fill="none"/>' +
    [[-18, -12, -30], [-8, -2, 20], [16, -14, 35], [6, -4, -25], [-2, -24, 10], [12, 4, 30], [-14, 6, -20]].map(function (l) { return '<ellipse cx="' + l[0] + '" cy="' + l[1] + '" rx="8" ry="4.5" fill="#4f9a3f" transform="rotate(' + l[2] + ' ' + l[0] + ' ' + l[1] + ')"/>'; }).join('') +
    [[-10, 14], [4, 18], [14, 10], [-20, 2], [20, -2], [-4, 6]].map(function (b) { return '<circle cx="' + b[0] + '" cy="' + b[1] + '" r="5" fill="#33408f"/><circle cx="' + (b[0] - 1.5) + '" cy="' + (b[1] - 1.5) + '" r="1.4" fill="#9aa8e6"/>'; }).join('');
  I.gress = [[-22, 30, -30, -20], [-12, 30, -14, -32], [-2, 30, 2, -36], [8, 30, 16, -28], [18, 30, 30, -18], [-6, 30, -26, -6], [12, 30, 28, -2]].map(function (g) {
    return '<path d="M' + g[0] + ',' + g[1] + ' Q' + f((g[0] + g[2]) / 2 - 4) + ',' + f((g[1] + g[3]) / 2) + ' ' + g[2] + ',' + g[3] + '" stroke="#5aa13c" stroke-width="4" fill="none" stroke-linecap="round"/>';
  }).join('') + '<circle cx="-14" cy="-30" r="4" fill="#f2c94c"/><circle cx="10" cy="-30" r="4" fill="#e57399"/>';
  I.larve = (function () {
    let s = '';
    const pts = [[-26, 8], [-17, 2], [-8, -2], [1, -2], [10, 2], [19, 6]];
    pts.forEach(function (p, i) { s += '<line x1="' + p[0] + '" y1="' + (p[1] + 6) + '" x2="' + p[0] + '" y2="' + (p[1] + 11) + '" stroke="#3d6b22" stroke-width="2.5"/>'; });
    pts.forEach(function (p) { s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="7.5" fill="#8bc34a" stroke="#5a8f2a" stroke-width="1.5"/>'; });
    s += '<circle cx="28" cy="2" r="8.5" fill="#6aa832" stroke="#4a7d1f" stroke-width="1.5"/><circle cx="31" cy="0" r="1.8" fill="#1b1b1b"/><path d="M26,-6 l-2,-7 M31,-6 l2,-7" stroke="#3d6b22" stroke-width="2" stroke-linecap="round"/>';
    return '<path d="M-36,22 Q0,10 36,22" stroke="#6aa045" stroke-width="3" fill="none"/>' + s;
  })();
  function legs(xs, y0, y1, w, col) { return xs.map(function (x) { return '<rect x="' + (x - w / 2) + '" y="' + y0 + '" width="' + w + '" height="' + (y1 - y0) + '" rx="' + (w / 2) + '" fill="' + col + '"/>'; }).join(''); }
  I.elg = legs([-16, -9, 9, 16], 2, 32, 4.5, '#3f2a19') +
    '<ellipse cx="-2" cy="-2" rx="21" ry="11" fill="#5b3d26"/><ellipse cx="10" cy="-8" rx="11" ry="10" fill="#5b3d26"/>' +
    '<path d="M16,-12 L24,-14 L36,-6 Q40,-2 36,2 L28,2 L20,-2Z" fill="#5b3d26"/><ellipse cx="36" cy="-1" rx="5" ry="4" fill="#4a3120"/><path d="M26,2 q2,7 -1,10" stroke="#4a3120" stroke-width="3" fill="none"/>' +
    '<circle cx="28" cy="-8" r="1.6" fill="#111"/><path d="M22,-14 l-4,-6 4,1Z" fill="#4a3120"/>' +
    '<path d="M24,-16 C14,-24 12,-34 18,-36 C18,-30 22,-30 22,-34 C24,-30 26,-30 26,-35 C28,-31 30,-31 31,-35 C34,-28 32,-20 26,-16Z" fill="#d9c3a0" stroke="#a88d63" stroke-width="1.2"/>';
  I.raadyr = legs([-14, -8, 9, 15], 0, 30, 3, '#7a4426') +
    '<ellipse cx="0" cy="-4" rx="18" ry="9" fill="#b5673a"/><ellipse cx="-16" cy="-6" rx="5" ry="5" fill="#f3ead9"/>' +
    '<path d="M12,-8 L20,-22 L26,-22 L20,-6Z" fill="#b5673a"/><ellipse cx="25" cy="-22" rx="8" ry="5" fill="#b5673a" transform="rotate(15 25 -22)"/><circle cx="32" cy="-19" r="2.2" fill="#222"/>' +
    '<ellipse cx="20" cy="-30" rx="3" ry="6" fill="#9c5530" transform="rotate(-25 20 -30)"/><circle cx="26" cy="-23" r="1.4" fill="#111"/>' +
    '<path d="M24,-28 l-1,-8 m1,4 l3,-3 M28,-28 l1,-8" stroke="#6b4a2f" stroke-width="2" stroke-linecap="round"/>';
  I.hare = '<ellipse cx="-4" cy="10" rx="20" ry="15" fill="#f4f1ea" stroke="#b9b2a6" stroke-width="1.5"/><ellipse cx="-24" cy="6" rx="5" ry="5" fill="#fff" stroke="#b9b2a6"/>' +
    '<ellipse cx="14" cy="-6" rx="11" ry="9" fill="#f4f1ea" stroke="#b9b2a6" stroke-width="1.5"/>' +
    '<ellipse cx="8" cy="-26" rx="4" ry="13" fill="#f4f1ea" stroke="#b9b2a6" stroke-width="1.5" transform="rotate(-12 8 -26)"/><ellipse cx="16" cy="-27" rx="4" ry="13" fill="#f4f1ea" stroke="#b9b2a6" stroke-width="1.5" transform="rotate(8 16 -27)"/>' +
    '<path d="M5,-37 a4,4 0 0 1 6,-1 M14,-38 a4,4 0 0 1 6,1" stroke="#222" stroke-width="3" fill="none"/><circle cx="19" cy="-8" r="2" fill="#222"/><circle cx="24" cy="-3" r="1.6" fill="#c98b8b"/>' +
    '<ellipse cx="8" cy="22" rx="9" ry="4" fill="#ece7dd" stroke="#b9b2a6"/>';
  I.skogmus = '<path d="M-14,10 C-30,12 -36,0 -40,-8" stroke="#8a6f55" stroke-width="2.5" fill="none"/><ellipse cx="0" cy="8" rx="16" ry="11" fill="#9a7a5c"/><ellipse cx="2" cy="12" rx="11" ry="6" fill="#e8dccb"/>' +
    '<path d="M10,0 Q26,2 30,8 Q22,14 12,12Z" fill="#9a7a5c"/><circle cx="12" cy="-4" r="7" fill="#b89474" stroke="#8a6f55"/><circle cx="12" cy="-4" r="3.5" fill="#e6b8b8"/><circle cx="21" cy="4" r="2.2" fill="#111"/><circle cx="30" cy="8" r="1.6" fill="#c97b7b"/>' +
    '<path d="M-6,18 l-2,5 M8,18 l2,5" stroke="#7a5f45" stroke-width="2.5" stroke-linecap="round"/>';
  I.ekorn = '<path d="M-6,24 C-30,30 -36,4 -26,-12 C-18,-26 -4,-24 -8,-12 C-12,-2 -22,0 -16,12 Z" fill="#b5522b"/><path d="M-26,-10 C-20,-20 -10,-20 -10,-12" stroke="#d9733f" stroke-width="3" fill="none"/>' +
    '<ellipse cx="4" cy="10" rx="11" ry="15" fill="#c2602f"/><ellipse cx="7" cy="14" rx="6" ry="9" fill="#f3e6d3"/>' +
    '<circle cx="10" cy="-10" r="9" fill="#c2602f"/><path d="M6,-17 l-2,-10 6,6Z M13,-18 l2,-10 3,8Z" fill="#a8471f"/><circle cx="14" cy="-11" r="2" fill="#111"/><circle cx="19" cy="-7" r="1.4" fill="#5a2a12"/>' +
    '<ellipse cx="16" cy="6" rx="5" ry="8" fill="#8a5a2b" stroke="#6b4320"/><path d="M12,2 h8 M12,6 h8 M12,10 h8" stroke="#6b4320" stroke-width="1.2"/><path d="M0,24 h8 M6,24 h8" stroke="#a8471f" stroke-width="3" stroke-linecap="round"/>';
  function bird(o) {
    return '<path d="' + o.tail + '" fill="' + o.tailCol + '"/>' +
      '<ellipse cx="0" cy="4" rx="' + o.rx + '" ry="' + o.ry + '" fill="' + o.body + '"/>' +
      (o.belly ? '<ellipse cx="4" cy="10" rx="' + (o.rx * 0.7) + '" ry="' + (o.ry * 0.62) + '" fill="' + o.belly + '"/>' : '') +
      '<ellipse cx="-4" cy="2" rx="' + (o.rx * 0.75) + '" ry="' + (o.ry * 0.6) + '" fill="' + o.wing + '" transform="rotate(-12 -4 2)"/>' +
      '<circle cx="' + o.hx + '" cy="' + o.hy + '" r="' + o.hr + '" fill="' + o.head + '"/>' + (o.extra || '') +
      '<path d="' + o.beak + '" fill="' + o.beakCol + '"/><circle cx="' + o.ex + '" cy="' + o.ey + '" r="' + (o.er || 2) + '" fill="' + (o.eyeCol || '#111') + '"/>' +
      '<path d="M-2,' + (4 + o.ry) + ' l-2,7 M6,' + (4 + o.ry - 1) + ' l1,7" stroke="' + (o.legCol || '#5a5a5a') + '" stroke-width="2.5" stroke-linecap="round"/>';
  }
  I.kjottmeis = bird({ tail: 'M-14,6 L-32,14 L-28,2Z', tailCol: '#55606b', rx: 16, ry: 13, body: '#f2c94c', belly: '#f6d860', wing: '#6f8a4a', hx: 12, hy: -10, hr: 10, head: '#1f1f1f',
    extra: '<ellipse cx="13" cy="-7" rx="5.5" ry="4" fill="#fff"/><path d="M8,4 L10,18" stroke="#1f1f1f" stroke-width="4" stroke-linecap="round"/>', beak: 'M21,-12 L28,-10 L21,-8Z', beakCol: '#2b2b2b', ex: 16, ey: -13 });
  I.kattugle = '<ellipse cx="0" cy="6" rx="22" ry="26" fill="#8b6b4a"/><ellipse cx="0" cy="12" rx="15" ry="17" fill="#b08a62"/>' +
    '<path d="M-8,4 l3,4 M4,10 l3,4 M-6,18 l3,4 M6,20 l3,4" stroke="#6e5236" stroke-width="2"/>' +
    '<circle cx="0" cy="-12" r="17" fill="#8b6b4a"/><ellipse cx="-7" cy="-12" rx="8" ry="8.5" fill="#d8c3a5"/><ellipse cx="7" cy="-12" rx="8" ry="8.5" fill="#d8c3a5"/>' +
    '<circle cx="-7" cy="-12" r="4.5" fill="#1a1a1a"/><circle cx="7" cy="-12" r="4.5" fill="#1a1a1a"/><circle cx="-6" cy="-13.5" r="1.3" fill="#fff"/><circle cx="8" cy="-13.5" r="1.3" fill="#fff"/>' +
    '<path d="M-2,-6 L0,0 L2,-6Z" fill="#e2b04a"/><path d="M-6,30 l-2,5 M6,30 l2,5" stroke="#c9a84a" stroke-width="2.5" stroke-linecap="round"/>';
  I.honsehauk = bird({ tail: 'M-14,8 L-36,14 L-34,0Z', tailCol: '#5e6a76', rx: 18, ry: 13, body: '#6e7a86', belly: '#eef0f2', wing: '#596572', hx: 14, hy: -10, hr: 10, head: '#5e6a76',
    extra: '<path d="M0,6 h8 M-2,11 h10 M0,16 h8" stroke="#8796a5" stroke-width="2"/><path d="M8,-14 h12" stroke="#f4f4f4" stroke-width="2.5"/>', beak: 'M22,-12 Q30,-10 26,-4 L22,-6Z', beakCol: '#2b2b2b', ex: 17, ey: -11, er: 2.6, eyeCol: '#e08a1e', legCol: '#e6b632' });
  I.lunde = bird({ tail: 'M-14,6 L-28,10 L-26,2Z', tailCol: '#1e1e1e', rx: 16, ry: 14, body: '#1e1e1e', belly: '#fafafa', wing: '#2b2b2b', hx: 10, hy: -12, hr: 11, head: '#1e1e1e',
    extra: '<ellipse cx="12" cy="-10" rx="7" ry="6" fill="#e9ecef"/>', beak: 'M20,-18 Q34,-12 20,-2Z', beakCol: '#f07a1a', ex: 13, ey: -13, legCol: '#f07a1a' }) + '<path d="M22,-14 Q26,-11 22,-6" stroke="#f2c94c" stroke-width="2" fill="none"/><path d="M20,-17 L21,-3" stroke="#3a5a8a" stroke-width="2"/>';
  I.havorn = '<path d="M-6,0 C-26,-12 -36,-6 -40,6 C-28,2 -18,6 -8,8Z" fill="#5a4330"/><path d="M6,0 C26,-12 36,-6 40,6 C28,2 18,6 8,8Z" fill="#6b4f35"/>' +
    '<ellipse cx="0" cy="6" rx="10" ry="16" fill="#6b4f35"/><path d="M-6,20 L0,34 L6,20Z" fill="#fafafa" stroke="#ddd"/><circle cx="0" cy="-12" r="8" fill="#c9b08a"/>' +
    '<path d="M2,-12 Q12,-10 8,-2 L4,-6Z" fill="#f2c234"/><circle cx="3" cy="-14" r="1.8" fill="#111"/>';
  function fish(o) {
    return '<path d="M' + o.tx + ',0 L' + (o.tx - 14) + ',-12 L' + (o.tx - 10) + ',0 L' + (o.tx - 14) + ',12Z" fill="' + o.fin + '"/>' +
      (o.dorsal || '') + '<ellipse cx="0" cy="0" rx="' + o.rx + '" ry="' + o.ry + '" fill="' + o.back + '"/>' +
      '<path d="M' + (-o.rx) + ',0 Q0,' + (o.ry * 1.05) + ' ' + o.rx + ',0 Q0,' + (o.ry * 0.2) + ' ' + (-o.rx) + ',0Z" fill="' + o.belly + '"/>' + (o.extra || '') +
      '<circle cx="' + (o.rx - 8) + '" cy="-2" r="2.6" fill="#fff"/><circle cx="' + (o.rx - 7.5) + '" cy="-2" r="1.5" fill="#111"/><path d="M' + (o.rx - 15) + ',-6 q3,6 0,10" stroke="' + o.fin + '" stroke-width="1.5" fill="none"/>';
  }
  I.sild = fish({ tx: -22, rx: 26, ry: 7.5, back: '#3c6e8f', belly: '#dfe9ef', fin: '#7f9db0' });
  I.torsk = fish({ tx: -26, rx: 30, ry: 11, back: '#8a7a4a', belly: '#e9e0c8', fin: '#7a6a3f',
    dorsal: '<path d="M-14,-9 q4,-9 9,0 M-2,-10 q4,-10 9,0 M10,-9 q3,-8 7,0" fill="#7a6a3f"/>',
    extra: '<circle cx="-10" cy="-3" r="1.4" fill="#5a4e2c"/><circle cx="2" cy="-5" r="1.4" fill="#5a4e2c"/><circle cx="12" cy="-3" r="1.4" fill="#5a4e2c"/><path d="M-24,0 H22" stroke="#f3eedd" stroke-width="1.2"/><path d="M28,6 l2,6" stroke="#7a6a3f" stroke-width="2"/>' });
  I.spekkhogger = '<path d="M-36,2 L-46,-8 L-42,2 L-46,12Z" fill="#141414"/><path d="M-6,-12 L0,-34 L8,-12Z" fill="#141414"/>' +
    '<ellipse cx="0" cy="0" rx="38" ry="14" fill="#141414"/><path d="M-30,6 Q0,18 34,4 Q10,10 -30,6Z" fill="#f4f4f4"/>' +
    '<ellipse cx="22" cy="-5" rx="6" ry="3" fill="#f4f4f4" transform="rotate(-10 22 -5)"/><ellipse cx="-12" cy="-6" rx="8" ry="2.5" fill="#9aa0a6" opacity=".7"/><path d="M6,10 l-6,12 10,-8Z" fill="#141414"/>';
  I.steinkobbe = '<path d="M-34,10 L-44,2 L-44,18Z" fill="#7d8389"/><ellipse cx="-4" cy="8" rx="32" ry="13" fill="#9aa1a8"/><ellipse cx="22" cy="-2" rx="13" ry="11" fill="#9aa1a8"/>' +
    [[-20, 4], [-10, 12], [0, 2], [10, 10], [-26, 12], [16, 4]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.2" fill="#6b7177"/>'; }).join('') +
    '<circle cx="27" cy="-5" r="2.3" fill="#111"/><circle cx="33" cy="0" r="1.8" fill="#333"/><path d="M30,2 l8,-2 M30,3 l8,2" stroke="#444" stroke-width="1"/><path d="M4,18 l-6,8 10,-4Z" fill="#7d8389"/>';
  I.taskekrabbe = '<path d="M-26,2 l-12,-8 M-24,8 l-14,0 M-22,14 l-12,8 M26,2 l12,-8 M24,8 l14,0 M22,14 l12,8" stroke="#a5532a" stroke-width="3.5" stroke-linecap="round"/>' +
    '<ellipse cx="0" cy="6" rx="27" ry="17" fill="#c06a3a"/><path d="M-24,0 Q0,-14 24,0" stroke="#d98b5b" stroke-width="2" fill="none"/>' +
    '<path d="M-16,-6 L-26,-20 M16,-6 L26,-20" stroke="#a5532a" stroke-width="4"/><ellipse cx="-28" cy="-24" rx="8" ry="6" fill="#c06a3a"/><ellipse cx="28" cy="-24" rx="8" ry="6" fill="#c06a3a"/>' +
    '<path d="M-34,-26 l-4,-3 M34,-26 l4,-3" stroke="#1b1b1b" stroke-width="3" stroke-linecap="round"/><circle cx="-5" cy="-8" r="2" fill="#111"/><circle cx="5" cy="-8" r="2" fill="#111"/>';
  I.krakebolle = (function () {
    let s = '';
    for (let i = 0; i < 28; i++) { const a = (i / 28) * Math.PI * 2; s += '<line x1="' + f(Math.cos(a) * 15) + '" y1="' + f(Math.sin(a) * 15) + '" x2="' + f(Math.cos(a) * 30) + '" y2="' + f(Math.sin(a) * 30) + '" stroke="#5b8a3a" stroke-width="2" stroke-linecap="round"/>'; }
    return s + '<circle r="18" fill="#7d5a9a"/><circle r="18" fill="none" stroke="#5e3f7a" stroke-width="2" stroke-dasharray="3 4"/><circle cx="-5" cy="-6" r="4" fill="#9a7bb8"/>';
  })();
  I.raudate = '<path d="M-6,-14 C-30,-30 -36,-26 -42,-34 M6,-14 C30,-30 36,-26 42,-34" stroke="#c8402b" stroke-width="1.8" fill="none"/>' +
    '<path d="M0,-18 C12,-18 14,0 8,14 L2,30 L-2,30 L-8,14 C-14,0 -12,-18 0,-18Z" fill="#e0532f"/><path d="M-9,-4 h18 M-8,4 h16 M-6,11 h12" stroke="#b03a22" stroke-width="1.5"/>' +
    '<circle cx="0" cy="-12" r="2.5" fill="#1b1b1b"/><path d="M-2,30 l-4,8 M2,30 l4,8" stroke="#c8402b" stroke-width="1.8"/>' +
    '<ellipse cx="0" cy="-2" rx="4" ry="6" fill="#f2c234" opacity=".85"/>';
  I.krill = '<path d="M-30,8 Q-10,-14 22,-6 Q32,-2 30,6 Q10,4 -6,16 Z" fill="#f08a8a" stroke="#d0605f" stroke-width="1.5"/>' +
    '<path d="M-18,4 l-2,12 M-10,0 l-1,13 M-2,-2 l0,12 M6,-3 l1,11 M14,-3 l2,10" stroke="#d0605f" stroke-width="1.6"/>' +
    '<path d="M-30,8 l-10,-4 l2,10Z" fill="#e57373"/><circle cx="24" cy="-2" r="3" fill="#111"/><path d="M28,-4 C36,-12 40,-16 44,-24 M28,-2 C38,-6 42,-8 46,-12" stroke="#d0605f" stroke-width="1.3" fill="none"/>';
  I.planteplankton = '<circle cx="-14" cy="-10" r="11" fill="#7fc97f" stroke="#3f8f4f" stroke-width="2"/><circle cx="-14" cy="-10" r="5" fill="none" stroke="#3f8f4f" stroke-width="1.5"/>' +
    '<rect x="2" y="-26" width="26" height="12" rx="6" fill="#a5d6a7" stroke="#3f8f4f" stroke-width="2"/><rect x="2" y="-12" width="26" height="12" rx="6" fill="#a5d6a7" stroke="#3f8f4f" stroke-width="2"/>' +
    '<path d="M-26,18 l8,-12 8,12Z" fill="#c5e1a5" stroke="#3f8f4f" stroke-width="2"/><circle cx="12" cy="18" r="9" fill="#66bb6a" stroke="#2e7d32" stroke-width="2"/>' +
    [[-6, 6], [20, 4], [-28, -2], [26, 22], [0, 24]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3" fill="#43a047"/>'; }).join('');
  I.tare = '<path d="M0,34 C-2,20 2,8 0,-2" stroke="#6b4a1f" stroke-width="5" fill="none"/><path d="M-6,34 h12" stroke="#5a3d1a" stroke-width="5" stroke-linecap="round"/>' +
    '<path d="M0,-2 C-20,-10 -26,-26 -22,-40 C-12,-30 -6,-18 0,-2Z" fill="#9a7a2b"/><path d="M0,-2 C8,-16 6,-30 12,-42 C20,-30 16,-14 0,-2Z" fill="#8a6a22"/><path d="M0,-2 C16,-6 26,-18 34,-24 C30,-10 18,-2 0,-2Z" fill="#a8873a"/><path d="M0,-2 C-6,-12 -2,-26 -6,-38" stroke="#6b5216" stroke-width="1.2" fill="none"/>';
  I.sopp = '<path d="M-36,30 Q0,20 36,30 L36,36 L-36,36Z" fill="#8a6a45"/><rect x="-5" y="2" width="10" height="26" rx="4" fill="#f3e8d2" stroke="#c9b48c"/>' +
    '<path d="M-26,4 Q-24,-26 0,-26 Q24,-26 26,4 Z" fill="#9b5a2e"/><path d="M-26,4 Q0,10 26,4" stroke="#7a4420" stroke-width="2" fill="#e8d6b4"/>' +
    '<ellipse cx="-10" cy="-14" rx="5" ry="3" fill="#b8784a"/><rect x="16" y="14" width="6" height="14" rx="3" fill="#f3e8d2"/><path d="M10,16 Q19,2 28,16Z" fill="#a8693a"/>';
  I.meitemark = '<path d="M-34,10 C-20,-14 -6,24 8,0 C18,-16 28,-4 34,-10" stroke="#d98b8b" stroke-width="10" fill="none" stroke-linecap="round"/>' +
    '<path d="M-34,10 C-20,-14 -6,24 8,0 C18,-16 28,-4 34,-10" stroke="#c46f6f" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="1.5 5"/><circle cx="-4" cy="6" r="5.5" fill="#e3a2a2"/>';
  I.bakterier = '<rect x="-30" y="-14" width="28" height="12" rx="6" fill="#7fb8b8" stroke="#3f8585" stroke-width="2" transform="rotate(-20 -16 -8)"/>' +
    '<rect x="2" y="-22" width="26" height="12" rx="6" fill="#9ccfcf" stroke="#3f8585" stroke-width="2" transform="rotate(25 15 -16)"/>' +
    '<rect x="-12" y="8" width="30" height="12" rx="6" fill="#7fb8b8" stroke="#3f8585" stroke-width="2"/><circle cx="24" cy="14" r="5" fill="#b3dddd" stroke="#3f8585" stroke-width="2"/>' +
    '<path d="M18,14 q6,-8 14,-4" stroke="#3f8585" stroke-width="1.5" fill="none"/>';
  function canine(col, light, tailTip, ears, extra) {
    return legs([-16, -10, 8, 14], 2, 28, 4.5, col === '#d9662b' ? '#3b2a20' : col) +
      '<path d="M-20,-4 C-34,-8 -42,4 -38,14 C-32,8 -26,4 -18,4Z" fill="' + col + '"/>' + (tailTip ? '<path d="M-38,14 C-40,10 -40,6 -36,4 C-34,8 -34,11 -38,14Z" fill="' + tailTip + '"/>' : '') +
      '<ellipse cx="-2" cy="-2" rx="20" ry="9.5" fill="' + col + '"/><ellipse cx="2" cy="4" rx="14" ry="4.5" fill="' + light + '"/>' +
      '<path d="M12,-6 L20,-16 L34,-12 L40,-8 L34,-4 L24,-2Z" fill="' + col + '"/><path d="M26,-6 L40,-8 L34,-3 L26,-2Z" fill="' + light + '"/>' + ears +
      '<circle cx="27" cy="-11" r="1.8" fill="#111"/><circle cx="40" cy="-8" r="1.8" fill="#111"/>' + (extra || '');
  }
  I.rodrev = canine('#d9662b', '#f6efe6', '#fafafa', '<path d="M18,-14 l2,-12 6,10Z M24,-14 l5,-11 3,12Z" fill="#c2541f"/>');
  I.ulv = canine('#8c8c86', '#e3e1da', '#3a3a38', '<path d="M18,-14 l2,-11 6,9Z M24,-14 l4,-10 3,11Z" fill="#6f6f6a"/>', '<path d="M-6,-10 q6,-4 14,0" stroke="#6f6f6a" stroke-width="3" fill="none"/>');
  I.gaupe = legs([-16, -10, 8, 14], 2, 28, 5, '#b5884f') +
    '<path d="M-20,-4 l-10,-2 2,8Z" fill="#c89a5e"/><path d="M-30,-6 l-3,-1 2,8 2,-1Z" fill="#1d1d1d"/>' +
    '<ellipse cx="-2" cy="-2" rx="20" ry="10" fill="#c89a5e"/><ellipse cx="2" cy="4" rx="13" ry="4.5" fill="#efe2cc"/>' +
    [[-14, -4], [-6, -7], [2, -5], [-10, 2], [8, -1], [-18, 1]].map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2" fill="#7a5530"/>'; }).join('') +
    '<circle cx="24" cy="-10" r="11" fill="#c89a5e"/><path d="M16,-4 q-4,6 2,10 M32,-4 q4,6 -2,10" stroke="#efe2cc" stroke-width="3" fill="none"/>' +
    '<path d="M17,-18 l1,-10 5,8Z M27,-19 l4,-9 2,10Z" fill="#b5884f"/><path d="M18,-28 v-6 M31,-28 v-6" stroke="#1d1d1d" stroke-width="2"/>' +
    '<circle cx="21" cy="-12" r="1.8" fill="#2a2a2a"/><circle cx="28" cy="-12" r="1.8" fill="#2a2a2a"/><path d="M23,-7 h3" stroke="#6b4a2f" stroke-width="2"/>';
  /* Faktorer (det ikke-levende) */
  I.sollys = (function () { let r = ''; for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; r += '<line x1="' + f(Math.cos(a) * 22) + '" y1="' + f(Math.sin(a) * 22) + '" x2="' + f(Math.cos(a) * 34) + '" y2="' + f(Math.sin(a) * 34) + '" stroke="#f2b632" stroke-width="4" stroke-linecap="round"/>'; } return r + '<circle r="18" fill="#f9d548" stroke="#f2b632" stroke-width="3"/>'; })();
  I.temperatur = '<rect x="-7" y="-34" width="14" height="48" rx="7" fill="#f4f6f8" stroke="#6b7a88" stroke-width="2.5"/><circle cx="0" cy="22" r="12" fill="#e5533d" stroke="#6b7a88" stroke-width="2.5"/><rect x="-3" y="-14" width="6" height="32" fill="#e5533d"/>' +
    '<path d="M7,-24 h6 M7,-16 h4 M7,-8 h6 M7,0 h4" stroke="#6b7a88" stroke-width="2"/>';
  I.nedbor = '<path d="M-26,0 a12,12 0 0 1 4,-22 a16,16 0 0 1 30,-4 a12,12 0 0 1 18,22Z" fill="#e4ebf2" stroke="#8a9bad" stroke-width="2.5"/>' +
    [[-16, 10], [-4, 14], [8, 10], [20, 14], [-10, 24], [14, 26]].map(function (p) { return '<path d="M' + p[0] + ',' + p[1] + ' l-3,8" stroke="#3b82c4" stroke-width="3" stroke-linecap="round"/>'; }).join('');
  I.jord = '<rect x="-36" y="-20" width="72" height="14" fill="#7a5a3a"/><rect x="-36" y="-6" width="72" height="14" fill="#5f432a"/><rect x="-36" y="8" width="72" height="16" fill="#9a8a78"/>' +
    '<path d="M-36,-20 q12,-8 24,0 t24,0 t24,0" fill="#5aa13c"/><circle cx="-20" cy="16" r="5" fill="#b5a99a"/><circle cx="10" cy="14" r="6" fill="#8a7d70"/><path d="M-6,-20 q2,10 -4,22 M14,-20 q-2,8 4,16" stroke="#c9a77a" stroke-width="1.8" fill="none"/>';
  I.luft = '<path d="M-34,-12 H8 a8,8 0 1 0 -8,-8 M-34,2 H22 a8,8 0 1 1 -8,8 M-34,16 H0" stroke="#7aa6c9" stroke-width="4" fill="none" stroke-linecap="round"/>' +
    '<text x="12" y="-14" font-size="11" font-weight="700" fill="#4a7aa0" font-family="sans-serif">O₂</text><text x="-6" y="30" font-size="11" font-weight="700" fill="#4a7aa0" font-family="sans-serif">CO₂</text>';
  I.saltholdighet = '<path d="M0,-34 C10,-18 22,-6 22,8 a22,22 0 0 1 -44,0 C-22,-6 -10,-18 0,-34Z" fill="#8ec5ea" stroke="#3b82c4" stroke-width="2.5"/>' +
    '<rect x="-12" y="0" width="10" height="10" fill="#fff" stroke="#9aa8b5" transform="rotate(12 -7 5)"/><rect x="2" y="6" width="9" height="9" fill="#fff" stroke="#9aa8b5" transform="rotate(-10 6 10)"/><rect x="-4" y="14" width="7" height="7" fill="#fff" stroke="#9aa8b5"/>';
  I.havstrom = '<path d="M-34,-12 C-14,-24 6,0 30,-12" stroke="#1f7fb8" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M24,-20 L34,-12 L22,-6" stroke="#1f7fb8" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M-34,12 C-14,0 6,24 30,12" stroke="#4aa3d6" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M24,4 L34,12 L22,18" stroke="#4aa3d6" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  I.naeringssalter = [[-20, -14], [0, -22], [18, -10], [-8, 2], [14, 10], [-22, 16], [4, 22]].map(function (p, i) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + (i % 2 ? 6 : 5) + '" fill="' + (i % 3 ? '#c9a227' : '#7b9e3a') + '" stroke="#5a5a2a" stroke-width="1.2"/>'; }).join('') +
    '<text x="-25" y="-11" font-size="7" font-weight="700" fill="#fff" font-family="sans-serif">N</text><text x="-4" y="-19" font-size="7" font-weight="700" fill="#fff" font-family="sans-serif">P</text>';

  N.ecoIcon = function (id, x, y, s) {
    return '<g transform="translate(' + f(x || 0) + ' ' + f(y || 0) + ') scale(' + (s || 1) + ')">' + (I[id] || '<circle r="20" fill="#ccc"/>') + '</g>';
  };

  /* ======================= 2) SCENER ======================= */
  function sceneDefs(p, sea) {
    return '<defs><linearGradient id="' + p + 'sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--c-sky1)"/><stop offset="1" style="stop-color:var(--c-sky2)"/></linearGradient>' +
      '<linearGradient id="' + p + 'sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--c-sea1)"/><stop offset="1" style="stop-color:var(--c-sea2)"/></linearGradient></defs>';
  }
  const part = function (id, inner) { return '<g data-part="' + id + '">' + inner + '</g>'; };

  N.diagrams.skog = {
    topic: 'okologi',
    title: { nb: 'Økosystemet skog', en: 'The forest ecosystem' },
    viewBox: '0 0 900 560',
    parts: [
      { id: 'sollys', at: [118, 52] }, { id: 'temperatur', at: [842, 56] }, { id: 'nedbor', at: [356, 44] }, { id: 'luft', at: [590, 58] }, { id: 'jord', at: [150, 520] },
      { id: 'gran', at: [210, 230] }, { id: 'blaabaer', at: [372, 420] }, { id: 'elg', at: [540, 330] }, { id: 'ekorn', at: [716, 210] },
      { id: 'kjottmeis', at: [282, 186] }, { id: 'rodrev', at: [784, 398] }, { id: 'sopp', at: [626, 444] }, { id: 'meitemark', at: [440, 512] }
    ],
    draw: function (p) {
      return sceneDefs(p) + '<rect width="900" height="460" fill="url(#' + p + 'sky)"/>' +
        '<path d="M0,330 C120,300 240,320 360,300 C480,280 620,310 760,290 C820,282 870,290 900,296 L900,470 L0,470Z" fill="var(--c-hill)"/>' +
        part('sollys', N.ecoIcon('sollys', 90, 80, 1.4)) +
        part('nedbor', N.ecoIcon('nedbor', 330, 80, 1.5)) +
        part('luft', N.ecoIcon('luft', 560, 92, 1.4)) +
        part('temperatur', N.ecoIcon('temperatur', 820, 100, 1.3)) +
        part('jord', '<rect x="0" y="462" width="900" height="98" fill="#6b4a2f"/><rect x="0" y="500" width="900" height="60" fill="#5a3d26"/><path d="M0,462 C150,452 300,470 450,460 C600,450 750,468 900,458 L900,474 L0,474Z" fill="#4f8f3a"/>' +
          [[80, 520, 7], [260, 540, 9], [520, 530, 6], [700, 515, 8], [840, 545, 6]].map(function (c) { return '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="#8a7d70"/>'; }).join('') +
          '<path d="M200,470 q6,30 -10,50 M230,470 q-4,26 10,44 M690,470 q8,24 -6,40" stroke="#c9a77a" stroke-width="2.5" fill="none"/>') +
        part('gran', N.ecoIcon('gran', 200, 330, 4.2) + N.ecoIcon('gran', 700, 330, 4.6) + N.ecoIcon('gran', 90, 380, 2.6)) +
        part('kjottmeis', N.ecoIcon('kjottmeis', 270, 220, 1.1)) +
        part('ekorn', N.ecoIcon('ekorn', 720, 240, 1.15)) +
        part('blaabaer', N.ecoIcon('blaabaer', 360, 440, 1.3) + N.ecoIcon('blaabaer', 420, 448, 1.0)) +
        part('elg', N.ecoIcon('elg', 520, 390, 2.6)) +
        part('rodrev', N.ecoIcon('rodrev', 790, 440, 1.3)) +
        part('sopp', N.ecoIcon('sopp', 620, 466, 1.1)) +
        part('meitemark', N.ecoIcon('meitemark', 420, 520, 0.9));
    }
  };

  N.diagrams.hav = {
    topic: 'okologi',
    title: { nb: 'Økosystemet Norskehavet', en: 'The Norwegian Sea ecosystem' },
    viewBox: '0 0 900 560',
    parts: [
      { id: 'sollys', at: [100, 30], note: { nb: 'I havet blir lyset svakere jo dypere du kommer. Planteplankton kan bare drive fotosyntese i de øverste vannlagene, der det er nok lys.', en: 'In the sea the light gets weaker the deeper you go. Phytoplankton can only carry out photosynthesis in the upper water layers, where there is enough light.' } },
      { id: 'temperatur', at: [840, 40] }, { id: 'saltholdighet', at: [840, 190] }, { id: 'havstrom', at: [600, 270] }, { id: 'naeringssalter', at: [560, 492] },
      { id: 'planteplankton', at: [300, 140] }, { id: 'raudate', at: [452, 214] }, { id: 'sild', at: [210, 270] }, { id: 'torsk', at: [400, 380] },
      { id: 'spekkhogger', at: [700, 140] }, { id: 'lunde', at: [470, 50] }, { id: 'tare', at: [92, 400] }, { id: 'krakebolle', at: [210, 500] }
    ],
    draw: function (p) {
      let school = '';
      [[150, 260], [190, 248], [230, 262], [170, 284], [215, 290], [255, 276], [140, 300], [195, 312], [250, 304]].forEach(function (q) { school += N.ecoIcon('sild', q[0], q[1], 0.75); });
      let rau = '';
      [[430, 200], [470, 190], [450, 230], [490, 222], [410, 228]].forEach(function (q) { rau += N.ecoIcon('raudate', q[0], q[1], 0.42); });
      let plank = '';
      [[260, 140], [330, 132], [380, 150], [200, 150], [430, 138], [600, 148], [660, 132]].forEach(function (q, i) { plank += N.ecoIcon('planteplankton', q[0], q[1], i % 2 ? 0.5 : 0.62); });
      return sceneDefs(p, true) + '<rect width="900" height="112" fill="url(#' + p + 'sky)"/>' +
        '<rect y="110" width="900" height="450" fill="url(#' + p + 'sea)"/>' +
        '<path d="M0,112 q30,-8 60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0" stroke="#ffffff" stroke-opacity=".6" stroke-width="3" fill="none"/>' +
        part('sollys', N.ecoIcon('sollys', 90, 56, 1.15) + '<path d="M120,120 L60,360 M150,120 L120,330 M180,120 L180,300" stroke="#fff6c8" stroke-opacity=".35" stroke-width="10"/>') +
        part('temperatur', N.ecoIcon('temperatur', 840, 72, 1.0)) +
        part('saltholdighet', N.ecoIcon('saltholdighet', 840, 220, 1.0)) +
        part('havstrom', '<g opacity=".9">' + N.ecoIcon('havstrom', 600, 300, 1.6) + '</g>') +
        part('naeringssalter', '<path d="M300,560 C330,500 380,470 440,480 C520,492 600,470 660,500 C700,520 720,540 740,560Z" fill="none"/>' + N.ecoIcon('naeringssalter', 520, 480, 1.0) + N.ecoIcon('naeringssalter', 600, 500, 0.8)) +
        '<path d="M0,500 C80,470 160,500 260,490 C360,480 420,520 520,530 C640,540 760,500 900,520 L900,560 L0,560Z" fill="var(--c-seabed)"/>' +
        part('tare', N.ecoIcon('tare', 60, 440, 2.0) + N.ecoIcon('tare', 120, 450, 1.6) + N.ecoIcon('tare', 170, 470, 1.2)) +
        part('krakebolle', N.ecoIcon('krakebolle', 230, 510, 0.7) + N.ecoIcon('krakebolle', 270, 520, 0.55)) +
        part('planteplankton', plank) +
        part('raudate', rau) +
        part('sild', school) +
        part('torsk', N.ecoIcon('torsk', 380, 400, 1.6)) +
        part('spekkhogger', N.ecoIcon('spekkhogger', 700, 190, 2.0)) +
        part('lunde', N.ecoIcon('lunde', 470, 86, 0.95));
    }
  };

  /* ======================= 3) NÆRINGSNETT SOM TEGNING ======================= */
  N.ecoWebSvg = function (web, o) {
    o = o || {};
    const T = N.topics.okologi;
    const pos = {};
    web.nodes.forEach(function (n) { pos[n.id] = n; });
    let links = '';
    if (o.links !== false) {
      web.links.forEach(function (l) {
        const a = pos[l[0]], b = pos[l[1]];
        if (!a || !b) return;
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
        const r1 = 40, r2 = 46;
        const x1 = a.x + (dx / d) * r1, y1 = a.y + (dy / d) * r1, x2 = b.x - (dx / d) * r2, y2 = b.y - (dy / d) * r2;
        const mx = (x1 + x2) / 2 - (dy / d) * 14, my = (y1 + y2) / 2 + (dx / d) * 14;
        links += '<path class="fw-link" data-from="' + l[0] + '" data-to="' + l[1] + '" d="M' + f(x1) + ',' + f(y1) + ' Q' + f(mx) + ',' + f(my) + ' ' + f(x2) + ',' + f(y2) + '"/>';
      });
    }
    const nodes = web.nodes.map(function (n) {
      const s = T.structures[n.id];
      const role = T.roles[s.role];
      return '<g class="fw-node" data-node="' + n.id + '"' + (o.parts ? ' data-part="' + n.id + '"' : '') + ' transform="translate(' + n.x + ' ' + n.y + ')">' +
        '<circle class="fw-disc" r="38" style="--rc:' + role.color + '"/>' + N.ecoIcon(n.id, 0, 0, 0.7) +
        '<text class="fw-label" y="58">' + N.esc(N.t(s.short || s.name)) + '</text><g class="fw-badge"></g></g>';
    }).join('');
    const dec = web.decomposerBox ? '<g class="fw-decomp"><rect x="' + web.decomposerBox[0] + '" y="' + web.decomposerBox[1] + '" width="' + web.decomposerBox[2] + '" height="' + web.decomposerBox[3] + '" rx="18"/>' +
      '<text x="' + (web.decomposerBox[0] + web.decomposerBox[2] / 2) + '" y="' + (web.decomposerBox[1] + 22) + '">' + N.esc(N.t({ nb: 'Nedbrytere', en: 'Decomposers' })) + '</text>' +
      '<text class="fw-small" x="' + (web.decomposerBox[0] + web.decomposerBox[2] / 2) + '" y="' + (web.decomposerBox[1] + web.decomposerBox[3] - 12) + '">' + N.esc(N.t({ nb: '← alt som dør', en: '← everything that dies' })) + '</text></g>' : '';
    const mk = function (id, col) { return '<marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10z" style="fill:' + col + '"/></marker>'; };
    return '<defs>' + mk('fwarr', 'var(--fw-arrow)') + mk('fwarr-in', 'var(--good)') + mk('fwarr-out', 'var(--bad)') + mk('fwarr-ok', 'var(--good)') + mk('fwarr-bad', 'var(--bad)') + mk('fwarr-miss', 'var(--muted)') + '</defs>' +
      dec + '<g class="fw-links">' + links + '</g><g class="fw-nodes">' + nodes + '</g>';
  };
  function webDiagram(id, title) {
    return {
      topic: 'okologi', title: title, viewBox: '0 0 1000 700',
      get parts() { return N.topics.okologi.webs[id].nodes.map(function (n) { return { id: n.id, at: [n.x, n.y - 46] }; }); },
      draw: function (p) { return N.ecoWebSvg(N.topics.okologi.webs[id], { p: p, parts: true }); }
    };
  }
  N.diagrams.skognett = webDiagram('skog', { nb: 'Næringsnett i skogen', en: 'Forest food web' });
  N.diagrams.havnett = webDiagram('hav', { nb: 'Næringsnett i Norskehavet', en: 'Norwegian Sea food web' });

  /* ======================= 4) FIGURER TIL KORTENE ======================= */
  N.figures['eco-tilpasning'] = {
    viewBox: '0 0 400 240',
    draw: function () {
      return '<rect x="0" y="150" width="400" height="90" fill="#eef4f8"/><path d="M0,150 C100,140 300,160 400,148 L400,160 L0,160Z" fill="#dfe9f1"/>' +
        N.ecoIcon('gran', 70, 110, 2.6) + N.ecoIcon('gran', 340, 120, 2.2) + N.ecoIcon('hare', 190, 150, 1.6) + N.ecoIcon('ekorn', 300, 86, 1.0) +
        [[30, 30], [120, 60], [250, 20], [370, 50], [160, 100], [280, 120]].map(function (q) { return '<circle cx="' + q[0] + '" cy="' + q[1] + '" r="3" fill="#cfd8e3"/>'; }).join('');
    }
  };
  N.figures['eco-pyramide'] = {
    viewBox: '0 0 400 240',
    draw: function () {
      const R = N.topics.okologi.roles;
      const lv = [[R.toppredator.color, 160, 40], [R.sekundaer.color, 120, 80], [R.primaer.color, 80, 120], [R.produsent.color, 40, 160]];
      return lv.map(function (l, i) { return '<rect x="' + (200 - (200 - l[1])) + '" y="' + (30 + i * 46) + '" width="' + (2 * (200 - l[1])) + '" height="40" rx="6" fill="' + l[0] + '"/>'; }).join('') +
        N.ecoIcon('sollys', 350, 50, 0.9) + '<path d="M330,70 C300,120 330,170 300,200" stroke="#f2b632" stroke-width="4" fill="none" stroke-dasharray="6 6"/>' +
        '<text x="40" y="70" font-size="26" fill="#e5533d" font-family="sans-serif">♨</text><text x="20" y="130" font-size="22" fill="#e5533d" font-family="sans-serif">♨</text>';
    }
  };
  N.figures['eco-menneske'] = {
    viewBox: '0 0 400 240',
    draw: function () {
      return '<circle cx="200" cy="128" r="96" fill="#3b82c4"/><path d="M130,90 C150,60 190,70 200,90 C215,120 180,130 170,150 C160,175 130,170 120,140 C112,118 120,104 130,90Z M220,70 C250,60 290,80 285,110 C280,140 250,130 240,160 C232,182 210,170 214,140 C218,112 205,82 220,70Z" fill="#5aa13c"/>' +
        N.ecoIcon('gran', 160, 112, 0.7) + N.ecoIcon('bjork', 250, 104, 0.6) + N.ecoIcon('sild', 200, 200, 0.8) +
        '<path d="M120,40 q20,-20 40,0" stroke="#9aa8b5" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="330" cy="50" r="22" fill="#9aa8b5" opacity=".7"/><circle cx="350" cy="40" r="16" fill="#9aa8b5" opacity=".6"/>';
    }
  };
})();
