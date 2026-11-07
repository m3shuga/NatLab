/* =====================================================================
   Økologi – DEL 01: HVA ER ET ØKOSYSTEM?
   ===================================================================== */
NatLab.topic('okologi').organisms.okosystemet = {
  code: '01',
  title: { nb: 'Økosystemet', en: 'The ecosystem' },
  sub: { nb: 'Levende og ikke-levende – alt henger sammen.', en: 'Living and non-living – everything is connected.' },
  lead: {
    nb: 'Et økosystem er alle de levende organismene på et sted og miljøet de lever i. Klikk på skogen eller havet og se hva som påvirker livet der.',
    en: 'An ecosystem is all the living organisms in a place and the environment they live in. Click on the forest or the sea and see what affects life there.'
  },
  art: 'skog',
  diagrams: ['skog', 'hav'],
  modelNames: { skog: { nb: 'Skogen', en: 'The forest' }, hav: { nb: 'Norskehavet', en: 'The Norwegian Sea' } },
  intro: { nb: 'Trykk på det som er **levende** (biotiske faktorer) og det som er **ikke-levende** (abiotiske faktorer). Bytt mellom skogen og Norskehavet øverst.', en: 'Tap what is **living** (biotic factors) and what is **non-living** (abiotic factors). Switch between the forest and the Norwegian Sea at the top.' },

  page: {
    goals: [
      { nb: 'forklare hva et økosystem er, og gi eksempler på økosystemer i Norge', en: 'explain what an ecosystem is and give examples of ecosystems in Norway' },
      { nb: 'skille mellom biotiske og abiotiske faktorer og gi eksempler på hvordan de påvirker hverandre', en: 'distinguish between biotic and abiotic factors and give examples of how they affect each other' },
      { nb: 'bruke begrepene populasjon, samfunn, habitat (leveområde), nisje og konkurranse', en: 'use the terms population, community, habitat, niche and competition' }
    ],
    keypoints: [
      { nb: 'Et **økosystem** er alle organismene på et sted sammen med miljøet de lever i.', en: 'An **ecosystem** is all the organisms in a place together with the environment they live in.' },
      { nb: '**Biotiske faktorer** er det levende: planter, dyr, sopp og bakterier – og hvordan de påvirker hverandre.', en: '**Biotic factors** are the living things: plants, animals, fungi and bacteria – and how they affect each other.' },
      { nb: '**Abiotiske faktorer** er det ikke-levende: lys, temperatur, vann, jord, luft og salt.', en: '**Abiotic factors** are the non-living things: light, temperature, water, soil, air and salt.' },
      { nb: 'Individ → **populasjon** → **samfunn** → økosystem.', en: 'Individual → **population** → **community** → ecosystem.' },
      { nb: 'Arter som trenger det samme, er i **konkurranse** med hverandre.', en: 'Species that need the same things are in **competition** with each other.' }
    ],
    sections: [
      {
        id: 'hva', title: { nb: 'Hva er et økosystem?', en: 'What is an ecosystem?' },
        blocks: [
          { p: { nb: 'Et [[okosystem|økosystem]] er alle de levende organismene som finnes på et sted, og miljøet de lever i. Et økosystem kan være lite – som en vannpytt – eller stort, som en hel skog eller et hav.', en: 'An [[okosystem|ecosystem]] is all the living organisms found in a place and the environment they live in. An ecosystem can be small – like a puddle – or large, like a whole forest or a sea.' }, src: ['snl-okosystem'] },
          { photo: 'elg', caption: { nb: 'Elgen er en planteeter i skogens økosystem. Når den beiter, påvirker den hvilke trær og busker som vokser opp.', en: 'The moose is a herbivore in the forest ecosystem. When it browses, it affects which trees and shrubs grow up.' } },
          { p: { nb: 'I denne delen bruker vi to økosystemer som eksempler: **skogen på Østlandet** og **Norskehavet**. De ser svært forskjellige ut, men fungerer etter de samme reglene.', en: 'In this part we use two ecosystems as examples: **the forest in south-eastern Norway** and **the Norwegian Sea**. They look very different, but work by the same rules.' } },
          { h3: { nb: 'Biotiske og abiotiske faktorer', en: 'Biotic and abiotic factors' } },
          { p: { nb: 'Alt som påvirker livet i et økosystem, kaller vi **faktorer**. [[biotisk|Biotiske faktorer]] er levende: planter, dyr, sopp og bakterier, og hvordan de påvirker hverandre – for eksempel når et rovdyr jakter, eller når to arter konkurrerer om mat.', en: 'Everything that affects life in an ecosystem we call **factors**. [[biotisk|Biotic factors]] are living: plants, animals, fungi and bacteria, and how they affect each other – for example when a predator hunts, or when two species compete for food.' }, src: ['snl-biotiske'] },
          { p: { nb: '[[abiotisk|Abiotiske faktorer]] er de ikke-levende delene av økosystemet: sollys, temperatur, vann, jordsmonn, luft – og i havet også saltholdighet og havstrømmer.', en: '[[abiotisk|Abiotic factors]] are the non-living parts of the ecosystem: sunlight, temperature, water, soil, air – and in the sea also salinity and ocean currents.' }, src: ['snl-abiotiske', 'snl-okosystem'] },
          { check: {
            q: { nb: 'Hvilken av disse er en abiotisk faktor?', en: 'Which of these is an abiotic factor?' },
            options: [{ nb: 'En elg som beiter', en: 'A moose grazing' }, { nb: 'Temperaturen i jorda', en: 'The temperature of the soil' }, { nb: 'Sopp på en død trestamme', en: 'Fungi on a dead tree trunk' }],
            answer: 1,
            explain: { nb: 'Temperatur er ikke levende, altså en abiotisk faktor. Elgen og soppen er levende – biotiske faktorer.', en: 'Temperature is not alive, so it is an abiotic factor. The moose and the fungi are alive – biotic factors.' }
          } }
        ]
      },
      {
        id: 'skog-hav', title: { nb: 'Skogen og havet – to økosystemer', en: 'The forest and the sea – two ecosystems' },
        blocks: [
          { photos: [
            { photo: 'skog', caption: { nb: 'Gammel granskog i Andebu i Vestfold. Grana er et av de viktigste trærne i skogen på Østlandet.', en: 'Old spruce forest in Andebu in Vestfold. The spruce is one of the most important trees in the forests of south-eastern Norway.' } },
            { photo: 'tareskog', caption: { nb: 'Tareskog av stortare. Tareskogen er leveområde for mange fisk og smådyr. (Bildet er fra Frankrike, men stortare vokser også langs norskekysten.)', en: 'A kelp forest of tangle kelp. The kelp forest is a habitat for many fish and small animals. (The photo is from France, but tangle kelp also grows along the Norwegian coast.)' } }
          ] },
          { table: {
            head: [{ nb: '', en: '' }, { nb: 'Skogen på Østlandet', en: 'Forest in south-eastern Norway' }, { nb: 'Norskehavet', en: 'The Norwegian Sea' }],
            rows: [
              [{ nb: 'Viktigste produsenter', en: 'Main producers' }, { nb: 'Trær (gran, furu, bjørk), blåbærlyng, gress', en: 'Trees (spruce, pine, birch), bilberry, grass' }, { nb: 'Planteplankton, og tare langs kysten', en: 'Phytoplankton, and kelp along the coast' }],
              [{ nb: 'Lys', en: 'Light' }, { nb: 'Mye lys om sommeren, lite om vinteren. Skygge under trærne.', en: 'Lots of light in summer, little in winter. Shade under the trees.' }, { nb: 'Bare nok lys i de øverste vannlagene', en: 'Only enough light in the upper water layers' }],
              [{ nb: 'Temperatur', en: 'Temperature' }, { nb: 'Store forskjeller mellom sommer og vinter', en: 'Large differences between summer and winter' }, { nb: 'Jevnere; varmt atlanterhavsvann (8–12 °C) i de øvre lagene', en: 'More even; warm Atlantic water (8–12 °C) in the upper layers' }],
              [{ nb: 'Vann og salt', en: 'Water and salt' }, { nb: 'Nedbør og vann i jorda', en: 'Precipitation and water in the soil' }, { nb: 'Salt vann – over 35 promille', en: 'Salty water – over 35 per mille' }],
              [{ nb: 'Andre viktige faktorer', en: 'Other important factors' }, { nb: 'Snø, jordsmonn', en: 'Snow, soil' }, { nb: 'Havstrømmer, næringssalter', en: 'Ocean currents, nutrients' }]
            ],
            src: ['snl-barskog', 'snl-norskehavet', 'snl-atlanterhavsstrommen']
          } },
          { fact: { nb: 'Den norske atlanterhavsstrømmen fører varmt og salt vann nordover langs kysten – helt opp til Svalbard. Den holder Norskehavet isfritt.', en: 'The Norwegian Atlantic Current carries warm, salty water north along the coast – all the way to Svalbard. It keeps the Norwegian Sea ice-free.' }, src: ['snl-norskehavet', 'snl-atlanterhavsstrommen'] },
          { link: { href: '#okologi-okosystemet', icon: 'target', title: { nb: 'Utforsk skogen og havet', en: 'Explore the forest and the sea' }, text: { nb: 'Klikk på faktorene i tegningene og se hvordan de påvirker livet.', en: 'Click on the factors in the drawings and see how they affect life.' } } }
        ]
      },
      {
        id: 'nivaer', title: { nb: 'Fra individ til økosystem', en: 'From individual to ecosystem' },
        blocks: [
          { p: { nb: 'Økologer ser på naturen på flere nivåer:', en: 'Ecologists look at nature at several levels:' } },
          { list: [
            { nb: '**Individ:** én enkelt organisme, for eksempel én elg.', en: '**Individual:** one single organism, for example one moose.' },
            { nb: '**[[populasjon|Populasjon]]:** alle individene av én art i et område – for eksempel alle elgene i en skog.', en: '**[[populasjon|Population]]:** all the individuals of one species in an area – for example all the moose in a forest.' },
            { nb: '**[[samfunn|Samfunn]]:** alle populasjonene av ulike arter som lever sammen i området.', en: '**[[samfunn|Community]]:** all the populations of different species living together in the area.' },
            { nb: '**Økosystem:** samfunnet sammen med alle de abiotiske faktorene.', en: '**Ecosystem:** the community together with all the abiotic factors.' }
          ], src: ['snl-populasjon', 'snl-samfunn', 'snl-okosystem'] },
          { h3: { nb: 'Habitat og nisje', en: 'Habitat and niche' } },
          { p: { nb: 'Et **[[habitat]]** (leveområde) er stedet der en art lever og finner det den trenger. Habitatet til kjøttmeisa er skog, hager og parker.', en: 'A **[[habitat]]** is the place where a species lives and finds what it needs. The great tit’s habitat is forest, gardens and parks.' }, src: ['snl-habitat', 'snl-kjottmeis'] },
          { p: { nb: 'En **[[nisje]]** er artens «jobb» og plass i økosystemet: hva den spiser, hvor og når den er aktiv, og hvordan den samspiller med andre arter. To arter kan leve i samme habitat, men ha ulike nisjer – kattugla jakter mus om natta, mens hønsehauken jakter ekorn og fugler om dagen.', en: 'A **[[nisje|niche]]** is the species’ “job” and place in the ecosystem: what it eats, where and when it is active, and how it interacts with other species. Two species can live in the same habitat but have different niches – the tawny owl hunts mice at night, while the goshawk hunts squirrels and birds by day.' }, src: ['snl-nisje', 'snl-kattugle', 'snl-honsehauk'] },
          { explain: { nb: 'Velg et dyr du kjenner fra skogen der du bor. Beskriv habitatet og nisjen til dyret.', en: 'Choose an animal you know from the forest where you live. Describe the animal’s habitat and niche.' } }
        ]
      },
      {
        id: 'konkurranse', title: { nb: 'Konkurranse', en: 'Competition' },
        blocks: [
          { p: { nb: 'Ressursene i et økosystem – mat, vann, lys, plass og partnere – er begrenset. Når flere trenger det samme, oppstår **[[konkurranse]]**.', en: 'The resources in an ecosystem – food, water, light, space and mates – are limited. When several organisms need the same thing, **[[konkurranse|competition]]** arises.' }, src: ['snl-konkurranse'] },
          { list: [
            { nb: '**Konkurranse innen arten:** individer av samme art konkurrerer, for eksempel to elgokser om de samme kvistene, eller unge graner om lyset.', en: '**Competition within a species:** individuals of the same species compete, for example two bull moose for the same twigs, or young spruces for light.' },
            { nb: '**Konkurranse mellom arter:** ulike arter konkurrerer om det samme, for eksempel rødrev og kattugle som begge jakter mus.', en: '**Competition between species:** different species compete for the same thing, for example red foxes and tawny owls that both hunt mice.' }
          ], src: ['snl-konkurranse', 'snl-interspesifikk'] },
          { p: { nb: 'Konkurranse er en grunn til at arter får ulike nisjer. Hvis to arter trenger nøyaktig det samme, vil den ene ofte tape. Derfor «deler» artene ofte på ressursene – de spiser litt forskjellig mat, eller er aktive til ulike tider.', en: 'Competition is one reason species end up with different niches. If two species need exactly the same thing, one will often lose. That is why species often “share” the resources – they eat slightly different food, or are active at different times.' }, src: ['snl-konkurranse', 'snl-nisje'] },
          { myth: { nb: '«Konkurranse i naturen betyr at dyrene slåss.»', en: '“Competition in nature means animals fighting.”' }, truth: { nb: 'Som oftest er konkurransen usynlig: Den som er flinkest til å finne mat, vokser best og får flest unger. Grantrær som vokser tett, konkurrerer om lys uten å «gjøre» noe.', en: 'Most of the time competition is invisible: the one that is best at finding food grows best and has the most offspring. Spruce trees growing close together compete for light without “doing” anything.' }, src: ['snl-konkurranse'] },
          { discuss: { nb: 'Hvilke ting konkurrerer planter om? Og hvilke ting konkurrerer dyr om? Lag to lister sammen med en venn.', en: 'What do plants compete for? And what do animals compete for? Make two lists together with a partner.' } },
          { model: { nb: 'Tegningene av skogen og havet er modeller. De viser bare noen få av artene og faktorene. I en ekte skog finnes tusenvis av arter – og mange av dem er så små at vi ikke ser dem.', en: 'The drawings of the forest and the sea are models. They show only a few of the species and factors. In a real forest there are thousands of species – and many of them are so small we cannot see them.' } }
        ]
      }
    ],
    resources: ['ndla-okologi', 'ndla-abiotisk', 'ndla-havmiljo', 'ndla-konkurranse', 'yt-relasjoner', 'yt-okologi-repetisjon', 'snl-okosystem']
  }
};
