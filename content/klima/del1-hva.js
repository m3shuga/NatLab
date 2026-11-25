/* =====================================================================
   Klimaendringer – DEL 01: HVA ER KLIMAENDRINGER?
   ===================================================================== */
NatLab.topic('klima').organisms.hva = {
  code: '01',
  title: { nb: 'Hva er klimaendringer?', en: 'What is climate change?' },
  sub: { nb: 'Vær, klima og klimasystemet – og hva som har endret seg.', en: 'Weather, climate and the climate system – and what has changed.' },
  lead: {
    nb: 'Klimaet er et system der sola, lufta, havet, isen, landjorda og livet henger sammen. Klikk på delene for å lære hva de gjør.',
    en: 'The climate is a system in which the sun, the air, the ocean, the ice, the land and life are connected. Click on the parts to learn what they do.'
  },
  art: 'klimasystem',
  diagrams: ['klimasystem'],
  modelNames: { klimasystem: { nb: 'Klimasystemet', en: 'The climate system' } },
  intro: { nb: 'Start med «Vær» og «Klima» – de to ordene blandes ofte sammen.', en: 'Start with “Weather” and “Climate” – the two words are often mixed up.' },
  practiceHref: '#klima-ov-merk-klimasystem',
  extraTabs: [{ href: '#klima-forogetter', icon: 'eye', label: { nb: 'Før og etter', en: 'Before and after' } }],

  page: {
    goals: [
      { nb: 'forklare forskjellen på **vær** og **klima**', en: 'explain the difference between **weather** and **climate**' },
      { nb: 'forklare hva **global oppvarming** og **klimaendringer** er', en: 'explain what **global warming** and **climate change** are' },
      { nb: 'gi eksempler på endringer vi kan måle og se – i Norge og i verden', en: 'give examples of changes we can measure and see – in Norway and in the world' }
    ],
    keypoints: [
      { nb: '**Vær** er hvordan det er ute nå. **Klima** er gjennomsnittsværet over lang tid, vanligvis 30 år.', en: '**Weather** is what it is like outside now. **Climate** is the average weather over a long time, usually 30 years.' },
      { nb: '**Global oppvarming** betyr at middeltemperaturen på Jorda stiger. Den har økt med over 1 °C siden slutten av 1800-tallet.', en: '**Global warming** means that the average temperature on Earth is rising. It has increased by more than 1 °C since the late 1800s.' },
      { nb: '**Klimaendringer** er alle endringene som følger med: mer ekstremvær, smeltende is, stigende havnivå og varmere hav.', en: '**Climate change** is all the changes that come with it: more extreme weather, melting ice, rising sea level and warmer oceans.' },
      { nb: 'Ifølge FNs klimapanel er det **utvetydig** at menneskene har varmet opp atmosfæren, havet og landjorda.', en: 'According to the UN climate panel it is **unequivocal** that humans have warmed the atmosphere, ocean and land.' }
    ],
    sections: [
      {
        id: 'vaer', title: { nb: 'Vær eller klima?', en: 'Weather or climate?' },
        blocks: [
          { p: { nb: '**Vær** er hvordan det er ute akkurat nå eller de neste dagene: temperatur, nedbør, vind og skyer. **[[klima|Klima]]** er **gjennomsnittsværet over lang tid**, vanligvis 30 år. Klimaet forteller hva slags vær vi kan vente oss på et sted – hvor varmt det pleier å være, hvor mye det regner og hvor ofte det kommer ekstremvær.', en: '**Weather** is what it is like outside right now or in the next few days: temperature, rain, wind and clouds. **[[klima|Climate]]** is the **average weather over a long time**, usually 30 years. The climate tells us what kind of weather we can expect in a place – how warm it usually is, how much it rains and how often there is extreme weather.' }, src: ['snl-klima'] },
          { p: { nb: 'Klimaet bestemmes av et helt **klimasystem**: sola som gir energi, atmosfæren, havet, isen, landjorda og livet på Jorda. Delene påvirker hverandre hele tiden. Endres én del, endres de andre også.', en: 'The climate is controlled by a whole **climate system**: the sun that provides energy, the atmosphere, the ocean, the ice, the land and life on Earth. The parts affect each other all the time. If one part changes, the others change too.' }, src: ['snl-klimasystem', 'ndla-klimasystemet'] },
          { diagram: 'klimasystem' },
          { check: {
            q: { nb: 'Det var minus 25 grader i januar. Hva sier det om klimaet?', en: 'It was minus 25 degrees in January. What does that say about the climate?' },
            options: [{ nb: 'At global oppvarming ikke skjer', en: 'That global warming is not happening' }, { nb: 'Ikke så mye – én kald periode er vær. Klima er gjennomsnittet over mange år.', en: 'Not much – one cold spell is weather. Climate is the average over many years.' }, { nb: 'At klimaet har blitt kaldere', en: 'That the climate has become colder' }],
            answer: 1,
            explain: { nb: 'Én kald vinter eller én varm sommer er vær. For å si noe om klimaet må vi se på gjennomsnittet over mange år – og på hele Jorda.', en: 'One cold winter or one hot summer is weather. To say something about the climate we have to look at the average over many years – and over the whole Earth.' }
          } }
        ]
      },
      {
        id: 'oppvarming', title: { nb: 'Global oppvarming og klimaendringer', en: 'Global warming and climate change' },
        blocks: [
          { p: { nb: '**[[global_oppvarming|Global oppvarming]]** betyr at middeltemperaturen på hele Jorda stiger. Siden slutten av 1800-tallet har den steget med over 1 °C, og mesteparten av økningen har skjedd etter 1950. 2024 var det varmeste året som er målt.', en: '**[[global_oppvarming|Global warming]]** means that the average temperature of the whole Earth is rising. Since the late 1800s it has risen by more than 1 °C, and most of the increase has happened since 1950. 2024 was the warmest year on record.' }, src: ['snl-global-oppvarming', 'snl-klimaendringer'] },
          { chart: 'temperatur', caption: { nb: 'Hver søyle er ett år. Blå søyler er kaldere og røde søyler varmere enn snittet for 1850–1900. Pek på grafen for å lese av verdiene.', en: 'Each bar is one year. Blue bars are colder and red bars warmer than the average for 1850–1900. Point at the graph to read the values.' }, src: ['noaa-temp'] },
          { p: { nb: '**[[klimaendringer|Klimaendringer]]** er alle endringene som følger med oppvarmingen. Når klimaet blir varmere, blir det ofte beskrevet som «varmere, våtere og villere»: flere hetebølger og tørkeperioder, mer kraftig nedbør og flom, smeltende isbreer og havis, og et havnivå som stiger.', en: '**[[klimaendringer|Climate change]]** is all the changes that come with the warming. A warmer climate is often described as “warmer, wetter and wilder”: more heatwaves and droughts, more heavy rain and flooding, melting glaciers and sea ice, and rising sea level.' }, src: ['ndla-konsekvenser', 'snl-klimaendringer'] },
          { list: [
            { nb: '**Havnivået** har steget med 21–24 cm fra 1880 til 2023, og stigningen går stadig raskere.', en: '**Sea level** rose by 21–24 cm from 1880 to 2023, and the rise is speeding up.' },
            { nb: '**Havisen i Arktis** i september er rundt 40 prosent mindre enn på 1980-tallet.', en: '**Arctic sea ice** in September is about 40 per cent smaller than in the 1980s.' },
            { nb: '**Isbreene** krymper over nesten hele verden.', en: '**Glaciers** are shrinking almost all over the world.' },
            { nb: '**Havet** blir varmere og surere.', en: '**The ocean** is getting warmer and more acidic.' }
          ], src: ['snl-global-oppvarming', 'ipcc-spm', 'snl-isbre'] },
          { fact: { nb: 'FNs klimapanel skriver at det er **utvetydig** at menneskelig påvirkning har varmet opp atmosfæren, havet og landjorda. «Utvetydig» betyr at det ikke er noen tvil.', en: 'The UN climate panel writes that it is **unequivocal** that human influence has warmed the atmosphere, ocean and land. “Unequivocal” means there is no doubt.' }, src: ['ipcc-spm', 'snl-ipcc'] },
          { deeper: {
            title: { nb: 'Hvor mye er «1 grad»?', en: 'How much is “1 degree”?' },
            blocks: [
              { p: { nb: 'Én grad høres lite ut. Men det er et gjennomsnitt over hele Jorda, dag og natt, sommer og vinter, hav og land. Over land og i Arktis har det blitt mye varmere enn gjennomsnittet. Under siste istid, da Norge var dekket av is, var Jorda bare noen få grader kaldere enn før industrien.', en: 'One degree sounds small. But it is an average over the whole Earth, day and night, summer and winter, sea and land. Over land and in the Arctic it has become much warmer than the average. During the last ice age, when Norway was covered by ice, the Earth was only a few degrees colder than before industry.' }, src: ['snl-global-oppvarming', 'snl-istid'] },
              { p: { nb: 'Forskerne sammenligner ofte med perioden **1850–1900**. Det kalles gjerne «førindustriell tid», selv om industrien hadde startet. Det er den perioden vi har gode nok målinger fra.', en: 'Scientists often compare with the period **1850–1900**. It is often called “pre-industrial”, even though industry had started. It is the earliest period with good enough measurements.' }, src: ['ipcc-spm'] }
            ]
          } }
        ]
      },
      {
        id: 'se', title: { nb: 'Endringer vi kan se', en: 'Changes we can see' },
        blocks: [
          { p: { nb: 'Noen av endringene kan vi se med egne øyne. **Nigardsbreen** i Jostedalen har blitt målt systematisk siden 1900. Bildene under er tatt med over hundre års mellomrom, fra hver sin side av dalen.', en: 'Some of the changes we can see with our own eyes. **Nigardsbreen** in Jostedalen has been measured systematically since 1900. The pictures below were taken more than a hundred years apart, from different places in the valley.' }, src: ['snl-nigardsbreen'] },
          { beforeafter: { items: [{ photo: 'nigards1898', label: { nb: 'ca. 1898', en: 'c. 1898' } }, { photo: 'nigards2017', label: '2017' }],
            caption: { nb: 'Rundt 1900 nådde Nigardsbreen helt ned i dalen. Siden 2004 har brefronten gått tilbake 577 meter. Breer kan også rykke litt fram i perioder med mye snø, men de fleste norske breer har smeltet mye tilbake siden begynnelsen av 2000-tallet.', en: 'Around 1900 Nigardsbreen reached all the way down into the valley. Since 2004 the glacier front has retreated 577 metres. Glaciers can also advance a little in periods with a lot of snow, but most Norwegian glaciers have melted back a lot since the early 2000s.' } }, src: ['snl-nigardsbreen', 'snl-isbre'] },
          { link: { href: '#klima-forogetter', icon: 'eye', title: { nb: 'Se flere før- og etter-bilder', en: 'See more before and after pictures' }, text: { nb: 'Isbreer i Norge og Alaska, havisen i Arktis, øyer som spises av havet og korallrev som blekes.', en: 'Glaciers in Norway and Alaska, the Arctic sea ice, islands being eaten by the sea and coral reefs being bleached.' } } },
          { discuss: { nb: 'Et bilde viser én bre på ett tidspunkt. Hvorfor trenger forskerne **målinger over mange år og fra mange steder** før de kan si noe om klimaet?', en: 'A picture shows one glacier at one moment. Why do scientists need **measurements over many years and from many places** before they can say anything about the climate?' } }
        ]
      },
      {
        id: 'norge', title: { nb: 'Klimaendringer i Norge', en: 'Climate change in Norway' },
        blocks: [
          { p: { nb: 'Også i Norge merker vi endringene. Varm luft kan holde på mer fuktighet enn kald luft, og derfor blir regnværet kraftigere. Det gir mer **flom** og **skred**. Samtidig kan det bli flere tørre og varme perioder om sommeren.', en: 'We notice the changes in Norway too. Warm air can hold more moisture than cold air, so the rain gets heavier. This brings more **floods** and **landslides**. At the same time there may be more dry and hot periods in summer.' }, src: ['ndla-konsekvenser'] },
          { list: [
            { nb: 'De fleste **isbreene** i Norge har smeltet mye tilbake siden begynnelsen av 2000-tallet.', en: 'Most **glaciers** in Norway have melted back a lot since the early 2000s.' },
            { nb: 'I flere borehull i Sør-Norge har **permafrosten** forsvunnet siden rundt 2007.', en: 'In several boreholes in southern Norway the **permafrost** has disappeared since about 2007.' },
            { nb: 'Langs kysten stiger havet, men landet hever seg fortsatt etter istida. Noen steder, som i Oslo, har havnivået derfor sunket i forhold til land de siste 50–100 årene.', en: 'Along the coast the sea is rising, but the land is still rising after the ice age. In some places, such as Oslo, sea level has therefore fallen relative to the land over the last 50–100 years.' },
            { nb: 'Arter flytter seg nordover og opp i fjellet når det blir varmere.', en: 'Species move north and up into the mountains as it gets warmer.' }
          ], src: ['snl-isbre', 'snl-permafrost', 'snl-global-oppvarming', 'ndla-mangfold'] },
          { explain: { nb: 'Forklar med egne ord hvorfor et varmere klima kan gi **både** mer flom **og** mer tørke.', en: 'Explain in your own words why a warmer climate can bring **both** more floods **and** more drought.' } }
        ]
      }
    ],
    resources: ['yt-nrk-klima', 'yt-natgeo', 'ndla-konsekvenser', 'snl-klimaendringer', 'nasa-effekter', 'nasa-world']
  }
};
