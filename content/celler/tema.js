/* =====================================================================
   Celler og virus – OVERSIKT OVER TEMAET
   ===================================================================== */
(function () {
  const T = NatLab.topic('celler');

  T.title = { nb: 'Celler og virus', en: 'Cells and viruses' };
  T.lead = {
    nb: 'Alt som lever, er bygd opp av **celler**. Her ser du nærmere på dyreceller, planteceller og bakterier – og på **virus**, som ikke er celler i det hele tatt.',
    en: 'All living things are made of **cells**. Here you take a closer look at animal cells, plant cells and bacteria – and at **viruses**, which are not cells at all.'
  };

  // Kortnavn som brukes i tabeller og «Finnes i»
  T.orgNames = {
    dyrecelle: { nb: 'Dyrecelle', en: 'Animal cell' },
    plantecelle: { nb: 'Plantecelle', en: 'Plant cell' },
    bakterie: { nb: 'Bakterie', en: 'Bacterium' },
    virus: { nb: 'Virus', en: 'Virus' }
  };

  T.organisms = T.organisms || {};

  // Utvalgte ressurser på temasiden
  T.featured = ['ndla-cella', 'yt-dyrecelle-no', 'yt-pro-eu', 'yt-virus', 'ndla-virus-vaksiner', 'yt-organeller'];

  /* ---------- Størrelser (mikrometer, µm) ---------- */
  T.scale = {
    objects: [
      { name: { nb: 'Hårstrå', en: 'Human hair' }, size: 70, shape: 'hair', color: '#8a6239',
        range: { nb: 'ca. 0,05–0,1 mm tykt', en: 'about 0.05–0.1 mm thick' },
        text: { nb: 'Her ser du et hårstrå skåret over på tvers. Et hårstrå er omtrent så tynt som det minste vi kan se med det blotte øyet. Alt som kommer etter dette, trenger vi mikroskop for å se.', en: 'Here you see a human hair cut across. A hair is about as thin as the smallest thing we can see with the naked eye. Everything after this needs a microscope.' } },
      { name: { nb: 'Plantecelle', en: 'Plant cell' }, size: 50, shape: 'plant', color: '#5d8f2f',
        range: { nb: 'ca. 10–100 µm', en: 'about 10–100 µm' },
        text: { nb: 'Planteceller er ofte litt større enn dyreceller. Mange av dem kan du se i et vanlig skolemikroskop, for eksempel cellene i løkhinne.', en: 'Plant cells are often a bit larger than animal cells. You can see many of them with an ordinary school microscope, for example the cells in onion skin.' } },
      { name: { nb: 'Dyrecelle', en: 'Animal cell' }, size: 20, shape: 'animal', color: '#d6457a',
        range: { nb: 'ca. 10–30 µm', en: 'about 10–30 µm' },
        text: { nb: 'De fleste cellene i kroppen din er rundt 10–30 mikrometer. Det betyr at det er plass til rundt 50 celler ved siden av hverandre på én millimeter.', en: 'Most cells in your body are about 10–30 micrometres. That means about 50 cells fit side by side in one millimetre.' } },
      { name: { nb: 'Bakterie', en: 'Bacterium' }, size: 2, shape: 'bacterium', color: '#5d8f2f',
        range: { nb: 'ca. 1–5 µm', en: 'about 1–5 µm' },
        text: { nb: 'Bakterier er mye mindre enn cellene våre. Tarmbakterien E. coli er omtrent 2 mikrometer lang – rundt ti ganger mindre enn en vanlig dyrecelle.', en: 'Bacteria are much smaller than our cells. The gut bacterium E. coli is about 2 micrometres long – roughly ten times smaller than a typical animal cell.' } },
      { name: { nb: 'Bakteriofag', en: 'Bacteriophage' }, size: 0.2, shape: 'phage', color: '#e0533f',
        range: { nb: 'ca. 200 nm lang', en: 'about 200 nm long' },
        text: { nb: 'Bakteriofager er virus som angriper bakterier. Sammenlignet med bakterien de lander på, er de bittesmå.', en: 'Bacteriophages are viruses that attack bacteria. Compared with the bacterium they land on, they are tiny.' } },
      { name: { nb: 'Meslingvirus', en: 'Measles virus' }, size: 0.2, shape: 'virus', color: '#e8964f',
        range: { nb: 'ca. 100–300 nm', en: 'about 100–300 nm' },
        text: { nb: 'Meslingviruset er et av de større virusene, men du trenger likevel et elektronmikroskop for å se det.', en: 'The measles virus is one of the larger viruses, but you still need an electron microscope to see it.' } },
      { name: { nb: 'Influensavirus', en: 'Influenza virus' }, size: 0.1, shape: 'virus', color: '#e8964f',
        range: { nb: 'ca. 80–120 nm', en: 'about 80–120 nm' },
        text: { nb: 'Et influensavirus er omtrent 100 nanometer, altså en tidel av en mikrometer. Rundt 20 influensavirus får plass på rad langs en E. coli-bakterie.', en: 'An influenza virus is about 100 nanometres, which is a tenth of a micrometre. Around 20 influenza viruses fit in a row along an E. coli bacterium.' } }
    ]
  };

  /* ---------- Øvingsoppgaver ---------- */
  T.practice = {
    merk: ['dyrecelle', 'plantecelle', 'bakterie', 'influensa', 'bakteriofag', 'meslinger'],
    koble: ['dyrecelle', 'plantecelle', 'bakterie', 'influensa', 'bakteriofag'],
    sort: {
      cols: ['dyrecelle', 'plantecelle', 'bakterie', 'virus'],
      rows: ['cellemembran', 'cellevegg', 'cytoplasma', 'cellekjerne', 'arvestoff', 'ribosom', 'mitokondrie', 'kloroplast', 'kapsid']
    },
    order: [
      {
        id: 'virussyklus',
        title: { nb: 'Slik formerer et virus seg', en: 'How a virus multiplies' },
        help: { nb: 'Sett trinnene i riktig rekkefølge, fra første til siste.', en: 'Put the steps in the right order, from first to last.' },
        ends: [{ nb: 'Først', en: 'First' }, { nb: 'Til slutt', en: 'Last' }],
        items: [
          { nb: 'Viruset fester seg til en mottaker (reseptor) på cellen.', en: 'The virus attaches to a receptor on the cell.' },
          { nb: 'Viruset, eller arvestoffet til viruset, kommer inn i cellen.', en: 'The virus, or its genetic material, gets into the cell.' },
          { nb: 'Cellen kopierer virusets arvestoff og lager virusproteiner.', en: 'The cell copies the virus’s genetic material and makes virus proteins.' },
          { nb: 'Arvestoff og proteiner settes sammen til nye viruspartikler.', en: 'Genetic material and proteins are assembled into new virus particles.' },
          { nb: 'De nye virusene slipper ut og kan angripe nye celler.', en: 'The new viruses are released and can attack new cells.' }
        ]
      },
      {
        id: 'storrelse',
        title: { nb: 'Fra størst til minst', en: 'From largest to smallest' },
        help: { nb: 'Sorter fra størst (øverst) til minst (nederst).', en: 'Sort from largest (top) to smallest (bottom).' },
        ends: [{ nb: 'Størst', en: 'Largest' }, { nb: 'Minst', en: 'Smallest' }],
        items: [
          { nb: 'Tykkelsen på et hårstrå (ca. 70 µm)', en: 'The thickness of a hair (about 70 µm)' },
          { nb: 'Dyrecelle (ca. 20 µm)', en: 'Animal cell (about 20 µm)' },
          { nb: 'Bakterie (ca. 2 µm)', en: 'Bacterium (about 2 µm)' },
          { nb: 'Influensavirus (ca. 0,1 µm = 100 nm)', en: 'Influenza virus (about 0.1 µm = 100 nm)' },
          { nb: 'Ribosom (ca. 0,02–0,03 µm)', en: 'Ribosome (about 0.02–0.03 µm)' }
        ]
      },
      {
        id: 'fotosyntese',
        title: { nb: 'Energien fra sola', en: 'Energy from the sun' },
        help: { nb: 'Hvordan havner energien fra sola i musklene dine? Sett i riktig rekkefølge.', en: 'How does energy from the sun end up in your muscles? Put in the right order.' },
        ends: [{ nb: 'Først', en: 'First' }, { nb: 'Til slutt', en: 'Last' }],
        items: [
          { nb: 'Sollys treffer et blad.', en: 'Sunlight hits a leaf.' },
          { nb: 'Kloroplastene bruker lysenergi, vann og CO₂ til å lage glukose (fotosyntese).', en: 'The chloroplasts use light energy, water and CO₂ to make glucose (photosynthesis).' },
          { nb: 'Du spiser planten, og glukosen fraktes med blodet til cellene dine.', en: 'You eat the plant, and the glucose is carried by your blood to your cells.' },
          { nb: 'Mitokondriene bryter ned glukosen med oksygen (celleånding).', en: 'The mitochondria break down the glucose with oxygen (cellular respiration).' },
          { nb: 'Energien brukes når muskelcellene trekker seg sammen.', en: 'The energy is used when the muscle cells contract.' }
        ]
      }
    ]
  };

  /* ---------- Quizkategorier ---------- */
  T.quizSets = [
    { id: 'dyrecelle', name: { nb: 'Dyrecellen', en: 'The animal cell' } },
    { id: 'plantecelle', name: { nb: 'Plantecellen', en: 'The plant cell' } },
    { id: 'bakterie', name: { nb: 'Bakterier', en: 'Bacteria' } },
    { id: 'virus', name: { nb: 'Virus', en: 'Viruses' } },
    { id: 'sammenlign', name: { nb: 'Sammenligning', en: 'Comparison' } }
  ];

  T.pages = T.pages || {};
})();
