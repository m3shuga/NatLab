/* =====================================================================
   NatLab – «Hvor små er de?» (zoom i riktig målestokk)
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  const W = 900, H = 420;

  function shape(o, x, y, s) {
    // s = piksler per mikrometer. Tegner objektet sentrert i (x, y).
    const d = o.size * s;
    if (d < 0.6) return '<circle cx="' + x + '" cy="' + y + '" r="1.2" fill="' + o.color + '"/>';
    switch (o.shape) {
      case 'hair':
        return '<circle cx="' + x + '" cy="' + y + '" r="' + d / 2 + '" fill="#8a6239"/><circle cx="' + x + '" cy="' + y + '" r="' + d * 0.38 + '" fill="#a77a4b"/><circle cx="' + x + '" cy="' + y + '" r="' + d * 0.12 + '" fill="#6b4a2a"/>';
      case 'plant':
        return '<rect x="' + (x - d / 2) + '" y="' + (y - d * 0.32) + '" width="' + d + '" height="' + d * 0.64 + '" rx="' + d * 0.06 + '" fill="#b5d98b" stroke="#5d8f2f" stroke-width="' + Math.max(1, d * 0.02) + '"/>' +
          '<rect x="' + (x - d * 0.44) + '" y="' + (y - d * 0.27) + '" width="' + d * 0.88 + '" height="' + d * 0.54 + '" rx="' + d * 0.04 + '" fill="var(--c-cyto)"/>' +
          '<ellipse cx="' + (x + d * 0.05) + '" cy="' + y + '" rx="' + d * 0.3 + '" ry="' + d * 0.18 + '" fill="var(--c-vac)"/>' +
          '<circle cx="' + (x - d * 0.33) + '" cy="' + (y - d * 0.15) + '" r="' + d * 0.08 + '" fill="#a999ec"/>' +
          [[-0.2, -0.23], [0.15, -0.23], [0.38, 0], [0.15, 0.23], [-0.2, 0.23]].map(function (c) { return '<ellipse cx="' + (x + c[0] * d) + '" cy="' + (y + c[1] * d) + '" rx="' + d * 0.045 + '" ry="' + d * 0.02 + '" fill="#2f9d4f"/>'; }).join('');
      case 'animal':
        return '<ellipse cx="' + x + '" cy="' + y + '" rx="' + d / 2 + '" ry="' + d * 0.4 + '" fill="var(--c-cyto)" stroke="#d6457a" stroke-width="' + Math.max(1, d * 0.02) + '"/>' +
          '<circle cx="' + (x - d * 0.05) + '" cy="' + y + '" r="' + d * 0.14 + '" fill="#a999ec"/>' +
          '<ellipse cx="' + (x + d * 0.25) + '" cy="' + (y - d * 0.12) + '" rx="' + d * 0.06 + '" ry="' + d * 0.03 + '" fill="#e8712f"/>';
      case 'bacterium':
        return '<rect x="' + (x - d / 2) + '" y="' + (y - d * 0.22) + '" width="' + d + '" height="' + d * 0.44 + '" rx="' + d * 0.22 + '" fill="#b5d98b" stroke="#5d8f2f" stroke-width="' + Math.max(1, d * 0.02) + '"/>' +
          '<rect x="' + (x - d * 0.46) + '" y="' + (y - d * 0.18) + '" width="' + d * 0.92 + '" height="' + d * 0.36 + '" rx="' + d * 0.18 + '" fill="var(--c-cyto)"/>' +
          '<ellipse cx="' + x + '" cy="' + y + '" rx="' + d * 0.2 + '" ry="' + d * 0.09 + '" fill="none" stroke="#9b3fc4" stroke-width="' + Math.max(1, d * 0.015) + '"/>';
      case 'phage':
        return '<path d="M' + x + ',' + (y - d / 2) + 'l' + d * 0.17 + ',' + d * 0.1 + 'v' + d * 0.2 + 'l' + (-d * 0.17) + ',' + d * 0.1 + 'l' + (-d * 0.17) + ',' + (-d * 0.1) + 'v' + (-d * 0.2) + 'z" fill="#f6bdb2" stroke="#e0533f" stroke-width="' + Math.max(1, d * 0.012) + '"/>' +
          '<rect x="' + (x - d * 0.04) + '" y="' + (y - d * 0.1) + '" width="' + d * 0.08 + '" height="' + d * 0.38 + '" fill="#b4bfcc"/>' +
          '<path d="M' + (x - d * 0.1) + ',' + (y + d * 0.28) + 'l' + (-d * 0.12) + ',' + d * 0.22 + 'M' + (x + d * 0.1) + ',' + (y + d * 0.28) + 'l' + d * 0.12 + ',' + d * 0.22 + '" stroke="#4d5a6b" stroke-width="' + Math.max(1, d * 0.02) + '"/>';
      default: { // virus
        let sp = '';
        for (let i = 0; i < 14; i++) {
          const a = (i / 14) * Math.PI * 2;
          sp += '<line x1="' + (x + Math.cos(a) * d * 0.38) + '" y1="' + (y + Math.sin(a) * d * 0.38) + '" x2="' + (x + Math.cos(a) * d * 0.5) + '" y2="' + (y + Math.sin(a) * d * 0.5) + '" stroke="#c42b4f" stroke-width="' + Math.max(1, d * 0.04) + '"/>';
        }
        return sp + '<circle cx="' + x + '" cy="' + y + '" r="' + d * 0.38 + '" fill="var(--c-virus-in)" stroke="' + o.color + '" stroke-width="' + Math.max(1, d * 0.05) + '"/>';
      }
    }
  }

  function niceBar(s) {
    // finn en «pen» lengde på målestokken (80–220 px)
    const cands = [];
    [1e-3, 1e-2, 1e-1, 1, 10, 100, 1000].forEach(function (m) { [1, 2, 5].forEach(function (k) { cands.push(k * m); }); });
    let best = cands[0];
    cands.forEach(function (c) { if (c * s >= 80 && c * s <= 220) best = c; });
    if (best * s < 80) best = cands.filter(function (c) { return c * s >= 80; })[0] || best;
    const label = best >= 1000 ? best / 1000 + ' mm' : best >= 1 ? best + ' µm' : Math.round(best * 1000) + ' nm';
    return { len: best * s, label: label };
  }

  N.scaleView = function (root, cfg) {
    const objs = cfg.objects;
    // plasser objektene fra stor til liten, side om side
    const xs = [0];
    for (let i = 1; i < objs.length; i++) xs.push(xs[i - 1] + objs[i - 1].size * 0.5 + objs[i].size * 0.9);
    let t = 0;

    function frame() {
      const k = Math.min(Math.floor(t), objs.length - 2);
      const fr = t - k;
      const logS = Math.log(objs[k].size) * (1 - fr) + Math.log(objs[k + 1].size) * fr;
      const focusSize = Math.exp(logS);
      const s = (W * 0.42) / focusSize;
      const cx = xs[k] * (1 - fr) + xs[k + 1] * fr;
      const focusIdx = Math.round(t);
      let body = '';
      // fokusobjektet får alltid navn; andre navn som ville overlappet, droppes
      const labelXs = [(xs[focusIdx] - cx) * s + W / 2];
      objs.forEach(function (o, i) {
        const x = (xs[i] - cx) * s + W / 2;
        const d = o.size * s;
        if (x + d < -W * 2 || x - d > W * 3) return;
        body += '<g opacity="' + (i === focusIdx ? 1 : 0.85) + '">' + shape(o, x, H / 2 - 10, s) + '</g>';
        const isFocus = i === focusIdx;
        if ((isFocus || d > 40) && d < W * 1.4 && x > -40 && x < W + 40 && (isFocus || labelXs.every(function (lx) { return Math.abs(lx - x) > 130; }))) {
          if (!isFocus) labelXs.push(x);
          const ly = Math.min(H - 52, H / 2 - 10 + Math.min(d * 0.45, H / 2 - 40) + 26);
          body += '<text x="' + x + '" y="' + ly + '" text-anchor="middle" font-size="16" font-weight="700">' + N.esc(N.t(o.name)) + '</text>';
        }
      });
      const bar = niceBar(s);
      body += '<g><line x1="30" y1="' + (H - 22) + '" x2="' + (30 + bar.len) + '" y2="' + (H - 22) + '" stroke="var(--c-ink)" stroke-width="4"/>' +
        '<line x1="30" y1="' + (H - 30) + '" x2="30" y2="' + (H - 14) + '" stroke="var(--c-ink)" stroke-width="3"/><line x1="' + (30 + bar.len) + '" y1="' + (H - 30) + '" x2="' + (30 + bar.len) + '" y2="' + (H - 14) + '" stroke="var(--c-ink)" stroke-width="3"/>' +
        '<text x="' + (40 + bar.len) + '" y="' + (H - 16) + '" font-size="16" font-family="var(--f-mono)">' + bar.label + '</text></g>';
      N.$('#scale-svg', root).innerHTML = body;
      const o = objs[focusIdx];
      N.$('#scale-info', root).innerHTML = '<p class="eyebrow">' + N.u('sizeLabel') + '</p><p class="big">' + N.esc(N.t(o.name)) + ' · ' + N.esc(N.t(o.range)) + '</p><p data-say>' + N.fmt(o.text) + '</p>';
      N.$$('[data-jump]', root).forEach(function (b) { b.setAttribute('aria-pressed', String(Number(b.dataset.jump) === focusIdx)); });
      N.$('#scale-range', root).setAttribute('aria-valuetext', N.t(o.name) + ', ' + N.t(o.range));
    }

    root.innerHTML = '<div class="scale-view">' +
      '<div class="scale-stage"><svg viewBox="0 0 ' + W + ' ' + H + '" id="scale-svg" role="img" aria-label="' + N.esc(N.u('scaleTitle')) + '"></svg></div>' +
      '<div class="scale-controls"><label for="scale-range" class="eyebrow">' + N.u('zoom') + '</label>' +
      '<input type="range" id="scale-range" min="0" max="' + (objs.length - 1) + '" step="0.01" value="0">' +
      '<div class="scale-stops" role="group" aria-label="' + N.esc(N.u('jumpTo')) + '">' + objs.map(function (o, i) {
        return '<button type="button" class="btn btn-sm" data-jump="' + i + '" aria-pressed="false">' + N.esc(N.t(o.name)) + '</button>';
      }).join('') + '</div></div>' +
      '<div class="scale-info" id="scale-info" aria-live="polite" data-read-scope></div>' +
      '<p class="act-help mono" style="font-size:.88rem">' + N.u('scaleUnits') + '</p></div>';

    const range = N.$('#scale-range', root);
    range.addEventListener('input', function () { t = Number(range.value); frame(); });
    let anim = null;
    root.addEventListener('click', function (e) {
      const b = e.target.closest('[data-jump]');
      if (!b) return;
      const target = Number(b.dataset.jump);
      cancelAnimationFrame(anim);
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) { t = target; range.value = t; frame(); return; }
      const from = t, start = performance.now(), dur = 700 + Math.abs(target - from) * 250;
      const step = function (now) {
        const p = Math.min(1, (now - start) / dur);
        const e2 = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        t = from + (target - from) * e2; range.value = t; frame();
        if (p < 1) anim = requestAnimationFrame(step);
      };
      anim = requestAnimationFrame(step);
    });
    frame();
  };
})();
