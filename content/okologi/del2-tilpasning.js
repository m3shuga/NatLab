/* =====================================================================
   Økologi – DEL 02: TILPASNINGER OG ROLLER
   ===================================================================== */
NatLab.topic('okologi').organisms.tilpasning = {
  code: '02',
  title: { nb: 'Tilpasninger og roller', en: 'Adaptations and roles' },
  sub: { nb: 'Hvordan arter klarer seg – og hvilken jobb de har.', en: 'How species survive – and what job they have.' },
  lead: {
    nb: 'Hver art er tilpasset leveområdet sitt. Og hver art har en rolle i økosystemet: som produsent, konsument eller nedbryter.',
    en: 'Every species is adapted to its habitat. And every species has a role in the ecosystem: as a producer, consumer or decomposer.'
  },
  art: 'eco-tilpasning',
  practiceHref: '#okologi-ov-grupper-tilpasning',
  extraTabs: [{ href: '#okologi-ov-grupper-roller', icon: 'layers', label: { nb: 'Sorter rollene', en: 'Sort the roles' } }],

  page: {
    goals: [
      { nb: 'forklare hva en tilpasning er, og hvordan tilpasninger oppstår gjennom evolusjon', en: 'explain what an adaptation is and how adaptations arise through evolution' },
      { nb: 'gi eksempler på tilpasninger hos norske arter, sortert i kropp, funksjon og atferd', en: 'give examples of adaptations in Norwegian species, sorted into body, function and behaviour' },
      { nb: 'forklare rollene produsent, konsument (primær, sekundær, toppredator) og nedbryter', en: 'explain the roles producer, consumer (primary, secondary, top predator) and decomposer' }
    ],
    keypoints: [
      { nb: 'En **tilpasning** er en egenskap som gjør at en art klarer seg godt der den lever.', en: 'An **adaptation** is a trait that helps a species do well where it lives.' },
      { nb: 'Tilpasninger kan handle om **kropp og utseende**, **kroppens funksjoner** eller **atferd**.', en: 'Adaptations can be about **body and appearance**, **body functions** or **behaviour**.' },
      { nb: '**Produsenter** lager sin egen næring med energi fra sola.', en: '**Producers** make their own food with energy from the sun.' },
      { nb: '**Konsumenter** spiser andre organismer. **Toppredatorer** er øverst i næringskjeden.', en: '**Consumers** eat other organisms. **Top predators** are at the top of the food chain.' },
      { nb: '**Nedbrytere** bryter ned døde planter og dyr, slik at næringen kan brukes på nytt.', en: '**Decomposers** break down dead plants and animals so the nutrients can be used again.' }
    ],
    sections: [
      {
        id: 'tilpasning', title: { nb: 'Hva er en tilpasning?', en: 'What is an adaptation?' },
        blocks: [
          { p: { nb: 'En **[[tilpasning]]** er en egenskap som gjør at en organisme klarer seg godt i miljøet sitt – at den finner mat, unngår å bli spist, tåler været og får avkom.', en: 'An **[[tilpasning|adaptation]]** is a trait that helps an organism do well in its environment – find food, avoid being eaten, cope with the weather and have offspring.' }, src: ['snl-tilpasning'] },
          { p: { nb: 'Tilpasninger oppstår gjennom [[evolusjon]] over svært mange generasjoner. Individer med egenskaper som passer godt til miljøet, overlever oftere og får flere unger. Slik blir egenskapene vanligere i populasjonen. Dette kalles **naturlig utvalg**.', en: 'Adaptations arise through [[evolusjon|evolution]] over very many generations. Individuals with traits that suit the environment survive more often and have more offspring. That way the traits become more common in the population. This is called **natural selection**.' }, src: ['snl-tilpasning'] },
          { photo: 'ekorn', caption: { nb: 'Ekornet er aktivt hele vinteren. Om høsten gjemmer det frø og nøtter som det lever av når det er lite mat.', en: 'The squirrel is active all winter. In autumn it hides seeds and nuts that it lives on when food is scarce.' } }
        ]
      },
      {
        id: 'typer', title: { nb: 'Tre typer tilpasninger', en: 'Three types of adaptations' },
        blocks: [
          { h3: { nb: 'Kropp og utseende', en: 'Body and appearance' } },
          { adapt: [
            { icon: 'hare', type: 'struktur', title: { nb: 'Haren: hvit vinterpels', en: 'Hare: white winter coat' }, text: { nb: 'Den hvite pelsen gir kamuflasje i snøen, så rovdyr ikke ser haren så lett.', en: 'The white coat gives camouflage in the snow, so predators don’t spot the hare easily.' }, src: ['snl-hare', 'snl-kamuflasje'] },
            { icon: 'elg', type: 'struktur', title: { nb: 'Elgen: lange bein', en: 'Moose: long legs' }, text: { nb: 'Lange bein gjør det lettere å gå i dyp snø og nå høyt opp i trærne etter mat.', en: 'Long legs make it easier to walk in deep snow and reach high up in trees for food.' }, src: ['snl-elg'] },
            { icon: 'gran', type: 'struktur', title: { nb: 'Grana: smal og spiss', en: 'Spruce: narrow and pointed' }, text: { nb: 'Formen gjør at tung snø lettere glir av, så greinene ikke knekker.', en: 'The shape helps heavy snow slide off, so the branches don’t break.' } },
            { icon: 'steinkobbe', type: 'struktur', title: { nb: 'Selen: tykt spekklag', en: 'Seal: thick blubber' }, text: { nb: 'Spekket isolerer mot det kalde vannet og er et energilager.', en: 'The blubber insulates against the cold water and is an energy store.' } }
          ] },
          { photo: 'hare', caption: { nb: 'Haren på bildet har gråbrun pels. Om høsten skifter haren til hvit vinterpels, som gir kamuflasje i snøen. Bildet er tatt i Kongsvinger.', en: 'The hare in the photo has grey-brown fur. In autumn the hare changes to a white winter coat, which gives camouflage in the snow. The photo was taken in Kongsvinger.' } },
          { h3: { nb: 'Kroppens funksjoner', en: 'Body functions' } },
          { adapt: [
            { icon: 'raudate', type: 'funksjon', title: { nb: 'Raudåta: vinterhvile', en: 'Calanus: winter rest' }, text: { nb: 'Om høsten går raudåta ned på dypt vann og hviler (diapause) på lagret fett til våren.', en: 'In autumn the calanus goes down to deep water and rests (diapause) on stored fat until spring.' }, src: ['snl-raudate'] },
            { icon: 'hare', type: 'funksjon', title: { nb: 'Haren: pelsskifte', en: 'Hare: changing coat' }, text: { nb: 'Når dagene blir kortere og kaldere, skrur kroppen på pelsskiftet – i riktig tid før snøen kommer.', en: 'When the days get shorter and colder, the body switches on the change of coat – in time before the snow arrives.' }, src: ['snl-hare'] },
            { icon: 'gran', type: 'funksjon', title: { nb: 'Grana: tåler skygge', en: 'Spruce: shade-tolerant' }, text: { nb: 'Unge graner kan drive fotosyntese med bare 2 % av fullt lys, og kan vokse i skyggen under andre trær.', en: 'Young spruces can photosynthesise with only 2 % of full light, and can grow in the shade under other trees.' }, src: ['snl-gran'] }
          ] },
          { h3: { nb: 'Atferd – det dyret gjør', en: 'Behaviour – what the animal does' } },
          { adapt: [
            { icon: 'ekorn', type: 'atferd', title: { nb: 'Ekornet: gjemmer mat', en: 'Squirrel: hides food' }, text: { nb: 'Ekornet gjemmer frø og nøtter om høsten og finner dem igjen om vinteren.', en: 'The squirrel hides seeds and nuts in autumn and finds them again in winter.' }, src: ['snl-ekorn'] },
            { icon: 'spekkhogger', type: 'atferd', title: { nb: 'Spekkhoggeren: jakter i flokk', en: 'Orca: hunts in groups' }, text: { nb: 'Spekkhoggerne samarbeider om å samle silda i en tett ball og bedøve den med halen.', en: 'Orcas work together to herd herring into a tight ball and stun it with their tails.' }, src: ['snl-spekkhogger'] },
            { icon: 'sild', type: 'atferd', title: { nb: 'Silda: svømmer i stim', en: 'Herring: swims in schools' }, text: { nb: 'I en stor stim er det vanskelig for et rovdyr å velge ut én fisk.', en: 'In a large school it is hard for a predator to pick out one fish.' }, src: ['snl-sild'] },
            { icon: 'kjottmeis', type: 'atferd', title: { nb: 'Trekkfugler: flyr sørover', en: 'Migratory birds: fly south' }, text: { nb: 'Mange fugler trekker sørover om høsten, når det blir lite insekter her. Kjøttmeisa blir derimot i Norge og spiser frø om vinteren.', en: 'Many birds migrate south in autumn, when there are few insects here. The great tit, however, stays in Norway and eats seeds in winter.' }, src: ['snl-trekkfugler', 'snl-kjottmeis'] }
          ] },
          { photos: [
            { photo: 'spekkhogger', caption: { nb: 'Spekkhoggere i Lofoten. Hannen (til venstre) har mye høyere ryggfinne enn hunnen. Langs norskekysten er silda spekkhoggerens livrett.', en: 'Orcas in Lofoten. The male (left) has a much taller dorsal fin than the female. Along the Norwegian coast, herring is the orca’s favourite food.' } },
            { photo: 'sild', caption: { nb: 'Silda svømmer i store stimer og spiser dyreplankton som raudåte. Den er mat for blant annet spekkhogger, sel, torsk og lunde.', en: 'Herring swim in large schools and eat zooplankton such as calanus. They are food for orcas, seals, cod and puffins, among others.' } }
          ] },
          { check: {
            q: { nb: 'Ekornet gjemmer nøtter til vinteren. Hvilken type tilpasning er det?', en: 'The squirrel hides nuts for the winter. Which type of adaptation is that?' },
            options: [{ nb: 'Kropp og utseende', en: 'Body and appearance' }, { nb: 'Kroppens funksjoner', en: 'Body functions' }, { nb: 'Atferd', en: 'Behaviour' }],
            answer: 2,
            explain: { nb: 'Å gjemme mat er noe ekornet **gjør** – altså atferd.', en: 'Hiding food is something the squirrel **does** – so it is behaviour.' }
          } },
          { deeper: {
            title: { nb: 'Hvordan overlever dyrene vinteren?', en: 'How do animals survive the winter?' },
            blocks: [
              { p: { nb: 'Vinteren er den vanskeligste tiden i skogen: Det er kaldt, mørkt og lite mat. Dyrene har tre hovedstrategier:', en: 'Winter is the hardest time in the forest: it is cold, dark and there is little food. The animals have three main strategies:' } },
              { list: [
                { nb: '**Dra sin vei:** trekkfugler flyr til varmere land.', en: '**Leave:** migratory birds fly to warmer countries.' },
                { nb: '**Spare energi:** noen dyr går i dvale og senker kroppstemperaturen, for eksempel flaggermus.', en: '**Save energy:** some animals hibernate and lower their body temperature, for example bats.' },
                { nb: '**Holde ut:** elg, hare, ekorn og meis er aktive hele vinteren, med tykk pels eller fjær og lagret mat.', en: '**Hold out:** moose, hares, squirrels and tits stay active all winter, with thick fur or feathers and stored food.' }
              ], src: ['snl-trekkfugler', 'snl-dvale'] }
            ]
          } }
        ]
      },
      {
        id: 'roller', title: { nb: 'Produsenter, konsumenter og nedbrytere', en: 'Producers, consumers and decomposers' },
        blocks: [
          { p: { nb: 'Alle organismer i et økosystem har en rolle, ut fra hvordan de får tak i energi og næring.', en: 'Every organism in an ecosystem has a role, based on how it gets energy and nutrients.' } },
          { table: {
            head: [{ nb: 'Rolle', en: 'Role' }, { nb: 'Hvordan får den energi?', en: 'How does it get energy?' }, { nb: 'Skogen', en: 'The forest' }, { nb: 'Norskehavet', en: 'The Norwegian Sea' }],
            rows: [
              [{ nb: '**Produsent**', en: '**Producer**' }, { nb: 'Lager sukker med energi fra sola (fotosyntese)', en: 'Makes sugar with energy from the sun (photosynthesis)' }, { nb: 'Gran, bjørk, blåbærlyng', en: 'Spruce, birch, bilberry' }, { nb: 'Planteplankton, tare', en: 'Phytoplankton, kelp' }],
              [{ nb: '**Primærkonsument** (planteeter)', en: '**Primary consumer** (herbivore)' }, { nb: 'Spiser produsenter', en: 'Eats producers' }, { nb: 'Elg, hare, larver', en: 'Moose, hare, caterpillars' }, { nb: 'Raudåte, kråkebolle', en: 'Calanus, sea urchin' }],
              [{ nb: '**Sekundærkonsument**', en: '**Secondary consumer**' }, { nb: 'Spiser primærkonsumenter', en: 'Eats primary consumers' }, { nb: 'Kjøttmeis, rødrev', en: 'Great tit, red fox' }, { nb: 'Sild, krabbe', en: 'Herring, crab' }],
              [{ nb: '**[[toppredator|Toppredator]]**', en: '**[[toppredator|Top predator]]**' }, { nb: 'Øverst i næringskjeden – blir ikke spist av andre', en: 'At the top of the food chain – not eaten by others' }, { nb: 'Ulv, gaupe, hønsehauk', en: 'Wolf, lynx, goshawk' }, { nb: 'Spekkhogger, havørn', en: 'Orca, white-tailed eagle' }],
              [{ nb: '**Nedbryter**', en: '**Decomposer**' }, { nb: 'Bryter ned døde planter, dyr og avføring', en: 'Breaks down dead plants, animals and droppings' }, { nb: 'Sopp, meitemark, bakterier', en: 'Fungi, earthworms, bacteria' }, { nb: 'Bakterier på havbunnen', en: 'Bacteria on the seabed' }]
            ],
            src: ['snl-produsent', 'snl-konsument', 'snl-nedbrytere', 'snl-naeringskjede']
          } },
          { p: { nb: 'Noen dyr er **[[altetende]]**: De spiser både planter og dyr. Rødreven spiser mus, hare og fugler, men også bær. Da hører den til flere trofiske nivåer samtidig.', en: 'Some animals are **[[altetende|omnivores]]**: they eat both plants and animals. The red fox eats mice, hares and birds, but also berries. It then belongs to several trophic levels at once.' }, src: ['snl-altetende', 'snl-rodrev'] },
          { myth: { nb: '«Nedbryterne er ikke så viktige – det er dyrene som er spennende.»', en: '“Decomposers aren’t that important – it’s the animals that are exciting.”' }, truth: { nb: 'Uten nedbrytere ville skogen fylles opp av døde blader, trær og dyr, og plantene ville gå tom for næringsstoffer. Nedbryterne gjør at næringen går i **kretsløp**.', en: 'Without decomposers the forest would fill up with dead leaves, trees and animals, and the plants would run out of nutrients. Decomposers make nutrients go round in **cycles**.' }, src: ['snl-nedbrytere', 'snl-sopp'] },
          { photo: 'knuskkjuke', caption: { nb: 'Knuskkjuke er en sopp som er svært vanlig på bjørk og andre løvtrær. Den bryter ned veden, slik at treet råtner og næringsstoffene kan brukes på nytt.', en: 'Tinder fungus is a fungus that is very common on birch and other broadleaf trees. It breaks down the wood, so the tree rots and the nutrients can be used again.' } },
          { discuss: { nb: 'Hvilken rolle har mennesket i økosystemet? Er vi produsenter, konsumenter eller nedbrytere – og på hvilke trofiske nivåer?', en: 'What role do humans have in the ecosystem? Are we producers, consumers or decomposers – and at which trophic levels?' } }
        ]
      }
    ],
    resources: ['ndla-tilpasning', 'yt-autotrof', 'yt-plantetilpasning', 'yt-relasjoner', 'snl-tilpasning', 'snl-nedbrytere']
  }
};
