/* =====================================================================
   Celler og virus – PRØVE 03: BAKTERIEN
   ===================================================================== */
NatLab.topic('celler').organisms.bakterie = {
  code: '03',
  title: { nb: 'Bakterien', en: 'The bacterium' },
  sub: { nb: 'En hel organisme i én liten celle – uten cellekjerne.', en: 'A whole organism in one tiny cell – without a nucleus.' },
  size: { nb: 'ca. 1–5 µm', en: 'about 1–5 µm' },
  lead: {
    nb: 'Bakterier finnes overalt: i jorda, i havet, på huden din og i tarmen. De fleste er nyttige, noen få kan gjøre oss syke.',
    en: 'Bacteria are everywhere: in soil, in the sea, on your skin and in your gut. Most are useful, a few can make us ill.'
  },
  diagrams: ['bakterie'],
  intro: { nb: 'Modellen viser en stavformet bakterie, omtrent som tarmbakterien E. coli. Se etter det som mangler: Finner du en cellekjerne?', en: 'The model shows a rod-shaped bacterium, a bit like the gut bacterium E. coli. Look for what is missing: can you find a nucleus?' },

  page: {
    goals: [
      { nb: 'forklare hva som skiller en bakteriecelle (prokaryot) fra dyre- og planteceller (eukaryote)', en: 'explain what makes a bacterial cell (prokaryotic) different from animal and plant cells (eukaryotic)' },
      { nb: 'gi eksempler på nyttige og skadelige bakterier', en: 'give examples of useful and harmful bacteria' },
      { nb: 'forklare hva antibiotika er, og hvorfor antibiotikaresistens er et problem', en: 'explain what antibiotics are and why antibiotic resistance is a problem' }
    ],
    keypoints: [
      { nb: 'En bakterie er en **encellet organisme**. Hele organismen er én celle.', en: 'A bacterium is a **single-celled organism**. The whole organism is one cell.' },
      { nb: 'Bakterier er **prokaryote**: de har **ingen cellekjerne**. Arvestoffet ligger fritt i cytoplasmaet.', en: 'Bacteria are **prokaryotic**: they have **no nucleus**. The genetic material lies free in the cytoplasm.' },
      { nb: 'Bakterier har cellevegg, cellemembran, cytoplasma, arvestoff og ribosomer – men **ingen mitokondrier eller kloroplaster**.', en: 'Bacteria have a cell wall, cell membrane, cytoplasm, genetic material and ribosomes – but **no mitochondria or chloroplasts**.' },
      { nb: 'Bakterier formerer seg ved **deling** og kan bli mange på kort tid.', en: 'Bacteria reproduce by **dividing** and can become very many in a short time.' },
      { nb: '**Antibiotika** virker mot bakterier – ikke mot virus.', en: '**Antibiotics** work against bacteria – not against viruses.' }
    ],
    sections: [
      {
        id: 'hva', title: { nb: 'Hva er en bakterie?', en: 'What is a bacterium?' },
        blocks: [
          { p: { nb: 'Bakterier er bittesmå, **encellede** organismer. De er blant de eldste livsformene på jorda og finnes nesten overalt – fra varme kilder til isbreer.', en: 'Bacteria are tiny, **single-celled** organisms. They are among the oldest forms of life on Earth and are found almost everywhere – from hot springs to glaciers.' }, src: ['sml-bakterier'] },
          { p: { nb: 'Bakterieceller er **[[prokaryot|prokaryote]]**. Det betyr at de **ikke har cellekjerne**. Arvestoffet er én stor ring av DNA som ligger sammenfiltret i cytoplasmaet. Bakterier mangler også mitokondrier, kloroplaster og de andre organellene med hinne rundt.', en: 'Bacterial cells are **[[prokaryot|prokaryotic]]**. This means they **have no nucleus**. The genetic material is one large ring of DNA lying tangled in the cytoplasm. Bacteria also lack mitochondria, chloroplasts and the other membrane-bound organelles.' }, src: ['sml-prokaryot'] },
          { photo: 'ecoli', caption: { nb: 'Tarmbakterien E. coli sett i elektronmikroskop. Bildet er tatt med svært stor forstørrelse – målestokken nederst viser 2 mikrometer.', en: 'The gut bacterium E. coli seen in an electron microscope. The picture is taken at very high magnification – the scale bar at the bottom shows 2 micrometres.' } },
          { p: { nb: 'Bakterier har likevel det som trengs for å leve: en **cellemembran** som styrer hva som kommer inn og ut, **cytoplasma**, **ribosomer** som lager proteiner, og en stiv **cellevegg** som gir form. Celleveggen er laget av et annet stoff enn hos planter.', en: 'Bacteria still have what they need to live: a **cell membrane** that controls what goes in and out, **cytoplasm**, **ribosomes** that make proteins, and a stiff **cell wall** that gives shape. The cell wall is made of a different substance than in plants.' }, src: ['sml-bakterier', 'sml-ribosom'] },
          { check: {
            q: { nb: 'Hvor ligger arvestoffet i en bakterie?', en: 'Where is the genetic material in a bacterium?' },
            options: [{ nb: 'I cellekjernen', en: 'In the nucleus' }, { nb: 'Fritt i cytoplasmaet', en: 'Free in the cytoplasm' }, { nb: 'I mitokondriene', en: 'In the mitochondria' }],
            answer: 1,
            explain: { nb: 'Bakterier har ingen cellekjerne. Arvestoffet – en stor DNA-ring – ligger fritt i cytoplasmaet.', en: 'Bacteria have no nucleus. The genetic material – a large DNA ring – lies free in the cytoplasm.' }
          } }
        ]
      },
      {
        id: 'spesiell', title: { nb: 'Hva gjør bakterien spesiell?', en: 'What makes the bacterium special?' },
        blocks: [
          { p: { nb: 'Bakterier formerer seg ved at én celle **deler seg i to**. Først kopieres arvestoffet, så snører cellen seg av på midten. Under gode forhold kan noen bakterier dele seg omtrent hvert 20. minutt.', en: 'Bacteria reproduce by one cell **dividing in two**. First the genetic material is copied, then the cell pinches off in the middle. Under good conditions some bacteria can divide about every 20 minutes.' }, src: ['sml-bakterier', 'sml-prokaryot'] },
          { fact: { nb: 'Hvis en bakterie deler seg hvert 20. minutt, blir den til over 2 millioner bakterier på 7 timer – hvis det er nok næring!', en: 'If a bacterium divides every 20 minutes, it becomes more than 2 million bacteria in 7 hours – if there is enough food!' } },
          { deeper: {
            title: { nb: 'Flagell, pili, kapsel og plasmider', en: 'Flagellum, pili, capsule and plasmids' },
            blocks: [
              { p: { nb: 'Mange bakterier har ekstra utstyr. En **flagell** roterer som en propell og lar bakterien svømme. **Pili** er korte hår som hjelper bakterien å feste seg. En slimete **kapsel** kan beskytte mot uttørking og immunforsvaret.', en: 'Many bacteria have extra equipment. A **flagellum** spins like a propeller and lets the bacterium swim. **Pili** are short hairs that help the bacterium attach. A slimy **capsule** can protect against drying out and the immune system.' }, src: ['snl-flagell', 'sml-bakterier'] },
              { p: { nb: '**Plasmider** er små, ekstra ringer av DNA. De kan inneholde gener som gjør bakterien motstandsdyktig mot antibiotika – og de kan overføres fra én bakterie til en annen.', en: '**Plasmids** are small, extra rings of DNA. They can contain genes that make the bacterium resistant to antibiotics – and they can be passed from one bacterium to another.' }, src: ['snl-plasmid'] }
            ]
          } },
          { model: { nb: 'Bakterier har mange former: kuler (kokker), staver og spiraler. Modellen viser en stav. Ekte bakterier har tusenvis av ribosomer, og ikke alle har flagell, pili eller kapsel.', en: 'Bacteria come in many shapes: spheres (cocci), rods and spirals. The model shows a rod. Real bacteria have thousands of ribosomes, and not all have a flagellum, pili or a capsule.' } }
        ]
      },
      {
        id: 'nytte', title: { nb: 'Nyttige og skadelige bakterier', en: 'Useful and harmful bacteria' },
        blocks: [
          { p: { nb: 'De aller fleste bakterier er ufarlige eller nyttige. I tarmen din lever det enormt mange bakterier som hjelper deg å bryte ned maten. Bakterier i jorda bryter ned døde planter og dyr, slik at næringsstoffene kan brukes på nytt. Vi bruker også bakterier til å lage yoghurt og ost.', en: 'The vast majority of bacteria are harmless or useful. Enormous numbers of bacteria live in your gut and help you break down food. Bacteria in the soil break down dead plants and animals so the nutrients can be reused. We also use bacteria to make yoghurt and cheese.' }, src: ['sml-bakterier'] },
          { p: { nb: 'Noen få bakterier kan gi sykdom, for eksempel halsbetennelse, lungebetennelse eller matforgiftning. Slike bakterier kalles **sykdomsfremkallende**.', en: 'A few bacteria can cause disease, for example strep throat, pneumonia or food poisoning. Such bacteria are called **pathogenic** (disease-causing).' }, src: ['sml-antibiotika'] },
          { myth: { nb: '«Alle bakterier er farlige, og vi bør drepe så mange som mulig.»', en: '“All bacteria are dangerous, and we should kill as many as possible.”' }, truth: { nb: 'Vi er helt avhengige av bakterier. Uten nedbrytere i jorda ville naturen stoppe opp, og tarmbakteriene hjelper oss med fordøyelsen.', en: 'We depend completely on bacteria. Without decomposers in the soil, nature would grind to a halt, and our gut bacteria help us digest food.' }, src: ['sml-bakterier'] }
        ]
      },
      {
        id: 'antibiotika', title: { nb: 'Antibiotika og resistens', en: 'Antibiotics and resistance' },
        blocks: [
          { p: { nb: '**[[antibiotika|Antibiotika]]** er medisiner som dreper bakterier eller hindrer dem i å vokse. Mange antibiotika angriper ting som bare bakterier har, for eksempel celleveggen eller bakterienes ribosomer. Derfor skader de ikke cellene våre. Penicillin er et kjent eksempel.', en: '**[[antibiotika|Antibiotics]]** are medicines that kill bacteria or stop them from growing. Many antibiotics attack things that only bacteria have, such as the cell wall or the bacterial ribosomes. That is why they do not harm our own cells. Penicillin is a well-known example.' }, src: ['sml-antibiotika', 'sml-ribosom'] },
          { myth: { nb: '«Antibiotika hjelper mot forkjølelse og influensa.»', en: '“Antibiotics help against colds and flu.”' }, truth: { nb: 'Forkjølelse og influensa skyldes **virus**. Antibiotika virker **bare mot bakterier**. Unødvendig bruk av antibiotika øker faren for resistens.', en: 'Colds and flu are caused by **viruses**. Antibiotics work **only against bacteria**. Unnecessary use of antibiotics increases the risk of resistance.' }, src: ['sml-antibiotika', 'sml-antibiotikaresistens'] },
          { p: { nb: 'Når bakterier utsettes for antibiotika, kan noen få overleve fordi de tilfeldigvis har gener som beskytter dem. Disse formerer seg videre, og etter hvert kan hele bakteriebestanden bli **resistent** – antibiotikaen virker ikke lenger. Dette er [[evolusjon]] som skjer foran øynene våre.', en: 'When bacteria are exposed to antibiotics, a few may survive because they happen to have genes that protect them. These go on to multiply, and eventually the whole bacterial population can become **resistant** – the antibiotic no longer works. This is [[evolusjon|evolution]] happening before our eyes.' }, src: ['sml-antibiotikaresistens'] },
          { fact: { nb: 'Antibiotikaresistens er en global utfordring. Bare i Europa dør anslagsvis 33 000 mennesker hvert år av infeksjoner med resistente bakterier.', en: 'Antibiotic resistance is a global challenge. In Europe alone, an estimated 33,000 people die every year from infections with resistant bacteria.' }, src: ['sml-antibiotikaresistens'] },
          { discuss: { nb: 'Hva kan du og familien din gjøre for at antibiotika skal fortsette å virke i framtida? (Tips: tenk på når man bør bruke antibiotika, og hvordan man tar kuren.)', en: 'What can you and your family do so that antibiotics keep working in the future? (Hint: think about when antibiotics should be used, and how to take the course.)' } }
        ]
      },
      {
        id: 'historie', title: { nb: 'Hvordan fant vi ut av det?', en: 'How did we find out?' },
        blocks: [
          { history: { nb: 'Nederlenderen **Antoni van Leeuwenhoek** slipte sine egne linser og var den første som så bakterier, på 1670-tallet. Han kalte dem «små dyr». Men det tok nesten 200 år før forskere som Louis Pasteur og Robert Koch viste at bakterier kan gi sykdom.', en: 'The Dutchman **Antoni van Leeuwenhoek** ground his own lenses and was the first to see bacteria, in the 1670s. He called them “little animals”. But it took almost 200 years before scientists such as Louis Pasteur and Robert Koch showed that bacteria can cause disease.' }, src: ['snl-mikroskop'] }
        ]
      }
    ],
    resources: ['ndla-bakterier', 'yt-bakterier', 'yt-pro-eu', 'ndla-pro-eu', 'yt-antibiotika', 'yt-kapsel-kapsid']
  }
};
