// Beregner rotasjoner (kvaternioner) som flytter kontinentene til Pangea (Afrika holdes fast)
const D = Math.PI / 180;
const vec = (lon, lat) => [Math.cos(lat * D) * Math.cos(lon * D), Math.cos(lat * D) * Math.sin(lon * D), Math.sin(lat * D)];
const ll = (v) => [Math.atan2(v[1], v[0]) / D, Math.asin(Math.max(-1, Math.min(1, v[2]))) / D];
function qAxis(lon, lat, ang) { const a = vec(lon, lat), s = Math.sin(ang * D / 2); return [Math.cos(ang * D / 2), a[0] * s, a[1] * s, a[2] * s]; }
function qMul(a, b) {
  return [a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3], a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
    a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1], a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0]];
}
function qRot(q, v) {
  const p = [0, v[0], v[1], v[2]], qc = [q[0], -q[1], -q[2], -q[3]];
  const r = qMul(qMul(q, p), qc); return [r[1], r[2], r[3]];
}
// Kabsch/Horn: beste rotasjon som flytter punktene src -> dst (enhetsvektorer)
function fit(pairs) {
  const S = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  pairs.forEach(([a, b]) => { const x = vec(a[0], a[1]), y = vec(b[0], b[1]); for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) S[i][j] += x[i] * y[j]; });
  const [[Sxx, Sxy, Sxz], [Syx, Syy, Syz], [Szx, Szy, Szz]] = S;
  const Nm = [
    [Sxx + Syy + Szz, Syz - Szy, Szx - Sxz, Sxy - Syx],
    [Syz - Szy, Sxx - Syy - Szz, Sxy + Syx, Szx + Sxz],
    [Szx - Sxz, Sxy + Syx, -Sxx + Syy - Szz, Syz + Szy],
    [Sxy - Syx, Szx + Sxz, Syz + Szy, -Sxx - Syy + Szz]];
  // største egenvektor ved potensiterasjon (med skift)
  let q = [1, 0, 0, 0];
  for (let it = 0; it < 500; it++) {
    const n = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) n[i] += (Nm[i][j] + (i === j ? 10 : 0)) * q[j];
    const L = Math.hypot(...n); q = n.map((x) => x / L);
  }
  return q;
}
const tr = (q, p) => ll(qRot(q, vec(p[0], p[1])));

// --- Pangea-tilpasninger (i dag -> ca. 200 millioner år siden, Afrika fast) ---
const R = {};
R.sa = qAxis(-30.6, 44.0, 57);                 // Bullard mfl. (1965)
R.na = fit([[[-80.2, 25.5], [-17.6, 13.5]], [[-75.5, 35.2], [-11.0, 29.5]], [[-70.0, 41.5], [-9.3, 35.0]], [[-52.7, 47.5], [-10.5, 42.5]]]);
R.gr = fit([[[-43.9, 59.8], [-17.0, 54.5]], [[-22.0, 70.0], [4.0, 64.5]], [[-17.0, 80.0], [9.0, 77.0]]]);
R.ma = fit([[[49.3, -12.0], [47.5, 2.5]], [[45.2, -25.6], [41.0, -11.0]], [[44.0, -19.0], [42.0, -4.0]]]);
// India festes mot Madagaskar (dagens koordinater), så settes sammen med Madagaskars rotasjon
R.in_rel = fit([[[77.5, 8.1], [49.5, -24.5]], [[73.8, 15.4], [51.5, -16.0]], [[70.0, 21.0], [51.8, -11.5]]]);
R.an = fit([[[5.0, -70.0], [23.0, -37.0]], [[39.0, -69.5], [38.5, -27.5]]]);
R.au_rel = fit([[[118.0, -35.0], [113.0, -64.0]], [[146.8, -43.6], [163.0, -68.5]]]);

module.exports = { R, qMul, qRot, vec, ll, tr };
if (require.main === module) {
  Object.keys(R).forEach((k) => console.log(k, R[k].map((x) => x.toFixed(4)).join(', ')));
  console.log('Recife -> ', tr(R.sa, [-35, -8]));
}
