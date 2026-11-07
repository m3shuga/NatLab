/* =====================================================================
   Historien om Jorda – OVERSIKT OVER TEMAET
   Her ligger: tittel, verktøy, øvingsoppgaver, quizkategorier,
   bevissonene (fossiler o.l.) og innholdet i de to kartene.
   ===================================================================== */
(function () {
  const T = NatLab.topic('jorda');
  const o = (nb, en) => ({ nb: nb, en: en });

  T.title = o('Historien om Jorda', 'The story of the Earth');
  T.lead = o(
    'Jorda er rundt 4,6 milliarder år gammel og forandrer seg hele tiden. Her lærer du hva geologer gjør, hvordan Jorda er bygd opp, hvorfor kontinentene flytter seg – og hvordan vulkaner, jordskjelv, fjell og bergarter henger sammen med platene.',
    'The Earth is about 4.6 billion years old and is changing all the time. Here you learn what geologists do, how the Earth is built up, why the continents move – and how volcanoes, earthquakes, mountains and rocks are connected to the plates.'
  );
  T.cardLabel = o('Del', 'Part');
  T.cardCount = o('deler', 'parts');
  T.cardsTitle = o('Seks deler', 'Six parts');
  T.cardsLead = o('Gå gjennom delene i rekkefølge, eller hopp rett til det du trenger.', 'Work through the parts in order, or jump straight to what you need.');
  T.orgNames = {};
  T.organisms = T.organisms || {};
  T.pages = T.pages || {};
  T.panelLabels = {
    what: o('Hva er det?', 'What is it?'),
    does: o('Hva skjer – og hvorfor er det viktig?', 'What happens – and why does it matter?'),
    fact: o('Visste du at?', 'Did you know?')
  };

  T.tools = [
    { icon: 'target', href: '#jorda-kart', title: o('Plategrensekartet', 'The plate boundary map'), desc: o('Plategrenser, vulkaner og jordskjelv', 'Plate boundaries, volcanoes and earthquakes') },
    { icon: 'planet', href: '#jorda-tidskart', title: o('Kartet gjennom tid', 'The map through time'), desc: o('Fra Pangea til i dag', 'From Pangaea to today') },
    { icon: 'puzzle', href: '#jorda-ov', title: NatLab.ui.practiceTitle, desc: o('Merk, sorter, koble og ordne', 'Label, sort, match and order') },
    { icon: 'quiz', href: '#jorda-quiz', title: NatLab.ui.quizTitle, desc: NatLab.ui.quizDesc }
  ];
  T.featured = ['ndla-jordskorpa', 'ndla-bergarter', 'snl-platetektonikk', 'snl-wegener', 'snl-bergarter', 'snl-jordskorpen'];

  /* ---------- Bevis for kontinentaldrift (brukes på tidskartet og i del 6) ----------
     Punktene er dagens lengde- og breddegrad på kontinentet de hører til,
     slik at sonene flytter seg sammen med kontinentene. */
  T.zones = [
    { id: 'isspor', color: '#5aa0c8', dash: true, pad: 9,
      pts: [['sa', -47, -21], ['sa', -50, -27], ['sa', -55, -24], ['af', 18, -25], ['af', 22, -29], ['af', 27, -27], ['in', 80, 22], ['in', 84, 24], ['in', 77, 19], ['au', 139, -33], ['au', 145, -37], ['au', 136, -28], ['an', 30, -78], ['an', 60, -76], ['an', 0, -76]] },
    { id: 'glossopteris', color: '#2f9d4f', mark: 'G', pad: 7,
      pts: [['sa', -50, -28], ['sa', -54, -26], ['sa', -49, -24], ['af', 28, -26], ['af', 30, -29], ['af', 25, -30], ['in', 80, 23], ['in', 86, 23], ['in', 83, 20], ['au', 150, -33], ['au', 146, -37], ['au', 148, -30], ['an', 160, -84]] },
    { id: 'lystrosaurus', color: '#c9a227', mark: 'L', pad: 7,
      pts: [['af', 25, -31], ['af', 27, -29], ['af', 22, -32], ['in', 79, 22], ['in', 87, 23], ['in', 83, 24], ['an', 165, -84]] },
    { id: 'mesosaurus', color: '#1f4fc4', mark: 'M', pad: 6,
      pts: [['sa', -50, -24], ['sa', -52, -29], ['sa', -55, -33], ['af', 16, -23], ['af', 18, -27], ['af', 20, -29.5]] },
    { id: 'fjellkjede_bevis', color: '#8a3fb0', dash: true, pad: 6,
      pts: [['eu', 8, 62], ['eu', 15, 68], ['eu', -4, 57], ['eu', 6, 59], ['gr', -25, 72], ['gr', -22, 76], ['gr', -30, 68], ['na', -80, 36], ['na', -70, 44], ['na', -60, 47], ['na', -56, 49]] }
  ];

  /* =================== Plategrensekartet =================== */
  T.pages.kart = {
    type: 'geomap',
    title: o('Plategrensekartet', 'The plate boundary map'),
    lead: o('Se hvor platene møtes – og hvor vulkanene og jordskjelvene er. Klikk på en plategrense, en vulkan eller et jordskjelv for å lære mer. Følg stegene «Oppdag sammenhengen» til høyre.', 'See where the plates meet – and where the volcanoes and earthquakes are. Click a plate boundary, a volcano or an earthquake to learn more. Follow the steps “Discover the connection”.'),
    tabs: [
      { href: '#jorda-platetektonikk', icon: 'target', label: o('Tverrsnitt av plategrensene', 'Cross-sections of the boundaries') },
      { href: '#jorda-kart', icon: 'planet', label: o('Plategrensekartet', 'Plate boundary map') },
      { href: '#jorda-platetektonikk-les', icon: 'book', label: o('Les om platetektonikk', 'Read about plate tectonics') }
    ],
    caption: o('Plategrenser fra PB2002 (Peter Bird, 2003). Jordskjelvsonene er tegnet som brede felt langs plategrensene. Kartet er forenklet.', 'Plate boundaries from PB2002 (Peter Bird, 2003). The earthquake zones are drawn as broad bands along the plate boundaries. The map is simplified.'),
    layerNames: { grenser: o('Plategrenser', 'Plate boundaries'), skjelv: o('Jordskjelvsoner', 'Earthquake zones'), vulkaner: o('Vulkaner', 'Volcanoes'), plater: o('Platene', 'The plates') },
    viewNames: { verden: o('Hele verden', 'Whole world'), stillehavet: o('Stillehavet', 'The Pacific'), atlanterhavet: o('Atlanterhavet', 'The Atlantic'), asia: o('Asia og Himalaya', 'Asia and the Himalayas'), norden: o('Norge og Island', 'Norway and Iceland') },
    kinds: {
      spredning: { name: o('Havbunn fra hverandre (midthavsrygg)', 'Ocean floor moving apart (mid-ocean ridge)'), color: 'var(--b-spredning)', link: '#jorda-platetektonikk-del-grense_spredning',
        what: o('Platene beveger seg **fra hverandre**. Magma fra mantelen fyller sprekken og blir til ny havbunn.', 'The plates move **apart**. Magma from the mantle fills the crack and becomes new ocean floor.'),
        results: [o('ny havbunn (havbunnsspredning)', 'new ocean floor (sea-floor spreading)'), o('en lang fjellrygg under havet', 'a long mountain ridge under the sea'), o('små, grunne jordskjelv', 'small, shallow earthquakes'), o('vulkaner under vann – og noen steder på land, som på Island', 'volcanoes under water – and in some places on land, as in Iceland')],
        examples: o('Den midtatlantiske ryggen, Øst-Stillehavsryggen.', 'The Mid-Atlantic Ridge, the East Pacific Rise.') },
      rift: { name: o('Kontinent som sprekker opp (riftdal)', 'Continent splitting apart (rift valley)'), color: 'var(--b-rift)', link: '#jorda-platetektonikk-del-grense_rift',
        what: o('Et kontinent **trekkes fra hverandre**. Skorpa strekkes og synker ned i midten.', 'A continent is **pulled apart**. The crust is stretched and sinks in the middle.'),
        results: [o('riftdaler med innsjøer', 'rift valleys with lakes'), o('vulkaner', 'volcanoes'), o('jordskjelv', 'earthquakes'), o('kanskje et nytt hav en gang i framtiden', 'perhaps a new ocean some time in the future')],
        examples: o('Riftdalen i Øst-Afrika. Oslofeltet er en gammel riftdal.', 'The East African Rift. The Oslo region is an old rift valley.') },
      subduksjon: { name: o('Havbunn mot kontinent (subduksjon)', 'Ocean floor against a continent (subduction)'), color: 'var(--b-subduksjon)', link: '#jorda-platetektonikk-del-grense_subduksjon',
        what: o('Platene beveger seg **mot hverandre**. Den tunge havplata synker ned under den andre plata.', 'The plates move **towards each other**. The heavy oceanic plate sinks under the other plate.'),
        results: [o('dyphavsgroper', 'ocean trenches'), o('rekker med vulkaner', 'rows of volcanoes'), o('fjellkjeder', 'mountain ranges'), o('de kraftigste jordskjelvene på Jorda – og tsunamier', 'the strongest earthquakes on Earth – and tsunamis')],
        examples: o('Andesfjellene, Sumatra, Japan, vestkysten av Nord-Amerika.', 'The Andes, Sumatra, Japan, the west coast of North America.') },
      oybue: { name: o('Havbunn mot havbunn (øybue)', 'Ocean floor against ocean floor (island arc)'), color: 'var(--b-oybue)', link: '#jorda-platetektonikk-del-grense_oybue',
        what: o('To **havplater** beveger seg mot hverandre. Den ene synker under den andre.', 'Two **oceanic plates** move towards each other. One sinks under the other.'),
        results: [o('dyphavsgroper – de dypeste stedene i havet', 'ocean trenches – the deepest places in the ocean'), o('øybuer med vulkaner', 'island arcs with volcanoes'), o('kraftige jordskjelv og tsunamier', 'powerful earthquakes and tsunamis')],
        examples: o('Marianene og Marianegropen, Tonga, De små Antillene.', 'The Mariana Islands and the Mariana Trench, Tonga, the Lesser Antilles.') },
      kollisjon: { name: o('Kontinent mot kontinent (kollisjon)', 'Continent against continent (collision)'), color: 'var(--b-kollisjon)', link: '#jorda-platetektonikk-del-grense_kollisjon',
        what: o('To **kontinenter** kolliderer. Ingen av dem synker skikkelig ned, så skorpa presses opp.', 'Two **continents** collide. Neither sinks properly, so the crust is pushed up.'),
        results: [o('svære fjellkjeder', 'huge mountain ranges'), o('mange jordskjelv i et bredt belte', 'many earthquakes in a wide belt'), o('nesten ingen vulkaner', 'almost no volcanoes')],
        examples: o('Himalaya (India mot Asia), Alpene. Den kaledonske fjellkjeden i Norge ble dannet slik.', 'The Himalayas (India against Asia), the Alps. The Caledonian mountains in Norway formed this way.') },
      transform: { name: o('Plater som glir forbi hverandre (transform)', 'Plates sliding past each other (transform)'), color: 'var(--b-transform)', link: '#jorda-platetektonikk-del-grense_transform',
        what: o('Platene glir **sidelengs** forbi hverandre. Ingen skorpe lages eller forsvinner.', 'The plates slide **sideways** past each other. No crust is made or destroyed.'),
        results: [o('jordskjelv når platene plutselig glipper', 'earthquakes when the plates suddenly slip'), o('lite vulkaner', 'few volcanoes'), o('forskjøvne elver, veier og gjerder', 'offset rivers, roads and fences')],
        examples: o('San Andreas-forkastningen i California, Den nordanatoliske forkastningen i Tyrkia. De fleste transformforkastninger ligger på tvers av midthavsryggene.', 'The San Andreas Fault in California, the North Anatolian Fault in Turkey. Most transform faults cut across mid-ocean ridges.') }
    },
    plates: {
      AF: o('Den afrikanske platen', 'the African Plate'), SO: o('Somaliplaten (den østlige delen av Afrika)', 'the Somali Plate (eastern Africa)'), AN: o('Den antarktiske platen', 'the Antarctic Plate'),
      AR: o('Den arabiske platen', 'the Arabian Plate'), AU: o('Den australske platen', 'the Australian Plate'), IN: o('Den indiske platen', 'the Indian Plate'),
      EU: o('Den eurasiske platen', 'the Eurasian Plate'), NA: o('Den nordamerikanske platen', 'the North American Plate'), SA: o('Den søramerikanske platen', 'the South American Plate'),
      PA: o('Stillehavsplaten', 'the Pacific Plate'), NZ: o('Nazcaplaten', 'the Nazca Plate'), CO: o('Cocosplaten', 'the Cocos Plate'), CA: o('Den karibiske platen', 'the Caribbean Plate'),
      PS: o('Den filippinske platen', 'the Philippine Sea Plate'), JF: o('Juan de Fuca-platen', 'the Juan de Fuca Plate'), SC: o('Scotiaplaten', 'the Scotia Plate'),
      SU: o('Sundaplaten (Sørøst-Asia)', 'the Sunda Plate (South-East Asia)'), YA: o('Yangtzeplaten (Kina)', 'the Yangtze Plate (China)'), AM: o('Amurplaten (Øst-Asia)', 'the Amur Plate (East Asia)'),
      OK: o('Okhotskplaten', 'the Okhotsk Plate'), AT: o('Anatoliaplaten (Tyrkia)', 'the Anatolian Plate (Turkey)')
    },
    plateText: o('Dette er en av Jordas store litosfæreplater. Platen er stiv og beveger seg som én enhet, noen centimeter i året. Det er ved kantene – plategrensene – at det skjer mest: jordskjelv, vulkaner og fjelldannelse.', 'This is one of the Earth’s large lithospheric plates. The plate is rigid and moves as one unit, a few centimetres a year. Most things happen at its edges – the plate boundaries: earthquakes, volcanoes and mountain building.'),
    smallPlateText: o('Dette er en av mange små plater (mikroplater). Geologer deler Jorda inn i 6–8 store og en rekke mindre plater. Små plater finnes særlig der store plater møtes på en komplisert måte.', 'This is one of many small plates (microplates). Geologists divide the Earth into 6–8 large and many smaller plates. Small plates are found especially where large plates meet in a complicated way.'),
    examples: [
      { name: o('Den midtatlantiske ryggen', 'The Mid-Atlantic Ridge'), kind: 'spredning', view: 'atlanterhavet', text: o('En undersjøisk fjellrygg midt i Atlanterhavet. Her glir Amerika og Europa/Afrika fra hverandre, og Atlanterhavet blir noen centimeter bredere hvert år. Ryggen følger formen på kystene på begge sider.', 'An undersea mountain ridge in the middle of the Atlantic. Here the Americas and Europe/Africa slide apart, and the Atlantic gets a few centimetres wider each year. The ridge follows the shape of the coasts on both sides.'), src: ['snl-midthavsrygg', 'snl-atlanterhavet'] },
      { name: o('Island', 'Iceland'), kind: 'spredning', view: 'norden', text: o('Island ligger oppå Den midtatlantiske ryggen. Her ligger plategrensen på land, og landet har rundt 150 vulkaner. Øya er geologisk ung og blir hele tiden bygd opp av nye lavastrømmer.', 'Iceland sits on top of the Mid-Atlantic Ridge. Here the plate boundary is on land, and the country has about 150 volcanoes. The island is geologically young and is constantly built up by new lava flows.'), src: ['snl-island'] },
      { name: o('Andesfjellene', 'The Andes'), kind: 'subduksjon', view: 'stillehavet', text: o('Nazcaplaten synker ned under Sør-Amerika. Det har dannet verdens lengste fjellkjede med rundt 60 aktive vulkaner – og noen av de kraftigste jordskjelvene som er målt.', 'The Nazca Plate sinks under South America. This has formed the world’s longest mountain range with about 60 active volcanoes – and some of the strongest earthquakes ever measured.'), src: ['snl-andes', 'snl-store-jordskjelv'] },
      { name: o('Japan og Marianene', 'Japan and the Marianas'), kind: 'oybue', view: 'stillehavet', text: o('Stillehavsplaten synker ned langs dype dyphavsgroper. Over dem ligger øybuer med vulkaner. Marianegropen er det dypeste stedet i havet.', 'The Pacific Plate sinks down along deep ocean trenches. Above them lie island arcs with volcanoes. The Mariana Trench is the deepest place in the ocean.'), src: ['snl-dyphavsgrop', 'snl-platetektonikk'] },
      { name: o('Himalaya', 'The Himalayas'), kind: 'kollisjon', view: 'asia', text: o('India kolliderte med Asia for rundt 50 millioner år siden. India presser fortsatt nordover med ca. 4 cm i året, og Himalaya er verdens høyeste fjellkjede.', 'India collided with Asia about 50 million years ago. India is still pushing north at about 4 cm a year, and the Himalayas are the world’s highest mountain range.'), src: ['snl-himalaya-geologi'] },
      { name: o('San Andreas-forkastningen', 'The San Andreas Fault'), kind: 'transform', view: 'stillehavet', text: o('Stillehavsplaten og Den nordamerikanske platen glir forbi hverandre i California. Jordskjelvet i San Francisco i 1906 skjedde her.', 'The Pacific Plate and the North American Plate slide past each other in California. The San Francisco earthquake of 1906 happened here.'), src: ['snl-san-andreas'] },
      { name: o('Riftdalen i Øst-Afrika', 'The East African Rift'), kind: 'rift', view: 'verden', text: o('Her er Afrika i ferd med å sprekke opp. Riftdalen strekker seg fra Malawisjøen til Rødehavet, med vulkaner som Kilimanjaro.', 'Here Africa is beginning to split apart. The rift runs from Lake Malawi to the Red Sea, with volcanoes like Kilimanjaro.'), src: ['snl-riftdalen'] }
    ],
    volcanoes: [
      { name: o('Eyjafjallajökull', 'Eyjafjallajökull'), place: o('Island', 'Iceland'), lon: -19.6, lat: 63.6, why: o('Island ligger på Den midtatlantiske ryggen, der platene beveger seg fra hverandre.', 'Iceland lies on the Mid-Atlantic Ridge, where the plates move apart.'), fact: o('Utbruddet i 2010 sendte vulkansk aske høyt opp i lufta. Luftrommet over store deler av Europa ble stengt.', 'The 2010 eruption sent volcanic ash high into the air. The airspace over large parts of Europe was closed.'), src: ['snl-eyjafjalla'] },
      { name: o('Beerenberg', 'Beerenberg'), place: o('Jan Mayen (Norge)', 'Jan Mayen (Norway)'), lon: -8.1, lat: 71.08, why: o('Jan Mayen ligger nær Den midtatlantiske ryggen, der en stor bruddsone krysser ryggen.', 'Jan Mayen lies near the Mid-Atlantic Ridge, where a large fracture zone crosses the ridge.'), fact: o('Beerenberg er verdens nordligste aktive vulkan – og den ligger i Norge! Det siste store utbruddet var i 1970.', 'Beerenberg is the world’s northernmost active volcano – and it is in Norway! The last big eruption was in 1970.'), src: ['snl-jan-mayen'] },
      { name: o('Etna', 'Etna'), place: o('Sicilia, Italia', 'Sicily, Italy'), lon: 15.0, lat: 37.75, why: o('Her skyver Afrika mot Europa, og havbunn synker ned under Italia.', 'Here Africa is pushing against Europe, and ocean floor is sinking under Italy.'), fact: o('Etna er 3329 meter høy og er en av de mest aktive vulkanene i verden.', 'Etna is 3329 metres high and is one of the most active volcanoes in the world.'), src: ['snl-etna'] },
      { name: o('Vesuv', 'Vesuvius'), place: o('Napoli, Italia', 'Naples, Italy'), lon: 14.43, lat: 40.82, why: o('Her skyver Afrika mot Europa, og havbunn synker ned under Italia.', 'Here Africa is pushing against Europe, and ocean floor is sinking under Italy.'), fact: o('I år 79 begravde Vesuv byene Pompeii og Herculaneum i aske.', 'In the year 79, Vesuvius buried the cities of Pompeii and Herculaneum in ash.'), src: ['snl-vesuv'] },
      { name: o('Kilauea', 'Kilauea'), place: o('Hawaii, USA', 'Hawaii, USA'), lon: -155.3, lat: 19.4, hotspot: true, why: o('Hawaii ligger **midt på** Stillehavsplaten, langt fra plategrensene. Under øyene er det en **varm flekk** i mantelen. Platen beveger seg over den, og det dannes en rekke med øyer.', 'Hawaii lies **in the middle** of the Pacific Plate, far from the plate boundaries. Under the islands there is a **hotspot** in the mantle. The plate moves over it, forming a chain of islands.'), fact: o('Den varme flekken har laget nye øyer i rundt 30 millioner år. Øya Hawaii er den yngste, og en ny vulkan er på vei opp i havet sør for den.', 'The hotspot has been making new islands for about 30 million years. The island of Hawaii is the youngest, and a new volcano is growing in the sea south of it.'), src: ['snl-hawaii', 'snl-vulkan'] },
      { name: o('Kilimanjaro', 'Kilimanjaro'), place: o('Tanzania', 'Tanzania'), lon: 37.35, lat: -3.07, why: o('Kilimanjaro ligger ved riftdalen i Øst-Afrika, der kontinentet er i ferd med å sprekke opp.', 'Kilimanjaro lies by the East African Rift, where the continent is beginning to split apart.'), src: ['snl-riftdalen'] },
      { name: o('Ojos del Salado', 'Ojos del Salado'), place: o('Chile og Argentina', 'Chile and Argentina'), lon: -68.54, lat: -27.11, why: o('Nazcaplaten synker ned under Sør-Amerika. Det smelter magma som stiger opp og lager vulkaner i Andesfjellene.', 'The Nazca Plate sinks under South America. Magma melts and rises, building volcanoes in the Andes.'), fact: o('Med 6863 meter er dette verdens høyeste aktive vulkan.', 'At 6863 metres this is the world’s highest active volcano.'), src: ['snl-jorden', 'snl-andes'] },
      { name: o('Cotopaxi', 'Cotopaxi'), place: o('Ecuador', 'Ecuador'), lon: -78.44, lat: -0.68, why: o('Nazcaplaten synker ned under Sør-Amerika. I Ecuador er Andesfjellene svært vulkanske.', 'The Nazca Plate sinks under South America. In Ecuador the Andes are very volcanic.'), src: ['snl-andes'] },
      { name: o('Fuji', 'Fuji'), place: o('Japan', 'Japan'), lon: 138.73, lat: 35.36, why: o('Under Japan synker både Stillehavsplaten og Den filippinske platen ned i mantelen. Det gir mange vulkaner og jordskjelv.', 'Under Japan both the Pacific Plate and the Philippine Sea Plate sink into the mantle. This gives many volcanoes and earthquakes.'), src: ['snl-platetektonikk'] },
      { name: o('Mount St. Helens', 'Mount St. Helens'), place: o('USA', 'USA'), lon: -122.19, lat: 46.2, why: o('Juan de Fuca-platen synker ned under Nord-Amerika.', 'The Juan de Fuca Plate sinks under North America.'), src: ['snl-platetektonikk'] },
      { name: o('Merapi', 'Merapi'), place: o('Java, Indonesia', 'Java, Indonesia'), lon: 110.44, lat: -7.54, why: o('Den australske platen synker ned under Indonesia langs en lang dyphavsgrop.', 'The Australian Plate sinks under Indonesia along a long ocean trench.'), src: ['snl-dyphavsgrop'] },
      { name: o('Popocatépetl', 'Popocatépetl'), place: o('Mexico', 'Mexico'), lon: -98.62, lat: 19.02, why: o('Cocosplaten synker ned under Mexico.', 'The Cocos Plate sinks under Mexico.'), src: ['snl-platetektonikk'] },
      { name: o('Erebus', 'Erebus'), place: o('Antarktis', 'Antarctica'), lon: 167.17, lat: -77.53, hotspot: true, why: o('Erebus ligger inne på Den antarktiske platen. Forskere mener at varmt mantelmateriale stiger opp her, i et område der skorpa er strukket.', 'Erebus lies inside the Antarctic Plate. Scientists think hot mantle material rises here, in an area where the crust has been stretched.'), src: ['snl-vulkan'] }
    ],
    quakes: [
      { name: o('Valdivia, Chile', 'Valdivia, Chile'), lon: -73.05, lat: -38.24, mag: 9.5, year: '1960', why: o('Nazcaplaten synker ned under Sør-Amerika. Platene satt fast og glapp plutselig.', 'The Nazca Plate sinks under South America. The plates were stuck and suddenly slipped.'), fact: o('Dette er det kraftigste jordskjelvet som noen gang er målt.', 'This is the strongest earthquake ever measured.'), src: ['snl-store-jordskjelv'] },
      { name: o('Sumatra, Indonesia', 'Sumatra, Indonesia'), lon: 95.98, lat: 3.3, mag: 9.1, year: '2004', why: o('Den indiske og den australske platen synker ned under Sørøst-Asia (subduksjon).', 'The Indian and Australian Plates sink under South-East Asia (subduction).'), fact: o('Jordskjelvet laget en tsunami i Det indiske hav. Rundt 250 000 mennesker omkom.', 'The earthquake caused a tsunami in the Indian Ocean. About 250,000 people died.'), src: ['snl-platetektonikk', 'snl-tsunami'] },
      { name: o('Nordøst-Japan', 'North-east Japan'), lon: 142.37, lat: 38.3, mag: 9.1, year: '2011', why: o('Stillehavsplaten synker ned under Japan.', 'The Pacific Plate sinks under Japan.'), fact: o('Jordskjelvet laget en stor tsunami langs kysten av Japan.', 'The earthquake caused a large tsunami along the coast of Japan.'), src: ['snl-tsunami', 'snl-store-jordskjelv'] },
      { name: o('San Francisco, USA', 'San Francisco, USA'), lon: -122.5, lat: 37.7, mag: 7.9, year: '1906', why: o('Stillehavsplaten og Den nordamerikanske platen glir forbi hverandre langs San Andreas-forkastningen.', 'The Pacific Plate and the North American Plate slide past each other along the San Andreas Fault.'), fact: o('Store deler av San Francisco ble ødelagt av jordskjelvet og brannene etterpå.', 'Large parts of San Francisco were destroyed by the earthquake and the fires afterwards.'), src: ['snl-san-andreas', 'snl-store-jordskjelv'] },
      { name: o('Sør for Oslo', 'South of Oslo'), lon: 10.6, lat: 59.2, mag: 5.4, year: '1904', why: o('Norge ligger midt på Den eurasiske platen, men spenninger fra midthavsryggen, landhevingen etter istida og gamle sprekker i Oslofeltet kan gi jordskjelv.', 'Norway lies in the middle of the Eurasian Plate, but stress from the mid-ocean ridge, land rising after the ice age and old cracks in the Oslo region can cause earthquakes.'), fact: o('Dette er det mest kjente jordskjelvet på fastlandet i Norge. Det ble kjent over hele Sør-Skandinavia.', 'This is the best-known earthquake on mainland Norway. It was felt across all of southern Scandinavia.'), src: ['snl-jordskjelv-norge', 'snl-store-jordskjelv'] }
    ],
    steps: [
      { q: o('**1.** Slå av alt unntatt jordskjelvsonene. Hvor på Jorda er det flest jordskjelv?', '**1.** Turn off everything except the earthquake zones. Where on Earth are there most earthquakes?'), layers: ['skjelv'],
        a: o('Jordskjelvene ligger i lange, smale belter. Utenfor beltene er det nesten ingen store jordskjelv.', 'The earthquakes lie in long, narrow belts. Outside the belts there are almost no big earthquakes.') },
      { q: o('**2.** Slå på plategrensene. Hva legger du merke til?', '**2.** Turn on the plate boundaries. What do you notice?'), layers: ['skjelv', 'grenser'],
        a: o('Jordskjelvbeltene ligger akkurat langs plategrensene! Et kart over jordskjelv er derfor også et kart over plategrensene.', 'The earthquake belts lie exactly along the plate boundaries! A map of earthquakes is therefore also a map of the plate boundaries.') },
      { q: o('**3.** Slå på vulkanene og se på Stillehavet. Hvilken type plategrense ligger rundt det meste av Stillehavet?', '**3.** Turn on the volcanoes and look at the Pacific. Which type of plate boundary lies around most of the Pacific?'), layers: ['grenser', 'vulkaner', 'skjelv'], view: 'stillehavet', kind: 'subduksjon',
        a: o('Subduksjonssoner – der havbunn synker ned i mantelen. Derfor er det en «ring» av vulkaner og jordskjelv rundt Stillehavet. Den kalles ofte **Ildringen**.', 'Subduction zones – where ocean floor sinks into the mantle. That is why there is a “ring” of volcanoes and earthquakes around the Pacific. It is often called **the Ring of Fire**.') },
      { q: o('**4.** Se på Himalaya. Hvorfor er det mange jordskjelv, men nesten ingen vulkaner her?', '**4.** Look at the Himalayas. Why are there many earthquakes but almost no volcanoes here?'), layers: ['grenser', 'vulkaner', 'skjelv'], view: 'asia', kind: 'kollisjon',
        a: o('Her kolliderer to kontinenter. Ingen havplate synker ned og smelter, så det dannes lite magma. Men skorpa presses sammen, og det gir fjell og jordskjelv.', 'Here two continents collide. No oceanic plate sinks down and melts, so little magma forms. But the crust is squeezed, which gives mountains and earthquakes.') },
      { q: o('**5.** Finn en vulkan som **ikke** ligger ved en plategrense. Hvordan kan den finnes der?', '**5.** Find a volcano that is **not** at a plate boundary. How can it be there?'), layers: ['grenser', 'vulkaner'], view: 'stillehavet', volcano: 4,
        a: o('Hawaii ligger midt på Stillehavsplaten, over en **varm flekk** i mantelen. Platen glir over den varme flekken, og det blir en lang rekke med vulkanøyer.', 'Hawaii lies in the middle of the Pacific Plate, above a **hotspot** in the mantle. The plate slides over the hotspot, forming a long chain of volcanic islands.') }
    ]
  };

  /* =================== Kartet gjennom tid =================== */
  T.pages.tidskart = {
    type: 'drift',
    title: o('Kartet gjennom tid', 'The map through time'),
    lead: o('Dra i glidebryteren eller trykk «Spill av», og se hvordan superkontinentet Pangea sprekker opp og blir til kontinentene vi har i dag. Klikk på et kontinent for å høre om reisen det har gjort.', 'Drag the slider or press “Play”, and watch the supercontinent Pangaea break up into the continents we have today. Click a continent to hear about its journey.'),
    tabs: [
      { href: '#jorda-verdenskart', icon: 'target', label: o('Mantelen i bevegelse', 'The moving mantle') },
      { href: '#jorda-tidskart', icon: 'planet', label: o('Kartet gjennom tid', 'The map through time') },
      { href: '#jorda-verdenskart-les', icon: 'book', label: o('Les', 'Read') }
    ],
    start: 250, speed: 14,
    caption: o('Modell: Kontinentene er flyttet ved å rotere dem på kula. Afrika holdes fast, og noen kontinenter er slått sammen. Tidene er omtrentlige.', 'Model: The continents are moved by rotating them on the globe. Africa is held still, and some continents are merged. The times are approximate.'),
    intro: o('Fargene viser dagens kontinenter, slik at du kan følge dem. Trykk på «Vis fossiler og andre bevis» – og se hvordan sporene passer sammen når kontinentene er samlet.', 'The colours show today’s continents, so you can follow them. Press “Show fossils and other evidence” – and see how the traces fit together when the continents are joined.'),
    names: { na: o('Nord-Amerika', 'North America'), sa: o('Sør-Amerika', 'South America'), gr: o('Grønland', 'Greenland'), eu: o('Eurasia', 'Eurasia'), af: o('Afrika', 'Africa'), ma: o('Madagaskar', 'Madagascar'), in: o('India', 'India'), an: o('Antarktis', 'Antarctica'), au: o('Australia', 'Australia') },
    centers: { na: [-100, 45], sa: [-60, -14], gr: [-41, 74], eu: [70, 55], af: [20, 5], ma: [47, -19], in: [78, 22], an: [40, -79], au: [134, -25] },
    oceans: [
      { name: o('Panthalassa', 'Panthalassa'), x: 110, y: 250, from: 250, to: 150 },
      { name: o('Panthalassa', 'Panthalassa'), x: 900, y: 330, from: 250, to: 150 },
      { name: o('Tethyshavet', 'Tethys Ocean'), x: 760, y: 232, from: 250, to: 120 },
      { name: o('Atlanterhavet', 'Atlantic Ocean'), x: 385, y: 220, from: 110, to: 0 },
      { name: o('Stillehavet', 'Pacific Ocean'), x: 90, y: 260, from: 100, to: 0 },
      { name: o('Det indiske hav', 'Indian Ocean'), x: 680, y: 320, from: 40, to: 0 }
    ],
    events: [
      { t: 250, title: o('Superkontinentet Pangea', 'The supercontinent Pangaea'), text: o('For omkring 300–200 millioner år siden var nesten alt land samlet i **Pangea**. Rundt lå ett enormt hav, **Panthalassa**. Den nordlige delen kalles **Laurasia**, og den sørlige delen **Gondwana**.', 'About 300–200 million years ago almost all land was joined in **Pangaea**. Around it lay one enormous ocean, **Panthalassa**. The northern part is called **Laurasia**, and the southern part **Gondwana**.') },
      { t: 180, title: o('Pangea revner', 'Pangaea splits'), text: o('For 170–180 millioner år siden begynte Pangea å revne. Nord-Amerika skilte seg fra Afrika, og den midtre delen av **Atlanterhavet** ble til.', '170–180 million years ago Pangaea began to split. North America separated from Africa, and the middle part of the **Atlantic** was born.') },
      { t: 140, title: o('Sør-Amerika og Afrika skilles', 'South America and Africa separate'), text: o('For rundt 140 millioner år siden begynte Sør-Amerika og Afrika å bevege seg fra hverandre. Det sørlige Atlanterhavet åpnet seg som en glidelås fra sør.', 'About 140 million years ago South America and Africa began to move apart. The South Atlantic opened like a zip from the south.') },
      { t: 100, title: o('Gondwana deles opp', 'Gondwana breaks up'), text: o('India, Madagaskar, Antarktis og Australia river seg løs fra hverandre. **Tethyshavet** mellom Gondwana og Asia blir mindre og mindre.', 'India, Madagascar, Antarctica and Australia tear away from each other. The **Tethys Ocean** between Gondwana and Asia gets smaller and smaller.') },
      { t: 80, title: o('India på vei nordover', 'India heading north'), text: o('India beveget seg nordover mot Asia med rundt 17–18 cm i året – svært fort for en plate.', 'India moved north towards Asia at about 17–18 cm a year – very fast for a plate.') },
      { t: 55, title: o('Norge og Grønland skilles', 'Norway and Greenland separate'), text: o('For rundt 55 millioner år siden åpnet Atlanterhavet seg mellom Grønland og Norge. Slik ble Norskehavet og den norske kontinentalsokkelen til.', 'About 55 million years ago the Atlantic opened between Greenland and Norway. This created the Norwegian Sea and the Norwegian continental shelf.') },
      { t: 50, title: o('India kolliderer med Asia', 'India collides with Asia'), text: o('For rundt 50 millioner år siden traff India Asia. Kollisjonen presset opp **Himalaya** – og India presser fortsatt nordover med ca. 4 cm i året.', 'About 50 million years ago India hit Asia. The collision pushed up the **Himalayas** – and India is still pushing north at about 4 cm a year.') },
      { t: 0, title: o('I dag – og i framtiden', 'Today – and in the future'), text: o('Platene beveger seg fortsatt noen centimeter i året. Om 20–30 millioner år vil Australia kollidere med Sørøst-Asia, og Atlanterhavet blir stadig bredere.', 'The plates are still moving a few centimetres a year. In 20–30 million years Australia will collide with South-East Asia, and the Atlantic keeps getting wider.') }
    ],
    zones: null, // fylles fra T.zones under
    info: {
      na: { text: o('I Pangea lå Nord-Amerika inntil Nordvest-Afrika og Europa. Da Atlanterhavet åpnet seg, drev Nord-Amerika vestover. Atlanterhavet blir fortsatt noen centimeter bredere hvert år.', 'In Pangaea, North America lay next to north-west Africa and Europe. When the Atlantic opened, North America drifted west. The Atlantic is still getting a few centimetres wider each year.'), fact: o('Appalachene i USA er en del av den samme gamle fjellkjeden som fjellene i Norge.', 'The Appalachians in the USA are part of the same old mountain range as the mountains in Norway.'), src: ['snl-atlanterhavet', 'snl-kaledonsk'] },
      sa: { text: o('Sør-Amerika passet inn i Afrika som en puslespillbrikke. For rundt 140 millioner år siden begynte de å skilles, og det sørlige Atlanterhavet åpnet seg.', 'South America fitted into Africa like a puzzle piece. About 140 million years ago they began to separate, and the South Atlantic opened.'), fact: o('Fossiler av krypdyret Mesosaurus er funnet både i Sør-Amerika og Afrika.', 'Fossils of the reptile Mesosaurus have been found in both South America and Africa.'), src: ['snl-gondwana', 'snl-mesosaurer'] },
      gr: { text: o('Grønland hang sammen med Norge og Nord-Amerika. For rundt 55 millioner år siden åpnet havet seg mellom Grønland og Norge.', 'Greenland was joined to Norway and North America. About 55 million years ago the ocean opened between Greenland and Norway.'), fact: o('For rundt 420 millioner år siden kolliderte Norge og Grønland, og det dannet Den kaledonske fjellkjeden – lenge før Pangea.', 'About 420 million years ago Norway and Greenland collided, forming the Caledonian mountains – long before Pangaea.'), src: ['snl-norges-geologi', 'snl-kaledonsk'] },
      eu: { text: o('Europa og Asia (Eurasia) holdes nesten i ro i denne modellen. Norge ligger på den vestlige kanten. Da Tethyshavet forsvant, kolliderte Afrika med Europa og dannet Alpene.', 'Europe and Asia (Eurasia) are held almost still in this model. Norway lies on the western edge. When the Tethys Ocean disappeared, Africa collided with Europe and formed the Alps.'), src: ['snl-tethys'] },
      af: { text: o('Afrika lå midt i Pangea. I denne modellen holder vi Afrika fast og lar de andre kontinentene bevege seg i forhold til det. I virkeligheten har også Afrika flyttet seg.', 'Africa lay in the middle of Pangaea. In this model we hold Africa still and let the other continents move relative to it. In reality Africa has moved too.'), fact: o('I dag sprekker Øst-Afrika opp langs Riftdalen. Kanskje blir det et nytt hav der en gang.', 'Today East Africa is splitting along the Rift Valley. Perhaps there will be a new ocean there one day.'), src: ['snl-riftdalen'] },
      ma: { text: o('Madagaskar lå inntil Øst-Afrika. Sammen med India rev det seg løs og flyttet seg sørover til der det ligger i dag.', 'Madagascar lay next to East Africa. Together with India it tore away and moved south to where it lies today.'), src: ['snl-gondwana'] },
      in: { text: o('India har gjort den lengste reisen. Det løsnet fra Gondwana og beveget seg nordover med opptil 17–18 cm i året. For rundt 50 millioner år siden kolliderte India med Asia, og Himalaya ble presset opp.', 'India made the longest journey. It broke off from Gondwana and moved north at up to 17–18 cm a year. About 50 million years ago India collided with Asia, and the Himalayas were pushed up.'), fact: o('Fossiler av Glossopteris og Lystrosaurus i India viser at landet en gang hang sammen med Afrika og Antarktis.', 'Fossils of Glossopteris and Lystrosaurus in India show that the country was once joined to Africa and Antarctica.'), src: ['snl-himalaya-geologi', 'snl-lystrosaurus'] },
      an: { text: o('Antarktis lå mye lenger nord i Gondwana. Det skilte seg fra Afrika, India og Australia og flyttet seg til Sørpolen.', 'Antarctica lay much further north in Gondwana. It separated from Africa, India and Australia and moved to the South Pole.'), fact: o('Fossiler av trær og landdyr i Antarktis viser at det en gang var mye varmere der.', 'Fossils of trees and land animals in Antarctica show that it was once much warmer there.'), src: ['snl-lystrosaurus', 'snl-glossopteris'] },
      au: { text: o('Australia satt fast i Antarktis. Da de skilte lag, begynte Australia å bevege seg nordover.', 'Australia was attached to Antarctica. When they parted, Australia began to move north.'), fact: o('Om 20–30 millioner år vil Australia kollidere med Sørøst-Asia.', 'In 20–30 million years Australia will collide with South-East Asia.'), src: ['snl-platetektonikk'] }
    }
  };
  T.pages.tidskart.zones = T.zones;

  /* ---------- Øvingsoppgaver ---------- */
  T.practice = {
    merk: ['lagene', 'subduksjon', 'kretslop', 'konveksjon'],
    grupper: [
      { id: 'grenser', title: o('Hvilken plategrense?', 'Which plate boundary?'),
        help: o('Hva skjer ved plategrensen? Velg et kort og trykk på riktig gruppe.', 'What happens at the boundary? Pick a card and tap the right group.'),
        cats: [{ id: 'fra', name: o('Fra hverandre (divergent)', 'Apart (divergent)') }, { id: 'mot', name: o('Mot hverandre (konvergent)', 'Together (convergent)') }, { id: 'forbi', name: o('Forbi hverandre (transform)', 'Past each other (transform)') }],
        items: [
          { text: o('Den midtatlantiske ryggen', 'The Mid-Atlantic Ridge'), cat: 'fra' }, { text: o('Island', 'Iceland'), cat: 'fra' }, { text: o('Riftdalen i Øst-Afrika', 'The East African Rift'), cat: 'fra' }, { text: o('Ny havbunn blir laget', 'New ocean floor is made'), cat: 'fra' },
          { text: o('Himalaya', 'The Himalayas'), cat: 'mot' }, { text: o('Andesfjellene', 'The Andes'), cat: 'mot' }, { text: o('Marianegropen', 'The Mariana Trench'), cat: 'mot' }, { text: o('Havbunn synker ned i mantelen', 'Ocean floor sinks into the mantle'), cat: 'mot' }, { text: o('Japan', 'Japan'), cat: 'mot' },
          { text: o('San Andreas-forkastningen', 'The San Andreas Fault'), cat: 'forbi' }, { text: o('En vei blir forskjøvet sidelengs', 'A road is shifted sideways'), cat: 'forbi' }, { text: o('Ingen skorpe lages eller forsvinner', 'No crust is made or destroyed'), cat: 'forbi' }
        ] },
      { id: 'bergarter', title: o('Hvilken type bergart?', 'Which type of rock?'),
        help: o('Er bergarten **magmatisk**, **sedimentær** eller **metamorf**?', 'Is the rock **igneous**, **sedimentary** or **metamorphic**?'),
        cats: [{ id: 'mag', name: o('Magmatisk', 'Igneous') }, { id: 'sed', name: o('Sedimentær', 'Sedimentary') }, { id: 'met', name: o('Metamorf', 'Metamorphic') }],
        items: [
          { text: o('Granitt', 'Granite'), cat: 'mag' }, { text: o('Basalt', 'Basalt'), cat: 'mag' }, { text: o('Larvikitt', 'Larvikite'), cat: 'mag' }, { text: o('Dannet av størknet lava', 'Formed from solidified lava'), cat: 'mag' },
          { text: o('Sandstein', 'Sandstone'), cat: 'sed' }, { text: o('Kalkstein', 'Limestone'), cat: 'sed' }, { text: o('Skifer laget av leire', 'Shale made from clay'), cat: 'sed' }, { text: o('Har lag og kan inneholde fossiler', 'Has layers and may contain fossils'), cat: 'sed' },
          { text: o('Gneis', 'Gneiss'), cat: 'met' }, { text: o('Marmor', 'Marble'), cat: 'met' }, { text: o('Omdannet av trykk og varme uten å smelte', 'Changed by pressure and heat without melting'), cat: 'met' }
        ] },
      { id: 'resultat', title: o('Hva skjer ved plategrensen?', 'What happens at the boundary?'),
        help: o('Hvor finner du dette? Sorter etter hva som kolliderer.', 'Where do you find this? Sort by what collides.'),
        cats: [{ id: 'hk', name: o('Havbunn mot kontinent', 'Ocean floor against continent') }, { id: 'kk', name: o('Kontinent mot kontinent', 'Continent against continent') }, { id: 'hh', name: o('Havbunn mot havbunn', 'Ocean floor against ocean floor') }],
        items: [
          { text: o('Vulkaner i en fjellkjede på et kontinent', 'Volcanoes in a mountain range on a continent'), cat: 'hk' }, { text: o('Andesfjellene', 'The Andes'), cat: 'hk' }, { text: o('Havplata synker under kontinentet', 'The oceanic plate sinks under the continent'), cat: 'hk' },
          { text: o('Svære fjell, men nesten ingen vulkaner', 'Huge mountains, but almost no volcanoes'), cat: 'kk' }, { text: o('Himalaya', 'The Himalayas'), cat: 'kk' }, { text: o('Den kaledonske fjellkjeden i Norge', 'The Caledonian mountains in Norway'), cat: 'kk' },
          { text: o('En buet rekke med vulkanøyer', 'A curved row of volcanic islands'), cat: 'hh' }, { text: o('Marianene', 'The Mariana Islands'), cat: 'hh' }, { text: o('Den eldste og tyngste havplata synker', 'The oldest and heaviest oceanic plate sinks'), cat: 'hh' }
        ] }
    ],
    par: [
      { id: 'lag', title: o('Jordas lag', 'The Earth’s layers'),
        items: [
          { a: o('Jordskorpa', 'The crust'), b: o('Det tynne, ytterste laget av stein (5–70 km)', 'The thin, outermost layer of rock (5–70 km)') },
          { a: o('Mantelen', 'The mantle'), b: o('Det tykkeste laget: fast, men varm stein som flyter svært sakte', 'The thickest layer: solid but hot rock that flows very slowly') },
          { a: o('Ytre kjerne', 'Outer core'), b: o('Flytende jern og nikkel som lager magnetfeltet', 'Liquid iron and nickel that creates the magnetic field') },
          { a: o('Indre kjerne', 'Inner core'), b: o('Fast kule av jern og nikkel, holdt fast av enormt trykk', 'Solid ball of iron and nickel, kept solid by enormous pressure') },
          { a: o('Havskorpe', 'Oceanic crust'), b: o('Tynn og tung skorpe av basalt under havene', 'Thin, heavy crust of basalt under the oceans') },
          { a: o('Kontinentalskorpe', 'Continental crust'), b: o('Tykk og lett skorpe med mye granitt', 'Thick, light crust with a lot of granite') }
        ] },
      { id: 'begreper', title: o('Begreper i geologi', 'Terms in geology'),
        items: [
          { a: o('Platetektonikk', 'Plate tectonics'), b: o('Teorien om at Jordas ytre skall er delt i plater som beveger seg', 'The theory that the Earth’s outer shell is divided into moving plates') },
          { a: o('Subduksjon', 'Subduction'), b: o('Når en havplate synker ned under en annen plate', 'When an oceanic plate sinks under another plate') },
          { a: o('Midthavsrygg', 'Mid-ocean ridge'), b: o('Fjellkjede på havbunnen der ny havbunn lages', 'Mountain range on the ocean floor where new ocean floor is made') },
          { a: o('Konveksjon', 'Convection'), b: o('Varmt stoff stiger opp, kaldt synker ned, og det blir en strøm i ring', 'Warm material rises, cold sinks, making a current that goes round') },
          { a: o('Pangea', 'Pangaea'), b: o('Superkontinentet der nesten alt land var samlet', 'The supercontinent where almost all land was joined') },
          { a: o('Mineral', 'Mineral'), b: o('Et naturlig, fast stoff med atomer i et regelmessig mønster', 'A natural solid substance with atoms in a regular pattern') },
          { a: o('Bergart', 'Rock'), b: o('Fast materiale som jordskorpa er bygd av, oftest av flere mineraler', 'Solid material the crust is made of, usually of several minerals') },
          { a: o('Fossil', 'Fossil'), b: o('Rester eller spor av liv bevart i berget', 'Remains or traces of life preserved in rock') }
        ] }
    ],
    order: [
      { id: 'jordablir', title: o('Slik ble Jorda til', 'How the Earth formed'),
        help: o('Sett hendelsene i riktig rekkefølge.', 'Put the events in the right order.'),
        ends: [o('Først', 'First'), o('Til slutt', 'Last')],
        items: [
          o('En stor sky av gass og støv trekker seg sammen, og sola blir til.', 'A large cloud of gas and dust contracts, and the sun forms.'),
          o('Støv og stein klumper seg sammen og kolliderer.', 'Dust and rock clump together and collide.'),
          o('Den unge Jorda er glødende varm. Tungt jern synker inn mot midten og blir kjernen.', 'The young Earth is glowing hot. Heavy iron sinks to the centre and becomes the core.'),
          o('Overflaten kjøles ned, en skorpe størkner, og havet blir til.', 'The surface cools, a crust solidifies, and the ocean forms.'),
          o('Platene beveger seg, og kontinentene samles og deles opp igjen og igjen.', 'The plates move, and the continents join and split again and again.')
        ] },
      { id: 'drift', title: o('Fra Pangea til i dag', 'From Pangaea to today'),
        help: o('Sett hendelsene i riktig rekkefølge, fra eldst til nyest.', 'Put the events in order, from oldest to newest.'),
        ends: [o('Eldst', 'Oldest'), o('Nyest', 'Newest')],
        items: [
          o('Norge og Grønland kolliderer, og Den kaledonske fjellkjeden dannes.', 'Norway and Greenland collide, and the Caledonian mountains form.'),
          o('Nesten alt land er samlet i superkontinentet Pangea.', 'Almost all land is joined in the supercontinent Pangaea.'),
          o('Nord-Amerika skiller seg fra Afrika, og Atlanterhavet blir født.', 'North America separates from Africa, and the Atlantic is born.'),
          o('Sør-Amerika og Afrika begynner å bevege seg fra hverandre.', 'South America and Africa begin to move apart.'),
          o('India kolliderer med Asia, og Himalaya blir presset opp.', 'India collides with Asia, and the Himalayas are pushed up.')
        ] },
      { id: 'sandstein', title: o('Fra fjell til sandstein', 'From mountain to sandstone'),
        help: o('Hvordan blir et fjell til sandstein? Sett stegene i riktig rekkefølge.', 'How does a mountain become sandstone? Put the steps in order.'),
        ends: [o('Først', 'First'), o('Til slutt', 'Last')],
        items: [
          o('Frost og regn får berget i fjellet til å smuldre opp (forvitring).', 'Frost and rain make the rock in the mountain crumble (weathering).'),
          o('En elv frakter sandkornene bort (erosjon).', 'A river carries the sand grains away (erosion).'),
          o('Sanden legger seg i lag på bunnen av havet.', 'The sand settles in layers on the sea floor.'),
          o('Nye lag legger seg oppå og presser sanden sammen.', 'New layers settle on top and press the sand together.'),
          o('Mineraler limer kornene sammen, og sanden blir til sandstein.', 'Minerals glue the grains together, and the sand becomes sandstone.')
        ] }
    ]
  };

  /* ---------- Quizkategorier ---------- */
  T.quizSets = [
    { id: 'geologi', name: o('Geologi', 'Geology') },
    { id: 'jorda', name: o('Jordas oppbygning', 'The Earth’s structure') },
    { id: 'plater', name: o('Platetektonikk', 'Plate tectonics') },
    { id: 'drift', name: o('Verdenskartet i endring', 'The changing world map') },
    { id: 'bergarter', name: o('Mineraler og bergarter', 'Minerals and rocks') },
    { id: 'wegener', name: o('Alfred Wegener', 'Alfred Wegener') }
  ];
})();
