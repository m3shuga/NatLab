# Kartdata for «Historien om Jorda»

Disse skriptene lager `content/jorda/kartdata.js`. Du trenger dem bare hvis kartet skal lages på nytt.

```bash
cd tools/kart
npm init -y && npm i world-atlas@2.0.2 topojson-client@3.1.0
B=https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON
curl -O $B/PB2002_boundaries.json -O $B/PB2002_plates.json -O $B/PB2002_steps.json
node make.js        # skriver ../../content/jorda/kartdata.js
```

- `build.js` – land (Natural Earth 110m), kontinenter til tidskartet, plater og plategrenser (PB2002), forenklet og projisert (ekvirektangulær, 1000 × 500).
- `drift.js` – rotasjonene (kvaternioner) som flytter kontinentene til Pangea. Sør-Amerika bruker Bullard mfl. (1965); de andre er tilpasset med punktpar.
- `make.js` – skriver alt til én fil.

Lisenser: Natural Earth (public domain), PB2002 (ODC-By 1.0) – se CREDITS.md. Ikke legg `node_modules` eller de store JSON-filene i git.
