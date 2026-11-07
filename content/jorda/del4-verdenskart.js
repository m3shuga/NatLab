/* =====================================================================
   Historien om Jorda – DEL 04: VERDENSKARTET I ENDRING
   ===================================================================== */
NatLab.topic('jorda').organisms.verdenskart = {
  code: '04',
  title: { nb: 'Verdenskartet i endring', en: 'The changing world map' },
  sub: { nb: 'Hvordan mantelen setter platene i bevegelse – fra Pangea til i dag.', en: 'How the mantle sets the plates in motion – from Pangaea to today.' },
  lead: {
    nb: 'Modellen viser et snitt gjennom mantelen. Varm stein stiger sakte opp, kald plate synker ned – og platene på toppen beveger seg. Klikk på delene for å lære hva du ser. Prøv også «Kartet gjennom tid».',
    en: 'The model shows a slice through the mantle. Hot rock slowly rises, a cold plate sinks – and the plates on top move. Click on the parts to learn what you see. Also try “The map through time”.'
  },
  art: 'konveksjon',
  diagrams: ['konveksjon'],
  modelNames: { konveksjon: { nb: 'Mantelen i bevegelse', en: 'The moving mantle' } },
  intro: { nb: 'Animasjonen går mange millioner ganger fortere enn i virkeligheten. Du kan sette den på pause med knappen over tegningen. Velg «Gå dypere» for å se de to kreftene som drar og skyver platene.', en: 'The animation runs many millions of times faster than in reality. You can pause it with the button above the drawing. Choose “Go deeper” to see the two forces that pull and push the plates.' },
  practiceHref: '#jorda-ov-merk-konveksjon',
  extraTabs: [{ href: '#jorda-tidskart', icon: 'planet', label: { nb: 'Kartet gjennom tid', en: 'The map through time' } }],

  page: {
    goals: [
      { nb: 'forklare hva konveksjon er, og hvordan strømmer i mantelen henger sammen med platebevegelsene', en: 'explain what convection is, and how currents in the mantle are linked to plate movements' },
      { nb: 'beskrive hvordan verdenskartet har endret seg fra Pangea til i dag', en: 'describe how the world map has changed from Pangaea to today' },
      { nb: 'forklare hva en modell av mantelen viser, og hva den ikke viser', en: 'explain what a model of the mantle shows, and what it does not show' }
    ],
    keypoints: [
      { nb: 'Varm mantel er lettere og **stiger opp**. Kald plate er tyngre og **synker ned**. Det kalles **konveksjon**.', en: 'Hot mantle is lighter and **rises**. A cold plate is heavier and **sinks**. This is called **convection**.' },
      { nb: '**Tyngdekraften** er drivkraften: Platen som synker, **trekker** resten av platen etter seg, og ved ryggen **skyves** platene ut.', en: '**Gravity** is the driving force: the sinking plate **pulls** the rest of the plate after it, and at the ridge the plates are **pushed** outwards.' },
      { nb: 'For 300–200 millioner år siden var nesten alt land samlet i **Pangea**.', en: '300–200 million years ago almost all land was joined in **Pangaea**.' },
      { nb: 'Pangea revnet, og kontinentene har flyttet seg til der de er i dag. De **flytter seg fortsatt**.', en: 'Pangaea split, and the continents have moved to where they are today. They **are still moving**.' }
    ],
    sections: [
      {
        id: 'motor', title: { nb: 'Hva får platene til å bevege seg?', en: 'What makes the plates move?' },
        blocks: [
          { p: { nb: 'Inni Jorda er det svært varmt, og varmen siver sakte ut mot overflaten. Mantelen er fast stein, men så varm at den kan flyte svært sakte over millioner av år.', en: 'Inside the Earth it is very hot, and the heat slowly leaks out towards the surface. The mantle is solid rock, but so hot that it can flow very slowly over millions of years.' }, src: ['snl-mantelen'] },
          { p: { nb: '**[[konveksjon|Konveksjon]]** betyr at noe varmt stiger opp og noe kaldt synker ned, slik at det blir en strøm i ring. I mantelen stiger varm og lett stein opp, mens kald og tung stein synker ned. Disse strømmene henger sammen med platebevegelsene.', en: '**[[konveksjon|Convection]]** means that something hot rises and something cold sinks, so a current goes round in a loop. In the mantle, hot and light rock rises while cold and heavy rock sinks. These currents are linked to the movement of the plates.' }, src: ['snl-platetektonikk', 'snl-konveksjon'] },
          { diagram: 'konveksjon' },
          { p: { nb: 'Ifølge forskerne er **tyngdekraften** den viktigste drivkraften. Når gammel havbunn er blitt kald og tung, synker den ned i en subduksjonssone – og **trekker** resten av platen etter seg. Ved midthavsryggen ligger den nye havbunnen høyt, og platene **skyves** utover.', en: 'According to scientists, **gravity** is the most important driving force. When old ocean floor has become cold and heavy, it sinks at a subduction zone – and **pulls** the rest of the plate after it. At the mid-ocean ridge the new ocean floor sits high, and the plates are **pushed** outwards.' }, src: ['snl-platetektonikk', 'snl-jordskorpen'] },
          { model: { nb: 'Modellen er sterkt forenklet: Lagene er ikke i riktig målestokk, strømmene i mantelen er mye mer kompliserte enn to pene ringer, og bevegelsen går mange millioner ganger fortere enn i virkeligheten. Forskerne er heller ikke helt enige om hvor mye hver kraft betyr – det forskes fortsatt på dette.', en: 'The model is very simplified: the layers are not to scale, the currents in the mantle are much more complicated than two neat loops, and the movement is many millions of times faster than in reality. Scientists also do not fully agree on how much each force matters – this is still being researched.' }, src: ['snl-platetektonikk'] },
          { check: {
            q: { nb: 'Hvorfor stiger varm mantel opp?', en: 'Why does hot mantle rise?' },
            options: [{ nb: 'Fordi den er flytende magma', en: 'Because it is liquid magma' }, { nb: 'Fordi varm stein har lavere tetthet (er lettere) enn kald stein', en: 'Because hot rock has a lower density (is lighter) than cold rock' }, { nb: 'Fordi månen trekker den opp', en: 'Because the moon pulls it up' }],
            answer: 1,
            explain: { nb: 'Når stein varmes opp, utvider den seg litt og blir lettere. Derfor stiger den, mens kaldere og tyngre stein synker.', en: 'When rock is heated, it expands a little and becomes lighter. That is why it rises, while colder and heavier rock sinks.' }
          } },
          { explain: { nb: 'Forklar med egne ord hvordan en gryte med vann på komfyren kan være en modell av mantelen. Hva er likt, og hva er forskjellig?', en: 'Explain in your own words how a pan of water on the stove can be a model of the mantle. What is similar, and what is different?' } }
        ]
      },
      {
        id: 'fart', title: { nb: 'Hvor fort går det?', en: 'How fast does it go?' },
        blocks: [
          { p: { nb: 'Platene beveger seg **noen centimeter i året**. Atlanterhavet blir noen få centimeter bredere hvert år. Det høres lite ut – men på 100 millioner år blir det tusenvis av kilometer.', en: 'The plates move **a few centimetres a year**. The Atlantic gets a few centimetres wider each year. That sounds like very little – but in 100 million years it adds up to thousands of kilometres.' }, src: ['snl-platetektonikk', 'snl-atlanterhavet'] },
          { equation: { name: { nb: 'Regn med platefart', en: 'Calculating plate speed' }, words: { nb: '3 cm per år × 100 000 000 år = 300 000 000 cm = 3000 km', en: '3 cm per year × 100,000,000 years = 300,000,000 cm = 3000 km' } } },
          { p: { nb: 'India var en av de raskeste. På vei nordover mot Asia beveget det seg med rundt 17–18 cm i året. I dag presser India fortsatt nordover med ca. 4 cm i året.', en: 'India was one of the fastest. On its way north towards Asia it moved at about 17–18 cm a year. Today India is still pushing north at about 4 cm a year.' }, src: ['snl-himalaya-geologi'] },
          { fact: { nb: 'Med satellitter kan forskerne måle at platene flytter seg i dag – på centimeteren.', en: 'Using satellites, scientists can measure that the plates are moving today – to the centimetre.' }, src: ['snl-platetektonikk'] }
        ]
      },
      {
        id: 'pangea', title: { nb: 'Fra Pangea til i dag', en: 'From Pangaea to today' },
        blocks: [
          { p: { nb: 'For omkring 300–200 millioner år siden var nesten alt land samlet i ett **superkontinent**: **[[pangea|Pangea]]**. Rundt lå ett stort hav, **Panthalassa**. Den nordlige delen av Pangea kalles **Laurasia**, og den sørlige delen **Gondwana**.', en: 'About 300–200 million years ago almost all land was joined in one **supercontinent**: **[[pangea|Pangaea]]**. Around it lay one big ocean, **Panthalassa**. The northern part of Pangaea is called **Laurasia**, and the southern part **Gondwana**.' }, src: ['snl-pangea', 'snl-gondwana', 'snl-laurasia'] },
          { list: [
            { nb: 'For 170–180 millioner år siden begynte Pangea å revne, og **Atlanterhavet** ble til mellom Nord-Amerika og Afrika.', en: '170–180 million years ago Pangaea began to split, and the **Atlantic** formed between North America and Africa.' },
            { nb: 'For rundt 140 millioner år siden begynte **Sør-Amerika og Afrika** å bevege seg fra hverandre.', en: 'About 140 million years ago **South America and Africa** began to move apart.' },
            { nb: 'India, Madagaskar, Antarktis og Australia ble skilt fra hverandre, og **India** reiste nordover.', en: 'India, Madagascar, Antarctica and Australia separated, and **India** travelled north.' },
            { nb: 'For rundt 55 millioner år siden åpnet havet seg mellom **Grønland og Norge**.', en: 'About 55 million years ago the ocean opened between **Greenland and Norway**.' },
            { nb: 'For rundt 50 millioner år siden kolliderte India med Asia, og **Himalaya** ble presset opp.', en: 'About 50 million years ago India collided with Asia, and the **Himalayas** were pushed up.' }
          ], src: ['snl-gondwana', 'snl-norges-geologi', 'snl-himalaya-geologi'] },
          { link: { href: '#jorda-tidskart', icon: 'planet', title: { nb: 'Åpne «Kartet gjennom tid»', en: 'Open “The map through time”' }, text: { nb: 'Spol tilbake 250 millioner år og se kontinentene flytte seg. Slå på fossilene og se hvordan de passer sammen.', en: 'Rewind 250 million years and watch the continents move. Turn on the fossils and see how they fit together.' } } },
          { p: { nb: 'Platene beveger seg fortsatt. Forskerne kan regne ut hvordan Jorda vil se ut i framtiden: Om 20–30 millioner år vil Australia kollidere med Sørøst-Asia, og Los Angeles vil gli nordover forbi San Francisco.', en: 'The plates are still moving. Scientists can calculate what the Earth will look like in the future: in 20–30 million years Australia will collide with South-East Asia, and Los Angeles will slide north past San Francisco.' }, src: ['snl-platetektonikk'] },
          { deeper: {
            title: { nb: 'Pangea var ikke det første superkontinentet', en: 'Pangaea was not the first supercontinent' },
            blocks: [
              { p: { nb: 'Kontinentene har samlet seg og delt seg opp mange ganger. Gondwana ble for eksempel dannet allerede for 600–500 millioner år siden, da mange mindre kontinenter kolliderte. Det kolliderte senere med kontinentene i nord og ble en del av Pangea.', en: 'The continents have joined and split many times. Gondwana, for example, had already formed 600–500 million years ago, when many smaller continents collided. It later collided with the continents in the north and became part of Pangaea.' }, src: ['snl-gondwana'] },
              { p: { nb: 'Havbunnen er stort sett yngre enn 200 millioner år, fordi gammel havbunn hele tiden forsvinner ned i mantelen. Kontinentene kan derimot bli flere milliarder år gamle.', en: 'The ocean floor is mostly younger than 200 million years, because old ocean floor keeps disappearing into the mantle. Continents, on the other hand, can be billions of years old.' }, src: ['snl-jordskorpen'] }
            ]
          } }
        ]
      }
    ],
    resources: ['yt-drift', 'yt-minuteearth', 'ndla-jordskorpa', 'snl-pangea', 'snl-gondwana', 'snl-platetektonikk']
  }
};
