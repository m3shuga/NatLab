/* =====================================================================
   NatLab – liste over temaer på forsiden
   Rekkefølgen her er rekkefølgen på forsiden.
   status: 'klar' = temaet er ferdig og kan åpnes
           'snart' = vises som «Kommer snart»
   For å legge til et nytt tema: se README.md, del 6.
   ===================================================================== */
NatLab.registry = [
  {
    id: 'celler',
    status: 'klar',
    title: { nb: 'Celler og virus', en: 'Cells and viruses' },
    text: { nb: 'Dyreceller, planteceller, bakterier og virus – hva de består av og hvordan de fungerer.', en: 'Animal cells, plant cells, bacteria and viruses – what they are made of and how they work.' },
    art: 'dyrecelle'   // hvilken tegning som vises på kortet
  },
  {
    id: 'okologi',
    status: 'klar',
    title: { nb: 'Økologi og økosystemer', en: 'Ecology and ecosystems' },
    text: { nb: 'Skogen og havet, tilpasninger, næringsnett og energi – og hvordan mennesker påvirker naturen.', en: 'The forest and the sea, adaptations, food webs and energy – and how humans affect nature.' },
    art: 'skognett'
  },
  {
    id: 'jorda',
    status: 'klar',
    title: { nb: 'Historien om Jorda', en: 'The story of the Earth' },
    text: { nb: 'Jordas lag, platetektonikk, vulkaner og jordskjelv, mineraler og bergarter – og Alfred Wegener.', en: 'The Earth’s layers, plate tectonics, volcanoes and earthquakes, minerals and rocks – and Alfred Wegener.' },
    art: 'lagene'
  },
  {
    id: 'universet',
    status: 'snart',
    title: { nb: 'Universet', en: 'The Universe' },
    text: { nb: 'Jorda, solsystemet, stjerner og galakser.', en: 'The Earth, the solar system, stars and galaxies.' },
    icon: 'planet'
  },
  {
    id: 'fysikk',
    status: 'snart',
    title: { nb: 'Fysikk og energi', en: 'Physics and energy' },
    text: { nb: 'Krefter, bevegelse, elektrisitet og energi.', en: 'Forces, motion, electricity and energy.' },
    icon: 'bolt'
  },
  {
    id: 'labarbeid',
    status: 'snart',
    title: { nb: 'Labarbeid', en: 'Lab work' },
    text: { nb: 'Utstyr, sikkerhet, forsøk og rapportskriving.', en: 'Equipment, safety, experiments and lab reports.' },
    icon: 'flask'
  }
];
