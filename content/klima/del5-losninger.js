/* =====================================================================
   Klimaendringer – DEL 05: KAN PROBLEMET LØSES?
   Tallene om utslipp i 2025–2026 er fra Global Carbon Project, slik de er
   gjengitt i forskning.no 10.11.2026. Norske tall er fra SNL (2024).
   ===================================================================== */
NatLab.topic('klima').organisms.losninger = {
  code: '05',
  title: { nb: 'Kan klimaproblemet løses?', en: 'Can the climate problem be solved?' },
  sub: { nb: 'Mål, løsninger og hvordan verden ligger an i dag.', en: 'Goals, solutions and how the world is doing today.' },
  lead: {
    nb: 'Det finnes mange løsninger – og mange av dem er allerede i bruk. Klikk på delene av tegningen for å lære hvordan de kutter utslipp.',
    en: 'There are many solutions – and many of them are already in use. Click on the parts of the drawing to learn how they cut emissions.'
  },
  art: 'losninger',
  diagrams: ['losninger'],
  modelNames: { losninger: { nb: 'Løsninger', en: 'Solutions' } },
  intro: { nb: 'Ingen løsning klarer alt alene. Hvilke tror du betyr mest i Norge? Og i verden?', en: 'No solution can do it all alone. Which do you think matter most in Norway? And in the world?' },
  practiceHref: '#klima-ov-merk-losninger',
  extraTabs: [{ href: '#klima-fotavtrykk', icon: 'foot', label: { nb: 'Klimafotavtrykk', en: 'Carbon footprint' } }],

  page: {
    goals: [
      { nb: 'forklare hva **Parisavtalen**, **1,5-gradersmålet** og **netto null** betyr', en: 'explain what **the Paris Agreement**, **the 1.5 degree goal** and **net zero** mean' },
      { nb: 'gi eksempler på løsninger som kutter utslipp, og drøfte fordeler og ulemper', en: 'give examples of solutions that cut emissions, and discuss advantages and disadvantages' },
      { nb: 'drøfte hvordan **energiproduksjon og energibruk** kan påvirke miljøet lokalt og globalt', en: 'discuss how **energy production and energy use** can affect the environment locally and globally' },
      { nb: 'beskrive hvordan verden og Norge ligger an i dag', en: 'describe how the world and Norway are doing today' }
    ],
    keypoints: [
      { nb: 'I **Parisavtalen** (2015) ble landene enige om å holde oppvarmingen **godt under 2 °C**, og helst under **1,5 °C**.', en: 'In **the Paris Agreement** (2015) countries agreed to keep warming **well below 2 °C**, and preferably below **1.5 °C**.' },
      { nb: 'For at temperaturen skal slutte å stige, må utslippene av CO₂ ned til **netto null**.', en: 'For the temperature to stop rising, CO₂ emissions must come down to **net zero**.' },
      { nb: 'Løsningene finnes: fornybar energi, energisparing, transport uten fossilt drivstoff, mindre matsvinn og kjøtt, vern av skog og myr, og fangst og lagring av CO₂.', en: 'The solutions exist: renewable energy, saving energy, transport without fossil fuels, less food waste and meat, protecting forests and bogs, and carbon capture and storage.' },
      { nb: 'Verden har bremset økningen i utslipp, men er ikke på vei mot 1,5 °C. **Hver tidel av en grad teller.**', en: 'The world has slowed the growth in emissions, but is not on track for 1.5 °C. **Every tenth of a degree counts.**' }
    ],
    sections: [
      {
        id: 'mal', title: { nb: 'Målet: Parisavtalen', en: 'The goal: the Paris Agreement' },
        blocks: [
          { p: { nb: 'I desember 2015 ble verdens land enige om **[[parisavtalen|Parisavtalen]]**. Målet er å begrense den globale oppvarmingen til **godt under 2 °C**, og helst til **1,5 °C**, sammenlignet med førindustriell tid. Alle land skal lage egne mål for å kutte utslipp. Per januar 2025 hadde 195 land sluttet seg til avtalen.', en: 'In December 2015 the world’s countries agreed on **[[parisavtalen|the Paris Agreement]]**. The goal is to limit global warming to **well below 2 °C**, and preferably to **1.5 °C**, compared with pre-industrial times. All countries must set their own goals for cutting emissions. As of January 2025, 195 countries had joined the agreement.' }, src: ['snl-parisavtalen'] },
          { p: { nb: 'CO₂ blir værende i lufta i svært lang tid. Derfor er det de **samlede** utslippene over tid som bestemmer hvor varmt det blir. Mengden CO₂ vi kan slippe ut før vi passerer en temperaturgrense, kalles et **[[karbonbudsjett|karbonbudsjett]]**. Når budsjettet er brukt opp, må utslippene være **netto null** – det vil si at vi ikke slipper ut mer enn vi fjerner fra lufta.', en: 'CO₂ stays in the air for a very long time. That is why it is the **total** emissions over time that decide how warm it gets. The amount of CO₂ we can emit before passing a temperature limit is called a **[[karbonbudsjett|carbon budget]]**. When the budget is used up, emissions must be **net zero** – meaning we do not emit more than we remove from the air.' }, src: ['snl-karbonbudsjett'] },
          { check: {
            q: { nb: 'Hva betyr «netto null utslipp»?', en: 'What does “net zero emissions” mean?' },
            options: [{ nb: 'At ingen bruker bil lenger', en: 'That nobody uses cars any more' }, { nb: 'At vi ikke slipper ut mer CO₂ enn vi fjerner fra lufta', en: 'That we do not emit more CO₂ than we remove from the air' }, { nb: 'At utslippene går litt ned hvert år', en: 'That emissions go down a little every year' }],
            answer: 1,
            explain: { nb: 'Noen utslipp er svært vanskelige å fjerne helt. «Netto null» betyr at de restene som slippes ut, blir oppveid av like mye CO₂ som tas ut av lufta, for eksempel med skog eller CO₂-fangst.', en: 'Some emissions are very hard to remove completely. “Net zero” means that the remaining emissions are balanced by the same amount of CO₂ being taken out of the air, for example by forests or carbon capture.' }
          } }
        ]
      },
      {
        id: 'status', title: { nb: 'Hvordan ligger vi an?', en: 'How are we doing?' },
        blocks: [
          { p: { nb: 'Forskerne i **Global Carbon Project** regner hvert år ut hvor mye CO₂ verden slipper ut. Ifølge rapporten fra november 2026:', en: 'The scientists in the **Global Carbon Project** calculate every year how much CO₂ the world emits. According to the report from November 2026:' }, src: ['fno-utslipp'] },
          { list: [
            { nb: 'I **2025** var verdens CO₂-utslipp **rekordhøye**.', en: 'In **2025** the world’s CO₂ emissions were **at a record high**.' },
            { nb: 'I **2026** ventes en liten **nedgang på 0,4 prosent** – mest fordi stengningen av Hormuzstredet gjorde olje og gass dyrere, ikke på grunn av klimatiltak.', en: 'In **2026** a small **drop of 0.4 per cent** is expected – mostly because the closure of the Strait of Hormuz made oil and gas more expensive, not because of climate action.' },
            { nb: 'Omtrent **to tredeler** av økningen i verdens energibehov dekkes nå av **sol og vind**.', en: 'About **two thirds** of the increase in the world’s energy demand is now covered by **solar and wind**.' },
            { nb: 'Kina står for 32 prosent av utslippene, EU for 6 prosent. Utslippene i EU og USA går ned.', en: 'China accounts for 32 per cent of emissions, the EU for 6 per cent. Emissions in the EU and the USA are falling.' },
            { nb: 'CO₂ i lufta ventes å nå **427,7 ppm** i 2026 – 54 prosent over førindustrielt nivå.', en: 'CO₂ in the air is expected to reach **427.7 ppm** in 2026 – 54 per cent above the pre-industrial level.' },
            { nb: 'Med dagens utslipp er det mindre enn **fire år** igjen av karbonbudsjettet for 1,5 °C. Forskerne mener at verden i hvert fall **midlertidig** vil passere 1,5 grader.', en: 'At today’s emissions there are less than **four years** left of the carbon budget for 1.5 °C. The scientists think the world will pass 1.5 degrees, at least **temporarily**.' }
          ], src: ['fno-utslipp'] },
          { p: { nb: '**Norge** slapp ut 44,6 millioner tonn CO₂-ekvivalenter i 2024. Det er om lag 13 prosent lavere enn i 1990. Gjennom Parisavtalen har Norge lovet å kutte utslippene med 55 prosent innen 2030, sammenlignet med 1990. Olje- og gassvirksomheten står for de største utslippene i Norge.', en: '**Norway** emitted 44.6 million tonnes of CO₂ equivalents in 2024. That is about 13 per cent less than in 1990. Through the Paris Agreement Norway has promised to cut emissions by 55 per cent by 2030, compared with 1990. Oil and gas activities are the largest source of emissions in Norway.' }, src: ['snl-klimaendringer', 'snl-klimagasser', 'ssb-utslipp'] },
          { fact: { nb: 'Selv om vi passerer 1,5 °C, er ikke kampen tapt. Forskjellen mellom 1,5, 2 og 3 grader er stor for mennesker og natur. **Hver tidel av en grad teller.**', en: 'Even if we pass 1.5 °C, the fight is not lost. The difference between 1.5, 2 and 3 degrees is large for people and nature. **Every tenth of a degree counts.**' }, src: ['ndla-konsekvenser'] },
          { link: { href: '#klima-lesing', icon: 'book', title: { nb: 'Les artikkelen om utslippene selv', en: 'Read the article on emissions yourself' }, text: { nb: 'Med oppgaver før, under og etter lesingen, og spørsmål om kildekritikk.', en: 'With tasks before, during and after reading, and questions on source criticism.' } } }
        ]
      },
      {
        id: 'losninger', title: { nb: 'Løsningene', en: 'The solutions' },
        blocks: [
          { diagram: 'losninger' },
          { list: [
            { nb: '**Fornybar energi:** Strøm fra vann, vind og sol i stedet for kull, olje og gass. I Norge kommer rundt 89 prosent av strømmen fra **vannkraft**.', en: '**Renewable energy:** Electricity from water, wind and sun instead of coal, oil and gas. In Norway about 89 per cent of electricity comes from **hydropower**.' },
            { nb: '**Energisparing:** Bedre isolerte hus, varmepumper og mer effektive maskiner. Energi som ikke brukes, gir ingen utslipp.', en: '**Saving energy:** Better-insulated houses, heat pumps and more efficient machines. Energy that is not used gives no emissions.' },
            { nb: '**Transport:** Elbiler, elektriske busser, ferger og tog – og mer sykkel, gange og kollektivtrafikk.', en: '**Transport:** Electric cars, buses, ferries and trains – and more cycling, walking and public transport.' },
            { nb: '**Mat:** Mindre matsvinn og mindre rødt kjøtt. **Hva** du spiser betyr mer enn hvor langt maten er fraktet.', en: '**Food:** Less food waste and less red meat. **What** you eat matters more than how far the food has travelled.' },
            { nb: '**Natur:** Stanse avskoging, plante skog og la myrene være i fred.', en: '**Nature:** Stop deforestation, plant forests and leave bogs alone.' },
            { nb: '**Fangst og lagring av CO₂:** For utslipp som er vanskelige å kutte, som fra sementfabrikker. I Norge lagres CO₂ fra Brevik under havbunnen (Langskip).', en: '**Carbon capture and storage:** For emissions that are hard to cut, such as from cement factories. In Norway CO₂ from Brevik is stored under the sea floor (Langskip).' }
          ], src: ['snl-vannkraft', 'snl-varmepumpe', 'snl-elbil', 'owid-lokalmat', 'snl-karbonkretslopet', 'snl-karbonfangst'] },
          { p: { nb: 'Alle løsninger har **ulemper** også. Vindkraft og vannkraft tar plass i naturen. Batterier krever gruvedrift. Det er derfor viktig å drøfte hvordan energiproduksjon påvirker miljøet **både lokalt og globalt**.', en: 'All solutions have **disadvantages** too. Wind and hydropower take up space in nature. Batteries require mining. That is why it is important to discuss how energy production affects the environment **both locally and globally**.' }, src: ['snl-vindkraft', 'snl-fornybar'] },
          { deeper: {
            title: { nb: 'Kutte utslipp eller tilpasse seg?', en: 'Cut emissions or adapt?' },
            blocks: [
              { p: { nb: 'Det finnes to typer klimatiltak. **Utslippskutt** gjør oppvarmingen mindre. **[[klimatilpasning|Klimatilpasning]]** betyr å forberede samfunnet på de endringene som kommer uansett – for eksempel større avløpsrør for kraftig regn, flomvoller og å bygge hus lenger unna havet. Begge deler trengs.', en: 'There are two types of climate action. **Cutting emissions** makes the warming smaller. **[[klimatilpasning|Adaptation]]** means preparing society for the changes that will come anyway – for example bigger drains for heavy rain, flood barriers and building houses further from the sea. Both are needed.' }, src: ['snl-klimatilpasning', 'ndla-konsekvenser'] },
              { link: { href: '#klima-ov-grupper-tiltak', icon: 'puzzle', title: { nb: 'Øv: Kutte utslipp eller tilpasse seg?', en: 'Practise: Cut emissions or adapt?' }, text: { nb: 'Sorter tiltakene i riktig gruppe.', en: 'Sort the measures into the right group.' } } }
            ]
          } }
        ]
      },
      {
        id: 'du', title: { nb: 'Hva kan du gjøre?', en: 'What can you do?' },
        blocks: [
          { p: { nb: 'De største endringene må skje i energi, industri og transport, og det krever politikk og samarbeid mellom land. Men også det vi gjør hver dag, betyr noe: å fly mindre, gå, sykle og ta kollektivt, spise mer plantebasert, kaste mindre mat, spare strøm og kjøpe færre nye ting. Du kan også **si fra**, delta i debatten og velge utdanning og jobb som er med på å løse problemet.', en: 'The biggest changes must happen in energy, industry and transport, and that requires politics and cooperation between countries. But what we do every day also matters: flying less, walking, cycling and taking public transport, eating more plant-based food, wasting less food, saving electricity and buying fewer new things. You can also **speak up**, take part in the debate and choose education and work that help solve the problem.' }, src: ['snl-karbonkretslopet', 'ndla-hvagjorvi'] },
          { link: { href: '#klima-fotavtrykk', icon: 'foot', title: { nb: 'Prøv klimafotavtrykket', en: 'Try the carbon footprint' }, text: { nb: 'Sammenlign utslipp fra reiser og mat. Husk: Det er en modell, ikke en fasit.', en: 'Compare emissions from travel and food. Remember: it is a model, not an answer key.' } } },
          { title: { nb: 'Hvis du blir bekymret', en: 'If you get worried' }, history: { nb: 'Det er helt vanlig å bli bekymret av klimaendringer. Snakk med noen du stoler på. Husk også at mye går riktig vei: Sol og vind bygges ut raskere enn noen trodde, og mange land kutter utslipp. Forskerne er tydelige på at det **ikke er for sent** å gjøre en forskjell.', en: 'It is completely normal to feel worried about climate change. Talk to someone you trust. Also remember that a lot is going in the right direction: solar and wind are being built faster than anyone expected, and many countries are cutting emissions. The scientists are clear that it is **not too late** to make a difference.' }, src: ['fno-utslipp', 'ndla-konsekvenser'] },
          { discuss: { nb: '**Påstand:** «Norge er et lite land. Det vi gjør, betyr ingenting for klimaet.» Er du enig eller uenig? Finn argumenter for begge sider.', en: '**Claim:** “Norway is a small country. What we do makes no difference to the climate.” Do you agree or disagree? Find arguments for both sides.' } },
          { discuss: { nb: '**Påstand:** «Norge burde slutte å lete etter mer olje og gass.» Hvilke hensyn må vi veie opp mot hverandre – for klimaet, for arbeidsplasser og for energi til Europa?', en: '**Claim:** “Norway should stop looking for more oil and gas.” Which considerations must be weighed against each other – for the climate, for jobs and for energy for Europe?' } },
          { discuss: { nb: '**Påstand:** «Det er politikerne og de store selskapene som må løse klimaproblemet, ikke vanlige folk.»', en: '**Claim:** “It is politicians and big companies that must solve the climate problem, not ordinary people.”' } }
        ]
      }
    ],
    resources: ['ndla-hvagjorvi', 'fno-utslipp', 'snl-parisavtalen', 'snl-karbonbudsjett', 'owid-co2', 'nasa-interaktiv']
  }
};
