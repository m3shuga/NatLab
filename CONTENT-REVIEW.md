# Faktasjekk for læreren (CONTENT-REVIEW)

Innholdet i NatLab er skrevet med kilder, og de viktigste faktaene er sjekket mot Store norske leksikon / Store medisinske leksikon og Folkehelseinstituttet (6. november 2026). Punktene under er ting du bør se ekstra på. Enten er de **ikke sjekket direkte mot kilden som oppgis**, de er **forenklinger**, eller de **kan endre seg**.

## 1. Begreper som bør samkjøres med Eureka! / Aunivers

NatLab bruker vanlige norske skolebegreper. Sjekk at de samsvarer med læreboka, og endre i `strukturer.js` / `ordliste.js` om nødvendig:

- [ ] «Endoplasmatisk **nettverk** (ER)». Noen bøker bruker «endoplasmatisk retikulum».
- [ ] «Vakuole» / «cellesaftrom»
- [ ] «Proteinkappe (kapsid)» og «lipidhylster (virushylster)»
- [ ] «Overflateproteiner (piggproteiner)»
- [ ] «Pili (fimbrier)», «kapsel (slimlag)», «flagell»
- [ ] «Arvestoff» brukt om både DNA og RNA
- [ ] Hvilke deler som regnes som «grunnleggende» og «gå dypere» (`level` i `strukturer.js`)

## 2. Tall og fakta uten direkte kildehenvisning

| Påstand | Hvor | Kommentar |
|---|---|---|
| Kroppen har rundt 30 000 milliarder celler, over 200 celletyper | dyrecelle.js | Vanlige anslag i lærebøker. Tallene varierer litt mellom kilder. |
| Cellemembranen er ca. 10 000 ganger tynnere enn et papirark | strukturer.js | Regnet ut: membran ca. 8–10 nm, papir ca. 0,1 mm. |
| DNA-et fra én menneskecelle er ca. 2 meter langt | strukturer.js | Vanlig oppgitt tall. |
| E. coli har ca. 4000 gener, mennesket ca. 20 000 | strukturer.js | Avrundede tall. |
| Golgiapparatet beskrevet av Camillo Golgi i 1898 | strukturer.js | Ikke funnet i SNL-artikkelen som oppgis. |
| Leverceller har mye glatt ER som bryter ned giftstoffer | strukturer.js | Ikke sjekket mot kilden. |
| Nerveceller kan ha utløpere over én meter | dyrecelle.js | Gjelder f.eks. nerver fra ryggen til tærne. |
| Ribosomer er ca. 0,02–0,03 µm | tema.js (rekkefølge-oppgave) | Vanlig oppgitt størrelse. |
| Størrelser: hårstrå ca. 70 µm, plantecelle 10–100 µm, dyrecelle 10–30 µm, bakterie 1–5 µm, virus 20–300 nm, meslingvirus 100–300 nm, bakteriofag ca. 200 nm | tema.js, artiklene | Typiske verdier. Bare influensavirus (80–120 nm) er sjekket mot SML. |
| Noen bakterier kan dele seg ca. hvert 20. minutt | bakterie.js | Gjelder f.eks. E. coli under ideelle forhold. |
| Van Leeuwenhoek så bakterier på 1670-tallet. Pasteur og Koch viste nesten 200 år senere at bakterier gir sykdom. | bakterie.js | SNL sier «på 1600-tallet». Årstallet 1670 er vanlig oppgitt. |
| Virus oppdaget på 1890-tallet (tobakksmosaikk). Sett først i elektronmikroskop på 1930-tallet. | virus.js | Elektronmikroskop på 1930-tallet er sjekket. Årstallet for oppdagelsen er ikke sjekket i teksten. |
| Mitokondrier stammer fra bakterier tatt opp «for over en milliard år siden» | strukturer.js | Grovt anslag. |
| Såpe ødelegger virus med lipidhylster | strukturer.js, quiz | Allment kjent. Ikke i oppgitt kilde. |
| Mange antibiotika angriper bakterienes cellevegg | bakterie.js, virus.js | Ribosom-delen er sjekket (SML). Cellevegg-delen gjelder f.eks. penicillin. |

## 3. Ting som kan endre seg

- [ ] **MMR-vaksinen** gis ved 15 måneder og i 6. trinn (FHI, sjekket 6.11.2026). Barnevaksinasjonsprogrammet endres av og til. Sjekk hvert skoleår.
- [ ] Tallet på dødsfall av resistente bakterier i Europa (33 000 per år, fra SML).

## 4. Forenklinger i modellene

Modellene sier selv hva de ikke viser (boksen «Hva modellen ikke viser»). Se spesielt på:

- **Influensa- og meslingvirus:** «Proteinkappe» er brukt om laget av matriksprotein innenfor hylsteret. Disse virusene har egentlig ikke et kapsid av samme type som f.eks. bakteriofagen. Dette er forklart i modellteksten.
- **Lysosomer i planteceller:** NatLab sier at planteceller ikke har lysosomer, og at vakuolen gjør mye av den samme jobben. Noen kilder beskriver «lysosomlignende vakuoler» i planter.
- **Flagell hos dyreceller** er merket «noen» (sædceller). Den er bygd annerledes enn bakterienes flagell.

## 5. Engelsk oversettelse av læreplanen

Kompetansemålene på engelsk (i `maal.js`) er **vår egen oversettelse**. Den norske teksten er den offisielle. Udir har en offisiell engelsk versjon du kan bruke i stedet om du ønsker.

---

# Økologi og økosystemer

De fleste faktaene er sjekket mot Store norske leksikon (artsartiklene, «næringspyramide», «energi», «økosystem», «truede arter», «bioakkumulering» m.fl.) og NDLA («Tradisjonell kunnskap») 6. november 2026. Se ekstra på dette:

## 1. Begreper
- [ ] Bruker Eureka! «primærkonsument/sekundærkonsument/toppredator» på samme måte? Toppredator er i NatLab satt som egen rolle (farge), selv om gaupa og ulven er på trofisk nivå 3.
- [ ] «Trofisk nivå» og «næringsnivå» brukes som synonymer. «Habitat» og «leveområde» likeså.
- [ ] De tre tilpasningstypene heter i NatLab «kropp og utseende», «kroppens funksjoner» og «atferd». Endre i `okologi/tema.js` (`adaptTypes`) hvis boka bruker andre ord (f.eks. «fysiologisk»/«morfologisk»).

## 2. Næringsnettene (forenklet!)
Pilene bygger på hva artene spiser ifølge SNL. Noen er forenklet eller ikke direkte nevnt i kilden:
- [ ] Krill → sild (silda spiser også krill; ikke nevnt i SNL-artikkelen om sild).
- [ ] Blåbærlyng → larver, rådyr, elg, hare (planteeternes meny er forenklet).
- [ ] Rødrev har ingen fiende i modellen (gaupe kan ta rev, men det er ikke tatt med).
- [ ] Taskekrabben har ingen fiende i modellen.
- [ ] «Hva skjer hvis …?» er en enkel regelbasert modell (to steg). Den viser mulige følger, ikke sikre svar.

## 3. Tall og fakta uten direkte kildehenvisning
| Påstand | Hvor | Kommentar |
|---|---|---|
| Grana sin smale form gjør at snøen glir av | arter.js, del2 | Vanlig forklaring, ikke i SNL-artikkelen. |
| Lauvtrær feller bladene for å tape mindre vann / tåle kulde | arter.js | Vanlig forklaring. |
| Selens spekklag isolerer | arter.js, del2 | Allment kjent. |
| Hønsehaukens vinger og hale gjør at den manøvrerer mellom trær | arter.js | Allment kjent. |
| Dvale hos flaggermus som eksempel | del2 | SNL «dvale» nevner flaggermus. |
| Næringskjeder har sjelden mer enn 4–5 nivåer | del4 | SNL sier at energitapet setter en øvre grense; tallet 4–5 er vanlig i lærebøker. |
| Eksempelregning (10 000 kJ, 1 kg spekkhogger) | del4, quiz | Bruker 10 %-regelen slik SNL beskriver den. |
| Reindriftsutøvere har erfaring med beite, vær og snø | del5 | Generell beskrivelse; NDLA nevner reindrift som en del av tradisjonell kunnskap. |
| Attenborough har laget naturprogrammer i over 70 år | quiz | SNL: født 1926, BBC fra tidlig 1950-tall. |

## 4. Ting som kan endre seg
- [ ] Ulvesonen og rovviltpolitikken (Stortinget kan endre den).
- [ ] Norsk rødliste for arter (ny utgave kommer etter 2021-utgaven).
- [ ] Rødlistestatus for gaupe (SNL: EN – sterkt truet).

## 5. Bilder
Bare tre fotografier er lagt inn (elg, gaupe, ekorn) fordi Wikimedia Commons begrenset nedlastingene. Gaupebildet er tatt i en dyrepark. Flere bilder (skog, hare, sopp, spekkhogger, sild) kan legges til – se README del 8.

# Historien om Jorda

Faktaene er sjekket mot Store norske leksikon (snl.no). Punktene under bør læreren se på.

## 1. Begreper som bør samkjøres med Eureka!
- [ ] **Jordskorpe/jordskorpa**, **havskorpe** (SNL: havbunnsskorpe) og **kontinentalskorpe**.
- [ ] **Divergent / konvergent / transform** plategrense (SNL nevner også konstruktiv / destruktiv / konservativ).
- [ ] **Magmatiske** (størkningsbergarter), **sedimentære** (avsetningsbergarter) og **metamorfe** (omdannede) bergarter – hvilke navn bruker Eureka!?
- [ ] **Midthavsrygg** eller **spredningsrygg**, **dyphavsgrop**, **øybue**, **riftdal**.
- [ ] **Varm flekk** (engelsk «hotspot») – Eureka! kan bruke et annet ord.

## 2. Læreplanen
- [ ] **Kompetansemålet om geologi mangler.** Jeg fikk ikke åpnet udir.no. I `content/jorda/maal.js` står bare de generelle målene om modeller og hypoteser. Legg til det kompetansemålet i NAT01-05 som handler om Jordas oppbygning/platetektonikk.

## 3. Fakta som er forenklet eller ikke har direkte kilde
- [ ] «Slik ble Jorda til» (del 2): Stegene (støvsky, kollisjoner, tunge stoffer synker til kjernen, skorpe og hav) er en vanlig skoleforklaring. SNL sier at Jorda oppstod av en gass- og støvsky for 4,5–5 milliarder år siden, og «nærmere 4,6 milliarder år» (Jordens geologi). Detaljene om kjernedannelse og hav er ikke hentet direkte fra SNL.
- [ ] «Jordas historie som ett døgn» (del 1, Gå dypere): klokkeslettene er regnet ut av meg fra tallene i SNL.
- [ ] Mesosaurus: SNL (mesosaurer) sier permtiden; jeg har skrevet «for mellom 300 og 250 millioner år siden».
- [ ] Cynognathus er **ikke** tatt med, fordi jeg ikke fant en norsk kilde.
- [ ] Vulkanen Erebus i Antarktis er forklart som et område der skorpa er strukket og varm mantel stiger opp – dette er ikke fra SNL. Vurder å fjerne den.
- [ ] Fuji, Mount St. Helens, Merapi og Popocatépetl er forklart med plategrensene i nærheten (fra PB2002-dataene), men har ikke egne SNL-kilder.
- [ ] Jordskjelvet i San Francisco 1906: SNL oppgir ulike dødstall (700 i tabellen «store og kjente jordskjelv», rundt 3000 i artikkelen om San Andreas-forkastningen). Derfor står det ikke noe tall i NatLab.

## 4. Forenklinger i modellene og kartene
- [ ] **Tidskartet** er en forenklet modell: Afrika holdes fast, kontinentene flyttes ved å rotere dem på kula, og tidspunktene er omtrentlige (fra SNL: Pangea, Gondwanaland, Himalayas geologi, Norges geologi). Det står i bildeteksten.
- [ ] **Bevissonene** (fossiler, isspor, fjellkjeder) er tegnet som omtrentlige områder, ikke eksakte funnsteder.
- [ ] **Mantelmodellen** er animert mange millioner ganger raskere enn i virkeligheten, og strømmene er tegnet som to pene ringer. Det står i artikkelen og i modellen.
- [ ] I **plategrensekartet** er «havbunn mot havbunn» valgt automatisk når begge platene er havplater (ellers «havbunn mot kontinent»). Noen få grenser kan derfor få feil undertype.
- [ ] **Jordskjelvsonene** er tegnet som brede felt langs alle plategrensene (bredest der havbunn synker ned eller kontinenter kolliderer), ikke ut fra en jordskjelvdatabase.

## 5. Ting som kan endre seg
- [ ] Jordskjelvrekorder i norsk område (SNL nevner et skjelv med styrke 6,6 ved Jan Mayen i 2025).
