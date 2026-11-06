/* =====================================================================
   Økologi – DEL 05: MENNESKET OG NATUREN
   ===================================================================== */
NatLab.topic('okologi').organisms.mennesket = {
  code: '05',
  title: { nb: 'Mennesket og naturen', en: 'Humans and nature' },
  sub: { nb: 'Hvordan vi påvirker økosystemene – og hva vi kan gjøre.', en: 'How we affect ecosystems – and what we can do.' },
  lead: {
    nb: 'Mennesker er en del av økosystemene – og vi endrer dem mer enn noen annen art. Her ser du hvordan, og hva vi kan gjøre for å ta vare på naturen.',
    en: 'Humans are part of ecosystems – and we change them more than any other species. Here you can see how, and what we can do to take care of nature.'
  },
  art: 'eco-menneske',
  practiceHref: '#okologi-quiz',

  page: {
    goals: [
      { nb: 'gi eksempler på hvordan mennesker påvirker økosystemer og det biologiske mangfoldet', en: 'give examples of how humans affect ecosystems and biodiversity' },
      { nb: 'drøfte dilemmaer knyttet til bruk av naturressurser, for eksempel fiske og rovdyr', en: 'discuss dilemmas about using natural resources, for example fishing and predators' },
      { nb: 'gi eksempler på samisk tradisjonell kunnskap om naturen og hvordan den kan bidra til bærekraftig forvaltning', en: 'give examples of Sámi traditional knowledge about nature and how it can contribute to sustainable management' }
    ],
    keypoints: [
      { nb: 'Den viktigste grunnen til at arter blir truet, er at **leveområdene deres blir endret eller ødelagt**.', en: 'The most important reason species become threatened is that **their habitats are changed or destroyed**.' },
      { nb: 'Også **forurensning, klimaendringer, fremmede arter og overhøsting** (for eksempel overfiske) truer arter.', en: '**Pollution, climate change, invasive species and over-harvesting** (for example overfishing) also threaten species.' },
      { nb: 'Miljøgifter **hoper seg opp i næringskjeden** – toppredatorene får mest.', en: 'Environmental toxins **build up in the food chain** – top predators get the most.' },
      { nb: '**Biologisk mangfold** gjør økosystemene mer robuste.', en: '**Biodiversity** makes ecosystems more robust.' },
      { nb: 'Både forskning og **tradisjonell kunnskap** kan hjelpe oss å forvalte naturen bærekraftig.', en: 'Both research and **traditional knowledge** can help us manage nature sustainably.' }
    ],
    sections: [
      {
        id: 'naturkrisen', title: { nb: 'Naturkrisen', en: 'The nature crisis' },
        blocks: [
          { p: { nb: '**[[biologisk_mangfold|Biologisk mangfold]]** er variasjonen av liv: alle artene, de genetiske forskjellene innen artene og alle de ulike økosystemene. Mange arter går nå tilbake i verden og i Norge. Dette kalles ofte **naturkrisen**.', en: '**[[biologisk_mangfold|Biodiversity]]** is the variety of life: all the species, the genetic differences within species and all the different ecosystems. Many species are now declining in the world and in Norway. This is often called **the nature crisis**.' }, src: ['snl-biologisk-mangfold', 'snl-naturkrisen'] },
          { p: { nb: 'Forurensning, klimaendringer og tap av biologisk mangfold blir regnet som de tre store globale miljøkrisene vi står overfor i dag.', en: 'Pollution, climate change and loss of biodiversity are regarded as the three major global environmental crises we face today.' }, src: ['snl-miljogift'] },
          { p: { nb: 'Arter som står i fare for å dø ut i Norge, blir satt på **Norsk rødliste for arter**, som lages av Artsdatabanken. Den kom sist ut i 2021.', en: 'Species at risk of dying out in Norway are put on the **Norwegian Red List of Species**, made by the Norwegian Biodiversity Information Centre. It was last published in 2021.' }, src: ['snl-rodliste'] }
        ]
      },
      {
        id: 'trusler', title: { nb: 'Hva truer naturen?', en: 'What threatens nature?' },
        blocks: [
          { h3: { nb: '1. Arealendringer – leveområder forsvinner', en: '1. Land-use change – habitats disappear' } },
          { p: { nb: 'Den vanligste grunnen til at arter blir truet, er **arealendringer**: Natur blir bygd ned til veier, hus, hytter og industri, skog blir hogd og myrer blir drenert. Da forsvinner eller deles leveområdene opp.', en: 'The most common reason species become threatened is **land-use change**: nature is built over for roads, houses, cabins and industry, forests are felled and bogs are drained. Habitats then disappear or are split up.' }, src: ['snl-truede-arter', 'snl-habitatodeleggelse', 'snl-naturkrisen'] },
          { h3: { nb: '2. Forurensning og miljøgifter', en: '2. Pollution and toxins' } },
          { p: { nb: 'Noen [[miljogift|miljøgifter]] brytes ikke ned i naturen. De er fettløselige og lagres i fettvevet til dyr. Når et større dyr spiser mange mindre dyr, hoper giftstoffene seg opp. Derfor blir konsentrasjonen høyere jo høyere opp i **næringskjeden** dyret er – toppredatorer som sel, spekkhogger og havørn får mest.', en: 'Some [[miljogift|environmental toxins]] are not broken down in nature. They are fat-soluble and stored in animals’ fatty tissue. When a larger animal eats many smaller animals, the toxins build up. That is why the concentration gets higher the higher up the **food chain** the animal is – top predators such as seals, orcas and eagles get the most.' }, src: ['snl-miljogift', 'snl-bioakkumulering'] },
          { h3: { nb: '3. Klimaendringer', en: '3. Climate change' } },
          { p: { nb: 'Når det blir varmere, flytter økosystemene seg mot polene og høyere opp i fjellet. Endringene kan skje så raskt at mange arter ikke klarer å tilpasse seg eller flytte seg raskt nok.', en: 'When it gets warmer, ecosystems move towards the poles and higher up the mountains. The changes can happen so fast that many species cannot adapt or move quickly enough.' }, src: ['snl-klimaendringer'] },
          { h3: { nb: '4. Fremmede arter', en: '4. Invasive species' } },
          { p: { nb: 'Arter som mennesker har tatt med fra andre steder, kan spre seg og fortrenge de som hører hjemme her. **Brunskogsneglen** ble første gang registrert i Norge i 1988. Nå finnes den i store deler av landet og gjør stor skade på planter. Den regnes som en art med svært høy risiko.', en: 'Species that humans have brought from elsewhere can spread and push out those that belong here. The **Spanish slug** was first recorded in Norway in 1988. It is now found across much of the country and does great damage to plants. It is classed as a very high-risk species.' }, src: ['snl-brunskogsnegl', 'snl-fremmedarter'] },
          { h3: { nb: '5. Overhøsting – for eksempel overfiske', en: '5. Over-harvesting – for example overfishing' } },
          { p: { nb: 'I 1950- og 1960-årene ble den norske vårgytende silda fisket så hardt at bestanden nesten forsvant. Først i 1990-årene økte den igjen. I dag bestemmes det hvert år hvor mye som kan fiskes (kvoter), for at bestandene skal holde seg sunne.', en: 'In the 1950s and 1960s the Norwegian spring-spawning herring was fished so hard that the stock almost disappeared. Only in the 1990s did it grow again. Today it is decided every year how much can be caught (quotas), so that the stocks stay healthy.' }, src: ['snl-sild', 'snl-overfiske'] },
          { check: {
            q: { nb: 'Hvorfor har toppredatorer ofte mest miljøgifter i kroppen?', en: 'Why do top predators often have the most toxins in their bodies?' },
            options: [{ nb: 'De lever lengst nede i havet', en: 'They live deepest in the sea' }, { nb: 'De spiser mange dyr som alle har litt gift i seg, og giften hoper seg opp', en: 'They eat many animals that each contain a little toxin, and the toxin builds up' }, { nb: 'De lager giftstoffene selv', en: 'They make the toxins themselves' }],
            answer: 1,
            explain: { nb: 'Giftstoffene lagres i fettet og brytes ikke ned. For hvert trinn i næringskjeden blir konsentrasjonen høyere.', en: 'The toxins are stored in fat and not broken down. At each step in the food chain the concentration gets higher.' }
          } }
        ]
      },
      {
        id: 'dilemma', title: { nb: 'Dilemma: rovdyr i Østlandsskogene', en: 'Dilemma: predators in the eastern forests' },
        blocks: [
          { p: { nb: 'Stortinget har bestemt at ulven kan leve i en **ulvesone** sørøst i landet, ved grensen mot Sverige. Utenfor sonen er det lavere terskel for å felle ulv, fordi det er mye sau og tamrein på utmarksbeite der.', en: 'The Norwegian parliament has decided that wolves may live in a **wolf zone** in the south-east of the country, along the border with Sweden. Outside the zone there is a lower threshold for culling wolves, because there are many sheep and domestic reindeer grazing there.' }, src: ['snl-ulv', 'snl-rovviltforvaltning'] },
          { p: { nb: 'Ulven er en naturlig del av skogens næringsnett, og gaupa er sterkt truet i Norge. Samtidig kan rovdyr ta sau, tamrein og hunder, og mange som bor i distriktene, er bekymret. Dette er et ekte **dilemma**: Det finnes gode argumenter på flere sider.', en: 'The wolf is a natural part of the forest food web, and the lynx is endangered in Norway. At the same time, predators can take sheep, reindeer and dogs, and many people living in rural areas are worried. This is a real **dilemma**: there are good arguments on several sides.' }, src: ['snl-ulv', 'snl-gaupe', 'snl-rovviltforvaltning'] },
          { discuss: { nb: 'Lag to lister: argumenter for at det skal være flere ulver i Norge, og argumenter for at det skal være færre. Hvilke argumenter bygger på naturfaglig kunnskap, og hvilke handler om verdier og interesser?', en: 'Make two lists: arguments for more wolves in Norway, and arguments for fewer. Which arguments are based on scientific knowledge, and which are about values and interests?' } }
        ]
      },
      {
        id: 'samisk', title: { nb: 'Samisk tradisjonell kunnskap', en: 'Sámi traditional knowledge' },
        blocks: [
          { p: { nb: '**[[tradisjonell_kunnskap|Tradisjonell kunnskap]]** er kunnskap som er utviklet gjennom praktisk arbeid og erfaring, og som ofte blir overført fra generasjon til generasjon. I samisk kultur har slik kunnskap fortsatt stor betydning – for eksempel innen reindrift, fiske, høsting, matlaging og duodji (samisk håndverk).', en: '**[[tradisjonell_kunnskap|Traditional knowledge]]** is knowledge developed through practical work and experience, often passed down from generation to generation. In Sámi culture such knowledge is still very important – for example in reindeer herding, fishing, harvesting, cooking and duodji (Sámi handicraft).' }, src: ['ndla-tradisjonell'] },
          { p: { nb: 'Det nordsamiske ordet **birget** betyr «å klare seg». Det er en slags tradisjonell samisk filosofi om å kunne leve av naturressursene – uten å bruke dem opp.', en: 'The North Sámi word **birget** means “to manage” or “to get by”. It is a kind of traditional Sámi philosophy about being able to live off natural resources – without using them up.' }, src: ['ndla-tradisjonell'] },
          { p: { nb: 'Reindriftsutøvere har lang erfaring med hvordan beitene, været og snøforholdene endrer seg gjennom året. Slik kunnskap kan brukes sammen med forskning når vi skal forvalte naturen bærekraftig.', en: 'Reindeer herders have long experience of how pastures, weather and snow conditions change through the year. Such knowledge can be used together with research when we manage nature sustainably.' }, src: ['snl-reindrift', 'ndla-tradisjonell'] },
          { discuss: { nb: 'Hva kan vi lære av å «klare oss» med det naturen gir – uten å bruke det opp? Gi eksempler fra ditt eget liv.', en: 'What can we learn from “getting by” with what nature provides – without using it up? Give examples from your own life.' } }
        ]
      },
      {
        id: 'tiltak', title: { nb: 'Hva kan vi gjøre?', en: 'What can we do?' },
        blocks: [
          { p: { nb: 'For å løse naturkrisen må vi både **ta vare på** naturen som er igjen, **restaurere** natur som er ødelagt, og **begrense** de viktigste truslene.', en: 'To solve the nature crisis we must both **protect** the nature that is left, **restore** nature that has been damaged, and **limit** the main threats.' }, src: ['snl-naturkrisen'] },
          { list: [
            { nb: '**Samfunnet:** verne viktige naturområder, planlegge utbygging slik at mindre natur går tapt, sette fiskekvoter og fjerne fremmede arter.', en: '**Society:** protect important natural areas, plan building so less nature is lost, set fishing quotas and remove invasive species.' },
            { nb: '**Skolen og nærmiljøet:** lage insekthotell og blomstereng, plukke søppel, og være med i naturkartlegging.', en: '**School and local area:** make insect hotels and wildflower meadows, pick up litter, and take part in nature surveys.' },
            { nb: '**Deg selv:** kaste mindre mat, velge sjømat fra bærekraftig fiske, gjenbruke ting – og si fra om det du bryr deg om.', en: '**You:** waste less food, choose seafood from sustainable fisheries, reuse things – and speak up about what you care about.' }
          ], src: ['snl-naturforvaltning', 'snl-naturkrisen'] }
        ]
      },
      {
        id: 'attenborough', title: { nb: 'Lær mer med David Attenborough', en: 'Learn more with David Attenborough' },
        blocks: [
          { p: { nb: '**Sir David Attenborough** (født 1926) er en britisk naturhistoriker og TV-personlighet, best kjent for en lang rekke naturprogrammer for BBC. Gjennom et langt liv har han sett hvordan naturen har endret seg, og han har blitt en av verdens viktigste stemmer for å ta vare på den.', en: '**Sir David Attenborough** (born 1926) is a British naturalist and television presenter, best known for a long series of nature programmes for the BBC. Over a long life he has seen how nature has changed, and he has become one of the world’s most important voices for protecting it.' }, src: ['snl-attenborough'] },
          { p: { nb: 'Vi anbefaler disse – de er på engelsk, men har flotte bilder som forklarer mye:', en: 'We recommend these – they are in English, but have stunning footage that explains a lot:' } },
          { link: { href: 'https://www.youtube.com/watch?v=64R2MYUt394', icon: 'video', title: { nb: 'A Life on Our Planet (trailer)', en: 'A Life on Our Planet (trailer)' }, text: { nb: 'Attenboroughs eget «vitneutsagn» om hvordan naturen har endret seg i hans levetid – og hva vi kan gjøre. Hele filmen finnes på Netflix.', en: 'Attenborough’s own “witness statement” on how nature has changed in his lifetime – and what we can do. The full film is on Netflix.' } } },
          { link: { href: 'https://www.youtube.com/watch?v=JkaxUblCGz0', icon: 'video', title: { nb: 'Our Planet: Forests (hel episode)', en: 'Our Planet: Forests (full episode)' }, text: { nb: 'Gratis på YouTube. Om skogene i verden – også de nordlige barskogene.', en: 'Free on YouTube. About the world’s forests – including the northern coniferous forests.' } } },
          { link: { href: 'https://www.youtube.com/watch?v=GfO-3Oir-qM', icon: 'video', title: { nb: 'Our Planet: One Planet (hel episode)', en: 'Our Planet: One Planet (full episode)' }, text: { nb: 'Gratis på YouTube. Hvordan alle økosystemene på jorda henger sammen.', en: 'Free on YouTube. How all the ecosystems on Earth are connected.' } } },
          { discuss: { nb: 'Se en av filmene. Skriv ned tre ting du lærte om hvordan mennesker påvirker økosystemene, og én ting du selv kan gjøre.', en: 'Watch one of the films. Write down three things you learned about how humans affect ecosystems, and one thing you can do yourself.' } }
        ]
      }
    ],
    resources: ['yt-attenborough-life', 'yt-our-planet-skog', 'yt-our-planet-en', 'ndla-biomangfold', 'ndla-tradisjonell', 'snl-naturkrisen', 'snl-vippepunkt', 'yt-okologi-repetisjon']
  }
};
