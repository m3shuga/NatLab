/* =====================================================================
   Celler og virus – LÆRINGSMÅL
   ---------------------------------------------------------------------
   DENNE FILEN ER LAGET FOR AT LÆREREN SKAL KUNNE ENDRE DEN.

   Slik endrer du et mål:
     - Endre teksten mellom fnuttene '...' (både nb = bokmål og en = engelsk).
     - Hvis teksten inneholder en apostrof ('), skriv den som ’ i stedet.

   Slik legger du til et nytt mål:
     - Kopier en hel linje som starter med { text: ... } og lim den inn
       under. Husk komma på slutten av linjen.

   link  = hvilken side målet hører til (kan fjernes)
   level = 'deeper' gir et lite «Gå dypere»-merke (kan fjernes)
   **ord** = uthevet tekst
   ===================================================================== */
NatLab.topic('celler').goals = {

  intro: {
    nb: 'Når du er ferdig med temaet, skal du kunne disse tingene. Bruk listen til å sjekke deg selv før prøven.',
    en: 'When you have finished the topic, you should be able to do these things. Use the list to check yourself before the test.'
  },

  groups: [
    {
      title: { nb: 'Cellen – livets byggestein', en: 'The cell – the building block of life' },
      items: [
        { text: { nb: 'Jeg kan forklare at alle levende organismer er bygd opp av **celler**.', en: 'I can explain that all living organisms are made of **cells**.' }, link: '#celler-dyrecelle-les' },
        { text: { nb: 'Jeg kan tegne og sette navn på delene i en **dyrecelle** og fortelle hva de gjør.', en: 'I can draw and label the parts of an **animal cell** and say what they do.' }, link: '#celler-dyrecelle' },
        { text: { nb: 'Jeg kan tegne og sette navn på delene i en **plantecelle** og fortelle hva de gjør.', en: 'I can draw and label the parts of a **plant cell** and say what they do.' }, link: '#celler-plantecelle' },
        { text: { nb: 'Jeg kan forklare hvordan formen til ulike celler henger sammen med jobben de gjør.', en: 'I can explain how the shape of different cells is linked to the job they do.' }, link: '#celler-dyrecelle-les' }
      ]
    },
    {
      title: { nb: 'Sammenligne celler', en: 'Comparing cells' },
      items: [
        { text: { nb: 'Jeg kan **sammenligne** dyreceller, planteceller og bakterier og forklare likheter og forskjeller.', en: 'I can **compare** animal cells, plant cells and bacteria and explain similarities and differences.' }, link: '#celler-sammenlign' },
        { text: { nb: 'Jeg kan forklare forskjellen på **prokaryote** og **eukaryote** celler.', en: 'I can explain the difference between **prokaryotic** and **eukaryotic** cells.' }, link: '#celler-sammenlign' },
        { text: { nb: 'Jeg kan forklare hvorfor en modell av en celle er nyttig, og hva modellen ikke viser.', en: 'I can explain why a model of a cell is useful, and what the model does not show.' }, link: '#celler-dyrecelle-les' },
        { text: { nb: 'Jeg kan forklare hvorfor mitokondrier og kloroplaster kanskje en gang var bakterier.', en: 'I can explain why mitochondria and chloroplasts may once have been bacteria.' }, link: '#celler-sammenlign', level: 'deeper' }
      ]
    },
    {
      title: { nb: 'Energi i cellene', en: 'Energy in cells' },
      items: [
        { text: { nb: 'Jeg kan forklare hva som skjer i **fotosyntesen**, og hvor i cellen det skjer.', en: 'I can explain what happens in **photosynthesis** and where in the cell it happens.' }, link: '#celler-plantecelle-les' },
        { text: { nb: 'Jeg kan forklare hva som skjer i **celleåndingen**, og hvor i cellen det skjer.', en: 'I can explain what happens in **cellular respiration** and where in the cell it happens.' }, link: '#celler-dyrecelle-les' },
        { text: { nb: 'Jeg kan forklare hvordan fotosyntese og celleånding henger sammen i **karbonkretsløpet**.', en: 'I can explain how photosynthesis and cellular respiration are linked in the **carbon cycle**.' }, link: '#celler-plantecelle-les' }
      ]
    },
    {
      title: { nb: 'Bakterier, virus og helse', en: 'Bacteria, viruses and health' },
      items: [
        { text: { nb: 'Jeg kan beskrive hvordan en **bakterie** er bygd opp, og gi eksempler på nyttige og skadelige bakterier.', en: 'I can describe how a **bacterium** is built and give examples of useful and harmful bacteria.' }, link: '#celler-bakterie-les' },
        { text: { nb: 'Jeg kan beskrive hvordan et **virus** er bygd opp, og forklare hvorfor virus ikke er celler.', en: 'I can describe how a **virus** is built and explain why viruses are not cells.' }, link: '#celler-virus' },
        { text: { nb: 'Jeg kan forklare hvordan et virus formerer seg inne i en vertscelle.', en: 'I can explain how a virus multiplies inside a host cell.' }, link: '#celler-virus-les' },
        { text: { nb: 'Jeg kan forklare hvorfor **antibiotika** virker mot bakterier, men ikke mot virus.', en: 'I can explain why **antibiotics** work against bacteria but not against viruses.' }, link: '#celler-bakterie-les' },
        { text: { nb: 'Jeg kan forklare hvordan **vaksiner** virker, og hva de betyr for folkehelsen.', en: 'I can explain how **vaccines** work and what they mean for public health.' }, link: '#celler-virus-les' },
        { text: { nb: 'Jeg kan forklare hvordan **antibiotikaresistens** oppstår, og hvorfor det er et problem.', en: 'I can explain how **antibiotic resistance** develops and why it is a problem.' }, link: '#celler-bakterie-les', level: 'deeper' }
      ]
    }
  ],

  /* Kompetansemål fra læreplanen (LK20, NAT01-05, etter 10. trinn).
     Den norske teksten er den offisielle. Den engelske er vår oversettelse. */
  official: [
    { nb: 'sammenligne celler hos ulike organismer og beskrive sammenhenger mellom oppbygning og funksjon', en: 'compare cells in different organisms and describe the links between structure and function' },
    { nb: 'gjøre rede for hvordan fotosyntese og celleånding gir energi til alt levende gjennom karbonkretsløpet', en: 'explain how photosynthesis and cellular respiration provide energy for all living things through the carbon cycle' },
    { nb: 'beskrive kroppens immunforsvar og hvordan vaksiner virker, og gjøre rede for hva vaksiner betyr for folkehelsen', en: 'describe the body’s immune system and how vaccines work, and explain what vaccines mean for public health' },
    { nb: 'bruke og lage modeller for å forutsi eller beskrive naturfaglige prosesser og systemer og gjøre rede for modellenes styrker og begrensninger', en: 'use and create models to predict or describe scientific processes and systems and explain the strengths and limitations of the models' },
    { nb: 'beskrive hvordan forskere har kommet fram til evolusjonsteorien og bruke denne til å forklare utvikling av biologisk mangfold', en: 'describe how scientists arrived at the theory of evolution and use it to explain the development of biodiversity' }
  ]
};
