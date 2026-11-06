/* =====================================================================
   Økologi – DEL 04: ENERGI I ØKOSYSTEMET
   ===================================================================== */
NatLab.topic('okologi').organisms.energi = {
  code: '04',
  title: { nb: 'Energi i økosystemet', en: 'Energy in the ecosystem' },
  sub: { nb: 'Fra sola, gjennom næringskjeden – og ut som varme.', en: 'From the sun, through the food chain – and out as heat.' },
  lead: {
    nb: 'Energi er det som får noe til å skje. Nesten all energien i et økosystem kommer fra sola. Den forsvinner aldri – men den skifter form, og til slutt blir den varme.',
    en: 'Energy is what makes something happen. Almost all the energy in an ecosystem comes from the sun. It never disappears – but it changes form, and in the end it becomes heat.'
  },
  art: 'eco-pyramide',
  practiceHref: '#okologi-ov-par-energi',
  extraTabs: [{ href: '#okologi-naeringsnett-pyramide', icon: 'layers', label: { nb: 'Energipyramiden', en: 'Energy pyramid' } }],

  page: {
    goals: [
      { nb: 'forklare hva energi er, og hvor energien i et økosystem kommer fra', en: 'explain what energy is and where the energy in an ecosystem comes from' },
      { nb: 'forklare at energi ikke kan oppstå eller forsvinne, men går over til andre former', en: 'explain that energy cannot be created or destroyed, but changes into other forms' },
      { nb: 'bruke 10 %-regelen til å regne ut hvor mye energi som når de ulike trofiske nivåene', en: 'use the 10 % rule to calculate how much energy reaches the different trophic levels' },
      { nb: 'forklare forskjellen på hvordan energi og materie beveger seg i et økosystem', en: 'explain the difference between how energy and matter move in an ecosystem' }
    ],
    keypoints: [
      { nb: '**Energi er det som får noe til å skje.**', en: '**Energy is what makes something happen.**' },
      { nb: 'Nesten all energi i økosystemer kommer fra **sola** og fanges av produsentene i **fotosyntesen**.', en: 'Almost all energy in ecosystems comes from **the sun** and is captured by producers in **photosynthesis**.' },
      { nb: 'Energi kan **ikke oppstå eller forsvinne** – den går bare over til andre former.', en: 'Energy **cannot be created or destroyed** – it only changes into other forms.' },
      { nb: 'Bare rundt **10 %** av energien går videre til neste trofiske nivå. Resten blir til slutt **varme**.', en: 'Only about **10 %** of the energy passes on to the next trophic level. The rest ends up as **heat**.' },
      { nb: '**Energien strømmer gjennom** økosystemet, mens **materien går i kretsløp**.', en: '**Energy flows through** the ecosystem, while **matter goes round in cycles**.' }
    ],
    sections: [
      {
        id: 'hva', title: { nb: 'Hva er energi?', en: 'What is energy?' },
        blocks: [
          { p: { nb: '**[[energi|Energi]] er det som får noe til å skje.** Når en hare løper, en plante vokser eller et spekkhoggerhjerte slår, trengs det energi.', en: '**[[energi|Energy]] is what makes something happen.** When a hare runs, a plant grows or an orca’s heart beats, energy is needed.' }, src: ['snl-energi'] },
          { p: { nb: 'Energi finnes i mange former. I et økosystem er disse viktigst:', en: 'Energy comes in many forms. In an ecosystem, these are the most important:' } },
          { list: [
            { nb: '**Strålingsenergi** – lyset fra sola', en: '**Radiant energy** – light from the sun' },
            { nb: '**Kjemisk energi** – energien som er lagret i sukker, fett og andre stoffer i maten', en: '**Chemical energy** – the energy stored in sugar, fat and other substances in food' },
            { nb: '**Bevegelsesenergi** – når dyr løper, flyr og svømmer', en: '**Kinetic energy** – when animals run, fly and swim' },
            { nb: '**Varme (termisk energi)** – som alle levende organismer gir fra seg', en: '**Heat (thermal energy)** – which all living organisms give off' }
          ], src: ['snl-energi'] },
          { fact: { nb: 'Det finnes flere energiformer også, for eksempel elektrisk energi og kjerneenergi. Dem lærer du mer om i kapitlene om fysikk og energi senere.', en: 'There are more forms of energy too, such as electrical energy and nuclear energy. You will learn more about them in the physics and energy chapters later.' }, src: ['snl-energi'] }
        ]
      },
      {
        id: 'sola', title: { nb: 'Energien kommer fra sola', en: 'The energy comes from the sun' },
        blocks: [
          { p: { nb: 'Produsentene – trær, lyng, planteplankton og tare – fanger strålingsenergi fra sola og lagrer den som **kjemisk energi** i sukker. Det skjer i [[fotosyntese|fotosyntesen]], i kloroplastene i cellene.', en: 'The producers – trees, heather, phytoplankton and kelp – capture radiant energy from the sun and store it as **chemical energy** in sugar. This happens in [[fotosyntese|photosynthesis]], in the chloroplasts in their cells.' }, src: ['snl-produsent', 'snl-energi'] },
          { equation: { name: { nb: 'Fotosyntese', en: 'Photosynthesis' }, words: { nb: 'karbondioksid + vann + lysenergi → glukose + oksygen', en: 'carbon dioxide + water + light energy → glucose + oxygen' }, formula: '6 CO₂ + 6 H₂O + lysenergi → C₆H₁₂O₆ + 6 O₂' } },
          { p: { nb: 'Når en hare spiser blader, får den den kjemiske energien i bladene. I cellene frigjøres energien i [[celleanding|celleåndingen]], og haren kan vokse, holde seg varm og løpe.', en: 'When a hare eats leaves, it gets the chemical energy in the leaves. In its cells the energy is released in [[celleanding|cellular respiration]], and the hare can grow, keep warm and run.' }, src: ['snl-energi'] },
          { link: { href: '#celler-plantecelle-les', icon: 'book', title: { nb: 'Repeter: fotosyntesen i plantecellen', en: 'Recap: photosynthesis in the plant cell' }, text: { nb: 'Fra temaet Celler og virus.', en: 'From the topic Cells and viruses.' } } }
        ]
      },
      {
        id: 'bevaring', title: { nb: 'Energi kan ikke forsvinne', en: 'Energy cannot disappear' },
        blocks: [
          { p: { nb: 'En av de viktigste lovene i naturfag er **[[energibevaring|energibevaring]]**: Energi kan ikke oppstå eller forsvinne, men kan gå over til andre former.', en: 'One of the most important laws in science is **[[energibevaring|conservation of energy]]**: energy cannot be created or destroyed, but can change into other forms.' }, src: ['snl-energi', 'snl-termodynamikk'] },
          { p: { nb: 'Følg energien gjennom en næringskjede i skogen:', en: 'Follow the energy through a food chain in the forest:' } },
          { list: [
            { nb: 'Strålingsenergi fra sola →', en: 'Radiant energy from the sun →' },
            { nb: 'kjemisk energi i blåbærlyngen →', en: 'chemical energy in the bilberry →' },
            { nb: 'kjemisk energi i larven som spiser bladene →', en: 'chemical energy in the caterpillar eating the leaves →' },
            { nb: 'bevegelsesenergi og varme i kjøttmeisa som spiser larven →', en: 'kinetic energy and heat in the great tit eating the caterpillar →' },
            { nb: 'til slutt varme som sprer seg ut i omgivelsene.', en: 'finally heat spreading out into the surroundings.' }
          ] },
          { myth: { nb: '«Energien blir brukt opp og forsvinner.»', en: '“The energy gets used up and disappears.”' }, truth: { nb: 'Energien forsvinner aldri. Når vi sier at energien er «brukt opp», betyr det at den har blitt til varme som har spredt seg, og som organismene ikke kan bruke igjen.', en: 'Energy never disappears. When we say energy is “used up”, we mean it has become heat that has spread out, and which organisms cannot use again.' }, src: ['snl-energi'] }
        ]
      },
      {
        id: 'ti-prosent', title: { nb: '10 %-regelen og energipyramiden', en: 'The 10 % rule and the energy pyramid' },
        blocks: [
          { p: { nb: 'Når et dyr spiser, får det ikke med seg all energien i maten. Grovt sett går omtrent **90 % av energien «tapt»** for hvert trinn i næringskjeden – bare rundt **10 %** går videre til neste trofiske nivå.', en: 'When an animal eats, it does not get all the energy in the food. Roughly speaking, about **90 % of the energy is “lost”** at each step in the food chain – only about **10 %** passes on to the next trophic level.' }, src: ['snl-naeringspyramide'] },
          { p: { nb: 'Hvor blir det av de 90 prosentene? De forsvinner ikke (husk energibevaring!), men:', en: 'Where do the 90 per cent go? They don’t disappear (remember conservation of energy!), but:' } },
          { list: [
            { nb: 'mye blir **varme** fra celleåndingen – dyret holder seg varmt og beveger seg', en: 'much becomes **heat** from cellular respiration – the animal keeps warm and moves' },
            { nb: 'ikke alt blir spist – røtter, bein og pels blir igjen', en: 'not everything is eaten – roots, bones and fur are left' },
            { nb: 'noe går ut som avføring og blir mat for **nedbryterne**', en: 'some leaves as droppings and becomes food for the **decomposers**' }
          ], src: ['snl-naeringspyramide'] },
          { p: { nb: 'Tegner vi energien på hvert nivå som en søyle, får vi en **[[energipyramide|energipyramide]]**: bred nederst (produsentene) og smal øverst (toppredatorene). Det er derfor det finnes mye mer gress og lyng enn harer – og mye flere harer enn gauper.', en: 'If we draw the energy at each level as a bar, we get an **[[energipyramide|energy pyramid]]**: wide at the bottom (producers) and narrow at the top (top predators). That is why there is much more grass and heather than hares – and many more hares than lynx.' }, src: ['snl-naeringspyramide'] },
          { fact: { nb: 'Fordi det blir så lite energi igjen på toppen, er det sjelden mer enn 4–5 trofiske nivåer i en næringskjede. Energitapet setter en øvre grense for hvor lange næringskjedene kan være.', en: 'Because so little energy is left at the top, there are rarely more than 4–5 trophic levels in a food chain. The energy loss sets an upper limit on how long food chains can be.' }, src: ['snl-naeringspyramide'] },
          { link: { href: '#okologi-naeringsnett-pyramide', icon: 'layers', title: { nb: 'Bygg din egen energipyramide', en: 'Build your own energy pyramid' }, text: { nb: 'Endre energien og prosenten, og se utregningen steg for steg.', en: 'Change the energy and the percentage, and see the calculation step by step.' } } }
        ]
      },
      {
        id: 'regn', title: { nb: 'Regn med energi', en: 'Calculating with energy' },
        blocks: [
          { p: { nb: '**Eksempel 1:** Blåbærlyngen i et skogområde binder 10 000 kJ energi fra sola. Hvor mye energi kan nå hønsehauken?', en: '**Example 1:** The bilberry in a forest area captures 10,000 kJ of energy from the sun. How much energy can reach the goshawk?' } },
          { equation: { name: { nb: 'Utregning med 10 %-regelen', en: 'Calculation using the 10 % rule' }, words: { nb: 'Lyng 10 000 kJ → larver 1 000 kJ → kjøttmeis 100 kJ → hønsehauk 10 kJ', en: 'Heather 10,000 kJ → caterpillars 1,000 kJ → great tit 100 kJ → goshawk 10 kJ' }, formula: '10 000 × 0,1 = 1 000   ·   1 000 × 0,1 = 100   ·   100 × 0,1 = 10' } },
          { p: { nb: '**Eksempel 2 (baklengs):** En spekkhogger skal vokse 1 kg. Omtrent hvor mye planteplankton trengs? Vi ganger med 10 for hvert trinn nedover: 1 kg spekkhogger ← 10 kg sild ← 100 kg raudåte ← **1 000 kg planteplankton**.', en: '**Example 2 (backwards):** An orca is to grow by 1 kg. Roughly how much phytoplankton is needed? We multiply by 10 for each step downwards: 1 kg orca ← 10 kg herring ← 100 kg calanus ← **1,000 kg phytoplankton**.' }, src: ['snl-naeringspyramide'] },
          { check: {
            q: { nb: 'Planteplanktonet i et område binder 50 000 kJ. Omtrent hvor mye energi når silda, som er på trofisk nivå 3?', en: 'The phytoplankton in an area captures 50,000 kJ. About how much energy reaches the herring, at trophic level 3?' },
            options: [{ nb: '5 000 kJ', en: '5,000 kJ' }, { nb: '500 kJ', en: '500 kJ' }, { nb: '50 kJ', en: '50 kJ' }],
            answer: 1,
            explain: { nb: '50 000 × 0,1 = 5 000 kJ til raudåta (nivå 2). 5 000 × 0,1 = 500 kJ til silda (nivå 3).', en: '50,000 × 0.1 = 5,000 kJ to the calanus (level 2). 5,000 × 0.1 = 500 kJ to the herring (level 3).' }
          } },
          { explain: { nb: 'Forklar med egne ord hvorfor det kreves mye mer areal og planter for å produsere 1 kg kjøtt enn 1 kg grønnsaker.', en: 'Explain in your own words why it takes much more land and plants to produce 1 kg of meat than 1 kg of vegetables.' } }
        ]
      },
      {
        id: 'kvalitet', title: { nb: 'Energikvalitet', en: 'Energy quality' },
        blocks: [
          { p: { nb: '**[[energikvalitet|Energikvalitet]]** handler om hvor lett energien kan brukes til å få noe til å skje. Sollys og den kjemiske energien i mat har **høy kvalitet**. Varme som har spredt seg i omgivelsene, har **lav kvalitet** – den kan nesten ikke brukes til noe.', en: '**[[energikvalitet|Energy quality]]** is about how easily energy can be used to make something happen. Sunlight and the chemical energy in food are **high quality**. Heat that has spread into the surroundings is **low quality** – it can hardly be used for anything.' }, src: ['snl-energi'] },
          { p: { nb: 'I alle prosesser går energikvaliteten ned. Mengden energi er den samme, men den blir mindre nyttig. Derfor kan ikke energien gå i ring i et økosystem. Den må hele tiden fylles på – av sola.', en: 'In all processes the energy quality goes down. The amount of energy stays the same, but it becomes less useful. That is why energy cannot go round in a circle in an ecosystem. It has to be topped up all the time – by the sun.' }, src: ['snl-energi'] }
        ]
      },
      {
        id: 'materie', title: { nb: 'Energi strømmer – materie går i kretsløp', en: 'Energy flows – matter cycles' },
        blocks: [
          { p: { nb: 'Energien og stoffene (materien) i et økosystem oppfører seg forskjellig:', en: 'The energy and the substances (matter) in an ecosystem behave differently:' } },
          { table: {
            head: [{ nb: '', en: '' }, { nb: 'Energi', en: 'Energy' }, { nb: 'Materie (stoffer)', en: 'Matter (substances)' }],
            rows: [
              [{ nb: 'Hvordan beveger den seg?', en: 'How does it move?' }, { nb: 'Strømmer **gjennom** økosystemet, én vei', en: 'Flows **through** the ecosystem, one way' }, { nb: 'Går i **kretsløp** og brukes om og om igjen', en: 'Goes round in **cycles** and is used again and again' }],
              [{ nb: 'Kommer fra', en: 'Comes from' }, { nb: 'Sola', en: 'The sun' }, { nb: 'Jorda, lufta og vannet', en: 'The soil, air and water' }],
              [{ nb: 'Ender som', en: 'Ends up as' }, { nb: 'Varme som sprer seg', en: 'Heat that spreads out' }, { nb: 'Næringssalter, CO₂ og vann som plantene tar opp igjen', en: 'Nutrients, CO₂ and water that plants take up again' }],
              [{ nb: 'Hvem er viktige?', en: 'Who are important?' }, { nb: 'Produsentene fanger energien', en: 'The producers capture the energy' }, { nb: 'Nedbryterne gjør dødt materiale om til næring igjen', en: 'The decomposers turn dead material back into nutrients' }]
            ],
            src: ['snl-naeringskjede', 'snl-nedbrytere', 'snl-energi']
          } },
          { p: { nb: 'Et eksempel er **[[karbonkretslop|karbonkretsløpet]]**: Plantene tar opp CO₂ i fotosyntesen og bygger karbonet inn i sukker. Når planter, dyr og nedbrytere driver celleånding, slippes karbonet ut igjen som CO₂. Det samme karbonatomet kan ha vært i et grantre, en elg og en sopp!', en: 'One example is the **[[karbonkretslop|carbon cycle]]**: plants take up CO₂ in photosynthesis and build the carbon into sugar. When plants, animals and decomposers carry out cellular respiration, the carbon is released again as CO₂. The same carbon atom may have been in a spruce, a moose and a fungus!' }, src: ['snl-naeringskjede'] },
          { equation: { name: { nb: 'Celleånding – fotosyntesen «baklengs»', en: 'Cellular respiration – photosynthesis “backwards”' }, words: { nb: 'glukose + oksygen → karbondioksid + vann + energi', en: 'glucose + oxygen → carbon dioxide + water + energy' }, formula: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + energi' } },
          { link: { href: '#celler-dyrecelle-les', icon: 'book', title: { nb: 'Repeter: celleånding i mitokondriene', en: 'Recap: cellular respiration in the mitochondria' }, text: { nb: 'Fra temaet Celler og virus.', en: 'From the topic Cells and viruses.' } } },
          { discuss: { nb: 'Hva ville skjedd med et økosystem hvis sola sluttet å skinne? Og hva ville skjedd hvis alle nedbryterne forsvant? Sammenlign de to.', en: 'What would happen to an ecosystem if the sun stopped shining? And what would happen if all the decomposers disappeared? Compare the two.' } }
        ]
      }
    ],
    resources: ['snl-energi', 'snl-naeringspyramide', 'yt-naeringsnett', 'yt-kretslop', 'ndla-naeringskjeder']
  }
};
