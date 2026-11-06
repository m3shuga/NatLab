/* =====================================================================
   NatLab – øvingsoppgaver
   Alle oppgavene kan løses med klikk/trykk, dra-og-slipp og tastatur.
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  N.activity = {};
  const PAIR_COLORS = ['#1f4fc4', '#c92a63', '#1b7f45', '#b86b00', '#6a4fd0', '#0f8a9a', '#a33b2b', '#5d6b2f', '#8a3fa8', '#3d6b8f', '#b0407a', '#2f7d6d'];

  function resultText(ok, total) {
    return ok === total ? N.u('allCorrect') : ok + ' ' + N.u('of') + ' ' + total + ' ' + N.u('someWrong');
  }

  /* ---------------------- MERK DELENE ---------------------- */
  N.activity.label = function (root, cfg) {
    const def = N.diagrams[cfg.diagram];
    const level = cfg.level || N.settings.level;
    const parts = N.visibleParts(def, level);
    const state = { placed: {}, sel: null, checked: false };
    const bankOrder = N.shuffle(parts.map(function (p) { return p.id; }));
    const name = function (id) { return N.t(N.structure(def.topic, id).name); };

    function render() {
      const used = Object.keys(state.placed).map(function (k) { return state.placed[k]; });
      const bank = bankOrder.filter(function (id) { return used.indexOf(id) < 0; });
      root.innerHTML = '<div class="activity">' +
        '<p class="act-help">' + N.u('labelHelp') + '</p>' +
        '<div class="label-layout"><figure class="slide">' + N.renderDiagram(cfg.diagram, { pins: true, level: level, scale: false }) + '</figure>' +
        '<div style="display:grid;gap:1rem;min-width:0">' +
        '<div><p class="eyebrow" style="margin-bottom:.4rem">' + N.u('bank') + '</p><div class="bank" data-bank>' +
        (bank.length ? bank.map(function (id) {
          return '<button type="button" class="chip" draggable="true" data-chip="' + id + '" aria-pressed="' + (state.sel === id) + '">' + N.esc(name(id)) + '</button>';
        }).join('') : '<span class="bank-empty">' + N.u('bankEmpty') + '</span>') + '</div></div>' +
        '<ol class="slots">' + parts.map(function (p, i) {
          const v = state.placed[i];
          const cls = state.checked && v ? (v === p.id ? ' ok' : ' bad') : (state.sel && !v ? ' is-target' : '');
          return '<li><button type="button" class="slot' + cls + '" data-slot="' + i + '"><span class="num">' + (i + 1) + '</span>' +
            '<span class="val' + (v ? '' : ' empty') + '">' + (v ? N.esc(name(v)) : N.u('emptySlot')) + '</span>' +
            (state.checked && v ? '<span style="margin-left:auto">' + N.icon(v === p.id ? 'check' : 'cross') + '</span>' : '') + '</button></li>';
        }).join('') + '</ol>' +
        '<div class="act-bar"><button type="button" class="btn btn-primary" data-act="check">' + N.icon('check') + N.u('check') + '</button>' +
        '<button type="button" class="btn" data-act="reset">' + N.icon('retry') + N.u('tryAgain') + '</button>' +
        '<button type="button" class="btn btn-ghost" data-act="solve">' + N.icon('eye') + N.u('showSolution') + '</button></div>' +
        '<p class="act-result" aria-live="polite" data-result></p></div></div></div>';

      const svg = N.$('svg.diagram', root);
      N.wireDiagram(svg, { interactive: false });
      N.$$('.pin', svg).forEach(function (pin) {
        const i = Number(pin.dataset.index);
        pin.classList.add('slot-target');
        if (state.placed[i]) pin.classList.add(state.checked ? (state.placed[i] === parts[i].id ? 'slot-ok' : 'slot-bad') : 'slot-filled');
        pin.setAttribute('role', 'button');
        pin.setAttribute('aria-label', N.u('part') + ' ' + (i + 1));
        pin.addEventListener('click', function () { place(i); });
        pin.addEventListener('dragover', function (e) { e.preventDefault(); });
        pin.addEventListener('drop', function (e) { e.preventDefault(); state.sel = e.dataTransfer.getData('text/plain'); place(i); });
      });
      if (state.lastResult) N.$('[data-result]', root).outerHTML = state.lastResult;
    }

    function place(i) {
      if (state.checked) { state.checked = false; state.lastResult = null; }
      if (state.sel) {
        Object.keys(state.placed).forEach(function (k) { if (state.placed[k] === state.sel) delete state.placed[k]; });
        state.placed[i] = state.sel;
        state.sel = null;
      } else if (state.placed[i]) {
        state.sel = state.placed[i];
        delete state.placed[i];
      }
      render();
      const nextChip = N.$('[data-chip]', root);
      const focusEl = state.sel ? N.$('[data-slot="' + i + '"]', root) : (nextChip || N.$('[data-slot="' + i + '"]', root));
      focusEl && focusEl.focus({ preventScroll: true });
    }

    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.dataset.chip) { state.sel = state.sel === b.dataset.chip ? null : b.dataset.chip; render(); const c = N.$('[data-chip="' + b.dataset.chip + '"]', root); c && c.focus({ preventScroll: true }); return; }
      if (b.dataset.slot !== undefined) { place(Number(b.dataset.slot)); return; }
      if (b.dataset.act === 'check') {
        state.checked = true;
        const ok = parts.filter(function (p, i) { return state.placed[i] === p.id; }).length;
        state.lastResult = '<p class="act-result ' + (ok === parts.length ? 'good' : 'bad') + '" aria-live="polite" data-result>' + resultText(ok, parts.length) + '</p>';
        render();
      }
      if (b.dataset.act === 'reset') { state.placed = {}; state.sel = null; state.checked = false; state.lastResult = null; render(); }
      if (b.dataset.act === 'solve') { parts.forEach(function (p, i) { state.placed[i] = p.id; }); state.checked = true; state.lastResult = null; render(); }
    });
    root.addEventListener('dragstart', function (e) {
      const c = e.target.closest && e.target.closest('[data-chip]');
      if (c) { e.dataTransfer.setData('text/plain', c.dataset.chip); e.dataTransfer.effectAllowed = 'move'; }
    });
    root.addEventListener('dragover', function (e) { const s = e.target.closest && e.target.closest('.slot'); if (s) { e.preventDefault(); s.classList.add('drag-over'); } });
    root.addEventListener('dragleave', function (e) { const s = e.target.closest && e.target.closest('.slot'); if (s) s.classList.remove('drag-over'); });
    root.addEventListener('drop', function (e) {
      const s = e.target.closest && e.target.closest('.slot');
      if (!s) return;
      e.preventDefault();
      state.sel = e.dataTransfer.getData('text/plain');
      place(Number(s.dataset.slot));
    });
    render();
  };

  /* ---------------------- KOBLE DEL OG JOBB ---------------------- */
  N.activity.match = function (root, cfg) {
    const def = N.diagrams[cfg.diagram];
    const level = cfg.level || N.settings.level;
    const ids = N.visibleParts(def, level).map(function (p) { return p.id; });
    const left = N.shuffle(ids), right = N.shuffle(ids);
    const state = { pairs: {}, selL: null, selR: null, checked: false, colors: {} };
    let colorIdx = 0;
    const S = function (id) { return N.structure(def.topic, id); };

    function pairOfRight(r) { return Object.keys(state.pairs).filter(function (l) { return state.pairs[l] === r; })[0]; }

    function render() {
      root.innerHTML = '<div class="activity"><p class="act-help">' + N.u('matchHelp') + '</p>' +
        '<div class="match-cols"><div class="match-col" role="group" aria-label="' + N.esc(N.u('part')) + '"><p class="eyebrow">' + N.u('part') + '</p>' +
        left.map(function (id) {
          const r = state.pairs[id];
          const cls = state.checked && r ? (r === id ? ' ok' : ' bad') : '';
          const col = state.colors[id];
          return '<button type="button" class="match-item' + cls + '" data-l="' + id + '" aria-pressed="' + (state.selL === id) + '">' +
            '<span class="swatch" style="--c:' + S(id).color + '"></span>' + N.esc(N.t(S(id).name)) +
            (r ? '<span class="pair-tag" style="background:' + col.c + '">' + col.n + '</span>' : '') + '</button>';
        }).join('') + '</div>' +
        '<div class="match-col" role="group" aria-label="' + N.esc(N.u('job')) + '"><p class="eyebrow">' + N.u('job') + '</p>' +
        right.map(function (id) {
          const l = pairOfRight(id);
          const cls = state.checked && l ? (l === id ? ' ok' : ' bad') : '';
          const col = l ? state.colors[l] : null;
          return '<button type="button" class="match-item' + cls + '" data-r="' + id + '" aria-pressed="' + (state.selR === id) + '">' + N.fmt(S(id).short) +
            (col ? '<span class="pair-tag" style="background:' + col.c + '">' + col.n + '</span>' : '') + '</button>';
        }).join('') + '</div></div>' +
        '<div class="act-bar"><button type="button" class="btn btn-primary" data-act="check">' + N.icon('check') + N.u('check') + '</button>' +
        '<button type="button" class="btn" data-act="reset">' + N.icon('retry') + N.u('tryAgain') + '</button>' +
        '<button type="button" class="btn btn-ghost" data-act="solve">' + N.icon('eye') + N.u('showSolution') + '</button></div>' +
        (state.result || '<p class="act-result" aria-live="polite"></p>') + '</div>';
    }

    function tryPair() {
      if (!state.selL || !state.selR) return;
      const prevL = pairOfRight(state.selR);
      if (prevL) delete state.pairs[prevL];
      state.pairs[state.selL] = state.selR;
      if (!state.colors[state.selL]) { state.colors[state.selL] = { c: PAIR_COLORS[colorIdx % PAIR_COLORS.length], n: colorIdx + 1 }; colorIdx++; }
      state.selL = state.selR = null;
    }

    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.dataset.l || b.dataset.r) {
        if (state.checked) { state.checked = false; state.result = null; }
        if (b.dataset.l) state.selL = state.selL === b.dataset.l ? null : b.dataset.l;
        else state.selR = state.selR === b.dataset.r ? null : b.dataset.r;
        tryPair();
        const key = b.dataset.l ? '[data-l="' + b.dataset.l + '"]' : '[data-r="' + b.dataset.r + '"]';
        render();
        const f = N.$(key, root); f && f.focus({ preventScroll: true });
        return;
      }
      if (b.dataset.act === 'check') {
        state.checked = true;
        const ok = ids.filter(function (id) { return state.pairs[id] === id; }).length;
        state.result = '<p class="act-result ' + (ok === ids.length ? 'good' : 'bad') + '" aria-live="polite">' + resultText(ok, ids.length) + '</p>';
        render();
      }
      if (b.dataset.act === 'reset') { state.pairs = {}; state.colors = {}; colorIdx = 0; state.checked = false; state.result = null; render(); }
      if (b.dataset.act === 'solve') {
        state.pairs = {}; state.colors = {}; colorIdx = 0;
        left.forEach(function (id) { state.pairs[id] = id; state.colors[id] = { c: PAIR_COLORS[colorIdx % PAIR_COLORS.length], n: colorIdx + 1 }; colorIdx++; });
        state.checked = true; state.result = null; render();
      }
    });
    render();
  };

  /* ---------------------- HVEM HAR HVA? ---------------------- */
  N.activity.sort = function (root, cfg) {
    const T = N.topics[cfg.topic];
    const cols = cfg.cols;
    const rows = cfg.rows;
    const state = { on: {}, checked: false };
    const key = function (r, c) { return r + '|' + c; };
    const truth = function (r, c) { return T.structures[r].foundIn[c] === true; };

    function render() {
      let ok = 0, total = 0;
      root.innerHTML = '<div class="activity"><p class="act-help">' + N.u('sortHelp') + '</p>' +
        '<div class="table-wrap"><table class="grid-table sort-table"><thead><tr><th scope="col">' + N.u('part') + '</th>' +
        cols.map(function (c) { return '<th scope="col" class="c">' + N.esc(N.t(T.orgNames[c])) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        rows.map(function (r) {
          const s = T.structures[r];
          return '<tr><th scope="row"><span class="row-name"><span class="swatch" style="--c:' + s.color + '"></span>' + N.esc(N.t(s.name)) + '</span></th>' +
            cols.map(function (c) {
              const on = !!state.on[key(r, c)];
              let cls = '';
              if (state.checked) { total++; if (on === truth(r, c)) { ok++; cls = on ? ' ok' : ''; } else cls = ' bad'; }
              return '<td class="c"><button type="button" class="' + cls.trim() + '" data-cell="' + key(r, c) + '" aria-pressed="' + on + '" aria-label="' + N.esc(N.t(s.name) + ' – ' + N.t(T.orgNames[c])) + '">' + (on ? N.icon('check') : '') + '</button></td>';
            }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>' +
        '<div class="act-bar"><button type="button" class="btn btn-primary" data-act="check">' + N.icon('check') + N.u('check') + '</button>' +
        '<button type="button" class="btn" data-act="reset">' + N.icon('retry') + N.u('tryAgain') + '</button>' +
        '<button type="button" class="btn btn-ghost" data-act="solve">' + N.icon('eye') + N.u('showSolution') + '</button></div>' +
        '<p class="act-result ' + (state.checked ? (ok === total ? 'good' : 'bad') : '') + '" aria-live="polite">' + (state.checked ? resultText(ok, total) : '') + '</p></div>';
    }
    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.dataset.cell) {
        state.on[b.dataset.cell] = !state.on[b.dataset.cell]; state.checked = false;
        const k = b.dataset.cell; render(); const f = N.$('[data-cell="' + k + '"]', root); f && f.focus({ preventScroll: true });
      }
      if (b.dataset.act === 'check') { state.checked = true; render(); }
      if (b.dataset.act === 'reset') { state.on = {}; state.checked = false; render(); }
      if (b.dataset.act === 'solve') { state.on = {}; rows.forEach(function (r) { cols.forEach(function (c) { if (truth(r, c)) state.on[key(r, c)] = true; }); }); state.checked = true; render(); }
    });
    render();
  };

  /* ---------------------- RIKTIG REKKEFØLGE ---------------------- */
  N.activity.order = function (root, cfg) {
    const items = cfg.items.map(function (it, i) { return { i: i, text: it }; });
    let order = N.shuffle(items);
    while (items.length > 1 && order.every(function (x, k) { return x.i === k; })) order = N.shuffle(items);
    const state = { checked: false, dragFrom: null };

    function render() {
      let ok = 0;
      root.innerHTML = '<div class="activity"><p class="act-help">' + N.fmt(cfg.help || N.ui.orderHelp) + '</p>' +
        (cfg.ends ? '<p class="eyebrow">↑ ' + N.esc(N.t(cfg.ends[0])) + '</p>' : '') +
        '<ol class="order-list">' + order.map(function (x, k) {
          let cls = '';
          if (state.checked) { if (x.i === k) { ok++; cls = ' ok'; } else cls = ' bad'; }
          return '<li class="order-item' + cls + '" draggable="true" data-k="' + k + '"><span class="pos">' + (k + 1) + '</span><span data-say>' + N.fmt(x.text) + '</span>' +
            '<span class="mv"><button type="button" data-up="' + k + '" aria-label="' + N.esc(N.u('moveUp')) + '"' + (k === 0 ? ' disabled' : '') + '>' + N.icon('up') + '</button>' +
            '<button type="button" data-down="' + k + '" aria-label="' + N.esc(N.u('moveDown')) + '"' + (k === order.length - 1 ? ' disabled' : '') + '>' + N.icon('down') + '</button></span></li>';
        }).join('') + '</ol>' +
        (cfg.ends ? '<p class="eyebrow">↓ ' + N.esc(N.t(cfg.ends[1])) + '</p>' : '') +
        '<div class="act-bar"><button type="button" class="btn btn-primary" data-act="check">' + N.icon('check') + N.u('check') + '</button>' +
        '<button type="button" class="btn" data-act="reset">' + N.icon('retry') + N.u('tryAgain') + '</button>' +
        '<button type="button" class="btn btn-ghost" data-act="solve">' + N.icon('eye') + N.u('showSolution') + '</button></div>' +
        '<p class="act-result ' + (state.checked ? (ok === order.length ? 'good' : 'bad') : '') + '" aria-live="polite">' + (state.checked ? resultText(ok, order.length) : '') + '</p></div>';
    }
    function move(a, b) {
      if (b < 0 || b >= order.length) return;
      const x = order.splice(a, 1)[0];
      order.splice(b, 0, x);
      state.checked = false;
      render();
    }
    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.dataset.up) { const k = Number(b.dataset.up); move(k, k - 1); const f = N.$('[data-up="' + (k - 1) + '"]', root) || N.$('[data-down="' + (k - 1) + '"]', root); f && f.focus({ preventScroll: true }); }
      if (b.dataset.down) { const k = Number(b.dataset.down); move(k, k + 1); const f = N.$('[data-down="' + (k + 1) + '"]', root) || N.$('[data-up="' + (k + 1) + '"]', root); f && f.focus({ preventScroll: true }); }
      if (b.dataset.act === 'check') { state.checked = true; render(); }
      if (b.dataset.act === 'reset') { order = N.shuffle(items); state.checked = false; render(); }
      if (b.dataset.act === 'solve') { order = items.slice(); state.checked = true; render(); }
    });
    root.addEventListener('dragstart', function (e) { const li = e.target.closest && e.target.closest('.order-item'); if (li) { state.dragFrom = Number(li.dataset.k); li.classList.add('dragging'); e.dataTransfer.setData('text/plain', li.dataset.k); } });
    root.addEventListener('dragover', function (e) { if (e.target.closest && e.target.closest('.order-item')) e.preventDefault(); });
    root.addEventListener('drop', function (e) {
      const li = e.target.closest && e.target.closest('.order-item');
      if (!li || state.dragFrom === null) return;
      e.preventDefault();
      move(state.dragFrom, Number(li.dataset.k));
      state.dragFrom = null;
    });
    render();
  };
})();
