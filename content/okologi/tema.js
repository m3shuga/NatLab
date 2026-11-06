/* =====================================================================
   Økologi og økosystemer – OVERSIKT OVER TEMAET
   ===================================================================== */
(function () {
  const T = NatLab.topic('okologi');

  T.title = { nb: 'Økologi og økosystemer', en: 'Ecology and ecosystems' };
  T.lead = {
    nb: 'Hvordan henger alt i naturen sammen? Her lærer du om økosystemer, hvordan arter er tilpasset leveområdet sitt, hvem som spiser hvem – og hvordan energien fra sola holder alt i gang. Hovedeksemplet er **skogen på Østlandet**, og vi sammenligner med **Norskehavet**.',
    en: 'How is everything in nature connected? Here you learn about ecosystems, how species are adapted to their habitat, who eats whom – and how energy from the sun keeps everything going. The main example is **the forest in south-eastern Norway**, and we compare it with **the Norwegian Sea**.'
  };
  T.cardLabel = { nb: 'Del', en: 'Part' };
  T.cardCount = { nb: 'deler', en: 'parts' };
  T.cardsTitle = { nb: 'Fem deler', en: 'Five parts' };
  T.cardsLead = { nb: 'Gå gjennom delene i rekkefølge, eller hopp rett til det du trenger.', en: 'Work through the parts in order, or jump straight to what you need.' };
  T.orgNames = {};
  T.organisms = T.organisms || {};
  T.pages = T.pages || {};

  /* Rollene i næringsnettet – én farge per rolle i hele temaet */
  T.roles = {
    produsent: { name: { nb: 'Produsent', en: 'Producer' }, color: '#2f9d4f' },
    primaer: { name: { nb: 'Primærkonsument', en: 'Primary consumer' }, color: '#c9a227' },
    sekundaer: { name: { nb: 'Sekundærkonsument', en: 'Secondary consumer' }, color: '#e8712f' },
    toppredator: { name: { nb: 'Toppredator', en: 'Top predator' }, color: '#c42b4f' },
    nedbryter: { name: { nb: 'Nedbryter', en: 'Decomposer' }, color: '#8b6a45' }
  };
  /* Typer tilpasning */
  T.adaptTypes = {
    struktur: { name: { nb: 'Kropp og utseende', en: 'Body and appearance' } },
    funksjon: { name: { nb: 'Kroppens funksjoner', en: 'Body functions' } },
    atferd: { name: { nb: 'Atferd', en: 'Behaviour' } }
  };
  /* Overskrifter i infopanelet når du trykker på noe */
  T.panelLabels = {
    what: { nb: 'Hva er det?', en: 'What is it?' },
    does: { nb: 'Rolle i økosystemet', en: 'Role in the ecosystem' },
    fact: { nb: 'Tilpasning og fakta', en: 'Adaptation and facts' }
  };

  /* Verktøy på temasiden */
  T.tools = [
    { icon: 'compare', href: '#okologi-naeringsnett', title: { nb: 'Interaktivt næringsnett', en: 'Interactive food web' }, desc: { nb: 'Utforsk, fjern arter og regn energi', en: 'Explore, remove species and calculate energy' } },
    { icon: 'flask', href: '#okologi-feltarbeid', title: { nb: 'Feltarbeid', en: 'Fieldwork' }, desc: { nb: 'Undersøk et økosystem i nærmiljøet', en: 'Investigate a local ecosystem' } },
    { icon: 'puzzle', href: '#okologi-ov', title: NatLab.ui.practiceTitle, desc: { nb: 'Sorter, koble, ordne og bygg nett', en: 'Sort, match, order and build webs' } },
    { icon: 'quiz', href: '#okologi-quiz', title: NatLab.ui.quizTitle, desc: NatLab.ui.quizDesc }
  ];
  T.featured = ['ndla-okologi', 'ndla-naeringskjeder', 'yt-naeringsnett', 'yt-our-planet-skog', 'yt-attenborough-life', 'snl-okosystem'];

  /* ---------- Øvingsoppgaver ---------- */
  T.practice = {
    merk: ['skog', 'hav'],
    grupper: [
      { id: 'biotisk', title: { nb: 'Biotisk eller abiotisk?', en: 'Biotic or abiotic?' },
        help: { nb: 'Er faktoren **levende (biotisk)** eller **ikke-levende (abiotisk)**? Velg et kort og trykk på riktig gruppe.', en: 'Is the factor **living (biotic)** or **non-living (abiotic)**? Pick a card and tap the right group.' },
        cats: [{ id: 'b', name: { nb: 'Biotisk (levende)', en: 'Biotic (living)' } }, { id: 'a', name: { nb: 'Abiotisk (ikke-levende)', en: 'Abiotic (non-living)' } }],
        items: [
          { text: { nb: 'Sollys', en: 'Sunlight' }, cat: 'a' }, { text: { nb: 'Temperatur', en: 'Temperature' }, cat: 'a' }, { text: { nb: 'Nedbør', en: 'Precipitation' }, cat: 'a' },
          { text: { nb: 'Jordsmonn', en: 'Soil' }, cat: 'a' }, { text: { nb: 'Saltholdighet i havet', en: 'Salinity of the sea' }, cat: 'a' }, { text: { nb: 'Havstrømmer', en: 'Ocean currents' }, cat: 'a' },
          { text: { nb: 'Vind', en: 'Wind' }, cat: 'a' }, { text: { nb: 'Snødybde', en: 'Snow depth' }, cat: 'a' },
          { text: { nb: 'Gran', en: 'Spruce' }, cat: 'b' }, { text: { nb: 'Elg', en: 'Moose' }, cat: 'b' }, { text: { nb: 'Sopp', en: 'Fungi' }, cat: 'b' },
          { text: { nb: 'Bakterier i jorda', en: 'Bacteria in the soil' }, cat: 'b' }, { text: { nb: 'Raudåte', en: 'Calanus (red copepod)' }, cat: 'b' }, { text: { nb: 'Konkurranse om mat', en: 'Competition for food' }, cat: 'b' },
          { text: { nb: 'Rovdyr som jakter', en: 'Predators hunting' }, cat: 'b' }, { text: { nb: 'Sykdom som sprer seg mellom dyr', en: 'Disease spreading between animals' }, cat: 'b' }
        ] },
      { id: 'roller', title: { nb: 'Produsent, konsument eller nedbryter?', en: 'Producer, consumer or decomposer?' },
        help: { nb: 'Hvilken rolle har organismen i økosystemet?', en: 'What role does the organism have in the ecosystem?' },
        cats: [{ id: 'p', name: { nb: 'Produsent', en: 'Producer' } }, { id: 'k', name: { nb: 'Konsument', en: 'Consumer' } }, { id: 'n', name: { nb: 'Nedbryter', en: 'Decomposer' } }],
        items: [
          { text: { nb: 'Gran', en: 'Spruce' }, cat: 'p' }, { text: { nb: 'Blåbærlyng', en: 'Bilberry' }, cat: 'p' }, { text: { nb: 'Planteplankton', en: 'Phytoplankton' }, cat: 'p' }, { text: { nb: 'Tare', en: 'Kelp' }, cat: 'p' },
          { text: { nb: 'Elg', en: 'Moose' }, cat: 'k' }, { text: { nb: 'Gaupe', en: 'Lynx' }, cat: 'k' }, { text: { nb: 'Raudåte', en: 'Calanus' }, cat: 'k' }, { text: { nb: 'Sild', en: 'Herring' }, cat: 'k' }, { text: { nb: 'Kjøttmeis', en: 'Great tit' }, cat: 'k' },
          { text: { nb: 'Sopp på en død stokk', en: 'Fungi on a dead log' }, cat: 'n' }, { text: { nb: 'Meitemark', en: 'Earthworm' }, cat: 'n' }, { text: { nb: 'Bakterier i jorda', en: 'Bacteria in the soil' }, cat: 'n' }
        ] },
      { id: 'tilpasning', title: { nb: 'Hvilken type tilpasning?', en: 'Which type of adaptation?' },
        help: { nb: 'Er tilpasningen en del av **kroppen og utseendet**, en av **kroppens funksjoner**, eller **atferd** (det dyret gjør)?', en: 'Is the adaptation part of the **body and appearance**, one of the **body’s functions**, or **behaviour** (what the animal does)?' },
        cats: [{ id: 'struktur', name: { nb: 'Kropp og utseende', en: 'Body and appearance' } }, { id: 'funksjon', name: { nb: 'Kroppens funksjoner', en: 'Body functions' } }, { id: 'atferd', name: { nb: 'Atferd', en: 'Behaviour' } }],
        items: [
          { text: { nb: 'Haren får hvit pels om vinteren', en: 'The hare gets white fur in winter' }, cat: 'struktur' },
          { text: { nb: 'Elgen har lange bein som gjør det lett å gå i dyp snø', en: 'The moose has long legs that make it easy to walk in deep snow' }, cat: 'struktur' },
          { text: { nb: 'Grana er smal på toppen, så snøen glir av', en: 'The spruce is narrow at the top, so the snow slides off' }, cat: 'struktur' },
          { text: { nb: 'Selen har et tykt spekklag', en: 'The seal has a thick layer of blubber' }, cat: 'struktur' },
          { text: { nb: 'Raudåta lagrer fett og «hviler» på dypt vann om vinteren', en: 'The calanus stores fat and “rests” in deep water in winter' }, cat: 'funksjon' },
          { text: { nb: 'Pelsskiftet hos haren styres av lys og temperatur', en: 'The hare’s change of fur is controlled by light and temperature' }, cat: 'funksjon' },
          { text: { nb: 'Plantene lager sukker av lys (fotosyntese)', en: 'Plants make sugar from light (photosynthesis)' }, cat: 'funksjon' },
          { text: { nb: 'Ekornet gjemmer frø og nøtter til vinteren', en: 'The squirrel hides seeds and nuts for the winter' }, cat: 'atferd' },
          { text: { nb: 'Spekkhoggere jakter sammen i flokk', en: 'Orcas hunt together in groups' }, cat: 'atferd' },
          { text: { nb: 'Silda svømmer i store stimer', en: 'Herring swim in large schools' }, cat: 'atferd' },
          { text: { nb: 'Mange fugler trekker sørover om høsten', en: 'Many birds migrate south in autumn' }, cat: 'atferd' }
        ] }
    ],
    par: [
      { id: 'begreper', title: { nb: 'Begreper i økologi', en: 'Terms in ecology' },
        items: [
          { a: { nb: 'Økosystem', en: 'Ecosystem' }, b: { nb: 'Alle organismene i et område sammen med de ikke-levende forholdene', en: 'All the organisms in an area together with the non-living conditions' } },
          { a: { nb: 'Populasjon', en: 'Population' }, b: { nb: 'Alle individene av én art i et område', en: 'All the individuals of one species in an area' } },
          { a: { nb: 'Samfunn', en: 'Community' }, b: { nb: 'Alle populasjonene av ulike arter som lever i samme område', en: 'All the populations of different species living in the same area' } },
          { a: { nb: 'Habitat (leveområde)', en: 'Habitat' }, b: { nb: 'Stedet der en art lever og finner det den trenger', en: 'The place where a species lives and finds what it needs' } },
          { a: { nb: 'Nisje', en: 'Niche' }, b: { nb: 'Artens «jobb» og plass i økosystemet: hva den spiser, når og hvor den er aktiv', en: 'The species’ “job” and place in the ecosystem: what it eats, when and where it is active' } },
          { a: { nb: 'Konkurranse', en: 'Competition' }, b: { nb: 'Når flere individer eller arter trenger den samme begrensede ressursen', en: 'When several individuals or species need the same limited resource' } },
          { a: { nb: 'Trofisk nivå (næringsnivå)', en: 'Trophic level' }, b: { nb: 'Hvilket trinn en organisme er på i næringskjeden', en: 'Which step an organism is on in the food chain' } },
          { a: { nb: 'Abiotisk faktor', en: 'Abiotic factor' }, b: { nb: 'Ikke-levende forhold, som lys, temperatur og vann', en: 'Non-living conditions, such as light, temperature and water' } }
        ] },
      { id: 'energi', title: { nb: 'Energi i økosystemet', en: 'Energy in the ecosystem' },
        items: [
          { a: { nb: 'Energibevaring', en: 'Conservation of energy' }, b: { nb: 'Energi kan ikke oppstå eller forsvinne, bare gå over til andre former', en: 'Energy cannot be created or destroyed, only change into other forms' } },
          { a: { nb: '10 %-regelen', en: 'The 10 % rule' }, b: { nb: 'Omtrent en tidel av energien går videre til neste trofiske nivå', en: 'About one tenth of the energy passes on to the next trophic level' } },
          { a: { nb: 'Energikvalitet', en: 'Energy quality' }, b: { nb: 'Hvor lett energien kan brukes til å få noe til å skje. Varme har lav kvalitet.', en: 'How easily the energy can be used to make something happen. Heat has low quality.' } },
          { a: { nb: 'Fotosyntese', en: 'Photosynthesis' }, b: { nb: 'Strålingsenergi fra sola blir til kjemisk energi i sukker', en: 'Radiant energy from the sun becomes chemical energy in sugar' } },
          { a: { nb: 'Celleånding', en: 'Cellular respiration' }, b: { nb: 'Kjemisk energi i maten frigjøres, og mye blir til varme', en: 'Chemical energy in food is released, and much becomes heat' } },
          { a: { nb: 'Energipyramide', en: 'Energy pyramid' }, b: { nb: 'Figur som viser at det er mindre energi for hvert trofiske nivå', en: 'A figure showing there is less energy at each trophic level' } }
        ] }
    ],
    nett: [
      { id: 'skog', web: 'skog', title: { nb: 'Skogen (lett)', en: 'The forest (easy)' }, nodes: ['blaabaer', 'gress', 'gran', 'hare', 'skogmus', 'ekorn', 'rodrev', 'gaupe', 'honsehauk'] },
      { id: 'hav', web: 'hav', title: { nb: 'Norskehavet', en: 'The Norwegian Sea' }, nodes: ['planteplankton', 'tare', 'raudate', 'krakebolle', 'sild', 'taskekrabbe', 'torsk', 'lunde', 'steinkobbe', 'spekkhogger'] },
      { id: 'skogstor', web: 'skog', title: { nb: 'Skogen (vanskelig)', en: 'The forest (hard)' }, nodes: ['gran', 'blaabaer', 'bjork', 'gress', 'larve', 'elg', 'raadyr', 'hare', 'skogmus', 'ekorn', 'kjottmeis', 'rodrev', 'kattugle', 'gaupe', 'ulv', 'honsehauk'] }
    ],
    order: [
      { id: 'kjedeskog', title: { nb: 'Næringskjede i skogen', en: 'Food chain in the forest' },
        help: { nb: 'Sett organismene i rekkefølge, fra **produsenten** til **toppredatoren**.', en: 'Put the organisms in order, from the **producer** to the **top predator**.' },
        ends: [{ nb: 'Produsent (nivå 1)', en: 'Producer (level 1)' }, { nb: 'Toppredator', en: 'Top predator' }],
        items: [{ nb: 'Blåbærlyng', en: 'Bilberry' }, { nb: 'Småskogmus', en: 'Wood mouse' }, { nb: 'Rødrev', en: 'Red fox' }] },
      { id: 'kjedehav', title: { nb: 'Næringskjede i Norskehavet', en: 'Food chain in the Norwegian Sea' },
        help: { nb: 'Sett organismene i rekkefølge, fra **produsenten** til **toppredatoren**.', en: 'Put the organisms in order, from the **producer** to the **top predator**.' },
        ends: [{ nb: 'Produsent (nivå 1)', en: 'Producer (level 1)' }, { nb: 'Toppredator', en: 'Top predator' }],
        items: [{ nb: 'Planteplankton', en: 'Phytoplankton' }, { nb: 'Raudåte', en: 'Calanus' }, { nb: 'Sild', en: 'Herring' }, { nb: 'Torsk', en: 'Cod' }, { nb: 'Steinkobbe', en: 'Harbour seal' }, { nb: 'Spekkhogger', en: 'Orca' }] },
      { id: 'energivei', title: { nb: 'Energiens vei', en: 'The path of energy' },
        help: { nb: 'Hvordan går energien fra sola til den blir varme? Sett i riktig rekkefølge.', en: 'How does energy go from the sun until it becomes heat? Put in the right order.' },
        ends: [{ nb: 'Først', en: 'First' }, { nb: 'Til slutt', en: 'Last' }],
        items: [
          { nb: 'Strålingsenergi fra sola treffer et blad.', en: 'Radiant energy from the sun hits a leaf.' },
          { nb: 'Fotosyntesen lagrer energien som kjemisk energi i sukker.', en: 'Photosynthesis stores the energy as chemical energy in sugar.' },
          { nb: 'En hare spiser bladet, og energien går over i haren.', en: 'A hare eats the leaf, and the energy passes into the hare.' },
          { nb: 'Celleåndingen i haren frigjør energien, og haren kan bevege seg.', en: 'Cellular respiration in the hare releases the energy, and the hare can move.' },
          { nb: 'Til slutt er energien blitt varme som sprer seg ut i omgivelsene.', en: 'In the end the energy has become heat that spreads into the surroundings.' }
        ] }
    ]
  };

  /* ---------- Quizkategorier ---------- */
  T.quizSets = [
    { id: 'okosystem', name: { nb: 'Økosystemet', en: 'The ecosystem' } },
    { id: 'tilpasning', name: { nb: 'Tilpasninger og roller', en: 'Adaptations and roles' } },
    { id: 'nett', name: { nb: 'Næringskjeder og -nett', en: 'Food chains and webs' } },
    { id: 'energi', name: { nb: 'Energi', en: 'Energy' } },
    { id: 'mennesket', name: { nb: 'Mennesket og naturen', en: 'Humans and nature' } }
  ];
})();
