/* =====================================================================
   Historien om Jorda – LÆRINGSMÅL
   ---------------------------------------------------------------------
   DENNE FILEN ER LAGET FOR AT LÆREREN SKAL KUNNE ENDRE DEN.
   Se forklaringen øverst i content/celler/maal.js.
   OBS: Kompetansemålene under «official» er hentet fra de andre temaene.
   Læreren bør sjekke læreplanen (udir.no/lk20/NAT01-05) og legge til
   det kompetansemålet som passer best for geologi.
   ===================================================================== */
NatLab.topic('jorda').goals = {

  intro: {
    nb: 'Målene bygger på læreplanen i naturfag (LK20) etter 10. trinn. Bruk listen til å sjekke deg selv før prøven.',
    en: 'The goals are based on the Norwegian science curriculum (LK20) after Year 10. Use the list to check yourself before the test.'
  },

  groups: [
    {
      title: { nb: 'Geologi', en: 'Geology' },
      items: [
        { text: { nb: 'Jeg kan forklare hva **geologi** er, og gi eksempler på hva geologer jobber med.', en: 'I can explain what **geology** is and give examples of what geologists work on.' }, link: '#jorda-geologi-les' },
        { text: { nb: 'Jeg kan beskrive metoder geologene bruker: **lag i berget, fossiler, datering og jordskjelvbølger**.', en: 'I can describe methods geologists use: **rock layers, fossils, dating and earthquake waves**.' }, link: '#jorda-geologi' }
      ]
    },
    {
      title: { nb: 'Jorda blir til og bygges opp', en: 'How the Earth formed and is built' },
      items: [
        { text: { nb: 'Jeg kan beskrive hvordan **Jorda ble til** for rundt 4,6 milliarder år siden.', en: 'I can describe how **the Earth formed** about 4.6 billion years ago.' }, link: '#jorda-oppbygning-les' },
        { text: { nb: 'Jeg kan beskrive **Jordas lag**: jordskorpe, mantel, ytre og indre kjerne.', en: 'I can describe **the Earth’s layers**: crust, mantle, outer and inner core.' }, link: '#jorda-oppbygning' },
        { text: { nb: 'Jeg kan forklare forskjellen på **havskorpe** og **kontinentalskorpe**.', en: 'I can explain the difference between **oceanic crust** and **continental crust**.' }, link: '#jorda-oppbygning-les' },
        { text: { nb: 'Jeg kan forklare forskjellen på **litosfæren** og **astenosfæren**.', en: 'I can explain the difference between **the lithosphere** and **the asthenosphere**.' }, link: '#jorda-oppbygning-les', level: 'deeper' }
      ]
    },
    {
      title: { nb: 'Platetektonikk', en: 'Plate tectonics' },
      items: [
        { text: { nb: 'Jeg kan forklare at jordskorpa er delt i **plater** som beveger seg.', en: 'I can explain that the crust is divided into moving **plates**.' }, link: '#jorda-platetektonikk-les' },
        { text: { nb: 'Jeg kan beskrive hva som skjer når plater beveger seg **fra hverandre, mot hverandre og forbi hverandre**.', en: 'I can describe what happens when plates move **apart, towards each other and past each other**.' }, link: '#jorda-platetektonikk' },
        { text: { nb: 'Jeg kan forklare hvorfor **vulkaner og jordskjelv** finnes der platene møtes.', en: 'I can explain why **volcanoes and earthquakes** are found where plates meet.' }, link: '#jorda-kart' },
        { text: { nb: 'Jeg kan forklare hvordan **fjellkjeder, dyphavsgroper og midthavsrygger** dannes.', en: 'I can explain how **mountain ranges, ocean trenches and mid-ocean ridges** form.' }, link: '#jorda-platetektonikk' }
      ]
    },
    {
      title: { nb: 'Verdenskartet i endring', en: 'The changing world map' },
      items: [
        { text: { nb: 'Jeg kan forklare hva **konveksjon** er, og hvordan mantelen henger sammen med platebevegelsene.', en: 'I can explain what **convection** is, and how the mantle is linked to the plate movements.' }, link: '#jorda-verdenskart' },
        { text: { nb: 'Jeg kan beskrive hvordan kontinentene har flyttet seg fra **Pangea** til i dag.', en: 'I can describe how the continents have moved from **Pangaea** to today.' }, link: '#jorda-tidskart' },
        { text: { nb: 'Jeg kan forklare hva en **modell** av mantelen viser, og hva den ikke viser.', en: 'I can explain what a **model** of the mantle shows, and what it does not show.' }, link: '#jorda-verdenskart-les' }
      ]
    },
    {
      title: { nb: 'Mineraler og bergarter', en: 'Minerals and rocks' },
      items: [
        { text: { nb: 'Jeg kan forklare hva et **mineral** er, og gi eksempler som kvarts, feltspat og glimmer.', en: 'I can explain what a **mineral** is, and give examples like quartz, feldspar and mica.' }, link: '#jorda-bergarter' },
        { text: { nb: 'Jeg kan forklare hvordan **magmatiske, sedimentære og metamorfe** bergarter dannes.', en: 'I can explain how **igneous, sedimentary and metamorphic** rocks form.' }, link: '#jorda-bergarter-les' },
        { text: { nb: 'Jeg kan beskrive **bergartenes kretsløp**.', en: 'I can describe **the rock cycle**.' }, link: '#jorda-ov-merk-kretslop' }
      ]
    },
    {
      title: { nb: 'Alfred Wegener og naturvitenskapen', en: 'Alfred Wegener and science' },
      items: [
        { text: { nb: 'Jeg kan forklare **teorien om kontinentaldrift** og bevisene Wegener brukte.', en: 'I can explain **the theory of continental drift** and the evidence Wegener used.' }, link: '#jorda-wegener' },
        { text: { nb: 'Jeg kan forklare hvorfor teorien ble avvist, og hvordan **nye bevis fra havbunnen** gjorde at den ble godtatt.', en: 'I can explain why the theory was rejected, and how **new evidence from the ocean floor** made it accepted.' }, link: '#jorda-wegener-les' },
        { text: { nb: 'Jeg kan bruke historien om Wegener til å forklare hvordan **naturvitenskapelige teorier** utvikler seg.', en: 'I can use the story of Wegener to explain how **scientific theories** develop.' }, link: '#jorda-wegener-les' }
      ]
    }
  ],

  /* Kompetansemål fra læreplanen (LK20, NAT01-05, etter 10. trinn).
     Den norske teksten er den offisielle. Den engelske er vår oversettelse.
     LÆREREN: Legg til kompetansemålet om geologi/jordas oppbygning fra udir.no. */
  official: [
    { nb: 'bruke og lage modeller for å forutsi eller beskrive naturfaglige prosesser og systemer og gjøre rede for modellenes styrker og begrensninger', en: 'use and create models to predict or describe scientific processes and systems and explain the strengths and limitations of the models' },
    { nb: 'stille spørsmål og lage hypoteser om naturfaglige fenomener, identifisere avhengige og uavhengige variabler og samle data for å finne svar', en: 'ask questions and make hypotheses about scientific phenomena, identify dependent and independent variables and collect data to find answers' }
  ]
};
