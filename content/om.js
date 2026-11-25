/* =====================================================================
   NatLab – teksten på siden «Om NatLab» (#om)
   ---------------------------------------------------------------------
   DENNE FILEN KAN LÆREREN ENDRE.
   Hver seksjon har en tittel og byggeklosser:
     { p: {…} }                       – et avsnitt (**uthevet** virker)
     { list: [ {…}, {…} ] }           – punktliste
     { links: [ { href, label } ] }   – knapper/lenker (#side, https://… eller mailto:…)
   ===================================================================== */
NatLab.content = NatLab.content || {};
NatLab.content.about = {
  lead: {
    nb: 'NatLab er et gratis, interaktivt oppslagsverk i naturfag for 8.–10. trinn – laget av en naturfagslærer, for elever.',
    en: 'NatLab is a free, interactive science reference for Years 8–10 in Norway – made by a science teacher, for students.'
  },
  sections: [
    {
      id: 'hvem',
      title: { nb: 'Hvem står bak NatLab?', en: 'Who is behind NatLab?' },
      blocks: [
        { p: { nb: 'NatLab er laget av **André Espelid**. Jeg er naturfagslærer på ungdomsskolen, og jeg savnet mer interaktivitet i de digitale læreverkene. Derfor ville jeg prøve å lage noe eget som løser dette.', en: 'NatLab is made by **André Espelid**. I am a science teacher at a lower secondary school, and I missed more interactivity in the digital textbooks. So I wanted to try to make something of my own that solves this.' } },
        { p: { nb: '**Målet** er å gi elevene flere praktiske og visuelle måter å jobbe med faget på – modeller de kan klikke på, kart, animasjoner og oppgaver. Slik håper jeg at temaer som kan være forvirrende å bare lese om, blir lettere å forstå.', en: '**The goal** is to give students more practical and visual ways to work with the subject – models they can click on, maps, animations and exercises. In this way I hope that topics that can be confusing to only read about become easier to understand.' } },
        { p: { nb: 'NatLab skal være **åpent og tilgjengelig** for alle elever, uten at noen må betale for å få tilgang til kunnskap og læring. Jeg tjener ingen penger på siden. Faktaene er hentet fra velkjente kilder med god historikk for å være troverdige, som Store norske leksikon og NDLA.', en: 'NatLab should be **open and accessible** to all students, without anyone having to pay to get access to knowledge and learning. I do not make any money from the site. The facts come from well-known sources with a good track record of being reliable, such as the Norwegian encyclopedia Store norske leksikon and NDLA.' } }
      ]
    },
    {
      id: 'bruk',
      title: { nb: 'Slik bruker du NatLab', en: 'How to use NatLab' },
      blocks: [
        { p: { nb: 'Velg et tema på forsiden. Hvert tema er delt i deler, og i hver del kan du utforske, lese og øve:', en: 'Choose a topic on the front page. Each topic is divided into parts, and in each part you can explore, read and practise:' } },
        { list: [
          { nb: '**Utforsk:** Klikk på delene i modellene og tegningene for å lese hva de er og hva de gjør. «Vis nummer» viser nummeret på hver del.', en: '**Explore:** Click the parts of the models and drawings to read what they are and what they do. “Show numbers” shows the number of each part.' },
          { nb: '**Les:** Hver del har en artikkel med hovedpunkter, «Sjekk deg selv»-spørsmål, oppgaver og nummererte kildehenvisninger.', en: '**Read:** Each part has an article with key points, “Check yourself” questions, tasks and numbered references.' },
          { nb: '**Gå dypere:** Velg nivået «Gå dypere» for å få mer utfordrende stoff.', en: '**Go deeper:** Choose the level “Go deeper” to get more challenging content.' },
          { nb: '**Interaktive verktøy:** for eksempel næringsnettet, plategrensekartet, kartet gjennom tid og «Hvor små er de?».', en: '**Interactive tools:** for example the food web, the plate boundary map, the map through time and “How small are they?”.' },
          { nb: '**Øving og quiz:** Merk, sorter, koble og sett i rekkefølge, og test deg selv med quiz. Du får forklaring på hvert svar. Svarene lagres ikke, og det gis ingen poeng – det er bare til egen øving.', en: '**Practice and quiz:** Label, sort, match and put in order, and test yourself with quizzes. You get an explanation for every answer. Answers are not saved and there are no points – it is just for your own practice.' },
          { nb: '**Ordliste:** Ord med strek under kan du klikke på. I ordlisten finner du alle fagordene på norsk og engelsk.', en: '**Glossary:** You can click on underlined words. In the glossary you find all the key terms in Norwegian and English.' },
          { nb: '**Læringsmål:** Se hva du skal kunne i hvert tema, og sjekk deg selv før prøven.', en: '**Learning goals:** See what you should know in each topic, and check yourself before the test.' },
          { nb: '**Innstillinger (tannhjulet øverst):** Bytt mellom bokmål og engelsk, få teksten lest opp, velg en lettlest skrift for dysleksi, større tekst, mer linjeavstand eller mørk modus.', en: '**Settings (the gear at the top):** Switch between Norwegian and English, have the text read aloud, choose an easy-to-read font for dyslexia, larger text, more line spacing or dark mode.' }
        ] },
        { p: { nb: 'NatLab fungerer på PC, Mac, nettbrett og mobil, med mus, berøring eller tastatur. Du trenger ingen innlogging, og ingenting om deg blir samlet inn.', en: 'NatLab works on PC, Mac, tablet and mobile, with a mouse, touch or keyboard. You do not need to log in, and nothing about you is collected.' } },
        { links: [{ href: '#personvern', label: { nb: 'Les om personvern', en: 'Read about privacy' } }, { href: '#mal', label: { nb: 'Se læringsmålene', en: 'See the learning goals' } }] }
      ]
    },
    {
      id: 'rettigheter',
      title: { nb: 'Bruk av siden', en: 'Using the site' },
      blocks: [
        { p: { nb: 'Opphavsrett © André Espelid. Alle rettigheter forbeholdt. Siden kan brukes gratis av elever og lærere til undervisning og læring, og det er velkomment å lenke til den. Ingenting kan kopieres, spres videre, bearbeides, oversettes eller brukes kommersielt uten skriftlig tillatelse. Materiale det lenkes til fra andre nettsteder tilhører eierne.', en: 'Copyright © André Espelid. All rights reserved. The site may be used free of charge by students and teachers for teaching and learning, and you are welcome to link to it. Nothing may be copied, redistributed, adapted, translated or used commercially without written permission. Material linked to from other websites belongs to its owners.' } },
        { p: { nb: 'Dette gjelder også **kildekoden** (programkoden) bak siden. Selv om koden kan leses på GitHub, kan den ikke kopieres eller gjenbrukes uten skriftlig tillatelse.', en: 'This also applies to the **source code** (the program code) behind the site. Even though the code can be read on GitHub, it may not be copied or reused without written permission.' } },
        { p: { nb: 'Innholdet i NatLab er laget for og gjengitt i sammenheng med **undervisning i skolen** (naturfag, 8.–10. trinn).', en: 'The content of NatLab is made for, and presented in connection with, **teaching in school** (science, Years 8–10).' } },
        { p: { nb: 'Fotografier, kartdata og annet materiale som andre har laget, er ikke omfattet av dette. Det tilhører opphavspersonene og brukes etter sine egne lisenser – se under.', en: 'Photographs, map data and other material made by others are not covered by this. It belongs to its creators and is used under its own licences – see below.' } },
        { p: { nb: 'For å be om tillatelse, ta kontakt med: **lektorespelid@gmail.com**', en: 'To ask for permission, contact: **lektorespelid@gmail.com**' } },
        { links: [{ href: 'mailto:lektorespelid@gmail.com', label: { nb: 'Send e-post', en: 'Send an email' } }] }
      ]
    },
    {
      id: 'kilder',
      title: { nb: 'Kilder, opphavsrett og kreditering', en: 'Sources, copyright and credits' },
      blocks: [
        { list: [
          { nb: '**Tekstene** er skrevet for NatLab, i sammenheng med undervisning i naturfag. Ingen tekst er kopiert fra kildene eller fra læreverk.', en: '**The texts** were written for NatLab, in connection with science teaching. No text has been copied from the sources or from textbooks.' },
          { nb: '**Fakta** er sjekket mot Store norske leksikon (snl.no), NDLA og Folkehelseinstituttet (FHI). Hver artikkel har nummererte kildehenvisninger og en kildeliste med lenker.', en: '**Facts** have been checked against Store norske leksikon (snl.no), NDLA and the Norwegian Institute of Public Health (FHI). Each article has numbered references and a list of sources with links.' },
          { nb: '**Tegninger, modeller, animasjoner og ikoner** er laget for NatLab.', en: '**Drawings, models, animations and icons** were made for NatLab.' },
          { nb: '**Fotografiene** er hentet fra Wikimedia Commons og har frie lisenser (Creative Commons eller fri bruk). Fotograf og lisens står under hvert bilde og på siden «Kilder og bilder».', en: '**The photographs** come from Wikimedia Commons and have free licences (Creative Commons or public domain). The photographer and licence are shown under each picture and on the page “Sources and images”.' },
          { nb: '**Kartdata:** Verdenskartet bygger på Natural Earth (fri bruk). Plategrensene er fra datasettet PB2002 av Peter Bird (2003), med lisensen ODC-By 1.0.', en: '**Map data:** The world map is based on Natural Earth (public domain). The plate boundaries come from the PB2002 dataset by Peter Bird (2003), under the ODC-By 1.0 licence.' },
          { nb: '**Videoer** på YouTube er bare lenket til, ikke bygd inn i siden. De tilhører dem som har laget dem.', en: '**Videos** on YouTube are only linked to, not embedded in the site. They belong to the people who made them.' },
          { nb: '**Skrifttypene** Atkinson Hyperlegible, Bricolage Grotesque og OpenDyslexic har lisensen SIL Open Font License.', en: '**The fonts** Atkinson Hyperlegible, Bricolage Grotesque and OpenDyslexic are licensed under the SIL Open Font License.' },
          { nb: '**Læringsmålene** bygger på Læreplan i naturfag (LK20) fra Utdanningsdirektoratet.', en: '**The learning goals** are based on the Norwegian science curriculum (LK20) from the Norwegian Directorate for Education and Training.' }
        ] },
        { p: { nb: 'Finner du en feil, eller mener du at noe er brukt på feil måte? Ta gjerne kontakt, så retter jeg det.', en: 'Have you found a mistake, or do you think something has been used in the wrong way? Please get in touch, and I will correct it.' } },
        { links: [{ href: '#kilder', label: { nb: 'Se alle kilder og bilder', en: 'See all sources and images' } }, { href: 'mailto:lektorespelid@gmail.com', label: { nb: 'Meld fra om en feil', en: 'Report a mistake' } }] }
      ]
    }
  ]
};
