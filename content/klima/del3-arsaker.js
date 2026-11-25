/* =====================================================================
   Klimaendringer – DEL 03: HVA FORÅRSAKER KLIMAENDRINGER?
   ===================================================================== */
NatLab.topic('klima').organisms.arsaker = {
  code: '03',
  title: { nb: 'Hva forårsaker klimaendringer?', en: 'What causes climate change?' },
  sub: { nb: 'Stråling, drivhuseffekten og tilbakekoblinger.', en: 'Radiation, the greenhouse effect and feedbacks.' },
  lead: {
    nb: 'Modellen viser hvordan energi fra sola kommer inn til Jorda, og hvordan drivhusgassene holder på varmen. Klikk på delene. Åpne den interaktive modellen for å skru opp og ned drivhusgassene.',
    en: 'The model shows how energy from the sun comes in to the Earth, and how the greenhouse gases hold on to the heat. Click on the parts. Open the interactive model to turn the greenhouse gases up and down.'
  },
  art: 'drivhuseffekt',
  diagrams: ['drivhuseffekt'],
  modelNames: { drivhuseffekt: { nb: 'Drivhuseffekten', en: 'The greenhouse effect' } },
  intro: { nb: 'Gule prikker er sollys, røde prikker er varmestråling. Følg en rød prikk: Kommer den ut i verdensrommet, eller blir den fanget?', en: 'Yellow dots are sunlight, red dots are heat radiation. Follow a red dot: does it get out to space, or is it caught?' },
  practiceHref: '#klima-ov-merk-drivhuseffekt',
  extraTabs: [{ href: '#klima-drivhusmodell', icon: 'sun', label: { nb: 'Interaktiv modell', en: 'Interactive model' } }],

  page: {
    goals: [
      { nb: '**beskrive drivhuseffekten** og bruke ordene stråling, absorpsjon og refleksjon', en: '**describe the greenhouse effect** using the words radiation, absorption and reflection' },
      { nb: 'gjøre rede for **faktorer som kan forårsake globale klimaendringer**', en: 'explain **factors that can cause global climate change**' },
      { nb: 'forklare hva en **tilbakekoblingsmekanisme** er, med eksempler', en: 'explain what a **feedback mechanism** is, with examples' }
    ],
    keypoints: [
      { nb: 'Sola sender **kortbølget stråling** (mest lys) til Jorda. Noe blir **reflektert**, resten blir **absorbert** og varmer opp Jorda.', en: 'The sun sends **short-wave radiation** (mostly light) to the Earth. Some is **reflected**, the rest is **absorbed** and warms the Earth.' },
      { nb: 'Jorda sender ut **langbølget varmestråling**. **Drivhusgassene** absorberer den og sender noe tilbake ned. Det er **drivhuseffekten**.', en: 'The Earth sends out **long-wave heat radiation**. The **greenhouse gases** absorb it and send some back down. This is **the greenhouse effect**.' },
      { nb: 'Den naturlige drivhuseffekten gjør Jorda levelig: 15 °C i stedet for −18 °C. Mer drivhusgasser gir en **forsterket drivhuseffekt** og global oppvarming.', en: 'The natural greenhouse effect makes the Earth habitable: 15 °C instead of −18 °C. More greenhouse gases give an **enhanced greenhouse effect** and global warming.' },
      { nb: '**Tilbakekoblinger**, som smeltende is og tinende permafrost, kan forsterke oppvarmingen.', en: '**Feedbacks**, such as melting ice and thawing permafrost, can amplify the warming.' }
    ],
    sections: [
      {
        id: 'straling', title: { nb: 'Stråling inn og ut', en: 'Radiation in and out' },
        blocks: [
          { p: { nb: 'All energi fra sola kommer til Jorda som **[[em_straling|elektromagnetisk stråling]]** – energi som går som bølger. Synlig lys, infrarød varmestråling, ultrafiolett stråling og radiobølger er alle elektromagnetisk stråling, men med ulik **bølgelengde**.', en: 'All energy from the sun reaches the Earth as **[[em_straling|electromagnetic radiation]]** – energy travelling as waves. Visible light, infrared heat radiation, ultraviolet radiation and radio waves are all electromagnetic radiation, but with different **wavelengths**.' }, src: ['snl-em-straling', 'snl-straling'] },
          { p: { nb: 'Sola er svært varm og sender ut **kortbølget stråling**, mest lys. Når sollyset treffer Jorda, skjer det to ting:', en: 'The sun is very hot and sends out **short-wave radiation**, mostly light. When sunlight reaches the Earth, two things happen:' }, src: ['snl-drivhuseffekten'] },
          { list: [
            { nb: '**[[refleksjon|Refleksjon]]:** Rundt **30 prosent** blir kastet tilbake til verdensrommet av skyer, luft, snø, is og andre lyse flater.', en: '**[[refleksjon|Reflection]]:** About **30 per cent** is thrown back to space by clouds, air, snow, ice and other light surfaces.' },
            { nb: '**[[absorpsjon|Absorpsjon]]:** Rundt **70 prosent** blir tatt opp og blir til varme – omtrent 25 prosent i atmosfæren og 45 prosent ved bakken.', en: '**[[absorpsjon|Absorption]]:** About **70 per cent** is taken up and turns into heat – about 25 per cent in the atmosphere and 45 per cent at the ground.' }
          ], src: ['snl-drivhuseffekten', 'snl-albedo'] },
          { p: { nb: 'En varm overflate sender selv ut stråling. Jorda er mye kaldere enn sola, så den sender ut **langbølget, infrarød varmestråling**, som vi ikke kan se.', en: 'A warm surface itself sends out radiation. The Earth is much colder than the sun, so it sends out **long-wave, infrared heat radiation**, which we cannot see.' }, src: ['snl-varmestraling', 'snl-infrarod'] },
          { check: {
            q: { nb: 'Hvorfor er det kjøligere å gå med hvit T-skjorte enn svart i sola?', en: 'Why is it cooler to wear a white T-shirt than a black one in the sun?' },
            options: [{ nb: 'Hvitt reflekterer mer av sollyset, svart absorberer mer', en: 'White reflects more of the sunlight, black absorbs more' }, { nb: 'Hvitt stoff er tynnere', en: 'White fabric is thinner' }, { nb: 'Svart stoff lager varme selv', en: 'Black fabric makes heat itself' }],
            answer: 0,
            explain: { nb: 'Lyse flater har høy **albedo** og reflekterer mye lys. Mørke flater absorberer mer lys, og lyset blir til varme. Det samme gjelder snø (lys) og hav (mørkt) på Jorda.', en: 'Light surfaces have a high **albedo** and reflect a lot of light. Dark surfaces absorb more light, and the light turns into heat. The same is true of snow (light) and the ocean (dark) on Earth.' }
          } }
        ]
      },
      {
        id: 'drivhus', title: { nb: 'Drivhuseffekten', en: 'The greenhouse effect' },
        blocks: [
          { p: { nb: 'Noen gasser i atmosfæren – **[[drivhusgasser|drivhusgassene]]** – slipper sollyset gjennom, men **absorberer varmestrålingen** fra bakken. Så sender de varmen ut igjen i alle retninger, også **ned mot bakken**. Slik holder atmosfæren på varmen. Dette er **[[drivhuseffekt|drivhuseffekten]]**.', en: 'Some gases in the atmosphere – **[[drivhusgasser|the greenhouse gases]]** – let sunlight through, but **absorb the heat radiation** from the ground. Then they send the heat out again in all directions, also **down towards the ground**. In this way the atmosphere holds on to the heat. This is **[[drivhuseffekt|the greenhouse effect]]**.' }, src: ['snl-drivhuseffekten', 'ndla-drivhus'] },
          { diagram: 'drivhuseffekt' },
          { p: { nb: 'Drivhuseffekten er **naturlig og livsviktig**. Uten drivhusgasser ville middeltemperaturen på Jorda vært rundt **−18 °C**. Med dem er den omkring **15 °C**.', en: 'The greenhouse effect is **natural and vital for life**. Without greenhouse gases the average temperature on Earth would be about **−18 °C**. With them it is about **15 °C**.' }, src: ['snl-drivhuseffekten'] },
          { list: [
            { nb: '**Vanndamp (H₂O)** – den viktigste drivhusgassen. Mengden styres av temperaturen.', en: '**Water vapour (H₂O)** – the most important greenhouse gas. The amount is controlled by the temperature.' },
            { nb: '**Karbondioksid (CO₂)** – fra forbrenning av fossilt brensel, avskoging og sement.', en: '**Carbon dioxide (CO₂)** – from burning fossil fuels, deforestation and cement.' },
            { nb: '**Metan (CH₄)** – fra blant annet drøvtyggere, risåkrer, søppelfyllinger, myr og utslipp fra olje og gass.', en: '**Methane (CH₄)** – from ruminants, rice fields, landfills, bogs and leaks from oil and gas, among others.' },
            { nb: '**Lystgass (N₂O)** – blant annet fra gjødsel i jordbruket.', en: '**Nitrous oxide (N₂O)** – from fertiliser in farming, among others.' }
          ], src: ['snl-klimagasser', 'ndla-karbon', 'snl-drivhuseffekten'] },
          { myth: { nb: 'Drivhuseffekten virker akkurat som et drivhus.', en: 'The greenhouse effect works exactly like a greenhouse.' }, truth: { nb: 'Ikke helt. Et drivhus holder mest på varmen ved at glasset stopper den varme lufta fra å blåse bort. I atmosfæren er det gassmolekyler som absorberer og sender ut varmestråling. Navnet er bare en sammenligning.', en: 'Not quite. A greenhouse mainly keeps warm because the glass stops the warm air from blowing away. In the atmosphere it is gas molecules that absorb and send out heat radiation. The name is just a comparison.' }, src: ['snl-drivhuseffekten'] },
          { fact: { nb: 'Venus har en atmosfære med rundt 96 prosent CO₂. Der er det omkring 450 °C – varmere enn på Merkur, som ligger nærmere sola!', en: 'Venus has an atmosphere of about 96 per cent CO₂. It is about 450 °C there – hotter than Mercury, which is closer to the sun!' }, src: ['snl-drivhuseffekten'] }
        ]
      },
      {
        id: 'forsterket', title: { nb: 'Den forsterkede drivhuseffekten', en: 'The enhanced greenhouse effect' },
        blocks: [
          { p: { nb: 'Siden industrien begynte, har menneskene sluppet ut store mengder drivhusgasser. Siden 1750 har CO₂ i lufta økt med 47 prosent og metan med 156 prosent. Mer drivhusgasser gjør at mindre varme slipper ut i verdensrommet. Det gir en **forsterket drivhuseffekt** – og **global oppvarming**.', en: 'Since industry began, humans have released large amounts of greenhouse gases. Since 1750 CO₂ in the air has increased by 47 per cent and methane by 156 per cent. More greenhouse gases mean that less heat escapes to space. This gives an **enhanced greenhouse effect** – and **global warming**.' }, src: ['ipcc-spm', 'snl-drivhuseffekten'] },
          { link: { href: '#klima-drivhusmodell-hvis', icon: 'sun', title: { nb: 'Prøv selv: Skru opp drivhusgassene', en: 'Try it yourself: Turn up the greenhouse gases' }, text: { nb: 'Fra ingen drivhusgasser via istid og i dag til fire ganger så mye CO₂. Se hva som skjer med strålingen og temperaturen.', en: 'From no greenhouse gases via an ice age and today to four times as much CO₂. See what happens to the radiation and the temperature.' } } },
          { history: { nb: 'Allerede i **1824** lurte franskmannen Joseph Fourier på hvorfor Jorda er varmere enn avstanden til sola skulle tilsi. I **1896** beregnet svensken **Svante Arrhenius** hvordan CO₂ i lufta påvirker temperaturen. Kunnskapen om drivhuseffekten er altså over hundre år gammel.', en: 'As early as **1824** the Frenchman Joseph Fourier wondered why the Earth is warmer than its distance from the sun would suggest. In **1896** the Swede **Svante Arrhenius** calculated how CO₂ in the air affects the temperature. Our knowledge of the greenhouse effect is therefore more than a hundred years old.' }, src: ['snl-drivhuseffekten', 'snl-arrhenius'] },
          { deeper: {
            title: { nb: 'Andre ting som påvirker temperaturen', en: 'Other things that affect the temperature' },
            blocks: [
              { p: { nb: '**Partikler i lufta (aerosoler)** fra forurensning og vulkaner stenger ute litt sollys og **kjøler** Jorda. Når lufta blir renere, forsvinner noe av denne avkjølingen. Derfor har Europa, der lufta er blitt renere, hatt raskest oppvarming av alle kontinentene.', en: '**Particles in the air (aerosols)** from pollution and volcanoes block a little sunlight and **cool** the Earth. When the air becomes cleaner, some of this cooling disappears. That is why Europe, where the air has become cleaner, has warmed fastest of all the continents.' }, src: ['snl-arsaker'] },
              { p: { nb: '**Sola** varierer litt, men siden 1950-tallet har det ikke vært noen viktig endring i sola. Oppvarmingen de siste tiårene kan derfor ikke forklares med sola.', en: '**The sun** varies a little, but since the 1950s there has been no important change in the sun. The warming of recent decades therefore cannot be explained by the sun.' }, src: ['snl-arsaker'] }
            ]
          } }
        ]
      },
      {
        id: 'tilbakekobling', title: { nb: 'Tilbakekoblinger', en: 'Feedbacks' },
        blocks: [
          { p: { nb: 'En **[[tilbakekobling|tilbakekoblingsmekanisme]]** er når en endring setter i gang noe som **forsterker** (eller demper) den samme endringen. I klimaet finnes det flere forsterkende tilbakekoblinger:', en: 'A **[[tilbakekobling|feedback mechanism]]** is when a change sets off something that **amplifies** (or dampens) the same change. In the climate there are several amplifying feedbacks:' }, src: ['snl-tilbakekoblinger'] },
          { list: [
            { nb: '**Is og snø smelter:** Hvite flater som reflekterer sollys, blir erstattet av mørk bakke og mørkt hav som absorberer mer. Det blir enda varmere.', en: '**Ice and snow melt:** White surfaces that reflect sunlight are replaced by dark ground and dark sea that absorb more. It gets even warmer.' },
            { nb: '**[[permafrost|Permafrost]] tiner:** Frossen jord i nord inneholder om lag dobbelt så mye karbon som atmosfæren. Når den tiner, kan det slippes ut CO₂ og metan.', en: '**[[permafrost|Permafrost]] thaws:** Frozen ground in the north contains about twice as much carbon as the atmosphere. When it thaws, CO₂ and methane can be released.' },
            { nb: '**Varmere hav tar opp mindre CO₂:** Varmt vann holder på mindre gass enn kaldt vann – tenk på varm brus.', en: '**Warmer oceans take up less CO₂:** Warm water holds less gas than cold water – think of warm fizzy drinks.' },
            { nb: '**Mer vanndamp:** Varm luft kan holde på mer vanndamp, og vanndamp er selv en drivhusgass.', en: '**More water vapour:** Warm air can hold more water vapour, and water vapour is itself a greenhouse gas.' }
          ], src: ['snl-tilbakekoblinger', 'snl-albedo', 'snl-karbonkretslopet', 'snl-permafrost'] },
          { steps: { figure: 'tilbakekobling', title: { nb: 'En tilbakekobling: Is som smelter', en: 'A feedback: melting ice' }, steps: [
            { title: { nb: 'Litt varmere', en: 'A little warmer' }, text: { nb: 'Mer drivhusgasser gjør det litt varmere.', en: 'More greenhouse gases make it a little warmer.' } },
            { title: { nb: 'Isen smelter', en: 'The ice melts' }, text: { nb: 'Snø og is smelter, og mørk bakke og mørkt hav kommer fram.', en: 'Snow and ice melt, and dark ground and dark sea are exposed.' } },
            { title: { nb: 'Mer absorpsjon', en: 'More absorption' }, text: { nb: 'Den mørke overflaten **absorberer** mer sollys enn isen gjorde. Det blir enda varmere …', en: 'The dark surface **absorbs** more sunlight than the ice did. It gets even warmer …' } },
            { title: { nb: 'Og rundt igjen', en: 'And round again' }, text: { nb: '… og enda mer is smelter. Endringen forsterker seg selv. Det er en **forsterkende tilbakekobling**.', en: '… and even more ice melts. The change amplifies itself. This is an **amplifying feedback**.' } }
          ], src: ['snl-albedo', 'snl-tilbakekoblinger'] } },
          { discuss: { nb: 'Finnes det også tilbakekoblinger som **demper** oppvarmingen? Tenk på planter som vokser bedre når det er mer CO₂ i lufta.', en: 'Are there also feedbacks that **dampen** the warming? Think about plants growing better when there is more CO₂ in the air.' } }
        ]
      }
    ],
    resources: ['yt-nrk-drivhus', 'yt-met-drivhus', 'yt-paxi', 'yt-nasa-drivhus', 'yt-minuteearth', 'ndla-drivhus', 'snl-drivhuseffekten', 'nasa-arsaker']
  }
};
