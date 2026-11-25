# Nettlesertester for NatLab

Testene bruker Playwright og Chromium (forhåndsinstallert i Claude Code-skymiljøet).
Skjermbilder lagres i `tools/tests/skjermbilder/` (ignoreres av git).

```bash
cd <repo> && python3 -m http.server 8765 --bind 127.0.0.1 &
mkdir -p tools/tests/skjermbilder/celler tools/tests/skjermbilder/okologi tools/tests/skjermbilder/jorda tools/tests/skjermbilder/klima
node tools/tests/run.js          # alle sider i «Celler og virus», 1440/390 px, nb/en
node tools/tests/run-eco.js      # alle sider i «Økologi», 1440/390 px, nb/en
node tools/tests/run-jorda.js    # alle sider i «Historien om Jorda», 1440/390 px, nb/en
node tools/tests/run-klima.js    # alle sider i «Klimaendringer», 1440/390 px, nb/en
node tools/tests/interact.js     # quiz og aktiviteter (celler)
node tools/tests/klima-interact.js # modellene, grafene, myter, lesing, fotavtrykk, quiz og øving (klima)
node tools/tests/eco-interact.js # næringsnett, grupper, par, feltskjema (økologi)
node tools/tests/deeper.js       # alle «Gå dypere»-knapper endrer noe
node tools/tests/cards.js        # kortrutenett på ulike bredder (kjør fra tools/tests)
node tools/tests/eco-shots.js    # skjermbilder av økologi-modellene (kjør fra tools/tests)
```

Forventet resultat: `NO PROBLEMS` / `NO ERRORS`. Testene ser etter konsollfeil,
horisontal scroll, manglende oversettelser og forespørsler til eksterne servere.
Nye temaer bør få egne kopier av `run-eco.js` og `eco-interact.js`.
