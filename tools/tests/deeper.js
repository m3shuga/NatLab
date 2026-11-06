const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); const errs = []; const out = [];
  p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  const go = async r => { await p.goto('http://127.0.0.1:8765/#' + r); await p.waitForTimeout(250); };
  const count = (sel) => p.$$eval(sel, a => a.length);
  // Utforsker
  for (const [org, models] of [['dyrecelle', [null]], ['plantecelle', [null]], ['bakterie', [null]], ['virus', ['influensa', 'bakteriofag', 'meslinger']]]) {
    await go('celler-' + org);
    for (const m of models) {
      if (m) { await p.click(`[data-model="${m}"]`); await p.waitForTimeout(100); }
      const has = await count('button[data-level="deeper"]');
      if (!has) { out.push(`explorer ${org}/${m || ''}: no toggle (ok if no extra parts)`); continue; }
      const a = await count('.legend li'); await p.click('button[data-level="deeper"]'); const bb = await count('.legend li'); await p.click('button[data-level="basic"]');
      out.push(`explorer ${org}/${m || ''}: ${a} -> ${bb} parts ${bb > a ? 'OK' : 'NO CHANGE!'}`);
    }
  }
  // Øving
  for (const kind of ['merk', 'koble']) for (const d of ['dyrecelle', 'plantecelle', 'bakterie', 'influensa', 'bakteriofag', 'meslinger']) {
    await go(`celler-ov-${kind}-${d}`);
    if (!(await p.$('[data-lv="deeper"]'))) { out.push(`${kind} ${d}: no toggle`); continue; }
    const sel = kind === 'merk' ? '.slot' : '[data-l]';
    const a = await count(sel); await p.click('[data-lv="deeper"]'); await p.waitForTimeout(100); const b2 = await count(sel);
    await p.click('[data-lv="basic"]'); await p.waitForTimeout(100); const c = await count(sel);
    out.push(`${kind} ${d}: ${a} -> ${b2} -> ${c} ${b2 > a && c === a ? 'OK' : 'PROBLEM'}`);
  }
  // Artikler
  for (const r of ['celler-dyrecelle-les', 'celler-plantecelle-les', 'celler-bakterie-les', 'celler-virus-les', 'celler-sammenlign']) {
    await go(r);
    const n = await count('details.deeper');
    let ok = 0;
    for (let i = 0; i < n; i++) { const s = p.locator('details.deeper > summary').nth(i); await s.scrollIntoViewIfNeeded(); await s.click(); const open = await p.locator('details.deeper').nth(i).evaluate(d => d.open && d.querySelector('.deeper-body').offsetHeight > 20); if (open) ok++; }
    out.push(`${r}: ${ok}/${n} deeper boxes open`);
  }
  console.log(out.join('\n')); console.log(errs.length ? 'ERRORS:\n' + errs.join('\n') : 'NO ERRORS'); await b.close();
})();
