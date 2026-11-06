/* =====================================================================
   Celler og virus – KILDER, VIDEOER og BILDER
   ---------------------------------------------------------------------
   sources: alle kilder og «lær mer»-lenker i temaet.
     id         kort navn som brukes i artiklene (src: ['sml-virus'])
     title      tittel slik den står på nettsiden
     publisher  hvem som har laget den
     url        lenken
     type       'artikkel' eller 'video'
     lang       'nb', 'en' eller 'da'
     login      true hvis eleven må logge inn (f.eks. Aunivers)
     checked    datoen lenken sist ble sjekket
   media: bilder med lisens. Filene ligger i content/celler/bilder/.
   ===================================================================== */
(function () {
  const T = NatLab.topic('celler');
  const checked = '2026-11-06';
  const snl = 'Store norske leksikon';
  const sml = 'Store medisinske leksikon';
  const fhi = 'Folkehelseinstituttet (FHI)';
  const ndla = 'NDLA';

  T.sources = {
    /* ---------- Oppslagsverk ---------- */
    'snl-celle': { title: 'celle', publisher: snl, url: 'https://snl.no/celle', type: 'artikkel', lang: 'nb' },
    'snl-cellens-oppbygning': { title: 'cellens oppbygning', publisher: snl, url: 'https://snl.no/cellens_oppbygning', type: 'artikkel', lang: 'nb' },
    'sml-cellemembraner': { title: 'cellemembraner – hinner rundt celler', publisher: snl, url: 'https://sml.snl.no/cellemembraner', type: 'artikkel', lang: 'nb' },
    'sml-cytoplasma': { title: 'cytoplasma', publisher: sml, url: 'https://sml.snl.no/cytoplasma', type: 'artikkel', lang: 'nb' },
    'sml-cellekjerne': { title: 'cellekjerne', publisher: sml, url: 'https://sml.snl.no/cellekjerne', type: 'artikkel', lang: 'nb' },
    'sml-mitokondrie': { title: 'mitokondrie – cellenes energiverk', publisher: snl, url: 'https://sml.snl.no/mitokondrie', type: 'artikkel', lang: 'nb' },
    'sml-ribosom': { title: 'ribosom', publisher: sml, url: 'https://sml.snl.no/ribosom', type: 'artikkel', lang: 'nb' },
    'snl-er': { title: 'endoplasmatisk retikulum', publisher: snl, url: 'https://snl.no/endoplasmatisk_retikulum', type: 'artikkel', lang: 'nb' },
    'snl-golgi': { title: 'golgiapparatet', publisher: snl, url: 'https://snl.no/golgiapparatet', type: 'artikkel', lang: 'nb' },
    'snl-lysosom': { title: 'lysosom', publisher: snl, url: 'https://snl.no/lysosom', type: 'artikkel', lang: 'nb' },
    'snl-cellevegg': { title: 'cellevegg – planter', publisher: snl, url: 'https://snl.no/cellevegg_-_planter', type: 'artikkel', lang: 'nb' },
    'snl-kloroplaster': { title: 'kloroplaster', publisher: snl, url: 'https://snl.no/kloroplaster', type: 'artikkel', lang: 'nb' },
    'snl-vakuole': { title: 'vakuole', publisher: snl, url: 'https://snl.no/vakuole', type: 'artikkel', lang: 'nb' },
    'snl-fotosyntese': { title: 'fotosyntese – viktig livsprosess på Jorda', publisher: snl, url: 'https://snl.no/fotosyntese', type: 'artikkel', lang: 'nb' },
    'snl-celleanding': { title: 'celleånding – nedbrytning av næringsstoffer', publisher: snl, url: 'https://snl.no/celle%C3%A5nding', type: 'artikkel', lang: 'nb' },
    'snl-karbonkretslopet': { title: 'karbonkretsløpet', publisher: snl, url: 'https://snl.no/karbonkretsl%C3%B8pet', type: 'artikkel', lang: 'nb' },
    'snl-eukaryoter': { title: 'eukaryoter', publisher: snl, url: 'https://snl.no/eukaryoter', type: 'artikkel', lang: 'nb' },
    'sml-prokaryot': { title: 'prokaryot', publisher: sml, url: 'https://sml.snl.no/prokaryot', type: 'artikkel', lang: 'nb' },
    'sml-bakterier': { title: 'bakterier', publisher: sml, url: 'https://sml.snl.no/bakterier', type: 'artikkel', lang: 'nb' },
    'snl-plasmid': { title: 'plasmid', publisher: snl, url: 'https://snl.no/plasmid', type: 'artikkel', lang: 'nb' },
    'snl-flagell': { title: 'flagell', publisher: snl, url: 'https://snl.no/flagell', type: 'artikkel', lang: 'nb' },
    'snl-dna': { title: 'DNA – arvestoffet i alle celler', publisher: snl, url: 'https://snl.no/DNA', type: 'artikkel', lang: 'nb' },
    'sml-antibiotika': { title: 'antibiotika – legemidler mot bakterier', publisher: snl, url: 'https://sml.snl.no/antibiotika', type: 'artikkel', lang: 'nb' },
    'sml-antibiotikaresistens': { title: 'antibiotikaresistens', publisher: sml, url: 'https://sml.snl.no/antibiotikaresistens', type: 'artikkel', lang: 'nb' },
    'sml-virus': { title: 'virus', publisher: sml, url: 'https://sml.snl.no/virus', type: 'artikkel', lang: 'nb' },
    'sml-bakteriofag': { title: 'bakteriofag', publisher: sml, url: 'https://sml.snl.no/bakteriofag', type: 'artikkel', lang: 'nb' },
    'sml-influensavirus': { title: 'influensavirus', publisher: sml, url: 'https://sml.snl.no/influensavirus', type: 'artikkel', lang: 'nb' },
    'sml-influensa': { title: 'influensa', publisher: sml, url: 'https://sml.snl.no/influensa', type: 'artikkel', lang: 'nb' },
    'sml-meslinger': { title: 'meslinger', publisher: sml, url: 'https://sml.snl.no/meslinger', type: 'artikkel', lang: 'nb' },
    'sml-meslingvirus': { title: 'morbillivirus – meslingvirus', publisher: sml, url: 'https://sml.snl.no/morbillivirus_-_meslingvirus', type: 'artikkel', lang: 'nb' },
    'sml-vaksine': { title: 'vaksine', publisher: sml, url: 'https://sml.snl.no/vaksine', type: 'artikkel', lang: 'nb' },
    'sml-immunforsvar': { title: 'immunforsvar', publisher: sml, url: 'https://sml.snl.no/immunforsvar', type: 'artikkel', lang: 'nb' },
    'snl-hooke': { title: 'Robert Hooke', publisher: snl, url: 'https://snl.no/Robert_Hooke', type: 'artikkel', lang: 'nb' },
    'snl-mikroskop': { title: 'mikroskop', publisher: snl, url: 'https://snl.no/mikroskop', type: 'artikkel', lang: 'nb' },

    /* ---------- Folkehelseinstituttet ---------- */
    'fhi-vaksiner-barn': { title: 'Vaksiner til barn', publisher: fhi, url: 'https://www.fhi.no/va/vaksiner-barn/', type: 'artikkel', lang: 'nb' },
    'fhi-vaksineplan': { title: 'Når får barnet ditt tilbud om de ulike vaksinene i barnevaksinasjonsprogrammet?', publisher: fhi, url: 'https://www.fhi.no/va/vaksiner-barn/nar-far-barnet-ditt-tilbud-om-de-ulike-vaksinene/', type: 'artikkel', lang: 'nb' },
    'fhi-hvorfor-vaksinere': { title: 'Hvorfor er det viktig å vaksinere?', publisher: fhi, url: 'https://www.fhi.no/va/vaksiner-barn/hvorfor-vaksinere-/', type: 'artikkel', lang: 'nb' },
    'fhi-influensavaksine': { title: 'Influensavaksine – informasjon til befolkningen', publisher: fhi, url: 'https://www.fhi.no/va/voksenvaksinasjon/vaksiner-mot-sykdommene-a-a/vaksiner-i-voksenvaksinasjonsprogrammet/influensavaksine/', type: 'artikkel', lang: 'nb' },
    'fhi-antibiotikaresistens': { title: 'Antibiotikaresistens (antimikrobiell resistens)', publisher: fhi, url: 'https://www.fhi.no/sm/antibiotikaresistens/', type: 'artikkel', lang: 'nb' },

    /* ---------- NDLA ---------- */
    'ndla-cella': { title: 'Cella', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/cella/1eeab098e4', type: 'artikkel', lang: 'nb' },
    'ndla-utforsk-egne-celler': { title: 'Forsøk: Utforsk egne celler', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/forsok-utforsk-egne-celler/1ae5c894e1', type: 'artikkel', lang: 'nb' },
    'ndla-utforsk-planteceller': { title: 'Forsøk: Utforsk planteceller', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/forsok-utforsk-planteceller/f835715d0e', type: 'artikkel', lang: 'nb' },
    'ndla-fotosyntese': { title: 'Fotosyntese', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/fotosyntese/ae19d59d02', type: 'artikkel', lang: 'nb' },
    'ndla-bakterier': { title: 'Bakterier', publisher: ndla, url: 'https://ndla.no/r/naturfag-hs/bakterier/6c4fc9c819', type: 'artikkel', lang: 'nb' },
    'ndla-pro-eu': { title: 'Fra prokaryote til eukaryote celler', publisher: ndla, url: 'https://ndla.no/r/biologi-1/fra-prokaryote-til-eukaryote-celler/c0c84b5b68', type: 'artikkel', lang: 'nb' },
    'ndla-virus-vaksiner': { title: 'Virus og vaksiner', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/virus-og-vaksiner/2570405213', type: 'artikkel', lang: 'nb' },
    'ndla-virus-levende': { title: 'Virus – dødt eller levende?', publisher: ndla, url: 'https://ndla.no/r/biologi-1/virus---dodt-eller-levende/e48adde60f', type: 'artikkel', lang: 'nb' },
    'ndla-vaksiner': { title: 'Hvordan virker vaksiner?', publisher: ndla, url: 'https://ndla.no/r/biologi-1/hvordan-virker-vaksiner/61eb735649', type: 'artikkel', lang: 'nb' },
    'ndla-meslinger': { title: 'Meslinger', publisher: ndla, url: 'https://ndla.no/r/helse-og-sykdom-hs-hes-vg2/meslinger/377c14217d', type: 'artikkel', lang: 'nb' },

    /* ---------- Videoer (YouTube – åpnes i ny fane) ---------- */
    'yt-dyrecelle-no': { title: 'Oppbygning av dyrecelle', publisher: 'FM-Education (YouTube)', url: 'https://www.youtube.com/watch?v=a6ot3p3EG0I', type: 'video', lang: 'nb' },
    'yt-organeller': { title: 'Cell Organelles and Structures Review', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=6mgkoqcm6Sg', type: 'video', lang: 'en' },
    'yt-cellestruktur': { title: 'Biology: Cell Structure', publisher: 'Nucleus Medical Media (YouTube)', url: 'https://www.youtube.com/watch?v=URUJD5NEXC8', type: 'video', lang: 'en' },
    'yt-plante-dyr': { title: 'Plant vs. Animal Cell (Shorts)', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=IJJV34vXnAg', type: 'video', lang: 'en' },
    'yt-pro-eu': { title: 'Prokaryotic vs. Eukaryotic Cells (Updated)', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=Pxujitlv8wc', type: 'video', lang: 'en' },
    'yt-bakterier': { title: 'Bacteria (Updated)', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=ORB866QSGv8', type: 'video', lang: 'en' },
    'yt-virus': { title: 'Viruses (Updated)', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=8FqlTslU22s', type: 'video', lang: 'en' },
    'yt-bakterie-virus': { title: 'Bacterial vs. Viral Pathogens (Shorts)', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=eckszvxQgPg', type: 'video', lang: 'en' },
    'yt-kapsel-kapsid': { title: 'Differences Between a Bacterial Capsule and Viral Capsid (Shorts)', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=MpoD0qfAJME', type: 'video', lang: 'en' },
    'yt-fag-kort': { title: 'Bacteriophages (Shorts)', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=KSAvn5FEz2o', type: 'video', lang: 'en' },
    'yt-fag-kurz': { title: 'The Deadliest Being on Planet Earth – The Bacteriophage', publisher: 'Kurzgesagt – In a Nutshell (YouTube)', url: 'https://www.youtube.com/watch?v=YI3tsmFsrOg', type: 'video', lang: 'en' },
    'yt-antibiotika': { title: 'Antibiotics, Antivirals, and Vaccines', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=uVUf_pt7Sh0', type: 'video', lang: 'en' },
    'yt-immunforsvar': { title: 'Immune System', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=fSEFXl2XQpc', type: 'video', lang: 'en' },
    'yt-immun-kurz': { title: 'The Immune System Explained I – Bacteria Infection', publisher: 'Kurzgesagt – In a Nutshell (YouTube)', url: 'https://www.youtube.com/watch?v=zQGOcOUBi6s', type: 'video', lang: 'en' },
    'yt-virusformering': { title: 'Viral Replication', publisher: 'Bozeman Science (YouTube)', url: 'https://www.youtube.com/watch?v=EqK1CYYQIug', type: 'video', lang: 'en' }

    /* Aunivers: Legg til lenker slik (elevene må logge inn):
    'aunivers-celler': { title: 'Celler', publisher: 'Aunivers (Aschehoug)', url: 'https://...', type: 'artikkel', lang: 'nb', login: true },
    */
  };
  for (const k in T.sources) T.sources[k].checked = T.sources[k].checked || checked;

  /* ---------- Bilder (fotografier) ---------- */
  const commons = 'Wikimedia Commons';
  T.media = {
    onion: {
      file: 'content/celler/bilder/onion.webp', width: 960, height: 720,
      title: 'Onion Epidermis Cells W.M. 40x', author: 'loganrickert', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
      source: commons, url: 'https://commons.wikimedia.org/wiki/File:Onion_Epidermis_Cells_W.M._40x_-_132.jpg',
      alt: { nb: 'Lysmikroskopbilde av løkhinne: mange lange, rektangulære celler med tydelige vegger mellom seg.', en: 'Light microscope image of onion skin: many long, rectangular cells with clear walls between them.' }
    },
    elodea: {
      file: 'content/celler/bilder/elodea.webp', width: 1000, height: 1334,
      title: 'Anacharis Magnified', author: 'Lilyviolet', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      source: commons, url: 'https://commons.wikimedia.org/wiki/File:Anacharis_Magnified.jpg',
      alt: { nb: 'Blad av vasspest sett gjennom okularet på et mikroskop: rader med celler fylt av små grønne korn (kloroplaster).', en: 'A leaf of waterweed seen through a microscope eyepiece: rows of cells filled with small green grains (chloroplasts).' }
    },
    cheek: {
      file: 'content/celler/bilder/cheek.webp', width: 1000, height: 906,
      title: 'Human epithelial cells stained with methylene blue dye', author: 'Daliasalloum', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
      source: commons, url: 'https://commons.wikimedia.org/wiki/File:Human_epithelial_cells_stained_with_methylene_blue_dye.jpg',
      alt: { nb: 'Celler fra innsiden av kinnet farget blå med metylenblått. Cellene er flate og uregelmessige, med en mørkere kjerne.', en: 'Cells from the inside of the cheek stained blue with methylene blue. The cells are flat and irregular, with a darker nucleus.' }
    },
    ecoli: {
      file: 'content/celler/bilder/ecoli.webp', width: 1000, height: 841,
      title: 'E. coli Bacteria', author: 'NIAID (National Institute of Allergy and Infectious Diseases)', license: 'Fri bruk (Public domain)', licenseUrl: '',
      source: commons, url: 'https://commons.wikimedia.org/wiki/File:E._coli_Bacteria_(7316101966).jpg',
      alt: { nb: 'Elektronmikroskopbilde av mange stavformede bakterier (E. coli) som ligger over hverandre. Målestokken viser 2 mikrometer.', en: 'Electron microscope image of many rod-shaped bacteria (E. coli) lying on top of each other. The scale bar shows 2 micrometres.' }
    },
    influenza: {
      file: 'content/celler/bilder/influenza.webp', width: 1000, height: 855,
      title: 'Influenza virus particle (farget)', author: 'Cynthia Goldsmith / CDC (Dr. Erskine L. Palmer)', license: 'Fri bruk (Public domain)', licenseUrl: '',
      source: commons, url: 'https://commons.wikimedia.org/wiki/File:Influenza_virus_particle_color.jpg',
      alt: { nb: 'Elektronmikroskopbilde av et influensavirus, farget i etterkant: et oransje ytre hylster og lilla arvestoff inni.', en: 'Electron microscope image of an influenza virus, coloured afterwards: an orange outer envelope and purple genetic material inside.' }
    },
    phage: {
      file: 'content/celler/bilder/phage.webp', width: 1000, height: 1000,
      title: 'Enterobacteria phage T2 transmission electron micrograph', author: 'SnaxMikn', license: 'CC BY-SA 4.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
      source: commons, url: 'https://commons.wikimedia.org/wiki/File:Enterobacteria_phage_T2_transmission_electron_micrograph.jpg',
      alt: { nb: 'Elektronmikroskopbilde av en bakteriofag med et rundt hode og en lang, stripete hale. Målestokken viser 100 nanometer.', en: 'Electron microscope image of a bacteriophage with a rounded head and a long, striped tail. The scale bar shows 100 nanometres.' }
    },
    measles: {
      file: 'content/celler/bilder/measles.webp', width: 1000, height: 1007,
      title: 'Measles virus', author: 'Cynthia S. Goldsmith / CDC', license: 'Fri bruk (Public domain)', licenseUrl: '',
      source: commons, url: 'https://commons.wikimedia.org/wiki/File:Measles_virus.JPG',
      alt: { nb: 'Svart-hvitt elektronmikroskopbilde av et meslingvirus: en rund partikkel med en mørk kant og kornete innhold.', en: 'Black-and-white electron microscope image of a measles virus: a round particle with a dark edge and grainy contents.' }
    }
  };
})();
