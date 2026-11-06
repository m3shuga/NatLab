const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); const errs = [];
  p.on('pageerror', e => errs.push('pageerror ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  const go = async r => { await p.goto('http://127.0.0.1:8765/#' + r); await p.waitForTimeout(250); };
  const log = [];
  await go('celler-plantecelle-les');
  await p.click('[data-read="section"]'); await p.waitForTimeout(300); log.push('read: player visible=' + await p.isVisible('#player'));
  await p.click('[data-pl="stop"]').catch(()=>{});
  await p.click('.term'); await p.waitForTimeout(150); log.push('popover=' + await p.isVisible('.term-pop'));
  await p.keyboard.press('Escape');
  await p.click('.check .opt[data-i="1"]'); log.push('check fb=' + await p.isVisible('.check .feedback'));
  await p.click('#open-settings'); await p.click('[data-set="font"][data-val="dyslexic"]'); await p.click('[data-set="lang"][data-val="en"]');
  log.push('font=' + await p.evaluate(() => document.documentElement.dataset.font) + ' lang=' + await p.evaluate(() => document.documentElement.lang) + ' h1=' + await p.textContent('h1'));
  await p.click('#settings [data-reset-settings]'); await p.click('#settings [data-close]');
  await p.click('#lang-toggle'); log.push('toggle lang=' + await p.evaluate(() => document.documentElement.lang));
  await p.click('#lang-toggle');
  await go('ordliste'); await p.fill('#gloss-search', 'mito'); log.push('gloss visible=' + await p.$$eval('.gloss-item:not([hidden])', a => a.length));
  await go('celler-quiz'); await p.click('label:has(#qcount-5)'); await p.click('button[type=submit]');
  for (let i = 0; i < 5; i++) {
    await p.waitForTimeout(150);
    console.log('Q', i, (await p.textContent('.quiz-card')).slice(0,90).replace(/\s+/g,' '));
    if (await p.$('svg.diagram [data-part][tabindex]')) await p.click('svg.diagram [data-part][tabindex] >> nth=0', { force: true });
    else if (await p.$('[data-answer-multi]')) { await p.click('.opt >> nth=0'); await p.click('[data-answer-multi]'); }
    else await p.click('.opt >> nth=0');
    await p.click('[data-go-next]');
  }
  log.push('quiz result=' + (await p.textContent('.score-ring')).trim());
  await go('celler-ov-sorter'); await p.click('[data-act="solve"]'); log.push('sort=' + await p.textContent('.act-result'));
  await go('celler-ov-rekkefolge-virussyklus'); await p.click('[data-act="solve"]'); log.push('order=' + await p.textContent('.act-result'));
  await go('celler-ov-koble-bakterie'); await p.click('[data-l] >> nth=0'); await p.click('[data-r] >> nth=0'); await p.click('[data-act="check"]'); log.push('match=' + await p.textContent('.act-result'));
  await go('celler-ov-merk-influensa'); await p.click('[data-act="solve"]'); log.push('label=' + await p.textContent('.act-result') + '|' + await p.$$eval('.slot.ok', a => a.length));
  await go('celler-dyrecelle'); await p.keyboard.press('Tab'); await p.focus('svg.diagram [data-part="cellekjerne"]'); await p.keyboard.press('Enter'); log.push('kbd select=' + await p.textContent('#ex-panel h3'));
  await go('celler-virus'); await p.click('[data-model="meslinger"]'); await p.click('[data-select="arvestoff"]'); log.push('virus note=' + (await p.textContent('#ex-panel')).includes('RNA'));
  console.log(log.join('\n')); console.log(errs.length ? errs.join('\n') : 'NO ERRORS'); await b.close();
})();
