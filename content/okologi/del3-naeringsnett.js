/* =====================================================================
   Økologi – DEL 03: NÆRINGSKJEDER OG NÆRINGSNETT
   ===================================================================== */
NatLab.topic('okologi').organisms.kjeder = {
  code: '03',
  title: { nb: 'Næringskjeder og næringsnett', en: 'Food chains and food webs' },
  sub: { nb: 'Hvem spiser hvem – og hva skjer når noen forsvinner?', en: 'Who eats whom – and what happens when someone disappears?' },
  lead: {
    nb: 'Energi og næring går fra organisme til organisme når noen blir spist. Kjedene henger sammen i et stort nett – og trekker du i én tråd, merkes det mange steder.',
    en: 'Energy and nutrients pass from organism to organism when something is eaten. The chains are linked in a large web – pull one thread and it is felt in many places.'
  },
  art: 'skognett',
  practiceHref: '#okologi-ov-nett-skog',
  extraTabs: [{ href: '#okologi-naeringsnett', icon: 'compare', label: { nb: 'Interaktivt næringsnett', en: 'Interactive food web' } }],

  page: {
    goals: [
      { nb: 'lage næringskjeder og forklare hva pilene og de trofiske nivåene betyr', en: 'make food chains and explain what the arrows and the trophic levels mean' },
      { nb: 'bruke et næringsnett til å forklare samspill i naturen', en: 'use a food web to explain interactions in nature' },
      { nb: 'forutsi hva som kan skje i et økosystem når en art forsvinner, og forklare hva modellen ikke viser', en: 'predict what might happen in an ecosystem when a species disappears, and explain what the model does not show' }
    ],
    keypoints: [
      { nb: 'En **næringskjede** viser hvem som spiser hvem. Den starter alltid med en **produsent**.', en: 'A **food chain** shows who eats whom. It always starts with a **producer**.' },
      { nb: 'Pilene viser hvilken vei **energien** går: fra den som blir spist, til den som spiser.', en: 'The arrows show which way **energy** flows: from the one that is eaten to the one that eats.' },
      { nb: 'Hvert trinn i kjeden er et **trofisk nivå** (næringsnivå).', en: 'Each step in the chain is a **trophic level**.' },
      { nb: 'Mange næringskjeder som henger sammen, blir et **næringsnett**.', en: 'Many linked food chains make a **food web**.' },
      { nb: 'Når én art endrer seg, kan det påvirke mange andre arter i nettet.', en: 'When one species changes, it can affect many other species in the web.' }
    ],
    sections: [
      {
        id: 'kjede', title: { nb: 'Næringskjeder', en: 'Food chains' },
        blocks: [
          { p: { nb: 'En **[[naeringskjede|næringskjede]]** viser hvordan energi og næring går fra én organisme til en annen. Nederst finner vi alltid en **produsent** – en plante eller alge som utnytter solenergien. Den blir spist av en planteeter (primærkonsument), som igjen blir spist av et rovdyr (sekundærkonsument), og så videre.', en: 'A **[[naeringskjede|food chain]]** shows how energy and nutrients pass from one organism to another. At the bottom there is always a **producer** – a plant or alga using solar energy. It is eaten by a herbivore (primary consumer), which is in turn eaten by a predator (secondary consumer), and so on.' }, src: ['snl-naeringskjede'] },
          { p: { nb: 'Hvert trinn kalles et **[[trofisk_niva|trofisk nivå]]** eller **næringsnivå**. Det øverste leddet kalles gjerne en **toppredator**.', en: 'Each step is called a **[[trofisk_niva|trophic level]]**. The top link is often called a **top predator**.' }, src: ['snl-naeringskjede'] },
          { table: {
            head: [{ nb: 'Trofisk nivå', en: 'Trophic level' }, { nb: 'Rolle', en: 'Role' }, { nb: 'Skogen', en: 'The forest' }, { nb: 'Norskehavet', en: 'The Norwegian Sea' }],
            rows: [
              [{ nb: '4', en: '4' }, { nb: 'Toppredator', en: 'Top predator' }, { nb: 'Hønsehauk', en: 'Goshawk' }, { nb: 'Spekkhogger', en: 'Orca' }],
              [{ nb: '3', en: '3' }, { nb: 'Sekundærkonsument', en: 'Secondary consumer' }, { nb: 'Kjøttmeis', en: 'Great tit' }, { nb: 'Sild', en: 'Herring' }],
              [{ nb: '2', en: '2' }, { nb: 'Primærkonsument', en: 'Primary consumer' }, { nb: 'Sommerfugllarve', en: 'Caterpillar' }, { nb: 'Raudåte', en: 'Calanus' }],
              [{ nb: '1', en: '1' }, { nb: 'Produsent', en: 'Producer' }, { nb: 'Blåbærlyng', en: 'Bilberry' }, { nb: 'Planteplankton', en: 'Phytoplankton' }]
            ],
            src: ['snl-kjottmeis', 'snl-honsehauk', 'snl-raudate', 'snl-sild', 'snl-spekkhogger']
          } },
          { p: { nb: 'Skrevet med piler blir kjeden i havet: **planteplankton → raudåte → sild → spekkhogger**. Pila betyr «blir spist av» – og viser at energien går oppover.', en: 'Written with arrows, the chain in the sea becomes: **phytoplankton → calanus → herring → orca**. The arrow means “is eaten by” – and shows that the energy flows upwards.' } },
          { photo: 'raudate', caption: { nb: 'Raudåta er et lite krepsdyr – bare omtrent 3 mm lang. Den beiter på planteplankton og er mat for sild og mange andre fisk. Bildet er forstørret.', en: 'The calanus is a small crustacean – only about 3 mm long. It grazes on phytoplankton and is food for herring and many other fish. The image is magnified.' } },
          { myth: { nb: '«Pila i en næringskjede peker mot den som blir spist.»', en: '“The arrow in a food chain points to the one that is eaten.”' }, truth: { nb: 'Pila peker fra maten til den som spiser – samme vei som energien går. Gress → hare betyr at haren spiser gresset.', en: 'The arrow points from the food to the one that eats it – the same way the energy flows. Grass → hare means the hare eats the grass.' }, src: ['snl-naeringskjede'] },
          { photo: 'gaupe', caption: { nb: 'Gaupa er en toppredator i skogen. I Norge er rådyr det vanligste byttet. (Bildet er tatt i en dyrepark.)', en: 'The lynx is a top predator in the forest. In Norway, roe deer are its most common prey. (The photo was taken in a wildlife park.)' } },
          { deeper: {
            title: { nb: 'To typer næringskjeder', en: 'Two types of food chains' },
            blocks: [
              { p: { nb: 'Kjedene over er **beitekjeder**: De starter med levende planter. Men mye av energien går i en annen type kjede – **nedbryterkjeden**. Den starter med døde planter, døde dyr og avføring, som spises av meitemark, sopp og bakterier. Nedbryterne kan igjen bli spist av andre dyr – rødreven spiser for eksempel meitemark.', en: 'The chains above are **grazing chains**: they start with living plants. But much of the energy goes into another type of chain – the **detritus chain**. It starts with dead plants, dead animals and droppings, which are eaten by earthworms, fungi and bacteria. The decomposers can in turn be eaten by other animals – the red fox, for example, eats earthworms.' }, src: ['snl-naeringskjede', 'snl-rodrev'] }
            ]
          } }
        ]
      },
      {
        id: 'nett', title: { nb: 'Næringsnett', en: 'Food webs' },
        blocks: [
          { p: { nb: 'I naturen spiser de fleste dyr flere slags mat, og de blir spist av flere rovdyr. Næringskjedene henger derfor sammen i et **[[naeringsnett|næringsnett]]**. Hønsehauken spiser både ekorn, hare og småfugler. Haren blir spist av både rev, gaupe, ulv og hønsehauk.', en: 'In nature most animals eat several kinds of food, and they are eaten by several predators. Food chains are therefore linked in a **[[naeringsnett|food web]]**. The goshawk eats squirrels, hares and small birds. The hare is eaten by foxes, lynx, wolves and goshawks.' }, src: ['snl-naeringsnett', 'snl-honsehauk', 'snl-hare'] },
          { photo: 'lunde', caption: { nb: 'Lunden har småfisk i nebbet. Om sommeren spiser lunden mye ung sild (sildeyngel), og den kan selv bli tatt av havørn. Bildet er fra Hornøya ved Vardø.', en: 'The puffin has small fish in its beak. In summer puffins eat a lot of young herring, and they can themselves be caught by white-tailed eagles. The photo is from Hornøya near Vardø.' } },
          { link: { href: '#okologi-naeringsnett', icon: 'compare', title: { nb: 'Åpne det interaktive næringsnettet', en: 'Open the interactive food web' }, text: { nb: 'Trykk på artene i skogen og Norskehavet, og se hva de spiser og hvem som spiser dem.', en: 'Tap the species in the forest and the Norwegian Sea, and see what they eat and who eats them.' } } },
          { check: {
            q: { nb: 'Hvorfor er et næringsnett en bedre modell av naturen enn én næringskjede?', en: 'Why is a food web a better model of nature than a single food chain?' },
            options: [{ nb: 'Fordi det har flere toppredatorer', en: 'Because it has more top predators' }, { nb: 'Fordi de fleste dyr spiser flere ting og blir spist av flere', en: 'Because most animals eat several things and are eaten by several others' }, { nb: 'Fordi det ikke har produsenter', en: 'Because it has no producers' }],
            answer: 1,
            explain: { nb: 'Ekte dyr spiser sjelden bare én ting. Nettet viser alle forbindelsene, mens en kjede bare viser én vei gjennom nettet.', en: 'Real animals rarely eat just one thing. The web shows all the connections, while a chain only shows one path through the web.' }
          } }
        ]
      },
      {
        id: 'forsvinner', title: { nb: 'Når en art forsvinner', en: 'When a species disappears' },
        blocks: [
          { p: { nb: 'Fordi alt henger sammen, kan en endring hos én art spre seg gjennom hele nettet. Et kjent eksempel fra norskekysten er **kråkeboller og tareskog**:', en: 'Because everything is connected, a change in one species can spread through the whole web. A well-known example from the Norwegian coast is **sea urchins and kelp forests**:' } },
          { list: [
            { nb: 'Kråkeboller beiter på tare.', en: 'Sea urchins graze on kelp.' },
            { nb: 'Krabber og andre fiender holder antallet kråkeboller nede.', en: 'Crabs and other enemies keep the number of sea urchins down.' },
            { nb: 'Der fiendene har forsvunnet, har kråkebollene blitt så mange at de har beitet ned hele tareskoger.', en: 'Where the enemies have disappeared, sea urchins have become so many that they have grazed down entire kelp forests.' },
            { nb: 'Uten tareskog mister mange fisk og smådyr leveområdet og oppvekstområdet sitt.', en: 'Without kelp forest, many fish and small animals lose their habitat and nursery.' }
          ], src: ['snl-krakeboller', 'snl-tareskog', 'snl-taskekrabbe'] },
          { p: { nb: 'Slike kjedereaksjoner viser at **toppredatorer og rovdyr** er viktige: De holder bestandene av byttedyr nede, og det beskytter plantene lenger ned i nettet.', en: 'Chain reactions like this show that **top predators and other predators** are important: they keep the prey populations down, which protects the plants further down the web.' }, src: ['snl-predator', 'snl-krakeboller'] },
          { link: { href: '#okologi-naeringsnett-hvis', icon: 'compare', title: { nb: 'Prøv selv: Hva skjer hvis …?', en: 'Try it yourself: What happens if …?' }, text: { nb: 'Fjern ulven, silda eller krabbene og se hva som kan skje.', en: 'Remove the wolf, the herring or the crabs and see what might happen.' } } },
          { discuss: { nb: 'Raudåta er et viktig ledd i Norskehavet. Bruk næringsnettet og forklar hvorfor endringer i havtemperaturen kan få betydning for både fisk, sjøfugl og hval.', en: 'Calanus is an important link in the Norwegian Sea. Use the food web to explain why changes in sea temperature can matter for fish, seabirds and whales.' } },
          { model: { nb: 'Næringsnettene i NatLab er forenklet. De viser bare noen få arter, og pilene sier ikke noe om **hvor mye** hver art spiser. Ekte økosystemer har tusenvis av arter og forbindelser.', en: 'The food webs in NatLab are simplified. They show only a few species, and the arrows say nothing about **how much** each species eats. Real ecosystems have thousands of species and connections.' } }
        ]
      }
    ],
    resources: ['ndla-naeringskjeder', 'yt-naeringsnett', 'yt-spekkhogger-sild', 'snl-naeringskjede', 'snl-naeringsnett', 'ndla-oppgaver']
  }
};
