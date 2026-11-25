/* =====================================================================
   Klimaendringer – OVERSIKT OVER TEMAET
   Her ligger: tittel, verktøy, øvingsoppgaver og quizkategorier.
   De interaktive sidene (modellene, grafene, fotavtrykket, lesingen og
   forsøkene) ligger i sider.js.
   ===================================================================== */
(function () {
  const T = NatLab.topic('klima');
  const o = (nb, en) => ({ nb: nb, en: en });

  T.title = o('Klimaendringer', 'Climate change');
  T.lead = o(
    'Jorda blir varmere. Her lærer du hva klimaendringer er, hvorfor de skjer, hvordan karbon flytter seg mellom luft, hav, liv og stein – og hva vi kan gjøre. Du får jobbe med ekte målinger, interaktive modeller og en forskningsartikkel.',
    'The Earth is getting warmer. Here you learn what climate change is, why it happens, how carbon moves between the air, the ocean, living things and rock – and what we can do. You will work with real measurements, interactive models and a research article.'
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
    { icon: 'leaf', href: '#klima-karbonmodell', title: o('Karbonkretsløpet – modell', 'The carbon cycle – model'), desc: o('Animert modell med «Hva skjer hvis?»', 'Animated model with “What if?”') },
    { icon: 'sun', href: '#klima-drivhusmodell', title: o('Drivhuseffekten – modell', 'The greenhouse effect – model'), desc: o('Skru opp drivhusgassene og se hva som skjer', 'Turn up the greenhouse gases and see what happens') },
    { icon: 'chart', href: '#klima-malinger', title: o('Målingene', 'The measurements'), desc: o('Ekte data: CO₂, temperatur og iskjerner', 'Real data: CO₂, temperature and ice cores') },
    { icon: 'eye', href: '#klima-forogetter', title: o('Før og etter', 'Before and after'), desc: o('Isbreer, havis, øyer og korallrev', 'Glaciers, sea ice, islands and coral reefs') },
    { icon: 'foot', href: '#klima-fotavtrykk', title: o('Klimafotavtrykk', 'Carbon footprint'), desc: o('En modell – ikke en fasit', 'A model – not an answer key') },
    { icon: 'book', href: '#klima-lesing', title: o('Les forskning', 'Read research'), desc: o('Helhetslesing og kildekritikk', 'Whole-text reading and source criticism') },
    { icon: 'flask', href: '#klima-forsokdrivhus', title: o('Forsøk: Drivhus i et glass', 'Experiment: A greenhouse in a jar'), desc: o('Med skjema for hypotese og målinger', 'With a sheet for hypothesis and measurements') },
    { icon: 'flask', href: '#klima-forsokhav', title: o('Forsøk: Surere vann', 'Experiment: More acidic water'), desc: o('CO₂ og havforsuring', 'CO₂ and ocean acidification') },
    { icon: 'puzzle', href: '#klima-ov', title: NatLab.ui.practiceTitle, desc: o('Merk, sorter, koble og ordne', 'Label, sort, match and order') },
    { icon: 'quiz', href: '#klima-quiz', title: NatLab.ui.quizTitle, desc: NatLab.ui.quizDesc }
  ];
  T.featured = ['ndla-drivhus', 'ndla-karbon', 'snl-klimaendringer', 'nasa-world', 'yt-nrk-klima', 'yt-nrk-drivhus'];

  /* ---------- Øvingsoppgaver ---------- */
  T.practice = {
    merk: ['drivhuseffekt', 'klimasystem', 'karbonkretslop', 'naturlige', 'losninger', 'malinger'],
    grupper: [
      { id: 'kretslop', title: o('Raskt eller langsomt kretsløp?', 'Fast or slow cycle?'),
        help: o('Hører prosessen til det **raske** karbonkretsløpet (dager til tusen år), det **langsomme** (tusener til millioner av år), eller er det **menneskene** som flytter karbonet?', 'Does the process belong to the **fast** carbon cycle (days to a thousand years), the **slow** one (thousands to millions of years), or is it **humans** moving the carbon?'),
        cats: [{ id: 'rask', name: o('Det raske kretsløpet', 'The fast cycle') }, { id: 'langsom', name: o('Det langsomme kretsløpet', 'The slow cycle') }, { id: 'menneske', name: o('Menneskene', 'Humans') }],
        items: [
          { text: o('Fotosyntese i skogen', 'Photosynthesis in the forest'), cat: 'rask' }, { text: o('Celleånding hos dyr', 'Respiration in animals'), cat: 'rask' }, { text: o('Sopp bryter ned visne blader', 'Fungi break down dead leaves'), cat: 'rask' }, { text: o('Havet tar opp CO₂ fra lufta', 'The ocean takes up CO₂ from the air'), cat: 'rask' },
          { text: o('Det dannes kull av gamle planter', 'Coal forms from ancient plants'), cat: 'langsom' }, { text: o('Skall blir til kalkstein på havbunnen', 'Shells become limestone on the sea floor'), cat: 'langsom' }, { text: o('Vulkaner slipper ut CO₂', 'Volcanoes release CO₂'), cat: 'langsom' },
          { text: o('Bensin brennes i en bil', 'Petrol burns in a car'), cat: 'menneske' }, { text: o('Regnskog hogges for å lage beitemark', 'Rainforest is cut down to make pasture'), cat: 'menneske' }, { text: o('Kull brennes i et kraftverk', 'Coal burns in a power station'), cat: 'menneske' }
        ] },
      { id: 'arsaker', title: o('Naturlig eller menneskeskapt?', 'Natural or human-made?'),
        help: o('Er dette en **naturlig** årsak til klimaendringer, eller en årsak som skyldes **mennesker**?', 'Is this a **natural** cause of climate change, or a cause that comes from **humans**?'),
        cats: [{ id: 'natur', name: o('Naturlig', 'Natural') }, { id: 'menneske', name: o('Menneskeskapt', 'Human-made') }],
        items: [
          { text: o('Endringer i Jordas bane rundt sola', 'Changes in the Earth’s orbit around the sun'), cat: 'natur' }, { text: o('Store vulkanutbrudd', 'Large volcanic eruptions'), cat: 'natur' }, { text: o('Endringer i solaktiviteten', 'Changes in solar activity'), cat: 'natur' }, { text: o('Kontinenter som flytter seg', 'Continents that move'), cat: 'natur' },
          { text: o('Forbrenning av olje, kull og gass', 'Burning oil, coal and gas'), cat: 'menneske' }, { text: o('Avskoging', 'Deforestation'), cat: 'menneske' }, { text: o('Grøfting av myr', 'Draining bogs'), cat: 'menneske' }, { text: o('Metan fra kuer i jordbruket', 'Methane from cows in farming'), cat: 'menneske' }
        ] },
      { id: 'tiltak', title: o('Kutte utslipp eller tilpasse seg?', 'Cut emissions or adapt?'),
        help: o('Noen tiltak **kutter utslipp** slik at oppvarmingen blir mindre. Andre hjelper oss å **tilpasse oss** et klima som allerede endrer seg. Sorter tiltakene.', 'Some measures **cut emissions** so that the warming is smaller. Others help us **adapt** to a climate that is already changing. Sort the measures.'),
        cats: [{ id: 'kutt', name: o('Kutter utslipp', 'Cuts emissions') }, { id: 'tilpass', name: o('Tilpasning', 'Adaptation') }],
        items: [
          { text: o('Bytte bensinbil med elbil', 'Swap a petrol car for an electric car'), cat: 'kutt' }, { text: o('Bygge vindkraft og solceller', 'Build wind and solar power'), cat: 'kutt' }, { text: o('Spise mindre rødt kjøtt', 'Eat less red meat'), cat: 'kutt' }, { text: o('Fange og lagre CO₂ fra en sementfabrikk', 'Capture and store CO₂ from a cement factory'), cat: 'kutt' },
          { text: o('Bygge høyere flomvoller', 'Build higher flood barriers'), cat: 'tilpass' }, { text: o('Lage større avløpsrør for kraftig regn', 'Make bigger drains for heavy rain'), cat: 'tilpass' }, { text: o('Bygge hus lenger unna sjøen', 'Build houses further from the sea'), cat: 'tilpass' }, { text: o('Plante kornsorter som tåler tørke', 'Plant crop varieties that tolerate drought'), cat: 'tilpass' }
        ] }
    ],
    par: [
      { id: 'begreper', title: o('Begreper om klima', 'Climate terms'),
        items: [
          { a: o('Klima', 'Climate'), b: o('Gjennomsnittsværet over lang tid, vanligvis 30 år', 'The average weather over a long time, usually 30 years') },
          { a: o('Drivhuseffekt', 'Greenhouse effect'), b: o('Gasser i atmosfæren holder på varmestråling fra jordoverflaten', 'Gases in the atmosphere hold on to heat radiation from the Earth’s surface') },
          { a: o('Global oppvarming', 'Global warming'), b: o('At middeltemperaturen på Jorda stiger', 'That the average temperature on Earth rises') },
          { a: o('Fossilt brensel', 'Fossil fuel'), b: o('Kull, olje og gass dannet av rester av liv for millioner av år siden', 'Coal, oil and gas formed from remains of life millions of years ago') },
          { a: o('Permafrost', 'Permafrost'), b: o('Bakke som er frossen hele året, minst to år på rad', 'Ground that is frozen all year round, for at least two years in a row') },
          { a: o('Forsuring av havet', 'Ocean acidification'), b: o('Havet blir surere fordi det tar opp CO₂', 'The ocean becomes more acidic because it takes up CO₂') },
          { a: o('Tilbakekoblingsmekanisme', 'Feedback mechanism'), b: o('En endring som setter i gang noe som forsterker (eller demper) den samme endringen', 'A change that sets off something that amplifies (or dampens) the same change') }
        ] },
      { id: 'straling', title: o('Stråling og energi', 'Radiation and energy'),
        items: [
          { a: o('Elektromagnetisk stråling', 'Electromagnetic radiation'), b: o('Energi som går som bølger: lys, varmestråling, radiobølger', 'Energy travelling as waves: light, heat radiation, radio waves') },
          { a: o('Absorpsjon', 'Absorption'), b: o('Stråling blir tatt opp av et stoff og blir til varme', 'Radiation is taken up by a substance and turns into heat') },
          { a: o('Refleksjon', 'Reflection'), b: o('Stråling blir kastet tilbake fra en overflate', 'Radiation bounces back from a surface') },
          { a: o('Kortbølget stråling', 'Short-wave radiation'), b: o('Sollyset som kommer inn til Jorda', 'The sunlight coming in to the Earth') },
          { a: o('Langbølget stråling', 'Long-wave radiation'), b: o('Infrarød varmestråling fra bakken', 'Infrared heat radiation from the ground') },
          { a: o('Albedo', 'Albedo'), b: o('Hvor stor del av lyset en overflate reflekterer', 'How large a part of the light a surface reflects') }
        ] },
      { id: 'karbon', title: o('Karbonkretsløpet', 'The carbon cycle'),
        items: [
          { a: o('Fotosyntese', 'Photosynthesis'), b: o('CO₂ + vann + sollys → sukker + oksygen', 'CO₂ + water + sunlight → sugar + oxygen') },
          { a: o('Celleånding', 'Cellular respiration'), b: o('Sukker + oksygen → CO₂ + vann + energi', 'Sugar + oxygen → CO₂ + water + energy') },
          { a: o('Nedbrytere', 'Decomposers'), b: o('Sopp og bakterier som bryter ned dødt materiale', 'Fungi and bacteria that break down dead material') },
          { a: o('Karbonlager', 'Carbon store'), b: o('Et sted der karbon er lagret, for eksempel havet, skogen eller berget', 'A place where carbon is stored, for example the ocean, forest or rock') },
          { a: o('Keeling-kurven', 'The Keeling curve'), b: o('Målinger av CO₂ i lufta på Mauna Loa siden 1958', 'Measurements of CO₂ in the air at Mauna Loa since 1958') },
          { a: o('Karbonbudsjett', 'Carbon budget'), b: o('Hvor mye CO₂ vi kan slippe ut før vi passerer en temperaturgrense', 'How much CO₂ we can emit before we pass a temperature limit') }
        ] }
    ],
    order: [
      { id: 'drivhus', title: o('Slik virker drivhuseffekten', 'How the greenhouse effect works'),
        help: o('Sett stegene i riktig rekkefølge.', 'Put the steps in the right order.'),
        ends: [o('Først', 'First'), o('Til slutt', 'Last')],
        items: [
          o('Sollys går gjennom atmosfæren.', 'Sunlight passes through the atmosphere.'),
          o('Bakken og havet absorberer sollyset og blir varme.', 'The ground and the ocean absorb the sunlight and become warm.'),
          o('Den varme overflaten sender ut varmestråling (infrarød stråling).', 'The warm surface sends out heat radiation (infrared radiation).'),
          o('Drivhusgassene absorberer varmestrålingen.', 'The greenhouse gases absorb the heat radiation.'),
          o('Drivhusgassene sender varme i alle retninger – også ned mot bakken.', 'The greenhouse gases send heat in all directions – also down towards the ground.')
        ] },
      { id: 'kullet', title: o('Karbonatomets reise', 'The carbon atom’s journey'),
        help: o('Følg et karbonatom fra en bregne for 300 millioner år siden til lufta i dag.', 'Follow a carbon atom from a fern 300 million years ago to the air today.'),
        ends: [o('Først', 'First'), o('Til slutt', 'Last')],
        items: [
          o('En bregne tar opp CO₂ med fotosyntese.', 'A fern takes up CO₂ by photosynthesis.'),
          o('Bregnen dør og blir dekket av slam og sand.', 'The fern dies and is covered by mud and sand.'),
          o('I millioner av år blir restene presset og varmet opp til kull.', 'For millions of years the remains are pressed and heated into coal.'),
          o('Kullet blir gravd opp og brent i et kraftverk.', 'The coal is dug up and burned in a power station.'),
          o('Karbonatomet er i lufta som CO₂ og forsterker drivhuseffekten.', 'The carbon atom is in the air as CO₂ and strengthens the greenhouse effect.')
        ] },
      { id: 'tilbake', title: o('En tilbakekobling: Is som smelter', 'A feedback: melting ice'),
        help: o('Sett stegene i riktig rekkefølge.', 'Put the steps in the right order.'),
        ends: [o('Først', 'First'), o('Til slutt', 'Last')],
        items: [
          o('Mer drivhusgasser gjør det litt varmere.', 'More greenhouse gases make it a little warmer.'),
          o('Snø og is smelter.', 'Snow and ice melt.'),
          o('Mørk bakke og mørkt hav kommer fram.', 'Dark ground and dark sea are exposed.'),
          o('Den mørke overflaten absorberer mer sollys.', 'The dark surface absorbs more sunlight.'),
          o('Det blir enda varmere – og enda mer is smelter.', 'It gets even warmer – and even more ice melts.')
        ] }
    ]
  };

  /* ---------- Quizkategorier ---------- */
  T.quizSets = [
    { id: 'hva', name: o('Hva er klimaendringer?', 'What is climate change?') },
    { id: 'karbon', name: o('Karbon og karbonkretsløpet', 'Carbon and the carbon cycle') },
    { id: 'arsaker', name: o('Årsaker og drivhuseffekten', 'Causes and the greenhouse effect') },
    { id: 'normalt', name: o('Er det normalt?', 'Is it normal?') },
    { id: 'losninger', name: o('Løsninger', 'Solutions') },
    { id: 'myter', name: o('Myter og målinger', 'Myths and measurements') }
  ];
})();
