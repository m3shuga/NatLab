const { chromium } = require('playwright');
(async () => { const b = await chromium.launch(); const shots = [];
for (const [w, name] of [[1280, 'c1280'], [1000, 'c1000'], [700, 'c700']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
  await ctx.addInitScript(() => localStorage.setItem('natlab.innstillinger.v1', JSON.stringify({ theme: 'dark' })));
  const p = await ctx.newPage(); await p.goto('http://127.0.0.1:8765/#celler'); await p.waitForTimeout(400);
  const g = await p.$('.org-grid'); await g.screenshot({ path: 'skjermbilder/kort-' + name + '.png' });
  const dims = await p.$$eval('.org-card', cs => cs.map(c => Math.round(c.getBoundingClientRect().height) + 'h/' + (c.scrollWidth > c.clientWidth ? 'OVERFLOW' : 'ok') + '/' + (c.querySelector('h3').getBoundingClientRect().bottom <= c.getBoundingClientRect().bottom ? 'textvisible' : 'TEXTHIDDEN')));
  console.log(name, dims.join(' '));
  if (w === 1280) { await p.goto('http://127.0.0.1:8765/#celler-dyrecelle-les'); await p.waitForTimeout(400); await (await p.$('.keypoints')).screenshot({ path: 's3-keypoints.png' }); await p.locator('details.deeper').first().scrollIntoViewIfNeeded(); await (await p.$('details.deeper')).screenshot({ path: 's3-details.png' }); }
  await ctx.close(); }
await b.close(); })();
