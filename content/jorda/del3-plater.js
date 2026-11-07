/* =====================================================================
   Historien om Jorda – DEL 03: JORDSKORPA OG PLATETEKTONIKK
   ===================================================================== */
NatLab.topic('jorda').organisms.platetektonikk = {
  code: '03',
  title: { nb: 'Platetektonikk', en: 'Plate tectonics' },
  sub: { nb: 'Platene, plategrensene – og hvorfor vulkaner og jordskjelv er der de er.', en: 'The plates, their boundaries – and why volcanoes and earthquakes are where they are.' },
  lead: {
    nb: 'Jordas ytre skall er delt i store plater som beveger seg noen centimeter i året. Der platene møtes, blir det jordskjelv, vulkaner, fjell og nye hav. Velg en type plategrense øverst og klikk på delene i tegningen.',
    en: 'The Earth’s outer shell is divided into large plates that move a few centimetres a year. Where the plates meet there are earthquakes, volcanoes, mountains and new oceans. Choose a type of plate boundary at the top and click on the parts of the drawing.'
  },
  art: 'subduksjon',
  diagrams: ['spredning', 'rift', 'subduksjon', 'oybue', 'kollisjon', 'transform'],
  modelNames: {
    spredning: { nb: 'Havbunn fra hverandre', en: 'Ocean floor apart' },
    rift: { nb: 'Kontinent sprekker opp', en: 'Continent splits' },
    subduksjon: { nb: 'Havbunn mot kontinent', en: 'Ocean floor vs continent' },
    oybue: { nb: 'Havbunn mot havbunn', en: 'Ocean floor vs ocean floor' },
    kollisjon: { nb: 'Kontinent mot kontinent', en: 'Continent vs continent' },
    transform: { nb: 'Glir forbi hverandre', en: 'Sliding past' }
  },
  intro: { nb: 'De hvite pilene viser hvordan platene beveger seg. Sammenlign tegningene: Hvor blir det vulkaner? Hvor blir det fjell? Hvor blir det jordskjelv?', en: 'The white arrows show how the plates move. Compare the drawings: where are there volcanoes? Where are there mountains? Where are there earthquakes?' },
  practiceHref: '#jorda-ov-grupper-grenser',
  extraTabs: [{ href: '#jorda-kart', icon: 'planet', label: { nb: 'Plategrensekartet', en: 'Plate boundary map' } }],

  page: {
    goals: [
      { nb: 'forklare at jordskorpa er delt i plater som beveger seg', en: 'explain that the Earth’s crust is divided into moving plates' },
      { nb: 'beskrive hva som skjer når plater beveger seg fra hverandre, mot hverandre og forbi hverandre', en: 'describe what happens when plates move apart, towards each other and past each other' },
      { nb: 'forklare hvorfor vulkaner og jordskjelv finnes der platene møtes', en: 'explain why volcanoes and earthquakes are found where plates meet' },
      { nb: 'bruke et kart til å finne sammenhenger mellom plategrenser, vulkaner, jordskjelv og fjellkjeder', en: 'use a map to find connections between plate boundaries, volcanoes, earthquakes and mountain ranges' }
    ],
    keypoints: [
      { nb: 'Jordas ytre skall er delt i **6–8 store** og mange mindre **plater**.', en: 'The Earth’s outer shell is divided into **6–8 large** and many smaller **plates**.' },
      { nb: 'Platene beveger seg **noen centimeter i året**.', en: 'The plates move **a few centimetres a year**.' },
      { nb: 'Ved **divergente** grenser glir platene fra hverandre, og ny havbunn lages.', en: 'At **divergent** boundaries the plates move apart, and new ocean floor is made.' },
      { nb: 'Ved **konvergente** grenser beveger platene seg mot hverandre. Havbunn synker ned (**subduksjon**), eller kontinenter kolliderer.', en: 'At **convergent** boundaries the plates move towards each other. Ocean floor sinks (**subduction**), or continents collide.' },
      { nb: 'Ved **transforme** grenser glir platene forbi hverandre.', en: 'At **transform** boundaries the plates slide past each other.' },
      { nb: 'Nesten alle **jordskjelv** og **vulkaner** finnes langs plategrensene.', en: 'Almost all **earthquakes** and **volcanoes** are found along plate boundaries.' }
    ],
    sections: [
      {
        id: 'plater', title: { nb: 'Jordskorpa er delt i plater', en: 'The crust is divided into plates' },
        blocks: [
          { p: { nb: '**[[platetektonikk|Platetektonikk]]** er teorien om at Jordas ytterste og stiveste lag er delt opp i **6–8 store** og en rekke mindre plater. Platene beveger seg i forhold til hverandre med **noen centimeter i året**.', en: '**[[platetektonikk|Plate tectonics]]** is the theory that the Earth’s outermost and most rigid layer is divided into **6–8 large** and many smaller plates. The plates move relative to each other by **a few centimetres a year**.' }, src: ['snl-platetektonikk'] },
          { p: { nb: 'Platene består av jordskorpa og den øverste, stive delen av mantelen, og de er 40–280 km tykke. De glir på den myke, varme mantelen under. Kontinentene sitter fast i platene og følger med, som tømmerstokker frosset fast i isflak.', en: 'The plates consist of the crust and the top, rigid part of the mantle, and are 40–280 km thick. They glide on the soft, hot mantle beneath. The continents are stuck in the plates and move with them, like logs frozen into ice floes.' }, src: ['snl-platetektonikk'] },
          { p: { nb: 'Platene er stive og endrer seg lite inni. Det meste skjer langs **[[plategrense|plategrensene]]** – der platene beveger seg **fra hverandre**, **mot hverandre** eller **forbi hverandre**.', en: 'The plates are rigid and change little inside. Most things happen along the **[[plategrense|plate boundaries]]** – where the plates move **apart**, **towards each other** or **past each other**.' }, src: ['snl-platetektonikk', 'snl-plategrense'] },
          { link: { href: '#jorda-kart', icon: 'planet', title: { nb: 'Åpne plategrensekartet', en: 'Open the plate boundary map' }, text: { nb: 'Se alle plategrensene, vulkanene og jordskjelvsonene på et verdenskart – og oppdag sammenhengen selv.', en: 'See all the plate boundaries, volcanoes and earthquake zones on a world map – and discover the connection yourself.' } } }
        ]
      },
      {
        id: 'grenser', title: { nb: 'Tre typer plategrenser', en: 'Three types of plate boundaries' },
        blocks: [
          { table: {
            head: [{ nb: 'Type', en: 'Type' }, { nb: 'Platene beveger seg …', en: 'The plates move …' }, { nb: 'Hva skjer?', en: 'What happens?' }, { nb: 'Eksempel', en: 'Example' }],
            rows: [
              [{ nb: '**Divergent** (havbunn)', en: '**Divergent** (ocean floor)' }, { nb: 'fra hverandre', en: 'apart' }, { nb: 'Ny havbunn, midthavsrygg, små jordskjelv, vulkaner under vann', en: 'New ocean floor, mid-ocean ridge, small earthquakes, undersea volcanoes' }, { nb: 'Den midtatlantiske ryggen, Island', en: 'The Mid-Atlantic Ridge, Iceland' }],
              [{ nb: '**Divergent** (kontinent)', en: '**Divergent** (continent)' }, { nb: 'fra hverandre', en: 'apart' }, { nb: 'Riftdal, vulkaner, jordskjelv – kanskje et nytt hav', en: 'Rift valley, volcanoes, earthquakes – perhaps a new ocean' }, { nb: 'Riftdalen i Øst-Afrika', en: 'The East African Rift' }],
              [{ nb: '**Konvergent**: havbunn mot kontinent', en: '**Convergent**: ocean floor vs continent' }, { nb: 'mot hverandre', en: 'together' }, { nb: 'Havbunnen synker ned, dyphavsgrop, vulkaner, fjellkjede, kraftige jordskjelv', en: 'The ocean floor sinks, ocean trench, volcanoes, mountain range, powerful earthquakes' }, { nb: 'Andesfjellene', en: 'The Andes' }],
              [{ nb: '**Konvergent**: havbunn mot havbunn', en: '**Convergent**: ocean floor vs ocean floor' }, { nb: 'mot hverandre', en: 'together' }, { nb: 'Dyphavsgrop, øybue med vulkaner, kraftige jordskjelv', en: 'Ocean trench, island arc with volcanoes, powerful earthquakes' }, { nb: 'Marianene, Japan', en: 'The Marianas, Japan' }],
              [{ nb: '**Konvergent**: kontinent mot kontinent', en: '**Convergent**: continent vs continent' }, { nb: 'mot hverandre', en: 'together' }, { nb: 'Høye fjellkjeder, jordskjelv, nesten ingen vulkaner', en: 'High mountain ranges, earthquakes, almost no volcanoes' }, { nb: 'Himalaya', en: 'The Himalayas' }],
              [{ nb: '**Transform**', en: '**Transform**' }, { nb: 'forbi hverandre', en: 'past each other' }, { nb: 'Jordskjelv, lite vulkaner', en: 'Earthquakes, few volcanoes' }, { nb: 'San Andreas-forkastningen', en: 'The San Andreas Fault' }]
            ],
            src: ['snl-platetektonikk', 'snl-plategrense', 'snl-vulkan']
          } },
          { photos: [
            { photo: 'thingvellir', caption: { nb: 'Þingvellir på Island: Her glir Den nordamerikanske og Den eurasiske platen fra hverandre, og plategrensen ligger på land.', en: 'Þingvellir in Iceland: here the North American and Eurasian Plates move apart, and the plate boundary is on land.' } },
            { photo: 'everest', caption: { nb: 'Mount Everest i Himalaya. Fjellkjeden ble presset opp da India kolliderte med Asia.', en: 'Mount Everest in the Himalayas. The mountain range was pushed up when India collided with Asia.' } }
          ] },
          { check: {
            q: { nb: 'En havplate og en kontinentalplate beveger seg mot hverandre. Hvilken plate synker ned?', en: 'An oceanic plate and a continental plate move towards each other. Which plate sinks?' },
            options: [{ nb: 'Kontinentalplata, fordi den er tykkest', en: 'The continental plate, because it is thickest' }, { nb: 'Havplata, fordi den er tyngst', en: 'The oceanic plate, because it is heaviest' }, { nb: 'Ingen av dem', en: 'Neither of them' }],
            answer: 1,
            explain: { nb: 'Havskorpa har høyere tetthet enn kontinentalskorpa. Derfor er det havplata som synker ned i mantelen.', en: 'Oceanic crust has a higher density than continental crust. That is why the oceanic plate sinks into the mantle.' }
          } }
        ]
      },
      {
        id: 'vulkaner', title: { nb: 'Hvorfor er det vulkaner der platene møtes?', en: 'Why are there volcanoes where plates meet?' },
        blocks: [
          { p: { nb: 'Vulkaner trenger **magma**, og magma dannes bare noen få steder:', en: 'Volcanoes need **magma**, and magma only forms in a few places:' } },
          { list: [
            { nb: '**Der platene glir fra hverandre:** Varm mantel stiger opp. Når trykket blir lavere, smelter litt av den. Derfor er det vulkaner langs midthavsryggene og i riftdaler.', en: '**Where plates move apart:** Hot mantle rises. When the pressure drops, a little of it melts. That is why there are volcanoes along mid-ocean ridges and in rift valleys.' },
            { nb: '**Der havbunn synker ned:** Plata som synker, tar med seg vann. Vannet gjør at mantelen over smelter lettere. Magmaet stiger opp og lager rekker med vulkaner – som i Andesfjellene og rundt hele Stillehavet.', en: '**Where ocean floor sinks:** The sinking plate takes water down with it. The water makes the mantle above melt more easily. The magma rises and builds rows of volcanoes – as in the Andes and all around the Pacific.' },
            { nb: '**Over varme flekker:** Noen få steder stiger varmt materiale opp fra dypt i mantelen, midt under en plate. Hawaii er laget slik.', en: '**Over hotspots:** In a few places hot material rises from deep in the mantle, right under a plate. Hawaii formed this way.' }
          ], src: ['snl-platetektonikk', 'snl-vulkan', 'snl-hawaii', 'snl-astenosfaren'] },
          { p: { nb: 'Der to kontinenter kolliderer, er det nesten ingen vulkaner. Ingen havplate synker ned og tar med seg vann, så det dannes lite magma.', en: 'Where two continents collide there are almost no volcanoes. No oceanic plate sinks and takes water down with it, so little magma forms.' }, src: ['snl-platetektonikk'] },
          { fact: { nb: 'Rundt Stillehavet synker havbunnen ned nesten overalt. Derfor ligger det en «ring» av vulkaner og jordskjelv rundt hele havet. Den kalles ofte **Ildringen**.', en: 'All around the Pacific, ocean floor is sinking almost everywhere. That is why a “ring” of volcanoes and earthquakes surrounds the whole ocean. It is often called **the Ring of Fire**.' }, src: ['snl-platetektonikk'] }
        ]
      },
      {
        id: 'jordskjelv', title: { nb: 'Hvorfor blir det jordskjelv?', en: 'Why do earthquakes happen?' },
        blocks: [
          { p: { nb: 'Platene glir ikke jevnt. De **hekter seg fast** i hverandre, og spenningen bygger seg opp i berget i mange år. Når spenningen blir for stor, sprekker eller glipper berget plutselig – og det blir et **[[jordskjelv]]**.', en: 'The plates do not slide smoothly. They **get stuck**, and stress builds up in the rock for many years. When the stress gets too big, the rock suddenly breaks or slips – and there is an **[[jordskjelv|earthquake]]**.' }, src: ['snl-jordskjelv', 'snl-transform'] },
          { p: { nb: 'Nesten all jordskjelvaktivitet er knyttet til plategrensene. Et kart over jordskjelv er derfor også et kart over hvor plategrensene ligger.', en: 'Almost all earthquake activity is linked to the plate boundaries. A map of earthquakes is therefore also a map of where the plate boundaries are.' }, src: ['snl-platetektonikk'] },
          { p: { nb: 'De **kraftigste** jordskjelvene skjer der havbunn synker ned. Hvis havbunnen plutselig flytter seg, kan det lage en **tsunami** – en enorm bølge. Jordskjelvet utenfor Sumatra i 2004 laget en tsunami som drepte rundt 250 000 mennesker.', en: 'The **strongest** earthquakes happen where ocean floor sinks. If the sea floor suddenly moves, it can create a **tsunami** – an enormous wave. The 2004 earthquake off Sumatra created a tsunami that killed about 250,000 people.' }, src: ['snl-platetektonikk', 'snl-tsunami'] },
          { deeper: {
            title: { nb: 'Hvor sterkt er et jordskjelv?', en: 'How strong is an earthquake?' },
            blocks: [
              { p: { nb: 'Styrken (magnituden) til et jordskjelv måles på en skala. Én enhet opp på skalaen betyr 10 ganger større utslag på seismografen og omtrent **32 ganger mer energi**. Et jordskjelv med styrke 9 frigjør derfor omtrent en milliard ganger mer energi enn et med styrke 3.', en: 'The strength (magnitude) of an earthquake is measured on a scale. One step up the scale means a 10 times bigger reading on the seismograph and about **32 times more energy**. An earthquake of magnitude 9 therefore releases about a billion times more energy than one of magnitude 3.' }, src: ['snl-jordskjelv'] },
              { p: { nb: 'Det kraftigste jordskjelvet som er målt, skjedde i Chile i 1960. Det hadde styrke 9,5.', en: 'The strongest earthquake ever measured happened in Chile in 1960. It had a magnitude of 9.5.' }, src: ['snl-store-jordskjelv'] }
            ]
          } }
        ]
      },
      {
        id: 'norge', title: { nb: 'Norge og platene', en: 'Norway and the plates' },
        blocks: [
          { p: { nb: 'Norge ligger midt på **Den eurasiske platen**, et godt stykke unna nærmeste plategrense, som går gjennom Island og Jan Mayen. Likevel er Norge det mest jordskjelvaktive området i Nord-Europa, med mange små skjelv.', en: 'Norway lies in the middle of **the Eurasian Plate**, quite far from the nearest plate boundary, which runs through Iceland and Jan Mayen. Yet Norway is the most earthquake-active area in Northern Europe, with many small earthquakes.' }, src: ['snl-jordskjelv-norge', 'snl-jan-mayen'] },
          { list: [
            { nb: 'Spenninger fra **havbunnsspredningen** i Atlanterhavet presser på hele landet.', en: 'Stress from **sea-floor spreading** in the Atlantic pushes on the whole country.' },
            { nb: 'Landet **hever seg** fortsatt etter at den tunge isen fra siste istid smeltet.', en: 'The land is still **rising** after the heavy ice from the last ice age melted.' },
            { nb: 'Gamle sprekker i berget kan bli aktive igjen. Det mest kjente jordskjelvet på fastlandet skjedde sør for Oslo i 1904.', en: 'Old cracks in the rock can become active again. The best-known earthquake on the mainland happened south of Oslo in 1904.' }
          ], src: ['snl-jordskjelv-norge'] },
          { p: { nb: 'Norge har også vært **ved en plategrense** før. For rundt 420 millioner år siden kolliderte Norge og Grønland, og **Den kaledonske fjellkjeden** ble dannet. For rundt 300 millioner år siden sprakk jordskorpa på Østlandet opp, og **Oslofeltet** ble en riftdal med mange vulkaner.', en: 'Norway has also been **at a plate boundary** before. About 420 million years ago Norway and Greenland collided, and **the Caledonian mountains** formed. About 300 million years ago the crust in eastern Norway split, and **the Oslo region** became a rift valley with many volcanoes.' }, src: ['snl-platetektonikk', 'snl-kaledonsk', 'snl-oslofeltet'] },
          { fact: { nb: 'Jan Mayen er norsk og ligger rett ved plategrensen i Atlanterhavet. Der finner du verdens nordligste aktive vulkan, Beerenberg.', en: 'Jan Mayen is Norwegian and lies right by the plate boundary in the Atlantic. There you find the world’s northernmost active volcano, Beerenberg.' }, src: ['snl-jan-mayen'] },
          { discuss: { nb: 'Bruk plategrensekartet. Hvorfor tror du det er mange flere store jordskjelv i Japan enn i Norge?', en: 'Use the plate boundary map. Why do you think there are many more big earthquakes in Japan than in Norway?' } }
        ]
      }
    ],
    resources: ['ndla-jordskorpa', 'ndla-jordskjelv', 'ndla-tegn-plater', 'yt-platetektonikk', 'yt-minuteearth', 'snl-platetektonikk']
  }
};
