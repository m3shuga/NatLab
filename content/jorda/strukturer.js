/* =====================================================================
   Historien om Jorda – ALT SOM KAN KLIKKES PÅ I TEGNINGENE
   ---------------------------------------------------------------------
   Hver oppføring: name, color, level ('deeper' = bare i «Gå dypere»),
   what (hva er det?), does (hva skjer / hvorfor er det viktig?),
   analogy (sammenligning), fact (visste du at?), src (kilder i kilder.js).
   Faktaene er sjekket mot Store norske leksikon (snl.no).
   ===================================================================== */
NatLab.topic('jorda').structures = {

  /* ---------- Jordas lag ---------- */
  jordskorpe: {
    name: { nb: 'Jordskorpa', en: 'The crust' }, color: '#8a6a45',
    what: { nb: 'Det ytterste og kaldeste laget av Jorda. Den er bare **5–70 km** tykk.', en: 'The outermost and coldest layer of the Earth. It is only **5–70 km** thick.' },
    does: { nb: 'Det er her vi bor. Skorpa består av bergarter og er delt i to typer: **havskorpe** under havene og **kontinentalskorpe** under kontinentene.', en: 'This is where we live. The crust is made of rocks and comes in two types: **oceanic crust** under the oceans and **continental crust** under the continents.' },
    analogy: { nb: 'Hvis Jorda var et eple, ville skorpa vært tynnere enn skallet på eplet.', en: 'If the Earth were an apple, the crust would be thinner than the apple’s skin.' },
    fact: { nb: 'Temperaturen øker med 20–30 °C for hver kilometer du går nedover i den øverste delen av skorpa.', en: 'The temperature rises by 20–30 °C for every kilometre you go down in the upper part of the crust.' },
    src: ['snl-jordskorpen']
  },
  havskorpe: {
    name: { nb: 'Havskorpe (havbunnsskorpe)', en: 'Oceanic crust' }, color: '#59606b',
    what: { nb: 'Skorpa under havene. Den er bare rundt **10 km** tykk og består mest av den mørke, tunge bergarten **basalt**.', en: 'The crust under the oceans. It is only about **10 km** thick and is mostly made of the dark, heavy rock **basalt**.' },
    does: { nb: 'Ny havskorpe lages hele tiden ved **midthavsryggene**. Den blir ødelagt igjen når den synker ned i mantelen i **subduksjonssoner**. Derfor er nesten all havbunn yngre enn 200 millioner år.', en: 'New oceanic crust is made all the time at **mid-ocean ridges**. It is destroyed again when it sinks into the mantle at **subduction zones**. That is why almost all ocean floor is younger than 200 million years.' },
    fact: { nb: 'Havskorpe er tyngre (har høyere tetthet) enn kontinentalskorpe. Når de møtes, er det derfor havskorpa som synker under.', en: 'Oceanic crust is heavier (denser) than continental crust. When they meet, it is the oceanic crust that sinks underneath.' },
    src: ['snl-jordskorpen', 'snl-platetektonikk']
  },
  kontinentalskorpe: {
    name: { nb: 'Kontinentalskorpe', en: 'Continental crust' }, color: '#c8a46e',
    what: { nb: 'Skorpa under kontinentene. Den er vanligvis **30–50 km** tykk, og enda tykkere under høye fjellkjeder.', en: 'The crust under the continents. It is usually **30–50 km** thick, and even thicker under high mountain ranges.' },
    does: { nb: 'Kontinentalskorpa er lett og «flyter» høyt. Den synker nesten aldri ned i mantelen. Derfor kan den bli svært gammel – opptil fire milliarder år.', en: 'Continental crust is light and “floats” high. It almost never sinks into the mantle. That is why it can be very old – up to four billion years.' },
    fact: { nb: 'Kontinentalskorpa inneholder mye av mineralene **feltspat** og **kvarts**. Granitt er en typisk bergart i kontinentalskorpa.', en: 'Continental crust contains a lot of the minerals **feldspar** and **quartz**. Granite is a typical continental rock.' },
    src: ['snl-jordskorpen']
  },
  mantel: {
    name: { nb: 'Mantelen', en: 'The mantle' }, color: '#d9683c',
    what: { nb: 'Det tykke laget mellom skorpa og kjernen. Det går fra bunnen av skorpa og nesten **2900 km** ned, og utgjør rundt to tredeler av Jordas masse.', en: 'The thick layer between the crust and the core. It goes from the bottom of the crust almost **2900 km** down, and makes up about two thirds of the Earth’s mass.' },
    does: { nb: 'Mantelen er nesten helt **fast stein**, men den er så varm at den kan bevege seg svært sakte, som en seig masse. Disse langsomme strømmene henger sammen med at platene på overflaten beveger seg.', en: 'The mantle is almost entirely **solid rock**, but it is so hot that it can move very slowly, like a sticky mass. These slow currents are linked to the movement of the plates at the surface.' },
    analogy: { nb: 'Tenk på kald sirup eller trolldeig: Den kjennes fast, men flyter sakte hvis du venter lenge nok.', en: 'Think of cold syrup or silly putty: it feels solid, but flows slowly if you wait long enough.' },
    fact: { nb: 'Mantelen er **ikke** et hav av flytende magma! Bare små deler smelter, for eksempel under midthavsryggene.', en: 'The mantle is **not** an ocean of liquid magma! Only small parts melt, for example under mid-ocean ridges.' },
    src: ['snl-mantelen']
  },
  ytrekjerne: {
    name: { nb: 'Ytre kjerne', en: 'Outer core' }, color: '#f2b632',
    what: { nb: 'Et lag av **flytende** metall, mest jern og nikkel, fra ca. 2900 til 5100 km dyp.', en: 'A layer of **liquid** metal, mostly iron and nickel, from about 2900 to 5100 km deep.' },
    does: { nb: 'Strømmer i det flytende metallet lager **Jordas magnetfelt** – det som får kompassnåla til å peke mot nord. Varmen fra kjernen varmer også opp mantelen nedenfra.', en: 'Currents in the liquid metal create **the Earth’s magnetic field** – what makes a compass needle point north. Heat from the core also warms the mantle from below.' },
    fact: { nb: 'Vi vet at den ytre kjernen er flytende fordi én type jordskjelvbølger (S-bølger) ikke kan gå gjennom den.', en: 'We know the outer core is liquid because one type of earthquake wave (S waves) cannot pass through it.' },
    src: ['snl-kjerne', 'snl-seismisk-bolge', 'snl-paleomagnetisme']
  },
  indrekjerne: {
    name: { nb: 'Indre kjerne', en: 'Inner core' }, color: '#fbe28a',
    what: { nb: 'Den innerste kula i Jorda, med en radius på rundt **1300 km**. Den består mest av jern og nikkel.', en: 'The innermost ball of the Earth, with a radius of about **1300 km**. It is mostly made of iron and nickel.' },
    does: { nb: 'Den indre kjernen er **fast**, selv om den er svært varm. Trykket er så enormt at metallet ikke kan smelte.', en: 'The inner core is **solid**, even though it is very hot. The pressure is so enormous that the metal cannot melt.' },
    fact: { nb: 'Temperaturen i kjernen antas å være om lag 4000–5000 °C. Den indre kjernen vokser sakte – omtrent 1 mm i året – fordi Jorda kjøles ned.', en: 'The temperature in the core is thought to be about 4000–5000 °C. The inner core grows slowly – about 1 mm a year – because the Earth is cooling.' },
    src: ['snl-kjerne', 'snl-jordens-geologi']
  },
  litosfare: {
    name: { nb: 'Litosfæren (platene)', en: 'The lithosphere (the plates)' }, color: '#c9714a', level: 'deeper',
    what: { nb: 'Jordas stive ytre skall: **skorpa pluss den øverste, stive delen av mantelen**. Litosfæren er delt opp i store plater.', en: 'The Earth’s rigid outer shell: **the crust plus the top, rigid part of the mantle**. The lithosphere is broken into large plates.' },
    does: { nb: 'Det er litosfæreplatene som beveger seg – ikke bare skorpa. Platene er fra noen få kilometer tykke ved midthavsryggene til over 250 km under de eldste kontinentene.', en: 'It is the lithospheric plates that move – not just the crust. The plates range from a few kilometres thick at mid-ocean ridges to over 250 km under the oldest continents.' },
    src: ['snl-litosfaren', 'snl-mantelen']
  },
  astenosfare: {
    name: { nb: 'Mantelen under platene (astenosfæren)', en: 'The mantle under the plates (asthenosphere)' }, color: '#ef9d63',
    what: { nb: 'Den myke, varme delen av mantelen rett under platene. Den er over 1300 °C og ligger typisk fra 100–200 km ned til rundt 660 km.', en: 'The soft, hot part of the mantle right under the plates. It is over 1300 °C and typically lies from 100–200 km down to about 660 km.' },
    does: { nb: 'Steinen her er ikke smeltet, men så myk at den flyter sakte. De stive platene kan derfor gli oppå den uten mye friksjon. Uten dette laget ville Jorda ikke hatt platetektonikk.', en: 'The rock here is not melted, but so soft that it flows slowly. The rigid plates can therefore glide on top of it without much friction. Without this layer the Earth would not have plate tectonics.' },
    src: ['snl-astenosfaren']
  },

  /* ---------- Plategrenser ---------- */
  grense_spredning: {
    name: { nb: 'Plategrense: havbunn som beveger seg fra hverandre', en: 'Plate boundary: ocean floor moving apart' }, color: '#d4380d',
    tag: { nb: 'Divergent (konstruktiv) plategrense', en: 'Divergent (constructive) plate boundary' },
    what: { nb: 'Her beveger to havplater seg **fra hverandre**. Grensen ligger midt på en **midthavsrygg**.', en: 'Here two oceanic plates move **apart**. The boundary lies in the middle of a **mid-ocean ridge**.' },
    does: { nb: 'Varm mantel stiger opp og smelter litt. Magmaet fyller sprekken og størkner til **ny havbunn**. Slik vokser havet – Atlanterhavet blir noen centimeter bredere hvert år.', en: 'Hot mantle rises and melts a little. The magma fills the crack and solidifies into **new ocean floor**. This is how oceans grow – the Atlantic gets a few centimetres wider each year.' },
    fact: { nb: 'Island ligger oppå Den midtatlantiske ryggen. Der kan du se plategrensen på land!', en: 'Iceland sits on top of the Mid-Atlantic Ridge. There you can see the plate boundary on land!' },
    src: ['snl-platetektonikk', 'snl-midthavsrygg', 'snl-havbunnsspredning']
  },
  grense_rift: {
    name: { nb: 'Plategrense: et kontinent som sprekker opp', en: 'Plate boundary: a continent splitting apart' }, color: '#e98a15',
    tag: { nb: 'Divergent plategrense på land', en: 'Divergent plate boundary on land' },
    what: { nb: 'Her trekkes et **kontinent** fra hverandre. Skorpa strekkes, sprekker og synker ned i midten, og det dannes en **riftdal**.', en: 'Here a **continent** is pulled apart. The crust is stretched, cracks and sinks in the middle, forming a **rift valley**.' },
    does: { nb: 'Hvis rifta fortsetter lenge nok, kan kontinentet revne helt, og havet strømmer inn. Slik ble Rødehavet til, og slik begynte Atlanterhavet.', en: 'If the rifting goes on long enough, the continent can split completely and the sea flows in. That is how the Red Sea formed, and how the Atlantic began.' },
    fact: { nb: 'Oslofeltet er en gammel riftdal! For rundt 300 millioner år siden sprakk jordskorpa her, og det var mange vulkaner på Østlandet.', en: 'The Oslo region is an old rift valley! About 300 million years ago the crust cracked here, and there were many volcanoes in eastern Norway.' },
    src: ['snl-riftdalen', 'snl-oslofeltet', 'snl-vulkan']
  },
  grense_subduksjon: {
    name: { nb: 'Plategrense: havbunn mot kontinent', en: 'Plate boundary: ocean floor against a continent' }, color: '#1f4fc4',
    tag: { nb: 'Konvergent (destruktiv) plategrense – subduksjon', en: 'Convergent (destructive) plate boundary – subduction' },
    what: { nb: 'Her beveger en havplate og en kontinentalplate seg **mot hverandre**. Den tunge havplata bøyes ned og synker under kontinentet. Det kalles **subduksjon**.', en: 'Here an oceanic plate and a continental plate move **towards each other**. The heavy oceanic plate bends down and sinks under the continent. This is called **subduction**.' },
    does: { nb: 'Når havplata synker, slipper den ut vann. Da smelter mantelen over den, og det dannes **magma** som stiger opp og lager **vulkaner**. Kontinentkanten presses sammen til **fjell**, og det blir mange **jordskjelv**.', en: 'As the oceanic plate sinks, it releases water. The mantle above it then melts, forming **magma** that rises and builds **volcanoes**. The edge of the continent is squeezed into **mountains**, and there are many **earthquakes**.' },
    fact: { nb: 'Andesfjellene langs vestkysten av Sør-Amerika er dannet slik. Der finnes rundt 60 aktive vulkaner.', en: 'The Andes along the west coast of South America formed this way. There are about 60 active volcanoes there.' },
    src: ['snl-platetektonikk', 'snl-andes']
  },
  grense_oybue: {
    name: { nb: 'Plategrense: havbunn mot havbunn', en: 'Plate boundary: ocean floor against ocean floor' }, color: '#0f8fa8',
    tag: { nb: 'Konvergent plategrense – subduksjon i havet', en: 'Convergent plate boundary – subduction in the ocean' },
    what: { nb: 'Her møtes to **havplater**. Den eldste og tyngste plata synker under den andre.', en: 'Here two **oceanic plates** meet. The oldest and heaviest plate sinks under the other.' },
    does: { nb: 'Det dannes en dyp **dyphavsgrop** der plata bøyes ned. Magma stiger opp og lager en buet rekke med vulkanøyer – en **øybue**. Det blir også kraftige jordskjelv.', en: 'A deep **ocean trench** forms where the plate bends down. Magma rises and builds a curved row of volcanic islands – an **island arc**. There are also powerful earthquakes.' },
    fact: { nb: 'Marianegropen i Stillehavet er dannet slik. Den er det dypeste stedet i havet: nesten 11 km.', en: 'The Mariana Trench in the Pacific formed this way. It is the deepest place in the ocean: almost 11 km.' },
    src: ['snl-platetektonikk', 'snl-dyphavsgrop']
  },
  grense_kollisjon: {
    name: { nb: 'Plategrense: kontinent mot kontinent', en: 'Plate boundary: continent against continent' }, color: '#8a3fb0',
    tag: { nb: 'Konvergent plategrense – kollisjon', en: 'Convergent plate boundary – collision' },
    what: { nb: 'Her kolliderer to **kontinenter**. Begge er lette, så ingen av dem synker skikkelig ned i mantelen.', en: 'Here two **continents** collide. Both are light, so neither of them really sinks into the mantle.' },
    does: { nb: 'Skorpa krølles, presses sammen og stables opp. Det dannes **svære fjellkjeder**, og skorpa blir dobbelt så tykk. Det blir mange jordskjelv, men **nesten ingen vulkaner**, fordi ingen havplate synker ned og smelter.', en: 'The crust is crumpled, squeezed and stacked up. **Huge mountain ranges** form, and the crust becomes twice as thick. There are many earthquakes, but **almost no volcanoes**, because no oceanic plate sinks down and melts.' },
    fact: { nb: 'Himalaya ble til da India kolliderte med Asia for rundt 50 millioner år siden. India presser fortsatt nordover med ca. 4 cm i året. Den kaledonske fjellkjeden i Norge ble til på samme måte for over 400 millioner år siden.', en: 'The Himalayas formed when India collided with Asia about 50 million years ago. India is still pushing north at about 4 cm a year. The Caledonian mountains in Norway formed in the same way more than 400 million years ago.' },
    src: ['snl-himalaya-geologi', 'snl-kaledonsk']
  },
  grense_transform: {
    name: { nb: 'Plategrense: plater som glir forbi hverandre', en: 'Plate boundary: plates sliding past each other' }, color: '#1b7f45',
    tag: { nb: 'Transform (konservativ) plategrense', en: 'Transform (conservative) plate boundary' },
    what: { nb: 'Her glir to plater **sidelengs forbi hverandre**. Ingen skorpe lages, og ingen skorpe forsvinner.', en: 'Here two plates slide **sideways past each other**. No crust is made, and no crust disappears.' },
    does: { nb: 'Platene hekter seg fast i hverandre. Spenningen bygger seg opp i mange år – helt til berget plutselig glipper. Da blir det **jordskjelv**. Det er lite vulkaner her.', en: 'The plates get stuck. Stress builds up for many years – until the rock suddenly slips. That causes **earthquakes**. There are few volcanoes here.' },
    fact: { nb: 'San Andreas-forkastningen i California er en transformforkastning. Los Angeles, som ligger på Stillehavsplaten, beveger seg sakte nordover forbi San Francisco.', en: 'The San Andreas Fault in California is a transform fault. Los Angeles, which sits on the Pacific Plate, is slowly moving north past San Francisco.' },
    src: ['snl-san-andreas', 'snl-transform', 'snl-platetektonikk']
  },
  midthavsrygg: {
    name: { nb: 'Midthavsrygg (spredningsrygg)', en: 'Mid-ocean ridge (spreading ridge)' }, color: '#ffd166',
    what: { nb: 'En lang fjellkjede på havbunnen. Den reiser seg 1–3 km over havbunnen rundt og går gjennom alle verdenshavene.', en: 'A long mountain range on the ocean floor. It rises 1–3 km above the surrounding sea floor and runs through all the oceans.' },
    does: { nb: 'Midt i ryggen er det en sprekk der magma kommer opp og lager ny havbunn. Den nye havbunnen er varm og lett og ligger derfor høyt – det er derfor ryggen er en «fjellkjede».', en: 'In the middle of the ridge there is a crack where magma comes up and makes new ocean floor. The new ocean floor is warm and light and therefore sits high – that is why the ridge is a “mountain range”.' },
    fact: { nb: 'Den midtatlantiske ryggen følger formen på kystene på begge sider av Atlanterhavet.', en: 'The Mid-Atlantic Ridge follows the shape of the coasts on both sides of the Atlantic.' },
    src: ['snl-midthavsrygg']
  },
  riftdal: {
    name: { nb: 'Riftdal', en: 'Rift valley' }, color: '#e98a15',
    what: { nb: 'En lang dal som dannes når jordskorpa strekkes og en blokk i midten synker ned mellom to sprekker (forkastninger).', en: 'A long valley that forms when the crust is stretched and a block in the middle sinks down between two cracks (faults).' },
    does: { nb: 'Riftdaler har ofte innsjøer, vulkaner og jordskjelv. De kan være begynnelsen på et nytt hav.', en: 'Rift valleys often have lakes, volcanoes and earthquakes. They can be the start of a new ocean.' },
    fact: { nb: 'Riftdalen i Øst-Afrika går fra Malawisjøen gjennom blant annet Kenya og Etiopia til Rødehavet. Her ligger vulkaner som Kilimanjaro.', en: 'The East African Rift runs from Lake Malawi through Kenya and Ethiopia, among others, to the Red Sea. Volcanoes like Kilimanjaro lie here.' },
    src: ['snl-riftdalen']
  },
  dyphavsgrop: {
    name: { nb: 'Dyphavsgrop', en: 'Ocean trench' }, color: '#ffd166',
    what: { nb: 'En lang, dyp renne i havbunnen der en havplate bøyes ned og synker under en annen plate.', en: 'A long, deep groove in the ocean floor where an oceanic plate bends down and sinks under another plate.' },
    does: { nb: 'Dyphavsgropene viser hvor subduksjonen skjer. De er vanligvis 3–4 km dypere enn havbunnen rundt.', en: 'Ocean trenches show where subduction is happening. They are usually 3–4 km deeper than the surrounding sea floor.' },
    fact: { nb: 'Den dypeste er Marianegropen. Der går Challengerdypet ned til 10 935 meter.', en: 'The deepest is the Mariana Trench. Its Challenger Deep goes down to 10,935 metres.' },
    src: ['snl-dyphavsgrop']
  },
  magma: {
    name: { nb: 'Magma', en: 'Magma' }, color: '#e2401f',
    what: { nb: 'Smeltet stein med gasser i, under jordoverflaten. Når magma kommer ut av en vulkan, kalles det **lava**.', en: 'Molten rock containing gases, below the Earth’s surface. When magma comes out of a volcano, it is called **lava**.' },
    does: { nb: 'Magma er lettere enn steinen rundt og stiger derfor oppover. Når det kjøles ned og størkner, blir det til **magmatiske bergarter**.', en: 'Magma is lighter than the rock around it and therefore rises. When it cools and solidifies, it becomes **igneous rock**.' },
    fact: { nb: 'Ved overflaten er magma vanligvis mellom 700 og 1200 °C.', en: 'At the surface magma is usually between 700 and 1200 °C.' },
    src: ['snl-magma', 'snl-lava']
  },
  vulkan: {
    name: { nb: 'Vulkan', en: 'Volcano' }, color: '#c42b4f',
    what: { nb: 'Et sted der magma kommer opp til overflaten som lava, aske og gasser. Ofte bygges det opp et fjell rundt åpningen.', en: 'A place where magma reaches the surface as lava, ash and gases. Often a mountain builds up around the opening.' },
    does: { nb: 'De fleste vulkaner ligger ved plategrenser: der platene beveger seg fra hverandre, og der en havplate synker ned i mantelen. Noen ligger over **varme flekker** midt på en plate, som Hawaii.', en: 'Most volcanoes lie at plate boundaries: where plates move apart, and where an oceanic plate sinks into the mantle. Some lie over **hotspots** in the middle of a plate, like Hawaii.' },
    fact: { nb: 'Island har rundt 150 vulkaner. Verdens nordligste aktive vulkan, Beerenberg, ligger på Jan Mayen – som er norsk.', en: 'Iceland has about 150 volcanoes. The world’s northernmost active volcano, Beerenberg, is on Jan Mayen – which is Norwegian.' },
    src: ['snl-vulkan', 'snl-island', 'snl-jan-mayen']
  },
  oybue: {
    name: { nb: 'Øybue (vulkanøyer)', en: 'Island arc (volcanic islands)' }, color: '#c42b4f',
    what: { nb: 'En buet rekke med vulkanøyer som ligger parallelt med en dyphavsgrop.', en: 'A curved row of volcanic islands that lies parallel to an ocean trench.' },
    does: { nb: 'Øyene er toppene av vulkaner som er bygd opp av magma fra plata som synker ned under dem.', en: 'The islands are the tops of volcanoes built up by magma from the plate sinking beneath them.' },
    fact: { nb: 'Det finnes mange øybuer i Stillehavet, for eksempel Marianene og Aleutene.', en: 'There are many island arcs in the Pacific, for example the Mariana Islands and the Aleutians.' },
    src: ['snl-platetektonikk']
  },
  fjellkjede: {
    name: { nb: 'Fjellkjede', en: 'Mountain range' }, color: '#ffffff',
    what: { nb: 'En lang rekke med høye fjell.', en: 'A long row of high mountains.' },
    does: { nb: 'Mange fjellkjeder dannes der plater presses mot hverandre. Berget krølles og stables opp, og skorpa blir tykkere.', en: 'Many mountain ranges form where plates are pushed together. The rock is crumpled and stacked up, and the crust gets thicker.' },
    fact: { nb: 'Mount Everest i Himalaya er verdens høyeste fjell. Andesfjellene er verdens lengste fjellkjede.', en: 'Mount Everest in the Himalayas is the world’s highest mountain. The Andes are the world’s longest mountain range.' },
    src: ['snl-himalaya-geologi', 'snl-andes']
  },
  foldning: {
    name: { nb: 'Foldning', en: 'Folding' }, color: '#6b4a2a', level: 'deeper',
    what: { nb: 'Når berglag blir presset sammen fra sidene, bøyer de seg i bølger – som en duk som skyves sammen på et bord.', en: 'When rock layers are squeezed from the sides, they bend into waves – like a tablecloth pushed together on a table.' },
    does: { nb: 'Foldede berglag i fjellene viser at platene har presset mot hverandre. Geologer bruker foldene til å finne ut hvordan fjellkjeden ble dannet.', en: 'Folded rock layers in mountains show that plates have pushed against each other. Geologists use the folds to work out how the mountain range formed.' },
    src: ['snl-himalaya-geologi']
  },
  jordskjelv: {
    name: { nb: 'Jordskjelv', en: 'Earthquake' }, color: '#ffd23f',
    what: { nb: 'Rystelser i bakken når berget plutselig sprekker eller glipper langs en sprekk (forkastning).', en: 'Shaking of the ground when rock suddenly breaks or slips along a crack (fault).' },
    does: { nb: 'Nesten alle jordskjelv skjer ved plategrensene, der platene presser, drar eller gnisser mot hverandre. Et kart over jordskjelv viser derfor hvor plategrensene går.', en: 'Almost all earthquakes happen at plate boundaries, where the plates push, pull or grind against each other. A map of earthquakes therefore shows where the plate boundaries are.' },
    fact: { nb: 'Én enhet opp på skalaen betyr at seismografen gir 10 ganger større utslag – og at det frigjøres omtrent 32 ganger mer energi.', en: 'One step up the scale means the seismograph shows a 10 times bigger reading – and about 32 times more energy is released.' },
    src: ['snl-jordskjelv', 'snl-platetektonikk']
  },
  forskyvning: {
    name: { nb: 'Forskjøvet vei og elv', en: 'Offset road and river' }, color: '#4b5563',
    what: { nb: 'En vei eller en elv som er kuttet over og flyttet sidelengs der den krysser plategrensen.', en: 'A road or a river that has been cut and moved sideways where it crosses the plate boundary.' },
    does: { nb: 'Slike spor viser at platene har flyttet seg sidelengs. Jo eldre sporet er, jo lenger er det flyttet.', en: 'Traces like these show that the plates have moved sideways. The older the trace, the further it has moved.' },
    src: ['snl-san-andreas']
  },
  magnetstriper: {
    name: { nb: 'Magnetiske striper i havbunnen', en: 'Magnetic stripes in the sea floor' }, color: '#14203a', level: 'deeper',
    what: { nb: 'Når lava størkner, «fryser» små magnetiske korn fast i retningen til Jordas magnetfelt. Magnetfeltet snur seg (nord blir sør) med ujevne mellomrom.', en: 'When lava solidifies, tiny magnetic grains “freeze” in the direction of the Earth’s magnetic field. The magnetic field flips (north becomes south) at irregular intervals.' },
    does: { nb: 'På begge sider av midthavsryggen ligger det derfor striper med motsatt magnetisme – helt symmetrisk, som et speilbilde. Dette var et av de sterkeste bevisene for at havbunnen sprer seg.', en: 'On both sides of the mid-ocean ridge there are therefore stripes with opposite magnetism – perfectly symmetrical, like a mirror image. This was one of the strongest pieces of evidence that the ocean floor is spreading.' },
    src: ['snl-paleomagnetisme', 'snl-platetektonikk']
  },

  /* ---------- Mantelen som motor ---------- */
  konveksjon: {
    name: { nb: 'Konveksjonsstrømmer i mantelen', en: 'Convection currents in the mantle' }, color: '#7c2d12',
    what: { nb: '**Konveksjon** betyr at noe varmt stiger opp, og noe kaldt synker ned, slik at det blir en strøm i ring. I mantelen skjer dette svært sakte – noen centimeter i året.', en: '**Convection** means that something hot rises and something cold sinks, so a current goes round in a loop. In the mantle this happens very slowly – a few centimetres a year.' },
    does: { nb: 'Varm mantel nede ved kjernen er lettere og stiger opp. Oppe ved platene kjøles den ned, blir tyngre og synker igjen. Strømmene henger sammen med at platene beveger seg.', en: 'Hot mantle down by the core is lighter and rises. Up by the plates it cools, becomes heavier and sinks again. The currents are linked to the movement of the plates.' },
    analogy: { nb: 'Som vann i en kasserolle på platen: Det varme vannet stiger opp i midten og synker ned langs kantene.', en: 'Like water in a pan on the stove: the hot water rises in the middle and sinks along the edges.' },
    src: ['snl-platetektonikk', 'snl-mantelen', 'snl-konveksjon']
  },
  oppstromning: {
    name: { nb: 'Varm mantel stiger opp', en: 'Hot mantle rising' }, color: '#ff7a1a',
    what: { nb: 'Under midthavsryggene stiger varm mantel sakte opp mot overflaten.', en: 'Under mid-ocean ridges, hot mantle slowly rises towards the surface.' },
    does: { nb: 'Når den varme mantelen kommer nær overflaten, blir trykket lavere, og litt av den smelter. Magmaet lager ny havbunn som skyves ut til sidene.', en: 'When the hot mantle gets near the surface, the pressure drops and a little of it melts. The magma makes new ocean floor that is pushed out to the sides.' },
    src: ['snl-astenosfaren', 'snl-midthavsrygg']
  },
  nedsynking: {
    name: { nb: 'Kald plate synker ned', en: 'Cold plate sinking' }, color: '#59606b',
    what: { nb: 'Gammel havbunn er blitt kald og tung. I en subduksjonssone synker den ned i mantelen.', en: 'Old ocean floor has become cold and heavy. At a subduction zone it sinks into the mantle.' },
    does: { nb: 'Når plata synker, trekker den resten av plata etter seg. Platene kan synke helt ned til rundt 700 km dyp – det viser jordskjelvene langs dem.', en: 'As the plate sinks, it pulls the rest of the plate along behind it. Plates can sink down to about 700 km – the earthquakes along them show this.' },
    src: ['snl-platetektonikk', 'snl-jordskorpen']
  },
  ryggskyv: {
    name: { nb: 'Skyv fra ryggen', en: 'Ridge push' }, color: '#ffd166', level: 'deeper',
    what: { nb: 'Ved midthavsryggen ligger den nye havbunnen høyt. Platene glir litt «nedover» bort fra ryggen og skyves utover.', en: 'At the mid-ocean ridge the new ocean floor sits high. The plates slide slightly “downhill” away from the ridge and are pushed outwards.' },
    does: { nb: 'Dette skyvet er en av kreftene som holder platene i bevegelse. Det er tyngdekraften som står bak.', en: 'This push is one of the forces that keep the plates moving. Gravity is behind it.' },
    src: ['snl-platetektonikk']
  },
  platetrekk: {
    name: { nb: 'Trekk fra plata som synker', en: 'Slab pull' }, color: '#ffd166', level: 'deeper',
    what: { nb: 'Den kalde, tunge plata som synker ned i en subduksjonssone, drar resten av plata etter seg – som en duk som glir ned fra et bord.', en: 'The cold, heavy plate sinking at a subduction zone drags the rest of the plate after it – like a tablecloth sliding off a table.' },
    does: { nb: 'Forskere mener at dette trekket er en av de viktigste drivkreftene for platebevegelsene. Drivkreftene er likevel ikke helt avklart ennå.', en: 'Scientists think this pull is one of the most important driving forces of plate motion. The driving forces are, however, still not fully understood.' },
    analogy: { nb: 'Som en duk som henger utenfor bordkanten: Jo mer som henger utenfor, jo raskere glir hele duken ned.', en: 'Like a tablecloth hanging over the edge of a table: the more that hangs over, the faster the whole cloth slides off.' },
    src: ['snl-platetektonikk']
  },

  /* ---------- Bergartenes kretsløp ---------- */
  magmatisk: {
    name: { nb: 'Magmatiske bergarter', en: 'Igneous rocks' }, color: '#d8b4a6',
    tag: { nb: 'Også kalt størkningsbergarter', en: 'Formed from molten rock' },
    what: { nb: 'Bergarter som er dannet når **magma størkner**.', en: 'Rocks formed when **magma solidifies**.' },
    does: { nb: 'Størkner magmaet sakte dypt nede, får mineralene tid til å vokse, og bergarten blir **grovkornet** (dypbergart), som **granitt**. Størkner lavaen raskt på overflaten, blir den **finkornet** (vulkansk bergart), som **basalt**.', en: 'If the magma solidifies slowly deep down, the minerals have time to grow and the rock becomes **coarse-grained** (plutonic rock), like **granite**. If the lava solidifies quickly at the surface, it becomes **fine-grained** (volcanic rock), like **basalt**.' },
    fact: { nb: '**Larvikitt** fra Vestfold er en magmatisk bergart med blått fargespill. Den brukes som fasadestein over hele verden.', en: '**Larvikite** from Vestfold is an igneous rock with a blue shimmer. It is used as facade stone all over the world.' },
    src: ['snl-magmatiske', 'snl-dypbergarter', 'snl-larvikitt']
  },
  sediment: {
    name: { nb: 'Sedimenter (løsmasser)', en: 'Sediments' }, color: '#e8c88a',
    what: { nb: 'Løse korn av stein og mineraler – for eksempel **leire, sand og grus** – og rester av planter og dyr.', en: 'Loose grains of rock and minerals – for example **clay, sand and gravel** – and remains of plants and animals.' },
    does: { nb: 'Sedimentene fraktes av vann, vind og is og legger seg i lag, ofte på bunnen av hav og innsjøer.', en: 'The sediments are carried by water, wind and ice and settle in layers, often on the bottom of seas and lakes.' },
    src: ['snl-sedimentare', 'snl-erosjon']
  },
  sedimentar: {
    name: { nb: 'Sedimentære bergarter', en: 'Sedimentary rocks' }, color: '#c8a46e',
    tag: { nb: 'Også kalt avsetningsbergarter', en: 'Formed from layers of sediment' },
    what: { nb: 'Bergarter som er dannet når **sedimenter** blir begravd, presset sammen og «limt» sammen av mineraler.', en: 'Rocks formed when **sediments** are buried, compressed and “glued” together by minerals.' },
    does: { nb: 'Sedimentære bergarter ligger ofte i tydelige **lag**. Eksempler er **sandstein** (av sand), **skifer** (av leire) og **kalkstein** (mest av skall fra dyr).', en: 'Sedimentary rocks often lie in clear **layers**. Examples are **sandstone** (from sand), **shale** (from clay) and **limestone** (mostly from animal shells).' },
    fact: { nb: 'Nesten alle **fossiler** finnes i sedimentære bergarter.', en: 'Almost all **fossils** are found in sedimentary rocks.' },
    src: ['snl-sedimentare', 'snl-sandstein', 'snl-kalkstein', 'snl-fossiler']
  },
  metamorf: {
    name: { nb: 'Metamorfe bergarter', en: 'Metamorphic rocks' }, color: '#cfc6d9',
    tag: { nb: 'Også kalt omdannede bergarter', en: 'Changed by heat and pressure' },
    what: { nb: 'Bergarter som er **omdannet** av høy temperatur og høyt trykk dypt nede i jordskorpa – uten å smelte.', en: 'Rocks that have been **changed** by high temperature and high pressure deep in the crust – without melting.' },
    does: { nb: 'Mineralene krystalliserer på nytt, og bergarten får ofte **bånd** eller striper. **Gneis** kan dannes av granitt eller sandstein, og **marmor** dannes av kalkstein.', en: 'The minerals recrystallise, and the rock often gets **bands** or stripes. **Gneiss** can form from granite or sandstone, and **marble** forms from limestone.' },
    fact: { nb: 'Gneis er den vanligste bergarten i det norske grunnfjellet.', en: 'Gneiss is the most common rock in the Norwegian bedrock.' },
    src: ['snl-metamorfe', 'snl-gneis', 'snl-marmor']
  },
  storkning: {
    name: { nb: 'Størkning (krystallisering)', en: 'Cooling and solidifying' }, color: '#d1300f',
    what: { nb: 'Magma kjøles ned, og mineralene krystalliserer.', en: 'Magma cools down and the minerals crystallise.' },
    does: { nb: 'Slik blir magma til **magmatiske bergarter**. Jo saktere avkjøling, jo større krystaller.', en: 'This is how magma becomes **igneous rock**. The slower the cooling, the bigger the crystals.' },
    src: ['snl-magmatiske']
  },
  forvitring: {
    name: { nb: 'Forvitring og erosjon', en: 'Weathering and erosion' }, color: '#2b78b4',
    what: { nb: '**Forvitring** er at berget smuldrer opp der det står – for eksempel når vann fryser i sprekker. **Erosjon** er at bitene fraktes bort av vann, vind eller is.', en: '**Weathering** is when rock crumbles where it stands – for example when water freezes in cracks. **Erosion** is when the pieces are carried away by water, wind or ice.' },
    does: { nb: 'Alle bergarter som kommer opp til overflaten, brytes ned til **sedimenter**.', en: 'All rocks that reach the surface are broken down into **sediments**.' },
    src: ['snl-forvitring', 'snl-erosjon']
  },
  herding: {
    name: { nb: 'Avsetning og herding', en: 'Deposition and hardening' }, color: '#8a6a45',
    what: { nb: 'Sedimentene legger seg i lag. Nye lag legger seg oppå og presser de gamle sammen.', en: 'The sediments settle in layers. New layers settle on top and press the old ones together.' },
    does: { nb: 'Vann med oppløste mineraler «limer» kornene sammen. Slik blir løse sedimenter til fast **sedimentær bergart**.', en: 'Water with dissolved minerals “glues” the grains together. This is how loose sediments become solid **sedimentary rock**.' },
    src: ['snl-sedimentare', 'snl-sandstein']
  },
  omdanning: {
    name: { nb: 'Omdanning (trykk og varme)', en: 'Metamorphism (pressure and heat)' }, color: '#8a3fb0',
    what: { nb: 'Bergarter som havner dypt nede, for eksempel når plater kolliderer, utsettes for høyt trykk og høy temperatur.', en: 'Rocks that end up deep down, for example when plates collide, are exposed to high pressure and high temperature.' },
    does: { nb: 'Mineralene endrer seg uten at berget smelter. Slik blir alle typer bergarter til **metamorfe bergarter**.', en: 'The minerals change without the rock melting. This is how all types of rock become **metamorphic rocks**.' },
    src: ['snl-metamorfe']
  },
  smelting: {
    name: { nb: 'Smelting', en: 'Melting' }, color: '#d1300f',
    what: { nb: 'Hvis en bergart kommer langt nok ned, blir det så varmt at den smelter til **magma**.', en: 'If a rock gets deep enough, it becomes so hot that it melts into **magma**.' },
    does: { nb: 'Dette skjer for eksempel der en plate synker ned i mantelen. Da starter kretsløpet på nytt.', en: 'This happens for example where a plate sinks into the mantle. Then the cycle starts again.' },
    src: ['snl-magma', 'snl-platetektonikk']
  },

  /* ---------- Mineraler ---------- */
  feltspat: {
    name: { nb: 'Feltspat', en: 'Feldspar' }, color: '#e9a58c',
    what: { nb: 'Den viktigste gruppen av mineraler i jordskorpa. Feltspat er bygd opp av **silisium, oksygen og aluminium**, sammen med kalium, natrium eller kalsium.', en: 'The most important group of minerals in the Earth’s crust. Feldspar is made of **silicon, oxygen and aluminium**, together with potassium, sodium or calcium.' },
    does: { nb: 'Feltspat er ofte hvit, grå eller rosa og har blanke flater. I granitt er det ofte feltspaten som gir fargen.', en: 'Feldspar is often white, grey or pink and has shiny faces. In granite it is often the feldspar that gives the colour.' },
    fact: { nb: 'Feltspat utgjør omtrent 60 prosent av bergartene i jordskorpa. Det blå fargespillet i larvikitt kommer fra feltspat.', en: 'Feldspar makes up about 60 per cent of the rocks in the Earth’s crust. The blue shimmer in larvikite comes from feldspar.' },
    src: ['snl-feltspat', 'snl-larvikitt']
  },
  kvarts: {
    name: { nb: 'Kvarts', en: 'Quartz' }, color: '#c7ccd4',
    what: { nb: 'Et mineral som består av **silisiumdioksid (SiO₂)**: grunnstoffene silisium og oksygen.', en: 'A mineral made of **silicon dioxide (SiO₂)**: the elements silicon and oxygen.' },
    does: { nb: 'Kvarts er gjennomsiktig eller gråhvit og så hard at den kan ripe glass. Den brytes nesten ikke ned, og derfor består mye sand av kvartskorn.', en: 'Quartz is transparent or greyish white and so hard that it can scratch glass. It hardly breaks down, so a lot of sand is made of quartz grains.' },
    fact: { nb: 'Kvarts er det nest vanligste mineralet i kontinentalskorpa, etter feltspat. Fine krystaller kalles bergkrystall.', en: 'Quartz is the second most common mineral in continental crust, after feldspar. Fine crystals are called rock crystal.' },
    src: ['snl-kvarts', 'snl-mineraler']
  },
  glimmer: {
    name: { nb: 'Glimmer', en: 'Mica' }, color: '#1f2328',
    what: { nb: 'En gruppe mineraler som lett kan spaltes i **tynne, blanke flak**. Mørk glimmer heter **biotitt**, lys glimmer heter **muskovitt**.', en: 'A group of minerals that easily split into **thin, shiny flakes**. Dark mica is called **biotite**, light mica is called **muscovite**.' },
    does: { nb: 'Glimmer er mykt (hardhet 2–3). I granitt ser du den som små, svarte eller sølvblanke flak.', en: 'Mica is soft (hardness 2–3). In granite you see it as small black or silvery flakes.' },
    fact: { nb: 'Lys glimmer har et gammelt norsk navn: **kråkesølv**.', en: 'Light mica has an old Norwegian name: **kråkesølv** (“crow’s silver”).' },
    src: ['snl-glimmer']
  },
  atomer: {
    name: { nb: 'Hva mineraler er bygd opp av', en: 'What minerals are made of' }, color: '#1f4fc4', level: 'deeper',
    what: { nb: 'Et mineral er et **fast stoff** som er bygd opp av atomer i et regelmessig mønster – en **krystall**. Kvarts er bygd av silisiumatomer og oksygenatomer.', en: 'A mineral is a **solid substance** built of atoms in a regular pattern – a **crystal**. Quartz is built of silicon atoms and oxygen atoms.' },
    does: { nb: 'Mønsteret bestemmer egenskapene til mineralet: form, hardhet og hvordan det spaltes. De aller fleste mineraler i jordskorpa er **silikater**, med silisium og oksygen.', en: 'The pattern decides the mineral’s properties: shape, hardness and how it splits. Most minerals in the crust are **silicates**, with silicon and oxygen.' },
    fact: { nb: 'Oksygen og silisium er de to vanligste grunnstoffene i jordskorpa.', en: 'Oxygen and silicon are the two most common elements in the Earth’s crust.' },
    src: ['snl-krystall', 'snl-mineraler']
  },

  /* ---------- Wegeners bevis ---------- */
  kystlinjer: {
    name: { nb: 'Kystlinjer som passer sammen', en: 'Coastlines that fit together' }, color: '#c42b4f',
    what: { nb: 'Kysten av Sør-Amerika og kysten av Afrika passer sammen nesten som brikker i et puslespill.', en: 'The coast of South America and the coast of Africa fit together almost like puzzle pieces.' },
    does: { nb: 'Dette var det første Wegener la merke til. Det passer enda bedre hvis du bruker kanten av kontinentalsokkelen, ikke selve kystlinjen.', en: 'This was the first thing Wegener noticed. The fit is even better if you use the edge of the continental shelf, not the coastline itself.' },
    src: ['snl-kontinentaldrift', 'snl-wegener']
  },
  mesosaurus: {
    name: { nb: 'Fossiler av Mesosaurus', en: 'Fossils of Mesosaurus' }, color: '#1f4fc4',
    what: { nb: 'Mesosaurus var et 30–100 cm langt krypdyr med spisse tenner. Det levde i sjøer og elver i permtiden, for mellom 300 og 250 millioner år siden.', en: 'Mesosaurus was a reptile 30–100 cm long with sharp teeth. It lived in lakes and rivers in the Permian, between 300 and 250 million years ago.' },
    does: { nb: 'Fossilene er funnet både i Sør-Amerika og i Afrika. Et lite dyr som levde i ferskvann, kunne ikke svømme over et stort hav. Kontinentene må ha hengt sammen.', en: 'The fossils have been found both in South America and in Africa. A small animal living in fresh water could not swim across a big ocean. The continents must have been joined.' },
    src: ['snl-mesosaurer']
  },
  glossopteris: {
    name: { nb: 'Fossiler av Glossopteris', en: 'Fossils of Glossopteris' }, color: '#2f9d4f',
    what: { nb: 'Glossopteris var et tre som levde for 300–250 millioner år siden.', en: 'Glossopteris was a tree that lived 300–250 million years ago.' },
    does: { nb: 'Fossilene finnes i India, Australia, Sør-Afrika, Sør-Amerika og Antarktis. Frøene var for store til å spres over hav. Disse områdene må ha vært ett sammenhengende kontinent: **Gondwana**.', en: 'The fossils are found in India, Australia, South Africa, South America and Antarctica. The seeds were too big to spread across oceans. These areas must have been one connected continent: **Gondwana**.' },
    fact: { nb: 'At det har vokst trær i Antarktis, viser også at kontinentet en gang lå et varmere sted.', en: 'The fact that trees grew in Antarctica also shows that the continent was once in a warmer place.' },
    src: ['snl-glossopteris', 'snl-gondwana']
  },
  lystrosaurus: {
    name: { nb: 'Fossiler av Lystrosaurus', en: 'Fossils of Lystrosaurus' }, color: '#c9a227',
    what: { nb: 'Lystrosaurus var et omtrent én meter langt landdyr som levde i triastiden, for litt over 250 millioner år siden.', en: 'Lystrosaurus was a land animal about one metre long that lived in the Triassic, just over 250 million years ago.' },
    does: { nb: 'Fossilene finnes blant annet i Sør-Afrika, India og Antarktis. Funnene i Antarktis viser at også dette kontinentet var en del av Gondwana – og at det lå mye lenger nord enn i dag.', en: 'The fossils are found in South Africa, India and Antarctica, among other places. The finds in Antarctica show that this continent was also part of Gondwana – and that it lay much further north than today.' },
    src: ['snl-lystrosaurus']
  },
  isspor: {
    name: { nb: 'Spor etter isbreer', en: 'Traces of glaciers' }, color: '#5aa0c8',
    what: { nb: 'Skuringsstriper og avsetninger fra isbreer som er rundt 300 millioner år gamle.', en: 'Scratches and deposits from glaciers about 300 million years old.' },
    does: { nb: 'Slike isspor finnes i dag i varme områder som India, Afrika, Sør-Amerika og Australia. Når kontinentene settes sammen, ligger sporene rundt sørpolen – der det var en stor iskappe på Gondwana.', en: 'Such glacial traces are found today in warm areas like India, Africa, South America and Australia. When the continents are put together, the traces lie around the South Pole – where there was a large ice sheet on Gondwana.' },
    src: ['snl-gondwana']
  },
  fjellkjede_bevis: {
    name: { nb: 'Fjellkjeder som fortsetter', en: 'Mountain ranges that continue' }, color: '#8a3fb0',
    what: { nb: 'Den kaledonske fjellkjeden i Norge og Skottland har de samme bergartene og den samme alderen som fjell på Grønland og i Nord-Amerika.', en: 'The Caledonian mountains in Norway and Scotland have the same rocks and the same age as mountains in Greenland and North America.' },
    does: { nb: 'Når kontinentene settes sammen, blir fjellene én sammenhengende fjellkjede. De ble dannet da Norge og Grønland kolliderte for rundt 420 millioner år siden.', en: 'When the continents are put together, the mountains become one continuous range. They formed when Norway and Greenland collided about 420 million years ago.' },
    src: ['snl-kaledonsk', 'snl-platetektonikk']
  },

  /* ---------- Hvordan vet geologene det? ---------- */
  feltarbeid: {
    name: { nb: 'Feltarbeid', en: 'Fieldwork' }, color: '#1f4fc4',
    what: { nb: 'Geologer går ut i naturen og undersøker berget med lupe, hammer, kompass og notatbok. De lager **geologiske kart** over hvilke bergarter som finnes hvor.', en: 'Geologists go out into nature and examine the rock with a magnifier, hammer, compass and notebook. They make **geological maps** of which rocks are where.' },
    does: { nb: 'De **observerer**, tar prøver og stiller spørsmål: Hvilken bergart er dette? Hvordan ble den dannet? Hvorfor er lagene bøyd?', en: 'They **observe**, take samples and ask questions: Which rock is this? How did it form? Why are the layers bent?' },
    fact: { nb: 'Geologer jobber blant annet med å finne olje, gass og metaller, sjekke grunnen før bygging, og forske på Jordas historie.', en: 'Geologists work, among other things, on finding oil, gas and metals, checking the ground before building, and researching the Earth’s history.' },
    src: ['snl-geolog', 'snl-geologi']
  },
  lagdeling: {
    name: { nb: 'Lag i berget', en: 'Layers in the rock' }, color: '#b8875a',
    what: { nb: 'Sedimentære bergarter er avsatt lag for lag, som sider i en bok.', en: 'Sedimentary rocks are laid down layer by layer, like pages in a book.' },
    does: { nb: 'Hvis lagene ikke er snudd opp ned, er de **nederste lagene eldst** og de øverste yngst. Slik kan geologer lese rekkefølgen i Jordas historie.', en: 'If the layers have not been turned upside down, the **lowest layers are the oldest** and the top ones the youngest. This lets geologists read the order of the Earth’s history.' },
    src: ['snl-sedimentare', 'snl-geologi']
  },
  fossil: {
    name: { nb: 'Fossiler', en: 'Fossils' }, color: '#4b3621',
    what: { nb: 'Rester eller spor etter planter og dyr som er bevart i berget – oftest harde deler som skall, bein og tenner.', en: 'Remains or traces of plants and animals preserved in rock – usually hard parts like shells, bones and teeth.' },
    does: { nb: 'Fossiler forteller hvor gammelt et lag er, og hvordan miljøet var. Et fossil av en havmusling høyt oppe i et fjell viser at berget en gang lå på havbunnen.', en: 'Fossils tell how old a layer is and what the environment was like. A fossil of a sea shell high up in a mountain shows that the rock was once on the sea floor.' },
    src: ['snl-fossiler']
  },
  datering: {
    name: { nb: 'Datering i laboratoriet', en: 'Dating in the laboratory' }, color: '#ffd23f',
    what: { nb: 'Noen grunnstoffer i bergartene er **radioaktive** og omdannes sakte til andre stoffer med en kjent fart.', en: 'Some elements in rocks are **radioactive** and slowly change into other substances at a known rate.' },
    does: { nb: 'Ved å måle hvor mye som er omdannet, kan forskere regne ut hvor gammel en bergart er. Dette kalles **radiometrisk datering**. Slik vet vi at Jorda er rundt 4,6 milliarder år gammel.', en: 'By measuring how much has changed, scientists can calculate how old a rock is. This is called **radiometric dating**. That is how we know the Earth is about 4.6 billion years old.' },
    analogy: { nb: 'Som et timeglass: Hvis du vet hvor fort sanden renner, kan du regne ut hvor lenge det har gått.', en: 'Like an hourglass: if you know how fast the sand runs, you can work out how much time has passed.' },
    src: ['snl-radiometrisk', 'snl-jordens-geologi']
  },
  seismograf: {
    name: { nb: 'Seismograf (jordskjelvmåler)', en: 'Seismograph (earthquake meter)' }, color: '#c42b4f',
    what: { nb: 'Et instrument som måler rystelser fra jordskjelv, også langt unna.', en: 'An instrument that measures shaking from earthquakes, even far away.' },
    does: { nb: 'Ingen har boret seg ned til mantelen. Men jordskjelvbølger går gjennom hele Jorda og endrer fart og retning når de treffer nye lag. Én type bølger (S-bølger) kan ikke gå gjennom væske – derfor vet vi at den ytre kjernen er flytende.', en: 'Nobody has drilled down to the mantle. But earthquake waves travel through the whole Earth and change speed and direction when they hit new layers. One type of wave (S waves) cannot travel through liquid – that is how we know the outer core is liquid.' },
    analogy: { nb: 'Som å banke på en vegg for å høre om den er hul: Lyden forteller hva som er inni.', en: 'Like knocking on a wall to hear if it is hollow: the sound tells you what is inside.' },
    src: ['snl-seismisk-bolge', 'snl-mantelen']
  },
  boring: {
    name: { nb: 'Boring', en: 'Drilling' }, color: '#4b5563',
    what: { nb: 'Geologer borer hull og henter opp lange stavformede prøver av berget (borekjerner), både på land og på havbunnen.', en: 'Geologists drill holes and bring up long rod-shaped samples of the rock (drill cores), both on land and on the sea floor.' },
    does: { nb: 'Boreprøver fra havbunnen viste at havbunnen blir **eldre jo lenger unna midthavsryggen** du kommer – et viktig bevis for platetektonikken.', en: 'Drill samples from the sea floor showed that the ocean floor gets **older the further from the mid-ocean ridge** you go – important evidence for plate tectonics.' },
    src: ['snl-platetektonikk']
  },
  satellitt: {
    name: { nb: 'Satellittmålinger', en: 'Satellite measurements' }, color: '#1f4fc4',
    what: { nb: 'Med satellitter kan forskere måle nøyaktig hvor et punkt på bakken er – på centimeteren.', en: 'Using satellites, scientists can measure exactly where a point on the ground is – to the centimetre.' },
    does: { nb: 'Målingene viser at platene faktisk beveger seg i dag, med noen centimeter i året – akkurat slik teorien om platetektonikk sier.', en: 'The measurements show that the plates really are moving today, a few centimetres a year – exactly as the theory of plate tectonics says.' },
    src: ['snl-platetektonikk']
  }
};
