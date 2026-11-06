/* =====================================================================
   Celler og virus – PRØVE 01: DYRECELLEN
   Byggeklosser i artikkelen: se README.md («Slik skriver du en artikkel»).
   ===================================================================== */
NatLab.topic('celler').organisms.dyrecelle = {
  code: '01',
  title: { nb: 'Dyrecellen', en: 'The animal cell' },
  sub: { nb: 'Byggesteinen i alle dyr – også i deg.', en: 'The building block of all animals – including you.' },
  size: { nb: 'ca. 10–30 µm', en: 'about 10–30 µm' },
  lead: {
    nb: 'Kroppen din er bygd av mange tusen milliarder celler. Hver av dem er en liten fabrikk med egne «avdelinger» som samarbeider.',
    en: 'Your body is made of many thousands of billions of cells. Each one is a tiny factory with its own “departments” that work together.'
  },
  diagrams: ['dyrecelle'],
  compareWith: 'plantecelle',
  compareLabel: NatLab.ui.compareMode,
  modelNames: { dyrecelle: { nb: 'Dyrecelle', en: 'Animal cell' }, plantecelle: { nb: 'Plantecelle', en: 'Plant cell' } },
  intro: { nb: 'Dette er en **modell**. Ekte dyreceller har mange ulike former, og delene er ikke så fargerike. Fargene hjelper deg å kjenne igjen delene.', en: 'This is a **model**. Real animal cells come in many shapes, and the parts are not this colourful. The colours help you recognise the parts.' },

  page: {
    goals: [
      { nb: 'fortelle hva en dyrecelle består av, og hva de viktigste delene gjør', en: 'describe what an animal cell is made of and what the most important parts do' },
      { nb: 'forklare hvorfor dyreceller trenger mitokondrier og oksygen', en: 'explain why animal cells need mitochondria and oxygen' },
      { nb: 'gi eksempler på hvordan formen på en celle henger sammen med jobben den gjør', en: 'give examples of how the shape of a cell is linked to the job it does' }
    ],
    keypoints: [
      { nb: 'Alle dyr, også mennesker, er bygd opp av **celler**.', en: 'All animals, including humans, are made of **cells**.' },
      { nb: 'Dyreceller har **cellemembran, cytoplasma og cellekjerne** – men ingen cellevegg.', en: 'Animal cells have a **cell membrane, cytoplasm and a nucleus** – but no cell wall.' },
      { nb: '**Cellekjernen** inneholder arvestoffet (DNA) og styrer cellen.', en: 'The **nucleus** contains the genetic material (DNA) and controls the cell.' },
      { nb: '**Mitokondriene** frigjør energi fra næring ved hjelp av oksygen (celleånding).', en: '**Mitochondria** release energy from food using oxygen (cellular respiration).' },
      { nb: 'Dyreceller er **eukaryote** celler: de har en ekte cellekjerne.', en: 'Animal cells are **eukaryotic** cells: they have a true nucleus.' }
    ],
    sections: [
      {
        id: 'hva', title: { nb: 'Hva er en dyrecelle?', en: 'What is an animal cell?' },
        blocks: [
          { p: { nb: 'En [[celle]] er den minste delen av en organisme som kan leve for seg selv. Den kan ta opp næring, kvitte seg med avfall, vokse og dele seg. Alle dyr – fra maneter til mennesker – er bygd opp av celler.', en: 'A [[celle|cell]] is the smallest part of an organism that can live on its own. It can take in nutrients, get rid of waste, grow and divide. All animals – from jellyfish to humans – are made of cells.' }, src: ['snl-celle'] },
          { p: { nb: 'Dyreceller er [[eukaryot|eukaryote]] celler. Det betyr at arvestoffet ligger inne i en egen **cellekjerne**, og at cellen har mange små rom med hinne rundt, som vi kaller [[organell|organeller]].', en: 'Animal cells are [[eukaryot|eukaryotic]] cells. This means that the genetic material is inside a separate **nucleus**, and that the cell has many small compartments surrounded by membranes, which we call [[organell|organelles]].' }, src: ['snl-eukaryoter'] },
          { photo: 'cheek', caption: { nb: 'Celler fra innsiden av kinnet, farget med metylenblått. Den mørke flekken i hver celle er cellekjernen. Du kan lage et slikt preparat selv i naturfagtimen.', en: 'Cells from the inside of the cheek, stained with methylene blue. The dark spot in each cell is the nucleus. You can make a slide like this yourself in science class.' } },
          { fact: { nb: 'Kroppen din består av rundt 30 000 milliarder celler, og det finnes over 200 ulike typer celler i menneskekroppen.', en: 'Your body is made of about 30 trillion cells, and there are more than 200 different types of cells in the human body.' } },
          { check: {
            q: { nb: 'Hva betyr det at en celle er eukaryot?', en: 'What does it mean that a cell is eukaryotic?' },
            options: [{ nb: 'At den har en cellevegg', en: 'That it has a cell wall' }, { nb: 'At den har en ekte cellekjerne', en: 'That it has a true nucleus' }, { nb: 'At den kan drive fotosyntese', en: 'That it can carry out photosynthesis' }],
            answer: 1,
            explain: { nb: 'Eukaryote celler har arvestoffet inne i en cellekjerne. Både dyreceller og planteceller er eukaryote. Bakterier er ikke det.', en: 'Eukaryotic cells keep their genetic material inside a nucleus. Both animal cells and plant cells are eukaryotic. Bacteria are not.' }
          } }
        ]
      },
      {
        id: 'spesiell', title: { nb: 'Hva gjør dyrecellen spesiell?', en: 'What makes the animal cell special?' },
        blocks: [
          { p: { nb: 'Dyreceller har **ingen cellevegg**, bare en myk cellemembran. Derfor kan de ha mange ulike former, og noen kan bevege seg og forandre form. Hvite blodceller kan for eksempel krype rundt i kroppen og «spise» bakterier.', en: 'Animal cells have **no cell wall**, only a soft cell membrane. That is why they can have many different shapes, and some can move and change shape. White blood cells, for example, can crawl around the body and “eat” bacteria.' }, src: ['sml-cellemembraner'] },
          { p: { nb: 'Dyreceller har heller **ingen kloroplaster**. De kan ikke lage sin egen næring fra sollys, slik planter kan. Dyr må spise for å få næring, og cellene bruker næringen i **mitokondriene**.', en: 'Animal cells also have **no chloroplasts**. They cannot make their own food from sunlight, as plants can. Animals have to eat to get nutrients, and the cells use the nutrients in the **mitochondria**.' }, src: ['sml-mitokondrie'] },
          { table: {
            head: [{ nb: 'Celletype', en: 'Cell type' }, { nb: 'Form', en: 'Shape' }, { nb: 'Hvorfor?', en: 'Why?' }],
            rows: [
              [{ nb: 'Nervecelle', en: 'Nerve cell' }, { nb: 'Lange utløpere, kan være over én meter', en: 'Long extensions, can be over one metre' }, { nb: 'Sender signaler langt av gårde, for eksempel fra ryggen til tærne', en: 'Sends signals a long way, for example from the back to the toes' }],
              [{ nb: 'Muskelcelle', en: 'Muscle cell' }, { nb: 'Lang og tynn, full av mitokondrier', en: 'Long and thin, full of mitochondria' }, { nb: 'Trekker seg sammen og trenger mye energi', en: 'Contracts and needs a lot of energy' }],
              [{ nb: 'Rødt blodlegeme', en: 'Red blood cell' }, { nb: 'Flat og bøyelig, uten cellekjerne', en: 'Flat and flexible, without a nucleus' }, { nb: 'Har plass til mye stoff som frakter oksygen, og klemmer seg gjennom tynne blodårer', en: 'Has room for lots of the substance that carries oxygen, and squeezes through narrow blood vessels' }],
              [{ nb: 'Sædcelle', en: 'Sperm cell' }, { nb: 'Har en svømmehale', en: 'Has a swimming tail' }, { nb: 'Må svømme fram til eggcellen', en: 'Has to swim to the egg cell' }]
            ]
          } },
          { explain: { nb: 'Velg én av celletypene i tabellen. Forklar hvordan formen hjelper cellen med jobben sin.', en: 'Choose one of the cell types in the table. Explain how its shape helps the cell do its job.' } },
          { myth: { nb: '«Alle cellene i kroppen er like.»', en: '“All the cells in the body are the same.”' }, truth: { nb: 'Nesten alle cellene dine har det samme arvestoffet, men de bruker ulike deler av det. Derfor blir de spesialisert til ulike jobber og får ulik form.', en: 'Almost all your cells have the same genetic material, but they use different parts of it. That is why they become specialised for different jobs and get different shapes.' }, src: ['sml-cellekjerne'] }
        ]
      },
      {
        id: 'samarbeid', title: { nb: 'Slik samarbeider delene', en: 'How the parts work together' },
        blocks: [
          { p: { nb: 'Du kan tenke på cellen som en **fabrikk**. Hver del har sin jobb, og de er avhengige av hverandre:', en: 'You can think of the cell as a **factory**. Each part has its job, and they depend on each other:' } },
          { list: [
            { nb: '**Cellekjernen** er kontoret med alle oppskriftene (DNA).', en: 'The **nucleus** is the office with all the recipes (DNA).' },
            { nb: '**Ribosomene** er arbeiderne som lager proteiner etter oppskriftene.', en: 'The **ribosomes** are the workers that make proteins from the recipes.' },
            { nb: '**Mitokondriene** er kraftverket som gir energi til alt arbeidet.', en: 'The **mitochondria** are the power station that provides energy for all the work.' },
            { nb: '**Cellemembranen** er porten som slipper varer inn og ut.', en: 'The **cell membrane** is the gate that lets goods in and out.' },
            { nb: '**Cytoplasmaet** er fabrikkgulvet der det hele foregår.', en: 'The **cytoplasm** is the factory floor where it all happens.' }
          ], src: ['snl-cellens-oppbygning', 'sml-ribosom'] },
          { deeper: {
            title: { nb: 'Fra oppskrift til ferdig protein', en: 'From recipe to finished protein' },
            blocks: [
              { p: { nb: 'Når cellen skal lage et protein som skal ut av cellen, for eksempel et fordøyelsesenzym, skjer dette:', en: 'When the cell is going to make a protein that will leave the cell, such as a digestive enzyme, this happens:' } },
              { list: [
                { nb: '1. I cellekjernen lages en kopi av oppskriften (et gen) i DNA-et.', en: '1. In the nucleus, a copy is made of the recipe (a gene) in the DNA.' },
                { nb: '2. Kopien går ut til **ribosomene på ru ER**, som setter sammen proteinet.', en: '2. The copy goes out to the **ribosomes on the rough ER**, which put the protein together.' },
                { nb: '3. ER sender proteinet videre til **golgiapparatet**, som endrer, sorterer og pakker det.', en: '3. The ER sends the protein on to the **Golgi apparatus**, which changes, sorts and packs it.' },
                { nb: '4. Proteinet fraktes i en **vesikkel** til cellemembranen og slippes ut av cellen.', en: '4. The protein is carried in a **vesicle** to the cell membrane and released out of the cell.' }
              ], src: ['snl-er', 'snl-golgi'] },
              { p: { nb: '**Lysosomene** tar seg av avfallet. De bryter ned utslitte celledeler, slik at byggesteinene kan brukes på nytt.', en: 'The **lysosomes** deal with the waste. They break down worn-out cell parts so that the building blocks can be reused.' }, src: ['snl-lysosom'] }
            ]
          } },
          { check: {
            q: { nb: 'Hvilken del av cellen lager proteiner?', en: 'Which part of the cell makes proteins?' },
            options: [{ nb: 'Mitokondriene', en: 'The mitochondria' }, { nb: 'Ribosomene', en: 'The ribosomes' }, { nb: 'Cellemembranen', en: 'The cell membrane' }],
            answer: 1,
            explain: { nb: 'Ribosomene leser en kopi av oppskriften fra DNA-et og setter sammen proteinet. Mitokondriene frigjør energi.', en: 'The ribosomes read a copy of the recipe from the DNA and put the protein together. The mitochondria release energy.' }
          } }
        ]
      },
      {
        id: 'energi', title: { nb: 'Energi: celleånding', en: 'Energy: cellular respiration' },
        blocks: [
          { p: { nb: 'Alle celler trenger energi. I dyreceller frigjøres energien i mitokondriene gjennom **[[celleanding|celleånding]]**: Sukker (glukose) fra maten reagerer med oksygen fra lufta du puster inn.', en: 'All cells need energy. In animal cells the energy is released in the mitochondria through **[[celleanding|cellular respiration]]**: sugar (glucose) from food reacts with oxygen from the air you breathe in.' }, src: ['snl-celleanding'] },
          { equation: {
            name: { nb: 'Celleånding', en: 'Cellular respiration' },
            words: { nb: 'glukose + oksygen → karbondioksid + vann + energi', en: 'glucose + oxygen → carbon dioxide + water + energy' },
            formula: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energi'
          } },
          { p: { nb: 'Karbondioksidet fraktes med blodet til lungene, og du puster det ut. Slik er cellene dine en del av **[[karbonkretslop|karbonkretsløpet]]**: Plantene tar opp CO₂ og lager sukker, og vi bryter sukkeret ned igjen til CO₂.', en: 'The carbon dioxide is carried by the blood to the lungs, and you breathe it out. In this way your cells are part of the **[[karbonkretslop|carbon cycle]]**: plants take up CO₂ and make sugar, and we break the sugar back down into CO₂.' }, src: ['snl-karbonkretslopet'] },
          { fact: { nb: 'Muskelceller og nerveceller bruker mye energi og har derfor ekstra mange mitokondrier.', en: 'Muscle cells and nerve cells use a lot of energy and therefore have extra many mitochondria.' }, src: ['sml-mitokondrie'] },
          { discuss: { nb: 'Når du løper fort, puster du raskere. Hvordan kan det henge sammen med mitokondriene i muskelcellene dine?', en: 'When you run fast, you breathe faster. How might this be linked to the mitochondria in your muscle cells?' } }
        ]
      },
      {
        id: 'historie', title: { nb: 'Hvordan fant vi ut av det?', en: 'How did we find out?' },
        blocks: [
          { history: { nb: 'I **1665** så engelskmannen **Robert Hooke** på en tynn skive kork i et mikroskop han hadde laget selv. Han så mange små rom og kalte dem «celler», etter det latinske ordet for et lite rom. Det han så, var egentlig celleveggene fra døde planteceller.', en: 'In **1665** the Englishman **Robert Hooke** looked at a thin slice of cork in a microscope he had built himself. He saw many small compartments and called them “cells”, after the Latin word for a small room. What he actually saw were the cell walls of dead plant cells.' }, src: ['snl-hooke'] },
          { p: { nb: 'Senere har bedre mikroskoper vist mer og mer. I et vanlig lysmikroskop kan vi se cellekjernen. For å se ribosomer og detaljer inne i mitokondriene trenger vi et **elektronmikroskop**, som kan forstørre mange tusen ganger mer.', en: 'Later, better microscopes have shown more and more. With an ordinary light microscope we can see the nucleus. To see ribosomes and details inside the mitochondria we need an **electron microscope**, which can magnify many thousands of times more.' }, src: ['snl-mikroskop'] },
          { model: { nb: 'Tegningen viser en «typisk» dyrecelle. Ekte celler er tredimensjonale, de har mange flere mitokondrier og ribosomer, og delene er ikke tegnet i riktig størrelse i forhold til hverandre – ribosomene er egentlig altfor små til å synes i denne målestokken.', en: 'The drawing shows a “typical” animal cell. Real cells are three-dimensional, they have many more mitochondria and ribosomes, and the parts are not drawn to the correct size compared with each other – the ribosomes are actually far too small to see at this scale.' } }
        ]
      }
    ],
    resources: ['yt-dyrecelle-no', 'ndla-cella', 'ndla-utforsk-egne-celler', 'yt-organeller', 'yt-cellestruktur', 'yt-plante-dyr']
  }
};
