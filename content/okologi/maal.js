/* =====================================================================
   Økologi og økosystemer – LÆRINGSMÅL
   ---------------------------------------------------------------------
   DENNE FILEN ER LAGET FOR AT LÆREREN SKAL KUNNE ENDRE DEN.
   Se forklaringen øverst i content/celler/maal.js.
   ===================================================================== */
NatLab.topic('okologi').goals = {

  intro: {
    nb: 'Målene bygger på kompetansemålene i læreplanen i naturfag (LK20) etter 10. trinn. Bruk listen til å sjekke deg selv før prøven.',
    en: 'The goals are based on the competence aims in the Norwegian science curriculum (LK20) after Year 10. Use the list to check yourself before the test.'
  },

  groups: [
    {
      title: { nb: 'Økosystemet', en: 'The ecosystem' },
      items: [
        { text: { nb: 'Jeg kan forklare hva et **økosystem** er, og gi eksempler på økosystemer i Norge.', en: 'I can explain what an **ecosystem** is and give examples of ecosystems in Norway.' }, link: '#okologi-okosystemet-les' },
        { text: { nb: 'Jeg kan forklare forskjellen på **biotiske** og **abiotiske** faktorer, og gi eksempler på hvordan de påvirker hverandre.', en: 'I can explain the difference between **biotic** and **abiotic** factors, and give examples of how they affect each other.' }, link: '#okologi-okosystemet' },
        { text: { nb: 'Jeg kan bruke begrepene **populasjon, samfunn, habitat (leveområde), nisje og konkurranse**.', en: 'I can use the terms **population, community, habitat, niche and competition**.' }, link: '#okologi-okosystemet-les' },
        { text: { nb: 'Jeg kan stille spørsmål, lage en hypotese og samle data om et økosystem i nærmiljøet.', en: 'I can ask questions, make a hypothesis and collect data about an ecosystem in my local area.' }, link: '#okologi-feltarbeid' }
      ]
    },
    {
      title: { nb: 'Tilpasninger og roller', en: 'Adaptations and roles' },
      items: [
        { text: { nb: 'Jeg kan gi eksempler på hvordan norske arter er **tilpasset** leveområdet sitt, sortert i kropp, funksjon og atferd.', en: 'I can give examples of how Norwegian species are **adapted** to their habitat, sorted into body, function and behaviour.' }, link: '#okologi-tilpasning-les' },
        { text: { nb: 'Jeg kan forklare hvordan tilpasninger oppstår gjennom **naturlig utvalg** og evolusjon.', en: 'I can explain how adaptations arise through **natural selection** and evolution.' }, link: '#okologi-tilpasning-les', level: 'deeper' },
        { text: { nb: 'Jeg kan forklare rollene **produsent, konsument, toppredator og nedbryter**.', en: 'I can explain the roles **producer, consumer, top predator and decomposer**.' }, link: '#okologi-tilpasning-les' }
      ]
    },
    {
      title: { nb: 'Næringskjeder og næringsnett', en: 'Food chains and food webs' },
      items: [
        { text: { nb: 'Jeg kan lage **næringskjeder** og forklare hva pilene og de **trofiske nivåene** betyr.', en: 'I can make **food chains** and explain what the arrows and the **trophic levels** mean.' }, link: '#okologi-kjeder-les' },
        { text: { nb: 'Jeg kan bruke et **næringsnett** til å forutsi hva som kan skje når en art forsvinner.', en: 'I can use a **food web** to predict what might happen when a species disappears.' }, link: '#okologi-naeringsnett-hvis' },
        { text: { nb: 'Jeg kan forklare hva en modell av et næringsnett viser, og hva den ikke viser.', en: 'I can explain what a model of a food web shows, and what it does not show.' }, link: '#okologi-kjeder-les' }
      ]
    },
    {
      title: { nb: 'Energi i økosystemet', en: 'Energy in the ecosystem' },
      items: [
        { text: { nb: 'Jeg kan forklare at energien i økosystemer kommer fra **sola** og fanges i **fotosyntesen**.', en: 'I can explain that the energy in ecosystems comes from **the sun** and is captured in **photosynthesis**.' }, link: '#okologi-energi-les' },
        { text: { nb: 'Jeg kan forklare **energibevaring**: Energi kan ikke oppstå eller forsvinne.', en: 'I can explain **conservation of energy**: energy cannot be created or destroyed.' }, link: '#okologi-energi-les' },
        { text: { nb: 'Jeg kan bruke **10 %-regelen** til å regne ut energi på ulike trofiske nivåer.', en: 'I can use the **10 % rule** to calculate energy at different trophic levels.' }, link: '#okologi-naeringsnett-pyramide' },
        { text: { nb: 'Jeg kan forklare hva **energikvalitet** er, og hvorfor energien til slutt blir varme.', en: 'I can explain what **energy quality** is, and why energy ends up as heat.' }, link: '#okologi-energi-les' },
        { text: { nb: 'Jeg kan forklare hvorfor **energi strømmer gjennom** økosystemet, mens **materie går i kretsløp**.', en: 'I can explain why **energy flows through** the ecosystem, while **matter cycles**.' }, link: '#okologi-energi-les' }
      ]
    },
    {
      title: { nb: 'Mennesket og naturen', en: 'Humans and nature' },
      items: [
        { text: { nb: 'Jeg kan gi eksempler på hvordan mennesker påvirker økosystemer og **biologisk mangfold**.', en: 'I can give examples of how humans affect ecosystems and **biodiversity**.' }, link: '#okologi-mennesket-les' },
        { text: { nb: 'Jeg kan drøfte **dilemmaer** knyttet til bruk av naturressurser, for eksempel fiske og rovdyr.', en: 'I can discuss **dilemmas** about using natural resources, for example fishing and predators.' }, link: '#okologi-mennesket-les' },
        { text: { nb: 'Jeg kan gi eksempler på **samisk tradisjonell kunnskap** om naturen og hvordan den kan bidra til bærekraftig forvaltning.', en: 'I can give examples of **Sámi traditional knowledge** about nature and how it can contribute to sustainable management.' }, link: '#okologi-mennesket-les' }
      ]
    }
  ],

  /* Kompetansemål fra læreplanen (LK20, NAT01-05, etter 10. trinn).
     Den norske teksten er den offisielle. Den engelske er vår oversettelse. */
  official: [
    { nb: 'utforske sammenhenger mellom abiotiske og biotiske faktorer i et økosystem og diskutere hvordan energi og materie omdannes i kretsløp', en: 'explore the relationships between abiotic and biotic factors in an ecosystem and discuss how energy and matter are converted in cycles' },
    { nb: 'gjøre rede for hvordan fotosyntese og celleånding gir energi til alt levende gjennom karbonkretsløpet', en: 'explain how photosynthesis and cellular respiration provide energy for all living things through the carbon cycle' },
    { nb: 'gjøre rede for energibevaring og energikvalitet og utforske ulike måter å omdanne, transportere og lagre energi på', en: 'explain conservation of energy and energy quality and explore different ways of converting, transporting and storing energy' },
    { nb: 'gi eksempler på og drøfte aktuelle dilemmaer knyttet til utnyttelse av naturressurser og tap av biologisk mangfold', en: 'give examples of and discuss current dilemmas related to the use of natural resources and loss of biodiversity' },
    { nb: 'gi eksempler på samers tradisjonelle kunnskap om naturen og diskutere hvordan denne kunnskapen kan bidra til bærekraftig forvaltning av naturen', en: 'give examples of Sámi traditional knowledge about nature and discuss how this knowledge can contribute to sustainable management of nature' },
    { nb: 'beskrive hvordan forskere har kommet fram til evolusjonsteorien og bruke denne til å forklare utvikling av biologisk mangfold', en: 'describe how scientists arrived at the theory of evolution and use it to explain the development of biodiversity' },
    { nb: 'bruke og lage modeller for å forutsi eller beskrive naturfaglige prosesser og systemer og gjøre rede for modellenes styrker og begrensninger', en: 'use and create models to predict or describe scientific processes and systems and explain the strengths and limitations of the models' },
    { nb: 'stille spørsmål og lage hypoteser om naturfaglige fenomener, identifisere avhengige og uavhengige variabler og samle data for å finne svar', en: 'ask questions and make hypotheses about scientific phenomena, identify dependent and independent variables and collect data to find answers' }
  ]
};
