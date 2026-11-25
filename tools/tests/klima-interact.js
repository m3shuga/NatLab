/* Tester interaksjonene i temaet «Klimaendringer». Kjør: node tools/tests/klima-interact.js (med lokal server på 8765) */
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const c = await b.newContext({ viewport: { width: 1280, height: 900 } });
  const p = await c.newPage();
  const errs = [];
  p.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
  const ok = [], bad = [];
  const check = (name, cond) => (cond ? ok : bad).push(name);
  const go = async (r) => { await p.goto('http://127.0.0.1:8765/?dev#' + r); await p.waitForTimeout(500); };

  // Karbonkretsløpet
  await go('klima-karbonmodell');
  const pos1 = await p.evaluate(() => document.querySelector('.cm-dots circle').getAttribute('cx'));
  await p.waitForTimeout(400);
  const pos2 = await p.evaluate(() => document.querySelector('.cm-dots circle').getAttribute('cx'));
  check('karbon: prikkene beveger seg', pos1 !== pos2);
  await p.click('svg.diagram [data-part="fotosyntese"]');
  check('karbon: panel for fotosyntese', (await p.textContent('#cm-panel h3')).length > 3);
  await p.click('[data-mode="tid"]'); await p.click('[data-speed="slow"]');
  check('karbon: raskt/langsomt', await p.evaluate(() => document.querySelectorAll('svg.diagram .cm-dim').length > 3));
  await p.click('[data-mode="hvis"]');
  const before = await p.textContent('.cm-results');
  await p.click('[data-preset="3"]');
  const after = await p.textContent('.cm-results');
  check('karbon: netto null endrer resultat', before !== after);
  await p.evaluate(() => { const i = document.querySelector('#cm-fossil'); i.value = 150; i.dispatchEvent(new Event('input', { bubbles: true })); });
  check('karbon: glidebryter oppdaterer', (await p.textContent('#cm-fossil-v')).indexOf('150') >= 0);
  await p.click('[data-anim]');
  check('karbon: pauseknapp', (await p.getAttribute('[data-anim]', 'aria-pressed')) === 'false');

  // Drivhuseffekten
  await go('klima-drivhusmodell');
  await p.locator('svg.diagram [data-part="drivhusgasser"] .mol').first().click();
  check('drivhus: panel', (await p.textContent('#cm-panel h3')).length > 3);
  await p.click('[data-mode="hvis"]');
  await p.evaluate(() => { const i = document.querySelector('#gh-gas'); i.value = 0; i.dispatchEvent(new Event('input', { bubbles: true })); });
  check('drivhus: ingen gasser gir −18', (await p.textContent('.thermo-text')).indexOf('18') >= 0);
  await p.evaluate(() => { const i = document.querySelector('#gh-gas'); i.value = 4; i.dispatchEvent(new Event('input', { bubbles: true })); });
  const t1 = await p.textContent('.cm-results .cm-big');
  await p.click('#gh-fb');
  const t2 = await p.textContent('.cm-results .cm-big');
  check('drivhus: tilbakekobling gir varmere', parseFloat(t2.replace(',', '.')) > parseFloat(t1.replace(',', '.')));
  await p.click('[data-ice="2"]');
  check('drivhus: isknapp', (await p.getAttribute('[data-ice="2"]', 'aria-pressed')) === 'true');

  // Grafer
  await go('klima-malinger');
  const box = await p.locator('svg.chart').first().boundingBox();
  await p.mouse.move(box.x + box.width * 0.3, box.y + box.height * 0.5);
  check('graf: avlesning', /ppm/.test(await p.textContent('.ch-read')));
  await p.locator('[data-view="zoom"]').click();
  check('graf: zoom', await p.evaluate(() => document.querySelector('[data-view="zoom"]').getAttribute('aria-pressed') === 'true'));
  await p.locator('[data-view="idag"]').click();
  check('graf: CO2 i dag', await p.evaluate(() => !!document.querySelector('.ch-now')));

  // Myter
  await go('klima-myter-les');
  await p.locator('[data-guess="myte"]').first().click();
  check('myte: svar vises', await p.evaluate(() => !document.querySelector('.claim-a').hidden));

  // Lesing
  await go('klima-lesing');
  await p.locator('[data-rd-next]').first().click();
  check('lesing: steg 2', await p.evaluate(() => !document.querySelector('.rd-body [data-ph="1"]').hidden));
  await p.locator('[data-art="1"]').click();
  check('lesing: bytt artikkel', await p.evaluate(() => !document.querySelector('[data-body="1"]').hidden));

  // Fotavtrykk
  await go('klima-fotavtrykk');
  const f1 = await p.textContent('.fp-total');
  await p.selectOption('#fp-school', 'bil');
  check('fotavtrykk: endring', f1 !== await p.textContent('.fp-total'));

  // Quiz – svar på alle spørsmålene
  await go('klima-quiz');
  await p.selectOption('select[name="qcount"]', '0').catch(() => {});
  await p.click('#quiz-setup button[type="submit"]');
  for (let i = 0; i < 120; i++) {
    if (await p.$('.score-ring')) break;
    if (await p.$('.quiz-hotspot')) await p.evaluate(() => document.querySelector('svg.diagram [data-part]:not(.is-off)').dispatchEvent(new MouseEvent('click', { bubbles: true })));
    else if (await p.$('[data-answer-multi]')) { await p.locator('.opt').first().click(); await p.click('[data-answer-multi]'); }
    else await p.locator('.opt').first().click();
    await p.click('[data-go-next]');
  }
  check('quiz: kom til resultatet', !!(await p.$('.score-ring')));

  // Øving: alle aktivitetene med «Vis fasit» + «Sjekk»
  const acts = ['merk-drivhuseffekt', 'merk-karbonkretslop', 'merk-naturlige', 'grupper-kretslop', 'grupper-arsaker', 'grupper-tiltak', 'par-begreper', 'par-straling', 'par-karbon', 'rekkefolge-drivhus', 'rekkefolge-kullet', 'rekkefolge-tilbake'];
  for (const a of acts) {
    await go('klima-ov-' + a);
    const solve = await p.$('[data-act="solve"]');
    if (solve) { await solve.click(); const chk = await p.$('[data-act="check"]'); if (chk) await chk.click(); }
    check('øving: ' + a, !!(await p.$('.activity')));
  }

  // Utforskeren med pauseknapp (animert tegning)
  await go('klima-karbon');
  check('utforsker: pauseknapp', !!(await p.$('[data-anim]')));

  console.log('OK: ' + ok.length + '\n' + (bad.length ? 'FEIL: ' + bad.join(', ') : 'Ingen feil') + (errs.length ? '\n' + errs.slice(0, 8).join('\n') : ''));
  await b.close();
})();
