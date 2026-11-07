/* =====================================================================
   Historien om Jorda – DEL 01: HVA ER GEOLOGI?
   ===================================================================== */
NatLab.topic('jorda').organisms.geologi = {
  code: '01',
  title: { nb: 'Hva er geologi?', en: 'What is geology?' },
  sub: { nb: 'Hva geologer gjør – og hvordan de vet det de vet.', en: 'What geologists do – and how they know what they know.' },
  lead: {
    nb: 'Geologi er læren om Jordas oppbygning og historie. Klikk på tegningen og se hvilke metoder geologene bruker for å finne ut hva som har skjedd for millioner av år siden.',
    en: 'Geology is the study of the Earth’s structure and history. Click on the drawing to see the methods geologists use to find out what happened millions of years ago.'
  },
  art: 'geolog',
  diagrams: ['geolog'],
  modelNames: { geolog: { nb: 'Geologenes metoder', en: 'Geologists’ methods' } },
  intro: { nb: 'Ingen var til stede da fjellene ble dannet. Likevel kan geologene fortelle Jordas historie. Klikk på delene og se hvordan.', en: 'Nobody was there when the mountains formed. Yet geologists can tell the Earth’s story. Click on the parts to see how.' },
  practiceHref: '#jorda-ov-par-begreper',

  page: {
    goals: [
      { nb: 'forklare hva geologi er, og gi eksempler på hva geologer jobber med', en: 'explain what geology is and give examples of what geologists work on' },
      { nb: 'beskrive noen metoder geologer bruker for å finne ut hva som har skjedd i Jordas historie', en: 'describe some methods geologists use to find out what has happened in the Earth’s history' },
      { nb: 'forklare at Jorda er rundt 4,6 milliarder år gammel, og hvordan vi vet det', en: 'explain that the Earth is about 4.6 billion years old, and how we know' }
    ],
    keypoints: [
      { nb: '**Geologi** er læren om Jordas oppbygning og historie – om bergarter, mineraler og prosessene som forandrer Jorda.', en: '**Geology** is the study of the Earth’s structure and history – of rocks, minerals and the processes that change the Earth.' },
      { nb: 'Geologer **observerer** i felt, tar **prøver** og undersøker dem i **laboratoriet**.', en: 'Geologists **observe** in the field, take **samples** and examine them in the **laboratory**.' },
      { nb: 'I lag av sedimentære bergarter er de **nederste lagene eldst**.', en: 'In layers of sedimentary rock the **lowest layers are the oldest**.' },
      { nb: '**Fossiler** og **radiometrisk datering** viser hvor gamle bergartene er.', en: '**Fossils** and **radiometric dating** show how old rocks are.' },
      { nb: '**Jordskjelvbølger** viser hvordan Jorda ser ut inni.', en: '**Earthquake waves** show what the Earth looks like inside.' }
    ],
    sections: [
      {
        id: 'hva', title: { nb: 'Hva er geologi?', en: 'What is geology?' },
        blocks: [
          { p: { nb: '**[[geologi|Geologi]]** er læren om Jordas oppbygning og historie. Geologer studerer [[bergart|bergartene]] og [[mineral|mineralene]] Jorda består av, hvordan Jorda er bygd opp fra kjernen til overflaten – og prosessene som hele tiden forandrer den.', en: '**[[geologi|Geology]]** is the study of the Earth’s structure and history. Geologists study the [[bergart|rocks]] and [[mineral|minerals]] the Earth is made of, how the Earth is built from the core to the surface – and the processes that constantly change it.' }, src: ['snl-geologi'] },
          { p: { nb: 'Geologi har to hoveddeler. Den ene **beskriver** hvordan Jorda ser ut i dag. Den andre prøver å **forklare** hvordan den ble slik – og hvordan den forandrer seg nå.', en: 'Geology has two main parts. One **describes** what the Earth looks like today. The other tries to **explain** how it became like this – and how it is changing now.' }, src: ['snl-geologi'] },
          { list: [
            { nb: '**Vulkanologi:** vulkaner og vulkanutbrudd.', en: '**Volcanology:** volcanoes and eruptions.' },
            { nb: '**Seismologi:** jordskjelv og jordskjelvbølger.', en: '**Seismology:** earthquakes and earthquake waves.' },
            { nb: '**Tektonikk:** hvordan jordskorpa beveger seg og danner fjell og hav.', en: '**Tectonics:** how the crust moves and forms mountains and oceans.' },
            { nb: '**Geomorfologi:** hvordan landskapet formes, for eksempel av isbreer og elver.', en: '**Geomorphology:** how landscapes are shaped, for example by glaciers and rivers.' }
          ], src: ['snl-geologi'] },
          { fact: { nb: 'Geologi brukes også på andre himmellegemer. Forskere studerer for eksempel geologien på Månen og Mars.', en: 'Geology is also used on other bodies in space. Scientists study the geology of the Moon and Mars, for example.' }, src: ['snl-geologi'] }
        ]
      },
      {
        id: 'geolog', title: { nb: 'Hva gjør en geolog?', en: 'What does a geologist do?' },
        blocks: [
          { p: { nb: 'En **geolog** er en person som har geologi som fag. Geologer jobber mange forskjellige steder:', en: 'A **geologist** is a person whose subject is geology. Geologists work in many different places:' }, src: ['snl-geolog'] },
          { list: [
            { nb: 'De lager **geologiske kart** som viser hvilke bergarter som finnes hvor.', en: 'They make **geological maps** that show which rocks are where.' },
            { nb: 'De leter etter **olje, gass og metaller** (malm).', en: 'They search for **oil, gas and metals** (ore).' },
            { nb: 'De undersøker **grunnen** før det bygges veier, tunneler og hus – er det fare for ras eller kvikkleire?', en: 'They examine **the ground** before roads, tunnels and houses are built – is there a risk of landslides or quick clay?' },
            { nb: 'De **forsker** på Jordas historie, jordskjelv, vulkaner og klima.', en: 'They do **research** on the Earth’s history, earthquakes, volcanoes and climate.' }
          ], src: ['snl-geolog'] },
          { explain: { nb: 'Tenk deg at kommunen vil bygge en ny tunnel. Hvorfor er det lurt å spørre en geolog først?', en: 'Imagine the municipality wants to build a new tunnel. Why is it a good idea to ask a geologist first?' } }
        ]
      },
      {
        id: 'vet', title: { nb: 'Hvordan vet geologene det de vet?', en: 'How do geologists know what they know?' },
        blocks: [
          { p: { nb: 'Ingen har sett Pangea, og ingen har vært i Jordas kjerne. Geologene må derfor lete etter **spor** og bruke **logikk** – litt som detektiver. Her er noen av de viktigste metodene:', en: 'Nobody has seen Pangaea, and nobody has been to the Earth’s core. Geologists must therefore look for **clues** and use **logic** – a bit like detectives. Here are some of the most important methods:' } },
          { photo: 'lagdeling', caption: { nb: 'Lagene i Grand Canyon i USA er som sidene i en historiebok. De nederste lagene er eldst.', en: 'The layers in the Grand Canyon in the USA are like the pages of a history book. The lowest layers are the oldest.' } },
          { h3: { nb: '1. Lagene i berget', en: '1. The layers in the rock' } },
          { p: { nb: '[[sedimentaer|Sedimentære bergarter]] blir avsatt lag for lag. Hvis lagene ikke er snudd opp ned, er de **nederste lagene eldst** og de øverste yngst. Slik kan geologene finne **rekkefølgen** på det som har skjedd.', en: '[[sedimentaer|Sedimentary rocks]] are laid down layer by layer. If the layers have not been turned upside down, the **lowest layers are the oldest** and the top ones the youngest. This lets geologists work out the **order** in which things happened.' }, src: ['snl-sedimentare'] },
          { h3: { nb: '2. Fossiler', en: '2. Fossils' } },
          { p: { nb: '[[fossil|Fossiler]] er rester eller spor etter liv som er bevart i berget. De forteller hvor gammelt et lag er, og hvordan miljøet var. Fossiler finnes nesten alltid i sedimentære bergarter.', en: '[[fossil|Fossils]] are remains or traces of life preserved in rock. They tell how old a layer is and what the environment was like. Fossils are almost always found in sedimentary rocks.' }, src: ['snl-fossiler'] },
          { h3: { nb: '3. Datering i laboratoriet', en: '3. Dating in the laboratory' } },
          { p: { nb: 'Noen grunnstoffer i bergarter er **radioaktive** og omdannes sakte til andre stoffer med en fart vi kjenner. Ved å måle hvor mye som er omdannet, kan forskerne regne ut hvor gammel bergarten er. Det kalles **radiometrisk datering**.', en: 'Some elements in rocks are **radioactive** and slowly change into other substances at a known rate. By measuring how much has changed, scientists can work out how old the rock is. This is called **radiometric dating**.' }, src: ['snl-radiometrisk'] },
          { h3: { nb: '4. Jordskjelvbølger', en: '4. Earthquake waves' } },
          { p: { nb: 'Jordskjelvbølger går gjennom hele Jorda. De endrer fart og retning når de treffer nye lag, og én type bølger (S-bølger) kan ikke gå gjennom væske. Ved å måle bølgene med **seismografer** over hele verden har forskerne funnet ut hvordan Jorda er bygd opp inni.', en: 'Earthquake waves travel through the whole Earth. They change speed and direction when they hit new layers, and one type of wave (S waves) cannot pass through liquid. By measuring the waves with **seismographs** all over the world, scientists have worked out how the Earth is built inside.' }, src: ['snl-seismisk-bolge', 'snl-mantelen'] },
          { h3: { nb: '5. Boring og satellitter', en: '5. Drilling and satellites' } },
          { p: { nb: 'Geologer borer og henter opp prøver – også fra havbunnen. Med satellitter kan de måle på centimeteren hvor mye platene flytter seg hvert år.', en: 'Geologists drill and bring up samples – also from the sea floor. Using satellites they can measure to the centimetre how much the plates move each year.' }, src: ['snl-platetektonikk'] },
          { check: {
            q: { nb: 'Du ser fem lag i en fjellvegg. Lagene er ikke snudd. Hvilket lag er eldst?', en: 'You see five layers in a cliff. The layers have not been turned over. Which layer is the oldest?' },
            options: [{ nb: 'Det øverste laget', en: 'The top layer' }, { nb: 'Det nederste laget', en: 'The bottom layer' }, { nb: 'Laget i midten', en: 'The middle layer' }],
            answer: 1,
            explain: { nb: 'Lagene legger seg oppå hverandre. Det nederste laget ble avsatt først og er derfor eldst.', en: 'The layers settle on top of each other. The bottom layer was laid down first and is therefore the oldest.' }
          } },
          { model: { nb: 'Geologiske teorier bygger på mange spor fra ulike metoder. Når flere uavhengige spor peker i samme retning, blir forskerne sikrere. Men en teori kan endres hvis nye spor viser noe annet.', en: 'Geological theories build on many clues from different methods. When several independent clues point the same way, scientists become more certain. But a theory can change if new clues show something else.' }, src: ['snl-platetektonikk'] }
        ]
      },
      {
        id: 'tid', title: { nb: 'Jordas lange historie', en: 'The Earth’s long history' },
        blocks: [
          { p: { nb: 'Jorda ble til for nærmere **4,6 milliarder år siden**. De eldste bergartene i jordskorpa er opptil fire milliarder år gamle, og de første sporene etter liv er 3,5–3,0 milliarder år gamle.', en: 'The Earth formed nearly **4.6 billion years ago**. The oldest rocks in the crust are up to four billion years old, and the first traces of life are 3.5–3.0 billion years old.' }, src: ['snl-jordens-geologi', 'snl-jordskorpen', 'snl-jorden'] },
          { deeper: {
            title: { nb: 'Jordas historie som ett døgn', en: 'The Earth’s history as one day' },
            blocks: [
              { p: { nb: 'Det er vanskelig å forstå hvor lang tid 4,6 milliarder år er. Tenk deg at hele Jordas historie er ett døgn på 24 timer, og at Jorda ble til ved midnatt:', en: 'It is hard to grasp how long 4.6 billion years is. Imagine that the whole history of the Earth is one day of 24 hours, and that the Earth formed at midnight:' } },
              { table: {
                head: [{ nb: 'Klokka', en: 'Time' }, { nb: 'Hva skjer?', en: 'What happens?' }],
                rows: [
                  [{ nb: '00:00', en: '00:00' }, { nb: 'Jorda blir til (for ca. 4,6 milliarder år siden).', en: 'The Earth forms (about 4.6 billion years ago).' }],
                  [{ nb: 'ca. 05:45', en: 'about 05:45' }, { nb: 'De første sporene etter liv (for ca. 3,5 milliarder år siden).', en: 'The first traces of life (about 3.5 billion years ago).' }],
                  [{ nb: 'ca. 22:40', en: 'about 22:40' }, { nb: 'Superkontinentet Pangea (for ca. 250 millioner år siden).', en: 'The supercontinent Pangaea (about 250 million years ago).' }],
                  [{ nb: 'ca. 23:45', en: 'about 23:45' }, { nb: 'India kolliderer med Asia, og Himalaya blir til (for ca. 50 millioner år siden).', en: 'India collides with Asia, and the Himalayas form (about 50 million years ago).' }]
                ],
                src: ['snl-jordens-geologi', 'snl-jorden', 'snl-pangea', 'snl-himalaya-geologi']
              } },
              { discuss: { nb: 'Regn ut: Hvis Jordas historie er ett døgn, hvor mange sekunder før midnatt kom de første menneskene, hvis du vet at mennesket har eksistert i noen hundre tusen år? Hva forteller det om hvor lenge mennesker har vært på Jorda?', en: 'Calculate: if the Earth’s history is one day, how many seconds before midnight did the first humans appear, given that humans have existed for a few hundred thousand years? What does that tell you about how long humans have been on Earth?' } }
            ]
          } }
        ]
      }
    ],
    resources: ['snl-geologi', 'snl-geolog', 'ndla-filmer', 'yt-indre-krefter', 'snl-radiometrisk', 'snl-fossiler']
  }
};
