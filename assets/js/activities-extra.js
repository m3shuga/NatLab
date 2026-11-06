/* =====================================================================
   NatLab – flere øvingstyper
   bins     = sorter kort i grupper (f.eks. biotisk / abiotisk)
   pairs    = koble begrep og forklaring
   fieldSheet = observasjonsskjema til feltarbeid (lagres ikke)
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  N.activity = N.activity || {};
  const PAIR_COLORS = ['#1f4fc4', '#c92a63', '#1b7f45', '#b86b00', '#6a4fd0', '#0f8a9a', '#a33b2b', '#5d6b2f', '#8a3fa8', '#3d6b8f', '#b0407a', '#2f7d6d'];
  const bar = function () {
    return '<div class="act-bar"><button type="button" class="btn btn-primary" data-act="check">' + N.icon('check') + N.u('check') + '</button>' +
      '<button type="button" class="btn" data-act="reset">' + N.icon('retry') + N.u('tryAgain') + '</button>' +
      '<button type="button" class="btn btn-ghost" data-act="solve">' + N.icon('eye') + N.u('showSolution') + '</button></div>';
  };
  const result = function (ok, total) {
    return '<p class="act-result ' + (ok === total ? 'good' : 'bad') + '" aria-live="polite">' + (ok === total ? N.u('allCorrect') : ok + ' ' + N.u('of') + ' ' + total + ' ' + N.u('someWrong')) + '</p>';
  };

  /* ---------------------- SORTER I GRUPPER ---------------------- */
  N.activity.bins = function (root, cfg) {
    const items = cfg.items.map(function (it, i) { return { i: i, text: it.text, cat: it.cat }; });
    const order = N.shuffle(items);
    const state = { place: {}, sel: null, checked: false };
    function render() {
      let ok = 0;
      const bank = order.filter(function (x) { return state.place[x.i] === undefined; });
      root.innerHTML = '<div class="activity"><p class="act-help">' + N.fmt(cfg.help || N.ui.binsHelp) + '</p>' +
        '<div><p class="eyebrow" style="margin-bottom:.4rem">' + N.u('binsBank') + '</p><div class="bank">' +
        (bank.length ? bank.map(function (x) { return '<button type="button" class="chip" draggable="true" data-item="' + x.i + '" aria-pressed="' + (state.sel === x.i) + '">' + N.fmt(x.text) + '</button>'; }).join('') : '<span class="bank-empty">' + N.u('bankEmpty') + '</span>') + '</div></div>' +
        '<div class="bins" style="--n:' + cfg.cats.length + '">' + cfg.cats.map(function (c) {
          const inside = order.filter(function (x) { return state.place[x.i] === c.id; });
          return '<div class="bin' + (state.sel !== null ? ' is-target' : '') + '" data-bin="' + c.id + '" role="button" tabindex="0" aria-label="' + N.esc(N.t(c.name)) + '">' +
            '<p class="bin-title">' + N.esc(N.t(c.name)) + '</p><div class="bin-items">' + inside.map(function (x) {
              let cls = '';
              if (state.checked) { if (x.cat === c.id) { ok++; cls = ' ok'; } else cls = ' bad'; }
              return '<button type="button" class="chip placed' + cls + '" data-item="' + x.i + '">' + N.fmt(x.text) + (state.checked ? N.icon(x.cat === c.id ? 'check' : 'cross') : '') + '</button>';
            }).join('') + '</div></div>';
        }).join('') + '</div>' + bar() + (state.checked ? result(ok, items.length) : '<p class="act-result" aria-live="polite"></p>') + '</div>';
    }
    function place(cat) {
      if (state.sel === null) return;
      state.place[state.sel] = cat; state.sel = null; state.checked = false; render();
      const nx = N.$('.bank [data-item]', root); nx && nx.focus({ preventScroll: true });
    }
    root.addEventListener('click', function (e) {
      const b = e.target.closest('[data-item],[data-bin],[data-act]');
      if (!b || !root.contains(b)) return;
      if (b.dataset.act === 'check') { state.checked = true; render(); return; }
      if (b.dataset.act === 'reset') { state.place = {}; state.sel = null; state.checked = false; render(); return; }
      if (b.dataset.act === 'solve') { items.forEach(function (x) { state.place[x.i] = x.cat; }); state.checked = true; render(); return; }
      if (b.dataset.item !== undefined) {
        const i = Number(b.dataset.item);
        if (b.classList.contains('placed')) { delete state.place[i]; state.sel = i; state.checked = false; render(); return; }
        state.sel = state.sel === i ? null : i; render();
        const f = N.$('[data-item="' + i + '"]', root); f && f.focus({ preventScroll: true });
        return;
      }
      if (b.dataset.bin) place(b.dataset.bin);
    });
    root.addEventListener('keydown', function (e) { const b = e.target.closest && e.target.closest('[data-bin]'); if (b && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); place(b.dataset.bin); } });
    root.addEventListener('dragstart', function (e) { const c = e.target.closest && e.target.closest('[data-item]'); if (c) e.dataTransfer.setData('text/plain', c.dataset.item); });
    root.addEventListener('dragover', function (e) { if (e.target.closest && e.target.closest('[data-bin]')) e.preventDefault(); });
    root.addEventListener('drop', function (e) {
      const b = e.target.closest && e.target.closest('[data-bin]');
      if (!b) return;
      e.preventDefault(); state.sel = Number(e.dataTransfer.getData('text/plain')); place(b.dataset.bin);
    });
    render();
  };

  /* ---------------------- KOBLE PAR ---------------------- */
  N.activity.pairs = function (root, cfg) {
    const ids = cfg.items.map(function (x, i) { return i; });
    const left = N.shuffle(ids), right = N.shuffle(ids);
    const state = { pairs: {}, selL: null, selR: null, checked: false, colors: {}, n: 0 };
    const pairOfRight = function (r) { return Object.keys(state.pairs).filter(function (l) { return state.pairs[l] === r; }).map(Number)[0]; };
    function render() {
      let ok = 0;
      ids.forEach(function (i) { if (state.pairs[i] === i) ok++; });
      root.innerHTML = '<div class="activity"><p class="act-help">' + N.fmt(cfg.help || N.ui.pairsHelp) + '</p><div class="match-cols">' +
        '<div class="match-col"><p class="eyebrow">' + N.esc(N.t(cfg.leftTitle || { nb: 'Begrep', en: 'Term' })) + '</p>' + left.map(function (i) {
          const r = state.pairs[i];
          const cls = state.checked && r !== undefined ? (r === i ? ' ok' : ' bad') : '';
          return '<button type="button" class="match-item' + cls + '" data-l="' + i + '" aria-pressed="' + (state.selL === i) + '"><strong>' + N.fmt(cfg.items[i].a) + '</strong>' +
            (r !== undefined ? '<span class="pair-tag" style="background:' + state.colors[i].c + '">' + state.colors[i].n + '</span>' : '') + '</button>';
        }).join('') + '</div>' +
        '<div class="match-col"><p class="eyebrow">' + N.esc(N.t(cfg.rightTitle || { nb: 'Forklaring', en: 'Explanation' })) + '</p>' + right.map(function (i) {
          const l = pairOfRight(i);
          const cls = state.checked && l !== undefined ? (l === i ? ' ok' : ' bad') : '';
          return '<button type="button" class="match-item' + cls + '" data-r="' + i + '" aria-pressed="' + (state.selR === i) + '">' + N.fmt(cfg.items[i].b) +
            (l !== undefined ? '<span class="pair-tag" style="background:' + state.colors[l].c + '">' + state.colors[l].n + '</span>' : '') + '</button>';
        }).join('') + '</div></div>' + bar() + (state.checked ? result(ok, ids.length) : '<p class="act-result" aria-live="polite"></p>') + '</div>';
    }
    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      if (b.dataset.l !== undefined || b.dataset.r !== undefined) {
        state.checked = false;
        if (b.dataset.l !== undefined) { const v = Number(b.dataset.l); state.selL = state.selL === v ? null : v; }
        else { const v = Number(b.dataset.r); state.selR = state.selR === v ? null : v; }
        if (state.selL !== null && state.selR !== null) {
          const prev = pairOfRight(state.selR); if (prev !== undefined) delete state.pairs[prev];
          state.pairs[state.selL] = state.selR;
          if (!state.colors[state.selL]) { state.colors[state.selL] = { c: PAIR_COLORS[state.n % PAIR_COLORS.length], n: state.n + 1 }; state.n++; }
          state.selL = state.selR = null;
        }
        const key = b.dataset.l !== undefined ? '[data-l="' + b.dataset.l + '"]' : '[data-r="' + b.dataset.r + '"]';
        render(); const f = N.$(key, root); f && f.focus({ preventScroll: true });
        return;
      }
      if (b.dataset.act === 'check') { state.checked = true; render(); }
      if (b.dataset.act === 'reset') { state.pairs = {}; state.colors = {}; state.n = 0; state.checked = false; render(); }
      if (b.dataset.act === 'solve') { state.pairs = {}; state.colors = {}; state.n = 0; left.forEach(function (i) { state.pairs[i] = i; state.colors[i] = { c: PAIR_COLORS[state.n % PAIR_COLORS.length], n: state.n + 1 }; state.n++; }); state.checked = true; render(); }
    });
    render();
  };

  /* ---------------------- OBSERVASJONSSKJEMA ---------------------- */
  N.fieldSheet = function (root, sheet) {
    let fid = 0;
    const field = function (fl) {
      const id = 'fs-' + (++fid);
      if (fl.type === 'table') {
        return '<div class="fs-field"><p class="fs-label">' + N.fmt(fl.label) + '</p>' + (fl.help ? '<p class="set-help">' + N.fmt(fl.help) + '</p>' : '') +
          '<div class="table-wrap"><table class="grid-table fs-table"><thead><tr>' + fl.cols.map(function (c) { return '<th scope="col">' + N.esc(N.t(c)) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          Array.from({ length: fl.rows }).map(function (_, r) {
            return '<tr>' + fl.cols.map(function (c, k) { return '<td><input type="text" id="' + id + '-' + r + '-' + k + '" aria-label="' + N.esc(N.t(c) + ' ' + (r + 1)) + '"></td>'; }).join('') + '</tr>';
          }).join('') + '</tbody></table></div></div>';
      }
      if (fl.type === 'area') return '<div class="fs-field"><label class="fs-label" for="' + id + '">' + N.fmt(fl.label) + '</label>' + (fl.help ? '<p class="set-help">' + N.fmt(fl.help) + '</p>' : '') + '<textarea id="' + id + '" rows="' + (fl.rows || 3) + '"></textarea></div>';
      return '<div class="fs-field fs-inline"><label class="fs-label" for="' + id + '">' + N.fmt(fl.label) + '</label><input type="text" id="' + id + '"' + (fl.placeholder ? ' placeholder="' + N.esc(N.t(fl.placeholder)) + '"' : '') + '></div>';
    };
    root.innerHTML = '<section class="field-sheet" aria-labelledby="fs-title"><div class="fs-head"><div><p class="eyebrow">NatLab · ' + N.esc(N.t(sheet.kicker)) + '</p><h2 id="fs-title">' + N.esc(N.t(sheet.title)) + '</h2></div>' +
      '<div class="act-bar no-print"><button type="button" class="btn btn-primary" data-print>' + N.icon('doc') + N.u('fsPrint') + '</button><button type="button" class="btn btn-ghost" data-clear>' + N.icon('retry') + N.u('fsClear') + '</button></div></div>' +
      '<p class="set-help no-print">' + N.u('fsPrivacy') + '</p>' +
      sheet.sections.map(function (s, i) {
        return '<fieldset class="fs-section"><legend><span class="gnum">' + (i + 1) + '</span> ' + N.esc(N.t(s.title)) + '</legend>' + (s.help ? '<p class="set-help">' + N.fmt(s.help) + '</p>' : '') + s.fields.map(field).join('') + '</fieldset>';
      }).join('') + '</section>';
    root.addEventListener('click', function (e) {
      if (e.target.closest('[data-print]')) { try { window.print(); } catch (err) { /* ignorer */ } }
      if (e.target.closest('[data-clear]')) N.$$('input, textarea', root).forEach(function (x) { x.value = ''; });
    });
  };
})();
