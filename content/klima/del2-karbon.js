/* =====================================================================
   Klimaendringer – DEL 02: KARBON OG KARBONKRETSLØPET
   Tallene er fra FNs klimapanel (IPCC AR6, kap. 5, figur 5.12), avrundet.
   ===================================================================== */
NatLab.topic('klima').organisms.karbon = {
  code: '02',
  title: { nb: 'Karbon og karbonkretsløpet', en: 'Carbon and the carbon cycle' },
  sub: { nb: 'Hvordan karbon flytter seg mellom luft, liv, hav og stein.', en: 'How carbon moves between the air, living things, the ocean and rock.' },
  lead: {
    nb: 'Karbonatomene på Jorda er de samme hele tiden – de bare flytter seg. Klikk på pilene og lagrene i modellen. Åpne den animerte modellen for å se karbonet bevege seg og prøve «Hva skjer hvis?».',
    en: 'The carbon atoms on Earth are always the same – they just move around. Click on the arrows and stores in the model. Open the animated model to see the carbon move and try “What if?”.'
  },
  art: 'karbonkretslop',
  diagrams: ['karbonkretslop'],
  modelNames: { karbonkretslop: { nb: 'Karbonkretsløpet', en: 'The carbon cycle' } },
  intro: { nb: 'De hvite prikkene er karbon på vei. Grønne piler er liv, blå er havet, brune er det langsomme kretsløpet, og røde er menneskene. Velg «Gå dypere» for å se flere piler.', en: 'The white dots are carbon on the move. Green arrows are life, blue is the ocean, brown is the slow cycle, and red is humans. Choose “Go deeper” to see more arrows.' },
  practiceHref: '#klima-ov-merk-karbonkretslop',
  extraTabs: [{ href: '#klima-karbonmodell', icon: 'leaf', label: { nb: 'Animert modell', en: 'Animated model' } }],

  page: {
    goals: [
      { nb: 'beskrive **karbon** som grunnstoff og hvor det finnes', en: 'describe **carbon** as an element and where it is found' },
      { nb: 'gjøre rede for hvordan **fotosyntese og celleånding** gir energi til alt levende gjennom karbonkretsløpet', en: 'explain how **photosynthesis and cellular respiration** give energy to all living things through the carbon cycle' },
      { nb: 'forklare forskjellen på det **raske** og det **langsomme** karbonkretsløpet', en: 'explain the difference between the **fast** and the **slow** carbon cycle' },
      { nb: 'forklare hvordan menneskene har forstyrret kretsløpet, og hva **forsuring av havet** er', en: 'explain how humans have disturbed the cycle, and what **ocean acidification** is' }
    ],
    keypoints: [
      { nb: '**Karbon** er grunnstoffet som alt liv er bygd av. Det finnes i lufta som CO₂, i alt levende, i havet og i bergarter.', en: '**Carbon** is the element all life is built of. It is found in the air as CO₂, in all living things, in the ocean and in rocks.' },
      { nb: 'I det **raske kretsløpet** tar fotosyntesen opp CO₂, og celleånding og nedbrytning slipper det ut igjen – i omtrent balanse.', en: 'In the **fast cycle** photosynthesis takes up CO₂, and respiration and decomposition release it again – roughly in balance.' },
      { nb: 'I det **langsomme kretsløpet** er karbon lagret i kull, olje, gass og kalkstein i **millioner av år**.', en: 'In the **slow cycle** carbon is stored in coal, oil, gas and limestone for **millions of years**.' },
      { nb: 'Når vi brenner **fossilt brensel**, flytter vi karbon fra det langsomme til det raske kretsløpet. CO₂ i lufta øker, og havet blir surere.', en: 'When we burn **fossil fuels**, we move carbon from the slow to the fast cycle. CO₂ in the air rises, and the ocean becomes more acidic.' }
    ],
    sections: [
      {
        id: 'stoffet', title: { nb: 'Karbon – livets grunnstoff', en: 'Carbon – the element of life' },
        blocks: [
          { p: { nb: '**[[karbon|Karbon]]** (C) er et grunnstoff. Det er hovedbyggesteinen i alle **organiske stoffer**: karbohydrater, fett, proteiner og DNA.', en: '**[[karbon|Carbon]]** (C) is an element. It is the main building block of all **organic substances**: carbohydrates, fats, proteins and DNA.' }, src: ['snl-karbon', 'snl-karbonkretslopet'] },
          { p: { nb: 'Karbon finnes i mange former: som **CO₂** (karbondioksid) og **CH₄** (metan) i lufta, oppløst i havet, i alle levende organismer, i jorda, i **kull, olje og gass** og i bergarter som **kalkstein**. Rent karbon finnes i naturen som **diamant** og **grafitt** (det grå i en blyant).', en: 'Carbon comes in many forms: as **CO₂** (carbon dioxide) and **CH₄** (methane) in the air, dissolved in the ocean, in all living things, in the soil, in **coal, oil and gas** and in rocks like **limestone**. Pure carbon is found in nature as **diamond** and **graphite** (the grey in a pencil).' }, src: ['snl-karbon', 'snl-karbonkretslopet'] },
          { fact: { nb: 'Karbon lages inni stjerner og er det fjerde vanligste grunnstoffet i universet. Karbonatomene i kroppen din ble altså laget i en stjerne for lenge siden.', en: 'Carbon is made inside stars and is the fourth most common element in the universe. So the carbon atoms in your body were made in a star long ago.' }, src: ['snl-karbon'] },
          { p: { nb: 'Karbonatomene forsvinner ikke. De flytter seg mellom **karbonlagrene**: atmosfæren, livet, jorda, havet og berggrunnen. Denne evige runddansen kalles **[[karbonkretslop|karbonkretsløpet]]**.', en: 'The carbon atoms do not disappear. They move between the **carbon stores**: the atmosphere, living things, the soil, the ocean and the bedrock. This never-ending round is called **[[karbonkretslop|the carbon cycle]]**.' }, src: ['snl-karbonkretslopet', 'ndla-karbon'] },
          { diagram: 'karbonkretslop' }
        ]
      },
      {
        id: 'rask', title: { nb: 'Det raske kretsløpet: fotosyntese og celleånding', en: 'The fast cycle: photosynthesis and respiration' },
        blocks: [
          { p: { nb: 'Planter, alger og noen bakterier tar opp CO₂ fra lufta eller vannet. Med energi fra sola lager de sukker (glukose) i **[[fotosyntese|fotosyntesen]]**. Sukkeret blir brukt til energi og til å bygge stammer, blader og røtter. Når dyr spiser plantene, går karbonet videre i næringskjeden.', en: 'Plants, algae and some bacteria take up CO₂ from the air or water. Using energy from the sun, they make sugar (glucose) in **[[fotosyntese|photosynthesis]]**. The sugar is used for energy and to build trunks, leaves and roots. When animals eat the plants, the carbon passes on along the food chain.' }, src: ['snl-fotosyntese', 'ndla-karbon'] },
          { p: { nb: 'Alle levende organismer har **[[celleanding|celleånding]]**: Cellene bryter ned sukker med oksygen for å få energi, og CO₂ går tilbake til lufta. Når planter og dyr dør, bryter **sopp og bakterier** dem ned – og slipper også ut CO₂. Slik gir karbonkretsløpet **energi til alt levende**.', en: 'All living things carry out **[[celleanding|cellular respiration]]**: the cells break down sugar with oxygen to get energy, and CO₂ goes back to the air. When plants and animals die, **fungi and bacteria** break them down – and also release CO₂. In this way the carbon cycle gives **energy to all living things**.' }, src: ['snl-celleanding', 'snl-karbonkretslopet'] },
          { equation: { name: { nb: 'Fotosyntese', en: 'Photosynthesis' }, words: { nb: 'karbondioksid + vann + energi fra sola → glukose + oksygen', en: 'carbon dioxide + water + energy from the sun → glucose + oxygen' }, formula: '6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂' } },
          { equation: { name: { nb: 'Celleånding', en: 'Cellular respiration' }, words: { nb: 'glukose + oksygen → karbondioksid + vann + energi', en: 'glucose + oxygen → carbon dioxide + water + energy' }, formula: 'C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O' } },
          { p: { nb: 'På land tar fotosyntesen opp rundt **140 milliarder tonn karbon** i året. Celleånding og nedbrytning slipper ut nesten like mye. Hav og luft bytter rundt **80 milliarder tonn** hver vei. Før industrien var opptak og utslipp i det raske kretsløpet omtrent i **balanse**.', en: 'On land, photosynthesis takes up about **140 billion tonnes of carbon** a year. Respiration and decomposition release almost as much. The ocean and air exchange about **80 billion tonnes** each way. Before industry, uptake and release in the fast cycle were roughly in **balance**.' }, src: ['ipcc-ch5', 'ndla-karbon'] },
          { check: {
            q: { nb: 'Hvorfor går CO₂ i lufta litt ned hver sommer og opp hver vinter?', en: 'Why does CO₂ in the air go down a little every summer and up every winter?' },
            options: [{ nb: 'Fordi folk bruker mindre bil om sommeren', en: 'Because people drive less in summer' }, { nb: 'Fordi plantene på den nordlige halvkule har mye fotosyntese om sommeren og tar opp CO₂', en: 'Because the plants in the northern hemisphere carry out a lot of photosynthesis in summer and take up CO₂' }, { nb: 'Fordi havet fryser om vinteren', en: 'Because the sea freezes in winter' }],
            answer: 1,
            explain: { nb: 'Det er mest land og skog på den nordlige halvkule. Om sommeren tar plantene opp mye CO₂, om vinteren dominerer nedbrytning og celleånding. Det gir sikksakken i Keeling-kurven.', en: 'There is most land and forest in the northern hemisphere. In summer the plants take up a lot of CO₂; in winter decomposition and respiration dominate. This gives the zigzag in the Keeling curve.' }
          } }
        ]
      },
      {
        id: 'langsom', title: { nb: 'Det langsomme kretsløpet: millioner av år', en: 'The slow cycle: millions of years' },
        blocks: [
          { p: { nb: 'For millioner av år siden ble planter og alger dekket av sand og leire før de rakk å bli brutt ned. Uten oksygen, under høyt trykk og høy temperatur, ble de sakte til **kull, olje og gass** – **[[fossilt_brensel|fossilt brensel]]**. Skall av kalk på havbunnen ble til **kalkstein**.', en: 'Millions of years ago plants and algae were covered by sand and clay before they had time to decompose. Without oxygen, under high pressure and high temperature, they slowly became **coal, oil and gas** – **[[fossilt_brensel|fossil fuels]]**. Lime shells on the sea floor became **limestone**.' }, src: ['snl-karbonkretslopet', 'snl-fossilt-brensel', 'snl-kalkstein'] },
          { p: { nb: 'Karbon i berggrunnen kommer tilbake til lufta svært sakte, blant annet gjennom **vulkaner**. Vulkanene slipper ut rundt 0,1 milliard tonn karbon i året. Det langsomme kretsløpet tar **tusener til millioner av år**.', en: 'Carbon in the bedrock returns to the air very slowly, for example through **volcanoes**. Volcanoes release about 0.1 billion tonnes of carbon a year. The slow cycle takes **thousands to millions of years**.' }, src: ['snl-karbonkretslopet', 'ipcc-ch5'] },
          { model: { nb: 'Tegningen viser karbonlagrene ved siden av hverandre, men i virkeligheten er de svært ulike i størrelse. Dyphavet inneholder over 40 ganger så mye karbon som atmosfæren, og berggrunnen enda mye mer. Pilene viser bare de viktigste strømmene.', en: 'The drawing shows the carbon stores side by side, but in reality they are very different in size. The deep ocean contains over 40 times as much carbon as the atmosphere, and the bedrock much more again. The arrows show only the most important flows.' }, src: ['ipcc-ch5'] },
          { deeper: {
            title: { nb: 'Lagrene og strømmene i tall', en: 'The stores and flows in numbers' },
            blocks: [
              { table: { head: [{ nb: 'Karbonlager', en: 'Carbon store' }, { nb: 'Milliarder tonn karbon (ca.)', en: 'Billion tonnes of carbon (approx.)' }], rows: [
                [{ nb: 'Atmosfæren (i dag)', en: 'The atmosphere (today)' }, '870'],
                [{ nb: 'Vegetasjon', en: 'Vegetation' }, '450'],
                [{ nb: 'Jord (utenom permafrost)', en: 'Soil (outside permafrost)' }, '1700'],
                [{ nb: 'Havoverflaten', en: 'The surface ocean' }, '900'],
                [{ nb: 'Dyphavet', en: 'The deep ocean' }, '37 000'],
                [{ nb: 'Sedimenter på havbunnen', en: 'Sediments on the sea floor' }, '1750'],
                [{ nb: 'Kjente reserver av kull, olje og gass', en: 'Known reserves of coal, oil and gas' }, '930']
              ] }, src: ['ipcc-ch5'] },
              { p: { nb: 'I modellen kan du slå på «Vis tall» for å se tallene på pilene og lagrene. Én milliard tonn kalles også ett **gigatonn** (Gt). Forskerne regner ofte i tonn **karbon**. Vil du ha tonn **CO₂**, ganger du med 44/12 ≈ 3,7.', en: 'In the model you can turn on “Show numbers” to see the numbers on the arrows and stores. One billion tonnes is also called one **gigatonne** (Gt). Scientists often count in tonnes of **carbon**. To get tonnes of **CO₂**, multiply by 44/12 ≈ 3.7.' }, src: ['snl-karbonkretslopet'] }
            ]
          } }
        ]
      },
      {
        id: 'ubalanse', title: { nb: 'Menneskene forstyrrer kretsløpet', en: 'Humans disturb the cycle' },
        blocks: [
          { p: { nb: 'Når vi brenner kull, olje og gass, flytter vi på **noen hundre år** karbon som har ligget lagret i **millioner av år**. I tillegg hogger vi skog og grøfter myr. Hvert år slipper menneskene ut rundt **10 milliarder tonn karbon** fra fossilt brensel og sement og rundt **1–1,5 milliarder tonn** fra avskoging.', en: 'When we burn coal, oil and gas, we move – in **a few hundred years** – carbon that has been stored for **millions of years**. On top of that we cut down forests and drain bogs. Every year humans release about **10 billion tonnes of carbon** from fossil fuels and cement and about **1–1.5 billion tonnes** from deforestation.' }, src: ['snl-karbonkretslopet', 'ipcc-ch5'] },
          { p: { nb: 'Bare rundt **halvparten** av utslippene blir tatt opp av hav og planter. Resten hoper seg opp i lufta. CO₂ har økt fra rundt **280 ppm** før industrien til over **427 ppm** i dag. «ppm» betyr deler per million: 427 ppm er 0,0427 prosent.', en: 'Only about **half** of the emissions are taken up by the ocean and plants. The rest piles up in the air. CO₂ has risen from about **280 ppm** before industry to over **427 ppm** today. “ppm” means parts per million: 427 ppm is 0.0427 per cent.' }, src: ['ipcc-ch5', 'snl-karbonkretslopet', 'noaa-co2'] },
          { chart: 'keeling', caption: { nb: 'Keeling-kurven: CO₂ i lufta målt hver måned på Mauna Loa på Hawaii siden 1958. Velg «De siste fem årene» for å se sikksakken fra årstidene.', en: 'The Keeling curve: CO₂ in the air measured every month at Mauna Loa in Hawaii since 1958. Choose “The last five years” to see the zigzag from the seasons.' }, src: ['noaa-co2', 'snl-mauna-loa'] },
          { link: { href: '#klima-karbonmodell-hvis', icon: 'leaf', title: { nb: 'Prøv selv: Hva skjer hvis …?', en: 'Try it yourself: What if …?' }, text: { nb: 'Skru opp eller ned forbrenningen av fossilt brensel og avskogingen, og se hvordan CO₂ i lufta endrer seg fram mot år 2100.', en: 'Turn the burning of fossil fuels and deforestation up or down, and see how CO₂ in the air changes towards the year 2100.' } } },
          { myth: { nb: 'Vi kan bare plante trær, så tar de opp all CO₂-en.', en: 'We can just plant trees, and they will take up all the CO₂.' }, truth: { nb: 'Skog hjelper, men det er ikke realistisk å kompensere fullt ut for forbruket av fossilt brensel ved å øke fotosyntesen. Karbonet fra fossilt brensel kommer fra et lager som er mye større enn all skogen på Jorda.', en: 'Forests help, but it is not realistic to fully make up for our use of fossil fuels by increasing photosynthesis. The carbon from fossil fuels comes from a store that is much larger than all the forests on Earth.' }, src: ['snl-karbonkretslopet'] }
        ]
      },
      {
        id: 'forsuring', title: { nb: 'Forsuring av havet', en: 'Ocean acidification' },
        blocks: [
          { p: { nb: 'Havet tar opp rundt en firedel av CO₂-utslippene våre. Det demper oppvarmingen – men har en pris. Når CO₂ løser seg i vann, dannes **karbonsyre**. Havet blir surere. Dette kalles **[[forsuring_av_havet|forsuring av havet]]** (havforsuring).', en: 'The ocean takes up about a quarter of our CO₂ emissions. This slows the warming – but at a price. When CO₂ dissolves in water, **carbonic acid** forms. The ocean becomes more acidic. This is called **[[forsuring_av_havet|ocean acidification]]**.' }, src: ['snl-havforsuring', 'ipcc-ch5', 'ndla-havforsuring'] },
          { equation: { name: { nb: 'CO₂ i vann', en: 'CO₂ in water' }, words: { nb: 'karbondioksid + vann → karbonsyre', en: 'carbon dioxide + water → carbonic acid' }, formula: 'CO₂ + H₂O → H₂CO₃' } },
          { p: { nb: 'pH i havet har sunket med rundt **0,1** siden industrien startet. Det høres lite ut, men pH-skalaen er slik at et lite tall betyr en stor endring. Mange dyr og alger – som **koraller, skjell, snegler og kalkflagellater** – bygger skall av kalk. I surere vann blir det vanskeligere å lage og holde på skallet.', en: 'The pH of the ocean has fallen by about **0.1** since industry began. That sounds small, but the pH scale is such that a small number means a big change. Many animals and algae – like **corals, shellfish, snails and coccolithophores** – build shells of lime. In more acidic water it becomes harder to build and keep the shell.' }, src: ['snl-havforsuring', 'snl-kalkflagellater'] },
          { link: { href: '#klima-forsokhav', icon: 'flask', title: { nb: 'Forsøk: Surere vann', en: 'Experiment: More acidic water' }, text: { nb: 'Pust CO₂ ned i vann med rødkålsaft og se fargen endre seg.', en: 'Breathe CO₂ into water with red cabbage juice and watch the colour change.' } } },
          { explain: { nb: 'Forklar hvordan en bilkjøring i Norge kan påvirke et skjell i havet.', en: 'Explain how a car journey in Norway can affect a shellfish in the sea.' } }
        ]
      }
    ],
    resources: ['yt-teded-karbon', 'yt-forsuring', 'ndla-karbon', 'ndla-surere-hav', 'snl-karbonkretslopet', 'noaa-co2']
  }
};
