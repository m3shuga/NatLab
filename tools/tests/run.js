const { chromium } = require('playwright');
const OUT = __dirname + '/skjermbilder/celler/';
const routes = ['', 'celler', 'celler-dyrecelle', 'celler-dyrecelle-les', 'celler-plantecelle', 'celler-plantecelle-les', 'celler-bakterie', 'celler-bakterie-les', 'celler-virus', 'celler-virus-les', 'celler-sammenlign', 'celler-storrelse', 'celler-ov', 'celler-ov-merk-dyrecelle', 'celler-ov-koble-plantecelle', 'celler-ov-sorter', 'celler-ov-rekkefolge-virussyklus', 'celler-quiz', 'mal', 'ordliste', 'personvern', 'kilder', 'celler-dyrecelle-del-mitokondrie', 'tull'];
(async () => {
  const browser = await chromium.launch();
  const problems = [];
  for (const [w, h, tag] of [[1440, 900, 'd'], [390, 844, 'm']]) {
    for (const lang of ['nb', 'en']) {
      const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
      await ctx.addInitScript((l) => { localStorage.setItem('natlab.innstillinger.v1', JSON.stringify({ lang: l })); }, lang);
      const page = await ctx.newPage();
      page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') problems.push(`[${tag}/${lang}] console ${m.type()}: ${m.text()}`); });
      page.on('pageerror', (e) => problems.push(`[${tag}/${lang}] pageerror: ${e.message}`));
      page.on('request', (r) => { if (!r.url().startsWith('http://127.0.0.1')) problems.push(`[${tag}/${lang}] external request: ${r.url()}`); });
      page.on('requestfailed', (r) => problems.push(`[${tag}/${lang}] failed: ${r.url()}`));
      for (const r of routes) {
        await page.goto('http://127.0.0.1:8765/?dev#' + r);
        await page.waitForTimeout(250);
        const sw = await page.evaluate(() => document.documentElement.scrollWidth);
        if (sw > w + 1) problems.push(`[${tag}/${lang}] horizontal overflow on #${r}: ${sw}px`);
        const missingArr = await page.evaluate(() => NatLab.missing.slice(0,3)); const missing = missingArr.length;
        if (missing) problems.push(`[${tag}/${lang}] missing translations on #${r}: ${missing} ${JSON.stringify(missingArr)}`);
        if (lang === 'nb' || ['', 'celler-virus', 'celler-dyrecelle-les'].includes(r)) {
          await page.screenshot({ path: `${OUT}${tag}-${lang}-${r || 'home'}.png`, fullPage: tag === 'd' ? false : false });
        }
      }
      await ctx.close();
    }
  }
  console.log(problems.length ? problems.join('\n') : 'NO PROBLEMS');
  await browser.close();
})();
