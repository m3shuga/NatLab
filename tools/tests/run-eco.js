const { chromium } = require('playwright');
const OUT = __dirname + '/skjermbilder/okologi/';
const routes = ['', 'okologi', 'okologi-okosystemet', 'okologi-okosystemet-les', 'okologi-tilpasning', 'okologi-tilpasning-les', 'okologi-kjeder', 'okologi-kjeder-les', 'okologi-energi', 'okologi-energi-les', 'okologi-mennesket', 'okologi-mennesket-les', 'okologi-naeringsnett', 'okologi-naeringsnett-hvis', 'okologi-naeringsnett-pyramide', 'okologi-feltarbeid', 'okologi-ov', 'okologi-ov-merk-skog', 'okologi-ov-merk-hav', 'okologi-ov-grupper-biotisk', 'okologi-ov-grupper-roller', 'okologi-ov-grupper-tilpasning', 'okologi-ov-par-begreper', 'okologi-ov-par-energi', 'okologi-ov-nett-skog', 'okologi-ov-nett-hav', 'okologi-ov-rekkefolge-kjedeskog', 'okologi-ov-rekkefolge-energivei', 'okologi-quiz', 'mal', 'ordliste', 'kilder', 'celler', 'celler-sammenlign', 'celler-dyrecelle'];
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
        if (lang === 'nb') {
          await page.screenshot({ path: `${OUT}${tag}-${lang}-${r || 'home'}.png`, fullPage: tag === 'd' ? false : false });
        }
      }
      await ctx.close();
    }
  }
  console.log(problems.length ? problems.join('\n') : 'NO PROBLEMS');
  await browser.close();
})();
