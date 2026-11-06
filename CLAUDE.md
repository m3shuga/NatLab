# CLAUDE.md – Prosjekthukommelse for NatLab

> Denne filen leses automatisk av Claude Code i starten av hver ny chat i prosjektet.
> Den oppsummerer alt som er gjort, alle beslutninger og hvordan koden er bygd opp.
> **Oppdater filen** når noe viktig endres (nye temaer, nye beslutninger, ny arbeidsmåte).

Sist oppdatert: 6. november 2026 (etter versjon 1.1 – «Økologi og økosystemer»).

---

## 1. Hva er NatLab?

Et interaktivt, tospråklig (bokmål + engelsk) oppslagsverk i naturfag for **8.–10. trinn**, laget for én lærer og lærerens klasser. Statisk nettside på **GitHub Pages**.

- **Repo:** `m3shuga/NatLab` (public). Live: `https://m3shuga.github.io/NatLab/` (sjekk nøyaktig adresse under Settings → Pages).
- **Forhåndsvisning (Claude-artefakt, privat for læreren):** https://claude.ai/artifact/HbuMhfWj8N6svDi3G9X7kF
  Oppdateres med Artifact-verktøyet (`url` = lenken over; les den først med `action: "read"`). Artefakten trenger en egen `index.html` *uten* `<!doctype>/<html>/<head>/<body>` (kun `<title>`, `<meta name="claude:viewport-fit-sides" content="cover">`, `<link rel="stylesheet" href="assets/css/natlab.css">` + innholdet i `<body>`), og alle andre filer sendes via `files`.
- **Navn:** «NatLab» er et midlertidig navn.
- **Utgivelser:** v1.0 = «Celler og virus». v1.1 = «Økologi og økosystemer» + rettelser (release note skrevet på norsk).

## 2. Om læreren og klassen (viktig for alle valg)

- Lærer i naturfag, ungdomsskole **ca. 1 time sør for Oslo (Østlandet)**. **Ikke nevn skolens navn noe sted.**
- Lærebok: **Eureka! 8, 9 og 10** + **Aunivers** (Aschehoug) digitalt. Fagbegreper skal samsvare med Eureka! – **lærerens begrepsliste er ikke mottatt ennå**.
- Læreren vil laste opp **en PDF med alle temaene** senere.
- Elevene bruker **MacBook (ingen berøringsskjerm), Windows-laptoper (noen med berøring) og mobil**. Alt må fungere med mus, berøring og tastatur.
- Læreren er en motivert nybegynner med GitHub: forklar steg for steg, på enkelt språk. Hen laster opp filer via github.com (dra og slipp), ikke git.
- Læreren skriver ofte på engelsk, noen ganger på norsk. Svar på samme språk som læreren skriver. Elevtekster er alltid bokmål + engelsk.

## 3. Faste beslutninger

- **Språk:** bokmål (standard) + engelsk; bytte på hver side. Alle tekster `{ nb: '…', en: '…' }`.
- **Personvern/GDPR:** ingen innlogging, ingen sporing, ingen cookies, ingen tredjeparts-forespørsler (fonter er selvhostet, YouTube er bare lenker – aldri innebygd). Bare innstillinger lagres i `localStorage`. Quiz/øving/feltskjema lagres ikke.
- **Lesestøtte:** opplesing (Web Speech API, `nb-NO`), OpenDyslexic som valg, tekststørrelse, linjeavstand, lyst/mørkt tema.
- **Nivåer:** «Grunnleggende» og «Gå dypere». Vis aldri en «Gå dypere»-kontroll som ikke endrer noe.
- **Ingen gamification** (poeng/merker). Quiz er egenøving.
- **Kilder:** hver artikkel har nummererte kildehenvisninger og kildeliste. Fakta sjekkes mot Store norske leksikon (snl.no / sml.snl.no), NDLA, FHI. **Aldri finn opp lenker** – sjekk alle URL-er (YouTube via oEmbed).
- **Bilder:** egne SVG-tegninger for alt klikkbart; ekte foto kun med fri lisens (Wikimedia Commons), med opphav og lisens i `media` og `CREDITS.md`. Aldri bilder/tekst fra Eureka!/Aunivers (opphavsrett).
- **Læringsmål:** fra LK20 (Læreplan i naturfag NAT01-05, gjelder fra 01.08.2026), etter 10. trinn. Læreren redigerer `content/<tema>/maal.js` selv.
- **Design:** «objektglass/mikroskop»-uttrykk. Farger fra fargestoffer (metylenblått `--brand`, eosin `--accent`, jod `--amber`), mørk modus = «mørkefelt». Fonter: Bricolage Grotesque (overskrifter), Atkinson Hyperlegible (brødtekst), Atkinson Hyperlegible Mono (etiketter). Profesjonelt, men ikke sterilt. Ingen emoji i elevtekst (opplesing leser dem).
- **Kort-rutenett:** 4 / 2 / 1 kolonner – aldri ett kort alene på en rad.

## 4. Arkitektur (ingen byggesteg – vanilla JS, klassiske `<script>`-tagger)

`index.html` laster i denne rekkefølgen: `assets/js/core.js` → `content/ui.js`, `content/temaer.js`, `content/personvern.js` → alle filer per tema → appen (`readaloud, diagram, article, activities, activities-extra, foodweb, quiz, scale, pages, app`). Fungerer også ved dobbeltklikk på `index.html` (file://).

### Kode (`assets/js/`)
| Fil | Ansvar |
|---|---|
| `core.js` | `NatLab`-navnerom, innstillinger, `N.t()` (språk), `N.u()` (UI-tekst), `N.fmt()` (`**uthev**`, `[[ordliste-id|tekst]]`), ikoner |
| `diagram.js` | `N.renderDiagram`, `N.wireDiagram`, `N.explorer` (utforsker med nivå, nummer, sammenligning), `N.structurePanel` |
| `article.js` | `N.renderArticle` – byggeklosser: `p, h3, list, keypoints, fact, myth/truth, model, history, photo(s), equation, check, explain, discuss, deeper, steps, table, grid, diagram, link, adapt` + kildenummerering |
| `activities.js` | `label` (merk), `match` (koble), `sort` (hvem har hva), `order` (rekkefølge) |
| `activities-extra.js` | `bins` (grupper), `pairs` (begrep↔forklaring), `fieldSheet` (feltskjema) |
| `foodweb.js` | interaktivt næringsnett (utforsk / hva skjer hvis / energipyramide), `N.webEffects`, aktiviteten `webbuild` |
| `quiz.js` | typer `mc`, `tf`, `multi`, `hotspot` (svar kan være liste) |
| `scale.js` | «Hvor små er de?» (celler) |
| `pages.js` | alle sider: forside, tema, kapittel/organisme, `custom` (artikkel / `foodweb` / `fieldwork`), øving, quiz, mål, ordliste, personvern, kilder |
| `app.js` | ruter (hash), topptekst, innstillinger, ordforklaring, opplesingsspiller |

### Adresser (hash-ruter)
`#<tema>` · `#<tema>-<kapittel>` (utforsk) · `#<tema>-<kapittel>-les` · `#<tema>-<kapittel>-del-<del-id>` · `#<tema>-<side>` (fra `T.pages`) · `#<tema>-ov` · `#<tema>-ov-<type>-<id>` · `#<tema>-quiz` · `#mal` · `#ordliste` · `#personvern` · `#kilder`.
**ID-er kan ikke inneholde bindestrek** (bindestrek skiller delene i adressen). Kapittel-id og side-id i samme tema må være forskjellige.

### Innholdsmodell per tema (`content/<tema>/`)
`NatLab.topic('<id>')` = `T` med: `title, lead, organisms` (kapitler/prøver: `code, title, sub, size?, lead, art, diagrams?, modelNames, intro, extraTabs, practiceHref, page{goals, keypoints, sections[{id,title,blocks}], resources}`), `structures` (alt som kan klikkes: `name, color, level, what, does, analogy?, fact, foundIn?, tag?, src`), `sources`, `media`, `goals{intro, groups[{title, items[{text, link, level}]}], official[]}`, `glossary`, `quiz`, `quizSets`, `practice{merk, koble, sort, order, grupper, par, nett}`, `pages{…}`, `tools`, `featured`, valgfritt `cardLabel, cardCount, cardsTitle, cardsLead, orgNames, panelLabels, roles, adaptTypes, webs, scale`.
Nytt tema = ny mappe + `<script>`-linjer i `index.html` + oppføring i `content/temaer.js` (`status: 'klar'`, `art`). Ingen endring i `assets/js` skal være nødvendig.

### CSS
Én fil: `assets/css/natlab.css`. Alle farger som tokens på `:root` + to mørk-modus-blokker (`prefers-color-scheme` og `[data-theme="dark"]`). Kjente fallgruver som er løst:
- `[hidden]{display:none!important}` må stå (ellers vises skjulte elementer).
- `.sr-only` inni elementer med `overflow` krever `position: relative` på beholderen (ellers horisontal scroll).
- Grid-barn trenger `min-width:0` og `minmax(0,1fr)` (ellers sprenger tabeller/SVG layouten på mobil).
- `text-transform: uppercase` gjør «µm» om til «MM» – bruk klassen `.nu` på mål.

## 5. Status for innholdet

### Tema 1: Celler og virus (`content/celler/`)
Dyrecelle, plantecelle, bakterie, virus (influensa, bakteriofag, meslinger) – klikkbare modeller, artikler, sammenligning, størrelsesskala, 80 quizspørsmål, øving (merk, koble, hvem har hva, rekkefølge), 7 fotografier.

### Tema 2: Økologi og økosystemer (`content/okologi/`)
Hovedeksempel skogen på Østlandet, sammenlignet med Norskehavet. Fem deler (id-er): `okosystemet`, `tilpasning`, `kjeder`, `energi`, `mennesket`. Sider: `naeringsnett` (type `foodweb`), `feltarbeid` (type `fieldwork`). Scener `skog`/`hav`, nett `skognett`/`havnett`, 30+ artsikoner (`tegninger.js`), 60 quizspørsmål, øving (`grupper`, `par`, `nett`, `order`, `merk`). Bare 3 foto (elg, gaupe, ekorn) – Wikimedia sperret flere.

### Kommende (vises som «Kommer snart»)
`universet`, `fysikk` (Fysikk og energi), `labarbeid`.

## 6. Åpne punkter / ideer til neste steg
- [ ] Få Eureka!-begrepslisten fra læreren og samkjør begreper (se `CONTENT-REVIEW.md`).
- [ ] Læreren sender PDF med alle temaene → planlegg neste tema.
- [ ] Flere fotografier i økologi (skog, hare, sopp, spekkhogger, sild, raudåte, lunde, tareskog).
- [ ] Eventuelt engelsk release note / release note for v1.0.
- [ ] Læreren skal gå gjennom `CONTENT-REVIEW.md` og `LINKS-TO-VERIFY.md`.
- [ ] Opplesing er bare testet i hodeløs nettleser – må testes på ekte MacBook/Windows/mobil.

## 7. Arbeidsmåte og testing

1. **Start lokal server:** `cd <repo> && python3 -m http.server 8765 --bind 127.0.0.1` (i bakgrunnen).
2. **Syntakssjekk:** `for f in assets/js/*.js content/*.js content/*/*.js; do node --check "$f"; done`
3. **Nettlesertester** (Playwright er forhåndsinstallert i skymiljøet): se `tools/tests/README.md`. De sjekker alle sider på 1440 px og 390 px, begge språk: konsollfeil, horisontal scroll, manglende oversettelser, eksterne forespørsler, interaksjoner (quiz, aktiviteter, «Gå dypere», næringsnett).
4. **Se på skjermbilder** etter visuelle endringer (bruk `deviceScaleFactor: 1`, sett sammen flere til ett ark med Pillow for å spare plass).
5. **Faktasjekk** mot SNL/NDLA før ny tekst; legg usikre punkter i `CONTENT-REVIEW.md`; sjekk lenker og legg dem i `LINKS-TO-VERIFY.md`.
6. **Leveranse:** commit med tydelig melding, lag `natlab.zip` (uten `.git`), oppdater artefakten, og gi læreren en kort liste over hvilke filer som er endret + hvordan de lastes opp på GitHub.

### Nettverk og verktøy
- Miljøet «Default» tillater: `commons.wikimedia.org`, `upload.wikimedia.org`, `snl.no`, `sml.snl.no`, `ndla.no`, `www.fhi.no`, `www.youtube.com` (+ pakkeregistre). Andre verter krever godkjenning.
- **Wikimedia Commons** gir ofte 429 (for mange forespørsler). Søke-API-et er nesten ubrukelig; direkte nedlasting av miniatyrbilder fra `upload.wikimedia.org/wikipedia/commons/thumb/<md5[0]>/<md5[:2]>/<fil>/1280px-<fil>` (eller 960px) med ~40 s pause fungerer best. Lisens/opphav må registreres.
- NDLA-søk: `https://ndla.no/search?query=…` (lenkene ligger som `"url":"/r/…"` i HTML-en).
- YouTube-lenker sjekkes med `https://www.youtube.com/oembed?format=json&url=…`.

## 8. Viktige filer for læreren
`README.md` (norsk brukerveiledning), `CONTENT-REVIEW.md` (faktasjekk), `LINKS-TO-VERIFY.md` (lenkesjekk), `CREDITS.md` (bilder/lisenser), `content/<tema>/maal.js` (læringsmål).
