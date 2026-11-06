/* =====================================================================
   Økologi – FELTARBEID: Undersøk et økosystem i nærmiljøet
   ---------------------------------------------------------------------
   page  = innledning og sikkerhet (vanlige artikkel-byggeklosser)
   sheet = observasjonsskjemaet. Felttyper: 'text', 'area', 'table'.
   ===================================================================== */
NatLab.topic('okologi').pages.feltarbeid = {
  type: 'fieldwork',
  title: { nb: 'Feltarbeid: Undersøk et økosystem', en: 'Fieldwork: Investigate an ecosystem' },
  lead: {
    nb: 'Ta med skjemaet ut i skogen nær skolen. Sammenlign to ruter – én i solen og én i skyggen – og finn ut hvordan de abiotiske faktorene påvirker livet.',
    en: 'Take the sheet out into the forest near the school. Compare two squares – one in the sun and one in the shade – and find out how the abiotic factors affect life.'
  },
  page: {
    goals: [
      { nb: 'stille et forskningsspørsmål og lage en hypotese', en: 'ask a research question and make a hypothesis' },
      { nb: 'identifisere avhengige og uavhengige variabler og samle data i felt', en: 'identify dependent and independent variables and collect data in the field' },
      { nb: 'bruke dataene til å lage en næringskjede og drøfte resultatene', en: 'use the data to make a food chain and discuss the results' }
    ],
    sections: [
      {
        id: 'plan', title: { nb: 'Slik gjør dere', en: 'What to do' },
        blocks: [
          { list: [
            { nb: '**Velg to ruter** på 1 × 1 meter i samme skog: én åpen og solrik, og én i skyggen under trærne. Merk rutene med pinner og snor.', en: '**Choose two squares** of 1 × 1 metre in the same forest: one open and sunny, and one in the shade under the trees. Mark the squares with sticks and string.' },
            { nb: '**Mål de abiotiske faktorene** i begge rutene: temperatur i lufta og jorda, hvor mye lys det er, og hvor fuktig jorda er.', en: '**Measure the abiotic factors** in both squares: temperature of the air and soil, how much light there is, and how moist the soil is.' },
            { nb: '**Registrer det levende** i hver rute: hvilke planter som vokser der, og hvilke dyr og spor du finner. Se også under steiner og i jorda.', en: '**Record the living things** in each square: which plants grow there, and which animals and signs you find. Look under stones and in the soil too.' },
            { nb: '**Sorter funnene** i produsenter, konsumenter og nedbrytere, og lag minst én næringskjede.', en: '**Sort your findings** into producers, consumers and decomposers, and make at least one food chain.' },
            { nb: '**Sammenlign rutene** og se om hypotesen deres stemte.', en: '**Compare the squares** and see whether your hypothesis was right.' }
          ], src: ['ndla-feltarbeid'] },
          { fact: { nb: 'Lyset er den **uavhengige variabelen** (det dere velger å endre: sol eller skygge). Det dere måler i rutene – for eksempel antall plantearter – er den **avhengige variabelen**.', en: 'Light is the **independent variable** (what you choose to vary: sun or shade). What you measure in the squares – for example the number of plant species – is the **dependent variable**.' } }
        ]
      },
      {
        id: 'sikkerhet', title: { nb: 'Sikkerhet og respekt for naturen', en: 'Safety and respect for nature' },
        blocks: [
          { list: [
            { nb: 'Hold dere i grupper, og avtal hvor dere skal møtes.', en: 'Stay in groups, and agree where to meet.' },
            { nb: 'Sjekk dere for **flått** etter turen – den er vanlig i skogen på Østlandet.', en: 'Check yourselves for **ticks** after the trip – they are common in the forests of south-eastern Norway.' },
            { nb: 'Vask hendene etter at dere har tatt i jord, sopp og dyr. Ikke smak på sopp eller bær dere ikke kjenner.', en: 'Wash your hands after touching soil, fungi and animals. Don’t taste fungi or berries you don’t know.' },
            { nb: 'Legg steiner og stokker tilbake slik dere fant dem, og la dyrene være i fred. Ta bilde i stedet for å plukke.', en: 'Put stones and logs back the way you found them, and leave the animals alone. Take photos instead of picking.' }
          ] },
          { discuss: { nb: 'Hvorfor er det viktig å legge steiner og stokker tilbake? Tenk på hvilke dyr som bor der.', en: 'Why is it important to put stones and logs back? Think about which animals live there.' } }
        ]
      }
    ],
    resources: ['ndla-feltarbeid', 'ndla-abiotisk']
  },
  sheet: {
    kicker: { nb: 'Observasjonsskjema', en: 'Observation sheet' },
    title: { nb: 'Sol eller skygge – hvordan påvirker lyset livet i skogbunnen?', en: 'Sun or shade – how does light affect life on the forest floor?' },
    sections: [
      { title: { nb: 'Om undersøkelsen', en: 'About the investigation' }, fields: [
        { type: 'text', label: { nb: 'Navn i gruppa', en: 'Names in the group' } },
        { type: 'text', label: { nb: 'Dato og klokkeslett', en: 'Date and time' } },
        { type: 'text', label: { nb: 'Sted (beskriv)', en: 'Place (describe)' } },
        { type: 'text', label: { nb: 'Vær i dag', en: 'Weather today' }, placeholder: { nb: 'f.eks. sol, overskyet, regn', en: 'e.g. sunny, cloudy, rain' } }
      ] },
      { title: { nb: 'Spørsmål og hypotese', en: 'Question and hypothesis' }, fields: [
        { type: 'area', label: { nb: 'Forskningsspørsmål', en: 'Research question' }, rows: 2, help: { nb: 'Eksempel: «Finnes det flere plantearter i ruta i solen enn i ruta i skyggen?»', en: 'Example: “Are there more plant species in the sunny square than in the shady square?”' } },
        { type: 'area', label: { nb: 'Hypotese – hva tror dere, og hvorfor?', en: 'Hypothesis – what do you think, and why?' }, rows: 3 },
        { type: 'text', label: { nb: 'Uavhengig variabel', en: 'Independent variable' } },
        { type: 'text', label: { nb: 'Avhengig variabel', en: 'Dependent variable' } }
      ] },
      { title: { nb: 'Abiotiske faktorer', en: 'Abiotic factors' }, help: { nb: 'Mål det samme på samme måte i begge rutene.', en: 'Measure the same things in the same way in both squares.' }, fields: [
        { type: 'table', label: { nb: 'Målinger', en: 'Measurements' }, rows: 5,
          cols: [{ nb: 'Faktor', en: 'Factor' }, { nb: 'Rute 1: sol', en: 'Square 1: sun' }, { nb: 'Rute 2: skygge', en: 'Square 2: shade' }, { nb: 'Hvordan målte vi?', en: 'How did we measure?' }],
          help: { nb: 'Forslag: lufttemperatur, jordtemperatur, lys (sterkt/middels/svakt), fuktighet i jorda, snødybde om vinteren.', en: 'Suggestions: air temperature, soil temperature, light (strong/medium/weak), soil moisture, snow depth in winter.' } }
      ] },
      { title: { nb: 'Biotiske faktorer – det levende', en: 'Biotic factors – living things' }, fields: [
        { type: 'table', label: { nb: 'Arter og spor vi fant', en: 'Species and signs we found' }, rows: 8,
          cols: [{ nb: 'Art / spor', en: 'Species / sign' }, { nb: 'Rute 1: antall', en: 'Square 1: number' }, { nb: 'Rute 2: antall', en: 'Square 2: number' }, { nb: 'Produsent, konsument eller nedbryter?', en: 'Producer, consumer or decomposer?' }],
          help: { nb: 'Spor kan være gnagde kongler, ekskrementer, fjær, fotspor eller hull i blader.', en: 'Signs can be gnawed cones, droppings, feathers, footprints or holes in leaves.' } },
        { type: 'text', label: { nb: 'Antall ulike plantearter i rute 1 / rute 2', en: 'Number of different plant species in square 1 / square 2' } }
      ] },
      { title: { nb: 'Næringskjede', en: 'Food chain' }, fields: [
        { type: 'area', label: { nb: 'Lag minst én næringskjede med arter dere fant eller vet lever her', en: 'Make at least one food chain with species you found or know live here' }, rows: 2, help: { nb: 'Husk: Pila peker mot den som spiser. Eksempel: blåbærlyng → larve → kjøttmeis.', en: 'Remember: the arrow points to the one that eats. Example: bilberry → caterpillar → great tit.' } }
      ] },
      { title: { nb: 'Resultater og konklusjon', en: 'Results and conclusion' }, fields: [
        { type: 'area', label: { nb: 'Hva fant dere ut? Stemte hypotesen?', en: 'What did you find? Was your hypothesis right?' }, rows: 3 },
        { type: 'area', label: { nb: 'Feilkilder – hva kan ha påvirket resultatene?', en: 'Sources of error – what might have affected the results?' }, rows: 2 },
        { type: 'area', label: { nb: 'Hvordan kunne undersøkelsen blitt bedre?', en: 'How could the investigation be improved?' }, rows: 2 }
      ] }
    ]
  }
};
