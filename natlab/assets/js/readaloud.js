/* =====================================================================
   NatLab – opplesing
   Bruker nettleserens innebygde talesyntese (Web Speech API).
   Ingen tekst eller data sendes fra NatLab til noen tjeneste.
   ===================================================================== */
(function () {
  'use strict';
  const N = window.NatLab;
  const synth = window.speechSynthesis;
  const RA = { queue: [], idx: 0, active: false, paused: false, current: null, warned: false };

  function voices() { try { return synth ? synth.getVoices() : []; } catch (e) { return []; } }

  N.pickVoice = function (lang) {
    const all = voices();
    if (lang === 'nb') {
      return all.filter((v) => /^(nb|no|nn)([-_]|$)/i.test(v.lang))[0] ||
        all.filter((v) => /norsk|norwegian/i.test(v.name))[0] || null;
    }
    return all.filter((v) => /^en[-_]GB/i.test(v.lang))[0] || all.filter((v) => /^en/i.test(v.lang))[0] || null;
  };

  function textOf(el) {
    const c = el.cloneNode(true);
    N.$$('.read-btn, .cite, .sr-only, .no-read, button.opt .letter', c).forEach((x) => x.remove());
    return (c.textContent || '').replace(/\s+/g, ' ').trim();
  }

  function player(show) {
    const el = document.getElementById('player');
    if (!el) return;
    el.hidden = !show;
    if (show) {
      N.$('.pl-text', el).textContent = N.u('reading');
      const pb = N.$('[data-pl="pause"]', el);
      pb.innerHTML = N.icon(RA.paused ? 'play' : 'pause') + '<span>' + N.u(RA.paused ? 'resume' : 'pause') + '</span>';
    }
  }

  function clearMark() { if (RA.current) RA.current.classList.remove('is-reading'); RA.current = null; }

  function speakNext() {
    clearMark();
    if (!RA.active) return;
    if (RA.idx >= RA.queue.length) { stop(); return; }
    const el = RA.queue[RA.idx++];
    const text = textOf(el);
    if (!text) { speakNext(); return; }
    RA.current = el;
    el.classList.add('is-reading');
    const r = el.getBoundingClientRect();
    if (r.top < 80 || r.bottom > window.innerHeight - 90) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const u = new SpeechSynthesisUtterance(text);
    const lang = N.settings.lang === 'en' ? 'en' : 'nb';
    u.lang = lang === 'en' ? 'en-GB' : 'nb-NO';
    const v = N.pickVoice(lang);
    if (v) u.voice = v;
    u.rate = Number(N.settings.rate) || 1;
    u.onend = function () { if (RA.active && !RA.paused) speakNext(); };
    u.onerror = function () { if (RA.active) speakNext(); };
    synth.speak(u);
  }

  function start(els) {
    if (!synth || typeof SpeechSynthesisUtterance === 'undefined') { N.toast(N.u('noSpeech')); return; }
    stop();
    if (N.settings.lang !== 'en' && !N.pickVoice('nb') && !RA.warned) { RA.warned = true; N.toast(N.u('noNorwegianVoice'), 8000); }
    RA.queue = els.filter(Boolean);
    RA.idx = 0; RA.active = true; RA.paused = false;
    player(true);
    speakNext();
  }

  function stop() {
    RA.active = false; RA.paused = false;
    try { synth && synth.cancel(); } catch (e) { /* ignorer */ }
    clearMark();
    player(false);
  }

  function togglePause() {
    if (!RA.active) return;
    if (RA.paused) { RA.paused = false; try { synth.resume(); } catch (e) { /* ignorer */ } if (!synth.speaking) { RA.idx = Math.max(0, RA.idx - 1); speakNext(); } }
    else { RA.paused = true; try { synth.pause(); } catch (e) { /* ignorer */ } }
    player(true);
  }

  N.readAloud = {
    supported: !!synth,
    start: start,
    stop: stop,
    togglePause: togglePause,
    /** Les alle elementer med data-say inni root */
    readScope: function (root) { start(N.$$('[data-say]', root)); },
    sayText: function (text) {
      if (!synth) { N.toast(N.u('noSpeech')); return; }
      stop();
      const u = new SpeechSynthesisUtterance(text);
      const lang = N.settings.lang === 'en' ? 'en' : 'nb';
      u.lang = lang === 'en' ? 'en-GB' : 'nb-NO';
      const v = N.pickVoice(lang); if (v) u.voice = v;
      u.rate = Number(N.settings.rate) || 1;
      synth.speak(u);
    }
  };
  if (synth && 'onvoiceschanged' in synth) synth.addEventListener('voiceschanged', function () { N.emit && N.emit('voices'); });
})();
