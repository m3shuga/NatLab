/* =====================================================================
   Historien om Jorda – DEL 05: MINERALER OG BERGARTER
   ===================================================================== */
NatLab.topic('jorda').organisms.bergarter = {
  code: '05',
  title: { nb: 'Mineraler og bergarter', en: 'Minerals and rocks' },
  sub: { nb: 'Hva stein er laget av – og hvordan bergarter blir til og endrer seg.', en: 'What rock is made of – and how rocks form and change.' },
  lead: {
    nb: 'Alle bergarter er bygd av mineraler. Se granitt under lupen og finn de tre mineralene. Bytt så til «Bergartenes kretsløp» og se hvordan en bergart kan bli til en annen.',
    en: 'All rocks are made of minerals. Look at granite under the magnifier and find the three minerals. Then switch to “The rock cycle” and see how one rock can turn into another.'
  },
  art: 'kretslop',
  diagrams: ['granitt', 'kretslop'],
  modelNames: { granitt: { nb: 'Granitt under lupen', en: 'Granite under the magnifier' }, kretslop: { nb: 'Bergartenes kretsløp', en: 'The rock cycle' } },
  intro: { nb: 'Velg «Gå dypere» for å se hvilke atomer kvarts er bygd av.', en: 'Choose “Go deeper” to see which atoms quartz is made of.' },
  practiceHref: '#jorda-ov-grupper-bergarter',
  extraTabs: [{ href: '#jorda-ov-merk-kretslop', icon: 'target', label: { nb: 'Merk kretsløpet', en: 'Label the cycle' } }],

  page: {
    goals: [
      { nb: 'forklare hva et mineral er, og hva mineraler er bygd opp av', en: 'explain what a mineral is, and what minerals are made of' },
      { nb: 'gi eksempler på vanlige mineraler: kvarts, feltspat og glimmer', en: 'give examples of common minerals: quartz, feldspar and mica' },
      { nb: 'forklare hvordan magmatiske, sedimentære og metamorfe bergarter dannes', en: 'explain how igneous, sedimentary and metamorphic rocks form' },
      { nb: 'beskrive bergartenes kretsløp', en: 'describe the rock cycle' }
    ],
    keypoints: [
      { nb: 'Et **mineral** er et naturlig, fast stoff med atomer ordnet i et regelmessig mønster (en krystall).', en: 'A **mineral** is a natural solid substance with atoms arranged in a regular pattern (a crystal).' },
      { nb: 'De vanligste mineralene i jordskorpa er **feltspat** og **kvarts**. De er bygd av blant annet **silisium og oksygen**.', en: 'The most common minerals in the crust are **feldspar** and **quartz**. They are made of, among other things, **silicon and oxygen**.' },
      { nb: 'En **bergart** består vanligvis av flere mineraler. Granitt består av kvarts, feltspat og glimmer.', en: 'A **rock** usually consists of several minerals. Granite consists of quartz, feldspar and mica.' },
      { nb: '**Magmatiske** bergarter dannes av størknet magma, **sedimentære** av sammenpressede sedimenter, og **metamorfe** av trykk og varme.', en: '**Igneous** rocks form from solidified magma, **sedimentary** from compressed sediments, and **metamorphic** from pressure and heat.' },
      { nb: 'I **bergartenes kretsløp** kan alle bergarter bli til nye bergarter.', en: 'In **the rock cycle** every rock can become a new rock.' }
    ],
    sections: [
      {
        id: 'mineraler', title: { nb: 'Hva er et mineral?', en: 'What is a mineral?' },
        blocks: [
          { p: { nb: 'Et **[[mineral]]** er et grunnstoff eller en kjemisk forbindelse som finnes naturlig, og som har bestemte egenskaper – for eksempel farge, glans, hardhet og krystallform. Nesten alle mineraler er **faste stoffer** der atomene ligger i et regelmessig mønster. Et slikt mønster kalles en **krystall**.', en: 'A **[[mineral]]** is a naturally occurring element or chemical compound with particular properties – for example colour, lustre, hardness and crystal shape. Almost all minerals are **solids** in which the atoms are arranged in a regular pattern. Such a pattern is called a **crystal**.' }, src: ['snl-mineraler', 'snl-krystall'] },
          { p: { nb: 'Det finnes mange tusen mineraler, men noen få er svært vanlige. De vanligste er **silikater**, som er bygd av grunnstoffene **silisium og oksygen** sammen med andre grunnstoffer.', en: 'There are thousands of minerals, but a few are very common. The most common are **silicates**, made of the elements **silicon and oxygen** together with other elements.' }, src: ['snl-mineraler'] },
          { photos: [
            { photo: 'kvarts', caption: { nb: 'Kvartskrystaller (bergkrystall). Kvarts er bygd av silisium og oksygen (SiO₂).', en: 'Quartz crystals (rock crystal). Quartz is made of silicon and oxygen (SiO₂).' } },
            { photo: 'feltspat', caption: { nb: 'Feltspat er den vanligste mineralgruppen i jordskorpa.', en: 'Feldspar is the most common mineral group in the Earth’s crust.' } }
          ] },
          { table: {
            head: [{ nb: 'Mineral', en: 'Mineral' }, { nb: 'Bygd av', en: 'Made of' }, { nb: 'Kjennetegn', en: 'Features' }],
            rows: [
              [{ nb: '**Kvarts**', en: '**Quartz**' }, { nb: 'Silisium og oksygen (SiO₂)', en: 'Silicon and oxygen (SiO₂)' }, { nb: 'Gjennomsiktig til gråhvit, svært hard (risser glass), sekskantede krystaller', en: 'Transparent to greyish white, very hard (scratches glass), six-sided crystals' }],
              [{ nb: '**Feltspat**', en: '**Feldspar**' }, { nb: 'Silisium, oksygen, aluminium og kalium, natrium eller kalsium', en: 'Silicon, oxygen, aluminium and potassium, sodium or calcium' }, { nb: 'Hvit, grå eller rosa, blanke flater, hardhet 6', en: 'White, grey or pink, shiny faces, hardness 6' }],
              [{ nb: '**Glimmer**', en: '**Mica**' }, { nb: 'Silisium, oksygen, aluminium og andre metaller', en: 'Silicon, oxygen, aluminium and other metals' }, { nb: 'Tynne, blanke flak, myk (hardhet 2–3). Mørk = biotitt, lys = muskovitt', en: 'Thin, shiny flakes, soft (hardness 2–3). Dark = biotite, light = muscovite' }]
            ],
            src: ['snl-kvarts', 'snl-feltspat', 'snl-glimmer']
          } },
          { fact: { nb: 'Feltspat utgjør omtrent 60 prosent av bergartene i jordskorpa, og kvarts rundt 28 prosent av kontinentalskorpa.', en: 'Feldspar makes up about 60 per cent of the rocks in the crust, and quartz about 28 per cent of the continental crust.' }, src: ['snl-feltspat', 'snl-kvarts'] }
        ]
      },
      {
        id: 'bergart', title: { nb: 'Hva er en bergart?', en: 'What is a rock?' },
        blocks: [
          { p: { nb: 'En **[[bergart]]** er det faste materialet jordskorpa er bygd av. De fleste bergarter består av **flere mineraler** blandet sammen. Granitt er et godt eksempel: Ser du på granitt med lupe, ser du lyse korn av kvarts, rosa eller hvite korn av feltspat og svarte flak av glimmer.', en: 'A **[[bergart|rock]]** is the solid material the Earth’s crust is made of. Most rocks consist of **several minerals** mixed together. Granite is a good example: if you look at granite with a magnifier, you see pale grains of quartz, pink or white grains of feldspar and black flakes of mica.' }, src: ['snl-bergarter', 'snl-granitt'] },
          { diagram: 'granitt' },
          { p: { nb: 'Geologene deler bergartene i **tre hovedtyper** etter hvordan de er dannet.', en: 'Geologists divide rocks into **three main types** according to how they formed.' }, src: ['snl-bergarter'] }
        ]
      },
      {
        id: 'typer', title: { nb: 'Tre typer bergarter', en: 'Three types of rocks' },
        blocks: [
          { h3: { nb: '1. Magmatiske bergarter (størkningsbergarter)', en: '1. Igneous rocks' } },
          { p: { nb: '**[[magmatisk|Magmatiske bergarter]]** dannes når [[magma]] størkner. Hvis magmaet størkner **sakte, dypt nede** i jordskorpa, får krystallene tid til å vokse seg store. Da blir bergarten **grovkornet** – en **dypbergart**, som granitt og larvikitt. Hvis lavaen størkner **raskt på overflaten**, blir krystallene små, og bergarten blir **finkornet** – en **vulkansk bergart**, som basalt.', en: '**[[magmatisk|Igneous rocks]]** form when [[magma]] solidifies. If the magma solidifies **slowly, deep down** in the crust, the crystals have time to grow large. The rock then becomes **coarse-grained** – a **plutonic rock**, like granite and larvikite. If lava solidifies **quickly at the surface**, the crystals are small and the rock becomes **fine-grained** – a **volcanic rock**, like basalt.' }, src: ['snl-magmatiske', 'snl-dypbergarter', 'snl-basalt'] },
          { photos: [
            { photo: 'larvikitt', caption: { nb: 'Larvikitt fra Larvik i Vestfold: en grovkornet dypbergart med blått fargespill i feltspaten.', en: 'Larvikite from Larvik in Vestfold: a coarse-grained plutonic rock with a blue shimmer in the feldspar.' } },
            { photo: 'basalt', caption: { nb: 'Basalt fra et vulkanutbrudd på Island: en mørk og finkornet vulkansk bergart.', en: 'Basalt from a volcanic eruption in Iceland: a dark, fine-grained volcanic rock.' } }
          ] },
          { h3: { nb: '2. Sedimentære bergarter (avsetningsbergarter)', en: '2. Sedimentary rocks' } },
          { p: { nb: 'Vær, vind, vann og is bryter ned bergartene til små biter (**forvitring**) og frakter dem bort (**erosjon**). Bitene – **sedimenter** som leire, sand og grus – legger seg i lag, ofte på bunnen av hav og innsjøer. Over lang tid blir lagene begravd, presset sammen og «limt» sammen til **[[sedimentaer|sedimentære bergarter]]**, som sandstein, skifer og kalkstein.', en: 'Weather, wind, water and ice break rocks into small pieces (**weathering**) and carry them away (**erosion**). The pieces – **sediments** like clay, sand and gravel – settle in layers, often on the bottom of seas and lakes. Over a long time the layers are buried, compressed and “glued” together into **[[sedimentaer|sedimentary rocks]]**, like sandstone, shale and limestone.' }, src: ['snl-sedimentare', 'snl-forvitring', 'snl-erosjon'] },
          { p: { nb: 'Sedimentære bergarter har ofte tydelige **lag**, og det er her vi finner nesten alle **fossiler**. Kalkstein er for det meste laget av skall fra dyr.', en: 'Sedimentary rocks often have clear **layers**, and this is where we find almost all **fossils**. Limestone is mostly made of animal shells.' }, src: ['snl-fossiler', 'snl-kalkstein'] },
          { h3: { nb: '3. Metamorfe bergarter (omdannede bergarter)', en: '3. Metamorphic rocks' } },
          { p: { nb: 'Når bergarter havner dypt nede i jordskorpa – for eksempel når to plater kolliderer – blir de utsatt for **høyt trykk og høy temperatur**. Mineralene endrer seg uten at berget smelter. Da blir det en **[[metamorf|metamorf bergart]]**. Kalkstein blir til **marmor**, og granitt eller sandstein kan bli til **gneis**.', en: 'When rocks end up deep in the crust – for example when two plates collide – they are exposed to **high pressure and high temperature**. The minerals change without the rock melting. It then becomes a **[[metamorf|metamorphic rock]]**. Limestone becomes **marble**, and granite or sandstone can become **gneiss**.' }, src: ['snl-metamorfe', 'snl-marmor', 'snl-gneis'] },
          { photo: 'gneis', caption: { nb: 'Gneis fra Askøy ved Bergen. De bølgete båndene viser at berget er blitt presset og omdannet. Gneis er den vanligste bergarten i det norske grunnfjellet.', en: 'Gneiss from Askøy near Bergen. The wavy bands show that the rock has been squeezed and changed. Gneiss is the most common rock in the Norwegian bedrock.' } },
          { check: {
            q: { nb: 'Granitt har store, synlige krystaller. Hva forteller det om hvordan granitt ble dannet?', en: 'Granite has large, visible crystals. What does that tell us about how granite formed?' },
            options: [{ nb: 'Den størknet raskt på overflaten', en: 'It solidified quickly at the surface' }, { nb: 'Den størknet sakte dypt nede', en: 'It solidified slowly deep down' }, { nb: 'Den ble presset sammen av sand', en: 'It was pressed together from sand' }],
            answer: 1,
            explain: { nb: 'Store krystaller trenger lang tid på å vokse. Granitt er en dypbergart som størknet sakte dypt nede i jordskorpa.', en: 'Large crystals need a long time to grow. Granite is a plutonic rock that solidified slowly deep in the crust.' }
          } }
        ]
      },
      {
        id: 'kretslop', title: { nb: 'Bergartenes kretsløp', en: 'The rock cycle' },
        blocks: [
          { p: { nb: 'Bergartene er ikke evige. Over millioner av år kan hver bergart bli til en annen. Dette kalles **bergartenes kretsløp**:', en: 'Rocks are not permanent. Over millions of years every rock can become another. This is called **the rock cycle**:' } },
          { list: [
            { nb: '**Magma** størkner og blir til **magmatisk bergart**.', en: '**Magma** solidifies into **igneous rock**.' },
            { nb: 'Bergarten kommer opp til overflaten og brytes ned av **forvitring og erosjon** til **sedimenter**.', en: 'The rock reaches the surface and is broken down by **weathering and erosion** into **sediments**.' },
            { nb: 'Sedimentene **avsettes** i lag og **herdes** til **sedimentær bergart**.', en: 'The sediments are **deposited** in layers and **harden** into **sedimentary rock**.' },
            { nb: 'Når platene presser bergarten ned, omdannes den av **trykk og varme** til **metamorf bergart**.', en: 'When the plates push the rock down, it is changed by **pressure and heat** into **metamorphic rock**.' },
            { nb: 'Kommer den langt nok ned, **smelter** den til magma – og kretsløpet starter på nytt.', en: 'If it goes deep enough, it **melts** into magma – and the cycle starts again.' }
          ], src: ['snl-bergarter', 'snl-magmatiske', 'snl-sedimentare', 'snl-metamorfe'] },
          { diagram: 'kretslop' },
          { p: { nb: 'Bergarter kan også ta snarveier. En magmatisk bergart kan for eksempel bli omdannet til en metamorf bergart uten å bli til sediment først. Det er platetektonikken som holder kretsløpet i gang: Platene løfter berget opp til fjell, og presser det ned i dypet igjen.', en: 'Rocks can also take shortcuts. An igneous rock can, for example, be changed into a metamorphic rock without becoming sediment first. Plate tectonics keeps the cycle going: the plates lift rock up into mountains, and push it back down into the depths.' }, src: ['snl-platetektonikk', 'snl-metamorfe'] },
          { explain: { nb: 'Velg en bergart, for eksempel granitt. Fortell historien om hvordan den kan bli til sandstein og senere til gneis.', en: 'Choose a rock, for example granite. Tell the story of how it could become sandstone and later gneiss.' } }
        ]
      },
      {
        id: 'norge', title: { nb: 'Bergarter i Norge', en: 'Rocks in Norway' },
        blocks: [
          { p: { nb: 'Norges geologiske historie spenner over nesten tre milliarder år. Det meste av landet består av **metamorfe og magmatiske bergarter**, særlig **gneis** og **granitt** i det gamle grunnfjellet.', en: 'Norway’s geological history spans nearly three billion years. Most of the country consists of **metamorphic and igneous rocks**, especially **gneiss** and **granite** in the old bedrock.' }, src: ['snl-norges-geologi'] },
          { p: { nb: 'På Østlandet ligger **Oslofeltet**. Her finnes godt bevarte sedimentære bergarter med fossiler, og magmatiske bergarter fra tiden da jordskorpa sprakk opp og det var vulkaner her. **Larvikitt** fra Vestfold er en av dem. Den brukes som fasadestein over hele verden.', en: 'In eastern Norway lies **the Oslo region**. Here there are well-preserved sedimentary rocks with fossils, and igneous rocks from the time when the crust split and there were volcanoes here. **Larvikite** from Vestfold is one of them. It is used as facade stone all over the world.' }, src: ['snl-oslofeltet', 'snl-larvikitt', 'snl-norges-geologi'] },
          { discuss: { nb: 'Ta med en stein fra skoleveien eller hagen. Se på den med lupe. Kan du se ulike mineraler? Har den lag, bånd eller store krystaller? Hvilken type bergart tror du det er?', en: 'Bring a stone from your way to school or the garden. Look at it with a magnifier. Can you see different minerals? Does it have layers, bands or large crystals? What type of rock do you think it is?' } }
        ]
      }
    ],
    resources: ['ndla-bergarter', 'yt-bergartstyper', 'yt-kretslop', 'snl-bergarter', 'snl-mineraler', 'snl-larvikitt']
  }
};
