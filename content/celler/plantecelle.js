/* =====================================================================
   Celler og virus – PRØVE 02: PLANTECELLEN
   ===================================================================== */
NatLab.topic('celler').organisms.plantecelle = {
  code: '02',
  title: { nb: 'Plantecellen', en: 'The plant cell' },
  sub: { nb: 'Lager mat av sollys – og holder planten oppreist.', en: 'Makes food from sunlight – and keeps the plant upright.' },
  size: { nb: 'ca. 10–100 µm', en: 'about 10–100 µm' },
  lead: {
    nb: 'Plantecellen har mye til felles med dyrecellen, men den har tre ting dyrecellen mangler: cellevegg, kloroplaster og en stor vakuole.',
    en: 'The plant cell has a lot in common with the animal cell, but it has three things the animal cell lacks: a cell wall, chloroplasts and a large vacuole.'
  },
  diagrams: ['plantecelle'],
  compareWith: 'dyrecelle',
  compareLabel: NatLab.ui.compareModeAnimal,
  modelNames: { plantecelle: { nb: 'Plantecelle', en: 'Plant cell' }, dyrecelle: { nb: 'Dyrecelle', en: 'Animal cell' } },
  intro: { nb: 'Legg merke til at kloroplastene og cellekjernen ligger helt ute ved kanten. Den store vakuolen i midten tar nesten all plassen.', en: 'Notice that the chloroplasts and the nucleus lie right at the edge. The large vacuole in the middle takes up almost all the space.' },

  page: {
    goals: [
      { nb: 'nevne de tre delene som planteceller har, men dyreceller mangler', en: 'name the three parts that plant cells have but animal cells lack' },
      { nb: 'forklare hva som skjer i fotosyntesen, og hvor i cellen det skjer', en: 'explain what happens in photosynthesis and where in the cell it happens' },
      { nb: 'forklare hvordan fotosyntese og celleånding henger sammen i karbonkretsløpet', en: 'explain how photosynthesis and cellular respiration are linked in the carbon cycle' }
    ],
    keypoints: [
      { nb: 'Planteceller har **cellevegg, kloroplaster og en stor vakuole** i tillegg til det dyreceller har.', en: 'Plant cells have a **cell wall, chloroplasts and a large vacuole** in addition to what animal cells have.' },
      { nb: '**Kloroplastene** lager sukker og oksygen fra lys, vann og CO₂. Dette kalles **fotosyntese**.', en: 'The **chloroplasts** make sugar and oxygen from light, water and CO₂. This is called **photosynthesis**.' },
      { nb: 'Planteceller har **også mitokondrier** og driver celleånding, akkurat som dyreceller.', en: 'Plant cells **also have mitochondria** and carry out cellular respiration, just like animal cells.' },
      { nb: '**Celleveggen** og den fulle **vakuolen** gjør cellen stiv, slik at planten står oppreist.', en: 'The **cell wall** and the full **vacuole** make the cell firm, so that the plant stands upright.' }
    ],
    sections: [
      {
        id: 'hva', title: { nb: 'Hva er en plantecelle?', en: 'What is a plant cell?' },
        blocks: [
          { p: { nb: 'Planteceller er, som dyreceller, **eukaryote**: de har en cellekjerne med arvestoff og mange organeller. Cellemembranen, cytoplasmaet, mitokondriene og ribosomene gjør den samme jobben som i dyrecellen.', en: 'Plant cells, like animal cells, are **eukaryotic**: they have a nucleus with genetic material and many organelles. The cell membrane, cytoplasm, mitochondria and ribosomes do the same job as in the animal cell.' }, src: ['snl-eukaryoter'] },
          { p: { nb: 'Forskjellen er at plantecellen har en stiv **cellevegg** av cellulose utenfor cellemembranen, **kloroplaster** som fanger lys, og en stor **vakuole** med cellesaft.', en: 'The difference is that the plant cell has a stiff **cell wall** of cellulose outside the cell membrane, **chloroplasts** that capture light, and a large **vacuole** filled with cell sap.' }, src: ['snl-cellevegg', 'snl-kloroplaster', 'snl-vakuole'] },
          { photos: [
            { photo: 'onion', caption: { nb: 'Celler fra løkhinne. Du ser tydelig celleveggene. Løk vokser under jorda og har ingen kloroplaster.', en: 'Cells from onion skin. You can clearly see the cell walls. Onions grow underground and have no chloroplasts.' } },
            { photo: 'elodea', caption: { nb: 'Celler fra et blad av vasspest. De grønne kornene er kloroplaster.', en: 'Cells from a waterweed leaf. The green grains are chloroplasts.' } }
          ] },
          { myth: { nb: '«Alle planteceller har kloroplaster.»', en: '“All plant cells have chloroplasts.”' }, truth: { nb: 'Bare celler som får lys, har kloroplaster. Celler i røtter og i løk under jorda har ikke grønne kloroplaster.', en: 'Only cells that get light have chloroplasts. Cells in roots and in onions underground do not have green chloroplasts.' }, src: ['snl-kloroplaster'] }
        ]
      },
      {
        id: 'fotosyntese', title: { nb: 'Kloroplastene og fotosyntesen', en: 'Chloroplasts and photosynthesis' },
        blocks: [
          { p: { nb: 'Kloroplastene inneholder det grønne fargestoffet **[[klorofyll]]**, som fanger opp energi fra sollyset. Energien brukes til å lage sukker (glukose) av karbondioksid fra lufta og vann fra røttene. Som et «avfallsstoff» lages oksygen.', en: 'The chloroplasts contain the green pigment **[[klorofyll|chlorophyll]]**, which captures energy from sunlight. The energy is used to make sugar (glucose) from carbon dioxide in the air and water from the roots. Oxygen is made as a “waste product”.' }, src: ['snl-fotosyntese', 'snl-kloroplaster'] },
          { equation: {
            name: { nb: 'Fotosyntese', en: 'Photosynthesis' },
            words: { nb: 'karbondioksid + vann + lysenergi → glukose + oksygen', en: 'carbon dioxide + water + light energy → glucose + oxygen' },
            formula: '6 CO₂ + 6 H₂O + lysenergi → C₆H₁₂O₆ + 6 O₂'
          } },
          { p: { nb: 'Sukkeret bruker planten til å vokse og som energikilde. Nesten all maten på jorda – og nesten alt oksygenet vi puster inn – kommer fra fotosyntesen.', en: 'The plant uses the sugar to grow and as a source of energy. Almost all the food on Earth – and almost all the oxygen we breathe – comes from photosynthesis.' }, src: ['snl-fotosyntese'] },
          { myth: { nb: '«Planter har kloroplaster i stedet for mitokondrier.»', en: '“Plants have chloroplasts instead of mitochondria.”' }, truth: { nb: 'Planteceller har **begge deler**. Kloroplastene lager sukker, og mitokondriene bryter sukkeret ned igjen for å frigjøre energi – døgnet rundt, også om natta.', en: 'Plant cells have **both**. The chloroplasts make sugar, and the mitochondria break the sugar down again to release energy – day and night.' }, src: ['snl-celleanding'] },
          { check: {
            q: { nb: 'Hvilke stoffer trenger en plante til fotosyntesen?', en: 'Which substances does a plant need for photosynthesis?' },
            options: [{ nb: 'Oksygen og glukose', en: 'Oxygen and glucose' }, { nb: 'Karbondioksid og vann', en: 'Carbon dioxide and water' }, { nb: 'Nitrogen og oksygen', en: 'Nitrogen and oxygen' }],
            answer: 1,
            explain: { nb: 'Fotosyntesen bruker karbondioksid og vann, og lysenergi. Glukose og oksygen er det som blir laget.', en: 'Photosynthesis uses carbon dioxide and water, plus light energy. Glucose and oxygen are what is made.' }
          } },
          { deeper: {
            title: { nb: 'Fotosyntese og celleånding – to sider av samme sak', en: 'Photosynthesis and respiration – two sides of the same coin' },
            blocks: [
              { p: { nb: 'Sammenlign likningene: Celleånding er fotosyntesen «baklengs». Fotosyntesen binder karbon fra CO₂ i sukker, og celleåndingen slipper karbonet ut igjen som CO₂. Sammen driver de **karbonkretsløpet**, og energien som til slutt holder deg i live, kom en gang fra sola.', en: 'Compare the equations: cellular respiration is photosynthesis “backwards”. Photosynthesis locks carbon from CO₂ into sugar, and respiration releases the carbon again as CO₂. Together they drive the **carbon cycle**, and the energy that keeps you alive originally came from the sun.' }, src: ['snl-karbonkretslopet', 'snl-celleanding'] },
              { fact: { nb: 'Kloroplastene har sitt eget DNA, akkurat som mitokondriene. Forskerne mener begge stammer fra bakterier som for lenge siden flyttet inn i en annen celle.', en: 'Chloroplasts have their own DNA, just like mitochondria. Scientists think both come from bacteria that moved into another cell long ago.' }, src: ['snl-kloroplaster', 'sml-mitokondrie'] }
            ]
          } }
        ]
      },
      {
        id: 'vegg', title: { nb: 'Cellevegg og vakuole holder planten oppe', en: 'Cell wall and vacuole hold the plant up' },
        blocks: [
          { p: { nb: 'Planter har ikke skjelett. I stedet får de støtte fra cellene. **Vakuolen** fylles med vann og presser cellemembranen ut mot den stive **celleveggen**, omtrent som luft i en ballong inni en pappeske. Da blir cellen stiv.', en: 'Plants have no skeleton. Instead they get support from their cells. The **vacuole** fills with water and pushes the cell membrane out against the stiff **cell wall**, a bit like air in a balloon inside a cardboard box. That makes the cell firm.' }, src: ['snl-vakuole', 'snl-cellevegg'] },
          { fact: { nb: 'Vakuolen kan fylle opptil 95 % av plantecellen. Når en potteplante ikke får vann, mister vakuolene vann, cellene blir slappe og planten henger med bladene.', en: 'The vacuole can fill up to 95 % of the plant cell. When a pot plant gets no water, the vacuoles lose water, the cells go limp and the plant’s leaves droop.' }, src: ['snl-vakuole'] },
          { p: { nb: 'Celleveggen er laget av **[[cellulose]]**, et seigt stoff av lange kjeder med sukker. Den slipper vann og små stoffer gjennom, men stopper cellen fra å sprekke når den tar opp mye vann.', en: 'The cell wall is made of **[[cellulose]]**, a tough substance made of long chains of sugar. It lets water and small substances through, but stops the cell from bursting when it takes up a lot of water.' }, src: ['snl-cellevegg'] },
          { discuss: { nb: 'Tre, papir og bomull kommer fra plantenes cellevegger. Hvilke andre ting i hverdagen din tror du kommer fra planteceller?', en: 'Wood, paper and cotton come from plant cell walls. What other everyday things do you think come from plant cells?' } },
          { model: { nb: 'Ekte planteceller er ofte avlange eller kantete, og de sitter tett i tett med naboceller. Modellen viser bare én celle, og den har færre kloroplaster enn en ekte bladcelle, som kan ha 20–40.', en: 'Real plant cells are often elongated or angular, and they sit tightly packed with neighbouring cells. The model shows only one cell, and it has fewer chloroplasts than a real leaf cell, which can have 20–40.' }, src: ['snl-kloroplaster'] }
        ]
      },
      {
        id: 'viktig', title: { nb: 'Hvorfor er plantecellene viktige?', en: 'Why are plant cells important?' },
        blocks: [
          { list: [
            { nb: '**Mat:** Plantene er starten på nesten alle næringskjeder.', en: '**Food:** Plants are the start of almost all food chains.' },
            { nb: '**Oksygen:** Fotosyntesen gir oksygenet vi puster inn.', en: '**Oxygen:** Photosynthesis provides the oxygen we breathe.' },
            { nb: '**Klima:** Plantene tar opp CO₂ fra lufta og lagrer karbonet, blant annet i skog og myr.', en: '**Climate:** Plants take up CO₂ from the air and store the carbon, for example in forests and bogs.' },
            { nb: '**Materialer:** Tre, papir og bomull er laget av cellulose fra cellevegger.', en: '**Materials:** Wood, paper and cotton are made of cellulose from cell walls.' }
          ], src: ['snl-fotosyntese', 'snl-karbonkretslopet'] },
          { explain: { nb: 'Forklar med egne ord hvorfor vi kan si at energien i en brødskive egentlig kommer fra sola.', en: 'Explain in your own words why we can say that the energy in a slice of bread really comes from the sun.' } }
        ]
      }
    ],
    resources: ['ndla-fotosyntese', 'ndla-utforsk-planteceller', 'yt-plante-dyr', 'yt-organeller', 'ndla-cella']
  }
};
