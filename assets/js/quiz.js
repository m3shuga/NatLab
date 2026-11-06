/* =====================================================================
   NatLab – quiz («Øv til prøven»)
   Resultatet vises på skjermen og lagres ikke noe sted.
   Spørsmålstyper: 'mc' (flervalg), 'tf' (sant/usant),
                   'multi' (flere riktige), 'hotspot' (klikk i modellen)
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;

  N.quiz = function (root, topicId, preset) {
    const T = N.topics[topicId];
    const all = T.quiz || [];
    const sets = T.quizSets || [];
    const state = { set: (preset && preset.set) || 'alle', level: N.settings.level === 'deeper' ? 'all' : 'basic', count: 10, qs: [], i: 0, answers: [], answered: false };

    function pool() {
      return all.filter(function (q) {
        return (state.set === 'alle' || q.set === state.set) && (state.level === 'all' || q.level !== 'deeper');
      });
    }

    function setup() {
      const counts = {};
      sets.forEach(function (s) { counts[s.id] = all.filter(function (q) { return q.set === s.id && (state.level === 'all' || q.level !== 'deeper'); }).length; });
      root.innerHTML = '<form class="quiz-setup" id="quiz-setup">' +
        '<fieldset><legend>' + N.u('quizWhich') + '</legend><div class="choice-row">' +
        '<label><input type="radio" name="qset" id="qset-alle" value="alle"' + (state.set === 'alle' ? ' checked' : '') + '>' + N.u('quizMixed') + '</label>' +
        sets.map(function (s) {
          return '<label><input type="radio" name="qset" id="qset-' + s.id + '" value="' + s.id + '"' + (state.set === s.id ? ' checked' : '') + '>' + N.esc(N.t(s.name)) + ' <span class="mono" style="color:var(--muted);font-size:.8rem">(' + counts[s.id] + ')</span></label>';
        }).join('') + '</div></fieldset>' +
        '<fieldset><legend>' + N.u('quizLevel') + '</legend><div class="choice-row">' +
        '<label><input type="radio" name="qlevel" id="qlevel-basic" value="basic"' + (state.level === 'basic' ? ' checked' : '') + '>' + N.u('quizLevelBasic') + '</label>' +
        '<label><input type="radio" name="qlevel" id="qlevel-all" value="all"' + (state.level === 'all' ? ' checked' : '') + '>' + N.u('quizLevelAll') + '</label></div></fieldset>' +
        '<fieldset><legend>' + N.u('quizHowMany') + '</legend><div class="choice-row">' +
        [5, 10, 20, 0].map(function (n) {
          return '<label><input type="radio" name="qcount" id="qcount-' + n + '" value="' + n + '"' + (state.count === n ? ' checked' : '') + '>' + (n || N.u('quizAll')) + '</label>';
        }).join('') + '</div></fieldset>' +
        '<div><button type="submit" class="btn btn-primary">' + N.icon('arrow') + N.u('quizStart') + '</button></div></form>';
      const form = N.$('#quiz-setup', root);
      form.addEventListener('change', function () {
        const fd = new FormData(form);
        state.set = fd.get('qset'); state.level = fd.get('qlevel'); state.count = Number(fd.get('qcount'));
        if (this && document.activeElement && document.activeElement.name === 'qlevel') setup();
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const fd = new FormData(form);
        state.set = fd.get('qset'); state.level = fd.get('qlevel'); state.count = Number(fd.get('qcount'));
        let qs = N.shuffle(pool());
        if (state.count) qs = qs.slice(0, state.count);
        state.qs = qs; state.i = 0; state.answers = []; state.answered = false;
        question();
      });
    }

    function progress() {
      const n = state.qs.length;
      return '<div class="quiz-progress"><span>' + N.u('question') + ' ' + (state.i + 1) + ' / ' + n + '</span><span class="bar"><span style="width:' + ((state.i / n) * 100) + '%"></span></span></div>';
    }

    function question() {
      const q = state.qs[state.i];
      if (!q) { results(); return; }
      state.answered = false;
      let body = '';
      if (q.type === 'tf') {
        body = '<div class="options">' + [true, false].map(function (v, i) {
          return '<button type="button" class="opt" data-v="' + v + '"><span class="letter">' + 'AB'[i] + '</span>' + N.u(v ? 'trueLabel' : 'falseLabel') + '</button>';
        }).join('') + '</div>';
      } else if (q.type === 'hotspot') {
        const ans0 = Array.isArray(q.answer) ? q.answer[0] : q.answer;
        const lvl = (N.structure(topicId, ans0) || {}).level === 'deeper' ? 'deeper' : 'basic';
        body = '<p class="act-help">' + N.u('clickOnModel') + '</p><div class="quiz-hotspot"><figure class="slide">' + N.renderDiagram(q.diagram, { interactive: true, level: lvl, scale: false }) + '</figure></div>';
      } else {
        const multi = q.type === 'multi';
        body = (multi ? '<p class="act-help">' + N.u('chooseAll') + '</p>' : '') + '<div class="options">' + q.options.map(function (o, i) {
          return '<button type="button" class="opt" data-i="' + i + '"' + (multi ? ' aria-pressed="false"' : '') + '><span class="letter">' + 'ABCDEF'[i] + '</span><span>' + N.fmt(o) + '</span></button>';
        }).join('') + '</div>' + (multi ? '<div><button type="button" class="btn btn-primary" data-answer-multi>' + N.icon('check') + N.u('answer') + '</button></div>' : '');
      }
      root.innerHTML = '<div class="quiz-card" data-read-scope>' + progress() +
        '<p class="quiz-q" data-say>' + N.fmt(q.q) + '</p>' +
        '<div><button type="button" class="read-btn" data-read="section">' + N.icon('speaker') + N.u('readAloud') + '</button></div>' +
        body + '<div class="fb" hidden></div><div class="act-bar" data-next hidden></div></div>';
      if (q.type === 'hotspot') {
        const svg = N.$('svg.diagram', root);
        N.wireDiagram(svg, { interactive: true, onSelect: function (id) { if (!state.answered) finish(Array.isArray(q.answer) ? q.answer.indexOf(id) >= 0 : id === q.answer, id, svg); } });
      }
      const first = N.$('.opt, svg [tabindex]', root);
      N.$('.quiz-q', root).setAttribute('tabindex', '-1');
      N.$('.quiz-q', root).focus({ preventScroll: true });
      if (first && false) first.focus();
    }

    function finish(correct, given, svg) {
      const q = state.qs[state.i];
      state.answered = true;
      state.answers.push({ q: q, correct: correct, given: given });
      if (q.type === 'hotspot' && svg) {
        const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
        svg.classList.add('has-selection');
        N.$$('[data-part]', svg).forEach(function (g) {
          g.removeAttribute('tabindex'); g.style.pointerEvents = 'none';
          const hit = answers.indexOf(g.dataset.part) >= 0;
          g.classList.toggle('is-selected', hit);
          if (hit) g.classList.add('is-flash');
        });
      }
      N.$$('.opt', root).forEach(function (b) { b.disabled = true; });
      const fb = N.$('.fb', root);
      fb.className = 'feedback ' + (correct ? 'good' : 'bad');
      let extra = '';
      if (!correct && q.type === 'hotspot') extra = '<p><strong>' + N.u('rightAnswer') + ':</strong> ' + N.esc((Array.isArray(q.answer) ? q.answer : [q.answer]).map(function (a) { return N.t(N.structure(topicId, a).name); }).join(', ')) + '</p>';
      fb.innerHTML = '<p class="fb-title">' + N.icon(correct ? 'check' : 'cross') + N.u(correct ? 'correct' : 'notQuite') + '</p>' + extra + '<p data-say>' + N.fmt(q.explain) + '</p>';
      fb.hidden = false;
      const nx = N.$('[data-next]', root);
      const last = state.i === state.qs.length - 1;
      nx.innerHTML = '<button type="button" class="btn btn-primary" data-go-next>' + N.icon('arrow') + N.u(last ? 'seeResult' : 'next') + '</button>';
      nx.hidden = false;
      N.$('[data-go-next]', root).focus({ preventScroll: true });
      fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function results() {
      const n = state.answers.length;
      const ok = state.answers.filter(function (a) { return a.correct; }).length;
      const pct = n ? Math.round((ok / n) * 100) : 0;
      const msg = pct >= 85 ? 'resultGreat' : pct >= 55 ? 'resultGood' : 'resultKeep';
      const wrong = state.answers.filter(function (a) { return !a.correct; });
      root.innerHTML = '<div class="quiz-card"><h2>' + N.u('resultTitle') + '</h2>' +
        '<div class="score-ring" style="--p:' + pct + '"><div>' + ok + '/' + n + '<small>' + pct + ' %</small></div></div>' +
        '<p style="text-align:center;font-size:1.1rem">' + N.u(msg) + '</p>' +
        (wrong.length ? '<h3>' + N.u('reviewThese') + '</h3><ul class="review-list">' + wrong.map(function (a) {
          const q = a.q;
          let right = '';
          if (q.type === 'tf') right = N.u(q.answer ? 'trueLabel' : 'falseLabel');
          else if (q.type === 'hotspot') right = (Array.isArray(q.answer) ? q.answer : [q.answer]).map(function (a) { return N.t(N.structure(topicId, a).name); }).join(', ');
          else if (q.type === 'multi') right = q.answer.map(function (i) { return N.plain(q.options[i]); }).join(', ');
          else right = N.plain(q.options[q.answer]);
          return '<li><strong>' + N.fmt(q.q) + '</strong><span><span style="color:var(--good);font-weight:700">' + N.u('rightAnswer') + ':</span> ' + N.esc(right) + '</span>' +
            '<span style="color:var(--muted);font-size:.95rem">' + N.fmt(q.explain) + '</span>' +
            (q.page ? '<a href="#' + topicId + '-' + q.page + (T.organisms && T.organisms[q.page] ? '-les' : '') + '">' + N.u('readAbout') + ' →</a>' : '') + '</li>';
        }).join('') + '</ul>' : '') +
        '<div class="act-bar"><button type="button" class="btn btn-primary" data-again>' + N.icon('retry') + N.u('newQuiz') + '</button></div></div>';
    }

    root.addEventListener('click', function (e) {
      const b = e.target.closest('button');
      if (!b || !root.contains(b)) return;
      const q = state.qs[state.i];
      if (b.hasAttribute('data-go-next')) { state.i++; question(); root.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
      if (b.hasAttribute('data-again')) { setup(); return; }
      if (!q || state.answered) return;
      if (b.classList.contains('opt')) {
        if (q.type === 'tf') {
          const v = b.dataset.v === 'true';
          N.$$('.opt', root).forEach(function (x) { if ((x.dataset.v === 'true') === q.answer) x.classList.add('is-correct'); });
          if (v !== q.answer) b.classList.add('is-wrong');
          finish(v === q.answer, v);
        } else if (q.type === 'multi') {
          b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
          b.classList.toggle('is-picked', b.getAttribute('aria-pressed') === 'true');
        } else {
          const i = Number(b.dataset.i);
          N.$$('.opt', root).forEach(function (x) { if (Number(x.dataset.i) === q.answer) x.classList.add('is-correct'); });
          if (i !== q.answer) b.classList.add('is-wrong');
          finish(i === q.answer, i);
        }
      }
      if (b.hasAttribute('data-answer-multi')) {
        const picked = N.$$('.opt[aria-pressed="true"]', root).map(function (x) { return Number(x.dataset.i); }).sort();
        const want = q.answer.slice().sort();
        const correct = picked.length === want.length && picked.every(function (v, k) { return v === want[k]; });
        N.$$('.opt', root).forEach(function (x) {
          const i = Number(x.dataset.i);
          x.classList.remove('is-picked');
          if (want.indexOf(i) >= 0) x.classList.add('is-correct');
          else if (picked.indexOf(i) >= 0) x.classList.add('is-wrong');
        });
        b.disabled = true;
        finish(correct, picked);
      }
    });

    setup();
  };
})();
