/* =====================================================================
   Økologi – NÆRINGSNETTENE og siden «Interaktivt næringsnett»
   ---------------------------------------------------------------------
   nodes: [id, x, y]   – plassering i tegningen (1000 × 700)
   links: [byttedyr, den som spiser] – pila går fra byttedyret til den
          som spiser (energien går den veien)
   chain: næringskjeden som brukes i energipyramiden (nederst først)
   ===================================================================== */
(function () {
  const T = NatLab.topic('okologi');
  const nodes = function (list) { return list.map(function (n) { return { id: n[0], x: n[1], y: n[2] }; }); };

  T.webs = {
    skog: {
      title: { nb: 'Skogen', en: 'The forest' },
      caption: { nb: 'Næringsnett i barskogen på Østlandet (forenklet)', en: 'Food web in the coniferous forest of south-eastern Norway (simplified)' },
      nodes: nodes([
        ['gran', 120, 610], ['bjork', 300, 610], ['blaabaer', 480, 610], ['gress', 660, 610],
        ['larve', 80, 440], ['elg', 220, 440], ['raadyr', 370, 440], ['hare', 520, 440], ['skogmus', 660, 440], ['ekorn', 790, 440],
        ['kjottmeis', 130, 270], ['kattugle', 360, 270], ['rodrev', 590, 270],
        ['ulv', 240, 95], ['gaupe', 480, 95], ['honsehauk', 720, 95],
        ['sopp', 920, 300], ['meitemark', 920, 470]
      ]),
      decomposerBox: [855, 225, 135, 345],
      links: [
        ['gran', 'ekorn'], ['gran', 'skogmus'],
        ['bjork', 'elg'], ['bjork', 'larve'], ['bjork', 'hare'],
        ['blaabaer', 'larve'], ['blaabaer', 'elg'], ['blaabaer', 'raadyr'], ['blaabaer', 'skogmus'], ['blaabaer', 'rodrev'],
        ['gress', 'raadyr'], ['gress', 'hare'],
        ['larve', 'kjottmeis'], ['larve', 'skogmus'], ['larve', 'kattugle'],
        ['skogmus', 'rodrev'], ['skogmus', 'kattugle'],
        ['hare', 'rodrev'], ['hare', 'gaupe'], ['hare', 'honsehauk'], ['hare', 'ulv'],
        ['raadyr', 'gaupe'], ['raadyr', 'ulv'], ['elg', 'ulv'],
        ['ekorn', 'honsehauk'], ['kjottmeis', 'honsehauk'], ['kjottmeis', 'kattugle'],
        ['sopp', 'ekorn'], ['meitemark', 'rodrev'], ['meitemark', 'kattugle']
      ],
      chain: ['blaabaer', 'larve', 'kjottmeis', 'honsehauk']
    },
    hav: {
      title: { nb: 'Norskehavet', en: 'The Norwegian Sea' },
      caption: { nb: 'Næringsnett i Norskehavet og langs kysten (forenklet)', en: 'Food web in the Norwegian Sea and along the coast (simplified)' },
      nodes: nodes([
        ['planteplankton', 200, 615], ['tare', 640, 615],
        ['raudate', 110, 470], ['krill', 310, 470], ['krakebolle', 640, 470],
        ['sild', 210, 330], ['taskekrabbe', 640, 330],
        ['lunde', 110, 195], ['torsk', 370, 195],
        ['havorn', 200, 65], ['steinkobbe', 480, 65], ['spekkhogger', 740, 65],
        ['bakterier', 920, 470]
      ]),
      decomposerBox: [855, 380, 135, 230],
      links: [
        ['planteplankton', 'raudate'], ['planteplankton', 'krill'], ['raudate', 'krill'], ['raudate', 'sild'], ['krill', 'sild'],
        ['tare', 'krakebolle'], ['krakebolle', 'taskekrabbe'],
        ['sild', 'torsk'], ['sild', 'lunde'], ['sild', 'steinkobbe'], ['sild', 'spekkhogger'],
        ['torsk', 'steinkobbe'], ['torsk', 'havorn'], ['lunde', 'havorn'], ['steinkobbe', 'spekkhogger']
      ],
      chain: ['planteplankton', 'raudate', 'sild', 'spekkhogger']
    }
  };

  T.pages.naeringsnett = {
    type: 'foodweb',
    defaultWeb: 'skog',
    title: { nb: 'Interaktivt næringsnett', en: 'Interactive food web' },
    lead: {
      nb: 'Utforsk hvem som spiser hvem i skogen og i Norskehavet. Fjern en art og se hva som kan skje – eller regn ut hvor mye energi som når toppen av næringskjeden.',
      en: 'Explore who eats whom in the forest and the Norwegian Sea. Remove a species and see what might happen – or calculate how much energy reaches the top of the food chain.'
    },
    tabs: {
      utforsk: { nb: 'Utforsk', en: 'Explore' },
      hvis: { nb: 'Hva skjer hvis …?', en: 'What happens if …?' },
      pyramide: { nb: 'Energipyramiden', en: 'Energy pyramid' }
    },
    intro: { nb: 'Fargen rundt hver art viser rollen i økosystemet. Pilene viser hvilken vei **energien** går – fra den som blir spist, til den som spiser.', en: 'The colour around each species shows its role in the ecosystem. The arrows show which way **energy** flows – from the one that gets eaten to the one that eats it.' },
    help: {
      utforsk: { nb: 'Trykk på en art. **Grønne** piler viser hva den spiser, **røde** piler viser hvem som spiser den.', en: 'Tap a species. **Green** arrows show what it eats, **red** arrows show who eats it.' },
      hvis: { nb: 'Velg et scenario, eller trykk på arter for å fjerne dem fra økosystemet. Trykk igjen for å sette dem tilbake.', en: 'Choose a scenario, or tap species to remove them from the ecosystem. Tap again to put them back.' },
      hvisPanel: { nb: 'Når én art forsvinner, påvirkes også artene som spiser den, og artene den spiser. Velg et scenario over tegningen, eller trykk på en art for å fjerne den.', en: 'When one species disappears, the species that eat it and the species it eats are affected too. Choose a scenario above the drawing, or tap a species to remove it.' },
      modelLimit: { nb: 'Dette er en forenklet modell. I virkeligheten påvirker også vær, sykdom, jakt, fiske og mange arter som ikke er med her. Pilene viser **mulige** følger – ikke sikre svar.', en: 'This is a simplified model. In reality, weather, disease, hunting, fishing and many species not shown here also play a part. The arrows show **possible** effects – not certain answers.' },
      pyramide: { nb: 'Bare en liten del av energien går videre fra ett trofisk nivå til det neste. Endre tallene og se hvordan pyramiden endrer seg.', en: 'Only a small part of the energy passes on from one trophic level to the next. Change the numbers and see how the pyramid changes.' },
      pyramidePanel: { nb: 'På hvert trinn går omtrent **{pct} %** av energien «tapt» for næringskjeden. Den forsvinner ikke – den blir til **varme** fra celleåndingen, brukes til bevegelse, eller havner hos nedbryterne i avføring og døde rester.', en: 'At each step about **{pct} %** of the energy is “lost” to the food chain. It does not disappear – it becomes **heat** from cellular respiration, is used for movement, or ends up with the decomposers in droppings and dead remains.' },
      pyramideFact: { nb: 'Et eksempel fra Store norske leksikon: 1000 kg planteplankton kan gi omtrent 100 kg raudåte, som kan gi 10 kg krill, som kan gi 1 kg lodde, som kan gi 0,1 kg torsk.', en: 'An example from the Norwegian encyclopedia: 1,000 kg of phytoplankton can give about 100 kg of calanus, which can give 10 kg of krill, which can give 1 kg of capelin, which can give 0.1 kg of cod.' }
    },
    scenarios: [
      { id: 'ulv', web: 'skog', remove: ['ulv'], title: { nb: 'Ulven forsvinner', en: 'The wolf disappears' },
        text: { nb: 'Ulven er en toppredator som tar mest elg. Uten ulv kan det bli flere elger og rådyr – og de beiter mer på unge trær og blåbærlyng. I virkeligheten styres elgbestanden også av jakt og av hvor mye mat det finnes om vinteren.', en: 'The wolf is a top predator that takes mostly moose. Without wolves there may be more moose and roe deer – and they browse more on young trees and bilberry. In reality the moose population is also controlled by hunting and by how much food there is in winter.' },
        discuss: { nb: 'Ulven lever i ulvesonen sørøst i Norge. Noen vil ha flere ulver for naturmangfoldets skyld, andre er bekymret for sau, hunder og jakt. Hvilke argumenter mener du er viktigst – og hvorfor?', en: 'The wolf lives in the wolf zone in south-eastern Norway. Some want more wolves for the sake of biodiversity, others worry about sheep, dogs and hunting. Which arguments do you think matter most – and why?' } },
      { id: 'larver', web: 'skog', remove: ['larve'], title: { nb: 'Insektene blir borte', en: 'The insects disappear' },
        text: { nb: 'Insektlarver er hovedmaten til mange fugleunger. Blir det færre insekter, får fuglene mindre mat – og det kan merkes helt opp til rovfuglene.', en: 'Insect larvae are the main food for many bird chicks. If there are fewer insects, the birds get less food – and this can be felt all the way up to the birds of prey.' },
        discuss: { nb: 'Hvorfor tror du det kan bli færre insekter i naturen? Hva kan vi gjøre for å hjelpe dem?', en: 'Why do you think there might be fewer insects in nature? What could we do to help them?' } },
      { id: 'blaabaer', web: 'skog', remove: ['blaabaer'], title: { nb: 'Blåbærlyngen forsvinner', en: 'The bilberry disappears' },
        text: { nb: 'Blåbærlyngen er mat for mange arter. Hvis skogen blir hogd og bakken blir åpen og tørr, kan blåbærlyngen forsvinne fra området i mange år.', en: 'Bilberry is food for many species. If the forest is felled and the ground becomes open and dry, the bilberry can disappear from the area for many years.' } },
      { id: 'raudate', web: 'hav', remove: ['raudate'], title: { nb: 'Raudåta forsvinner', en: 'The calanus disappears' },
        text: { nb: 'Raudåta er et nøkkelledd i Norskehavet. Hvis det blir mye mindre raudåte – for eksempel fordi havet blir varmere og forholdene endrer seg – får silda og mange andre arter mindre mat.', en: 'Calanus is a key link in the Norwegian Sea. If there is much less calanus – for example because the sea gets warmer and conditions change – herring and many other species get less food.' } },
      { id: 'sild', web: 'hav', remove: ['sild'], title: { nb: 'Overfiske av sild', en: 'Overfishing of herring' },
        text: { nb: 'Dette har skjedd: I 1950- og 1960-årene ble den norske vårgytende silda så hardt fisket at bestanden ble svært liten. Først i 1990-årene økte den igjen. Mange arter er avhengige av silda.', en: 'This has happened: in the 1950s and 1960s the Norwegian spring-spawning herring was fished so hard that the stock became very small. Only in the 1990s did it grow again. Many species depend on herring.' },
        discuss: { nb: 'Hvordan kan vi fiske uten å ødelegge fiskebestandene? Hvem bør bestemme hvor mye som kan fiskes?', en: 'How can we fish without destroying fish stocks? Who should decide how much can be caught?' } },
      { id: 'krabbe', web: 'hav', remove: ['taskekrabbe'], title: { nb: 'Krabbene forsvinner', en: 'The crabs disappear' },
        text: { nb: 'Krabber spiser kråkeboller. Uten fiender kan det bli så mange kråkeboller at de beiter ned hele tareskogen – og da forsvinner leveområdet til mange fisk og smådyr.', en: 'Crabs eat sea urchins. Without enemies there can be so many sea urchins that they graze down the whole kelp forest – and then the habitat of many fish and small animals disappears.' } }
    ]
  };
})();
