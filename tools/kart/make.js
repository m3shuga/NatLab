const fs = require('fs');
const { landD, continents, plates, bounds } = require('./build.js');
const { R } = require('./drift.js');
const r4 = (q) => q.map((x) => Math.round(x * 1e5) / 1e5);
// slå sammen grenser med samme type og platepar som henger sammen (færre elementer)
const out = '/* =====================================================================\n' +
  '   Historien om Jorda – KARTDATA (generert av et skript, ikke rediger for hånd)\n' +
  '   Land: Natural Earth (public domain), via world-atlas 2.0.2.\n' +
  '   Plater og plategrenser: PB2002, Peter Bird (2003), «An updated digital model of plate boundaries»,\n' +
  '   Geochemistry Geophysics Geosystems 4(3), 1027. GeoJSON-versjon: Hugo Ahlenius / Nordpil\n' +
  '   (github.com/fraxen/tectonicplates), lisens Open Data Commons Attribution (ODC-By 1.0).\n' +
  '   Projeksjon: ekvirektangulær, 1000 × 500 (lengdegrad −180…180, breddegrad 90…−90).\n' +
  '   Grensetyper (PB2002): OSR havrygg, OTF transform i havet, SUB subduksjon, OCB konvergens i havet,\n' +
  '   CCB kontinent mot kontinent, CRB riftsone på land, CTF transform på land. v = fart i mm per år.\n' +
  '   ===================================================================== */\n' +
  'NatLab.geo = ' + JSON.stringify({
    land: landD,
    plates: plates,
    bounds: (function(){ const m={}; bounds.forEach(function(b){ const k=b.t+'|'+b.p; (m[k]=m[k]||{t:b.t,p:b.p,v:[],d:''}); m[k].v.push(b.v); m[k].d+=b.d; }); return Object.keys(m).map(function(k){ const x=m[k]; return {t:x.t,p:x.p,v:Math.round(x.v.reduce(function(a,c){return a+c;},0)/x.v.length),d:x.d}; }); })(),
    cont: continents,
    rot: { na: r4(R.na), sa: r4(R.sa), gr: r4(R.gr), ma: r4(R.ma), in_rel: r4(R.in_rel), an: r4(R.an), au_rel: r4(R.au_rel) }
  }) + ';\n';
fs.writeFileSync('../../content/jorda/kartdata.js', out);
console.log('bytes', out.length);
