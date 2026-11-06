/* =====================================================================
   Celler og virus – DELENE (strukturene) i cellene og virusene
   ---------------------------------------------------------------------
   Hver del har:
     name     navn (bokmål og engelsk)
     color    fargen delen har i ALLE tegninger og lister
     level    'basic' (grunnleggende) eller 'deeper' (gå dypere)
     short    kort beskrivelse av jobben (brukes i «Koble»-oppgaven)
     what     hva er det?
     does     hva gjør den?
     analogy  sammenligning fra hverdagen
     fact     «Visste du?»
     foundIn  hvor delen finnes: true = ja, false = nei, 'noen' = noen av dem
     src      kilder (id-er fra kilder.js)
   Tekstmarkering: **ord** blir uthevet, [[ord]] lenker til ordlisten.
   ===================================================================== */
NatLab.topic('celler').structures = {
  cellemembran: {
    name: { nb: 'Cellemembran', en: 'Cell membrane' },
    color: '#d6457a', level: 'basic',
    short: { nb: 'Bestemmer hva som slipper inn i og ut av cellen', en: 'Controls what gets into and out of the cell' },
    what: { nb: 'En tynn, myk hinne av fett (lipider) og proteiner som ligger rundt hele cellen.', en: 'A thin, flexible skin made of fats (lipids) and proteins that surrounds the whole cell.' },
    does: { nb: 'Holder på innholdet i cellen og **bestemmer hva som slipper inn og ut**. Vann, oksygen og næring skal inn, avfall skal ut.', en: 'Keeps the contents of the cell together and **controls what gets in and out**. Water, oxygen and nutrients go in, waste goes out.' },
    analogy: { nb: 'En dørvakt som sjekker hvem som får komme inn.', en: 'A bouncer checking who is allowed in.' },
    fact: { nb: 'Membranen er så tynn at den er omtrent 10 000 ganger tynnere enn et papirark.', en: 'The membrane is so thin that it is about 10,000 times thinner than a sheet of paper.' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: true, virus: false },
    src: ['sml-cellemembraner']
  },
  cytoplasma: {
    name: { nb: 'Cytoplasma', en: 'Cytoplasm' },
    color: '#d9a92a', level: 'basic',
    short: { nb: 'Geléaktig væske der mange av cellens kjemiske reaksjoner skjer', en: 'Jelly-like fluid where many of the cell’s chemical reactions happen' },
    what: { nb: 'En geléaktig væske som fyller cellen. Den består mest av vann med mange stoffer løst i.', en: 'A jelly-like fluid that fills the cell. It is mostly water with many substances dissolved in it.' },
    does: { nb: 'Organellene ligger i cytoplasmaet, og **mange av cellens kjemiske reaksjoner skjer her**.', en: 'The organelles float in the cytoplasm, and **many of the cell’s chemical reactions happen here**.' },
    analogy: { nb: 'Gulvet i en fabrikk, der maskinene står og arbeidet foregår.', en: 'The factory floor, where the machines stand and the work happens.' },
    fact: { nb: 'Cytoplasmaet kan strømme rundt i cellen. I bladceller fra vasspest kan du se kloroplastene bli fraktet rundt i et vanlig skolemikroskop.', en: 'The cytoplasm can flow around inside the cell. In leaf cells from waterweed you can see the chloroplasts being carried around with an ordinary school microscope.' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: true, virus: false },
    src: ['sml-cytoplasma']
  },
  cellekjerne: {
    name: { nb: 'Cellekjerne', en: 'Nucleus' },
    color: '#6a4fd0', level: 'basic',
    short: { nb: 'Inneholder arvestoffet (DNA) og styrer cellen', en: 'Contains the genetic material (DNA) and controls the cell' },
    what: { nb: 'En stor, rund organell med en dobbel hinne rundt seg (kjernemembranen). Inni ligger **arvestoffet, DNA**.', en: 'A large, round organelle with a double membrane around it (the nuclear envelope). Inside is the **genetic material, DNA**.' },
    does: { nb: 'DNA-et inneholder «oppskriftene» på alle proteinene cellen trenger. Slik **styrer kjernen hva cellen gjør**. Når cellen deler seg, kopieres DNA-et.', en: 'The DNA contains the “recipes” for all the proteins the cell needs. This is how **the nucleus controls what the cell does**. When the cell divides, the DNA is copied.' },
    analogy: { nb: 'Et bibliotek med alle oppskriftene – og kontrollrommet som bestemmer hvilke som skal brukes.', en: 'A library with all the recipes – and the control room that decides which ones to use.' },
    fact: { nb: 'Hvis du strakk ut alt DNA-et fra én menneskecelle, ville tråden blitt omtrent 2 meter lang!', en: 'If you stretched out all the DNA from one human cell, the thread would be about 2 metres long!' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: false, virus: false },
    src: ['sml-cellekjerne', 'snl-dna']
  },
  mitokondrie: {
    name: { nb: 'Mitokondrie', en: 'Mitochondrion' },
    color: '#e8712f', level: 'basic',
    short: { nb: 'Frigjør energi fra næring og oksygen (celleånding)', en: 'Releases energy from food and oxygen (cellular respiration)' },
    what: { nb: 'Små, avlange organeller med to hinner. Den indre hinnen er brettet mange ganger.', en: 'Small, oval organelles with two membranes. The inner membrane is folded many times.' },
    does: { nb: 'Her skjer **celleånding**: sukker (glukose) og oksygen blir til karbondioksid og vann, og det frigjøres **energi** som cellen kan bruke.', en: 'This is where **cellular respiration** happens: sugar (glucose) and oxygen become carbon dioxide and water, and **energy** is released that the cell can use.' },
    analogy: { nb: 'Et kraftverk som lager energi til hele byen.', en: 'A power station making energy for the whole city.' },
    fact: { nb: 'Mitokondriene har sitt eget DNA. Forskerne mener de stammer fra bakterier som ble tatt opp av en annen celle for over en milliard år siden.', en: 'Mitochondria have their own DNA. Scientists think they come from bacteria that were taken up by another cell more than a billion years ago.' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: false, virus: false },
    src: ['sml-mitokondrie', 'snl-celleanding']
  },
  ribosom: {
    name: { nb: 'Ribosomer', en: 'Ribosomes' },
    color: '#2a62d9', level: 'basic',
    short: { nb: 'Lager proteiner etter oppskrift fra arvestoffet', en: 'Build proteins using instructions from the genetic material' },
    what: { nb: 'Bittesmå korn, så små at man ikke ser dem i et vanlig lysmikroskop. Noen flyter fritt, andre sitter på ER.', en: 'Tiny grains, so small you cannot see them with an ordinary light microscope. Some float freely, others sit on the ER.' },
    does: { nb: 'Ribosomene **lager proteiner**. De leser en kopi av oppskriften fra DNA-et og setter sammen proteinet bit for bit.', en: 'Ribosomes **build proteins**. They read a copy of the recipe from the DNA and put the protein together piece by piece.' },
    analogy: { nb: 'Kokker som lager mat etter oppskrift.', en: 'Cooks making food from a recipe.' },
    fact: { nb: 'Ribosomene i bakterier er litt mindre og annerledes enn våre. Derfor kan noen typer antibiotika ødelegge bakterienes ribosomer uten å skade våre egne.', en: 'The ribosomes in bacteria are a bit smaller and different from ours. That is why some antibiotics can destroy bacterial ribosomes without harming our own.' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: true, virus: false },
    src: ['sml-ribosom']
  },
  er: {
    name: { nb: 'Endoplasmatisk nettverk (ER)', en: 'Endoplasmic reticulum (ER)' },
    color: '#1f9bb8', level: 'deeper',
    short: { nb: 'Rør- og sekkesystem som lager og frakter proteiner og fett', en: 'System of tubes and sacs that makes and transports proteins and fats' },
    what: { nb: 'Et system av flate sekker og rør som henger sammen med kjernemembranen. **Ru ER** har ribosomer på utsiden, **glatt ER** har ikke.', en: 'A system of flat sacs and tubes connected to the nuclear envelope. **Rough ER** has ribosomes on the outside, **smooth ER** does not.' },
    does: { nb: 'Ru ER lager og bretter proteiner. Glatt ER lager blant annet fettstoffer (lipider). ER frakter stoffene videre i cellen.', en: 'Rough ER makes and folds proteins. Smooth ER makes things like fats (lipids). The ER carries these substances on through the cell.' },
    analogy: { nb: 'Et samlebånd med korridorer i fabrikken.', en: 'An assembly line with corridors in the factory.' },
    fact: { nb: 'Leverceller har mye glatt ER, fordi det hjelper til med å bryte ned giftstoffer.', en: 'Liver cells have a lot of smooth ER, because it helps break down toxins.' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: false, virus: false },
    src: ['snl-er']
  },
  golgi: {
    name: { nb: 'Golgiapparat', en: 'Golgi apparatus' },
    color: '#c98a12', level: 'deeper',
    short: { nb: 'Sorterer og pakker proteiner og sender dem dit de skal', en: 'Sorts and packs proteins and sends them where they need to go' },
    what: { nb: 'En stabel med flate, buede sekker omgitt av hinne.', en: 'A stack of flat, curved sacs surrounded by membrane.' },
    does: { nb: 'Tar imot proteiner fra ER, **endrer, sorterer og pakker dem i små blærer (vesikler)** og sender dem dit de skal – i cellen eller ut av cellen.', en: 'Receives proteins from the ER, **changes, sorts and packs them into small bubbles (vesicles)** and sends them where they need to go – inside or out of the cell.' },
    analogy: { nb: 'Postkontoret som pakker og sender pakker.', en: 'The post office that packs and sends parcels.' },
    fact: { nb: 'Golgiapparatet er oppkalt etter den italienske forskeren Camillo Golgi, som beskrev det i 1898.', en: 'The Golgi apparatus is named after the Italian scientist Camillo Golgi, who described it in 1898.' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: false, virus: false },
    src: ['snl-golgi']
  },
  lysosom: {
    name: { nb: 'Lysosomer', en: 'Lysosomes' },
    color: '#b23f8c', level: 'deeper',
    short: { nb: 'Bryter ned avfall og utslitte deler med enzymer', en: 'Break down waste and worn-out parts using enzymes' },
    what: { nb: 'Små blærer med hinne rundt, fylt med **enzymer** som kan bryte ned store stoffer.', en: 'Small bubbles with a membrane around them, filled with **enzymes** that can break down large substances.' },
    does: { nb: 'Bryter ned avfall, gamle celledeler og ting cellen har tatt inn, for eksempel bakterier. Byggesteinene kan brukes på nytt.', en: 'Break down waste, old cell parts and things the cell has taken in, such as bacteria. The building blocks can be reused.' },
    analogy: { nb: 'Gjenvinningsstasjonen i byen.', en: 'The city’s recycling centre.' },
    fact: { nb: 'Hvite blodceller bruker lysosomene til å bryte ned bakterier de har «spist».', en: 'White blood cells use lysosomes to break down bacteria they have “eaten”.' },
    foundIn: { dyrecelle: true, plantecelle: false, bakterie: false, virus: false },
    foundNote: { nb: 'I planteceller gjør vakuolen mye av den samme jobben.', en: 'In plant cells, the vacuole does much of the same job.' },
    src: ['snl-lysosom']
  },
  vesikkel: {
    name: { nb: 'Vesikler', en: 'Vesicles' },
    color: '#4aa3d6', level: 'deeper',
    short: { nb: 'Små membranblærer som frakter stoffer', en: 'Small membrane bubbles that transport substances' },
    what: { nb: 'Små, runde blærer med hinne rundt.', en: 'Small, round bubbles with a membrane around them.' },
    does: { nb: 'Frakter stoffer rundt i cellen, for eksempel fra golgiapparatet til cellemembranen. Der kan innholdet slippes ut av cellen.', en: 'Carry substances around the cell, for example from the Golgi apparatus to the cell membrane. There the contents can be released out of the cell.' },
    analogy: { nb: 'Varebiler som kjører pakker rundt i byen.', en: 'Delivery vans driving parcels around the city.' },
    fact: { nb: 'Når en nervecelle sender et signal, slipper vesikler ut signalstoffer til neste celle.', en: 'When a nerve cell sends a signal, vesicles release signal substances to the next cell.' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: false, virus: false },
    src: ['snl-golgi']
  },
  cellevegg: {
    name: { nb: 'Cellevegg', en: 'Cell wall' },
    color: '#5d8f2f', level: 'basic',
    short: { nb: 'Stiv vegg utenfor cellemembranen som gir form og støtte', en: 'Stiff wall outside the cell membrane that gives shape and support' },
    what: { nb: 'En stiv vegg **utenfor** cellemembranen. Hos planter er den laget av **cellulose**. Hos bakterier er den laget av et annet stoff.', en: 'A stiff wall **outside** the cell membrane. In plants it is made of **cellulose**. In bacteria it is made of a different substance.' },
    does: { nb: 'Gir cellen **form og støtte** og beskytter den. Veggen hindrer at cellen sprekker når den tar opp mye vann. Vann og små stoffer slipper lett gjennom veggen.', en: 'Gives the cell **shape and support** and protects it. The wall stops the cell from bursting when it takes up a lot of water. Water and small substances pass easily through the wall.' },
    analogy: { nb: 'Bymuren rundt en gammel by.', en: 'The wall around an old city.' },
    fact: { nb: 'Bomull og papir er laget av cellulose fra plantenes cellevegger.', en: 'Cotton and paper are made of cellulose from plant cell walls.' },
    foundIn: { dyrecelle: false, plantecelle: true, bakterie: true, virus: false },
    src: ['snl-cellevegg', 'sml-bakterier']
  },
  kloroplast: {
    name: { nb: 'Kloroplaster', en: 'Chloroplasts' },
    color: '#2f9d4f', level: 'basic',
    short: { nb: 'Lager sukker av lys, vann og CO₂ (fotosyntese)', en: 'Make sugar from light, water and CO₂ (photosynthesis)' },
    what: { nb: 'Grønne, avlange organeller. Den grønne fargen kommer fra **klorofyll**, som fanger opp lys.', en: 'Green, oval organelles. The green colour comes from **chlorophyll**, which captures light.' },
    does: { nb: 'Her skjer **fotosyntesen**: Ved hjelp av lysenergi blir karbondioksid og vann til sukker (glukose) og oksygen.', en: 'This is where **photosynthesis** happens: using light energy, carbon dioxide and water become sugar (glucose) and oxygen.' },
    analogy: { nb: 'Solcellepaneler som også er en matfabrikk.', en: 'Solar panels that are also a food factory.' },
    fact: { nb: 'En bladcelle kan ha 20–40 kloroplaster. Akkurat som mitokondriene har kloroplastene sitt eget DNA.', en: 'A leaf cell can have 20–40 chloroplasts. Just like mitochondria, chloroplasts have their own DNA.' },
    foundIn: { dyrecelle: false, plantecelle: true, bakterie: false, virus: false },
    src: ['snl-kloroplaster', 'snl-fotosyntese']
  },
  vakuole: {
    name: { nb: 'Vakuole', en: 'Vacuole' },
    color: '#3fb6c0', level: 'basic',
    short: { nb: 'Stor blære med cellesaft som lagrer vann og holder cellen stiv', en: 'Large sac of cell sap that stores water and keeps the cell firm' },
    what: { nb: 'En stor blære med hinne rundt, fylt med **cellesaft** (vann med stoffer løst i). Den kalles også cellesaftrom.', en: 'A large sac with a membrane around it, filled with **cell sap** (water with substances dissolved in it).' },
    does: { nb: 'Lagrer vann, næring og avfallsstoffer. Når vakuolen er full, presser den mot celleveggen og **holder cellen stiv**, slik at planten står oppreist.', en: 'Stores water, nutrients and waste. When the vacuole is full, it presses against the cell wall and **keeps the cell firm**, so that the plant stands upright.' },
    analogy: { nb: 'En vannballong som holder teltet stramt.', en: 'A water balloon that keeps the tent taut.' },
    fact: { nb: 'Vakuolen kan fylle opptil 95 % av plantecellen. Når en plante visner, er det fordi vakuolene har mistet vann.', en: 'The vacuole can fill up to 95 % of the plant cell. When a plant wilts, it is because the vacuoles have lost water.' },
    foundIn: { dyrecelle: 'noen', plantecelle: true, bakterie: false, virus: false },
    foundNote: { nb: 'Dyreceller har bare små vakuoler, eller ingen.', en: 'Animal cells only have small vacuoles, or none.' },
    src: ['snl-vakuole']
  },
  arvestoff: {
    name: { nb: 'Arvestoff', en: 'Genetic material' },
    color: '#9b3fc4', level: 'basic',
    short: { nb: 'Inneholder oppskriftene (genene) for å lage nye kopier', en: 'Contains the instructions (genes) for making new copies' },
    what: { nb: 'Lange molekyler som inneholder **genene** – oppskriftene på alt som skal lages. I alle celler er arvestoffet **DNA**. Noen virus har **RNA** i stedet.', en: 'Long molecules that contain the **genes** – the instructions for everything that is made. In all cells the genetic material is **DNA**. Some viruses have **RNA** instead.' },
    does: { nb: 'Bestemmer hvilke proteiner som skal lages, og blir kopiert når nye celler eller nye virus lages.', en: 'Decides which proteins are made, and is copied when new cells or new viruses are made.' },
    analogy: { nb: 'En kokebok med alle oppskriftene.', en: 'A cookbook with all the recipes.' },
    fact: { nb: 'Bakterien E. coli har rundt 4000 gener. Mennesket har rundt 20 000.', en: 'The bacterium E. coli has about 4,000 genes. Humans have about 20,000.' },
    foundIn: { dyrecelle: true, plantecelle: true, bakterie: true, virus: true },
    foundNote: { nb: 'I dyre- og planteceller ligger arvestoffet inne i cellekjernen.', en: 'In animal and plant cells the genetic material is inside the nucleus.' },
    src: ['snl-dna', 'sml-prokaryot']
  },
  plasmid: {
    name: { nb: 'Plasmider', en: 'Plasmids' },
    color: '#c7356f', level: 'deeper',
    short: { nb: 'Små DNA-ringer med ekstra gener, f.eks. for antibiotikaresistens', en: 'Small DNA rings with extra genes, e.g. for antibiotic resistance' },
    what: { nb: 'Små ringer av DNA i tillegg til bakteriens vanlige arvestoff. Ikke alle bakterier har plasmider.', en: 'Small rings of DNA in addition to the bacterium’s main genetic material. Not all bacteria have plasmids.' },
    does: { nb: 'Inneholder ekstra gener som kan være nyttige, for eksempel gener som gjør bakterien **motstandsdyktig mot antibiotika**.', en: 'Contain extra genes that can be useful, for example genes that make the bacterium **resistant to antibiotics**.' },
    analogy: { nb: 'Ekstra oppskriftskort som kan deles med naboen.', en: 'Extra recipe cards that can be shared with the neighbour.' },
    fact: { nb: 'Bakterier kan dele plasmider med hverandre. Slik kan antibiotikaresistens spre seg fra én bakterie til en annen.', en: 'Bacteria can share plasmids with each other. That is how antibiotic resistance can spread from one bacterium to another.' },
    foundIn: { dyrecelle: false, plantecelle: false, bakterie: 'noen', virus: false },
    src: ['snl-plasmid', 'sml-antibiotikaresistens']
  },
  flagell: {
    name: { nb: 'Flagell', en: 'Flagellum' },
    color: '#8b6a45', level: 'deeper',
    short: { nb: 'Lang tråd som roterer og får bakterien til å svømme', en: 'Long thread that spins and makes the bacterium swim' },
    what: { nb: 'En lang, tynn tråd av protein som stikker ut fra bakterien. Den kalles også svingtråd.', en: 'A long, thin thread of protein sticking out from the bacterium.' },
    does: { nb: 'Flagellen roterer og **får bakterien til å bevege seg** gjennom væske.', en: 'The flagellum spins and **moves the bacterium** through liquid.' },
    analogy: { nb: 'En propell på en båt.', en: 'A propeller on a boat.' },
    fact: { nb: 'Ikke alle bakterier har flagell. Noen har én, andre har mange.', en: 'Not all bacteria have a flagellum. Some have one, others have many.' },
    foundIn: { dyrecelle: 'noen', plantecelle: false, bakterie: 'noen', virus: false },
    foundNote: { nb: 'Noen dyreceller, som sædceller, har en svømmehale som også kalles flagell, men den er bygd annerledes.', en: 'Some animal cells, like sperm cells, have a swimming tail also called a flagellum, but it is built differently.' },
    src: ['snl-flagell']
  },
  pili: {
    name: { nb: 'Pili (fimbrier)', en: 'Pili (fimbriae)' },
    color: '#a88a5c', level: 'deeper',
    short: { nb: 'Korte hår som hjelper bakterien å feste seg', en: 'Short hairs that help the bacterium attach' },
    what: { nb: 'Korte, tynne hår av protein på utsiden av bakterien.', en: 'Short, thin hairs of protein on the outside of the bacterium.' },
    does: { nb: 'Hjelper bakterien å **feste seg** til overflater og celler. Noen pili brukes til å overføre DNA til andre bakterier.', en: 'Help the bacterium **attach** to surfaces and cells. Some pili are used to pass DNA to other bacteria.' },
    analogy: { nb: 'Borrelås.', en: 'Velcro.' },
    fact: { nb: 'Noen bakterier bruker pili til å feste seg til celler i kroppen vår, for eksempel i urinveiene.', en: 'Some bacteria use pili to stick to cells in our body, for example in the urinary tract.' },
    foundIn: { dyrecelle: false, plantecelle: false, bakterie: 'noen', virus: false },
    src: ['sml-bakterier', 'sml-antibiotikaresistens']
  },
  kapsel: {
    name: { nb: 'Kapsel (slimlag)', en: 'Capsule (slime layer)' },
    color: '#7fb069', level: 'deeper',
    short: { nb: 'Slimete ytterlag som beskytter bakterien', en: 'Slimy outer layer that protects the bacterium' },
    what: { nb: 'Et slimete lag utenpå celleveggen hos noen bakterier.', en: 'A slimy layer outside the cell wall in some bacteria.' },
    does: { nb: '**Beskytter bakterien** mot uttørking og gjør det vanskeligere for immunforsvaret å ødelegge den.', en: '**Protects the bacterium** against drying out and makes it harder for the immune system to destroy it.' },
    analogy: { nb: 'En glatt regnjakke.', en: 'A slippery raincoat.' },
    fact: { nb: 'Ikke bland kapsel og kapsid! Kapsel er slimlaget hos bakterier. Kapsid er proteinkappen hos virus.', en: 'Don’t mix up capsule and capsid! A capsule is the slime layer of bacteria. A capsid is the protein coat of a virus.' },
    foundIn: { dyrecelle: false, plantecelle: false, bakterie: 'noen', virus: false },
    src: ['sml-bakterier']
  },
  kapsid: {
    name: { nb: 'Proteinkappe (kapsid)', en: 'Protein coat (capsid)' },
    color: '#e0533f', level: 'basic',
    short: { nb: 'Proteinskall som beskytter virusets arvestoff', en: 'Protein shell that protects the virus’s genetic material' },
    what: { nb: 'Et skall av protein rundt virusets arvestoff. Det er bygd av mange like proteinbiter.', en: 'A shell of protein around the virus’s genetic material. It is built from many identical protein pieces.' },
    does: { nb: '**Beskytter arvestoffet** på veien fra én celle til en annen.', en: '**Protects the genetic material** on the way from one cell to another.' },
    analogy: { nb: 'En beskyttende eske rundt en minnepinne.', en: 'A protective case around a memory stick.' },
    fact: { nb: 'Mange virus har et kapsid formet som et fotballaktig mangekantet skall. Bitene setter seg sammen av seg selv inne i vertscellen.', en: 'Many viruses have a capsid shaped like a many-sided, football-like shell. The pieces assemble themselves inside the host cell.' },
    foundIn: { dyrecelle: false, plantecelle: false, bakterie: false, virus: true },
    src: ['sml-virus']
  },
  lipidhylster: {
    name: { nb: 'Lipidhylster (virushylster)', en: 'Lipid envelope (viral envelope)' },
    color: '#e8964f', level: 'deeper',
    short: { nb: 'Fettholdig ytterhinne som viruset har «lånt» fra en celle', en: 'Fatty outer layer the virus “borrowed” from a cell' },
    what: { nb: 'En hinne av fett (lipider) som ligger ytterst hos noen virus, for eksempel influensa- og meslingvirus.', en: 'A membrane of fats (lipids) on the outside of some viruses, for example influenza and measles viruses.' },
    does: { nb: 'Hylsteret er en bit av cellemembranen fra cellen viruset ble laget i. Det hjelper viruset å smelte sammen med en ny celle.', en: 'The envelope is a piece of the cell membrane from the cell the virus was made in. It helps the virus merge with a new cell.' },
    analogy: { nb: 'En forkledning som får viruset til å ligne kroppens egne celler.', en: 'A disguise that makes the virus look like the body’s own cells.' },
    fact: { nb: 'Såpe løser opp fett. Derfor kan grundig håndvask med såpe ødelegge virus med lipidhylster.', en: 'Soap dissolves fat. That is why washing your hands well with soap can destroy viruses with a lipid envelope.' },
    foundIn: { dyrecelle: false, plantecelle: false, bakterie: false, virus: 'noen' },
    src: ['sml-virus', 'sml-influensavirus']
  },
  overflateprotein: {
    name: { nb: 'Overflateproteiner (piggproteiner)', en: 'Surface proteins (spike proteins)' },
    color: '#c42b4f', level: 'basic',
    short: { nb: 'Pigger som passer i «låser» på cellen viruset skal inn i', en: 'Spikes that fit “locks” on the cell the virus enters' },
    what: { nb: 'Proteiner som stikker ut fra overflaten av viruset, som pigger.', en: 'Proteins that stick out from the surface of the virus, like spikes.' },
    does: { nb: 'Piggene passer i bestemte mottakere (reseptorer) på cellen, **som en nøkkel i en lås**. Slik fester viruset seg og kommer seg inn.', en: 'The spikes fit particular receivers (receptors) on the cell, **like a key in a lock**. This is how the virus attaches and gets in.' },
    analogy: { nb: 'Nøkler som bare passer i noen få dører.', en: 'Keys that only fit a few doors.' },
    fact: { nb: 'Influensavirus har to typer pigger: H (hemagglutinin) og N (nevraminidase). Derfor har influensatyper navn som H1N1.', en: 'Influenza viruses have two types of spikes: H (haemagglutinin) and N (neuraminidase). That is why flu types have names like H1N1.' },
    foundIn: { virus: true },
    src: ['sml-influensavirus', 'sml-virus']
  },
  hale: {
    name: { nb: 'Hale', en: 'Tail' },
    color: '#6f7f93', level: 'basic',
    short: { nb: 'Sprøyteaktig rør som sender fagens DNA inn i bakterien', en: 'Syringe-like tube that injects the phage’s DNA into the bacterium' },
    what: { nb: 'Et hult rør av protein under hodet på bakteriofagen, med en plate i enden.', en: 'A hollow tube of protein under the head of the bacteriophage, with a plate at the end.' },
    does: { nb: 'Halen trekker seg sammen og **sprøyter arvestoffet inn** i bakterien, mens selve proteinkappen blir igjen utenfor.', en: 'The tail contracts and **injects the genetic material** into the bacterium, while the protein coat stays outside.' },
    analogy: { nb: 'En sprøyte.', en: 'A syringe.' },
    fact: { nb: 'Fagen har også et enzym som lager et lite hull i celleveggen til bakterien.', en: 'The phage also has an enzyme that makes a small hole in the bacterium’s cell wall.' },
    foundIn: { virus: 'noen' },
    foundNote: { nb: 'Bare noen virus, som bakteriofager, har hale.', en: 'Only some viruses, like bacteriophages, have a tail.' },
    src: ['sml-bakteriofag']
  },
  halefiber: {
    name: { nb: 'Halefibre', en: 'Tail fibres' },
    color: '#4d5a6b', level: 'basic',
    short: { nb: 'Bein som finner og fester fagen til riktig bakterie', en: 'Legs that find and attach the phage to the right bacterium' },
    what: { nb: 'Lange, tynne «bein» av protein på enden av halen.', en: 'Long, thin “legs” of protein at the end of the tail.' },
    does: { nb: 'Kjenner igjen og **fester seg til riktig bakterie**. Hver fag kan bare angripe noen få typer bakterier.', en: 'Recognise and **attach to the right bacterium**. Each phage can only attack a few types of bacteria.' },
    analogy: { nb: 'Landingsbeina på en månelander.', en: 'The landing legs of a moon lander.' },
    fact: { nb: 'Fordi fager er så kresne, prøver forskere å bruke dem som medisin mot bakterier som tåler antibiotika.', en: 'Because phages are so picky, scientists are trying to use them as medicine against bacteria that resist antibiotics.' },
    foundIn: { virus: 'noen' },
    src: ['sml-bakteriofag']
  }
};
