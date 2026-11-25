/* =====================================================================
   Klimaendringer – DEL 04: ER DET VANLIG AT KLIMAET ENDRER SEG?
   ===================================================================== */
NatLab.topic('klima').organisms.normalt = {
  code: '04',
  title: { nb: 'Er det vanlig at klimaet endrer seg?', en: 'Is it normal for the climate to change?' },
  sub: { nb: 'Istider, jordbanen, iskjerner – og hvorfor i dag er annerledes.', en: 'Ice ages, the Earth’s orbit, ice cores – and why today is different.' },
  lead: {
    nb: 'Klimaet har alltid endret seg – av naturlige grunner. Klikk på delene for å se hvilke naturlige faktorer som kan endre klimaet, og hvordan forskerne kan vite hvordan klimaet var for lenge siden.',
    en: 'The climate has always changed – for natural reasons. Click on the parts to see which natural factors can change the climate, and how scientists can know what the climate was like long ago.'
  },
  art: 'naturlige',
  diagrams: ['naturlige'],
  modelNames: { naturlige: { nb: 'Naturlige årsaker', en: 'Natural causes' } },
  intro: { nb: 'Til venstre ser du Jorda i bane rundt sola. Til høyre er fire andre ting som kan endre klimaet – eller som avslører hvordan det var før.', en: 'On the left you see the Earth orbiting the sun. On the right are four other things that can change the climate – or that reveal what it was like before.' },
  practiceHref: '#klima-ov-merk-naturlige',
  extraTabs: [{ href: '#klima-malinger', icon: 'chart', label: { nb: 'Målingene', en: 'The measurements' } }],

  page: {
    goals: [
      { nb: 'gi eksempler på **naturlige årsaker** til klimaendringer', en: 'give examples of **natural causes** of climate change' },
      { nb: 'forklare hvordan forskerne vet hvordan klimaet var før, for eksempel med **iskjerner** og **gamle trestokker**', en: 'explain how scientists know what the climate was like in the past, for example from **ice cores** and **ancient logs**' },
      { nb: 'drøfte hvorfor dagens klimaendringer er **annerledes** enn de naturlige endringene før', en: 'discuss why today’s climate change is **different** from the natural changes of the past' }
    ],
    keypoints: [
      { nb: 'Klimaet har endret seg mange ganger: Det har vært nesten 50 istider de siste 2,6 millioner årene.', en: 'The climate has changed many times: there have been almost 50 ice ages in the last 2.6 million years.' },
      { nb: 'Naturlige årsaker er blant annet **jordbanen og aksehelningen** (Milanković-syklusene), **sola**, **vulkaner** og **kontinentaldrift**.', en: 'Natural causes include **the Earth’s orbit and axial tilt** (the Milanković cycles), **the sun**, **volcanoes** and **continental drift**.' },
      { nb: '**Iskjerner** viser at CO₂ og temperatur har fulgt hverandre i 800 000 år.', en: '**Ice cores** show that CO₂ and temperature have followed each other for 800,000 years.' },
      { nb: 'Dagens endringer er annerledes: De går **mye fortere**, og **årsaken er menneskene**. CO₂ er høyere enn på minst 2 millioner år.', en: 'Today’s changes are different: they are **much faster**, and **the cause is humans**. CO₂ is higher than for at least 2 million years.' }
    ],
    sections: [
      {
        id: 'alltid', title: { nb: 'Klimaet har alltid endret seg', en: 'The climate has always changed' },
        blocks: [
          { p: { nb: 'Jordas klima har vært både mye varmere og mye kaldere enn i dag. For rundt 400 millioner år siden lå det som i dag er Svalbard nær ekvator, og hadde tropisk klima. Det skyldtes **kontinentaldrift** – kontinentene flytter seg noen centimeter i året.', en: 'The Earth’s climate has been both much warmer and much colder than today. About 400 million years ago, what is now Svalbard lay near the equator and had a tropical climate. This was due to **continental drift** – the continents move a few centimetres a year.' }, src: ['snl-arsaker'] },
          { link: { href: '#jorda-tidskart', icon: 'planet', title: { nb: 'Se kontinentene flytte seg', en: 'See the continents move' }, text: { nb: 'I temaet «Historien om Jorda» kan du spole 250 millioner år tilbake på «Kartet gjennom tid».', en: 'In the topic “The story of the Earth” you can rewind 250 million years on “The map through time”.' } } },
          { p: { nb: 'De siste **2,6 millionene** årene har Jorda vekslet mellom **[[istid|istider]]** og varmere **mellomistider**. Det har vært nesten 50 istider. Den siste sluttet for **11 600 år siden**. Da lå det opptil 3000 meter tykk is over Norge.', en: 'For the last **2.6 million** years the Earth has switched between **[[istid|ice ages]]** and warmer **interglacials**. There have been almost 50 ice ages. The last one ended **11,600 years ago**. At that time there was ice up to 3000 metres thick over Norway.' }, src: ['snl-istid'] },
          { diagram: 'naturlige' }
        ]
      },
      {
        id: 'arsaker', title: { nb: 'Naturlige årsaker', en: 'Natural causes' },
        blocks: [
          { p: { nb: 'Jordas bane rundt sola og helningen på jordaksen endrer seg langsomt i faste sykluser – **[[milankovic|Milanković-syklusene]]**. Banen endrer form over rundt **100 000 år**, aksehelningen svinger mellom 22,1° og 24,5° over **41 000 år**, og aksen «slingrer» over 19 000–23 000 år. Det endrer hvor mye sol de nordlige områdene får om sommeren – og styrer rytmen i istidene.', en: 'The Earth’s orbit around the sun and the tilt of its axis change slowly in regular cycles – **[[milankovic|the Milanković cycles]]**. The orbit changes shape over about **100,000 years**, the tilt swings between 22.1° and 24.5° over **41,000 years**, and the axis “wobbles” over 19,000–23,000 years. This changes how much sun the northern regions get in summer – and controls the rhythm of the ice ages.' }, src: ['snl-milankovic', 'snl-arsaker'] },
          { list: [
            { nb: '**Sola:** Solaktiviteten varierer litt. Men sola har ikke endret seg på noen viktig måte siden 1950-tallet.', en: '**The sun:** Solar activity varies a little. But the sun has not changed in any important way since the 1950s.' },
            { nb: '**Store vulkanutbrudd:** Aske og partikler stenger ute sollys og gir kortvarig **avkjøling**. Pinatubo-utbruddet i 1991 senket middeltemperaturen med omkring 0,5 °C i halvannet år.', en: '**Large volcanic eruptions:** Ash and particles block sunlight and cause short-term **cooling**. The Pinatubo eruption in 1991 lowered the average temperature by about 0.5 °C for a year and a half.' },
            { nb: '**CO₂ og andre drivhusgasser:** CO₂ i lufta har variert naturlig, blant annet med forvitring, vulkaner og hvor mye karbon som ble lagret i havet og i livet.', en: '**CO₂ and other greenhouse gases:** CO₂ in the air has varied naturally, for example with weathering, volcanoes and how much carbon was stored in the ocean and in living things.' }
          ], src: ['snl-arsaker', 'snl-pinatubo'] },
          { check: {
            q: { nb: 'Hva gjør et stort vulkanutbrudd med temperaturen de neste par årene?', en: 'What does a large volcanic eruption do to the temperature over the next couple of years?' },
            options: [{ nb: 'Det blir litt varmere, fordi vulkanen er varm', en: 'It gets a little warmer, because the volcano is hot' }, { nb: 'Det blir litt kaldere, fordi partikler stenger ute sollys', en: 'It gets a little colder, because particles block sunlight' }, { nb: 'Ingenting', en: 'Nothing' }],
            answer: 1,
            explain: { nb: 'Store utbrudd sender partikler og svovelgass høyt opp i atmosfæren. Partiklene stenger ute litt av sollyset, og det blir kaldere i en kort periode.', en: 'Large eruptions send particles and sulphur gas high up into the atmosphere. The particles block a little of the sunlight, and it gets colder for a short period.' }
          } }
        ]
      },
      {
        id: 'iskjerner', title: { nb: 'Iskjerner: luft fra fortiden', en: 'Ice cores: air from the past' },
        blocks: [
          { p: { nb: 'Innlandsisen i Antarktis er bygd opp av snø, lag på lag, gjennom hundretusener av år. I isen er det små **luftbobler** – prøver av lufta fra den gangen snøen falt. Forskerne borer opp lange **[[iskjerne|iskjerner]]** og måler CO₂ i boblene. Isen selv avslører også temperaturen.', en: 'The ice sheet in Antarctica is built up of snow, layer by layer, over hundreds of thousands of years. In the ice there are small **air bubbles** – samples of the air from when the snow fell. Scientists drill out long **[[iskjerne|ice cores]]** and measure the CO₂ in the bubbles. The ice itself also reveals the temperature.' }, src: ['noaa-iskjerne', 'noaa-epica', 'nasa-bevis'] },
          { chart: 'iskjerne', caption: { nb: 'Øverst: CO₂ i lufta. Nederst: temperaturen i Antarktis. Hver topp er en mellomistid, hver dal en istid. Trykk på «Vis CO₂ i dag» for å se hvor dagens nivå er.', en: 'Top: CO₂ in the air. Bottom: the temperature in Antarctica. Each peak is an interglacial, each dip an ice age. Press “Show CO₂ today” to see where today’s level is.' }, src: ['noaa-iskjerne', 'noaa-epica', 'noaa-co2'] },
          { p: { nb: 'Grafen viser to viktige ting. For det første har **CO₂ og temperatur fulgt hverandre** i 800 000 år. For det andre har CO₂ svingt mellom omtrent **180 og 300 ppm**. I dag er det over **420 ppm** – langt utenfor det naturlige området.', en: 'The graph shows two important things. First, **CO₂ and temperature have followed each other** for 800,000 years. Second, CO₂ has varied between about **180 and 300 ppm**. Today it is over **420 ppm** – far outside the natural range.' }, src: ['noaa-iskjerne', 'ipcc-spm'] },
          { deeper: {
            title: { nb: 'Hvem kommer først – CO₂ eller temperatur?', en: 'Which comes first – CO₂ or temperature?' },
            blocks: [
              { p: { nb: 'Ved slutten av istidene startet oppvarmingen ofte med at jordbanen ga mer sol om sommeren i nord. Varmere hav slapp så ut CO₂, og mer CO₂ forsterket oppvarmingen. CO₂ virket altså som en **tilbakekobling**. I dag er det annerledes: Nå er det menneskene som tilfører CO₂ først.', en: 'At the end of the ice ages, the warming often started because the Earth’s orbit gave more summer sun in the north. Warmer oceans then released CO₂, and more CO₂ amplified the warming. CO₂ therefore acted as a **feedback**. Today it is different: now it is humans who add the CO₂ first.' }, src: ['snl-milankovic', 'snl-tilbakekoblinger', 'snl-arsaker'] }
            ]
          } }
        ]
      },
      {
        id: 'rondane', title: { nb: 'Furustokker på snaufjellet', en: 'Pine logs above the tree line' },
        blocks: [
          { p: { nb: 'Høyt oppe i Rondane og på Dovre, langt over dagens skoggrense, ligger det gamle **furustokker** i myrer og fjellvann. Forskerne Aage Paus og Reidar Müller har datert 97 slike stokker. De viser at det for 8000–9000 år siden vokste **furuskog 180 meter høyere** enn skoggrensa i dag.', en: 'High up in Rondane and Dovre, far above today’s tree line, there are old **pine logs** in bogs and mountain lakes. The researchers Aage Paus and Reidar Müller have dated 97 such logs. They show that 8000–9000 years ago **pine forest grew 180 metres higher** than the tree line today.' }, src: ['fno-rondane'] },
          { p: { nb: 'Skoggrensa styres av sommertemperaturen. For hver grad varmere stiger den med omtrent 130 meter. Forskerne regner derfor med at somrene den gangen var **minst 1,2 grader varmere** enn nå. Klimaet var altså varmere – lenge før menneskene brente fossilt brensel.', en: 'The tree line is controlled by the summer temperature. For each degree warmer it rises by about 130 metres. The researchers therefore estimate that the summers then were **at least 1.2 degrees warmer** than now. So the climate was warmer – long before humans burned fossil fuels.' }, src: ['fno-rondane'] },
          { link: { href: '#klima-lesing', icon: 'book', title: { nb: 'Les artikkelen selv – med helhetslesing', en: 'Read the article yourself – with whole-text reading' }, text: { nb: 'Artikkelen fra forskning.no har oppgaver før, under og etter lesingen, og spørsmål om kildekritikk.', en: 'The article from forskning.no has tasks before, during and after reading, and questions on source criticism.' } } },
          { discuss: { nb: 'Noen sier: «Det var varmere for 9000 år siden, så da er oppvarmingen i dag også naturlig.» Hva mener du om dette argumentet? Tenk på **årsaken** til endringen og **hvor fort** den skjer.', en: 'Some say: “It was warmer 9000 years ago, so today’s warming must also be natural.” What do you think of this argument? Think about the **cause** of the change and **how fast** it happens.' } }
        ]
      },
      {
        id: 'annerledes', title: { nb: 'Hvorfor er i dag annerledes?', en: 'Why is today different?' },
        blocks: [
          { list: [
            { nb: '**Årsaken:** De naturlige faktorene – sola, jordbanen og vulkanene – kan ikke forklare oppvarmingen. Det er menneskenes utslipp av drivhusgasser som er hovedårsaken.', en: '**The cause:** The natural factors – the sun, the orbit and volcanoes – cannot explain the warming. Human emissions of greenhouse gases are the main cause.' },
            { nb: '**Farten:** Overgangen fra istid til mellomistid tok mange tusen år. Dagens oppvarming skjer på noen hundre år.', en: '**The speed:** The change from ice age to interglacial took many thousands of years. Today’s warming is happening in a few hundred years.' },
            { nb: '**Nivået:** CO₂ i lufta er høyere enn på minst **2 millioner år**, og metan og lystgass er høyere enn på minst 800 000 år.', en: '**The level:** CO₂ in the air is higher than for at least **2 million years**, and methane and nitrous oxide are higher than for at least 800,000 years.' }
          ], src: ['ipcc-spm', 'snl-arsaker', 'snl-istid'] },
          { fact: { nb: 'Klimaet har endret seg før – men da fantes det ikke 8 milliarder mennesker med byer, jordbruk og veier tilpasset dagens klima.', en: 'The climate has changed before – but then there were not 8 billion people with cities, farms and roads adapted to today’s climate.' }, src: ['ndla-konsekvenser'] },
          { explain: { nb: 'Forklar med egne ord hvordan forskerne kan vite hvor mye CO₂ det var i lufta for 400 000 år siden.', en: 'Explain in your own words how scientists can know how much CO₂ there was in the air 400,000 years ago.' } }
        ]
      }
    ],
    resources: ['yt-iskjerne', 'fno-rondane', 'snl-milankovic', 'snl-istid', 'snl-arsaker', 'nasa-bevis']
  }
};
