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
