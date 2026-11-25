/* =====================================================================
   Klimaendringer – DE INTERAKTIVE SIDENE
   ---------------------------------------------------------------------
   karbonmodell  – animert karbonkretsløp (type 'carbon', assets/js/klima.js)
   drivhusmodell – drivhuseffekten (type 'greenhouse')
   malinger      – grafer med ekte måledata (artikkel med { chart })
   forogetter    – før- og etter-bilder (artikkel med { beforeafter })
   fotavtrykk    – klimafotavtrykk (type 'footprint')
   lesing        – helhetslesing av forskning.no (artikkel med { reading })
   forsokdrivhus, forsokhav – forsøk med skjema (type 'fieldwork')
   ===================================================================== */
(function () {
  const T = NatLab.topic('klima');
  const o = (nb, en) => ({ nb: nb, en: en });

  /* =================== Karbonkretsløpet – modell =================== */
  T.pages.karbonmodell = {
    type: 'carbon',
    title: o('Karbonkretsløpet – animert modell', 'The carbon cycle – animated model'),
    lead: o('Følg karbonet mellom lufta, livet, havet og berget. Klikk på pilene og lagrene, se forskjellen på det raske og det langsomme kretsløpet, og prøv «Hva skjer hvis?».', 'Follow the carbon between the air, living things, the ocean and the rock. Click on the arrows and stores, see the difference between the fast and the slow cycle, and try “What if?”.'),
    tabs: [
      { href: '#klima-karbon', icon: 'target', label: o('Del 2: Karbon', 'Part 2: Carbon') },
      { href: '#klima-karbonmodell', icon: 'leaf', label: o('Animert modell', 'Animated model') },
      { href: '#klima-karbon-les', icon: 'book', label: o('Les', 'Read') }
    ],
    caption: o('Modell – lagrene og pilene er ikke tegnet i riktig størrelse', 'Model – the stores and arrows are not drawn to scale'),
    intro: o('Hver hvite prikk er karbon på vei. Tykke piler betyr store mengder karbon per år. Slå på «Vis tall» for å se hvor mye.', 'Each white dot is carbon on the move. Thick arrows mean large amounts of carbon per year. Turn on “Show numbers” to see how much.'),
    help: {
      utforsk: o('Klikk på en pil eller et lager i modellen for å lære hva som skjer.', 'Click an arrow or a store in the model to learn what happens.'),
      tid: o('Velg det raske kretsløpet, det langsomme kretsløpet eller menneskene. Pilene som hører til, blir framhevet.', 'Choose the fast cycle, the slow cycle or humans. The arrows that belong to it are highlighted.'),
      hvis: o('Bruk glidebryterne i panelet. Modellen regner ut hvor mye CO₂ det blir i lufta og hvor varmt det blir fram mot år 2100.', 'Use the sliders in the panel. The model calculates how much CO₂ there will be in the air and how warm it gets towards the year 2100.')
    },
    legend: { fast: o('Livet (raskt)', 'Life (fast)'), ocean: o('Havet (raskt)', 'The ocean (fast)'), slow: o('Langsomt (berg og vulkaner)', 'Slow (rock and volcanoes)'), human: o('Menneskene', 'Humans') },
    speeds: {
      fast: { name: o('Det raske kretsløpet', 'The fast cycle'),
        time: o('Dager til noen tusen år.', 'Days to a few thousand years.'),
        text: o('Fotosyntese, celleånding og nedbrytning flytter enorme mengder karbon mellom lufta og livet hvert år. Hav og luft bytter også mye CO₂. Før industrien var opptak og utslipp omtrent **i balanse**.', 'Photosynthesis, respiration and decomposition move enormous amounts of carbon between the air and living things every year. The ocean and air also exchange a lot of CO₂. Before industry, uptake and release were roughly **in balance**.'),
        fact: o('Et karbonatom i lufta blir i snitt tatt opp av en plante eller havet i løpet av noen få år.', 'A carbon atom in the air is on average taken up by a plant or the ocean within a few years.'),
        src: ['snl-karbonkretslopet', 'ipcc-ch5'] },
      slow: { name: o('Det langsomme kretsløpet', 'The slow cycle'),
        time: o('Tusener til millioner av år.', 'Thousands to millions of years.'),
        text: o('Karbon blir lagret i kull, olje, gass og kalkstein, og kommer langsomt tilbake gjennom vulkaner og forvitring. Strømmene er **små**, men lagrene er **enorme**.', 'Carbon is stored in coal, oil, gas and limestone, and slowly comes back through volcanoes and weathering. The flows are **small**, but the stores are **enormous**.'),
        fact: o('Vulkanene på hele Jorda slipper ut rundt 0,1 milliard tonn karbon i året.', 'All the volcanoes on Earth release about 0.1 billion tonnes of carbon a year.'),
        src: ['snl-karbonkretslopet', 'ipcc-ch5'] },
      human: { name: o('Menneskene', 'Humans'),
        time: o('Noen hundre år – svært fort.', 'A few hundred years – very fast.'),
        text: o('Vi henter karbon fra det **langsomme** kretsløpet (kull, olje og gass) og slipper det ut i det **raske** kretsløpet. Vi hogger også skog. Rundt halvparten blir tatt opp av hav og land – resten hoper seg opp i lufta.', 'We take carbon from the **slow** cycle (coal, oil and gas) and release it into the **fast** cycle. We also cut down forests. About half is taken up by the ocean and land – the rest piles up in the air.'),
        fact: o('Menneskene slipper ut rundt hundre ganger så mye karbon som alle vulkanene til sammen.', 'Humans release about a hundred times as much carbon as all the volcanoes put together.'),
        src: ['snl-karbonkretslopet', 'ipcc-ch5'] }
    },
    whatif: {
      help: o('Hva skjer hvis verden endrer utslippene fra i morgen og helt fram til 2100? Prøv knappene eller dra i glidebryterne.', 'What happens if the world changes its emissions from tomorrow all the way to 2100? Try the buttons or drag the sliders.'),
      fossil: o('Forbrenning av fossilt brensel (i dag = 100 %)', 'Burning of fossil fuels (today = 100%)'),
      forest: o('Avskoging (i dag = 100 %)', 'Deforestation (today = 100%)'),
      plant: o('Ny skog og restaurert myr (ekstra opptak)', 'New forest and restored bogs (extra uptake)'),
      capture: o('CO₂-fangst og lagring', 'Carbon capture and storage'),
      presets: [
        { name: o('Som i dag', 'As today'), fossil: 100, forest: 100, plant: 0, capture: 0 },
        { name: o('Mer fossilt', 'More fossil'), fossil: 140, forest: 120, plant: 0, capture: 0 },
        { name: o('Kutt halvparten', 'Cut by half'), fossil: 50, forest: 50, plant: 0, capture: 0 },
        { name: o('Netto null', 'Net zero'), fossil: 10, forest: 0, plant: 1, capture: 0.5 }
      ],
      verdicts: {
        zero: o('Når utslippene er **netto null**, slutter CO₂ i lufta å stige, og den synker sakte fordi hav og land fortsatt tar opp CO₂. Temperaturen holder seg omtrent der den er.', 'When emissions are **net zero**, CO₂ in the air stops rising and slowly falls, because the ocean and land still take up CO₂. The temperature stays about where it is.'),
        low: o('Utslippene er mye lavere enn i dag. CO₂ i lufta stiger mye saktere, men så lenge vi slipper ut mer enn naturen tar opp, blir det fortsatt litt varmere.', 'Emissions are much lower than today. CO₂ in the air rises much more slowly, but as long as we emit more than nature takes up, it keeps getting a little warmer.'),
        mid: o('Utslippene er omtrent som i dag. CO₂ i lufta fortsetter å stige hvert år, og temperaturen stiger med den.', 'Emissions are about the same as today. CO₂ in the air keeps rising every year, and the temperature rises with it.'),
        high: o('Utslippene er høyere enn i dag. CO₂ i lufta stiger fort, og oppvarmingen blir stor.', 'Emissions are higher than today. CO₂ in the air rises fast, and the warming becomes large.')
      },
      limits: o('Dette er en **svært forenklet modell**. Den starter med dagens utslipp (ca. 10 milliarder tonn karbon fra fossilt brensel og 1,5 fra avskoging) og antar at hav og land tar opp CO₂ omtrent som i dag. Oppvarmingen er regnet ut fra de samlede utslippene. Den tar ikke med andre gasser enn CO₂ hver for seg, tilbakekoblinger som kan endre seg, eller tilfeldige svingninger. Ekte klimamodeller er mye mer detaljerte.', 'This is a **very simplified model**. It starts from today’s emissions (about 10 billion tonnes of carbon from fossil fuels and 1.5 from deforestation) and assumes that the ocean and land take up CO₂ roughly as today. The warming is calculated from the total emissions. It does not treat gases other than CO₂ separately, feedbacks that may change, or random variations. Real climate models are much more detailed.'),
      src: ['ipcc-ch5', 'ipcc-spm', 'noaa-co2', 'fno-utslipp']
    },
    page: {
      sections: [
        { id: 'om', title: o('Slik virker modellen', 'How the model works'), blocks: [
          { p: o('Pilene viser karbonstrømmer i milliarder tonn karbon per år, og lagrene viser hvor mye karbon som er lagret. Tallene er gjennomsnitt for 2010–2019 fra FNs klimapanel, avrundet. Animasjonen viser **retningen** og omtrent **hvor mye** – den går mye fortere enn i virkeligheten.', 'The arrows show carbon flows in billions of tonnes of carbon per year, and the stores show how much carbon is stored. The numbers are averages for 2010–2019 from the UN climate panel, rounded. The animation shows the **direction** and roughly **how much** – it runs much faster than in reality.'), src: ['ipcc-ch5'] },
          { model: o('Modellen viser bare de viktigste strømmene. Den viser ikke at karbon også går med elver fra land til hav, eller at noe av karbonet i jorda er lagret i permafrost. Strømmene varierer også fra år til år.', 'The model shows only the most important flows. It does not show that carbon also travels with rivers from land to sea, or that some of the carbon in the soil is stored in permafrost. The flows also vary from year to year.'), src: ['ipcc-ch5', 'snl-permafrost'] },
          { discuss: o('Modellen sier at det tar lang tid før CO₂ i lufta går ned igjen, selv om vi slutter å slippe ut. Hvorfor er det viktig å vite når vi bestemmer hva vi skal gjøre?', 'The model says it takes a long time for CO₂ in the air to go down again, even if we stop emitting. Why is that important to know when we decide what to do?') }
        ] }
      ]
    }
  };

  /* =================== Drivhuseffekten – modell =================== */
  T.pages.drivhusmodell = {
    type: 'greenhouse',
    title: o('Drivhuseffekten – interaktiv modell', 'The greenhouse effect – interactive model'),
    lead: o('Se sollyset komme inn og varmestrålingen gå ut. Skru opp og ned drivhusgassene og isen, og se hva som skjer med temperaturen.', 'Watch the sunlight come in and the heat radiation go out. Turn the greenhouse gases and the ice up and down, and see what happens to the temperature.'),
    tabs: [
      { href: '#klima-arsaker', icon: 'target', label: o('Del 3: Årsaker', 'Part 3: Causes') },
      { href: '#klima-drivhusmodell', icon: 'sun', label: o('Interaktiv modell', 'Interactive model') },
      { href: '#klima-arsaker-les', icon: 'book', label: o('Les', 'Read') }
    ],
    caption: o('Modell – ikke tegnet i riktig målestokk', 'Model – not drawn to scale'),
    intro: o('Gule prikker er sollys (kortbølget stråling). Røde prikker er varmestråling (langbølget). Når en rød prikk treffer en drivhusgass, blir den absorbert og sendt ut igjen – opp eller ned.', 'Yellow dots are sunlight (short-wave radiation). Red dots are heat radiation (long-wave). When a red dot hits a greenhouse gas, it is absorbed and sent out again – up or down.'),
    help: {
      utforsk: o('Klikk på delene i modellen for å lære om strålingen og drivhusgassene.', 'Click on the parts of the model to learn about the radiation and the greenhouse gases.'),
      hvis: o('Endre mengden drivhusgasser og hvor mye is og snø det er. Se termometeret og forklaringen i panelet.', 'Change the amount of greenhouse gases and how much ice and snow there is. Watch the thermometer and the explanation in the panel.')
    },
    legend: { sun: o('Sollys (kortbølget)', 'Sunlight (short-wave)'), heat: o('Varmestråling (langbølget)', 'Heat radiation (long-wave)'), gas: o('Drivhusgasser', 'Greenhouse gases') },
    gasLabel: o('Drivhusgasser i atmosfæren', 'Greenhouse gases in the atmosphere'),
    iceLabel: o('Is og snø', 'Ice and snow'),
    iceNames: [o('Lite', 'Little'), o('Som i dag', 'As today'), o('Mye', 'A lot')],
    feedbackLabel: o('Slå på tilbakekobling: is smelter når det blir varmere', 'Turn on feedback: ice melts when it gets warmer'),
    feedbackText: o('Når det blir varmere, smelter is og snø. Da kommer mørk bakke og mørkt hav fram, som **absorberer** mer sollys. Det blir enda varmere. Se hvordan isen i modellen krymper og temperaturen stiger litt ekstra. Dette er en **forsterkende tilbakekoblingsmekanisme**. Når det blir kaldere, virker det motsatt vei.', 'When it gets warmer, ice and snow melt. Dark ground and dark sea are exposed, which **absorb** more sunlight. It gets even warmer. See how the ice in the model shrinks and the temperature rises a little extra. This is an **amplifying feedback mechanism**. When it gets colder, it works the opposite way.'),
    stops: [
      { name: o('Ingen drivhusgasser', 'No greenhouse gases'), text: o('Uten drivhusgasser – heller ikke vanndamp – slipper all varmestrålingen rett ut i verdensrommet. Middeltemperaturen ville vært rundt **−18 °C**. Jorda ville vært dekket av is.', 'Without greenhouse gases – not even water vapour – all the heat radiation escapes straight to space. The average temperature would be about **−18 °C**. The Earth would be covered in ice.') },
      { name: o('Istid (ca. 180 ppm CO₂)', 'Ice age (about 180 ppm CO₂)'), text: o('Under istidene var CO₂ i lufta nede i rundt 180 ppm. Prøv å velge **«Mye»** is og slå på tilbakekoblingen: Isen reflekterer mye sollys og gjør det enda kaldere. I virkeligheten startet istidene med endringer i jordbanen.', 'During the ice ages CO₂ in the air was down at about 180 ppm. Try choosing **“A lot”** of ice and turning on the feedback: the ice reflects a lot of sunlight and makes it even colder. In reality the ice ages started with changes in the Earth’s orbit.') },
      { name: o('Før industrien (ca. 280 ppm)', 'Before industry (about 280 ppm)'), text: o('Før industrien var det rundt 280 ppm CO₂ i lufta. Den naturlige drivhuseffekten ga en middeltemperatur på omkring **15 °C**.', 'Before industry there was about 280 ppm CO₂ in the air. The natural greenhouse effect gave an average temperature of about **15 °C**.') },
      { name: o('I dag (ca. 427 ppm)', 'Today (about 427 ppm)'), text: o('I dag er det over 420 ppm CO₂ i lufta – mer enn på minst 2 millioner år. Flere drivhusgasser fanger mer varmestråling. Jorda har allerede blitt over 1 °C varmere, og den fortsetter å bli varmere til en ny balanse er nådd.', 'Today there is over 420 ppm CO₂ in the air – more than for at least 2 million years. More greenhouse gases catch more heat radiation. The Earth has already warmed by more than 1 °C, and it keeps warming until a new balance is reached.') },
      { name: o('Dobbelt så mye CO₂ (560 ppm)', 'Twice as much CO₂ (560 ppm)'), text: o('Hvis CO₂ dobles fra før industrien, regner FNs klimapanel med at Jorda på lang sikt blir rundt **3 °C** varmere (sannsynligvis mellom 2 og 5 °C). Det kalles **klimafølsomhet**.', 'If CO₂ doubles from before industry, the UN climate panel estimates that the Earth will in the long run become about **3 °C** warmer (very likely between 2 and 5 °C). This is called **climate sensitivity**.') },
      { name: o('Fire ganger så mye (1120 ppm)', 'Four times as much (1120 ppm)'), text: o('Med fire ganger så mye CO₂ ville oppvarmingen bli rundt dobbelt så stor som ved én dobling. Så mye CO₂ har det ikke vært i lufta på mange millioner år.', 'With four times as much CO₂ the warming would be about twice as large as for one doubling. There has not been that much CO₂ in the air for many millions of years.') }
    ],
    limits: o('Modellen er sterkt forenklet. Temperaturen er regnet ut med FNs klimapanels beste anslag: rundt 3 °C oppvarming for hver dobling av CO₂, når Jorda har fått tid til å komme i balanse. Det tar mange tiår. Ekte klimamodeller tar med skyer, havstrømmer, vind, årstider og mye mer. Molekylene er tegnet mange milliarder ganger for store.', 'The model is very simplified. The temperature is calculated with the UN climate panel’s best estimate: about 3 °C of warming for each doubling of CO₂, once the Earth has had time to reach balance. That takes many decades. Real climate models include clouds, ocean currents, wind, seasons and much more. The molecules are drawn billions of times too large.'),
    src: ['snl-drivhuseffekten', 'ipcc-spm', 'snl-albedo', 'snl-tilbakekoblinger'],
    page: {
      sections: [
        { id: 'om', title: o('Det viktigste om drivhuseffekten', 'The key points about the greenhouse effect'), blocks: [
          { list: [
            o('**Sollys** (kortbølget stråling) går gjennom atmosfæren. Rundt 30 prosent blir **reflektert**, resten blir **absorbert**.', '**Sunlight** (short-wave radiation) passes through the atmosphere. About 30 per cent is **reflected**, the rest is **absorbed**.'),
            o('Jordoverflaten blir varm og sender ut **varmestråling** (langbølget, infrarød).', 'The Earth’s surface becomes warm and sends out **heat radiation** (long-wave, infrared).'),
            o('**Drivhusgassene** absorberer varmestrålingen og sender den ut i alle retninger – også tilbake mot bakken.', '**The greenhouse gases** absorb the heat radiation and send it out in all directions – also back towards the ground.'),
            o('Flere drivhusgasser gir en sterkere drivhuseffekt og **global oppvarming**.', 'More greenhouse gases give a stronger greenhouse effect and **global warming**.')
          ], src: ['snl-drivhuseffekten'] },
          { explain: o('Forklar drivhuseffekten med egne ord. Bruk ordene **stråling, absorpsjon, refleksjon** og **drivhusgasser**.', 'Explain the greenhouse effect in your own words. Use the words **radiation, absorption, reflection** and **greenhouse gases**.') }
        ] }
      ]
    }
  };

  /* =================== Målingene (grafer) =================== */
  T.pages.malinger = {
    title: o('Målingene: ekte klimadata', 'The measurements: real climate data'),
    lead: o('Tre grafer med ekte måledata. Pek på grafene eller bruk glidebryteren under for å lese av verdiene.', 'Three graphs with real measured data. Point at the graphs or use the slider underneath to read the values.'),
    page: {
      goals: [
        o('lese og tolke grafer med ekte klimadata', 'read and interpret graphs with real climate data'),
        o('**analysere og bruke data** til å lage forklaringer', '**analyse and use data** to make explanations')
      ],
      sections: [
        { id: 'co2', title: o('CO₂ i lufta (Keeling-kurven)', 'CO₂ in the air (the Keeling curve)'), blocks: [
          { chart: 'keeling', caption: o('Månedlige målinger på Mauna Loa-observatoriet på Hawaii, 1958 til i dag.', 'Monthly measurements at the Mauna Loa Observatory in Hawaii, 1958 to today.'), src: ['noaa-co2'] },
          { list: [
            o('Hvor mye CO₂ var det i lufta i 1960? Og i dag?', 'How much CO₂ was in the air in 1960? And today?'),
            o('Velg «De siste fem årene». Når på året er CO₂ høyest, og når er den lavest? Hvorfor?', 'Choose “The last five years”. When in the year is CO₂ highest, and when is it lowest? Why?'),
            o('Går kurven like bratt oppover hele tiden?', 'Does the curve rise equally steeply the whole time?')
          ] }
        ] },
        { id: 'temp', title: o('Global temperatur siden 1850', 'Global temperature since 1850'), blocks: [
          { chart: 'temperatur', caption: o('Global temperatur over land og hav, sammenlignet med snittet for 1850–1900. Tallene er fra NOAA og regnet om av NatLab.', 'Global temperature over land and sea, compared with the average for 1850–1900. The numbers are from NOAA and converted by NatLab.'), src: ['noaa-temp'] },
          { list: [
            o('Hvilket år var det varmeste?', 'Which year was the warmest?'),
            o('Slå på «Med 10-års snitt». Hvorfor bruker forskerne gjennomsnitt over flere år?', 'Turn on “With 10-year average”. Why do scientists use averages over several years?'),
            o('Når begynte temperaturen å stige raskt?', 'When did the temperature start to rise quickly?')
          ] }
        ] },
        { id: 'is', title: o('800 000 år i isen', '800,000 years in the ice'), blocks: [
          { chart: 'iskjerne', caption: o('CO₂ fra luftbobler i iskjerner, og temperatur beregnet fra isen på Dome C i Antarktis.', 'CO₂ from air bubbles in ice cores, and temperature calculated from the ice at Dome C in Antarctica.'), src: ['noaa-iskjerne', 'noaa-epica'] },
          { list: [
            o('Hvor mange istider (dype daler) kan du telle?', 'How many ice ages (deep dips) can you count?'),
            o('Hvordan henger CO₂ og temperatur sammen?', 'How are CO₂ and temperature linked?'),
            o('Trykk på «Vis CO₂ i dag». Hva legger du merke til?', 'Press “Show CO₂ today”. What do you notice?')
          ] },
          { model: o('Temperaturen fra iskjernene gjelder Antarktis, ikke hele Jorda. Svingningene i Antarktis er omtrent dobbelt så store som for hele kloden.', 'The temperature from the ice cores applies to Antarctica, not the whole Earth. The variations in Antarctica are roughly twice as large as for the whole globe.'), src: ['noaa-epica'] }
        ] },
        { id: 'mer', title: o('Finn flere data selv', 'Find more data yourself'), blocks: [
          { link: { href: 'https://science.nasa.gov/earth/earth-observatory/world-of-change/', icon: 'ext', title: o('NASA: World of Change', 'NASA: World of Change'), text: o('Satellittbilder som viser endringer over mange år, fra hele verden (engelsk).', 'Satellite images showing changes over many years, from all over the world.') } },
          { link: { href: 'https://ourworldindata.org/co2-and-greenhouse-gas-emissions', icon: 'ext', title: o('Our World in Data: CO₂-utslipp', 'Our World in Data: CO₂ emissions'), text: o('Grafer over utslipp fra alle land i verden (engelsk).', 'Graphs of emissions from every country in the world.') } },
          { link: { href: 'https://www.ssb.no/natur-og-miljo/forurensning-og-klima/statistikk/utslipp-til-luft', icon: 'ext', title: o('SSB: Utslipp til luft', 'Statistics Norway: Emissions to air'), text: o('Norges utslipp av klimagasser.', 'Norway’s greenhouse gas emissions.') } }
        ] }
      ]
    }
  };

  /* =================== Før og etter =================== */
  T.pages.forogetter = {
    title: o('Før og etter: Endringer vi kan se', 'Before and after: changes we can see'),
    lead: o('Ekte bilder av isbreer, havis, kyster og korallrev. Husk at ett bilde viser ett sted på ett tidspunkt – forskerne trenger målinger fra mange steder over mange år.', 'Real pictures of glaciers, sea ice, coasts and coral reefs. Remember that one picture shows one place at one moment – scientists need measurements from many places over many years.'),
    page: {
      sections: [
        { id: 'breer', title: o('Isbreer i Norge', 'Glaciers in Norway'), blocks: [
          { beforeafter: { items: [{ photo: 'nigards1898', label: o('ca. 1898', 'c. 1898') }, { photo: 'nigards2017', label: '2017' }],
            caption: o('**Nigardsbreen** i Jostedalen, en arm av Jostedalsbreen. Bildene er tatt fra ulike steder i dalen. Breen er målt systematisk siden 1900. Fra 1940 til rundt 1975 trakk brefronten seg 2,6 km tilbake, og siden 2004 har den gått tilbake 577 meter.', '**Nigardsbreen** in Jostedalen, an arm of Jostedalsbreen. The pictures were taken from different places in the valley. The glacier has been measured systematically since 1900. From 1940 to about 1975 the front retreated 2.6 km, and since 2004 it has retreated 577 metres.') }, src: ['snl-nigardsbreen', 'snl-jostedalsbreen'] },
          { beforeafter: { items: [{ photo: 'briksdal2003', label: '2003' }, { photo: 'briksdal2013', label: '2013' }],
            caption: o('**Briksdalsbreen** i Stryn. På begynnelsen av 1990-tallet rykket breen fram etter mange snørike vintre. Siden midten av 1990-tallet har den gått tilbake rundt 800 meter.', '**Briksdalsbreen** in Stryn. In the early 1990s the glacier advanced after many snowy winters. Since the mid-1990s it has retreated about 800 metres.') }, src: ['snl-briksdalsbreen'] },
          { discuss: o('Briksdalsbreen rykket **fram** på 1990-tallet. Betyr det at det ble kaldere da? Hva annet enn temperaturen kan påvirke en bre?', 'Briksdalsbreen **advanced** in the 1990s. Does that mean it got colder then? What other than temperature can affect a glacier?') }
        ] },
        { id: 'verden', title: o('Isbreer i resten av verden', 'Glaciers in the rest of the world'), blocks: [
          { beforeafter: { items: [{ photo: 'muir1941', label: '1941' }, { photo: 'muir2004', label: '2004' }],
            caption: o('**Muir Glacier** i Alaska, fotografert fra omtrent samme sted. På 63 år har breen trukket seg så langt tilbake at den ikke lenger synes, og det har vokst fram skog.', '**Muir Glacier** in Alaska, photographed from about the same spot. In 63 years the glacier retreated so far that it can no longer be seen, and forest has grown up.') }, src: ['nasa-world', 'snl-isbre'] },
          { photo: 'grinnell', caption: o('**Grinnell Glacier** i Glacier National Park i USA, 1938 (til venstre) og 2009 (til høyre).', '**Grinnell Glacier** in Glacier National Park in the USA, 1938 (left) and 2009 (right).') }
        ] },
        { id: 'havis', title: o('Havisen i Arktis', 'Arctic sea ice'), blocks: [
          { photo: 'arktisis', caption: o('Havisen i Arktis da den var minst i september 2012 (øverst) og i 1984 (nederst). Havisen i september er rundt 40 prosent mindre enn på 1980-tallet.', 'The Arctic sea ice at its smallest in September 2012 (top) and 1984 (bottom). The sea ice in September is about 40 per cent smaller than in the 1980s.'), src: ['ipcc-spm'] }
        ] },
        { id: 'kyst', title: o('Øyer og kyster', 'Islands and coasts'), blocks: [
          { photo: 'shishmaref', caption: o('Øya **Sarichef** ved landsbyen Shishmaref i Alaska, 1950–2012. Den hvite kanten viser kysten i 1950, og det grå viser øya i 2012. Noen steder er kysten spist opp (erosjon), andre steder har ny sand lagt seg. Mindre havis og tinende permafrost gjør at stormer river med seg mer av kysten.', 'The island of **Sarichef** by the village of Shishmaref in Alaska, 1950–2012. The white outline shows the coast in 1950, and the grey shows the island in 2012. In some places the coast has been eaten away (erosion), in others new sand has settled. Less sea ice and thawing permafrost mean that storms tear away more of the coast.'), src: ['snl-permafrost', 'snl-havis'] },
          { photos: [{ photo: 'kiribati', caption: o('Skilt i Kiribati i Stillehavet: Det høyeste punktet på Sør-Tarawa er bare 3 meter over havet.', 'A sign in Kiribati in the Pacific: the highest point on South Tarawa is only 3 metres above the sea.') }, { photo: 'holland', caption: o('Det siste huset på Holland Island i USA i 2009. Året etter falt det i havet.', 'The last house on Holland Island in the USA in 2009. The year after, it fell into the sea.') }] },
          { p: o('Lavtliggende øyriker er svært sårbare for et stigende havnivå. På Maldivene ligger mer enn 80 prosent av landet lavere enn én meter over havet, og det høyeste punktet er 2,4 meter. I Tuvalu er det høyeste punktet rundt 4,5 meter over havet.', 'Low-lying island nations are very vulnerable to rising sea level. In the Maldives more than 80 per cent of the land is less than one metre above the sea, and the highest point is 2.4 metres. In Tuvalu the highest point is about 4.5 metres above the sea.'), src: ['snl-maldivene', 'snl-tuvalu'] },
          { model: o('Erosjon av kyster har mange årsaker: stormer, strømmer, havis, tinende jord – og stigende havnivå. Ett bilde kan ikke vise hvor mye av endringen som skyldes klimaendringer.', 'Coastal erosion has many causes: storms, currents, sea ice, thawing ground – and rising sea level. One picture cannot show how much of the change is due to climate change.') }
        ] },
        { id: 'koraller', title: o('Korallrev', 'Coral reefs'), blocks: [
          { photos: [{ photo: 'korallbleking', caption: o('Blekede koraller i American Samoa i 2015. Den blå korallen til høyre ser fin ut, men er bleket.', 'Bleached corals in American Samoa in 2015. The blue coral on the right looks pretty, but it is bleached.') }, { photo: 'gbr', caption: o('Great Barrier Reef sett fra satellitt i februar 2024, under en stor korallbleking.', 'The Great Barrier Reef seen from a satellite in February 2024, during a large coral bleaching.') }] },
          { p: o('Koraller lever sammen med små alger som gir dem 80–90 prosent av energien. Når vannet blir for varmt, støter korallene ut algene og blir hvite – de **blekes**. Blekingen dreper ikke korallen med en gang, men den kan ikke vokse normalt uten algene. Store blekinger har blitt hyppigere i takt med at havet har blitt varmere.', 'Corals live together with tiny algae that give them 80–90 per cent of their energy. When the water gets too warm, the corals expel the algae and turn white – they are **bleached**. Bleaching does not kill the coral right away, but it cannot grow normally without the algae. Large bleaching events have become more frequent as the ocean has warmed.'), src: ['snl-korallbleking', 'snl-korallrev'] }
        ] },
        { id: 'flere', title: o('Se flere eksempler fra hele verden', 'See more examples from all over the world'), blocks: [
          { link: { href: 'https://science.nasa.gov/earth/earth-observatory/world-of-change/', icon: 'ext', title: o('NASA: World of Change', 'NASA: World of Change'), text: o('Satellittbilder av isbreer, havis, innsjøer, skog og byer som endrer seg over mange år (engelsk).', 'Satellite images of glaciers, sea ice, lakes, forests and cities changing over many years.') } },
          { link: { href: 'https://science.nasa.gov/climate-change/effects/', icon: 'ext', title: o('NASA: The Effects of Climate Change', 'NASA: The Effects of Climate Change'), text: o('Hvordan klimaendringene påvirker ulike deler av verden (engelsk).', 'How climate change affects different parts of the world.') } },
          { link: { href: 'https://ndla.no/r/geografi/konsekvenser-av-klimaendringer/a39499baf1', icon: 'ext', title: o('NDLA: Konsekvenser av klimaendringer', 'NDLA: Consequences of climate change'), text: o('Konsekvenser i Norge og i resten av verden.', 'Consequences in Norway and the rest of the world.') } }
        ] }
      ]
    }
  };

  /* =================== Klimafotavtrykk =================== */
  T.pages.fotavtrykk = {
    type: 'footprint',
    title: o('Klimafotavtrykk – en modell', 'Carbon footprint – a model'),
    lead: o('Hvor mye utslipp kommer fra reisen til skolen, ferien og middagene dine? Endre valgene og se hva som betyr mest.', 'How much emissions come from your trip to school, your holiday and your dinners? Change the choices and see what matters most.'),
    footprint: {
      disclaimer: o('Tallene er **gjennomsnitt** fra forskning: transport fra Storbritannia (2022) og mat fra hele verden. Ekte utslipp **varierer mye** – med bilen, hvor mange som sitter i den, hvordan maten er produsert og mye mer. I Norge er strømmen nesten utslippsfri, så en elbil gir mindre utslipp her enn tallet viser. Storfekjøtt fra melkekyr gir rundt en tredel så mye utslipp som storfe fra rene kjøttfe-besetninger. Bruk modellen til å **sammenligne** – ikke som en fasit.', 'The numbers are **averages** from research: transport from the UK (2022) and food from the whole world. Real emissions **vary a lot** – with the car, how many people are in it, how the food is produced and much more. In Norway electricity is almost emission-free, so an electric car gives lower emissions here than the number shows. Beef from dairy cows gives about a third of the emissions of beef from dedicated beef herds. Use the model to **compare** – not as an answer key.'),
      school: { title: o('Til og fra skolen', 'To and from school'), how: o('Hvordan kommer du deg til skolen?', 'How do you get to school?'), dist: o('Hvor langt er det til skolen (én vei)?', 'How far is it to school (one way)?'), days: 190,
        modes: [
          { id: 'gaa', name: o('Går eller sykler', 'Walk or cycle'), g: 0 },
          { id: 'buss', name: o('Buss', 'Bus'), g: 96.5 },
          { id: 'tog', name: o('Tog', 'Train'), g: 35.5 },
          { id: 'trikk', name: o('Trikk eller T-bane', 'Tram or metro'), g: 28.6 },
          { id: 'elbil', name: o('Blir kjørt i elbil', 'Driven in an electric car'), g: 47.1 },
          { id: 'bil', name: o('Blir kjørt i bensin- eller dieselbil', 'Driven in a petrol or diesel car'), g: 170.5 }
        ] },
      trip: { title: o('Ferie og reiser', 'Holidays and trips'), how: o('Hvordan reiser du?', 'How do you travel?'), dist: o('Hvor langt er reisen (én vei)?', 'How long is the trip (one way)?'), count: o('Hvor mange slike reiser i året (tur–retur)?', 'How many such trips a year (return)?'),
        modes: [
          { id: 'fly', name: o('Fly (kortere reise, f.eks. i Europa)', 'Plane (shorter trip, e.g. in Europe)'), g: 151 },
          { id: 'flylang', name: o('Fly (lang reise, f.eks. til USA eller Asia)', 'Plane (long trip, e.g. to the USA or Asia)'), g: 147.9 },
          { id: 'tog', name: o('Tog', 'Train'), g: 35.5 },
          { id: 'bil', name: o('Bensin- eller dieselbil', 'Petrol or diesel car'), g: 170.5 },
          { id: 'elbil', name: o('Elbil', 'Electric car'), g: 47.1 },
          { id: 'buss', name: o('Langrutebuss', 'Long-distance coach'), g: 27.3 },
          { id: 'ferge', name: o('Ferge (uten bil)', 'Ferry (without a car)'), g: 18.7 }
        ] },
      food: { title: o('Middager', 'Dinners'), help: o('Hvor mange middager i uka spiser du med hver av disse? Vi regner med ca. 150 gram kjøtt, fisk eller bønner per porsjon.', 'How many dinners a week do you eat with each of these? We count about 150 grams of meat, fish or beans per portion.'),
        items: [
          { id: 'storfe', name: o('Storfekjøtt (kjøttfe)', 'Beef (beef herd)'), co2: 99.5, kg: 0.15, start: 1 },
          { id: 'lam', name: o('Lam og sau', 'Lamb and mutton'), co2: 39.7, kg: 0.15, start: 0 },
          { id: 'svin', name: o('Svinekjøtt', 'Pork'), co2: 12.3, kg: 0.15, start: 1 },
          { id: 'kylling', name: o('Kylling', 'Chicken'), co2: 9.9, kg: 0.15, start: 2 },
          { id: 'fisk', name: o('Oppdrettsfisk', 'Farmed fish'), co2: 13.6, kg: 0.15, start: 2 },
          { id: 'bonner', name: o('Vegetar: bønner, linser og erter', 'Vegetarian: beans, lentils and peas'), co2: 1.8, kg: 0.15, start: 1 }
        ] },
      discuss: o('Hva gir størst utslipp i ditt eksempel? Hvilken endring ville betydd mest – og hvilken ville vært lettest å gjøre? Er det noe modellen ikke tar med?', 'What gives the largest emissions in your example? Which change would make the biggest difference – and which would be easiest to make? Is there anything the model leaves out?'),
      src: ['owid-reise', 'owid-mat', 'owid-lokalmat']
    },
    page: {
      sections: [
        { id: 'om', title: o('Om tallene', 'About the numbers'), blocks: [
          { p: o('Utslipp regnes ofte i **kg CO₂-ekvivalenter** (CO₂e). Det betyr at også andre drivhusgasser, som metan og lystgass, er regnet om til hvor mye CO₂ som ville gitt like mye oppvarming.', 'Emissions are often counted in **kg CO₂ equivalents** (CO₂e). This means that other greenhouse gases, such as methane and nitrous oxide, are converted into how much CO₂ would give the same amount of warming.'), src: ['owid-mat'] },
          { p: o('For maten betyr **hva** du spiser mye mer enn **hvor langt** maten er fraktet. Transporten er vanligvis en liten del av utslippene fra mat.', 'For food, **what** you eat matters much more than **how far** the food has travelled. Transport is usually a small part of the emissions from food.'), src: ['owid-lokalmat'] },
          { fact: o('Modellen tar ikke med alt: klær, mobiltelefoner, strøm hjemme, oppvarming og alt annet vi kjøper. Den er laget for å vise **forskjeller** mellom valg.', 'The model does not include everything: clothes, mobile phones, electricity at home, heating and everything else we buy. It is made to show **differences** between choices.') }
        ] }
      ]
    }
  };

  /* =================== Les forskning: helhetslesing =================== */
  const tq = (q, extra) => Object.assign({ q: q }, extra || {});
  T.pages.lesing = {
    title: o('Les forskning: Helhetslesing og kildekritikk', 'Read research: whole-text reading and source criticism'),
    lead: o('Velg en artikkel fra forskning.no. Jobb deg gjennom fire steg: før du leser, mens du leser, etter at du har lest – og kildekritikk.', 'Choose an article from forskning.no. Work through four steps: before you read, while you read, after you have read – and source criticism.'),
    page: {
      goals: [
        o('lese en populærvitenskapelig artikkel og forstå **helheten** og hovedpoengene', 'read a popular science article and understand **the whole** and the main points'),
        o('gi eksempler på **dagsaktuell forskning** og drøfte hvordan ny kunnskap blir til', 'give examples of **current research** and discuss how new knowledge is created'),
        o('vurdere en kilde: hvem står bak, hva bygger den på, og kan vi stole på den?', 'assess a source: who is behind it, what is it based on, and can we trust it?')
      ],
      sections: [
        { id: 'metode', title: o('Slik jobber du', 'How to work'), blocks: [
          { p: o('Du leser artikkelen på forskning.no i en egen fane, og skriver svarene dine her. Følg stegene: Først blir du kjent med **helheten** – overskrift, bilder og ingress – og tenker over hva du vet fra før. Så leser du artikkelen **del for del** og stopper opp underveis. Til slutt oppsummerer du og **vurderer kilden**.', 'You read the article on forskning.no in a separate tab and write your answers here. Follow the steps: first you get to know **the whole** – headline, pictures and introduction – and think about what you already know. Then you read the article **part by part** and stop along the way. Finally you summarise and **assess the source**.'), src: ['statped-helhet', 'ndla-kildekritikk'] },
          { reading: {
            phases: {
              before: { title: o('Før du leser', 'Before you read'), text: o('Se på overskriften, bildene, bildetekstene og ingressen (den uthevede teksten øverst). Ikke les hele artikkelen ennå! Tenk over hva du vet fra før, og hva artikkelen kommer til å handle om.', 'Look at the headline, the pictures, the captions and the introduction (the bold text at the top). Do not read the whole article yet! Think about what you already know, and what the article is going to be about.') },
              during: { title: o('Mens du leser', 'While you read'), text: o('Les artikkelen i biter. Stopp etter hver del og svar på spørsmålet. Marker ord du ikke forstår, og slå dem opp i ordlisten.', 'Read the article in chunks. Stop after each part and answer the question. Mark words you do not understand, and look them up in the glossary.') },
              after: { title: o('Etter at du har lest', 'After you have read'), text: o('Se på helheten igjen. Hva var hovedpoenget? Hvordan henger det sammen med det du har lært i dette temaet?', 'Look at the whole again. What was the main point? How does it connect to what you have learned in this topic?') },
              critic: { title: o('Kildekritikk', 'Source criticism'), text: o('Hvem står bak artikkelen, og hva bygger den på? Kan vi stole på den? Bruk spørsmålene under.', 'Who is behind the article, and what is it based on? Can we trust it? Use the questions below.') }
            },
            articles: [
              { id: 'rondane', title: 'Høyt oppå snaufjellet i Rondane ligger det furustokker. Hvordan havnet de der?', url: 'https://www.forskning.no/istiden-klima/hoyt-oppa-snaufjellet-i-rondane-ligger-det-furustokker-hvordan-havnet-de-der/2739002',
                publisher: 'forskning.no', author: 'Elise Kjørstad', date: '20.11.2026', kind: o('nyhetsartikkel om ny forskning', 'news article about new research'),
                about: o('Gamle trestokker høyt over skoggrensa forteller om et varmere klima etter istida. Passer til del 4.', 'Old logs high above the tree line tell of a warmer climate after the ice age. Fits part 4.'),
                before: [
                  tq(o('Les overskriften og se på bildene. Hva tror du artikkelen handler om?', 'Read the headline and look at the pictures. What do you think the article is about?')),
                  tq(o('Hva er en **skoggrense**? Hva tror du bestemmer hvor høyt opp i fjellet trærne kan vokse?', 'What is a **tree line**? What do you think decides how high up the mountain trees can grow?')),
                  tq(o('Skriv ett spørsmål du håper artikkelen svarer på.', 'Write one question you hope the article answers.'), { rows: 2 })
                ],
                words: [
                  { w: o('Skoggrense', 'Tree line (forest line)'), def: o('Den høyeste grensen for sammenhengende skog i fjellet. Den styres særlig av sommertemperaturen.', 'The highest limit for continuous forest in the mountains. It is controlled especially by the summer temperature.') },
                  { w: o('Datere', 'Date (verb)'), def: o('Finne ut hvor gammelt noe er.', 'Find out how old something is.') },
                  { w: o('Pollen', 'Pollen'), def: o('Små korn fra blomster og trær. Pollen som er bevart i myr og innsjøer, viser hvilke planter som vokste der før.', 'Tiny grains from flowers and trees. Pollen preserved in bogs and lakes shows which plants grew there before.') },
                  { w: o('Klimamodell', 'Climate model'), def: o('Et dataprogram som regner ut hvordan klimaet var eller vil bli.', 'A computer program that calculates what the climate was or will be like.') },
                  { w: o('The Holocene', 'The Holocene'), def: o('Et vitenskapelig tidsskrift. Holocen er navnet på tiden etter siste istid.', 'A scientific journal. The Holocene is the name of the time after the last ice age.') }
                ],
                during: [
                  tq(o('**Starten av artikkelen:** Hvem er forskerne, og hva har de lett etter?', '**The start of the article:** Who are the researchers, and what have they been looking for?')),
                  tq(o('**Midten:** Hvor mange stokker har de undersøkt, og hvor er funnene publisert?', '**The middle:** How many logs have they examined, and where have the findings been published?'), { answer: o('97 trestammer funnet fra 2008 til nå. Funnene er publisert i det vitenskapelige tidsskriftet The Holocene.', '97 tree trunks found from 2008 until now. The findings are published in the scientific journal The Holocene.') }),
                  tq(o('**Midten:** Hvor høyt sto furuskogen for 8000–9000 år siden, og hva sier det om temperaturen?', '**The middle:** How high did the pine forest reach 8000–9000 years ago, and what does that say about the temperature?'), { answer: o('180 meter høyere enn i dag. Skoggrensa stiger rundt 130 meter per grad, så somrene var minst 1,2 grader varmere enn nå.', '180 metres higher than today. The tree line rises about 130 metres per degree, so the summers were at least 1.2 degrees warmer than now.') }),
                  tq(o('**Slutten:** Hvordan kan funnene brukes til å forbedre klimamodeller?', '**The end:** How can the findings be used to improve climate models?'))
                ],
                after: [
                  tq(o('Skriv et sammendrag av artikkelen med maks tre setninger.', 'Write a summary of the article in at most three sentences.'), { rows: 4 }),
                  tq(o('Hva var det viktigste du lærte? Stemte det du tenkte før du leste?', 'What was the most important thing you learned? Did it match what you thought before reading?')),
                  tq(o('Noen bruker slike funn til å si at dagens oppvarming er naturlig. Hva vil du svare? Bruk det du har lært i del 4.', 'Some use findings like these to say that today’s warming is natural. What would you answer? Use what you learned in part 4.'), { answer: o('Funnene viser at klimaet kan endre seg av naturlige grunner. Men dagens oppvarming går mye fortere, og de naturlige faktorene kan ikke forklare den. Hovedårsaken nå er menneskenes utslipp av drivhusgasser.', 'The findings show that the climate can change for natural reasons. But today’s warming is much faster, and the natural factors cannot explain it. The main cause now is human greenhouse gas emissions.') })
                ],
                critic: [
                  tq(o('Hvem har skrevet artikkelen, og når? Hva slags nettsted er forskning.no?', 'Who wrote the article, and when? What kind of website is forskning.no?'), { answer: o('Journalisten Elise Kjørstad, 20. november 2026. forskning.no er en nettavis for forskningsnyheter som følger Redaktørplakaten. Den eies av en forening der rundt 80 norske forskningsinstitusjoner er medlemmer. Medlemmene kan også sende inn egne saker, men de er tydelig merket.', 'The journalist Elise Kjørstad, 20 November 2026. forskning.no is an online newspaper for research news that follows the Norwegian code of editorial ethics. It is owned by an association with about 80 Norwegian research institutions as members. Members can also submit their own articles, but these are clearly labelled.') }),
                  tq(o('Hva bygger artikkelen på? Er forskningen vurdert av andre forskere?', 'What is the article based on? Has the research been checked by other scientists?'), { answer: o('Den bygger på en vitenskapelig artikkel i tidsskriftet The Holocene. Artikler i slike tidsskrifter blir vanligvis vurdert av andre forskere før de publiseres (fagfellevurdering).', 'It is based on a scientific article in the journal The Holocene. Articles in such journals are usually checked by other scientists before publication (peer review).') }),
                  tq(o('Hvem blir intervjuet? Er det noen som er uenige, eller som kommenterer forskningen utenfra?', 'Who is interviewed? Is there anyone who disagrees, or who comments on the research from outside?')),
                  tq(o('Ville du brukt denne artikkelen som kilde i en oppgave? Begrunn svaret.', 'Would you use this article as a source in an assignment? Give reasons.'))
                ] },
              { id: 'utslipp', title: 'Dette gjør at de globale utslippene går litt ned i år', url: 'https://www.forskning.no/forurensning-klima/dette-gjor-at-de-globale-utslippene-gar-litt-ned-i-ar/2735829',
                publisher: 'forskning.no', author: 'Elise Kjørstad', date: '10.11.2026', kind: o('nyhetsartikkel om en ny rapport', 'news article about a new report'),
                about: o('Hvordan ligger verden an med utslippene? Om den nye rapporten fra Global Carbon Project. Passer til del 5.', 'How is the world doing with emissions? About the new report from the Global Carbon Project. Fits part 5.'),
                before: [
                  tq(o('Les overskriften og ingressen. Tror du utslippene går ned fordi verden har kuttet med vilje? Skriv hva du tror.', 'Read the headline and introduction. Do you think emissions are falling because the world has cut them on purpose? Write what you think.')),
                  tq(o('Hva vet du fra før om **Parisavtalen** og **1,5-gradersmålet**?', 'What do you already know about **the Paris Agreement** and **the 1.5 degree goal**?')),
                  tq(o('Skriv ett spørsmål du håper artikkelen svarer på.', 'Write one question you hope the article answers.'), { rows: 2 })
                ],
                words: [
                  { w: o('Global Carbon Project', 'Global Carbon Project'), def: o('Et internasjonalt forskersamarbeid som hvert år regner ut verdens karbonregnskap.', 'An international research collaboration that calculates the world’s carbon budget every year.') },
                  { w: o('Karbonbudsjett', 'Carbon budget'), def: o('Hvor mye CO₂ vi kan slippe ut før vi passerer en temperaturgrense.', 'How much CO₂ we can emit before we pass a temperature limit.') },
                  { w: o('Arealbruksendringer', 'Land-use change'), def: o('Når natur blir gjort om til noe annet, for eksempel når skog hogges for å lage åkre.', 'When nature is turned into something else, for example when forest is cut down to make fields.') },
                  { w: o('El Niño', 'El Niño'), def: o('Et værfenomen i Stillehavet som gir varmere og tørrere vær mange steder i noen år.', 'A weather phenomenon in the Pacific that gives warmer and drier weather in many places for some years.') },
                  { w: o('Netto null', 'Net zero'), def: o('Når vi ikke slipper ut mer CO₂ enn vi fjerner fra lufta.', 'When we do not emit more CO₂ than we remove from the air.') }
                ],
                during: [
                  tq(o('**Starten:** Hvor mye ventes utslippene å endre seg i 2026, og hva er hovedgrunnen?', '**The start:** How much are emissions expected to change in 2026, and what is the main reason?'), { answer: o('De ventes å synke med 0,4 prosent. Hovedgrunnen er stengningen av Hormuzstredet, som ga dyrere og mindre olje og gass – ikke klimatiltak.', 'They are expected to fall by 0.4 per cent. The main reason is the closure of the Strait of Hormuz, which made oil and gas more expensive and scarcer – not climate action.') }),
                  tq(o('**Midten:** Hva sier forskeren om 1,5-gradersmålet?', '**The middle:** What does the scientist say about the 1.5 degree goal?')),
                  tq(o('**Midten:** Hvordan går det med utslippene i Kina, USA og EU?', '**The middle:** How are emissions developing in China, the USA and the EU?')),
                  tq(o('**Slutten:** Hvor stor del av utslippene tas opp av hav og land, og hvorfor er forskerne bekymret for Amazonas?', '**The end:** How large a part of the emissions is taken up by the ocean and land, and why are the scientists worried about the Amazon?'), { answer: o('Rundt halvparten tas opp av hav og land. Et varmere klima og sterk El Niño gjør Amazonas tørrere, og da kan vegetasjonen ta opp mindre CO₂.', 'About half is taken up by the ocean and land. A warmer climate and a strong El Niño make the Amazon drier, and then the vegetation may take up less CO₂.') })
                ],
                after: [
                  tq(o('Skriv et sammendrag av artikkelen med maks tre setninger.', 'Write a summary of the article in at most three sentences.'), { rows: 4 }),
                  tq(o('Finn ett tegn i artikkelen på at det går **riktig vei**, og ett tegn på at det går **feil vei**.', 'Find one sign in the article that things are going **the right way**, and one sign that they are going **the wrong way**.')),
                  tq(o('Hvorfor sier forskeren at han skulle ønske utslippene gikk ned av andre grunner enn krig?', 'Why does the scientist say he wishes emissions were falling for reasons other than war?'))
                ],
                critic: [
                  tq(o('Hvem er forskeren som blir intervjuet, og hvor jobber han?', 'Who is the scientist interviewed, and where does he work?'), { answer: o('Kjetil Aas, klimaforsker ved CICERO Senter for klimaforskning. Han har vært med på rapporten.', 'Kjetil Aas, climate scientist at CICERO Center for International Climate Research. He took part in the report.') }),
                  tq(o('Forskeren har selv vært med på rapporten. Er det en styrke eller en svakhet? Hva mangler eventuelt?', 'The scientist took part in the report himself. Is that a strength or a weakness? What, if anything, is missing?')),
                  tq(o('Tallene for 2026 er et **anslag** (forskernes beste beregning) før året er over. Hvorfor er det viktig å vite?', 'The numbers for 2026 are an **estimate** (the scientists’ best calculation) before the year is over. Why is that important to know?')),
                  tq(o('Ville du brukt denne artikkelen som kilde i en oppgave? Begrunn svaret.', 'Would you use this article as a source in an assignment? Give reasons.'))
                ] }
            ]
          } }
        ] },
        { id: 'partner', title: o('Ekstra: Hvem har betalt for artikkelen?', 'Extra: Who paid for the article?'), blocks: [
          { p: o('På forskning.no finnes det også **partnerinnhold**. Over slike saker står det for eksempel: «Denne artikkelen er produsert og finansiert av Universitetet i Bergen». Da er det universitetet selv som har skrevet og betalt for saken – ikke en uavhengig journalist.', 'On forskning.no there is also **partner content**. Above such articles it says, for example: “This article is produced and funded by the University of Bergen”. Then it is the university itself that has written and paid for the article – not an independent journalist.'), src: ['fno-partner', 'fno-om'] },
          { fact: o('forskning.no har også en egen side for lesere mellom 8 og 15 år: UNG.forskning.no.', 'forskning.no also has its own site for readers aged 8 to 15: UNG.forskning.no.'), src: ['fno-om'] },
          { discuss: o('Se på artikkelen «Havet stiger, men det rammer ulikt verden over». Hvordan ser du at det er partnerinnhold? Betyr det at innholdet er feil? Hva bør du være ekstra oppmerksom på?', 'Look at the article “Havet stiger, men det rammer ulikt verden over” (The sea is rising, but it affects the world differently). How can you tell it is partner content? Does that mean the content is wrong? What should you pay extra attention to?') },
          { link: { href: 'https://www.forskning.no/havet-klimaendringer-partner/havet-stiger-men-det-rammer-ulikt-verden-over/2545939', icon: 'ext', title: o('Åpne partnerartikkelen', 'Open the partner article'), text: o('forskning.no, 6. september 2025', 'forskning.no, 6 September 2025') } },
          { link: { href: 'https://kildekompasset.no/', icon: 'ext', title: o('Kildekompasset', 'Kildekompasset'), text: o('Mer om kildekritikk og kildebruk.', 'More about source criticism and using sources.') } }
        ] }
      ],
      resources: ['ndla-kildekritikk', 'ndla-vitenskap-kilde', 'kildekompasset']
    }
  };

  /* =================== Forsøk 1: Drivhus i et glass =================== */
  T.pages.forsokdrivhus = {
    type: 'fieldwork',
    title: o('Forsøk: Drivhuseffekt i to glass', 'Experiment: The greenhouse effect in two jars'),
    lead: o('Blir lufta varmere når det er mer CO₂ i den? Sammenlign to glass under en lampe – ett med vanlig luft og ett med ekstra CO₂.', 'Does the air get warmer when there is more CO₂ in it? Compare two jars under a lamp – one with ordinary air and one with extra CO₂.'),
    page: {
      goals: [
        o('stille spørsmål og lage en **hypotese**, og identifisere **avhengige og uavhengige variabler**', 'ask a question and make a **hypothesis**, and identify **dependent and independent variables**'),
        o('delta i en **risikovurdering** og følge sikkerhetstiltakene', 'take part in a **risk assessment** and follow the safety measures'),
        o('vurdere **kvaliteten** på forsøket og hva en modell kan og ikke kan vise', 'assess the **quality** of the experiment and what a model can and cannot show')
      ],
      sections: [
        { id: 'utstyr', title: o('Utstyr og framgangsmåte', 'Equipment and method'), blocks: [
          { list: [
            o('2 like glasskrukker eller plastflasker med lokk, 2 termometre (helst digitale), en sterk lampe (eller sola), tape', '2 identical glass jars or plastic bottles with lids, 2 thermometers (preferably digital), a strong lamp (or the sun), tape'),
            o('Til CO₂: bakepulver (natron) og eddik i et lite beger, eller en brusetablett i litt vann', 'For CO₂: baking soda and vinegar in a small cup, or an effervescent tablet in a little water'),
            o('Stoppeklokke', 'Stopwatch')
          ] },
          { steps: { figure: 'forsokglass', title: o('Slik gjør dere', 'What to do'), steps: [
            { title: o('Gjør klart', 'Get ready'), text: o('Fest et termometer inni hver krukke, like høyt. Merk krukkene **A (vanlig luft)** og **B (ekstra CO₂)**.', 'Fix a thermometer inside each jar, at the same height. Label the jars **A (ordinary air)** and **B (extra CO₂)**.') },
            { title: o('Lag CO₂', 'Make CO₂'), text: o('Sett et lite beger med litt eddik i krukke B, og tilsett en teskje natron. Det bruser – det er CO₂. Sett et beger med like mye vann i krukke A. Skru på lokkene.', 'Put a small cup with a little vinegar in jar B, and add a teaspoon of baking soda. It fizzes – that is CO₂. Put a cup with the same amount of water in jar A. Screw on the lids.') },
            { title: o('Start likt', 'Start the same'), text: o('Vent til begge termometrene viser samme temperatur. Sett så krukkene **like langt** fra lampa, og skru på lampa.', 'Wait until both thermometers show the same temperature. Then place the jars **the same distance** from the lamp, and switch on the lamp.') },
            { title: o('Mål', 'Measure'), text: o('Les av temperaturen i begge krukkene hvert minutt i 15 minutter. Skriv inn i skjemaet under.', 'Read the temperature in both jars every minute for 15 minutes. Write it in the sheet below.') }
          ] } }
        ] },
        { id: 'sikkerhet', title: o('Risikovurdering og sikkerhet', 'Risk assessment and safety'), blocks: [
          { list: [
            o('Lampa blir **varm**. Ikke ta på pæra, og hold papir og ledninger unna.', 'The lamp gets **hot**. Do not touch the bulb, and keep paper and cables away.'),
            o('Bruk **vernebriller** når dere blander eddik og natron. Eddik svir i øynene.', 'Wear **safety glasses** when mixing vinegar and baking soda. Vinegar stings in the eyes.'),
            o('Glass kan knuse. Bruk plastflasker hvis dere kan.', 'Glass can break. Use plastic bottles if you can.')
          ] },
          { discuss: o('Hva kan gå galt i dette forsøket, og hva gjør dere for å unngå det? Skriv risikovurderingen i skjemaet.', 'What can go wrong in this experiment, and what will you do to avoid it? Write the risk assessment in the sheet.') }
        ] },
        { id: 'vurder', title: o('Hva viser forsøket – og hva viser det ikke?', 'What does the experiment show – and what does it not?'), blocks: [
          { model: o('Krukka er en **modell** av atmosfæren, men en svært forenklet en. I krukka er det mye mer CO₂ enn i lufta, lyset kommer fra en lampe, og krukka holder også på varm luft. CO₂ er dessuten tyngre enn luft. Forskjellen dere måler, er derfor ofte liten – og kan skyldes andre ting enn drivhuseffekten. Det er et viktig poeng å diskutere!', 'The jar is a **model** of the atmosphere, but a very simplified one. In the jar there is much more CO₂ than in the air, the light comes from a lamp, and the jar also traps warm air. CO₂ is also heavier than air. The difference you measure is therefore often small – and may be due to things other than the greenhouse effect. That is an important point to discuss!'), src: ['snl-drivhuseffekten'] }
        ] }
      ],
      resources: ['ndla-drivhus', 'snl-drivhuseffekten']
    },
    sheet: {
      kicker: o('Forsøksskjema', 'Experiment sheet'),
      title: o('Blir lufta varmere med mer CO₂?', 'Does the air get warmer with more CO₂?'),
      sections: [
        { title: o('Om forsøket', 'About the experiment'), fields: [
          { type: 'text', label: o('Navn i gruppa', 'Names in the group') },
          { type: 'text', label: o('Dato', 'Date') }
        ] },
        { title: o('Spørsmål og hypotese', 'Question and hypothesis'), fields: [
          { type: 'area', label: o('Forskningsspørsmål', 'Research question'), rows: 2 },
          { type: 'area', label: o('Hypotese – hva tror dere skjer, og hvorfor?', 'Hypothesis – what do you think will happen, and why?'), rows: 3 },
          { type: 'text', label: o('Uavhengig variabel (det dere endrer)', 'Independent variable (what you change)') },
          { type: 'text', label: o('Avhengig variabel (det dere måler)', 'Dependent variable (what you measure)') },
          { type: 'area', label: o('Kontrollerte variabler (det som skal være likt)', 'Controlled variables (what must stay the same)'), rows: 2 }
        ] },
        { title: o('Risikovurdering', 'Risk assessment'), fields: [
          { type: 'area', label: o('Hva kan gå galt, og hva gjør vi for å unngå det?', 'What can go wrong, and what do we do to avoid it?'), rows: 3 }
        ] },
        { title: o('Målinger (°C)', 'Measurements (°C)'), fields: [
          { type: 'table', label: o('Temperatur i krukkene', 'Temperature in the jars'), cols: [o('Minutt', 'Minute'), o('A: vanlig luft', 'A: ordinary air'), o('B: ekstra CO₂', 'B: extra CO₂')], rows: 16 }
        ] },
        { title: o('Resultat og drøfting', 'Results and discussion'), fields: [
          { type: 'area', label: o('Hva fant dere ut? Stemte hypotesen?', 'What did you find? Was the hypothesis right?'), rows: 3 },
          { type: 'area', label: o('Hvilke feilkilder kan det være?', 'What sources of error might there be?'), rows: 3 },
          { type: 'area', label: o('På hvilke måter er krukka en god og en dårlig modell av atmosfæren?', 'In what ways is the jar a good and a bad model of the atmosphere?'), rows: 3 }
        ] }
      ]
    }
  };

  /* =================== Forsøk 2: Surere vann =================== */
  T.pages.forsokhav = {
    type: 'fieldwork',
    title: o('Forsøk: CO₂ gjør vann surere', 'Experiment: CO₂ makes water more acidic'),
    lead: o('Pust CO₂ ned i vann med en fargeindikator og se fargen endre seg. Undersøk så hva surt vann gjør med skjell og eggeskall.', 'Breathe CO₂ into water with a colour indicator and watch the colour change. Then investigate what acidic water does to shells and eggshells.'),
    page: {
      goals: [
        o('vise at CO₂ gjør vann surere, og forklare hva **forsuring av havet** er', 'show that CO₂ makes water more acidic, and explain what **ocean acidification** is'),
        o('planlegge og gjennomføre et forsøk med **kontroll**, og registrere data', 'plan and carry out an experiment with a **control**, and record data')
      ],
      sections: [
        { id: 'del1', title: o('Del 1: Blås CO₂ i vann', 'Part 1: Blow CO₂ into water'), blocks: [
          { list: [
            o('**Utstyr:** 2 glass med vann, en fargeindikator (BTB – bromtymolblått – fra skolen, eller saft fra kokt rødkål), sugerør.', '**Equipment:** 2 glasses of water, a colour indicator (BTB – bromothymol blue – from school, or juice from boiled red cabbage), straws.'),
            o('Ha like mye indikator i begge glassene. Glass 1 er **kontroll** – det skal dere ikke gjøre noe med.', 'Put the same amount of indicator in both glasses. Glass 1 is the **control** – you do nothing to it.'),
            o('Blås rolig gjennom sugerøret ned i glass 2 i to minutter. **Pust ut – aldri sug inn!**', 'Blow gently through the straw into glass 2 for two minutes. **Breathe out – never suck in!**'),
            o('Sammenlign fargene. BTB går fra blått mot gult når vannet blir surere. Rødkålsaft går fra lilla mot rosa.', 'Compare the colours. BTB goes from blue towards yellow when the water becomes more acidic. Red cabbage juice goes from purple towards pink.')
          ], src: ['ndla-forsok-forsuring', 'ndla-forsok-skjell'] },
          { p: o('Lufta du puster ut, har rundt 5 prosent CO₂. CO₂ løser seg i vannet og danner **karbonsyre**, og vannet blir surere. Det samme skjer i havet når det tar opp CO₂ fra lufta.', 'The air you breathe out contains about 5 per cent CO₂. CO₂ dissolves in the water and forms **carbonic acid**, and the water becomes more acidic. The same happens in the ocean when it takes up CO₂ from the air.'), src: ['snl-karbonkretslopet', 'snl-havforsuring'] }
        ] },
        { id: 'del2', title: o('Del 2: Skjell i surt vann (over flere dager)', 'Part 2: Shells in acidic water (over several days)'), blocks: [
          { list: [
            o('Legg like store biter av skjell eller eggeskall i tre glass. Vei bitene først.', 'Put equal-sized pieces of shell or eggshell in three glasses. Weigh the pieces first.'),
            o('Glass 1: vann. Glass 2: vann som dere har blåst CO₂ i. Glass 3: eddik (veldig surt – for å se tydelig effekt).', 'Glass 1: water. Glass 2: water you have blown CO₂ into. Glass 3: vinegar (very acidic – to see a clear effect).'),
            o('Sett lokk på, og vei bitene hver dag i noen dager. Tørk dem før dere veier.', 'Put lids on, and weigh the pieces every day for a few days. Dry them before weighing.')
          ], src: ['ndla-forsok-skjell'] },
          { model: o('Eddik er mye surere enn havet vil bli. Glass 3 viser **hva som skjer med kalk i syre**, men det er ikke en modell av hvor fort havet blir surere. Endringen i havet er liten per år, men varer i lang tid.', 'Vinegar is much more acidic than the ocean will become. Glass 3 shows **what happens to lime in acid**, but it is not a model of how fast the ocean becomes more acidic. The change in the ocean is small per year, but lasts a long time.'), src: ['snl-havforsuring'] },
          { list: [
            o('**Sikkerhet:** Bruk vernebriller når dere jobber med eddik og indikator. Ikke drikk av noe. Vask hendene etterpå.', '**Safety:** Wear safety glasses when working with vinegar and indicator. Do not drink anything. Wash your hands afterwards.')
          ] }
        ] }
      ],
      resources: ['ndla-forsok-forsuring', 'ndla-forsok-skjell', 'yt-forsuring']
    },
    sheet: {
      kicker: o('Forsøksskjema', 'Experiment sheet'),
      title: o('Hva gjør CO₂ med vann – og med skjell?', 'What does CO₂ do to water – and to shells?'),
      sections: [
        { title: o('Om forsøket', 'About the experiment'), fields: [
          { type: 'text', label: o('Navn i gruppa', 'Names in the group') },
          { type: 'text', label: o('Dato', 'Date') },
          { type: 'area', label: o('Hypotese – hva tror dere skjer med fargen og med skjellene?', 'Hypothesis – what do you think will happen to the colour and to the shells?'), rows: 3 }
        ] },
        { title: o('Del 1: Fargen', 'Part 1: The colour'), fields: [
          { type: 'text', label: o('Indikator vi brukte', 'Indicator we used') },
          { type: 'text', label: o('Farge i glass 1 (kontroll)', 'Colour in glass 1 (control)') },
          { type: 'text', label: o('Farge i glass 2 etter blåsing', 'Colour in glass 2 after blowing') }
        ] },
        { title: o('Del 2: Massen til skjellene (gram)', 'Part 2: The mass of the shells (grams)'), fields: [
          { type: 'table', label: o('Vekt hver dag', 'Weight each day'), cols: [o('Dag', 'Day'), o('Glass 1: vann', 'Glass 1: water'), o('Glass 2: CO₂-vann', 'Glass 2: CO₂ water'), o('Glass 3: eddik', 'Glass 3: vinegar')], rows: 6 }
        ] },
        { title: o('Drøfting', 'Discussion'), fields: [
          { type: 'area', label: o('Hva fant dere ut? Stemte hypotesen?', 'What did you find? Was the hypothesis right?'), rows: 3 },
          { type: 'area', label: o('Hva kan forsuring av havet bety for skjell, koraller og plankton med kalkskall?', 'What can ocean acidification mean for shellfish, corals and plankton with lime shells?'), rows: 3 }
        ] }
      ]
    }
  };
})();
