# NatLab

NatLab er et interaktivt oppslagsverk i naturfag for 8.–10. trinn. Det første temaet er **Celler og virus**: dyrecellen, plantecellen, bakterien og virus (influensavirus, bakteriofag og meslingvirus).

Elevene kan

- klikke på delene i tegningene og lese om hver del
- lese korte artikler med faktabokser, kilder og lenker til videoer
- øve: merke delene, koble del og oppgave, «hvem har hva?» og sette i rekkefølge
- ta quiz med forklaringer (80 spørsmål)
- se læringsmålene, slå opp i ordlisten og zoome fra hårstrå til virus
- bytte mellom bokmål og engelsk, få teksten lest opp, velge skrift for dyslektikere og større tekst

**Personvern:** Ingen innlogging, ingen sporing, ingen informasjonskapsler. Ingenting hentes fra andre nettsteder når siden åpnes. Bare innstillingene (språk, skrift osv.) lagres i elevens egen nettleser.

<img width="1347" height="745" alt="image" src="https://github.com/user-attachments/assets/7a47dce2-db44-4655-af9b-15dd1762dcfc" />


---

## Innhold

1. [Se appen på din egen maskin](#1-se-appen-på-din-egen-maskin)
2. [Publiser på GitHub Pages](#2-publiser-på-github-pages)
3. [Slik er mappene organisert](#3-slik-er-mappene-organisert)
4. [Endre tekst](#4-endre-tekst)
5. [Endre læringsmålene](#5-endre-læringsmålene)
6. [Legge til et quizspørsmål](#6-legge-til-et-quizspørsmål)
7. [Legge til en lenke eller video](#7-legge-til-en-lenke-eller-video)
8. [Legge til et bilde](#8-legge-til-et-bilde)
9. [Byggeklosser i artiklene](#9-byggeklosser-i-artiklene)
10. [Legge til et helt nytt tema](#10-legge-til-et-helt-nytt-tema)
11. [Slik fungerer appen](#11-slik-fungerer-appen)
12. [Feilsøking](#12-feilsøking)

---

## 1. Se appen på din egen maskin

Last ned mappen og **dobbeltklikk på `index.html`**. Appen åpnes i nettleseren. Du trenger ikke installere noe.

Når du har endret en fil: lagre filen og trykk **F5** (eller Cmd+R på Mac) i nettleseren.

> Tips: Legg til `?dev` i adressen, for eksempel `index.html?dev#celler`. Da viser appen et gult varsel øverst hvis en tekst mangler oversettelse.

## 2. Publiser på GitHub Pages

Det er gratis så lenge repositoryet er **offentlig** (public). Det går fint, fordi appen ikke inneholder noe om elevene.

**Første gang (alt i nettleseren, ingen programmer):**

1. Logg inn på github.com og trykk **New repository** (grønn knapp).
2. Gi det et navn, for eksempel `natlab`. Velg **Public**. Trykk **Create repository**.
3. Trykk på lenken **uploading an existing file**. Dra **alt innholdet i natlab-mappen** (ikke selve mappen) inn i vinduet. Trykk **Commit changes**.
4. Gå til **Settings → Pages**. Under «Branch» velger du **main** og mappen **/ (root)**. Trykk **Save**.
5. Vent 1–2 minutter. Adressen til appen blir `https://BRUKERNAVN.github.io/natlab/`. Den vises øverst på Pages-siden.

**Senere endringer:** Åpne filen på github.com, trykk på blyanten (✏️ «Edit this file»), gjør endringen og trykk **Commit changes**. Siden oppdateres av seg selv etter et minutt eller to.

> GitHub Pro (gratis for lærere via GitHub Education) trengs bare hvis du vil ha et **privat** repository med Pages.

## 3. Slik er mappene organisert

```
natlab/
├── index.html              ← siden som åpnes. Her står listen over filer som lastes.
├── content/                ← ALT INNHOLD (det er her du jobber)
│   ├── ui.js               ← knappetekster og menyer (bokmål + engelsk)
│   ├── temaer.js           ← temaene på forsiden («Kommer snart» osv.)
│   ├── personvern.js       ← teksten på personvernsiden
│   └── celler/             ← temaet «Celler og virus»
│       ├── tema.js         ← tittel, størrelsesskala, øvingsoppgaver, quizkategorier
│       ├── maal.js         ← LÆRINGSMÅLENE  ← endre denne!
│       ├── dyrecelle.js    ← artikkel + innstillinger for dyrecellen
│       ├── plantecelle.js
│       ├── bakterie.js
│       ├── virus.js
│       ├── sammenligning.js
│       ├── strukturer.js   ← alle celledelene (navn, jobb, «Visste du?», farge)
│       ├── kilder.js       ← alle kilder, videoer og bilder (med lisens)
│       ├── ordliste.js     ← fagord på bokmål og engelsk
│       ├── quiz.js         ← quizspørsmålene
│       ├── diagrammer.js   ← tegningene (kode – trenger sjelden endring)
│       └── bilder/         ← fotografier (.webp)
├── assets/                 ← selve appen (kode, utseende, skrift, logo)
│   ├── css/natlab.css      ← farger og utseende
│   ├── js/                 ← programkoden
│   ├── fonts/              ← skrifttyper (med lisensfiler)
│   └── img/logo.svg        ← logoen
├── README.md               ← denne filen
├── CREDITS.md              ← bilder, skrift og kilder med lisens
├── CONTENT-REVIEW.md       ← fakta læreren bør dobbeltsjekke
└── LINKS-TO-VERIFY.md      ← alle lenker, til sjekking
```

**Tommelfingerregel:** Du trenger bare å endre filer i `content/`.

## 4. Endre tekst

All tekst står to ganger – på bokmål (`nb`) og engelsk (`en`):

```js
what: { nb: 'En tynn, myk hinne …', en: 'A thin, flexible skin …' },
```

Regler som er lette å glemme:

- Teksten står mellom **enkle fnutter** `'…'`. Skal du skrive en apostrof inne i teksten, bruk `’` (typografisk apostrof) i stedet for `'`.
- Hver linje i en liste slutter med **komma**.
- `**ord**` blir **uthevet** (gul markør) i appen.
- `[[cellulose]]` lager et fagord eleven kan trykke på for å få en forklaring. Ordet må finnes i `ordliste.js`. Skal teksten som vises være en annen, skriv `[[cellulose|celluloseveggen]]`.

Hvis appen blir helt tom etter en endring, er det nesten alltid et komma eller en fnutt som mangler (se [Feilsøking](#12-feilsøking)).

## 5. Endre læringsmålene

Åpne `content/celler/maal.js`. Hvert mål ser slik ut:

```js
{ text: { nb: 'Jeg kan forklare hva som skjer i **fotosyntesen**.', en: 'I can explain what happens in **photosynthesis**.' }, link: '#celler-plantecelle-les' },
```

- Endre teksten, eller kopier en hel linje for å lage et nytt mål.
- `link` er siden målet viser til (kan fjernes). Adressene står i tabellen under.
- Legg til `level: 'deeper'` for å merke målet «Gå dypere».
- Målene vises på siden **Læringsmål** og øverst på temasiden.

| Side | Adresse (`link`) |
|---|---|
| Temasiden | `#celler` |
| Dyrecellen – modell / artikkel | `#celler-dyrecelle` / `#celler-dyrecelle-les` |
| Plantecellen | `#celler-plantecelle` / `#celler-plantecelle-les` |
| Bakterien | `#celler-bakterie` / `#celler-bakterie-les` |
| Virus | `#celler-virus` / `#celler-virus-les` |
| Sammenligning | `#celler-sammenlign` |
| Størrelser | `#celler-storrelse` |
| Øving / quiz | `#celler-ov` / `#celler-quiz` |
| En bestemt del i modellen | `#celler-dyrecelle-del-mitokondrie` |

## 6. Legge til et quizspørsmål

Åpne `content/celler/quiz.js` og kopier en mal inn i riktig kategori (`add('virus', [ … ])` osv.):

**Flervalg** (answer = nummeret på riktig svar, og 0 er det første):
```js
{ type: 'mc', q: { nb: 'Spørsmål?', en: 'Question?' },
  options: [{ nb: 'Svar A', en: 'Answer A' }, { nb: 'Svar B', en: 'Answer B' }, { nb: 'Svar C', en: 'Answer C' }], answer: 1,
  explain: { nb: 'Forklaring.', en: 'Explanation.' } },
```

**Sant/usant:**
```js
{ type: 'tf', q: { nb: 'Påstand.', en: 'Statement.' }, answer: false,
  explain: { nb: 'Forklaring.', en: 'Explanation.' } },
```

**Flere riktige** (answer er en liste):
```js
{ type: 'multi', q: { nb: '…', en: '…' }, options: [ … ], answer: [0, 2], explain: { nb: '…', en: '…' } },
```

**Klikk i modellen** (diagram = `dyrecelle`, `plantecelle`, `bakterie`, `influensa`, `bakteriofag` eller `meslinger`; answer = id fra `strukturer.js`):
```js
{ type: 'hotspot', diagram: 'plantecelle', answer: 'kloroplast', q: { nb: 'Klikk på kloroplastene.', en: 'Click on the chloroplasts.' },
  explain: { nb: '…', en: '…' } },
```

Legg til `level: 'deeper'` for spørsmål på «Gå dypere»-nivå.

## 7. Legge til en lenke eller video

1. Åpne `content/celler/kilder.js` og legg til en linje i `T.sources`:
   ```js
   'yt-min-video': { title: 'Tittelen på videoen', publisher: 'Kanalnavn (YouTube)', url: 'https://www.youtube.com/watch?v=…', type: 'video', lang: 'nb' },
   ```
   - `type`: `'video'` eller `'artikkel'`
   - `lang`: `'nb'`, `'en'` eller `'da'`
   - Lenker til **Aunivers** og andre sider med innlogging: legg til `login: true`. Da får lenken merket «Krever innlogging».
2. Vis lenken under «Lær mer»: legg id-en (`'yt-min-video'`) til i listen `resources: [ … ]` nederst i artikkelfilen (f.eks. `virus.js`).
3. Bruke den som kilde i teksten: legg den til i `src: [ … ]` på et avsnitt. Da får avsnittet et lite nummer og kilden kommer med i kildelisten.

Videoer vises som lenker som åpnes i ny fane. NatLab bygger ikke inn YouTube, slik at ingenting lastes fra Google før eleven selv klikker.

## 8. Legge til et bilde

1. Bruk egne bilder, eller bilder med fri lisens (f.eks. fra commons.wikimedia.org). Ta aldri bilder fra læreboka eller Aunivers.
2. Gjør bildet rundt 1000 piksler bredt, og lagre det som `.webp` eller `.jpg` i `content/celler/bilder/`.
3. Legg det inn i `T.media` i `kilder.js`:
   ```js
   minlok: {
     file: 'content/celler/bilder/minlok.webp', width: 1000, height: 750,
     title: 'Løkceller fra 9B', author: 'Naturfaglæreren', license: 'Fri bruk i undervisning', licenseUrl: '',
     source: 'Eget bilde', url: '',
     alt: { nb: 'Beskrivelse av bildet for blinde og svaksynte.', en: 'Description of the picture.' }
   },
   ```
4. Sett bildet inn i en artikkel med `{ photo: 'minlok', caption: { nb: 'Bildetekst', en: 'Caption' } },`

Bilder av elever: ikke bruk bilder der elever kan kjennes igjen.

## 9. Byggeklosser i artiklene

Artiklene (f.eks. `plantecelle.js`) består av `sections`, og hver seksjon har en liste med `blocks`. Dette er byggeklossene:

| Byggekloss | Hva det blir | Eksempel |
|---|---|---|
| `{ p: {nb,en}, src: [...] }` | Vanlig avsnitt (med kilde) | `{ p: { nb: '…', en: '…' }, src: ['snl-celle'] }` |
| `{ h3: {nb,en} }` | Mellomtittel | |
| `{ list: [ {nb,en}, … ] }` | Punktliste | |
| `{ fact: {nb,en} }` | Gul boks «Visste du?» | |
| `{ myth: {nb,en}, truth: {nb,en} }` | Rød boks «Vanlig misforståelse» | |
| `{ model: {nb,en} }` | Boks «Hva modellen ikke viser» | |
| `{ history: {nb,en} }` | Boks «Fra forskningens historie» | |
| `{ photo: 'id', caption: {nb,en} }` | Fotografi med bildetekst og lisens | |
| `{ photos: [ {photo, caption}, … ] }` | To bilder ved siden av hverandre | |
| `{ equation: { name, words, formula } }` | Likning (f.eks. fotosyntese) | |
| `{ check: { q, options, answer, explain } }` | «Sjekk deg selv»-spørsmål | |
| `{ explain: {nb,en} }` | «Forklar med egne ord» | |
| `{ discuss: {nb,en} }` | «Diskuter med en venn» | |
| `{ deeper: { title, blocks: [ … ] } }` | Sammenleggbar «Gå dypere»-boks | |
| `{ table: { head: [...], rows: [[...]] } }` | Tabell | |
| `{ grid: ['cellemembran', …] }` | «Hvem har hva?»-tabell laget fra `strukturer.js` | |
| `{ steps: { figure, steps: [...] } }` | Trinnvis figur (brukes for virussyklusen) | |
| `{ diagram: 'plantecelle' }` | Liten tegning (ikke klikkbar) | |

I tillegg har hver artikkel `goals` (vises øverst), `keypoints` («Viktigst å huske») og `resources` («Lær mer»).

## 10. Legge til et helt nytt tema

Eksempel: temaet «Universet».

1. **Kopier mappen** `content/celler` og kall kopien `content/universet`.
2. Øverst i hver fil i den nye mappen: bytt `NatLab.topic('celler')` til `NatLab.topic('universet')`.
3. **Skriv nytt innhold:** tittel i `tema.js`, læringsmål i `maal.js`, artikler, ordliste, quiz og kilder. Slett det du ikke trenger. Har temaet ingen «prøver» (organismer), kan artiklene legges inn som `T.organisms` likevel – de vises da som kort på temasiden.
4. **Tegninger:** Klikkbare tegninger lages i `diagrammer.js` som SVG-kode. Hver del som skal kunne klikkes, legges i en gruppe `<g data-part="id">`, og id-en må finnes i `strukturer.js`. (Dette er den mest tekniske delen – be gjerne om hjelp.)
5. **Last inn filene:** Åpne `index.html` og legg til en `<script>`-linje for hver ny fil der det står «Nytt tema?».
6. **Vis temaet på forsiden:** I `content/temaer.js`, endre temaet til `status: 'klar'` og legg til `art: 'id-til-en-tegning'`.

Selve appen (`assets/js`) trenger du ikke endre. Utforskeren, artiklene, øvingsoppgavene, quizen, ordlisten og læringsmålene fungerer automatisk for nye temaer.

## 11. Slik fungerer appen

- NatLab er en **statisk nettside**: bare HTML, CSS og JavaScript. Det finnes ingen server eller database.
- `index.html` laster først kjernen (`assets/js/core.js`), så alt innholdet i `content/`, og til slutt appen (`assets/js/app.js` m.fl.).
- Adressen etter `#` bestemmer hvilken side som vises (f.eks. `#celler-virus-les`). Derfor fungerer lenker og «Tilbake»-knappen.
- All tekst lagres som `{ nb: '…', en: '…' }`, og appen viser språket eleven har valgt.
- Fargen på hver celledel bestemmes **ett sted** (`strukturer.js`) og brukes i tegninger, lister, tabeller og oppgaver.
- **Opplesing** bruker stemmen som finnes i nettleseren/enheten (Web Speech API). Mangler maskinen norsk stemme, får eleven beskjed om hvordan den legges til.
- Skrifttypene ligger i `assets/fonts`, slik at ingenting lastes fra Google.

## 12. Feilsøking

| Problem | Løsning |
|---|---|
| Siden er helt tom | Det er en skrivefeil i en fil du nettopp endret: et komma eller en fnutt mangler. Trykk F12 → «Console» i nettleseren. Der står filnavn og linjenummer. |
| En tekst står på norsk selv om engelsk er valgt | Den engelske teksten mangler. Åpne appen med `?dev` for å se hvilke. |
| Et fagord vises ikke som klikkbart | Id-en i `[[…]]` finnes ikke i `ordliste.js`. |
| Opplesingen bruker feil stemme | Legg til norsk tale på maskinen (se Innstillinger i appen). |
| Endringen vises ikke på GitHub Pages | Vent 1–2 minutter og trykk Ctrl+F5 (tvungen oppdatering). |
