/* =====================================================================
   Klimaendringer – DEL 06: MYTER OG FAKTA – HVORDAN VET VI DET?
   ===================================================================== */
NatLab.topic('klima').organisms.myter = {
  code: '06',
  title: { nb: 'Myter og fakta – hvordan vet vi det?', en: 'Myths and facts – how do we know?' },
  sub: { nb: 'Målinger, vitenskap og påstander du kan møte.', en: 'Measurements, science and claims you may come across.' },
  lead: {
    nb: 'Forskerne måler klimaet på mange ulike måter – fra verdensrommet til bunnen av isen. Klikk på delene for å se hvordan.',
    en: 'Scientists measure the climate in many different ways – from space to the bottom of the ice. Click on the parts to see how.'
  },
  art: 'malinger',
  diagrams: ['malinger'],
  modelNames: { malinger: { nb: 'Målinger av klimaet', en: 'Measuring the climate' } },
  intro: { nb: 'Når mange ulike målinger viser det samme, blir forskerne sikrere. Hvor mange ulike måter å måle på finner du?', en: 'When many different measurements show the same thing, scientists become more certain. How many different ways of measuring can you find?' },
  practiceHref: '#klima-ov-merk-malinger',
  extraTabs: [{ href: '#klima-lesing', icon: 'book', label: { nb: 'Les forskning', en: 'Read research' } }],

  page: {
    goals: [
      { nb: 'gi eksempler på hvordan forskerne **måler** klimaet', en: 'give examples of how scientists **measure** the climate' },
      { nb: 'forklare hvordan ny kunnskap blir til gjennom **samarbeid og kritisk tilnærming** til eksisterende kunnskap', en: 'explain how new knowledge is created through **collaboration and a critical approach** to existing knowledge' },
      { nb: 'vurdere vanlige påstander om klimaet ved hjelp av kunnskap og **kildekritikk**', en: 'assess common claims about the climate using knowledge and **source criticism**' }
    ],
    keypoints: [
      { nb: 'Klimaet måles med værstasjoner, satellitter, målebøyer i havet, iskjerner, årringer og målinger av isbreer.', en: 'The climate is measured with weather stations, satellites, floats in the ocean, ice cores, tree rings and glacier measurements.' },
      { nb: '**FNs klimapanel** samler kunnskapen fra tusenvis av forskere i store rapporter.', en: '**The UN climate panel** gathers the knowledge of thousands of scientists in big reports.' },
      { nb: 'Debatten blant forskere handler i dag mest om **hvor mye** og **hva vi skal gjøre** – ikke om oppvarmingen skjer.', en: 'The debate among scientists today is mostly about **how much** and **what to do** – not whether the warming is happening.' },
      { nb: 'Når du møter en påstand: Spør **hvem** som sier det, **hvordan** de vet det, og om **andre kilder** sier det samme.', en: 'When you meet a claim: ask **who** is saying it, **how** they know, and whether **other sources** say the same.' }
    ],
    sections: [
      {
        id: 'maling', title: { nb: 'Slik måler forskerne klimaet', en: 'How scientists measure the climate' },
        blocks: [
          { p: { nb: 'Ingen enkelt måling kan bevise at klimaet endrer seg. Men når **mange ulike målinger**, gjort av ulike forskere på ulike måter, viser det samme, blir kunnskapen sikker.', en: 'No single measurement can prove that the climate is changing. But when **many different measurements**, made by different scientists in different ways, show the same thing, the knowledge becomes solid.' }, src: ['nasa-bevis'] },
          { diagram: 'malinger' },
          { list: [
            { nb: '**Temperatur:** værstasjoner på land og målinger fra skip og bøyer i havet, tilbake til midten av 1800-tallet.', en: '**Temperature:** weather stations on land and measurements from ships and floats at sea, back to the mid-1800s.' },
            { nb: '**CO₂:** Mauna Loa-observatoriet siden 1958, og satellitter.', en: '**CO₂:** the Mauna Loa Observatory since 1958, and satellites.' },
            { nb: '**Is og hav:** satellitter, vannstandsmålere og målinger av isbreer.', en: '**Ice and sea:** satellites, tide gauges and glacier measurements.' },
            { nb: '**Klimaet før:** iskjerner, årringer, sedimenter, korallrev og gamle trestokker.', en: '**The past climate:** ice cores, tree rings, sediments, coral reefs and ancient logs.' }
          ], src: ['nasa-bevis', 'snl-mauna-loa', 'snl-karbonkretslopet'] },
          { link: { href: '#klima-malinger', icon: 'chart', title: { nb: 'Utforsk målingene selv', en: 'Explore the measurements yourself' }, text: { nb: 'Tre interaktive grafer med ekte data: CO₂, temperatur og iskjerner.', en: 'Three interactive graphs with real data: CO₂, temperature and ice cores.' } } }
        ]
      },
      {
        id: 'vitenskap', title: { nb: 'Hvordan blir kunnskap til?', en: 'How is knowledge made?' },
        blocks: [
          { p: { nb: 'Forskere publiserer resultatene sine i **vitenskapelige tidsskrifter**. Før en artikkel blir trykket, blir den vurdert av andre forskere (fagfellevurdering). Andre forskere prøver så å gjenta målingene eller finne feil. Kunnskap som tåler slik kritikk over tid, blir sikrere.', en: 'Scientists publish their results in **scientific journals**. Before an article is printed, it is checked by other scientists (peer review). Other scientists then try to repeat the measurements or find mistakes. Knowledge that survives such criticism over time becomes more certain.' }, src: ['ndla-vitenskap-kilde'] },
          { p: { nb: '**[[ipcc|FNs klimapanel (IPCC)]]** ble opprettet i 1988. Panelet forsker ikke selv, men samler og vurderer forskningen fra tusenvis av forskere i store rapporter. Den sjette hovedrapporten kom i 2021.', en: '**[[ipcc|The UN climate panel (IPCC)]]** was founded in 1988. The panel does not do research itself, but gathers and assesses the research of thousands of scientists in big reports. The sixth main report came in 2021.' }, src: ['snl-ipcc', 'snl-klimadebatten'] },
          { p: { nb: 'Forskere er ikke alltid enige – og det er bra. Uenighet driver forskningen framover. Men etter 2010-tallet har debatten i stor grad flyttet seg fra **om** klimaendringene skjer, til hvilke **tiltak og tilpasninger** som er rimelige.', en: 'Scientists do not always agree – and that is good. Disagreement drives research forward. But since the 2010s the debate has largely moved from **whether** climate change is happening to which **measures and adaptations** are sensible.' }, src: ['snl-klimadebatten'] },
          { history: { nb: 'Forskerne bak furustokkene i Rondane fant at de høyeste sommertemperaturene etter istida ikke stemte med noen klimamodeller. Slike funn brukes til å **kontrollsjekke** og forbedre modellene. Slik blir kunnskapen bedre: gjennom samarbeid og kritikk.', en: 'The researchers behind the pine logs in Rondane found that the highest summer temperatures after the ice age did not match some climate models. Such findings are used to **check** and improve the models. This is how knowledge improves: through collaboration and criticism.' }, title: { nb: 'Eksempel: Når målinger og modeller ikke stemmer', en: 'Example: When measurements and models disagree' }, src: ['fno-rondane'] }
        ]
      },
      {
        id: 'myter', title: { nb: 'Myte eller fakta?', en: 'Myth or fact?' },
        blocks: [
          { p: { nb: 'Her er påstander du kan møte i sosiale medier eller i diskusjoner. Hva tror du – myte eller fakta? Trykk og se svaret.', en: 'Here are claims you may come across on social media or in discussions. What do you think – myth or fact? Tap to see the answer.' } },
          { claims: [
            { claim: { nb: 'Klimaet har alltid endret seg, så det som skjer nå, er naturlig.', en: 'The climate has always changed, so what is happening now is natural.' }, verdict: 'myte',
              explain: { nb: 'Klimaet har endret seg før – men av naturlige årsaker og vanligvis langsomt. De naturlige faktorene kan ikke forklare oppvarmingen nå. Dagens endringer skjer mye raskere, og hovedårsaken er menneskenes utslipp.', en: 'The climate has changed before – but for natural reasons and usually slowly. The natural factors cannot explain today’s warming. Today’s changes are much faster, and the main cause is human emissions.' }, src: ['snl-arsaker', 'ipcc-spm'] },
            { claim: { nb: 'Det er sola som varmer opp Jorda nå.', en: 'It is the sun that is warming the Earth now.' }, verdict: 'myte',
              explain: { nb: 'Sola har ikke endret seg på noen viktig måte siden 1950-tallet. De siste tiårene har den heller bremset oppvarmingen litt.', en: 'The sun has not changed in any important way since the 1950s. In recent decades it has if anything slowed the warming slightly.' }, src: ['snl-arsaker'] },
            { claim: { nb: 'CO₂ er bare 0,04 prosent av lufta, så det kan ikke bety noe.', en: 'CO₂ is only 0.04 per cent of the air, so it cannot matter.' }, verdict: 'myte',
              explain: { nb: 'Nitrogen og oksygen, som er nesten hele lufta, er ikke drivhusgasser. Derfor betyr de små mengdene CO₂ mye. CO₂ har økt med 47 prosent siden 1750.', en: 'Nitrogen and oxygen, which make up almost all of the air, are not greenhouse gases. That is why the small amounts of CO₂ matter so much. CO₂ has increased by 47 per cent since 1750.' }, src: ['snl-drivhuseffekten', 'ipcc-spm'] },
            { claim: { nb: 'Vulkaner slipper ut mer CO₂ enn menneskene.', en: 'Volcanoes release more CO₂ than humans.' }, verdict: 'myte',
              explain: { nb: 'Vulkanene slipper ut rundt 0,1 milliard tonn karbon i året. Menneskene slipper ut rundt 10 milliarder tonn fra fossilt brensel – rundt hundre ganger så mye.', en: 'Volcanoes release about 0.1 billion tonnes of carbon a year. Humans release about 10 billion tonnes from fossil fuels – about a hundred times as much.' }, src: ['ipcc-ch5', 'snl-karbonkretslopet'] },
            { claim: { nb: 'Uten drivhuseffekten ville Jorda vært et frossent sted.', en: 'Without the greenhouse effect the Earth would be a frozen place.' }, verdict: 'fakta',
              explain: { nb: 'Uten drivhusgasser ville middeltemperaturen vært rundt −18 °C. Den naturlige drivhuseffekten er livsviktig. Problemet er at vi forsterker den.', en: 'Without greenhouse gases the average temperature would be about −18 °C. The natural greenhouse effect is vital for life. The problem is that we are enhancing it.' }, src: ['snl-drivhuseffekten'] },
            { claim: { nb: 'Vanndamp står for 98 prosent av oppvarmingen.', en: 'Water vapour causes 98 per cent of the warming.' }, verdict: 'myte',
              explain: { nb: 'Ingen vitenskapelige publikasjoner dokumenterer dette. Beregninger tilsier at vanndamp står for rundt 50 prosent, skyer for rundt 25 prosent og CO₂ for rundt 20 prosent av drivhuseffekten. Mengden vanndamp styres av temperaturen – den forsterker endringene, men starter dem ikke.', en: 'No scientific publications document this. Calculations suggest that water vapour accounts for about 50 per cent, clouds for about 25 per cent and CO₂ for about 20 per cent of the greenhouse effect. The amount of water vapour is controlled by the temperature – it amplifies changes but does not start them.' }, src: ['snl-klimadebatten'] },
            { claim: { nb: 'Havet stiger.', en: 'The sea is rising.' }, verdict: 'fakta',
              explain: { nb: 'Det globale havnivået har steget med 21–24 cm fra 1880 til 2023, og stigningen går raskere. Noen steder i Norge stiger landet fortsatt etter istida, så der merkes det mindre.', en: 'Global sea level rose by 21–24 cm from 1880 to 2023, and the rise is speeding up. In some places in Norway the land is still rising after the ice age, so it is less noticeable there.' }, src: ['snl-global-oppvarming'] },
            { claim: { nb: 'Det var kaldt i vinter, så global oppvarming stemmer ikke.', en: 'It was cold this winter, so global warming is not true.' }, verdict: 'myte',
              explain: { nb: 'Én kald vinter er vær. Klima er gjennomsnittet over mange år og hele Jorda. Selv i et varmere klima kommer det kalde perioder.', en: 'One cold winter is weather. Climate is the average over many years and the whole Earth. Even in a warmer climate there are cold periods.' }, src: ['snl-klima'] }
          ] }
        ]
      },
      {
        id: 'kilder', title: { nb: 'Sjekk kilden', en: 'Check the source' },
        blocks: [
          { p: { nb: 'Når du leser noe om klimaet på nettet eller i sosiale medier, kan disse spørsmålene hjelpe deg:', en: 'When you read something about the climate online or on social media, these questions can help you:' }, src: ['ndla-kildekritikk', 'kildekompasset'] },
          { list: [
            { nb: '**Hvem** står bak? En forsker, en journalist, et selskap, en interesseorganisasjon – eller en ukjent konto?', en: '**Who** is behind it? A scientist, a journalist, a company, an interest group – or an unknown account?' },
            { nb: '**Hvorfor** er det laget? For å informere, selge noe, eller få deg til å mene noe?', en: '**Why** was it made? To inform, to sell something, or to make you think something?' },
            { nb: '**Hvordan** vet de det? Viser de til målinger eller forskning?', en: '**How** do they know? Do they refer to measurements or research?' },
            { nb: '**Når** er det skrevet? Er det oppdatert?', en: '**When** was it written? Is it up to date?' },
            { nb: '**Stemmer** det med andre gode kilder, som Store norske leksikon, NDLA eller FNs klimapanel?', en: '**Does it match** other good sources, like Store norske leksikon, NDLA or the UN climate panel?' }
          ] },
          { link: { href: '#klima-lesing', icon: 'book', title: { nb: 'Øv på kildekritikk med en ekte artikkel', en: 'Practise source criticism with a real article' }, text: { nb: 'Les en artikkel fra forskning.no med helhetslesing.', en: 'Read an article from forskning.no with whole-text reading.' } } },
          { explain: { nb: 'Velg én av mytene over. Skriv et kort, vennlig svar til en venn som tror på den. Bruk minst én kilde.', en: 'Choose one of the myths above. Write a short, friendly reply to a friend who believes it. Use at least one source.' } }
        ]
      }
    ],
    resources: ['nasa-bevis', 'snl-klimadebatten', 'snl-ipcc', 'ndla-kildekritikk', 'ndla-vitenskap-kilde', 'kildekompasset']
  }
};
