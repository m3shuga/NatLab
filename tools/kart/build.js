// Bygger content/jorda/kartdata.js fra Natural Earth (world-atlas) og PB2002 (Bird 2003)
const fs = require('fs');
const topojson = require('topojson-client');
const W = 1000, H = 500;
const px = (lon) => (lon + 180) * W / 360;
const py = (lat) => (90 - lat) * H / 180;
const r1 = (v) => Math.round(v * 10) / 10;

// Douglas-Peucker on [x,y]
function dp(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const st = [[0, pts.length - 1]];
  while (st.length) {
    const [a, b] = st.pop(); let md = 0, mi = -1;
    const [x1, y1] = pts[a], [x2, y2] = pts[b]; const dx = x2 - x1, dy = y2 - y1; const L = dx * dx + dy * dy || 1e-12;
    for (let i = a + 1; i < b; i++) {
      const t = Math.max(0, Math.min(1, ((pts[i][0] - x1) * dx + (pts[i][1] - y1) * dy) / L));
      const ex = x1 + t * dx - pts[i][0], ey = y1 + t * dy - pts[i][1]; const d = ex * ex + ey * ey;
      if (d > md) { md = d; mi = i; }
    }
    if (md > tol * tol) { keep[mi] = 1; st.push([a, mi], [mi, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}
function ringPath(ring, tol, close) {
  let pts = dp(ring.map(([lo, la]) => [px(lo), py(la)]), tol);
  if (close && pts.length < 4) return '';
  let d = 'M' + pts.map((p) => r1(p[0]) + ' ' + r1(p[1])).join('L');
  return d + (close ? 'Z' : '');
}

// ---------- Land i dag ----------
const landTopo = JSON.parse(fs.readFileSync('node_modules/world-atlas/land-110m.json'));
const land = topojson.feature(landTopo, landTopo.objects.land);
let landD = '';
land.features.forEach((f) => {
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  polys.forEach((poly) => { poly.forEach((ring) => { landD += ringPath(ring, 0.35, true); }); });
});

// ---------- Kontinenter (til tidskartet) ----------
const ct = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-110m.json'));
const SA = ['Colombia', 'Venezuela', 'Guyana', 'Suriname', 'Ecuador', 'Peru', 'Brazil', 'Bolivia', 'Paraguay', 'Chile', 'Argentina', 'Uruguay', 'Falkland Is.'];
const IND = ['India', 'Sri Lanka', 'Bangladesh', 'Nepal', 'Bhutan', 'Pakistan'];
const AUS = ['Australia', 'Papua New Guinea', 'New Zealand'];
function groupOf(name, lon, lat) {
  if (name === 'Antarctica' || name === 'Fr. S. Antarctic Lands') return name === 'Antarctica' ? 'an' : null;
  if (name === 'Greenland') return 'gr';
  if (name === 'Madagascar') return 'ma';
  if (IND.includes(name)) return 'in';
  if (AUS.includes(name)) return 'au';
  if (name === 'Indonesia' && lon > 131 && lat < 0) return 'au';
  if (lon < -25) return (SA.includes(name) || (lat < 12 && lon > -62)) ? 'sa' : 'na';
  if (lon > -20 && lon < 60 && lat < 37.5 && lat > -40) {
    // Afrika + Den arabiske halvøy
    if (lon > 34 && lat > 30 && name !== 'Egypt') return 'eu';
    if (['Iran', 'Turkey', 'Syria', 'Iraq', 'Cyprus', 'Israel', 'Lebanon', 'Afghanistan', 'Turkmenistan'].includes(name)) return 'eu';
    if (lon > 50 && name !== 'Oman' && name !== 'United Arab Emirates' && name !== 'Somalia' && name !== 'Yemen') return 'eu';
    return 'af';
  }
  return 'eu';
}
const groups = { na: [], sa: [], gr: [], eu: [], af: [], ma: [], in: [], an: [], au: [] };
ct.objects.countries.geometries.forEach((g) => {
  const name = g.properties.name;
  const polys = g.type === 'Polygon' ? [g.arcs] : g.type === 'MultiPolygon' ? g.arcs : [];
  polys.forEach((arcs) => {
    const one = { type: 'Polygon', arcs: arcs };
    const f = topojson.feature(ct, one);
    const ring = f.geometry.coordinates[0];
    let sx = 0, sy = 0; ring.forEach((c) => { sx += c[0]; sy += c[1]; });
    const grp = groupOf(name, sx / ring.length, sy / ring.length);
    if (grp) groups[grp].push(one);
  });
});
const continents = {};
Object.keys(groups).forEach((k) => {
  const m = topojson.merge(ct, groups[k]);
  const polys = m.type === 'Polygon' ? [m.coordinates] : m.coordinates;
  continents[k] = [];
  polys.forEach((poly) => {
    const ring = poly[0];
    // forenkle i grader
    let pts = dp(ring.map((c) => [c[0], c[1]]), k === 'an' ? 0.9 : 0.35);
    if (pts.length < 4) return;
    // Antarktis: fjern kunstig linje langs -90 (polygonet går rundt polen)
    continents[k].push(pts.map((p) => [Math.round(p[0] * 4) / 4, Math.round(p[1] * 4) / 4]));
  });
});

// ---------- Plater ----------
const plates = JSON.parse(fs.readFileSync('PB2002_plates.json')).features.map((f) => {
  const polys = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  let d = '';
  polys.forEach((poly) => poly.forEach((ring) => { d += ringPath(ring, 0.6, true); }));
  return { c: f.properties.Code, d: d };
});

// ---------- Plategrenser (fra steps, slått sammen til linjer per type) ----------
const steps = JSON.parse(fs.readFileSync('PB2002_steps.json')).features;
const lines = [];
let cur = null;
steps.forEach((s) => {
  const p = s.properties, cls = p.STEPCLASS, pb = p.PLATEBOUND;
  const a = [p.STARTLONG, p.STARTLAT], b = [p.FINALLONG, p.FINALLAT];
  const cont = cur && cur.cls === cls && cur.pb === pb && Math.abs(cur.pts[cur.pts.length - 1][0] - a[0]) < 0.01 && Math.abs(cur.pts[cur.pts.length - 1][1] - a[1]) < 0.01 && Math.abs(a[0] - b[0]) < 90;
  if (!cont) { cur = { cls: cls, pb: pb, pts: [a], v: [] }; lines.push(cur); }
  if (Math.abs(a[0] - b[0]) > 90) { cur = null; return; }
  cur.pts.push(b); cur.v.push(p.VELOCITYLE);
});
const bounds = lines.filter((l) => l.pts.length > 1).map((l) => {
  const pts = dp(l.pts.map(([lo, la]) => [px(lo), py(la)]), 0.5);
  const v = l.v.reduce((s, x) => s + x, 0) / l.v.length;
  const mid = l.pts[Math.floor(l.pts.length / 2)];
  return { t: l.cls, p: l.pb, v: Math.round(v), d: 'M' + pts.map((q) => r1(q[0]) + ' ' + r1(q[1])).join('L'), m: [Math.round(mid[0]), Math.round(mid[1])] };
});

module.exports = { landD, continents, plates, bounds, W, H };
if (require.main === module) {
  console.log('land chars', landD.length, 'plates', plates.length, plates.reduce((s, p) => s + p.d.length, 0), 'bounds', bounds.length, bounds.reduce((s, b) => s + b.d.length, 0));
  Object.keys(continents).forEach((k) => console.log(k, continents[k].length, continents[k].reduce((s, r) => s + r.length, 0)));
}
