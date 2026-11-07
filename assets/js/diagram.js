/* =====================================================================
   NatLab – tegninger og utforskeren (klikk på delene)
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  let uid = 0;

  N.structure = function (topicId, id) { return ((N.topics[topicId] || {}).structures || {})[id]; };
  N.partLevel = function (def, part) { return part.level || (N.structure(def.topic, part.id) || {}).level || 'basic'; };
  N.visibleParts = function (def, level) {
    return def.parts.filter(function (pt) { return level === 'deeper' || N.partLevel(def, pt) !== 'deeper'; });
  };
  N.otherLang = function (v) {
    if (!v || typeof v === 'string') return '';
    return N.settings.lang === 'en' ? (v.nb || '') : (v.en || '');
  };

  /** Lag SVG-kode for en tegning */
  N.renderDiagram = function (id, o) {
    o = o || {};
    const def = N.diagrams[id];
    if (!def) return '<p>Mangler tegning: ' + N.esc(id) + '</p>';
    const p = 'd' + (++uid) + '-';
    const level = o.level || N.settings.level;
    const vis = N.visibleParts(def, level);
    let pins = '';
    if (o.pins) {
      vis.forEach(function (pt, i) {
        const lab = o.pinLabel ? o.pinLabel(i, pt) : String(i + 1);
        pins += '<g class="pin" data-pin="' + pt.id + '" data-index="' + i + '"><circle cx="' + pt.at[0].toFixed(1) + '" cy="' + pt.at[1].toFixed(1) + '" r="16"/>' +
          '<text x="' + pt.at[0].toFixed(1) + '" y="' + pt.at[1].toFixed(1) + '">' + N.esc(lab) + '</text></g>';
      });
    }
    let scale = '';
    if (def.scale && o.scale !== false) {
      const s = def.scale;
      scale = '<g class="scalebar" aria-hidden="true"><line x1="' + s.x1 + '" y1="' + s.y + '" x2="' + s.x2 + '" y2="' + s.y + '"/>' +
        '<line x1="' + s.x1 + '" y1="' + (s.y - 7) + '" x2="' + s.x1 + '" y2="' + (s.y + 7) + '"/><line x1="' + s.x2 + '" y1="' + (s.y - 7) + '" x2="' + s.x2 + '" y2="' + (s.y + 7) + '"/>' +
        '<text x="' + ((s.x1 + s.x2) / 2) + '" y="' + (s.y - 11) + '">' + s.label + '</text></g>';
    }
    const cls = 'diagram' + (o.interactive ? ' is-interactive' : '');
    const label = N.t(def.title);
    return '<svg class="' + cls + '" viewBox="' + def.viewBox + '" data-diagram="' + id + '" data-level="' + level + '" ' +
      (o.interactive ? 'role="group" aria-label="' + N.esc(label) + '"' : 'role="img" aria-label="' + N.esc(label) + '"') + '>' +
      def.draw(p, N.t) + scale + '<g class="pins">' + pins + '</g></svg>';
  };

  /** Gjør delene i en tegning klikkbare */
  N.wireDiagram = function (svg, o) {
    o = o || {};
    const def = N.diagrams[svg.dataset.diagram];
    const level = svg.dataset.level;
    const visIds = N.visibleParts(def, level).map(function (p) { return p.id; });
    N.$$('[data-part]', svg).forEach(function (g) {
      const id = g.dataset.part;
      g.classList.add('part');
      if (visIds.indexOf(id) < 0) { g.classList.add('is-off'); return; }
      if (!o.interactive) return;
      const s = N.structure(def.topic, id);
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', s ? N.t(s.name) : id);
      g.addEventListener('click', function (e) { e.stopPropagation(); o.onSelect && o.onSelect(id, svg); });
      g.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); o.onSelect && o.onSelect(id, svg); }
      });
    });
    if (o.interactive) {
      N.$$('.pin', svg).forEach(function (pin) {
        pin.style.cursor = 'pointer';
        pin.addEventListener('click', function (e) { e.stopPropagation(); o.onSelect && o.onSelect(pin.dataset.pin, svg); });
      });
    }
  };

  N.highlight = function (svg, id) {
    svg.classList.toggle('has-selection', !!id);
    N.$$('[data-part]', svg).forEach(function (g) { g.classList.toggle('is-selected', g.dataset.part === id); });
    N.$$('.pin', svg).forEach(function (g) { g.classList.toggle('is-selected', g.dataset.pin === id); });
  };

  function foundInHtml(topicId, s) {
    const T = N.topics[topicId];
    const names = T.orgNames || {};
    let h = '';
    Object.keys(names).forEach(function (k) {
      const v = (s.foundIn || {})[k];
      if (v === undefined || v === null) return;
      const cls = v === true ? 'yes' : (v === 'noen' ? 'some' : 'no');
      const extra = v === 'noen' ? ' (' + N.t({ nb: 'noen', en: 'some' }) + ')' : '';
      h += '<span class="' + cls + '">' + N.esc(N.t(names[k])) + extra + '</span>';
    });
    return h;
  }

  N.sourceLinks = function (topicId, ids) {
    const T = N.topics[topicId];
    return (ids || []).map(function (id) {
      const s = (T.sources || {})[id];
      if (!s) return '';
      return '<a href="' + N.esc(s.url) + '" target="_blank" rel="noopener">' + N.esc(s.publisher.replace(' (YouTube)', '')) + ': ' + N.esc(s.title) + '</a>';
    }).filter(Boolean).join(' · ');
  };

  /** Innholdet i panelet til høyre når en del er valgt */
  N.structurePanel = function (topicId, id, part) {
    const s = N.structure(topicId, id);
    if (!s) return '';
    const T = N.topics[topicId];
    const L = T.panelLabels || {};
    const lab = function (k, def) { return L[k] ? N.esc(N.t(L[k])) : N.u(def); };
    const alt = N.otherLang(s.name);
    const hasFound = s.foundIn && Object.keys(T.orgNames || {}).some(function (k) { return s.foundIn[k] !== undefined && s.foundIn[k] !== null; });
    return '<div class="sp-head" style="--c:' + s.color + '"><span class="sp-dot" aria-hidden="true"></span>' +
      '<h3 data-say>' + N.esc(N.t(s.name)) + '</h3>' +
      '<button type="button" class="read-btn" data-read="panel">' + N.icon('speaker') + N.u('readAloud') + '</button>' +
      (alt ? '<p class="alt-name"><span class="sr-only">' + N.esc(N.settings.lang === 'en' ? 'Norsk:' : 'Engelsk:') + '</span>' + N.esc(alt) + '</p>' : '') +
      '</div>' +
      (s.tag ? '<p class="sp-tag" data-say>' + N.esc(N.t(s.tag)) + '</p>' : '') +
      (s.level === 'deeper' ? '<p class="level-note">' + N.u('deeperNote') + '</p>' : '') +
      '<dl>' +
      (s.what ? '<div><dt>' + lab('what', 'whatIsIt') + '</dt><dd data-say>' + N.fmt(s.what) + '</dd></div>' : '') +
      (s.does ? '<div><dt>' + lab('does', 'whatDoes') + '</dt><dd data-say>' + N.fmt(s.does) + '</dd></div>' : '') +
      (part && part.note ? '<div><dt>' + N.u('inThisModel') + '</dt><dd data-say>' + N.fmt(part.note) + '</dd></div>' : '') +
      (s.analogy ? '<div class="analogy"><dt>' + lab('analogy', 'analogy') + '</dt><dd data-say>' + N.fmt(s.analogy) + '</dd></div>' : '') +
      (hasFound ? '<div><dt>' + N.u('foundIn') + '</dt><dd><div class="found-in">' + foundInHtml(topicId, s) + '</div>' +
        (s.foundNote ? '<p style="margin-top:.4rem;font-size:.92rem" data-say>' + N.fmt(s.foundNote) + '</p>' : '') + '</dd></div>' : '') +
      (s.fact ? '<div><dt>' + lab('fact', 'didYouKnow') + '</dt><dd data-say>' + N.fmt(s.fact) + '</dd></div>' : '') +
      '</dl>' +
      (s.src && s.src.length ? '<p class="sp-src">' + N.u('source') + ': ' + N.sourceLinks(topicId, s.src) + '</p>' : '');
  };

  /* =========================== UTFORSKEREN =========================== */
  N.explorer = function (root, cfg) {
    const topicId = cfg.topic;
    const state = {
      diagram: cfg.diagrams[0],
      level: N.settings.level,
      pins: true,
      compare: false,
      selected: null,
      paused: !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    };

    function partDef(diagramId, id) {
      return (N.diagrams[diagramId].parts || []).filter(function (p) { return p.id === id; })[0];
    }

    function shown() {
      return state.compare && cfg.compareWith ? [state.diagram, cfg.compareWith] : [state.diagram];
    }

    function render() {
      const ids = shown();
      const two = ids.length > 1;
      let tabs = '';
      if (cfg.diagrams.length > 1) {
        tabs = '<div class="seg" role="group" aria-label="' + N.esc(N.u('chooseModel')) + '">' + cfg.diagrams.map(function (d) {
          return '<button type="button" data-model="' + d + '" aria-pressed="' + (d === state.diagram) + '">' + N.esc(N.t(cfg.modelNames[d])) + '</button>';
        }).join('') + '</div>';
      }
      const anyDeeper = ids.some(function (d) { return N.diagrams[d].parts.some(function (pt) { return N.partLevel(N.diagrams[d], pt) === 'deeper'; }); });
      const toolbar = '<div class="ex-toolbar">' +
        (anyDeeper ? '<span class="label" id="lvl-label">' + N.u('levelLabel') + '</span>' +
        '<div class="seg" role="group" aria-labelledby="lvl-label"><button type="button" data-level="basic" aria-pressed="' + (state.level === 'basic') + '">' + N.u('levelBasic') + '</button>' +
        '<button type="button" data-level="deeper" aria-pressed="' + (state.level === 'deeper') + '">' + N.u('levelDeeper') + '</button></div>' : '') +
        (two ? '' : '<button type="button" class="btn btn-sm" data-pins aria-pressed="' + state.pins + '">' + N.icon('target') + N.u('showNumbers') + '</button>') +
        (ids.some(function (x) { return N.diagrams[x].animated; }) ? '<button type="button" class="btn btn-sm" data-anim aria-pressed="' + !state.paused + '">' + N.icon(state.paused ? 'play' : 'pause') + N.u(state.paused ? 'animPlay' : 'animPause') + '</button>' : '') +
        (cfg.compareWith ? '<button type="button" class="btn btn-sm" data-compare aria-pressed="' + state.compare + '">' + N.icon('compare') + (state.compare ? N.u('compareOff') : N.t(cfg.compareLabel)) + '</button>' : '') +
        '</div>';
      const figs = ids.map(function (d) {
        return '<figure class="slide">' + N.renderDiagram(d, { interactive: true, pins: state.pins && !two, level: state.level }) +
          '<figcaption>' + N.esc(N.t(N.diagrams[d].title)) + '</figcaption></figure>';
      }).join('');

      // Delene i listen (i kombinert rekkefølge ved sammenligning)
      const seen = {}, list = [];
      ids.forEach(function (d) {
        N.visibleParts(N.diagrams[d], state.level).forEach(function (pt) { if (!seen[pt.id]) { seen[pt.id] = 1; list.push(pt.id); } });
      });
      const legend = '<ul class="legend" aria-label="' + N.esc(N.u('partsList')) + '">' + list.map(function (id, i) {
        const s = N.structure(topicId, id);
        return '<li><button type="button" data-select="' + id + '" aria-pressed="' + (state.selected === id) + '" style="--c:' + s.color + '">' +
          '<span class="num" aria-hidden="true">' + (two ? '' : (i + 1)) + '</span>' + N.esc(N.t(s.name)) + '</button></li>';
      }).join('') + '</ul>';

      const hasDeeper = N.diagrams[state.diagram].parts.some(function (pt) { return N.partLevel(N.diagrams[state.diagram], pt) === 'deeper'; });
      let compareInfo = '';
      if (two) {
        const a = N.visibleParts(N.diagrams[ids[0]], state.level).map((x) => x.id);
        const b = N.visibleParts(N.diagrams[ids[1]], state.level).map((x) => x.id);
        const onlyA = a.filter((x) => b.indexOf(x) < 0), onlyB = b.filter((x) => a.indexOf(x) < 0);
        const nm = (x) => N.t(N.structure(topicId, x).name).toLowerCase();
        compareInfo = '<div class="callout model"><p class="co-title">' + N.icon('compare') + N.u('compareTitle') + '</p><p data-say>' + N.u('compareHint') + '</p>' +
          '<ul style="margin:0;padding-left:1.2rem">' +
          (onlyA.length ? '<li data-say><strong>' + N.u('onlyIn') + ' ' + N.esc(N.t(cfg.modelNames[ids[0]] || N.diagrams[ids[0]].title).toLowerCase()) + ':</strong> ' + onlyA.map(nm).join(', ') + '</li>' : '') +
          (onlyB.length ? '<li data-say><strong>' + N.u('onlyIn') + ' ' + N.esc(N.t(cfg.modelNames[ids[1]] || N.diagrams[ids[1]].title).toLowerCase()) + ':</strong> ' + onlyB.map(nm).join(', ') + '</li>' : '') +
          '</ul></div>';
      }

      root.innerHTML = '<div class="explorer">' +
        '<div class="ex-stage">' + tabs + toolbar +
        '<div class="ex-figures' + (two ? ' two' : '') + '">' + figs + '</div>' + compareInfo + legend +
        (state.level === 'basic' && hasDeeper ? '<p class="act-help" style="font-size:.92rem">' + N.u('deeperPartsHidden') + '</p>' : '') +
        '</div>' +
        '<aside class="ex-panel" id="ex-panel" aria-live="polite" tabindex="-1" data-read-scope></aside>' +
        '</div>';

      N.$$('svg.diagram', root).forEach(function (svg) {
        N.wireDiagram(svg, { interactive: true, onSelect: select });
        if (two) {
          const other = ids.filter((d) => d !== svg.dataset.diagram)[0];
          const otherIds = N.visibleParts(N.diagrams[other], state.level).map((x) => x.id);
          N.$$('[data-part]', svg).forEach(function (g) { if (otherIds.indexOf(g.dataset.part) < 0 && !g.classList.contains('is-off')) g.classList.add('unique-mark'); });
        }
      });
      if (state.selected && list.indexOf(state.selected) < 0) state.selected = null;
      N.$$('svg.diagram', root).forEach(function (svg) { if (state.paused && svg.pauseAnimations) svg.pauseAnimations(); });
      updateSelection(false);
    }

    function updateSelection(scroll) {
      N.$$('svg.diagram', root).forEach(function (svg) { N.highlight(svg, state.selected); });
      N.$$('[data-select]', root).forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.select === state.selected)); });
      const panel = N.$('#ex-panel', root);
      if (!state.selected) {
        panel.innerHTML = '<div class="panel-empty"><h3>' + N.u('pickPart') + '</h3><p>' + N.u('pickPartHelp') + '</p>' +
          (cfg.intro ? '<p data-say style="color:var(--ink)">' + N.fmt(cfg.intro) + '</p>' : '') + '</div>';
        return;
      }
      const d = shown().filter(function (x) { return partDef(x, state.selected); })[0] || state.diagram;
      panel.innerHTML = N.structurePanel(topicId, state.selected, partDef(d, state.selected));
      if (scroll && window.matchMedia('(max-width: 979px)').matches) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function select(id) {
      state.selected = state.selected === id ? null : id;
      N.readAloud && N.readAloud.stop();
      updateSelection(true);
    }

    root.addEventListener('click', function (e) {
      const t = e.target.closest('button');
      if (!t || !root.contains(t)) return;
      if (t.dataset.select) { select(t.dataset.select); return; }
      if (t.dataset.level) { state.level = t.dataset.level; render(); return; }
      if (t.hasAttribute('data-pins')) { state.pins = !state.pins; render(); return; }
      if (t.hasAttribute('data-compare')) { state.compare = !state.compare; render(); return; }
      if (t.hasAttribute('data-anim')) {
        state.paused = !state.paused;
        N.$$('svg.diagram', root).forEach(function (svg) { if (svg.pauseAnimations) { if (state.paused) svg.pauseAnimations(); else svg.unpauseAnimations(); } });
        t.setAttribute('aria-pressed', String(!state.paused));
        t.innerHTML = N.icon(state.paused ? 'play' : 'pause') + N.u(state.paused ? 'animPlay' : 'animPause');
        return;
      }
      if (t.dataset.model) { state.diagram = t.dataset.model; state.selected = null; render(); return; }
    });

    if (cfg.select) {
      state.selected = cfg.select;
      // åpne tegningen som har delen (hvis det ikke er den første)
      if (!partDef(state.diagram, cfg.select)) {
        const d = cfg.diagrams.filter(function (x) { return partDef(x, cfg.select); })[0];
        if (d) {
          state.diagram = d;
          if (N.partLevel(N.diagrams[d], partDef(d, cfg.select)) === 'deeper') state.level = 'deeper';
        }
      }
    }
    render();
  };
})();
