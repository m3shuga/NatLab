"""Lager content/klima/data.js fra åpne måledata.

Last ned filene til en mappe (se URL-ene under) og kjør:
    python3 tools/klima/make-data.py <mappe-med-datafiler>

Kilder (alle fritt tilgjengelige):
  co2_annmean_mlo.txt  https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt  (NOAA GML, Mauna Loa)
  co2_mm_mlo.txt       https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_mm_mlo.txt       (NOAA GML, Mauna Loa, månedlig)
  temp.csv             https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series/globe/land_ocean/12/12/1850-2025/data.csv  (NOAA NCEI)
  ice.txt              https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt  (Bereiter mfl. 2015)
  edc.txt              https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/epica_domec/edc3deuttemp2007.txt  (Jouzel mfl. 2007)
"""
import sys, os, json
d = sys.argv[1]
rd = lambda f: open(os.path.join(d, f), encoding='utf-8-sig').read().splitlines()

co2 = []
for l in rd('co2_mlo.txt'):
    if l.startswith('#') or not l.strip(): continue
    y, v = l.split()[:2]
    co2.append([int(y), round(float(v), 1)])

mm = []
for l in rd('co2_mm.txt'):
    if l.startswith('#') or not l.strip(): continue
    p = l.split()
    v = float(p[3])
    if v > 0: mm.append([round(float(p[2]), 3), round(v, 1)])

t = []
for l in rd('temp.csv'):
    if l.startswith('#') or l.startswith('Year') or not l.strip(): continue
    y, v = l.split(',')[:2]
    t.append([int(y), float(v)])
base = sum(v for y, v in t if 1850 <= y <= 1900) / len([1 for y, v in t if 1850 <= y <= 1900])
temp = [[y, round(v - base, 2)] for y, v in t]

def binned(rows, size):
    b = {}
    for age, v in rows:
        k = int(age // size)
        b.setdefault(k, []).append(v)
    return [[k * size + size // 2, round(sum(v) / len(v), 1)] for k, v in sorted(b.items())]

ice = []
for l in rd('ice.txt'):
    p = l.split()
    try: ice.append([float(p[0]), float(p[1])])
    except (ValueError, IndexError): pass
ice = [r for r in ice if r[0] >= 0]
icetemp = []
for l in rd('edc.txt'):
    p = l.split()
    if len(p) == 5:
        try:
            if float(p[2]) > 0: icetemp.append([float(p[2]), float(p[4])])
        except ValueError: pass

out = {
    'co2': co2, 'co2m': mm, 'temp': temp, 'tempBase': round(base, 3),
    'iceCo2': binned(ice, 2000), 'iceTemp': binned(icetemp, 2000),
}
js = ('/* Generert av tools/klima/make-data.py – ikke rediger for hånd.\n'
      '   CO2 Mauna Loa: NOAA GML. Temperatur: NOAA NCEI (omregnet til avvik fra snittet 1850–1900).\n'
      '   Iskjerner: Bereiter mfl. 2015 (CO2) og Jouzel mfl. 2007 (EPICA Dome C, temperatur). */\n'
      'NatLab.klimaData = ' + json.dumps(out, separators=(',', ':')) + ';\n')
open(os.path.join(os.path.dirname(__file__), '..', '..', 'content', 'klima', 'data.js'), 'w').write(js)
print(len(co2), len(mm), len(temp), base, len(out['iceCo2']), len(out['iceTemp']), len(js))
