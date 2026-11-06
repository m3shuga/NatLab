/* =====================================================================
   NatLab – kjerne (core)
   Felles verktøy: språk, innstillinger, tekstformatering.
   Du trenger IKKE endre denne filen for å legge til eller endre innhold.
   ===================================================================== */
(function () {
  'use strict';

  const N = (window.NatLab = window.NatLab || {});
  N.topics = N.topics || {};      // alle temaer (fylles av filene i content/)
  N.registry = N.registry || [];  // rekkefølgen på temaene på forsiden
  N.ui = N.ui || {};              // knappetekster o.l. (content/ui.js)
  N.diagrams = N.diagrams || {};  // tegninger (SVG) som kan klikkes på
  N.figures = N.figures || {};    // andre tegninger (f.eks. virussyklus)

  /** Hent (eller opprett) et tema, f.eks. NatLab.topic('celler') */
  N.topic = function (id) {
    return N.topics[id] || (N.topics[id] = { id: id });
  };

  /* ---------- Innstillinger (lagres bare i elevens egen nettleser) ---------- */
  const KEY = 'natlab.innstillinger.v1';
  const DEFAULTS = {
    lang: 'nb',          // 'nb' (bokmål) eller 'en' (engelsk)
    font: 'standard',    // 'standard' eller 'dyslexic'
    size: 1,             // 0 = normal, 1 = stor, 2 = ekstra stor
    spacing: 'normal',   // 'normal' eller 'wide'
    theme: 'auto',       // 'auto', 'light' eller 'dark'
    rate: 1,             // opplesingshastighet
    level: 'basic'       // 'basic' (grunnleggende) eller 'deeper' (gå dypere)
  };

  function loadSettings() {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
    return Object.assign({}, DEFAULTS, saved);
  }
  N.settings = loadSettings();

  N.saveSettings = function () {
    try { localStorage.setItem(KEY, JSON.stringify(N.settings)); } catch (e) { /* privat modus o.l. */ }
  };

  N.resetSettings = function () {
    N.settings = Object.assign({}, DEFAULTS);
    try { localStorage.removeItem(KEY); } catch (e) { /* ignorer */ }
  };

  N.applySettings = function () {
    const r = document.documentElement;
    const s = N.settings;
    r.lang = s.lang === 'en' ? 'en' : 'nb';
    r.dataset.font = s.font;
    r.dataset.size = String(s.size);
    r.dataset.spacing = s.spacing;
    r.dataset.level = s.level;
    if (s.theme === 'light' || s.theme === 'dark') r.setAttribute('data-theme', s.theme);
    else r.removeAttribute('data-theme');
  };

  /* ---------- Språk ---------- */
  N.dev = /[?&]dev\b/.test(location.search) || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  N.missing = [];

  /** Velg riktig språk fra { nb: '...', en: '...' } */
  N.t = function (v) {
    if (v == null) return '';
    if (typeof v === 'string' || typeof v === 'number') return String(v);
    const l = N.settings.lang;
    if (v[l] != null && (v[l] !== '' || !(v.nb || v.en))) return v[l];
    const fallback = v.nb != null ? v.nb : (v.en != null ? v.en : '');
    if (N.missing.length < 200) N.missing.push({ lang: l, text: String(fallback).slice(0, 80) });
    return fallback;
  };

  /** Hent en fast tekst fra content/ui.js */
  N.u = function (key) {
    const e = N.ui[key];
    if (!e) { if (N.dev) console.warn('Mangler UI-tekst:', key); return key; }
    return N.t(e);
  };

  /* ---------- HTML-hjelpere ---------- */
  N.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  /** Finn et ord i ordlistene til alle temaer */
  N.findTerm = function (id) {
    for (const k in N.topics) {
      const g = N.topics[k].glossary;
      if (g && g[id]) return Object.assign({ id: id, topic: k }, g[id]);
    }
    return null;
  };

  /**
   * Gjør om enkel markering i tekst til HTML:
   *   **viktig**          -> uthevet nøkkelord
   *   [[ord-id]]          -> ord fra ordlisten (kan klikkes)
   *   [[ord-id|vist tekst]]
   *   CO2 / H2O skrives helst med ₂ direkte i teksten.
   */
  N.fmt = function (v) {
    let s = N.esc(N.t(v));
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong class="key">$1</strong>');
    s = s.replace(/\[\[([a-z0-9æøå_]+)(?:\|([^\]]+))?\]\]/gi, function (m, id, label) {
      const term = N.findTerm(id);
      const text = label || (term ? N.t(term.name).toLowerCase() : id);
      if (!term) { if (N.dev) console.warn('Fant ikke ordet i ordlisten:', id); return text; }
      return '<button type="button" class="term" data-term="' + id + '">' + text + '</button>';
    });
    return s;
  };

  /** Tekst uten markering (til opplesing og alt-tekst) */
  N.plain = function (v) {
    return N.t(v)
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\[\[([a-z0-9æøå_]+)\|([^\]]+)\]\]/gi, '$2')
      .replace(/\[\[([a-z0-9æøå_]+)\]\]/gi, function (m, id) {
        const term = N.findTerm(id); return term ? N.t(term.name).toLowerCase() : id;
      });
  };

  N.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  };

  N.$ = function (sel, root) { return (root || document).querySelector(sel); };
  N.$$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /** Liten melding nederst på skjermen */
  N.toast = function (msg, ms) {
    let el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    clearTimeout(N._toastTimer);
    N._toastTimer = setTimeout(function () { el.hidden = true; }, ms || 4000);
  };

  /** Ikoner (enkle SVG-er, tegnet for NatLab) */
  N.icon = function (name) {
    const p = {
      gear: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.5-2-3.5-2.4 1a7.6 7.6 0 0 0-2.6-1.5L14 2.5h-4l-.4 2.5A7.6 7.6 0 0 0 7 6.5l-2.4-1-2 3.5 2 1.5a7.6 7.6 0 0 0 0 3l-2 1.5 2 3.5 2.4-1a7.6 7.6 0 0 0 2.6 1.5l.4 2.5h4l.4-2.5a7.6 7.6 0 0 0 2.6-1.5l2.4 1 2-3.5z"/>',
      speaker: '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/>',
      pause: '<path d="M8 5.5v13M16 5.5v13"/>',
      play: '<path d="M7 5l12 7-12 7z"/>',
      stop: '<rect x="6" y="6" width="12" height="12" rx="1.5"/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
      ext: '<path d="M14 5h5v5M19 5l-8 8"/><path d="M17 14v5H5V7h5"/>',
      video: '<rect x="3" y="5.5" width="18" height="13" rx="3"/><path d="M10 9.5v5l4.5-2.5z"/>',
      doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
      check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
      cross: '<path d="M6 6l12 12M18 6L6 18"/>',
      up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
      down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
      search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
      menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
      lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
      retry: '<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4.5v4h4"/>',
      eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
      layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
      compare: '<rect x="3" y="4" width="7.5" height="16" rx="2"/><rect x="13.5" y="4" width="7.5" height="16" rx="2"/>',
      flask: '<path d="M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7.5 15h9"/>',
      planet: '<circle cx="12" cy="12" r="5.5"/><path d="M3.5 15.5c-1.5 2.2 4 1.8 9.5-1.4s8.4-7.6 6.6-8.2"/>',
      bolt: '<path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z"/>',
      target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
      book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
      quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7v.5"/><circle cx="12" cy="17.2" r=".6"/>',
      ruler: '<rect x="2.5" y="8" width="19" height="8" rx="1.5"/><path d="M6.5 8v3M10 8v4.5M13.5 8v3M17 8v4.5"/>',
      puzzle: '<path d="M10 4.5a2 2 0 1 1 4 0V6h4v4h-1.5a2 2 0 1 0 0 4H18v4h-4v-1.5a2 2 0 1 0-4 0V18H6v-4h1.5a2 2 0 1 0 0-4H6V6h4z"/>'
    }[name] || '';
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + p + '</svg>';
  };
})();
