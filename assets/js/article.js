/* =====================================================================
   NatLab – artikler (tekstsider med faktabokser, kilder osv.)
   Byggeklossene som kan brukes i innholdsfilene er beskrevet i README.md.
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  let fid = 0;

  function ctx(topicId) {
    const T = N.topics[topicId];
    const order = [];
    return {
      topic: topicId,
      T: T,
      order: order,
      cite: function (ids) {
        if (!ids || !ids.length) return '';
        return '<span class="cite">' + ids.map(function (id) {
          if (!T.sources[id]) { if (N.dev) console.warn('Ukjent kilde:', id); return ''; }
          let n = order.indexOf(id);
          if (n < 0) { order.push(id); n = order.length - 1; }
          return '<a href="#" data-scroll="kilde-' + (n + 1) + '" aria-label="' + N.esc(N.u('source') + ' ' + (n + 1)) + '">' + (n + 1) + '</a>';
        }).join('') + '</span>';
      }
    };
  }

  const coTitle = function (icon, text) { return '<p class="co-title">' + N.icon(icon) + text + '</p>'; };

  function photo(c, id, caption) {
    const m = (c.T.media || {})[id];
    if (!m) return '';
    return '<figure class="photo"><img src="' + m.file + '" alt="' + N.esc(N.t(m.alt)) + '" width="' + m.width + '" height="' + m.height + '" loading="lazy" decoding="async">' +
      '<figcaption>' + (caption ? '<span data-say>' + N.fmt(caption) + '</span> ' : '') +
      '<span class="credit">' + N.esc(N.t({ nb: 'Foto', en: 'Photo' })) + ': ' + N.esc(m.author) + ', <a href="' + N.esc(m.url) + '" target="_blank" rel="noopener">' + N.esc(m.source) + '</a>, ' +
      (m.licenseUrl ? '<a href="' + N.esc(m.licenseUrl) + '" target="_blank" rel="noopener">' + N.esc(m.license) + '</a>' : N.esc(m.license)) + '</span></figcaption></figure>';
  }

  function block(c, b) {
    if (b.p) return '<p data-say>' + N.fmt(b.p) + c.cite(b.src) + '</p>';
    if (b.h3) return '<h3 data-say>' + N.esc(N.t(b.h3)) + '</h3>';
    if (b.list) return '<ul>' + b.list.map(function (x) { return '<li data-say>' + N.fmt(x) + '</li>'; }).join('') + '</ul>' + (b.src ? '<p style="margin-top:-.6rem">' + c.cite(b.src) + '</p>' : '');
    if (b.keypoints) return '<div class="keypoints"><h3>' + N.u('keyPoints') + '</h3><ul>' + b.keypoints.map(function (x) { return '<li><span data-say>' + N.fmt(x) + '</span></li>'; }).join('') + '</ul></div>';
    if (b.fact) return '<div class="callout fact">' + coTitle('eye', N.u('didYouKnow')) + '<p data-say>' + N.fmt(b.fact) + c.cite(b.src) + '</p></div>';
    if (b.myth) return '<div class="callout misconception">' + coTitle('cross', N.u('misconception')) +
      '<p data-say><span class="myth">' + N.fmt(b.myth) + '</span></p><p data-say>' + N.fmt(b.truth) + c.cite(b.src) + '</p></div>';
    if (b.model) return '<div class="callout model">' + coTitle('layers', N.u('modelLimits')) + '<p data-say>' + N.fmt(b.model) + c.cite(b.src) + '</p></div>';
    if (b.history) return '<div class="callout history">' + coTitle('book', b.title ? N.esc(N.t(b.title)) : N.u('history')) + '<p data-say>' + N.fmt(b.history) + c.cite(b.src) + '</p></div>';
    if (b.photo) return photo(c, b.photo, b.caption);
    if (b.photos) return '<div class="photo-pair">' + b.photos.map(function (x) { return photo(c, x.photo, x.caption); }).join('') + '</div>';
    if (b.equation) {
      const e = b.equation;
      return '<div class="equation"><span class="eq-name">' + N.esc(N.t(e.name)) + '</span><span class="eq" data-say>' + N.esc(N.t(e.words)) + '</span>' +
        (e.formula ? '<span class="eq-words" aria-hidden="true">' + N.esc(e.formula) + '</span>' : '') + '</div>';
    }
    if (b.explain) return '<div class="prompt"><span class="p-icon">' + N.icon('doc') + '</span><div><p class="co-title">' + N.u('explainOwnWords') + '</p><p data-say>' + N.fmt(b.explain) + '</p></div></div>';
    if (b.discuss) return '<div class="prompt"><span class="p-icon">' + N.icon('compare') + '</span><div><p class="co-title">' + N.u('discuss') + '</p><p data-say>' + N.fmt(b.discuss) + '</p></div></div>';
    if (b.check) {
      const q = b.check, id = 'chk' + (++fid);
      return '<div class="check" data-check="' + id + '" data-answer="' + q.answer + '"><p class="co-title">' + N.u('checkYourself') + '</p><p data-say><strong>' + N.fmt(q.q) + '</strong></p>' +
        '<div class="options">' + q.options.map(function (o, i) {
          return '<button type="button" class="opt" data-i="' + i + '"><span class="letter">' + 'ABCD'[i] + '</span><span>' + N.fmt(o) + '</span></button>';
        }).join('') + '</div><div class="fb" hidden data-explain="' + N.esc(N.fmt(q.explain)) + '"></div></div>';
    }
    if (b.deeper) {
      const open = N.settings.level === 'deeper' ? ' open' : '';
      return '<details class="deeper"' + open + '><summary><span class="sum-inner"><span class="badge deeper">' + N.u('goDeeper') + '</span><span class="sum-title">' + N.esc(N.t(b.deeper.title)) + '</span><span class="sum-sign" aria-hidden="true"></span></span></summary><div class="deeper-body">' +
        b.deeper.blocks.map(function (x) { return block(c, x); }).join('') + '</div></details>';
    }
    if (b.steps) {
      const fig = N.figures[b.steps.figure];
      const p = 'f' + (++fid) + '-';
      return '<div class="stepper" data-stepper data-n="' + b.steps.steps.length + '">' +
        '<div class="slide show-1"><svg viewBox="' + fig.viewBox + '" role="img" aria-label="' + N.esc(N.t(b.steps.title)) + '">' + fig.draw(p, N.t) + '</svg></div>' +
        '<div class="st-controls"><button type="button" class="btn btn-sm" data-st-prev>' + N.icon('back') + '<span class="sr-only">' + N.u('previous') + '</span></button>' +
        '<div class="st-dots">' + b.steps.steps.map(function (s, i) { return '<button type="button" data-st-go="' + (i + 1) + '" aria-label="' + N.u('step') + ' ' + (i + 1) + '"' + (i === 0 ? ' aria-current="step"' : '') + '>' + (i + 1) + '</button>'; }).join('') + '</div>' +
        '<button type="button" class="btn btn-sm" data-st-next>' + N.icon('arrow') + '<span class="sr-only">' + N.u('next') + '</span></button></div>' +
        b.steps.steps.map(function (s, i) {
          return '<div class="st-text" data-st-text="' + (i + 1) + '"' + (i ? ' hidden' : '') + '><h3 data-say>' + N.u('step') + ' ' + (i + 1) + ': ' + N.esc(N.t(s.title)) + '</h3><p data-say>' + N.fmt(s.text) + '</p></div>';
        }).join('') + (b.steps.src ? '<p class="sp-src" style="border:0;padding:0">' + c.cite(b.steps.src) + '</p>' : '') + '</div>';
    }
    if (b.table) {
      const tb = b.table;
      return '<div class="table-wrap"><table class="grid-table"><thead><tr>' + tb.head.map(function (h) { return '<th scope="col">' + N.esc(N.t(h)) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        tb.rows.map(function (r) { return '<tr>' + r.map(function (cell, i) { return i === 0 ? '<th scope="row" data-say>' + N.fmt(cell) + '</th>' : '<td data-say>' + N.fmt(cell) + '</td>'; }).join('') + '</tr>'; }).join('') +
        '</tbody></table></div>' + (b.src ? '<p style="font-size:.85rem;color:var(--muted)">' + N.u('sources') + ' ' + c.cite(b.src) + '</p>' : '');
    }
    if (b.grid) return N.structureGrid(c.topic, b.grid);
    if (b.diagram) {
      return '<figure class="slide" style="max-width:520px">' + N.renderDiagram(b.diagram, { level: 'basic', scale: true }) + '<figcaption>' + N.esc(N.t(N.diagrams[b.diagram].title)) + '</figcaption></figure>';
    }
    console.warn('Ukjent byggekloss', b);
    return '';
  }

  /** Tabell: hvilke deler finnes i hvilke organismer */
  N.structureGrid = function (topicId, rows) {
    const T = N.topics[topicId];
    const cols = Object.keys(T.orgNames);
    const mark = function (v) {
      if (v === true) return '<span class="yes-mark">' + N.icon('check') + '<span class="sr-only">' + N.t({ nb: 'ja', en: 'yes' }) + '</span></span>';
      if (v === 'noen') return '<span class="some-mark">' + N.t({ nb: 'noen', en: 'some' }) + '</span>';
      return '<span class="no-mark">–<span class="sr-only">' + N.t({ nb: 'nei', en: 'no' }) + '</span></span>';
    };
    return '<div class="table-wrap"><table class="grid-table"><thead><tr><th scope="col">' + N.u('part') + '</th>' +
      cols.map(function (k) { return '<th scope="col" class="c">' + N.esc(N.t(T.orgNames[k])) + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (id) {
        const s = T.structures[id];
        return '<tr><th scope="row"><span class="row-name"><span class="swatch" style="--c:' + s.color + '"></span>' + N.esc(N.t(s.name)) + '</span></th>' +
          cols.map(function (k) { return '<td class="c">' + mark((s.foundIn || {})[k]) + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  };

  N.resourceCards = function (topicId, ids) {
    const T = N.topics[topicId];
    return '<div class="res-grid">' + ids.map(function (id) {
      const s = T.sources[id];
      if (!s) return '';
      const isVideo = s.type === 'video';
      const langKey = { nb: 'langNb', en: 'langEn', da: 'langDa' }[s.lang] || 'langNb';
      return '<a class="res-card ' + (isVideo ? 'video' : 'doc') + '" href="' + N.esc(s.url) + '" target="_blank" rel="noopener">' +
        '<span class="ri">' + N.icon(isVideo ? 'video' : 'doc') + '</span><span style="display:grid;gap:.2rem;min-width:0">' +
        '<span class="rt">' + N.esc(s.title) + '</span>' +
        '<span class="rm"><span>' + N.u(isVideo ? 'video' : 'article') + ' · ' + N.u(langKey) + '</span><span>' + N.esc(s.publisher) + '</span>' +
        (s.login ? '<span class="badge login">' + N.icon('lock') + N.u('requiresLogin') + '</span>' : '') + '</span></span>' +
        '<span class="sr-only">(' + N.t({ nb: 'åpnes i ny fane', en: 'opens in a new tab' }) + ')</span></a>';
    }).join('') + '</div>';
  };

  function sourcesList(c) {
    if (!c.order.length) return '';
    return '<section class="sources" aria-labelledby="kilder-h"><h2 id="kilder-h">' + N.u('sources') + '</h2><p style="color:var(--muted);font-size:.95rem">' + N.u('sourcesLead') + '</p><ol>' +
      c.order.map(function (id, i) {
        const s = c.T.sources[id];
        return '<li id="kilde-' + (i + 1) + '"><a href="' + N.esc(s.url) + '" target="_blank" rel="noopener">' + N.esc(s.title) + '</a>. ' + N.esc(s.publisher) + '. ' +
          '<span class="src-meta">' + N.t({ nb: 'Lest', en: 'Accessed' }) + ' ' + s.checked.split('-').reverse().join('.') + '</span></li>';
      }).join('') + '</ol></section>';
  }

  /** Lag hele artikkelen */
  N.renderArticle = function (topicId, page) {
    const c = ctx(topicId);
    let html = '';
    if (page.goals && page.goals.length) {
      html += '<div class="goals-box"><p class="eyebrow">' + N.u('afterThisPage') + '</p><ul>' + page.goals.map(function (g) { return '<li>' + N.icon('target') + '<span data-say>' + N.fmt(g) + '</span></li>'; }).join('') + '</ul></div>';
    }
    if (page.keypoints) html += block(c, { keypoints: page.keypoints });
    (page.sections || []).forEach(function (s) {
      html += '<section id="s-' + s.id + '" data-read-scope aria-labelledby="h-' + s.id + '"><h2 id="h-' + s.id + '"><span data-say>' + N.esc(N.t(s.title)) + '</span>' +
        '<button type="button" class="read-btn" data-read="section">' + N.icon('speaker') + N.u('readAloud') + '</button></h2>' +
        s.blocks.map(function (b) { return block(c, b); }).join('') + '</section>';
    });
    if (page.resources && page.resources.length) {
      html += '<section id="s-laer-mer" aria-labelledby="h-laer-mer"><h2 id="h-laer-mer">' + N.u('learnMore') + '</h2><p style="color:var(--muted)">' + N.u('learnMoreLead') + '</p>' + N.resourceCards(topicId, page.resources) + '</section>';
    }
    html += sourcesList(c);
    const toc = '<nav class="toc" aria-label="' + N.esc(N.u('onThisPage')) + '"><p class="eyebrow">' + N.u('onThisPage') + '</p>' +
      (page.sections || []).map(function (s) { return '<a href="#" data-scroll="s-' + s.id + '">' + N.esc(N.t(s.title)) + '</a>'; }).join('') +
      (page.resources ? '<a href="#" data-scroll="s-laer-mer">' + N.u('learnMore') + '</a>' : '') +
      (c.order.length ? '<a href="#" data-scroll="kilder-h">' + N.u('sources') + '</a>' : '') + '</nav>';
    return '<div class="article-layout"><article class="prose">' + html + '</article><aside>' + toc + '</aside></div>';
  };

  /** Gjør sjekk-spørsmål og trinnfigurer interaktive */
  N.wireArticle = function (root) {
    N.$$('[data-check]', root).forEach(function (box) {
      const ans = Number(box.dataset.answer);
      N.$$('.opt', box).forEach(function (btn) {
        btn.addEventListener('click', function () {
          const i = Number(btn.dataset.i);
          N.$$('.opt', box).forEach(function (b) {
            b.disabled = true;
            if (Number(b.dataset.i) === ans) b.classList.add('is-correct');
          });
          if (i !== ans) btn.classList.add('is-wrong');
          const fb = N.$('.fb', box);
          fb.className = 'feedback ' + (i === ans ? 'good' : 'bad');
          fb.innerHTML = '<p class="fb-title">' + N.icon(i === ans ? 'check' : 'cross') + N.u(i === ans ? 'correct' : 'notQuite') + '</p><p data-say>' + fb.dataset.explain + '</p>';
          fb.hidden = false;
        });
      });
    });
    N.$$('[data-stepper]', root).forEach(function (st) {
      const n = Number(st.dataset.n);
      let cur = 1;
      const go = function (k) {
        cur = Math.max(1, Math.min(n, k));
        const slide = N.$('.slide', st);
        slide.className = 'slide show-' + cur;
        N.$$('[data-st-go]', st).forEach(function (b) { if (Number(b.dataset.stGo) === cur) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
        N.$$('[data-st-text]', st).forEach(function (t) { t.hidden = Number(t.dataset.stText) !== cur; });
        N.$('[data-st-prev]', st).disabled = cur === 1;
        N.$('[data-st-next]', st).disabled = cur === n;
      };
      st.addEventListener('click', function (e) {
        const b = e.target.closest('button');
        if (!b) return;
        if (b.hasAttribute('data-st-prev')) go(cur - 1);
        if (b.hasAttribute('data-st-next')) go(cur + 1);
        if (b.dataset.stGo) go(Number(b.dataset.stGo));
      });
      go(1);
    });
  };
})();
