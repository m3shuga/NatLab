/* =====================================================================
   Historien om Jorda – KILDER, VIDEOER og BILDER
   (samme oppbygning som content/okologi/kilder.js – se README.md)
   Alle lenker er sjekket 7. november 2026.
   ===================================================================== */
(function () {
  const T = NatLab.topic('jorda');
  const checked = '2026-11-07';
  const snl = 'Store norske leksikon';
  const ndla = 'NDLA';
  const s = function (slug, title) { return { title: title, publisher: snl, url: 'https://snl.no/' + slug, type: 'artikkel', lang: 'nb' }; };

  T.sources = {
    /* ---------- Store norske leksikon ---------- */
    'snl-geologi': s('geologi', 'geologi'),
    'snl-geolog': s('geolog', 'geolog'),
    'snl-jorden': s('Jorden', 'Jorden'),
    'snl-jordens-geologi': s('Jordens_geologi', 'Jordens geologi'),
    'snl-jordskorpen': s('jordskorpen', 'jordskorpen'),
    'snl-mantelen': s('mantelen', 'mantelen'),
    'snl-kjerne': s('Jordens_kjerne', 'Jordens kjerne'),
    'snl-litosfaren': s('litosf%C3%A6ren', 'litosfæren'),
    'snl-astenosfaren': s('astenosf%C3%A6ren', 'astenosfæren'),
    'snl-seismisk-bolge': s('seismisk_b%C3%B8lge', 'seismisk bølge'),
    'snl-paleomagnetisme': s('paleomagnetisme', 'paleomagnetisme'),
    'snl-radiometrisk': s('radiometrisk_datering', 'radiometrisk datering'),
    'snl-fossiler': s('fossiler', 'fossiler'),
    'snl-solsystemet': s('solsystemet', 'solsystemet'),
    'snl-platetektonikk': s('platetektonikk', 'platetektonikk'),
    'snl-plategrense': s('plategrense', 'plategrense'),
    'snl-kontinentaldrift': s('kontinentaldrift', 'kontinentaldrift'),
    'snl-wegener': s('Alfred_Wegener', 'Alfred Wegener'),
    'snl-pangea': s('Pangea', 'Pangea'),
    'snl-gondwana': s('Gondwanaland', 'Gondwanaland'),
    'snl-laurasia': s('Laurasia', 'Laurasia'),
    'snl-tethys': s('Tethyshavet', 'Tethyshavet'),
    'snl-midthavsrygg': s('midthavsrygg', 'midthavsrygg'),
    'snl-havbunnsspredning': s('havbunnsspredning', 'havbunnsspredning'),
    'snl-transform': s('transformforkastning', 'transformforkastning'),
    'snl-dyphavsgrop': s('dyphavsgrop', 'dyphavsgrop'),
    'snl-konveksjon': s('konveksjon_-_fysikk', 'konveksjon (fysikk)'),
    'snl-vulkan': s('vulkan', 'vulkan'),
    'snl-magma': s('magma', 'magma'),
    'snl-lava': s('lava', 'lava'),
    'snl-jordskjelv': s('jordskjelv', 'jordskjelv'),
    'snl-jordskjelv-norge': s('jordskjelv_i_Norge', 'jordskjelv i Norge'),
    'snl-store-jordskjelv': s('store_og_kjente_jordskjelv', 'store og kjente jordskjelv'),
    'snl-tsunami': s('tsunami', 'tsunami'),
    'snl-himalaya-geologi': s('Himalayas_geologi', 'Himalayas geologi'),
    'snl-andes': s('Andesfjellene', 'Andesfjellene'),
    'snl-riftdalen': s('Riftdalen', 'Riftdalen'),
    'snl-san-andreas': s('San_Andreas-forkastningen', 'San Andreas-forkastningen'),
    'snl-atlanterhavet': s('Atlanterhavet', 'Atlanterhavet'),
    'snl-island': s('Island', 'Island'),
    'snl-jan-mayen': s('Jan_Mayen', 'Jan Mayen'),
    'snl-hawaii': s('Hawaii', 'Hawaii'),
    'snl-eyjafjalla': s('Eyjafjallaj%C3%B6kull', 'Eyjafjallajökull'),
    'snl-etna': s('Etna_-_vulkan_i_Italia', 'Etna'),
    'snl-vesuv': s('Vesuv', 'Vesuv'),
    'snl-oslofeltet': s('Oslofeltet', 'Oslofeltet'),
    'snl-norges-geologi': s('Norges_geologi', 'Norges geologi'),
    'snl-kaledonsk': s('Den_kaledonske_orogenese', 'Den kaledonske orogenese'),
    'snl-glossopteris': s('glossopteris', 'glossopteris'),
    'snl-lystrosaurus': s('Lystrosaurus', 'Lystrosaurus'),
    'snl-mesosaurer': s('mesosaurer', 'mesosaurer'),
    'snl-mineraler': s('mineraler', 'mineraler'),
    'snl-krystall': s('krystall_-_geologi', 'krystall (geologi)'),
    'snl-bergarter': s('bergarter', 'bergarter'),
    'snl-magmatiske': s('magmatiske_bergarter', 'magmatiske bergarter'),
    'snl-dypbergarter': s('dypbergarter', 'dypbergarter'),
    'snl-sedimentare': s('sediment%C3%A6re_bergarter', 'sedimentære bergarter'),
    'snl-metamorfe': s('metamorfe_bergarter', 'metamorfe bergarter'),
    'snl-kvarts': s('kvarts', 'kvarts'),
    'snl-feltspat': s('feltspat', 'feltspat'),
    'snl-glimmer': s('glimmer', 'glimmer'),
    'snl-granitt': s('granitt', 'granitt'),
    'snl-basalt': s('basalt', 'basalt'),
    'snl-larvikitt': s('larvikitt', 'larvikitt'),
    'snl-sandstein': s('sandstein', 'sandstein'),
    'snl-kalkstein': s('kalkstein', 'kalkstein'),
    'snl-gneis': s('gneis', 'gneis'),
    'snl-marmor': s('marmor', 'marmor'),
    'snl-forvitring': s('forvitring', 'forvitring'),
    'snl-erosjon': s('erosjon', 'erosjon'),

    /* ---------- NDLA ---------- */
    'ndla-jordskorpa': { title: 'Jordskorpa i bevegelse', publisher: ndla, url: 'https://ndla.no/r/geografi/jordskorpa-i-bevegelse/c8d0e91a24', type: 'artikkel', lang: 'nb' },
    'ndla-bergarter': { title: 'Hvordan bergarter blir dannet', publisher: ndla, url: 'https://ndla.no/r/geografi/hvordan-bergarter-blir-dannet/978417980b', type: 'artikkel', lang: 'nb' },
    'ndla-jordskjelv': { title: 'Jordskjelv', publisher: ndla, url: 'https://ndla.no/r/geografi/jordskjelv/5ae1b6a21d', type: 'artikkel', lang: 'nb' },
    'ndla-tegn-plater': { title: 'Tegn og forklar platetektonikk', publisher: ndla, url: 'https://ndla.no/r/geografi/tegn-og-forklar-platetektonikk/2fcfaf92ea', type: 'artikkel', lang: 'nb' },
    'ndla-filmer': { title: 'Filmer og figurer i Indre krefter', publisher: ndla, url: 'https://ndla.no/r/geografi/filmer-og-figurer-i-indre-krefter/aa58bc7487', type: 'artikkel', lang: 'nb' },

    /* ---------- Videoer (bare lenker, aldri innebygd) ---------- */
    'yt-indre-krefter': { title: 'Introduksjon til Indre krefter', publisher: 'NDLA (YouTube)', url: 'https://www.youtube.com/watch?v=MeYq-luhgHU', type: 'video', lang: 'nb' },
    'yt-bergartstyper': { title: 'De tre bergartstypene', publisher: 'NDLA (YouTube)', url: 'https://www.youtube.com/watch?v=QC2Cd9waK9c', type: 'video', lang: 'nb' },
    'yt-platetektonikk': { title: 'Indre krefter: Platetektonikk', publisher: 'Det digitale klasserommet (YouTube)', url: 'https://www.youtube.com/watch?v=r8X-OUvobJk', type: 'video', lang: 'nb' },
    'yt-kretslop': { title: 'Indre krefter: Bergartenes kretsløp', publisher: 'Det digitale klasserommet (YouTube)', url: 'https://www.youtube.com/watch?v=XUy699ucr5w', type: 'video', lang: 'nb' },
    'yt-sentrum': { title: 'Three minutes to the centre of the Earth', publisher: 'BBC (YouTube)', url: 'https://www.youtube.com/watch?v=SeFT0ewzM6g', type: 'video', lang: 'en' },
    'yt-drift': { title: 'Continental Drift 101', publisher: 'National Geographic (YouTube)', url: 'https://www.youtube.com/watch?v=Wq9kLzm36h0', type: 'video', lang: 'en' },
    'yt-minuteearth': { title: 'Plate Tectonics Explained', publisher: 'MinuteEarth (YouTube)', url: 'https://www.youtube.com/watch?v=kwfNGatxUJI', type: 'video', lang: 'en' },

    /* ---------- Kartdata ---------- */
    'pb2002': { title: 'An updated digital model of plate boundaries (PB2002), Peter Bird 2003 – GeoJSON ved Hugo Ahlenius/Nordpil', publisher: 'GitHub: fraxen/tectonicplates (ODC-By 1.0)', url: 'https://github.com/fraxen/tectonicplates', type: 'artikkel', lang: 'en' }
  };
  for (const k in T.sources) T.sources[k].checked = T.sources[k].checked || checked;

  /* ---------- Bilder ---------- */
  const cc = { 'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/', 'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/', 'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/', 'CC0': 'https://creativecommons.org/publicdomain/zero/1.0/' };
  const m = function (file, w, h, title, author, license, commons, alt) {
    return { file: 'content/jorda/bilder/' + file, width: w, height: h, title: title, author: author, license: license, licenseUrl: cc[license] || '', source: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:' + commons, alt: alt };
  };
  T.media = {
    kvarts: m('kvarts.webp', 1000, 852, 'Quartz Brésil', 'Didier Descouens', 'CC BY-SA 4.0', 'Quartz_Br%C3%A9sil.jpg',
      { nb: 'En klynge med gjennomsiktige, sekskantede kvartskrystaller med spisse topper.', en: 'A cluster of transparent, six-sided quartz crystals with pointed tops.' }),
    feltspat: m('feltspat.webp', 1000, 722, 'Feldspar (Microcline)', 'U.S. Government', 'Fri bruk (Public domain)', 'Feldspar(Microcline)USGOV.jpg',
      { nb: 'Store, lyse feltspatkrystaller med flate sider.', en: 'Large, pale feldspar crystals with flat faces.' }),
    larvikitt: m('larvikitt.webp', 1000, 830, 'Blue Pearl Granite (larvikite), Larvik Batholith, Norway', 'James St. John', 'CC BY 2.0', 'Blue_Pearl_Granite_(larvikite)_(Larvik_Batholith,_292-298_Ma,_Early_Permian;_near_Larvik,_Norway)_1_(14620330099).jpg',
      { nb: 'Polert larvikitt: mørk stein med store krystaller som skinner blått.', en: 'Polished larvikite: a dark rock with large crystals that shimmer blue.' }),
    basalt: m('basalt.webp', 1000, 700, 'Basaltic lava (2021 eruption, Reykjanes Peninsula, Iceland)', 'James St. John', 'CC BY 2.0', 'Basaltic_lava_(late_March_2021_eruption_in_Geldingadalur_Valley,_Rekjanes_Peninsula,_Iceland)_1.jpg',
      { nb: 'En bit av svart, finkornet basalt fra et vulkanutbrudd på Island.', en: 'A piece of black, fine-grained basalt from a volcanic eruption in Iceland.' }),
    lagdeling: m('lagdeling.webp', 1000, 643, 'Grand Canyon layers', 'Mx. Granger', 'CC0', 'Grand_Canyon_layers_(cropped).jpg',
      { nb: 'En dyp canyon der fjellsidene har tydelige lag i ulike farger.', en: 'A deep canyon where the cliffs have clear layers in different colours.' }),
    gneis: m('gneis.webp', 1000, 873, 'Askøy gneis', 'Halvard Hatlen', 'Fri bruk (Public domain)', 'Akskoygneiss-norway.jpg',
      { nb: 'Polert, grå gneis med bølgete, hvite bånd.', en: 'Polished grey gneiss with wavy white bands.' }),
    wegener: m('wegener.webp', 760, 919, 'Prof. Alfred Wegener (ca. 1924–1930)', 'Ukjent fotograf / unknown', 'Fri bruk (Public domain)', 'Alfred_Wegener_ca.1924-30.jpg',
      { nb: 'Svart-hvitt portrett av Alfred Wegener i dress og slips.', en: 'Black-and-white portrait of Alfred Wegener in a suit and tie.' }),
    thingvellir: m('thingvellir.webp', 1000, 667, 'Almannagjá rift at Þingvellir National Park', 'Olga Ernst', 'CC BY-SA 4.0', 'Almannagj%C3%A1_rift_at_%C3%9Eingvellir_National_Park.jpg',
      { nb: 'En lang sprekk i lavabergrunnen på Island, med fjell i bakgrunnen.', en: 'A long crack in the lava bedrock in Iceland, with mountains in the background.' }),
    everest: m('everest.webp', 1000, 752, 'Golden Everest from Kala Patthar', 'Nirajha', 'CC BY-SA 4.0', 'Golden_Everest_from_Kala_Patthar.jpg',
      { nb: 'Snødekte topper i Himalaya i solnedgang. Mount Everest lyser gyllent.', en: 'Snow-covered peaks in the Himalayas at sunset. Mount Everest glows golden.' })
  };
})();
