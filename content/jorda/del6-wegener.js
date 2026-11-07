/* =====================================================================
   Historien om Jorda – DEL 06: ALFRED WEGENER OG KONTINENTALDRIFT
   ===================================================================== */
NatLab.topic('jorda').organisms.wegener = {
  code: '06',
  title: { nb: 'Alfred Wegener', en: 'Alfred Wegener' },
  sub: { nb: 'Teorien om kontinentaldrift – og bevisene for den.', en: 'The theory of continental drift – and the evidence for it.' },
  lead: {
    nb: 'I 1912 la en tysk forsker fram en idé som de fleste geologer avviste: Kontinentene flytter seg! Kartet viser kontinentene satt sammen til Pangea. Klikk på bevisene som Wegener brukte.',
    en: 'In 1912 a German scientist put forward an idea that most geologists rejected: the continents move! The map shows the continents put together into Pangaea. Click on the evidence Wegener used.'
  },
  art: 'gondwana',
  diagrams: ['gondwana'],
  modelNames: { gondwana: { nb: 'Bevisene på Pangea', en: 'The evidence on Pangaea' } },
  intro: { nb: 'Kontinentene er satt sammen slik de lå for rundt 250 millioner år siden. Legg merke til hvordan sporene fortsetter fra ett kontinent til et annet.', en: 'The continents are put together as they lay about 250 million years ago. Notice how the clues continue from one continent to another.' },
  practiceHref: '#jorda-ov-rekkefolge-drift',
  extraTabs: [{ href: '#jorda-tidskart', icon: 'planet', label: { nb: 'Kartet gjennom tid', en: 'The map through time' } }],

  page: {
    goals: [
      { nb: 'fortelle hvem Alfred Wegener var, og hva teorien om kontinentaldrift sier', en: 'tell who Alfred Wegener was and what the theory of continental drift says' },
      { nb: 'forklare bevisene Wegener brukte: kystlinjer, fossiler, bergarter og spor etter istider', en: 'explain the evidence Wegener used: coastlines, fossils, rocks and traces of ice ages' },
      { nb: 'forklare hvorfor teorien ble avvist, og hvilke nye bevis som gjorde at den ble godtatt', en: 'explain why the theory was rejected, and which new evidence made it accepted' },
      { nb: 'bruke historien om Wegener til å forklare hvordan naturvitenskapelige teorier utvikler seg', en: 'use the story of Wegener to explain how scientific theories develop' }
    ],
    keypoints: [
      { nb: '**Alfred Wegener** (1880–1930) var en tysk meteorolog og polarforsker.', en: '**Alfred Wegener** (1880–1930) was a German meteorologist and polar explorer.' },
      { nb: 'I **1912** la han fram teorien om **kontinentaldrift**: Kontinentene har en gang vært samlet i ett urkontinent, **Pangea**, og har senere drevet fra hverandre.', en: 'In **1912** he presented the theory of **continental drift**: the continents were once joined in one supercontinent, **Pangaea**, and have since drifted apart.' },
      { nb: 'Bevisene var **kystlinjer** som passer, like **fossiler**, like **bergarter og fjellkjeder** og **spor etter istider** på flere kontinenter.', en: 'The evidence was **coastlines** that fit, matching **fossils**, matching **rocks and mountain ranges**, and **traces of ice ages** on several continents.' },
      { nb: 'Teorien ble avvist fordi Wegener ikke kunne forklare **hvilken kraft** som flyttet kontinentene.', en: 'The theory was rejected because Wegener could not explain **what force** moved the continents.' },
      { nb: 'Undersøkelser av **havbunnen** fra 1950- og 60-tallet ga ham rett, og teorien utviklet seg til **platetektonikk**.', en: 'Studies of **the ocean floor** in the 1950s and 60s proved him right, and the theory developed into **plate tectonics**.' }
    ],
    sections: [
      {
        id: 'hvem', title: { nb: 'Hvem var Alfred Wegener?', en: 'Who was Alfred Wegener?' },
        blocks: [
          { photo: 'wegener', caption: { nb: 'Alfred Wegener (1880–1930) var meteorolog, polarforsker – og mannen bak teorien om kontinentaldrift.', en: 'Alfred Wegener (1880–1930) was a meteorologist, a polar explorer – and the man behind the theory of continental drift.' } },
          { p: { nb: 'Alfred Wegener ble født i Berlin i 1880. Han var utdannet i astronomi og jobbet med **meteorologi** – læren om været. Han var også **polarforsker** og var på fire ekspedisjoner til Grønland, der han blant annet var med på å krysse innlandsisen.', en: 'Alfred Wegener was born in Berlin in 1880. He was trained in astronomy and worked in **meteorology** – the study of weather. He was also a **polar explorer** and went on four expeditions to Greenland, where among other things he took part in crossing the ice sheet.' }, src: ['snl-wegener'] },
          { p: { nb: 'Wegener var god til å tenke **på tvers av fag**. Han kombinerte kunnskap fra geologi, fossiler (paleontologi) og klima for å forstå hvordan Jorda hadde forandret seg.', en: 'Wegener was good at thinking **across subjects**. He combined knowledge from geology, fossils (palaeontology) and climate to understand how the Earth had changed.' }, src: ['snl-wegener'] },
          { history: { nb: 'I 1930 ledet Wegener en stor tysk ekspedisjon på Grønland. Han døde på innlandsisen samme høst, under en sledetur for å hente forsyninger til to kolleger. Han opplevde aldri at teorien hans ble godtatt.', en: 'In 1930 Wegener led a large German expedition in Greenland. He died on the ice sheet that autumn, on a sledge journey to bring supplies to two colleagues. He never saw his theory accepted.' }, title: { nb: 'Døden på Grønland', en: 'Death in Greenland' }, src: ['snl-wegener'] }
        ]
      },
      {
        id: 'teori', title: { nb: 'Teorien om kontinentaldrift', en: 'The theory of continental drift' },
        blocks: [
          { p: { nb: 'Wegener hadde lagt merke til at kontinentene ser ut til å passe sammen, nesten som brikkene i et puslespill – særlig Sør-Amerika og Afrika. Han hadde også lest om like fossiler på begge sider av Atlanterhavet.', en: 'Wegener had noticed that the continents seem to fit together, almost like the pieces of a jigsaw puzzle – especially South America and Africa. He had also read about matching fossils on both sides of the Atlantic.' }, src: ['snl-wegener', 'snl-kontinentaldrift'] },
          { p: { nb: 'Den 6. januar 1912 la han fram teorien om **[[kontinentaldrift]]**: Kontinentene har en gang vært samlet i ett stort urkontinent – senere kalt **Pangea**, fra gresk «alle land» – og har siden drevet fra hverandre. I 1915 skrev han boka «Die Entstehung der Kontinente und Ozeane» («Dannelsen av kontinenter og hav»).', en: 'On 6 January 1912 he presented the theory of **[[kontinentaldrift|continental drift]]**: the continents were once joined in one large supercontinent – later called **Pangaea**, from Greek for “all lands” – and have since drifted apart. In 1915 he wrote the book “Die Entstehung der Kontinente und Ozeane” (“The Origin of Continents and Oceans”).' }, src: ['snl-wegener', 'snl-pangea'] }
        ]
      },
      {
        id: 'bevis', title: { nb: 'Bevisene', en: 'The evidence' },
        blocks: [
          { diagram: 'gondwana' },
          { h3: { nb: '1. Kystlinjer som passer sammen', en: '1. Coastlines that fit together' } },
          { p: { nb: 'Kysten av Sør-Amerika passer inn i kysten av Afrika. Wegener mente at dette ikke kunne være tilfeldig.', en: 'The coast of South America fits into the coast of Africa. Wegener argued that this could not be a coincidence.' }, src: ['snl-kontinentaldrift'] },
          { h3: { nb: '2. Like fossiler på kontinenter langt fra hverandre', en: '2. Matching fossils on continents far apart' } },
          { list: [
            { nb: '**Mesosaurus**, et lite krypdyr som levde i sjøer og elver, er funnet både i Sør-Amerika og Afrika.', en: '**Mesosaurus**, a small reptile that lived in lakes and rivers, has been found in both South America and Africa.' },
            { nb: '**Glossopteris**, et tre, er funnet i India, Australia, Sør-Afrika, Sør-Amerika og Antarktis.', en: '**Glossopteris**, a tree, has been found in India, Australia, South Africa, South America and Antarctica.' },
            { nb: '**Lystrosaurus**, et landdyr, er funnet i blant annet Sør-Afrika, India og Antarktis.', en: '**Lystrosaurus**, a land animal, has been found in South Africa, India and Antarctica, among other places.' }
          ], src: ['snl-mesosaurer', 'snl-glossopteris', 'snl-lystrosaurus'] },
          { p: { nb: 'Disse plantene og dyrene kunne ikke ha svømt eller blåst over store hav. Mange trodde den gangen at det hadde vært **landbroer** som senere hadde sunket i havet. Wegener mente at kontinentene selv hadde hengt sammen.', en: 'These plants and animals could not have swum or blown across large oceans. Many people at the time thought there had been **land bridges** that had later sunk into the sea. Wegener argued that the continents themselves had been joined.' }, src: ['snl-wegener'] },
          { h3: { nb: '3. Bergarter og fjellkjeder som fortsetter', en: '3. Rocks and mountain ranges that continue' } },
          { p: { nb: 'Fjellkjeder og bergarter på den ene siden av Atlanterhavet fortsetter på den andre. Fjellene i Norge og Skottland passer med fjell på Grønland og i Nord-Amerika. De ble dannet da Norge og Grønland kolliderte for rundt 420 millioner år siden.', en: 'Mountain ranges and rocks on one side of the Atlantic continue on the other. The mountains in Norway and Scotland match mountains in Greenland and North America. They formed when Norway and Greenland collided about 420 million years ago.' }, src: ['snl-kaledonsk', 'snl-platetektonikk'] },
          { h3: { nb: '4. Spor etter istider på feil sted', en: '4. Traces of ice ages in the wrong place' } },
          { p: { nb: 'I varme områder i dag – som India, Afrika og Australia – finnes spor etter isbreer fra rundt 300 millioner år siden. Når kontinentene settes sammen, ligger sporene samlet rundt sørpolen, der Gondwana var dekket av is.', en: 'In areas that are warm today – like India, Africa and Australia – there are traces of glaciers from about 300 million years ago. When the continents are put together, the traces lie together around the South Pole, where Gondwana was covered by ice.' }, src: ['snl-gondwana'] },
          { check: {
            q: { nb: 'Fossiler av det samme landdyret er funnet i Afrika, India og Antarktis. Hva er den beste forklaringen?', en: 'Fossils of the same land animal have been found in Africa, India and Antarctica. What is the best explanation?' },
            options: [{ nb: 'Dyret svømte mellom kontinentene', en: 'The animal swam between the continents' }, { nb: 'Kontinentene hang sammen da dyret levde', en: 'The continents were joined when the animal lived' }, { nb: 'Fossilene ble fraktet dit av mennesker', en: 'The fossils were carried there by people' }],
            answer: 1,
            explain: { nb: 'Et landdyr kan ikke krysse store hav. Den beste forklaringen er at kontinentene var samlet i Gondwana da dyret levde.', en: 'A land animal cannot cross large oceans. The best explanation is that the continents were joined in Gondwana when the animal lived.' }
          } }
        ]
      },
      {
        id: 'motstand', title: { nb: 'Hvorfor ble Wegener ikke trodd?', en: 'Why was Wegener not believed?' },
        blocks: [
          { p: { nb: 'Mange geologer avviste teorien, både da og i mange år etterpå. Det var to store problemer:', en: 'Many geologists rejected the theory, both then and for many years afterwards. There were two big problems:' }, src: ['snl-wegener', 'snl-kontinentaldrift'] },
          { list: [
            { nb: 'Wegener kunne ikke forklare **hvilken kraft** som skulle kunne flytte hele kontinenter.', en: 'Wegener could not explain **what force** could move whole continents.' },
            { nb: 'Han trodde kontinentene pløyde seg gjennom havbunnen, og han regnet med at de beveget seg **altfor raskt**.', en: 'He thought the continents ploughed through the ocean floor, and he calculated that they moved **far too fast**.' }
          ], src: ['snl-kontinentaldrift'] },
          { p: { nb: 'Fra rundt 1930 til 1950 ble teorien regnet som oppgitt i de fleste land. Bare noen få forskere fortsatte å tro på den.', en: 'From about 1930 to 1950 the theory was considered abandoned in most countries. Only a few scientists kept believing in it.' }, src: ['snl-platetektonikk'] },
          { discuss: { nb: 'Wegener hadde mange gode bevis, men ble likevel ikke trodd. Var det riktig av geologene å være skeptiske? Hva trenger en ny teori for å bli godtatt?', en: 'Wegener had a lot of good evidence, but was still not believed. Were the geologists right to be sceptical? What does a new theory need in order to be accepted?' } }
        ]
      },
      {
        id: 'gjennombrudd', title: { nb: 'Gjennombruddet: havbunnen avslører hemmeligheten', en: 'The breakthrough: the ocean floor reveals the secret' },
        blocks: [
          { p: { nb: 'Etter andre verdenskrig begynte forskerne å kartlegge **havbunnen** med nye instrumenter. De fant det Wegener manglet:', en: 'After the Second World War scientists began mapping **the ocean floor** with new instruments. They found what Wegener had been missing:' } },
          { list: [
            { nb: 'Lange **midthavsrygger** gikk gjennom alle verdenshavene.', en: 'Long **mid-ocean ridges** ran through all the oceans.' },
            { nb: '**Magnetiske striper** i havbunnen lå som et speilbilde på hver side av ryggene.', en: '**Magnetic stripes** in the ocean floor lay like a mirror image on each side of the ridges.' },
            { nb: 'I 1960–1962 forklarte Harry Hess og Robert Dietz dette med **havbunnsspredning**: Ny havbunn lages ved ryggene og skyves utover.', en: 'In 1960–1962 Harry Hess and Robert Dietz explained this with **sea-floor spreading**: new ocean floor is made at the ridges and pushed outwards.' },
            { nb: 'Boreprøver viste at havbunnen blir **eldre jo lenger unna ryggen** du kommer.', en: 'Drill samples showed that the ocean floor gets **older the further from the ridge** you go.' }
          ], src: ['snl-havbunnsspredning', 'snl-platetektonikk', 'snl-paleomagnetisme'] },
          { p: { nb: 'I slutten av 1960-årene ble dette samlet i teorien om **platetektonikk**. Den ga Wegener rett i at kontinentene flytter seg – men forklarte det på en ny måte: Det er ikke kontinentene som pløyer gjennom havbunnen, men store **plater** med både kontinent og havbunn som beveger seg.', en: 'At the end of the 1960s this was brought together in the theory of **plate tectonics**. It proved Wegener right that the continents move – but explained it in a new way: it is not the continents that plough through the ocean floor, but large **plates** with both continent and ocean floor that move.' }, src: ['snl-platetektonikk', 'snl-kontinentaldrift'] },
          { model: { nb: 'Selv om mange bevis støtter platetektonikken, er den – som de fleste vitenskapelige teorier – ingen «absolutt sannhet». Den er den beste forklaringen vi har i dag, og den er blitt justert flere ganger, for eksempel når det gjelder hva som driver platene.', en: 'Even though a lot of evidence supports plate tectonics, it is – like most scientific theories – no “absolute truth”. It is the best explanation we have today, and it has been adjusted several times, for example regarding what drives the plates.' }, src: ['snl-platetektonikk'] },
          { explain: { nb: 'Lag en tidslinje over historien om kontinentaldrift, fra Wegener i 1912 til platetektonikken i slutten av 1960-årene. Hva lærer historien oss om hvordan naturvitenskap fungerer?', en: 'Make a timeline of the story of continental drift, from Wegener in 1912 to plate tectonics at the end of the 1960s. What does the story teach us about how science works?' } }
        ]
      }
    ],
    resources: ['snl-wegener', 'snl-kontinentaldrift', 'snl-pangea', 'yt-drift', 'ndla-jordskorpa', 'snl-gondwana']
  }
};
