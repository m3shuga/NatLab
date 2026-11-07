/* =====================================================================
   Historien om Jorda – DEL 02: JORDA BLIR TIL OG BYGGES OPP
   ===================================================================== */
NatLab.topic('jorda').organisms.oppbygning = {
  code: '02',
  title: { nb: 'Jorda blir til', en: 'The Earth is born' },
  sub: { nb: 'Hvordan Jorda ble dannet – og hvordan den er bygd opp i lag.', en: 'How the Earth formed – and how it is built up in layers.' },
  lead: {
    nb: 'Jorda er bygd opp i lag, nesten som en løk: skorpe, mantel og kjerne. Klikk på lagene og finn ut hva de består av, og hvordan vi kan vite det.',
    en: 'The Earth is built up in layers, almost like an onion: crust, mantle and core. Click on the layers and find out what they are made of, and how we can know.'
  },
  art: 'lagene',
  diagrams: ['lagene'],
  modelNames: { lagene: { nb: 'Jordas lag', en: 'The Earth’s layers' } },
  intro: { nb: 'Til venstre ser du hele Jorda i tverrsnitt. Til høyre er de øverste kilometerne forstørret, så du kan se forskjellen på havskorpe og kontinentalskorpe.', en: 'On the left you see the whole Earth in cross-section. On the right the top kilometres are magnified, so you can see the difference between oceanic and continental crust.' },
  practiceHref: '#jorda-ov-merk-lagene',
  extraTabs: [{ href: '#jorda-ov-par-lag', icon: 'puzzle', label: { nb: 'Koble lagene', en: 'Match the layers' } }],

  page: {
    goals: [
      { nb: 'beskrive hvordan Jorda ble dannet for rundt 4,6 milliarder år siden', en: 'describe how the Earth formed about 4.6 billion years ago' },
      { nb: 'beskrive Jordas lag: jordskorpe, mantel, ytre og indre kjerne', en: 'describe the Earth’s layers: crust, mantle, outer and inner core' },
      { nb: 'forklare forskjellen på havskorpe og kontinentalskorpe', en: 'explain the difference between oceanic and continental crust' },
      { nb: 'forklare hvordan jordskjelvbølger viser oss hvordan Jorda ser ut inni', en: 'explain how earthquake waves show us what the Earth looks like inside' }
    ],
    keypoints: [
      { nb: 'Jorda ble til av en sky av **gass og støv** for rundt **4,6 milliarder år siden**.', en: 'The Earth formed from a cloud of **gas and dust** about **4.6 billion years ago**.' },
      { nb: 'Jorda har tre hovedlag: **jordskorpe**, **mantel** og **kjerne**.', en: 'The Earth has three main layers: **crust**, **mantle** and **core**.' },
      { nb: '**Havskorpa** er tynn og tung. **Kontinentalskorpa** er tykk og lett.', en: '**Oceanic crust** is thin and heavy. **Continental crust** is thick and light.' },
      { nb: 'Mantelen er **fast**, men så varm at den flyter svært sakte.', en: 'The mantle is **solid**, but so hot that it flows very slowly.' },
      { nb: 'Den **ytre kjernen** er flytende metall. Den **indre kjernen** er fast.', en: 'The **outer core** is liquid metal. The **inner core** is solid.' }
    ],
    sections: [
      {
        id: 'blirtil', title: { nb: 'Slik ble Jorda til', en: 'How the Earth formed' },
        blocks: [
          { p: { nb: 'Jorda og de andre planetene i solsystemet ble til av en stor sky av **gass og støv**. Jorda ble en fast planet for nærmere **4,6 milliarder år siden**.', en: 'The Earth and the other planets in the solar system formed from a large cloud of **gas and dust**. The Earth became a solid planet nearly **4.6 billion years ago**.' }, src: ['snl-jorden', 'snl-jordens-geologi'] },
          { steps: {
            figure: 'jordablirtil',
            title: { nb: 'Slik ble Jorda til – i fem steg', en: 'How the Earth formed – in five steps' },
            steps: [
              { title: { nb: 'En sky av gass og støv', en: 'A cloud of gas and dust' }, text: { nb: 'En stor sky av gass og støv i verdensrommet trekker seg sammen. I midten blir sola til.', en: 'A large cloud of gas and dust in space contracts. The sun forms in the middle.' } },
              { title: { nb: 'Klumper kolliderer', en: 'Clumps collide' }, text: { nb: 'Støv og stein klumper seg sammen. Klumpene kolliderer og blir større og større, til de blir planeter.', en: 'Dust and rock clump together. The clumps collide and grow bigger and bigger, until they become planets.' } },
              { title: { nb: 'Tungt synker, lett flyter opp', en: 'Heavy sinks, light floats up' }, text: { nb: 'Den unge Jorda blir svært varm. Tunge stoffer som **jern og nikkel** synker inn mot midten og blir til **kjernen**. Lettere stein legger seg utenpå.', en: 'The young Earth becomes very hot. Heavy substances like **iron and nickel** sink to the centre and become the **core**. Lighter rock settles on the outside.' } },
              { title: { nb: 'Skorpe og hav', en: 'Crust and ocean' }, text: { nb: 'Overflaten kjøles ned, og en fast **skorpe** størkner. Etter hvert samler vannet seg i hav.', en: 'The surface cools and a solid **crust** forms. In time, water collects in oceans.' } },
              { title: { nb: 'Jorda i dag', en: 'The Earth today' }, text: { nb: 'Jorda har lag: skorpe, mantel og kjerne. Platene i skorpa beveger seg fortsatt – Jorda er en levende planet.', en: 'The Earth has layers: crust, mantle and core. The plates in the crust are still moving – the Earth is a living planet.' } }
            ],
            src: ['snl-jorden', 'snl-jordens-geologi']
          } },
          { model: { nb: 'Ingen var der da Jorda ble til. Forklaringen bygger på hvordan vi ser at andre stjerner og planeter blir dannet i verdensrommet, og på alderen til de eldste bergartene og meteorittene. Detaljene diskuteres fortsatt.', en: 'Nobody was there when the Earth formed. The explanation builds on how we see other stars and planets forming in space, and on the age of the oldest rocks and meteorites. The details are still being discussed.' } }
        ]
      },
      {
        id: 'lag', title: { nb: 'Jordas lag', en: 'The Earth’s layers' },
        blocks: [
          { p: { nb: 'Jorda har en radius på rundt 6370 km. Den er bygd opp av lag med ulikt innhold og ulike egenskaper. Jo lenger inn du kommer, jo varmere er det og jo høyere er trykket.', en: 'The Earth has a radius of about 6370 km. It is built up of layers with different contents and properties. The further in you go, the hotter it is and the higher the pressure.' }, src: ['snl-jorden', 'snl-kjerne'] },
          { table: {
            head: [{ nb: 'Lag', en: 'Layer' }, { nb: 'Dybde', en: 'Depth' }, { nb: 'Består av', en: 'Made of' }, { nb: 'Fast eller flytende?', en: 'Solid or liquid?' }],
            rows: [
              [{ nb: '**[[jordskorpe|Jordskorpa]]**', en: '**[[jordskorpe|The crust]]**' }, { nb: '5–70 km', en: '5–70 km' }, { nb: 'Bergarter (basalt under havet, granitt og gneis på land)', en: 'Rocks (basalt under the sea, granite and gneiss on land)' }, { nb: 'Fast', en: 'Solid' }],
              [{ nb: '**[[mantel|Mantelen]]**', en: '**[[mantel|The mantle]]**' }, { nb: 'ned til ca. 2900 km', en: 'down to about 2900 km' }, { nb: 'Tung stein, rik på magnesium og jern', en: 'Heavy rock, rich in magnesium and iron' }, { nb: 'Fast, men flyter svært sakte', en: 'Solid, but flows very slowly' }],
              [{ nb: '**Ytre kjerne**', en: '**Outer core**' }, { nb: 'ca. 2900–5100 km', en: 'about 2900–5100 km' }, { nb: 'Jern og nikkel', en: 'Iron and nickel' }, { nb: 'Flytende', en: 'Liquid' }],
              [{ nb: '**Indre kjerne**', en: '**Inner core**' }, { nb: 'ca. 5100–6370 km', en: 'about 5100–6370 km' }, { nb: 'Jern og nikkel', en: 'Iron and nickel' }, { nb: 'Fast (på grunn av det enorme trykket)', en: 'Solid (because of the enormous pressure)' }]
            ],
            src: ['snl-jordskorpen', 'snl-mantelen', 'snl-kjerne']
          } },
          { myth: { nb: '«Under jordskorpa er det et hav av flytende magma.»', en: '“Under the crust there is an ocean of liquid magma.”' }, truth: { nb: 'Mantelen er nesten helt **fast stein**. Den er bare så varm og myk at den kan flyte svært sakte over millioner av år. Magma dannes bare noen få steder, for eksempel under midthavsryggene og over plater som synker ned.', en: 'The mantle is almost entirely **solid rock**. It is just so hot and soft that it can flow very slowly over millions of years. Magma only forms in a few places, for example under mid-ocean ridges and above sinking plates.' }, src: ['snl-mantelen', 'snl-astenosfaren'] },
          { fact: { nb: 'Temperaturen i kjernen antas å være om lag 4000–5000 °C – nesten like varmt som overflaten av sola.', en: 'The temperature in the core is thought to be about 4000–5000 °C – almost as hot as the surface of the sun.' }, src: ['snl-jordens-geologi'] },
          { check: {
            q: { nb: 'Hvorfor er den indre kjernen fast, selv om den er varmere enn den ytre kjernen?', en: 'Why is the inner core solid, even though it is hotter than the outer core?' },
            options: [{ nb: 'Den er laget av is', en: 'It is made of ice' }, { nb: 'Trykket er så høyt at metallet ikke kan smelte', en: 'The pressure is so high that the metal cannot melt' }, { nb: 'Den har kjølt seg helt ned', en: 'It has cooled down completely' }],
            answer: 1,
            explain: { nb: 'Det enorme trykket i midten av Jorda gjør at smeltepunktet blir svært høyt. Derfor er den indre kjernen fast.', en: 'The enormous pressure in the centre of the Earth makes the melting point very high. That is why the inner core is solid.' }
          } }
        ]
      },
      {
        id: 'skorpe', title: { nb: 'To typer jordskorpe', en: 'Two types of crust' },
        blocks: [
          { p: { nb: 'Jordskorpa er ikke lik overalt. Det finnes to typer, og forskjellen mellom dem er viktig for å forstå platetektonikk:', en: 'The crust is not the same everywhere. There are two types, and the difference between them is important for understanding plate tectonics:' } },
          { table: {
            head: [{ nb: '', en: '' }, { nb: 'Havskorpe', en: 'Oceanic crust' }, { nb: 'Kontinentalskorpe', en: 'Continental crust' }],
            rows: [
              [{ nb: 'Hvor?', en: 'Where?' }, { nb: 'Under havene', en: 'Under the oceans' }, { nb: 'Under kontinentene', en: 'Under the continents' }],
              [{ nb: 'Tykkelse', en: 'Thickness' }, { nb: 'ca. 10 km', en: 'about 10 km' }, { nb: 'vanligvis 30–50 km, mer under høye fjell', en: 'usually 30–50 km, more under high mountains' }],
              [{ nb: 'Tetthet', en: 'Density' }, { nb: 'Tung (ca. 2,9 g/cm³)', en: 'Heavy (about 2.9 g/cm³)' }, { nb: 'Lett (ca. 2,7 g/cm³)', en: 'Light (about 2.7 g/cm³)' }],
              [{ nb: 'Typisk bergart', en: 'Typical rock' }, { nb: 'Basalt', en: 'Basalt' }, { nb: 'Granitt, gneis', en: 'Granite, gneiss' }],
              [{ nb: 'Alder', en: 'Age' }, { nb: 'Stort sett yngre enn 200 millioner år', en: 'Mostly younger than 200 million years' }, { nb: 'Opptil fire milliarder år', en: 'Up to four billion years' }]
            ],
            src: ['snl-jordskorpen']
          } },
          { p: { nb: 'Fordi havskorpa er tyngre, er det alltid havskorpa som synker ned når en havplate og en kontinentalplate møtes. Det lærer du mer om i neste del.', en: 'Because oceanic crust is heavier, it is always the oceanic crust that sinks when an oceanic plate and a continental plate meet. You will learn more about this in the next part.' }, src: ['snl-jordskorpen'] },
          { deeper: {
            title: { nb: 'Litosfæren og astenosfæren', en: 'The lithosphere and the asthenosphere' },
            blocks: [
              { p: { nb: 'Geologer deler også de ytterste lagene etter hvor **stive** de er. **[[litosfaren|Litosfæren]]** er skorpa sammen med den øverste, stive delen av mantelen. Det er litosfæren som er delt opp i plater.', en: 'Geologists also divide the outer layers by how **rigid** they are. **[[litosfaren|The lithosphere]]** is the crust together with the top, rigid part of the mantle. It is the lithosphere that is broken into plates.' }, src: ['snl-litosfaren'] },
              { p: { nb: 'Under ligger **astenosfæren**: en varm og myk del av mantelen (over 1300 °C). Den er ikke smeltet, men så myk at platene kan gli oppå den.', en: 'Below lies the **asthenosphere**: a hot, soft part of the mantle (over 1300 °C). It is not melted, but so soft that the plates can glide on top of it.' }, src: ['snl-astenosfaren'] }
            ]
          } }
        ]
      },
      {
        id: 'vet', title: { nb: 'Hvordan vet vi hvordan Jorda ser ut inni?', en: 'How do we know what the Earth looks like inside?' },
        blocks: [
          { p: { nb: 'Ingen har boret seg ned til mantelen, og nesten ikke noe mantelberg finnes på overflaten. Likevel vet vi mye om mantelen og kjernen. Det meste vet vi fra **jordskjelvbølger**.', en: 'Nobody has drilled down to the mantle, and almost no mantle rock is found at the surface. Yet we know a lot about the mantle and the core. Most of it we know from **earthquake waves**.' }, src: ['snl-mantelen'] },
          { list: [
            { nb: '**P-bølger** presser berget sammen og drar det ut igjen. De kan gå gjennom både fast stoff og væske.', en: '**P waves** squeeze the rock and stretch it again. They can travel through both solids and liquids.' },
            { nb: '**S-bølger** får berget til å svinge på tvers. De **kan ikke gå gjennom væske**.', en: '**S waves** make the rock swing sideways. They **cannot travel through liquid**.' },
            { nb: 'Når et kraftig jordskjelv skjer, kommer S-bølgene ikke fram til seismografene på andre siden av Jorda. Det viser at noe i midten er **flytende** – den ytre kjernen.', en: 'When a powerful earthquake happens, the S waves do not reach the seismographs on the other side of the Earth. This shows that something in the middle is **liquid** – the outer core.' }
          ], src: ['snl-seismisk-bolge'] },
          { p: { nb: 'Noen ganger kommer også biter av mantelen opp til overflaten sammen med magma. Slike biter kommer fra de øverste 100 km av mantelen.', en: 'Sometimes pieces of the mantle also come up to the surface with magma. These pieces come from the top 100 km of the mantle.' }, src: ['snl-mantelen'] },
          { explain: { nb: 'Forklar med egne ord hvordan forskerne kan vite at den ytre kjernen er flytende, selv om ingen har vært der.', en: 'Explain in your own words how scientists can know that the outer core is liquid, even though nobody has been there.' } }
        ]
      }
    ],
    resources: ['snl-jorden', 'snl-jordskorpen', 'snl-mantelen', 'snl-kjerne', 'yt-sentrum', 'yt-indre-krefter']
  }
};
