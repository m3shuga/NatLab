/* =====================================================================
   Celler og virus – PRØVE 04: VIRUS
   Tre modeller: influensavirus, bakteriofag og meslingvirus.
   ===================================================================== */
NatLab.topic('celler').organisms.virus = {
  code: '04',
  title: { nb: 'Virus', en: 'Viruses' },
  sub: { nb: 'Ikke en celle – bare arvestoff i en proteinkappe.', en: 'Not a cell – just genetic material in a protein coat.' },
  size: { nb: 'ca. 20–300 nm', en: 'about 20–300 nm' },
  lead: {
    nb: 'Virus er mye mindre enn bakterier og er ikke celler. De kan bare formere seg inne i levende celler – og det er da de kan gjøre oss syke.',
    en: 'Viruses are much smaller than bacteria and are not cells. They can only multiply inside living cells – and that is when they can make us ill.'
  },
  diagrams: ['influensa', 'bakteriofag', 'meslinger'],
  art: 'influensa',
  modelNames: {
    influensa: { nb: 'Influensavirus', en: 'Influenza virus' },
    bakteriofag: { nb: 'Bakteriofag', en: 'Bacteriophage' },
    meslinger: { nb: 'Meslingvirus', en: 'Measles virus' }
  },
  intro: { nb: 'Velg en av de tre virusmodellene øverst. Alle virus har **arvestoff** og en **proteinkappe**. Noen har i tillegg et fettholdig hylster.', en: 'Choose one of the three virus models at the top. All viruses have **genetic material** and a **protein coat**. Some also have a fatty envelope.' },

  page: {
    goals: [
      { nb: 'beskrive hvordan et virus er bygd opp, og forklare hvorfor virus ikke er celler', en: 'describe how a virus is built and explain why viruses are not cells' },
      { nb: 'forklare hvordan et virus formerer seg inne i en vertscelle', en: 'explain how a virus multiplies inside a host cell' },
      { nb: 'forklare hvordan vaksiner virker, og hvorfor de er viktige for folkehelsen', en: 'explain how vaccines work and why they matter for public health' }
    ],
    keypoints: [
      { nb: 'Et virus består av **arvestoff** (DNA eller RNA) inni en **proteinkappe**. Noen virus har også et **lipidhylster**.', en: 'A virus consists of **genetic material** (DNA or RNA) inside a **protein coat**. Some viruses also have a **lipid envelope**.' },
      { nb: 'Virus er **ikke celler**: de har ingen cellemembran, ingen cytoplasma og ingen ribosomer.', en: 'Viruses are **not cells**: they have no cell membrane, no cytoplasm and no ribosomes.' },
      { nb: 'Virus kan **bare formere seg inne i levende celler**. De bruker cellens «maskiner» til å lage nye virus.', en: 'Viruses can **only multiply inside living cells**. They use the cell’s “machinery” to make new viruses.' },
      { nb: '**Antibiotika virker ikke mot virus.** Vi beskytter oss med vaksiner, god hygiene og immunforsvaret.', en: '**Antibiotics do not work against viruses.** We protect ourselves with vaccines, good hygiene and the immune system.' }
    ],
    sections: [
      {
        id: 'hva', title: { nb: 'Hva er et virus?', en: 'What is a virus?' },
        blocks: [
          { p: { nb: 'Et [[virus]] er en bitteliten partikkel som består av **arvestoff pakket inn i protein**. Arvestoffet kan være DNA eller RNA. Proteinkappen kalles et **[[kapsid]]**. Noen virus, som influensa- og meslingvirus, har i tillegg et ytre **hylster** av fett som de har «lånt» fra cellen de ble laget i.', en: 'A [[virus]] is a tiny particle made of **genetic material wrapped in protein**. The genetic material can be DNA or RNA. The protein coat is called a **[[kapsid|capsid]]**. Some viruses, such as influenza and measles viruses, also have an outer **envelope** of fat that they have “borrowed” from the cell they were made in.' }, src: ['sml-virus'] },
          { p: { nb: 'Virus er **mye mindre enn bakterier**. Influensaviruset er for eksempel 80–120 nanometer – omtrent en tjuendedel av lengden til en E. coli-bakterie. For å se virus trenger vi et elektronmikroskop.', en: 'Viruses are **much smaller than bacteria**. The influenza virus, for example, is 80–120 nanometres – about one twentieth of the length of an E. coli bacterium. To see viruses we need an electron microscope.' }, src: ['sml-influensavirus', 'snl-mikroskop'] },
          { photos: [
            { photo: 'influenza', caption: { nb: 'Influensavirus i elektronmikroskop, farget i etterkant. Viruset er rundt 100 nanometer.', en: 'Influenza virus in an electron microscope, coloured afterwards. The virus is about 100 nanometres.' } },
            { photo: 'phage', caption: { nb: 'En bakteriofag. Målestokken viser 100 nanometer.', en: 'A bacteriophage. The scale bar shows 100 nanometres.' } }
          ] },
          { p: { nb: 'Piggene på overflaten – **overflateproteinene** – passer i bestemte mottakere ([[reseptor|reseptorer]]) på cellene, som en nøkkel i en lås. Derfor angriper et virus bare bestemte celler. Influensaviruset angriper celler i luftveiene, mens en bakteriofag bare angriper bestemte bakterier.', en: 'The spikes on the surface – the **surface proteins** – fit particular receivers ([[reseptor|receptors]]) on cells, like a key in a lock. That is why a virus only attacks certain cells. The influenza virus attacks cells in the airways, while a bacteriophage only attacks certain bacteria.' }, src: ['sml-influensavirus', 'sml-bakteriofag'] },
          { check: {
            q: { nb: 'Hva har ALLE virus?', en: 'What do ALL viruses have?' },
            options: [{ nb: 'Cellemembran og cytoplasma', en: 'A cell membrane and cytoplasm' }, { nb: 'Arvestoff og en proteinkappe', en: 'Genetic material and a protein coat' }, { nb: 'Ribosomer og mitokondrier', en: 'Ribosomes and mitochondria' }],
            answer: 1,
            explain: { nb: 'Alle virus har arvestoff (DNA eller RNA) og en proteinkappe. De har ikke cellemembran, cytoplasma, ribosomer eller mitokondrier – derfor er de ikke celler.', en: 'All viruses have genetic material (DNA or RNA) and a protein coat. They have no cell membrane, cytoplasm, ribosomes or mitochondria – that is why they are not cells.' }
          } }
        ]
      },
      {
        id: 'formering', title: { nb: 'Slik formerer et virus seg', en: 'How a virus multiplies' },
        blocks: [
          { p: { nb: 'Et virus kan ikke vokse, spise eller dele seg selv. Det må inn i en levende celle – en **[[vertscelle]]** – og få cellen til å lage nye virus. Bla gjennom trinnene:', en: 'A virus cannot grow, eat or divide by itself. It has to get into a living cell – a **[[vertscelle|host cell]]** – and make the cell produce new viruses. Step through the stages:' }, src: ['sml-virus'] },
          { steps: {
            figure: 'virussyklus',
            title: { nb: 'Virusets livssyklus i fem trinn', en: 'The virus life cycle in five steps' },
            src: ['sml-virus', 'sml-influensavirus'],
            steps: [
              { title: { nb: 'Feste seg', en: 'Attach' }, text: { nb: 'Piggene på viruset passer i reseptorer på cellemembranen, og viruset fester seg.', en: 'The spikes on the virus fit receptors on the cell membrane, and the virus attaches.' } },
              { title: { nb: 'Komme inn', en: 'Get in' }, text: { nb: 'Viruset tas inn i cellen. Inne i cellen slippes arvestoffet fri fra proteinkappen.', en: 'The virus is taken into the cell. Inside the cell the genetic material is released from the protein coat.' } },
              { title: { nb: 'Kopiere', en: 'Copy' }, text: { nb: 'Cellen «lures» til å kopiere virusets arvestoff. Ribosomene i cellen lager virusproteiner i stedet for cellens egne proteiner.', en: 'The cell is “tricked” into copying the virus’s genetic material. The cell’s ribosomes make virus proteins instead of the cell’s own proteins.' } },
              { title: { nb: 'Sette sammen', en: 'Assemble' }, text: { nb: 'Nytt arvestoff og nye proteiner settes sammen til mange nye viruspartikler.', en: 'New genetic material and new proteins are assembled into many new virus particles.' } },
              { title: { nb: 'Slippe ut', en: 'Release' }, text: { nb: 'De nye virusene slipper ut av cellen – noen ved å knoppe av fra cellemembranen og ta med seg en bit av den som hylster. Cellen kan bli skadet eller dø, og de nye virusene angriper nye celler.', en: 'The new viruses leave the cell – some by budding off from the cell membrane and taking a piece of it as an envelope. The cell can be damaged or die, and the new viruses attack new cells.' } }
            ]
          } },
          { fact: { nb: 'En bakteriofag lander på bakterien med halefibrene og sprøyter arvestoffet inn gjennom halen – proteinkappen blir igjen utenfor. Hodet har også et enzym som lager hull i bakteriens cellevegg.', en: 'A bacteriophage lands on the bacterium with its tail fibres and injects its genetic material through the tail – the protein coat stays outside. The head also carries an enzyme that makes a hole in the bacterium’s cell wall.' }, src: ['sml-bakteriofag'] }
        ]
      },
      {
        id: 'levende', title: { nb: 'Er virus levende?', en: 'Are viruses alive?' },
        blocks: [
          { p: { nb: 'Levende organismer kan blant annet ta opp næring, vokse, reagere på omgivelsene og formere seg selv. Virus har arvestoff og kan utvikle seg, men de har **ingen egen stoffomsetning** og kan **ikke formere seg utenfor en vertscelle**. Derfor er forskerne uenige om virus kan kalles levende.', en: 'Living organisms can, among other things, take in nutrients, grow, respond to their surroundings and reproduce by themselves. Viruses have genetic material and can evolve, but they have **no metabolism of their own** and **cannot multiply outside a host cell**. That is why scientists disagree about whether viruses can be called living.' }, src: ['sml-virus', 'ndla-virus-levende'] },
          { discuss: { nb: 'Hva mener du: Er et virus levende? Lag en liste med argumenter for og imot, og diskuter med en venn.', en: 'What do you think: is a virus alive? Make a list of arguments for and against, and discuss with a partner.' } }
        ]
      },
      {
        id: 'influensa', title: { nb: 'Influensaviruset', en: 'The influenza virus' },
        blocks: [
          { p: { nb: 'Influensaviruset er et **RNA-virus** på 80–120 nanometer. Det har et lipidhylster med to slags pigger: **hemagglutinin (H)**, som fester viruset til cellene i luftveiene, og **nevraminidase (N)**, som hjelper nye virus å slippe løs. Derfor har influensatyper navn som H1N1 og H3N2.', en: 'The influenza virus is an **RNA virus** of 80–120 nanometres. It has a lipid envelope with two kinds of spikes: **haemagglutinin (H)**, which attaches the virus to cells in the airways, and **neuraminidase (N)**, which helps new viruses break free. That is why flu types have names like H1N1 and H3N2.' }, src: ['sml-influensavirus'] },
          { p: { nb: 'Influensaviruset endrer seg litt hele tiden. Immunforsvaret kjenner det derfor ikke alltid igjen, og vaksinen må oppdateres **hvert år**.', en: 'The influenza virus changes a little all the time. The immune system therefore does not always recognise it, and the vaccine has to be updated **every year**.' }, src: ['sml-influensa', 'fhi-influensavaksine'] }
        ]
      },
      {
        id: 'meslinger', title: { nb: 'Meslingviruset og vaksiner', en: 'The measles virus and vaccines' },
        blocks: [
          { p: { nb: '**Meslinger** er en av de mest smittsomme sykdommene vi kjenner. Viruset smitter med små dråper når en syk person hoster og nyser, og kan gi høy feber, utslett og alvorlige komplikasjoner, som lungebetennelse og hjernebetennelse. Meslingviruset er et RNA-virus med lipidhylster, og det er større enn influensaviruset.', en: '**Measles** is one of the most contagious diseases we know of. The virus spreads in tiny droplets when an ill person coughs and sneezes, and can cause high fever, a rash and serious complications such as pneumonia and inflammation of the brain. The measles virus is an RNA virus with a lipid envelope, and it is larger than the influenza virus.' }, src: ['sml-meslinger', 'sml-meslingvirus'] },
          { photo: 'measles', caption: { nb: 'Et meslingvirus sett i elektronmikroskop.', en: 'A measles virus seen in an electron microscope.' } },
          { p: { nb: 'En **[[vaksine]]** inneholder svekkede eller drepte virus, eller bare deler av viruset. Den gir ikke sykdommen, men lærer **immunforsvaret** å kjenne igjen viruset. Hvis du senere blir smittet, kan immunforsvaret slå tilbake raskt, før du blir syk.', en: 'A **[[vaksine|vaccine]]** contains weakened or killed viruses, or only parts of the virus. It does not cause the disease, but it teaches the **immune system** to recognise the virus. If you are infected later, the immune system can strike back quickly, before you get ill.' }, src: ['sml-vaksine', 'sml-immunforsvar'] },
          { p: { nb: 'I Norge får barn tilbud om **MMR-vaksinen** (meslinger, kusma, røde hunder) i barnevaksinasjonsprogrammet: første gang ved 15 måneder og andre gang i 6. trinn.', en: 'In Norway, children are offered the **MMR vaccine** (measles, mumps, rubella) in the childhood vaccination programme: first at 15 months and again in Year 6.' }, src: ['fhi-vaksineplan'] },
          { p: { nb: 'Når mange nok er vaksinert, får viruset vanskelig for å spre seg. Da beskyttes også de som ikke kan ta vaksinen, for eksempel nyfødte og syke. Dette kalles **[[flokkimmunitet]]**.', en: 'When enough people are vaccinated, the virus finds it hard to spread. This also protects those who cannot be vaccinated, such as newborns and sick people. This is called **[[flokkimmunitet|herd immunity]]**.' }, src: ['fhi-hvorfor-vaksinere'] },
          { myth: { nb: '«Vaksiner er bare viktige for den som blir vaksinert.»', en: '“Vaccines only matter for the person who gets vaccinated.”' }, truth: { nb: 'Vaksiner beskytter også andre. Når få i en gruppe kan bli smittet, stopper smitten opp. Derfor er vaksiner viktige for **folkehelsen**.', en: 'Vaccines also protect others. When few people in a group can be infected, the spread stops. That is why vaccines are important for **public health**.' }, src: ['fhi-hvorfor-vaksinere'] },
          { discuss: { nb: 'På sosiale medier finnes det mange påstander om vaksiner. Hvordan kan du sjekke om en påstand er basert på forskning? Hvilke kilder stoler du på, og hvorfor?', en: 'There are many claims about vaccines on social media. How can you check whether a claim is based on research? Which sources do you trust, and why?' } }
        ]
      },
      {
        id: 'behandling', title: { nb: 'Hvorfor virker ikke antibiotika?', en: 'Why don’t antibiotics work?' },
        blocks: [
          { p: { nb: 'Antibiotika angriper ting som bakterier har, som cellevegg og bakterieribosomer. **Virus har ingen av delene.** De gjemmer seg inne i kroppens egne celler. Derfor virker antibiotika ikke mot virus. Mot noen virus finnes det egne medisiner, såkalte **antivirale midler**.', en: 'Antibiotics attack things that bacteria have, such as a cell wall and bacterial ribosomes. **Viruses have neither.** They hide inside the body’s own cells. That is why antibiotics do not work against viruses. Against some viruses there are special medicines called **antivirals**.' }, src: ['sml-antibiotika'] },
          { check: {
            q: { nb: 'Ida har influensa. Hva vil hjelpe henne minst?', en: 'Ida has the flu. What will help her least?' },
            options: [{ nb: 'Hvile og mye drikke', en: 'Rest and plenty to drink' }, { nb: 'Antibiotika', en: 'Antibiotics' }, { nb: 'At immunforsvaret hennes bekjemper viruset', en: 'Her immune system fighting the virus' }],
            answer: 1,
            explain: { nb: 'Influensa skyldes et virus, og antibiotika virker bare mot bakterier. Det er immunforsvaret som bekjemper viruset.', en: 'Flu is caused by a virus, and antibiotics only work against bacteria. It is the immune system that fights the virus.' }
          } },
          { deeper: {
            title: { nb: 'Bakteriofager som medisin?', en: 'Bacteriophages as medicine?' },
            blocks: [
              { p: { nb: 'Fordi hver bakteriofag bare angriper bestemte bakterier, har forskere i mange år prøvd å bruke fager mot sykdomsfremkallende bakterier. Dette kalles **fagterapi** og kan bli viktig mot bakterier som er resistente mot antibiotika.', en: 'Because each bacteriophage only attacks particular bacteria, scientists have for many years tried to use phages against disease-causing bacteria. This is called **phage therapy** and could become important against bacteria that are resistant to antibiotics.' }, src: ['sml-bakteriofag'] }
            ]
          } },
          { history: { nb: 'Virus ble oppdaget på 1890-tallet. Forskere fant ut at noe som var mindre enn bakterier, ga en sykdom hos tobakksplanter. Selve viruspartiklene ble ikke sett før elektronmikroskopet kom på 1930-tallet.', en: 'Viruses were discovered in the 1890s. Scientists found that something smaller than bacteria caused a disease in tobacco plants. The virus particles themselves were not seen until the electron microscope arrived in the 1930s.' }, src: ['sml-virus', 'snl-mikroskop'] },
          { model: { nb: 'Modellene er forenklet. Hos influensa- og meslingviruset ligger proteinet både som et lag innenfor hylsteret og rundt hver RNA-tråd. Ekte virus har også mange flere pigger, og influensaviruset kan være avlangt i stedet for rundt.', en: 'The models are simplified. In influenza and measles viruses the protein lies both as a layer inside the envelope and around each RNA strand. Real viruses also have many more spikes, and the influenza virus can be elongated instead of round.' }, src: ['sml-influensavirus', 'sml-meslingvirus'] }
        ]
      }
    ],
    resources: ['ndla-virus-vaksiner', 'ndla-vaksiner', 'ndla-meslinger', 'yt-virus', 'yt-virusformering', 'yt-fag-kurz', 'yt-fag-kort', 'yt-immunforsvar', 'yt-immun-kurz', 'yt-bakterie-virus', 'yt-antibiotika']
  }
};
