/* =====================================================================
   Klimaendringer – LÆRINGSMÅL
   ---------------------------------------------------------------------
   DENNE FILEN ER LAGET FOR AT LÆREREN SKAL KUNNE ENDRE DEN.
   Se forklaringen øverst i content/celler/maal.js.
   Kompetansemålene under «official» er fra læreplanen i naturfag
   (LK20, NAT01-05), etter 10. trinn.
   ===================================================================== */
NatLab.topic('klima').goals = {

  intro: {
    nb: 'Målene bygger på læreplanen i naturfag (LK20) etter 10. trinn. Bruk listen til å sjekke deg selv før prøven.',
    en: 'The goals are based on the Norwegian science curriculum (LK20) after Year 10. Use the list to check yourself before the test.'
  },

  groups: [
    {
      title: { nb: 'Klima og klimaendringer', en: 'Climate and climate change' },
      items: [
        { text: { nb: 'Jeg kan forklare forskjellen på **vær** og **klima**.', en: 'I can explain the difference between **weather** and **climate**.' }, link: '#klima-hva-les' },
        { text: { nb: 'Jeg kan forklare hva **global oppvarming** og **klimaendringer** er.', en: 'I can explain what **global warming** and **climate change** are.' }, link: '#klima-hva-les' },
        { text: { nb: 'Jeg kan gi eksempler på endringer vi kan måle og se, i Norge og i verden.', en: 'I can give examples of changes we can measure and see, in Norway and in the world.' }, link: '#klima-forogetter' }
      ]
    },
    {
      title: { nb: 'Karbon og karbonkretsløpet', en: 'Carbon and the carbon cycle' },
      items: [
        { text: { nb: 'Jeg kan beskrive **karbon** og hvor det finnes.', en: 'I can describe **carbon** and where it is found.' }, link: '#klima-karbon-les' },
        { text: { nb: 'Jeg kan gjøre rede for hvordan **fotosyntese og celleånding** gir energi til alt levende gjennom karbonkretsløpet.', en: 'I can explain how **photosynthesis and cellular respiration** give energy to all living things through the carbon cycle.' }, link: '#klima-karbonmodell' },
        { text: { nb: 'Jeg kan forklare forskjellen på det **raske** og det **langsomme** karbonkretsløpet.', en: 'I can explain the difference between the **fast** and the **slow** carbon cycle.' }, link: '#klima-karbonmodell-tid' },
        { text: { nb: 'Jeg kan forklare hva **forsuring av havet** er, og hvorfor det skjer.', en: 'I can explain what **ocean acidification** is, and why it happens.' }, link: '#klima-forsokhav' }
      ]
    },
    {
      title: { nb: 'Drivhuseffekten og årsaker', en: 'The greenhouse effect and causes' },
      items: [
        { text: { nb: 'Jeg kan **beskrive drivhuseffekten** med ordene stråling, absorpsjon og refleksjon.', en: 'I can **describe the greenhouse effect** using the words radiation, absorption and reflection.' }, link: '#klima-drivhusmodell' },
        { text: { nb: 'Jeg kan nevne de viktigste **drivhusgassene** og hvor de kommer fra.', en: 'I can name the most important **greenhouse gases** and where they come from.' }, link: '#klima-arsaker-les' },
        { text: { nb: 'Jeg kan forklare hva en **tilbakekoblingsmekanisme** er, med eksempler.', en: 'I can explain what a **feedback mechanism** is, with examples.' }, link: '#klima-drivhusmodell-hvis' },
        { text: { nb: 'Jeg kan forklare hvordan **elektromagnetisk stråling** fra sola og fra Jorda er forskjellig.', en: 'I can explain how **electromagnetic radiation** from the sun and from the Earth differ.' }, link: '#klima-arsaker-les', level: 'deeper' }
      ]
    },
    {
      title: { nb: 'Naturlige endringer', en: 'Natural changes' },
      items: [
        { text: { nb: 'Jeg kan gi eksempler på **naturlige årsaker** til klimaendringer.', en: 'I can give examples of **natural causes** of climate change.' }, link: '#klima-normalt' },
        { text: { nb: 'Jeg kan forklare hvordan forskerne bruker **iskjerner** og andre spor til å finne ut hvordan klimaet var før.', en: 'I can explain how scientists use **ice cores** and other traces to find out what the climate was like before.' }, link: '#klima-normalt-les' },
        { text: { nb: 'Jeg kan drøfte hvorfor **dagens klimaendringer** er annerledes enn naturlige endringer.', en: 'I can discuss why **today’s climate change** is different from natural changes.' }, link: '#klima-normalt-les' }
      ]
    },
    {
      title: { nb: 'Løsninger', en: 'Solutions' },
      items: [
        { text: { nb: 'Jeg kan forklare hva **Parisavtalen**, **1,5-gradersmålet** og **netto null** betyr.', en: 'I can explain what **the Paris Agreement**, **the 1.5 degree goal** and **net zero** mean.' }, link: '#klima-losninger-les' },
        { text: { nb: 'Jeg kan gi eksempler på løsninger og **drøfte** fordeler og ulemper.', en: 'I can give examples of solutions and **discuss** advantages and disadvantages.' }, link: '#klima-losninger' },
        { text: { nb: 'Jeg kan drøfte hvordan **energiproduksjon og energibruk** påvirker miljøet lokalt og globalt.', en: 'I can discuss how **energy production and energy use** affect the environment locally and globally.' }, link: '#klima-losninger-les' }
      ]
    },
    {
      title: { nb: 'Forskning, data og kildekritikk', en: 'Research, data and source criticism' },
      items: [
        { text: { nb: 'Jeg kan **lese og tolke grafer** med ekte klimadata.', en: 'I can **read and interpret graphs** with real climate data.' }, link: '#klima-malinger' },
        { text: { nb: 'Jeg kan gi eksempler på **dagsaktuell forskning** og forklare hvordan ny kunnskap blir til.', en: 'I can give examples of **current research** and explain how new knowledge is made.' }, link: '#klima-lesing' },
        { text: { nb: 'Jeg kan vurdere **påstander og kilder** om klima.', en: 'I can assess **claims and sources** about climate.' }, link: '#klima-myter-les' },
        { text: { nb: 'Jeg kan forklare hva en **modell** viser, og hva den ikke viser.', en: 'I can explain what a **model** shows, and what it does not show.' }, link: '#klima-karbonmodell-hvis' }
      ]
    }
  ],

  /* Kompetansemål fra læreplanen (LK20, NAT01-05, etter 10. trinn).
     Den norske teksten er den offisielle. Den engelske er vår oversettelse. */
  official: [
    { nb: 'beskrive drivhuseffekten og gjøre rede for faktorer som kan forårsake globale klimaendringer', en: 'describe the greenhouse effect and explain factors that can cause global climate change' },
    { nb: 'gjøre rede for hvordan fotosyntese og celleånding gir energi til alt levende gjennom karbonkretsløpet', en: 'explain how photosynthesis and cellular respiration provide energy for all living things through the carbon cycle' },
    { nb: 'drøfte hvordan energiproduksjon og energibruk kan påvirke miljøet lokalt og globalt', en: 'discuss how energy production and energy use can affect the environment locally and globally' },
    { nb: 'gi eksempler på dagsaktuell forskning og drøfte hvordan ny kunnskap genereres gjennom samarbeid og kritisk tilnærming til eksisterende kunnskap', en: 'give examples of current research and discuss how new knowledge is generated through collaboration and a critical approach to existing knowledge' },
    { nb: 'bruke og lage modeller for å forutsi eller beskrive naturfaglige prosesser og systemer og gjøre rede for modellenes styrker og begrensninger', en: 'use and create models to predict or describe scientific processes and systems and explain the strengths and limitations of the models' },
    { nb: 'analysere og bruke innsamlede data til å lage forklaringer, drøfte forklaringene i lys av relevant teori og vurdere kvaliteten på egne og andres utforskinger', en: 'analyse and use collected data to create explanations, discuss the explanations in light of relevant theory and assess the quality of one’s own and others’ investigations' },
    { nb: 'delta i risikovurderinger knyttet til forsøk og følge sikkerhetstiltakene', en: 'take part in risk assessments related to experiments and follow the safety measures' }
  ]
};
