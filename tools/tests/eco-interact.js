const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); const errs = []; const out = [];
  p.on('pageerror', e => errs.push('pageerror ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  const go = async r => { await p.goto('http://127.0.0.1:8765/#' + r); await p.waitForTimeout(250); };
  // 1) alle interne lenker på alle økologisider fører til en side som finnes
  const routes = ['okologi', 'okologi-okosystemet-les', 'okologi-tilpasning-les', 'okologi-kjeder-les', 'okologi-energi-les', 'okologi-mennesket-les', 'mal', 'okologi-ov', 'okologi-feltarbeid'];
  const hrefs = new Set();
  for (const r of routes) { await go(r); (await p.$$eval('main a[href^="#"]', as => as.map(a => a.getAttribute('href')))).forEach(h => { if (h !== '#') hrefs.add(h); }); }
  let bad = [];
  for (const h of hrefs) { await go(h.slice(1)); const t = await p.textContent('h1'); if (/Fant ikke siden|Page not found/.test(t)) bad.push(h); }
  out.push('internal links checked: ' + hrefs.size + ', broken: ' + (bad.join(' ') || 'none'));
  // 2) alle scenarier
  await go('okologi-naeringsnett-hvis');
  for (const w of ['skog', 'hav']) {
    await p.click(`[data-web="${w}"]`); await p.click('[data-mode="hvis"]');
    for (const s of await p.$$eval('[data-scn]', bs => bs.map(x => x.dataset.scn))) {
      await p.click(`[data-scn="${s}"]`); await p.waitForTimeout(80);
      const n = await p.$$eval('.fw-node.eff-up, .fw-node.eff-down, .fw-node.eff-gone, .fw-node.eff-mixed', a => a.length);
      out.push(`scenario ${w}/${s}: ${n} species affected`);
    }
  }
  // 3) pyramide
  await p.click('[data-mode="pyramide"]'); await p.click('[data-e0="100000"]'); await p.evaluate(() => { const r = document.getElementById('pyr-pct'); r.value = 20; r.dispatchEvent(new Event('input', { bubbles: true })); });
  out.push('pyramid top value: ' + (await p.$$eval('.pyr-val', a => a.map(x => x.textContent)))[0]);
  // 4) aktiviteter
  for (const r of ['okologi-ov-grupper-biotisk', 'okologi-ov-grupper-roller', 'okologi-ov-grupper-tilpasning', 'okologi-ov-par-begreper', 'okologi-ov-par-energi', 'okologi-ov-nett-skog', 'okologi-ov-nett-hav', 'okologi-ov-rekkefolge-kjedehav', 'okologi-ov-merk-skog']) {
    await go(r); console.log('at', r, await p.evaluate(() => location.hash), await p.$$eval('[data-act]', a => a.length)); await p.click('[data-act="solve"]'); await p.waitForTimeout(80);
    if (r.includes('nett')) { await p.click('[data-act="reset"]'); await p.click('.fw-node >> nth=0'); await p.click('.fw-node >> nth=4'); await p.click('[data-act="check"]'); }
    out.push(r + ': ' + ((await p.textContent('.act-result')) || '(solved)').trim().slice(0, 50));
  }
  // 5) quiz – alle kategorier
  for (const set of ['okosystem', 'tilpasning', 'nett', 'energi', 'mennesket']) {
    await go('okologi'); await go('okologi-quiz'); await p.click(`label:has(#qset-${set})`); await p.click('label:has(#qlevel-all)'); await p.click('label:has(#qcount-0)'); await p.click('button[type=submit]');
    let n = 0;
    for (let i = 0; i < 30; i++) {
      await p.waitForTimeout(40);
      if (await p.$('.score-ring')) break;
      if (await p.$('.quiz-card svg.diagram [data-part][tabindex]')) await p.dispatchEvent('.quiz-card svg.diagram [data-part][tabindex] >> nth=0', 'click');
      else if (await p.$('[data-answer-multi]')) { await p.click('.opt >> nth=0'); await p.click('[data-answer-multi]'); }
      else await p.click('.opt >> nth=0');
      await p.click('[data-go-next]'); n++;
    }
    out.push(`quiz ${set}: answered ${n}, result ${(await p.textContent('.score-ring')).trim()}`);
  }
  // 6) feltskjema
  await go('okologi-feltarbeid'); const inputs = await p.$$eval('.field-sheet input, .field-sheet textarea', a => a.length); out.push('field sheet inputs: ' + inputs);
  console.log(out.join('\n')); console.log(errs.length ? 'ERRORS\n' + errs.join('\n') : 'NO ERRORS'); await b.close();
})();
