/* =====================================================================
   Klimaendringer – ALT SOM KAN KLIKKES PÅ I TEGNINGENE
   ---------------------------------------------------------------------
   Hver oppføring: name, color, what (hva er det?), does (hva skjer / hvorfor
   er det viktig?), analogy (sammenligning), fact (visste du at?), src.
   Tallene for karbon er fra FNs klimapanel (IPCC AR6, kap. 5) og er avrundet.
   ===================================================================== */
(function () {
  const o = (nb, en) => ({ nb: nb, en: en });
  NatLab.topic('klima').structures = {

    /* ================= Karbonkretsløpet ================= */
    atmosfare: {
      name: o('Atmosfæren', 'The atmosphere'), color: '#5fa8dc',
      what: o('Lufta rundt Jorda. Den består mest av nitrogen og oksygen, men også av litt **karbondioksid (CO₂)** – rundt 0,04 prosent – og andre **drivhusgasser**.', 'The air around the Earth. It is mostly nitrogen and oxygen, but also contains a little **carbon dioxide (CO₂)** – about 0.04 per cent – and other **greenhouse gases**.'),
      does: o('Atmosfæren er et av de store **karbonlagrene**. Karbon går hele tiden inn og ut av lufta: planter tar opp CO₂, og levende organismer, hav, vulkaner og forbrenning slipper det ut. Drivhusgassene i atmosfæren holder på varme, slik at Jorda er levelig.', 'The atmosphere is one of the big **carbon stores**. Carbon is constantly moving in and out of the air: plants take up CO₂, and living things, the ocean, volcanoes and burning release it. The greenhouse gases in the atmosphere hold on to heat, so that the Earth is habitable.'),
      analogy: o('Tenk på atmosfæren som en dyne rundt Jorda. Jo flere drivhusgasser, jo tykkere dyne.', 'Think of the atmosphere as a duvet around the Earth. The more greenhouse gases, the thicker the duvet.'),
      fact: o('CO₂-innholdet i lufta har økt fra rundt 280 ppm før industrien til over 420 ppm i dag. Så høyt har det ikke vært på minst 2 millioner år.', 'The CO₂ content of the air has risen from about 280 ppm before industry to over 420 ppm today. It has not been this high for at least 2 million years.'),
      src: ['snl-karbonkretslopet', 'ipcc-spm', 'noaa-co2']
    },
    fotosyntese: {
      name: o('Fotosyntese', 'Photosynthesis'), color: '#2e9e5b',
      what: o('Prosessen der planter, alger og noen bakterier bruker **energi fra sola** til å lage sukker (glukose) av **CO₂ og vann**. Oksygen blir et avfallsstoff.', 'The process in which plants, algae and some bacteria use **energy from the sun** to make sugar (glucose) from **CO₂ and water**. Oxygen is a waste product.'),
      does: o('Fotosyntesen henter karbon **ut av lufta** og bygger det inn i levende vev. Det er den største karbonstrømmen fra atmosfæren til land: ca. **140 milliarder tonn karbon i året**.', 'Photosynthesis takes carbon **out of the air** and builds it into living tissue. It is the largest flow of carbon from the atmosphere to the land: about **140 billion tonnes of carbon a year**.'),
      analogy: o('Fotosyntesen er som en fabrikk som bruker sollys som strøm, og CO₂ og vann som råvarer.', 'Photosynthesis is like a factory that uses sunlight as electricity, and CO₂ and water as raw materials.'),
      fact: o('Om sommeren tar plantene på den nordlige halvkule opp så mye CO₂ at målingene på Mauna Loa går litt ned. Om vinteren går de opp igjen. Derfor er Keeling-kurven sikksakk.', 'In summer the plants in the northern hemisphere take up so much CO₂ that the measurements at Mauna Loa go down a little. In winter they go up again. That is why the Keeling curve zigzags.'),
      src: ['snl-fotosyntese', 'snl-karbonkretslopet', 'ipcc-ch5']
    },
    planter: {
      name: o('Planter og skog', 'Plants and forests'), color: '#2f7d46',
      what: o('Trær, busker, gress og mose. Plantene er **produsenter**: De lager sin egen næring med fotosyntese.', 'Trees, shrubs, grass and moss. Plants are **producers**: they make their own food by photosynthesis.'),
      does: o('Plantene **lagrer karbon** i stammer, greiner, røtter og blader. Verdens vegetasjon inneholder rundt 450 milliarder tonn karbon. Plantene slipper også ut CO₂ igjen med celleånding.', 'Plants **store carbon** in trunks, branches, roots and leaves. The world’s vegetation contains about 450 billion tonnes of carbon. Plants also release CO₂ again through cellular respiration.'),
      fact: o('Omtrent en tredel av landarealet på Jorda er dekket av skog.', 'About a third of the Earth’s land area is covered by forest.'),
      src: ['snl-skog', 'snl-karbonkretslopet', 'ipcc-ch5']
    },
    celleanding: {
      name: o('Celleånding', 'Cellular respiration'), color: '#2e9e5b',
      what: o('Prosessen der celler bruker **oksygen** til å bryte ned sukker for å få **energi**. Det blir **CO₂ og vann** igjen.', 'The process in which cells use **oxygen** to break down sugar to get **energy**. **CO₂ and water** are left over.'),
      does: o('Alle levende organismer – planter, dyr, sopp og bakterier – har celleånding. Slik går karbonet **tilbake til lufta**. Celleånding og nedbrytning på land slipper ut omtrent like mye CO₂ som fotosyntesen tar opp.', 'All living things – plants, animals, fungi and bacteria – carry out cellular respiration. This is how carbon goes **back to the air**. Respiration and decomposition on land release about as much CO₂ as photosynthesis takes up.'),
      analogy: o('Celleånding er fotosyntese baklengs.', 'Cellular respiration is photosynthesis in reverse.'),
      fact: o('Lufta du puster inn, har rundt 0,04 prosent CO₂. Lufta du puster ut, har rundt 5 prosent.', 'The air you breathe in contains about 0.04 per cent CO₂. The air you breathe out contains about 5 per cent.'),
      src: ['snl-celleanding', 'snl-karbonkretslopet']
    },
    dyr: {
      name: o('Dyr (konsumenter)', 'Animals (consumers)'), color: '#6b4226',
      what: o('Dyr kan ikke lage sin egen næring. De får karbon ved å **spise** planter eller andre dyr.', 'Animals cannot make their own food. They get carbon by **eating** plants or other animals.'),
      does: o('Karbonet kan vandre gjennom flere ledd i en næringskjede. I hvert ledd slipper dyrene ut CO₂ med celleånding. Når dyrene dør, blir karbonet en del av jorda.', 'Carbon can travel through several links in a food chain. At each link the animals release CO₂ through respiration. When the animals die, the carbon becomes part of the soil.'),
      fact: o('En næringskjede har sjelden mer enn fire ledd.', 'A food chain rarely has more than four links.'),
      src: ['snl-karbonkretslopet']
    },
    spising: {
      name: o('Spising (næringskjeden)', 'Eating (the food chain)'), color: '#2e9e5b',
      what: o('Når et dyr spiser en plante, flytter karbonet fra planten til dyret.', 'When an animal eats a plant, the carbon moves from the plant to the animal.'),
      does: o('Karbonet i maten blir brukt til energi (og sluppet ut som CO₂) eller bygget inn i dyrets kropp.', 'The carbon in the food is used for energy (and released as CO₂) or built into the animal’s body.'),
      src: ['snl-karbonkretslopet']
    },
    dod: {
      name: o('Dødt materiale', 'Dead material'), color: '#9a6a32',
      what: o('Visne blader, døde planter, døde dyr og avføring.', 'Dead leaves, dead plants, dead animals and droppings.'),
      does: o('Det døde materialet bygger opp **organisk materiale** i jordsmonnet. Det er mat for nedbryterne.', 'The dead material builds up **organic matter** in the soil. It is food for the decomposers.'),
      src: ['snl-karbonkretslopet']
    },
    jord: {
      name: o('Jordsmonnet', 'The soil'), color: '#7a5533',
      what: o('Det øverste laget av bakken, med døde planterester, sopp, bakterier, mark og insekter.', 'The top layer of the ground, with dead plant remains, fungi, bacteria, worms and insects.'),
      does: o('Jorda er et **stort karbonlager** – den inneholder mye mer karbon enn all vegetasjonen. Når myr grøftes eller skog hogges, kan karbon som har vært lagret lenge, slippes ut som CO₂.', 'The soil is a **large carbon store** – it holds much more carbon than all the vegetation. When bogs are drained or forests are cut down, carbon that has been stored for a long time can be released as CO₂.'),
      fact: o('Myr kan lagre karbon i tusenvis av år, fordi nedbrytningen går svært langsomt når det er lite oksygen.', 'Bogs can store carbon for thousands of years, because decomposition is very slow when there is little oxygen.'),
      src: ['snl-karbonkretslopet', 'snl-myr', 'ipcc-ch5']
    },
    nedbrytning: {
      name: o('Nedbrytning', 'Decomposition'), color: '#2e9e5b',
      what: o('Sopp og bakterier (**nedbrytere**) spiser dødt materiale.', 'Fungi and bacteria (**decomposers**) eat dead material.'),
      does: o('Nedbryterne bruker det døde materialet til energi med celleånding, og karbonet går **tilbake til lufta** som CO₂. Uten nedbrytere ville skogen druknet i døde blader!', 'The decomposers use the dead material for energy through respiration, and the carbon goes **back to the air** as CO₂. Without decomposers the forest would be buried in dead leaves!'),
      src: ['snl-karbonkretslopet']
    },
    fossildannelse: {
      name: o('Dannelse av fossilt brensel', 'Formation of fossil fuels'), color: '#9a6a32',
      what: o('Rester av planter og alger som ble dekket av sand og leire for millioner av år siden, uten oksygen.', 'Remains of plants and algae that were covered by sand and clay millions of years ago, without oxygen.'),
      does: o('Under høyt trykk og høy temperatur ble restene sakte til **kull, olje og gass**. Det tar **millioner av år** – mye lenger enn det tar oss å brenne det opp.', 'Under high pressure and high temperature the remains slowly turned into **coal, oil and gas**. It takes **millions of years** – much longer than it takes us to burn it.'),
      src: ['snl-karbonkretslopet', 'snl-fossilt-brensel']
    },
    fossilt: {
      name: o('Fossilt brensel: kull, olje og gass', 'Fossil fuels: coal, oil and gas'), color: '#1d1d1f',
      what: o('Karbon som har vært lagret i bakken i **millioner av år**. Det er rester av gamle planter og alger.', 'Carbon that has been stored underground for **millions of years**. It is the remains of ancient plants and algae.'),
      does: o('Før industrien var dette karbonet låst inne i det **langsomme kretsløpet**. Når vi henter det opp og brenner det, flytter vi karbon fra et lukket lager til det **raske kretsløpet** – og CO₂-innholdet i lufta øker.', 'Before industry, this carbon was locked away in the **slow cycle**. When we dig it up and burn it, we move carbon from a closed store into the **fast cycle** – and the CO₂ content of the air rises.'),
      analogy: o('Det er som å tømme en sparegris som er fylt opp i millioner av år – på noen få hundre år.', 'It is like emptying a piggy bank that took millions of years to fill – in just a few hundred years.'),
      fact: o('De kjente reservene av kull, olje og gass inneholder omtrent like mye karbon som hele atmosfæren.', 'The known reserves of coal, oil and gas contain about as much carbon as the whole atmosphere.'),
      src: ['snl-fossilt-brensel', 'snl-karbonkretslopet', 'ipcc-ch5']
    },
    forbrenning: {
      name: o('Forbrenning av fossilt brensel', 'Burning fossil fuels'), color: '#d6452f',
      what: o('Kull, olje og gass brennes i kraftverk, fabrikker, biler, fly og skip. Karbonet reagerer med oksygen og blir til **CO₂**.', 'Coal, oil and gas are burned in power stations, factories, cars, planes and ships. The carbon reacts with oxygen and becomes **CO₂**.'),
      does: o('Dette er **hovedårsaken** til at CO₂ i lufta øker. Hvert år slipper vi ut rundt **10 milliarder tonn karbon** fra fossilt brensel og sementproduksjon. Bare rundt halvparten blir tatt opp av hav og land. Resten blir værende i lufta.', 'This is the **main reason** why CO₂ in the air is rising. Every year we release about **10 billion tonnes of carbon** from fossil fuels and cement production. Only about half is taken up by the ocean and land. The rest stays in the air.'),
      fact: o('10 milliarder tonn karbon er bare en liten del av de naturlige strømmene. Men de naturlige strømmene går begge veier og er i balanse – det gjør ikke utslippene våre.', '10 billion tonnes of carbon is only a small part of the natural flows. But the natural flows go both ways and balance each other – our emissions do not.'),
      src: ['snl-karbonkretslopet', 'ipcc-ch5', 'fno-utslipp']
    },
    avskoging: {
      name: o('Avskoging', 'Deforestation'), color: '#d6452f',
      what: o('Skog som hogges eller brennes ned for godt, for eksempel for å lage beitemark, åkrer eller veier.', 'Forest that is cut or burned down for good, for example to make pasture, fields or roads.'),
      does: o('Når skogen forsvinner, går karbonet i trærne og i skogsjorda ut i lufta som CO₂. Samtidig forsvinner skogen som tok opp CO₂. Avskoging og annen endret arealbruk slipper ut rundt **1–1,5 milliarder tonn karbon** i året.', 'When the forest disappears, the carbon in the trees and the forest soil goes into the air as CO₂. At the same time the forest that took up CO₂ is gone. Deforestation and other land-use change release about **1–1.5 billion tonnes of carbon** a year.'),
      fact: o('Over halvparten av utslippene fra avskoging kommer fra Brasil, Indonesia og Kongo.', 'Over half of the emissions from deforestation come from Brazil, Indonesia and the Congo.'),
      src: ['snl-karbonkretslopet', 'ipcc-ch5', 'fno-utslipp']
    },
    vulkan: {
      name: o('Vulkaner', 'Volcanoes'), color: '#9a6a32',
      what: o('Vulkaner slipper ut gass fra magmaen, blant annet CO₂.', 'Volcanoes release gas from the magma, including CO₂.'),
      does: o('Vulkanene er en del av det **langsomme kretsløpet**. De slipper ut omtrent **0,1 milliard tonn karbon** i året. Det er rundt **hundre ganger mindre** enn menneskenes utslipp.', 'Volcanoes are part of the **slow cycle**. They release about **0.1 billion tonnes of carbon** a year. That is about **a hundred times less** than human emissions.'),
      fact: o('Over millioner av år er vulkanene viktige: De gir tilbake karbon som har havnet i bergartene.', 'Over millions of years volcanoes matter: they return carbon that has ended up in the rocks.'),
      src: ['snl-karbonkretslopet', 'ipcc-ch5']
    },
    havopptak: {
      name: o('Havet tar opp CO₂', 'The ocean takes up CO₂'), color: '#2b7bbd',
      what: o('CO₂ fra lufta løser seg i havvannet, særlig der vannet er kaldt.', 'CO₂ from the air dissolves in the seawater, especially where the water is cold.'),
      does: o('Hav og luft bytter enorme mengder CO₂ hvert år – rundt 80 milliarder tonn karbon hver vei. Fordi det er mer CO₂ i lufta nå, tar havet opp **litt mer enn det slipper ut**: rundt en firedel av utslippene våre.', 'The ocean and air exchange huge amounts of CO₂ every year – about 80 billion tonnes of carbon each way. Because there is more CO₂ in the air now, the ocean takes up **a little more than it releases**: about a quarter of our emissions.'),
      fact: o('Når CO₂ løser seg i vann, blir det **karbonsyre**. Derfor blir havet surere (havforsuring).', 'When CO₂ dissolves in water, it forms **carbonic acid**. That is why the ocean is becoming more acidic (ocean acidification).'),
      src: ['snl-karbonkretslopet', 'snl-havforsuring', 'ipcc-ch5']
    },
    havutslipp: {
      name: o('Havet slipper ut CO₂', 'The ocean releases CO₂'), color: '#2b7bbd',
      what: o('Der havvannet er varmt, slipper det ut CO₂ til lufta.', 'Where the seawater is warm, it releases CO₂ to the air.'),
      does: o('Varmt vann kan holde på **mindre** CO₂ enn kaldt vann. Når havet blir varmere, kan det derfor ta opp mindre CO₂. Det er en **tilbakekobling** som kan forsterke oppvarmingen.', 'Warm water can hold **less** CO₂ than cold water. When the ocean warms, it can therefore take up less CO₂. This is a **feedback** that can amplify the warming.'),
      analogy: o('Tenk på brus: Varm brus mister kullsyra (CO₂) mye fortere enn kald brus.', 'Think of fizzy drinks: a warm drink loses its fizz (CO₂) much faster than a cold one.'),
      src: ['snl-tilbakekoblinger', 'snl-karbonkretslopet', 'ipcc-ch5']
    },
    havoverflate: {
      name: o('Havoverflaten', 'The surface ocean'), color: '#3a8fc9',
      what: o('De øverste hundre meterne av havet, der vannet blandes med vind og bølger.', 'The top hundred metres of the ocean, where the water is mixed by wind and waves.'),
      does: o('Overflatevannet bytter CO₂ med lufta. Det inneholder rundt **900 milliarder tonn karbon** – omtrent like mye som atmosfæren.', 'The surface water exchanges CO₂ with the air. It contains about **900 billion tonnes of carbon** – about as much as the atmosphere.'),
      src: ['ipcc-ch5', 'snl-karbonkretslopet']
    },
    plankton: {
      name: o('Planteplankton og liv i havet', 'Phytoplankton and ocean life'), color: '#3ea86b',
      what: o('Bitte små alger som driver i havet. De har fotosyntese, akkurat som plantene på land.', 'Tiny algae drifting in the sea. They carry out photosynthesis, just like plants on land.'),
      does: o('Planteplankton tar opp CO₂ fra vannet. Noen arter, som **kalkflagellater**, lager skall av kalk (kalsiumkarbonat). Når plankton dør, synker noe av karbonet ned til dyphavet.', 'Phytoplankton take up CO₂ from the water. Some species, such as **coccolithophores**, make shells of lime (calcium carbonate). When plankton die, some of the carbon sinks to the deep ocean.'),
      fact: o('Havforsuring gjør det vanskeligere for organismer med kalkskall å lage og vedlikeholde skallet.', 'Ocean acidification makes it harder for organisms with lime shells to build and maintain their shells.'),
      src: ['snl-kalkflagellater', 'snl-havforsuring', 'snl-karbonkretslopet']
    },
    synking: {
      name: o('Karbon synker ned i dyphavet', 'Carbon sinks into the deep ocean'), color: '#2b7bbd',
      what: o('Døde organismer, avføring og kaldt, tungt vann synker ned fra overflaten.', 'Dead organisms, droppings and cold, heavy water sink down from the surface.'),
      does: o('Slik blir karbon fraktet ned i dyphavet, der det kan bli liggende i hundrevis av år. Forskerne kaller det ofte **den biologiske pumpa**.', 'This carries carbon down to the deep ocean, where it can stay for hundreds of years. Scientists often call it **the biological pump**.'),
      src: ['ipcc-ch5', 'snl-karbonkretslopet']
    },
    dyphav: {
      name: o('Dyphavet', 'The deep ocean'), color: '#173f6e',
      what: o('Det kalde, mørke vannet under de øverste hundre meterne.', 'The cold, dark water below the top hundred metres.'),
      does: o('Dyphavet er **Jordas største aktive karbonlager**, med rundt **37 000 milliarder tonn karbon** – over 40 ganger så mye som atmosfæren. Men det tar lang tid før vannet herfra kommer opp til overflaten igjen.', 'The deep ocean is **the Earth’s largest active carbon store**, with about **37,000 billion tonnes of carbon** – over 40 times as much as the atmosphere. But it takes a long time for this water to come back up to the surface.'),
      src: ['ipcc-ch5', 'snl-karbonkretslopet']
    },
    begraving: {
      name: o('Avsetning på havbunnen', 'Burial on the sea floor'), color: '#9a6a32',
      what: o('Skall og rester av organismer som legger seg på havbunnen.', 'Shells and remains of organisms that settle on the sea floor.'),
      does: o('Bare en svært liten del (ca. 0,2 milliarder tonn i året) blir begravd i sedimentene. Der kan karbonet bli til **kalkstein** – og bli liggende i millioner av år.', 'Only a very small part (about 0.2 billion tonnes a year) is buried in the sediments. There the carbon can become **limestone** – and stay for millions of years.'),
      src: ['ipcc-ch5', 'snl-kalkstein']
    },
    havbunn: {
      name: o('Havbunnen: kalk og sediment', 'The sea floor: lime and sediment'), color: '#d9c79f',
      what: o('Lag av skall, slam og rester av organismer på bunnen av havet.', 'Layers of shells, mud and remains of organisms on the bottom of the sea.'),
      does: o('Over lang tid blir lagene til bergarter som **kalkstein**. Dette er en del av det **langsomme kretsløpet**. Mesteparten av alt karbon på Jorda ligger faktisk lagret i bergarter.', 'Over a long time the layers become rocks such as **limestone**. This is part of the **slow cycle**. Most of all the carbon on Earth is actually stored in rocks.'),
      src: ['snl-kalkstein', 'snl-karbonkretslopet', 'ipcc-ch5']
    },

    /* ================= Drivhuseffekten ================= */
    sol: {
      name: o('Sola', 'The sun'), color: '#ffd23f',
      what: o('Stjerna vår. Overflaten er rundt 6000 °C varm.', 'Our star. Its surface is about 6000 °C hot.'),
      does: o('Sola sender ut **elektromagnetisk stråling**, mest synlig lys. Det er nesten all energien som varmer opp Jorda og driver vær, havstrømmer og fotosyntese.', 'The sun sends out **electromagnetic radiation**, mostly visible light. This is almost all the energy that warms the Earth and drives weather, ocean currents and photosynthesis.'),
      fact: o('Sola har ikke blitt sterkere siden 1950-tallet. Den kan derfor ikke forklare oppvarmingen de siste tiårene.', 'The sun has not become stronger since the 1950s. It therefore cannot explain the warming of recent decades.'),
      src: ['snl-drivhuseffekten', 'snl-arsaker']
    },
    sollys: {
      name: o('Sollys (kortbølget stråling)', 'Sunlight (short-wave radiation)'), color: '#f2b705',
      what: o('**Stråling** fra sola, mest synlig lys. Den kalles **kortbølget** fordi bølgelengden er kort.', '**Radiation** from the sun, mostly visible light. It is called **short-wave** because the wavelength is short.'),
      does: o('Sollyset går lett gjennom atmosfæren. Av alt sollyset blir rundt **30 prosent reflektert** tilbake, og rundt **70 prosent absorbert** – 25 prosent i atmosfæren og 45 prosent ved bakken.', 'Sunlight passes easily through the atmosphere. Of all the sunlight, about **30 per cent is reflected** back, and about **70 per cent is absorbed** – 25 per cent in the atmosphere and 45 per cent at the ground.'),
      fact: o('Lys, varmestråling, radiobølger og røntgenstråling er alle **elektromagnetisk stråling** – de har bare ulik bølgelengde.', 'Light, heat radiation, radio waves and X-rays are all **electromagnetic radiation** – they just have different wavelengths.'),
      src: ['snl-drivhuseffekten', 'snl-em-straling']
    },
    refleksjon: {
      name: o('Refleksjon', 'Reflection'), color: '#f7cf3a',
      what: o('Når stråling **kastes tilbake** fra en overflate i stedet for å bli tatt opp.', 'When radiation **bounces back** from a surface instead of being taken up.'),
      does: o('Skyer, snø, is og lyse flater reflekterer mye sollys tilbake til verdensrommet. Det sollyset varmer ikke opp Jorda. Hvor mye en flate reflekterer, kalles **albedo**.', 'Clouds, snow, ice and light surfaces reflect a lot of sunlight back to space. That sunlight does not warm the Earth. How much a surface reflects is called **albedo**.'),
      analogy: o('En hvit T-skjorte i sola holder deg kjøligere enn en svart, fordi den reflekterer mer lys.', 'A white T-shirt in the sun keeps you cooler than a black one, because it reflects more light.'),
      fact: o('Nysnø reflekterer rundt 90 prosent av sollyset. Hav reflekterer ofte under 10 prosent.', 'Fresh snow reflects about 90 per cent of the sunlight. The ocean often reflects less than 10 per cent.'),
      src: ['snl-refleksjon', 'snl-albedo', 'snl-drivhuseffekten']
    },
    absorpsjon: {
      name: o('Absorpsjon', 'Absorption'), color: '#ffcf4d',
      what: o('Når stråling blir **tatt opp** av et stoff og blir til varme.', 'When radiation is **taken up** by a substance and turns into heat.'),
      does: o('Bakken og havet absorberer sollys og blir varme. Mørke flater, som hav og skog, absorberer mer enn lyse flater, som snø og is.', 'The ground and the ocean absorb sunlight and become warm. Dark surfaces, like the ocean and forests, absorb more than light surfaces, like snow and ice.'),
      fact: o('Drivhusgassene **absorberer** varmestrålingen fra bakken. Det er derfor de varmer opp atmosfæren.', 'The greenhouse gases **absorb** the heat radiation from the ground. That is why they warm the atmosphere.'),
      src: ['snl-absorpsjon', 'snl-drivhuseffekten']
    },
    jordoverflate: {
      name: o('Jordoverflaten', 'The Earth’s surface'), color: '#6fae55',
      what: o('Bakken og havet – der vi bor.', 'The ground and the ocean – where we live.'),
      does: o('Jordoverflaten blir varmet opp av sollys. En varm overflate sender selv ut **varmestråling**. Jo varmere den er, jo mer stråling sender den ut.', 'The Earth’s surface is warmed by sunlight. A warm surface itself sends out **heat radiation**. The warmer it is, the more radiation it sends out.'),
      fact: o('Middeltemperaturen ved jordoverflaten er omkring 15 °C. Uten drivhusgasser ville den vært rundt −18 °C.', 'The average temperature at the Earth’s surface is about 15 °C. Without greenhouse gases it would be about −18 °C.'),
      src: ['snl-drivhuseffekten']
    },
    varmestraling: {
      name: o('Varmestråling (langbølget, infrarød)', 'Heat radiation (long-wave, infrared)'), color: '#e2402a',
      what: o('Usynlig **infrarød stråling** som varme ting sender ut. Den kalles **langbølget** fordi bølgelengden er lengre enn for synlig lys.', 'Invisible **infrared radiation** that warm things give off. It is called **long-wave** because its wavelength is longer than that of visible light.'),
      does: o('Jorda kvitter seg med varme ved å sende ut varmestråling mot verdensrommet. Men **drivhusgassene absorberer mye av den** på veien opp.', 'The Earth gets rid of heat by sending heat radiation out towards space. But **the greenhouse gases absorb much of it** on the way up.'),
      fact: o('Et varmekamera «ser» infrarød stråling. Det er slik det kan vise hvor varme ting er.', 'A thermal camera “sees” infrared radiation. That is how it can show how warm things are.'),
      src: ['snl-varmestraling', 'snl-infrarod', 'snl-drivhuseffekten']
    },
    drivhusgasser: {
      name: o('Drivhusgasser', 'Greenhouse gases'), color: '#3b3f46',
      what: o('Gasser i atmosfæren som **absorberer varmestråling**: særlig **vanndamp (H₂O), karbondioksid (CO₂), metan (CH₄)** og **lystgass (N₂O)**.', 'Gases in the atmosphere that **absorb heat radiation**: especially **water vapour (H₂O), carbon dioxide (CO₂), methane (CH₄)** and **nitrous oxide (N₂O)**.'),
      does: o('Molekylene tar opp varmestrålingen og sender den ut igjen **i alle retninger** – også ned mot bakken. Slik holder de på varmen. Flere drivhusgasser gir en **sterkere drivhuseffekt**.', 'The molecules take up the heat radiation and send it out again **in all directions** – including down towards the ground. In this way they hold on to the heat. More greenhouse gases give a **stronger greenhouse effect**.'),
      analogy: o('Drivhusgassene virker som en dyne: Dyna lager ikke varme selv, men holder på varmen du lager.', 'The greenhouse gases work like a duvet: the duvet does not make heat itself, but holds on to the heat you make.'),
      fact: o('Nitrogen og oksygen, som er nesten hele lufta, er **ikke** drivhusgasser. Derfor betyr de små mengdene CO₂ så mye.', 'Nitrogen and oxygen, which make up almost all of the air, are **not** greenhouse gases. That is why the small amounts of CO₂ matter so much.'),
      src: ['snl-klimagasser', 'snl-drivhuseffekten', 'snl-metan']
    },
    tilbakestraling: {
      name: o('Varmestråling tilbake til bakken', 'Heat radiation back to the ground'), color: '#e2402a',
      what: o('Varmestråling som drivhusgassene sender **nedover** igjen.', 'Heat radiation that the greenhouse gases send **back down** again.'),
      does: o('Denne strålingen gir bakken **ekstra varme**. Derfor er det rundt 33 grader varmere ved bakken enn det ville vært uten drivhusgasser. Det er dette som er **drivhuseffekten**.', 'This radiation gives the ground **extra heat**. That is why it is about 33 degrees warmer at the ground than it would be without greenhouse gases. This is **the greenhouse effect**.'),
      src: ['snl-drivhuseffekten']
    },
    verdensrommet: {
      name: o('Verdensrommet', 'Space'), color: '#1c2a55',
      what: o('Det nesten tomme rommet utenfor atmosfæren.', 'The almost empty space outside the atmosphere.'),
      does: o('Jorda kan bare kvitte seg med varme ved å sende **stråling** ut i verdensrommet. Når det kommer like mye energi inn som ut, er temperaturen stabil. Mer drivhusgasser gjør at det slipper ut litt mindre, og Jorda blir varmere til en ny balanse er nådd.', 'The Earth can only get rid of heat by sending **radiation** out into space. When as much energy comes in as goes out, the temperature is stable. More greenhouse gases mean slightly less gets out, and the Earth warms until a new balance is reached.'),
      fact: o('I gjennomsnitt sender Jorda ut varme fra rundt 6,5 km høyde, der det er omtrent −18 °C.', 'On average the Earth sends out heat from about 6.5 km up, where it is about −18 °C.'),
      src: ['snl-drivhuseffekten']
    },
    isogsno: {
      name: o('Is og snø', 'Ice and snow'), color: '#e6eef5',
      what: o('Isbreer, snø og havis. De er hvite og reflekterer mye sollys.', 'Glaciers, snow and sea ice. They are white and reflect a lot of sunlight.'),
      does: o('Når det blir varmere, smelter is og snø. Da kommer mørkere bakke og hav fram, og de **absorberer mer** sollys. Det blir enda varmere, og enda mer is smelter. Dette er en **tilbakekoblingsmekanisme**.', 'When it gets warmer, ice and snow melt. Darker ground and sea are exposed, and they **absorb more** sunlight. It gets even warmer, and even more ice melts. This is a **feedback mechanism**.'),
      fact: o('Havisen i Arktis om høsten har krympet med rundt 40 prosent siden 1980-tallet.', 'The Arctic sea ice in autumn has shrunk by about 40 per cent since the 1980s.'),
      src: ['snl-albedo', 'snl-tilbakekoblinger', 'ipcc-spm']
    },
    skyer: {
      name: o('Skyer', 'Clouds'), color: '#ffffff',
      what: o('Små vanndråper eller iskrystaller som svever i lufta.', 'Tiny water droplets or ice crystals floating in the air.'),
      does: o('Skyer gjør to ting samtidig: De **reflekterer sollys** (avkjøler), og de **holder på varmestråling** (varmer). Hva som vinner, avhenger av hvor høye og tykke skyene er. Skyene er en av de største usikkerhetene i klimamodellene.', 'Clouds do two things at once: they **reflect sunlight** (cooling), and they **hold on to heat radiation** (warming). Which wins depends on how high and thick the clouds are. Clouds are one of the biggest uncertainties in climate models.'),
      fact: o('Ifølge NASA-forskere står vanndamp for rundt 50 prosent, skyer for rundt 25 prosent og CO₂ for rundt 20 prosent av drivhuseffekten.', 'According to NASA scientists, water vapour accounts for about 50 per cent, clouds for about 25 per cent and CO₂ for about 20 per cent of the greenhouse effect.'),
      src: ['snl-klimadebatten', 'snl-drivhuseffekten']
    },
    temperatur: {
      name: o('Global middeltemperatur', 'Global average temperature'), color: '#e2402a',
      what: o('Gjennomsnittet av temperaturen over hele Jorda gjennom et helt år.', 'The average temperature over the whole Earth through a whole year.'),
      does: o('Den globale middeltemperaturen er omkring 15 °C. Den har steget med over 1 °C siden slutten av 1800-tallet, og 2024 var det varmeste året som er målt.', 'The global average temperature is about 15 °C. It has risen by more than 1 °C since the late 1800s, and 2024 was the warmest year on record.'),
      fact: o('Én grad høres lite ut, men under siste istid var Jorda bare noen få grader kaldere enn i dag.', 'One degree sounds small, but during the last ice age the Earth was only a few degrees colder than today.'),
      src: ['snl-global-oppvarming', 'snl-klimaendringer', 'noaa-temp']
    },

    /* ================= Klimasystemet ================= */
    vaer: {
      name: o('Vær', 'Weather'), color: '#8f9aa8',
      what: o('Hvordan det er ute **akkurat nå** eller de neste dagene: sol, regn, vind, temperatur.', 'What it is like outside **right now** or in the next few days: sun, rain, wind, temperature.'),
      does: o('Været endrer seg fra time til time og dag til dag. En kald vinterdag eller en varm sommer sier lite om klimaet alene.', 'The weather changes from hour to hour and day to day. A cold winter’s day or a hot summer says little about the climate on its own.'),
      analogy: o('Været er humøret ditt i dag. Klimaet er personligheten din.', 'The weather is your mood today. The climate is your personality.'),
      src: ['snl-klima']
    },
    klima: {
      name: o('Klima', 'Climate'), color: '#e2402a',
      what: o('**Gjennomsnittsværet** over lang tid, vanligvis **30 år**, for et sted eller for hele Jorda.', 'The **average weather** over a long time, usually **30 years**, for a place or for the whole Earth.'),
      does: o('Klimaet sier hva slags vær vi kan vente oss: hvor varmt, hvor vått og hvor ofte det er ekstremvær. **Klimaendringer** betyr at disse gjennomsnittene endrer seg over tid.', 'The climate tells us what weather to expect: how warm, how wet and how often there is extreme weather. **Climate change** means that these averages change over time.'),
      src: ['snl-klima', 'snl-klimaendringer']
    },
    hav: {
      name: o('Havet', 'The ocean'), color: '#2b7bbd',
      what: o('Havet dekker rundt 71 prosent av Jordas overflate.', 'The ocean covers about 71 per cent of the Earth’s surface.'),
      does: o('Havet tar opp det aller meste av den ekstra varmen fra global oppvarming, og en stor del av CO₂-utslippene. Det flytter også varme rundt på kloden med havstrømmer. Når havet blir varmere, utvider vannet seg, og havnivået stiger.', 'The ocean takes up most of the extra heat from global warming, and a large part of the CO₂ emissions. It also moves heat around the globe with ocean currents. When the ocean warms, the water expands, and sea level rises.'),
      src: ['snl-arsaker', 'snl-global-oppvarming', 'ipcc-spm']
    },
    havstrom: {
      name: o('Havstrømmer', 'Ocean currents'), color: '#e2402a',
      what: o('Store strømmer av vann som flytter seg rundt i verdenshavene.', 'Large streams of water moving around the world’s oceans.'),
      does: o('Varme havstrømmer fra sør gir Norge et mye mildere klima enn andre steder like langt nord. Endringer i havstrømmene kan endre klimaet i store områder.', 'Warm ocean currents from the south give Norway a much milder climate than other places as far north. Changes in ocean currents can change the climate over large areas.'),
      src: ['snl-arsaker', 'snl-klimasystem']
    },
    kryosfaren: {
      name: o('Is og snø (kryosfæren)', 'Ice and snow (the cryosphere)'), color: '#e6eef5',
      what: o('Alt som er frossent på Jorda: isbreer, innlandsis, havis, snø og permafrost.', 'Everything frozen on Earth: glaciers, ice sheets, sea ice, snow and permafrost.'),
      does: o('Isen reflekterer sollys og kjøler Jorda. Når isbreer på land smelter, stiger havnivået. Isbreer dekker rundt 10 prosent av landjorda og inneholder rundt 70 prosent av ferskvannet på Jorda.', 'Ice reflects sunlight and cools the Earth. When glaciers on land melt, sea level rises. Glaciers cover about 10 per cent of the land and hold about 70 per cent of the fresh water on Earth.'),
      src: ['snl-isbre', 'snl-albedo']
    },
    landjord: {
      name: o('Landjorda', 'The land'), color: '#8c7b65',
      what: o('Kontinenter og øyer med fjell, sletter, ørkener og skog.', 'Continents and islands with mountains, plains, deserts and forests.'),
      does: o('Land varmes opp og kjøles ned raskere enn hav. Derfor blir det varmere over land enn over havet ved global oppvarming. Hvor fjellene ligger, påvirker vind og nedbør.', 'Land warms up and cools down faster than the sea. That is why it gets warmer over land than over the ocean with global warming. Where the mountains are affects wind and rain.'),
      src: ['snl-klimasystem', 'snl-global-oppvarming']
    },
    biosfaren: {
      name: o('Livet på Jorda (biosfæren)', 'Life on Earth (the biosphere)'), color: '#2f7d46',
      what: o('Alle planter, dyr, sopp og mikroorganismer.', 'All plants, animals, fungi and micro-organisms.'),
      does: o('Livet påvirker klimaet gjennom **karbonkretsløpet**: Planter tar opp CO₂, og alle levende organismer slipper ut CO₂. Samtidig påvirker klimaet hvor arter kan leve.', 'Life affects the climate through **the carbon cycle**: plants take up CO₂, and all living things release CO₂. At the same time, the climate affects where species can live.'),
      src: ['snl-karbonkretslopet', 'ndla-mangfold']
    },
    mennesker: {
      name: o('Menneskene', 'People'), color: '#c92a63',
      what: o('Over 8 milliarder mennesker som bruker energi, dyrker mat og bygger byer.', 'Over 8 billion people who use energy, grow food and build cities.'),
      does: o('Siden industrien begynte, har menneskene sluppet ut store mengder drivhusgasser. Ifølge FNs klimapanel er det **utvetydig** at menneskene har varmet opp atmosfæren, havet og landjorda.', 'Since industry began, people have released large amounts of greenhouse gases. According to the UN climate panel it is **unequivocal** that humans have warmed the atmosphere, ocean and land.'),
      src: ['ipcc-spm', 'snl-klimaendringer']
    },

    /* ================= Naturlige årsaker ================= */
    solaktivitet: {
      name: o('Solaktivitet', 'Solar activity'), color: '#ffd23f',
      what: o('Sola stråler litt sterkere og litt svakere i perioder. Antallet **solflekker** viser hvor aktiv sola er.', 'The sun shines a little stronger and a little weaker in periods. The number of **sunspots** shows how active the sun is.'),
      does: o('Endringer i sola har påvirket klimaet før. Men siden 1950-tallet har det ikke vært noen viktig endring i sola, og de siste tiårene har den heller bremset oppvarmingen litt. Sola kan **ikke** forklare oppvarmingen i dag.', 'Changes in the sun have affected the climate in the past. But since the 1950s there has been no important change in the sun, and in recent decades it has if anything slowed the warming slightly. The sun **cannot** explain today’s warming.'),
      src: ['snl-arsaker', 'snl-solflekker']
    },
    jordbane: {
      name: o('Jordbanen rundt sola', 'The Earth’s orbit around the sun'), color: '#9fb3d9',
      what: o('Jordas bane rundt sola er en svak **ellipse**. Formen endrer seg med en periode på rundt **100 000 år**.', 'The Earth’s path around the sun is a slight **ellipse**. Its shape changes over a period of about **100,000 years**.'),
      does: o('Sammen med endringer i aksehelningen endrer dette hvor mye sollys som treffer de nordlige områdene om sommeren. Det er en hovedårsak til at det har vekslet mellom **istider og mellomistider**. Syklusene kalles **Milanković-sykluser**.', 'Together with changes in the tilt of the axis, this changes how much sunlight reaches the northern regions in summer. It is a main reason why the Earth has switched between **ice ages and interglacials**. The cycles are called **Milanković cycles**.'),
      src: ['snl-milankovic', 'snl-arsaker']
    },
    aksehelning: {
      name: o('Aksehelningen', 'The tilt of the axis'), color: '#2f74c0',
      what: o('Jordaksen heller i dag omkring **23,4°**. Helningen veksler mellom 22,1° og 24,5° over **41 000 år**.', 'The Earth’s axis is tilted about **23.4°** today. The tilt varies between 22.1° and 24.5° over **41,000 years**.'),
      does: o('Når helningen er stor, blir somrene varmere og vintrene kaldere. Varme somre i nord kan smelte snøen fra vinteren – og hindre at det bygges opp store isbreer.', 'When the tilt is large, summers are warmer and winters colder. Warm summers in the north can melt the winter snow – and stop large ice sheets building up.'),
      fact: o('Det er aksehelningen som gir oss årstider.', 'It is the tilt of the axis that gives us seasons.'),
      src: ['snl-milankovic']
    },
    presesjon: {
      name: o('Presesjon («slingring»)', 'Precession (“wobble”)'), color: '#ffd166',
      what: o('Jordaksen slingrer langsomt rundt, som en snurrebass, med en periode på 19 000–23 000 år.', 'The Earth’s axis slowly wobbles round, like a spinning top, over a period of 19,000–23,000 years.'),
      does: o('Det endrer hvilken årstid Jorda er nærmest sola. Sammen med de to andre syklusene styrer det rytmen i istidene.', 'It changes which season the Earth is closest to the sun. Together with the two other cycles it controls the rhythm of the ice ages.'),
      src: ['snl-milankovic']
    },
    vulkanutbrudd: {
      name: o('Store vulkanutbrudd', 'Large volcanic eruptions'), color: '#6d4c3d',
      what: o('Kraftige utbrudd som sender aske og gass, særlig svoveldioksid, høyt opp i atmosfæren.', 'Powerful eruptions that send ash and gas, especially sulphur dioxide, high up into the atmosphere.'),
      does: o('Små partikler (**aerosoler**) stenger ute litt av sollyset. Da blir det **kaldere** i en kort periode. Utbruddet fra Pinatubo i 1991 senket middeltemperaturen med omkring 0,5 °C i halvannet år.', 'Small particles (**aerosols**) block a little of the sunlight. This makes it **colder** for a short period. The eruption of Pinatubo in 1991 lowered the average temperature by about 0.5 °C for a year and a half.'),
      fact: o('Vulkaner slipper ut CO₂ også, men mye mindre enn menneskene – rundt hundre ganger mindre i året.', 'Volcanoes release CO₂ too, but much less than humans – about a hundred times less per year.'),
      src: ['snl-arsaker', 'snl-pinatubo', 'ipcc-ch5']
    },
    kontinentdrift: {
      name: o('Kontinentene flytter seg', 'The continents move'), color: '#c9a46a',
      what: o('Platetektonikk flytter kontinentene noen centimeter i året.', 'Plate tectonics moves the continents a few centimetres a year.'),
      does: o('Over **millioner av år** endrer det klimaet: Kontinenter flytter seg mot polene eller ekvator, og havstrømmer og fjellkjeder endres. Svalbard lå nær ekvator for rundt 400 millioner år siden og hadde tropisk klima!', 'Over **millions of years** this changes the climate: continents move towards the poles or the equator, and ocean currents and mountain ranges change. Svalbard lay near the equator about 400 million years ago and had a tropical climate!'),
      fact: o('Les mer om kontinentaldrift i temaet «Historien om Jorda».', 'Read more about continental drift in the topic “The story of the Earth”.'),
      src: ['snl-arsaker']
    },
    istid: {
      name: o('Istider og mellomistider', 'Ice ages and interglacials'), color: '#9fb7cc',
      what: o('Perioder da store isbreer dekket store deler av kontinentene. Mellom dem var det varmere **mellomistider**, som den vi lever i nå.', 'Periods when large ice sheets covered large parts of the continents. Between them were warmer **interglacials**, like the one we live in now.'),
      does: o('De siste 2,6 millionene årene har det vært nesten **50 istider**. Den siste sluttet for **11 600 år siden**. Da var Norge dekket av opptil 3000 meter tykk is.', 'In the last 2.6 million years there have been almost **50 ice ages**. The last one ended **11,600 years ago**. At that time Norway was covered by ice up to 3000 metres thick.'),
      fact: o('Overgangen fra istid til mellomistid tok vanligvis **mange tusen år**. Dagens oppvarming skjer på **noen hundre år**.', 'The change from ice age to interglacial usually took **many thousands of years**. Today’s warming is happening in **a few hundred years**.'),
      src: ['snl-istid', 'ipcc-spm']
    },
    iskjerne: {
      name: o('Iskjerner', 'Ice cores'), color: '#7fb6de',
      what: o('Lange sylindere av is som forskerne borer opp fra innlandsisen i Antarktis og på Grønland.', 'Long cylinders of ice that scientists drill out of the ice sheets in Antarctica and Greenland.'),
      does: o('Isen er bygd opp av snø, lag på lag. Små **luftbobler** i isen er luft fra fortiden. Ved å måle CO₂ i boblene kan forskerne se hvor mye CO₂ det var i lufta for opptil **800 000 år siden**. Isen avslører også temperaturen.', 'The ice is built up of snow, layer by layer. Small **air bubbles** in the ice are air from the past. By measuring CO₂ in the bubbles, scientists can see how much CO₂ there was in the air up to **800,000 years ago**. The ice also reveals the temperature.'),
      fact: o('I 800 000 år svingte CO₂ mellom omtrent 180 og 300 ppm. I dag er det over 420 ppm.', 'For 800,000 years CO₂ varied between about 180 and 300 ppm. Today it is over 420 ppm.'),
      src: ['noaa-iskjerne', 'noaa-epica', 'nasa-bevis']
    },

    /* ================= Løsninger ================= */
    vannkraft: {
      name: o('Vannkraft', 'Hydropower'), color: '#4e9ad6',
      what: o('Strøm fra vann som renner fra høyt til lavt gjennom turbiner.', 'Electricity from water flowing from high to low through turbines.'),
      does: o('Vannkraft gir strøm nesten uten utslipp. I Norge kommer omtrent **89 prosent** av strømmen fra vannkraft. Det gjør det lettere å bytte ut olje og bensin med strøm.', 'Hydropower gives electricity with almost no emissions. In Norway about **89 per cent** of electricity comes from hydropower. This makes it easier to replace oil and petrol with electricity.'),
      fact: o('Vannkraft står for rundt 16 prosent av all strøm i verden.', 'Hydropower provides about 16 per cent of all electricity in the world.'),
      src: ['snl-vannkraft', 'snl-fornybar']
    },
    vindkraft: {
      name: o('Vindkraft', 'Wind power'), color: '#cfd5db',
      what: o('Strøm fra vindturbiner som drives av vinden.', 'Electricity from wind turbines driven by the wind.'),
      does: o('Vindkraft er fornybar og gir lite utslipp når turbinene er bygd. Den kan stå på land eller til havs. Ulempen er at den tar plass i naturen og bare gir strøm når det blåser.', 'Wind power is renewable and gives few emissions once the turbines are built. It can be on land or at sea. The downside is that it takes up space in nature and only gives power when the wind blows.'),
      fact: o('Vindkraft sto for rundt 8 prosent av strømproduksjonen i Norge i 2020.', 'Wind power provided about 8 per cent of electricity production in Norway in 2020.'),
      src: ['snl-vindkraft', 'snl-vannkraft']
    },
    solenergi: {
      name: o('Solenergi', 'Solar energy'), color: '#1f3c88',
      what: o('Solceller gjør sollys om til strøm. Solfangere varmer opp vann.', 'Solar cells turn sunlight into electricity. Solar collectors heat water.'),
      does: o('Sammen med vindkraft står solkraft for det meste av den nye kraftproduksjonen i verden. Ifølge forskerne dekkes nå omtrent to tredeler av økningen i verdens energibehov med sol og vind.', 'Together with wind power, solar power makes up most of the new power production in the world. According to scientists, about two thirds of the increase in the world’s energy demand is now covered by solar and wind.'),
      src: ['snl-solenergi', 'fno-utslipp']
    },
    energisparing: {
      name: o('Energisparing og varmepumper', 'Saving energy and heat pumps'), color: '#6c8f3a',
      what: o('Å bruke mindre energi til det samme: bedre isolerte hus, LED-lys og **varmepumper**.', 'Using less energy for the same thing: better-insulated houses, LED lights and **heat pumps**.'),
      does: o('Energi som ikke brukes, gir ingen utslipp. En varmepumpe henter varme fra lufta, jorda eller sjøen og gir 3–5 ganger så mye varme som strømmen den bruker.', 'Energy that is not used gives no emissions. A heat pump takes heat from the air, the ground or the sea and gives 3–5 times as much heat as the electricity it uses.'),
      fact: o('I 2023 var det rundt 1,1 millioner varmepumper i Norge.', 'In 2023 there were about 1.1 million heat pumps in Norway.'),
      src: ['snl-varmepumpe']
    },
    transport: {
      name: o('Transport uten fossilt drivstoff', 'Transport without fossil fuels'), color: '#2e9e5b',
      what: o('Elbiler, elektriske busser og tog, sykkel og gange.', 'Electric cars, electric buses and trains, cycling and walking.'),
      does: o('Veitrafikk er en stor kilde til utslipp. En elbil bruker energien mye bedre enn en bensinbil: Elmotoren utnytter 80–90 prosent av energien, bensinmotoren bare 25–30 prosent. Kollektivtransport, sykkel og gange gir enda mindre utslipp.', 'Road traffic is a big source of emissions. An electric car uses energy much better than a petrol car: the electric motor uses 80–90 per cent of the energy, the petrol engine only 25–30 per cent. Public transport, cycling and walking give even lower emissions.'),
      fact: o('Norge er et av landene i verden med størst andel elbiler.', 'Norway is one of the countries in the world with the largest share of electric cars.'),
      src: ['snl-elbil', 'owid-reise']
    },
    mat: {
      name: o('Mat og jordbruk', 'Food and farming'), color: '#3a8a3a',
      what: o('Det vi spiser, og hvordan maten blir produsert.', 'What we eat, and how the food is produced.'),
      does: o('Kjøtt fra drøvtyggere, som storfe og sau, gir mye utslipp, blant annet av **metan**. Grønnsaker, korn, bønner og erter gir mye lavere utslipp. Å kaste mindre mat hjelper også. **Hva** du spiser, betyr mer enn hvor langt maten er fraktet.', 'Meat from ruminants, such as cattle and sheep, gives high emissions, including **methane**. Vegetables, grains, beans and peas give much lower emissions. Wasting less food also helps. **What** you eat matters more than how far the food has travelled.'),
      src: ['owid-mat', 'owid-lokalmat', 'snl-karbonkretslopet']
    },
    skogogmyr: {
      name: o('Ta vare på skog og myr', 'Protecting forests and bogs'), color: '#2f7d46',
      what: o('Skog og myr er naturlige karbonlagre.', 'Forests and bogs are natural carbon stores.'),
      does: o('Å stanse avskoging, plante ny skog og la myrer være i fred (eller fylle igjen grøftede myrer) gjør at mer karbon blir lagret. Men naturen kan **ikke** ta opp alle utslippene fra fossilt brensel.', 'Stopping deforestation, planting new forest and leaving bogs alone (or re-wetting drained bogs) means more carbon is stored. But nature **cannot** take up all the emissions from fossil fuels.'),
      fact: o('Rundt 9 prosent av landarealet i Norge er myr.', 'About 9 per cent of the land area in Norway is bog.'),
      src: ['snl-karbonkretslopet', 'snl-myr', 'snl-skog']
    },
    co2fangst: {
      name: o('Fangst og lagring av CO₂', 'Carbon capture and storage'), color: '#4a4f59',
      what: o('CO₂ blir fanget opp fra fabrikkpiper og pumpet ned i berggrunnen under havbunnen.', 'CO₂ is captured from factory chimneys and pumped down into the bedrock under the sea floor.'),
      does: o('Det er nyttig for utslipp som er vanskelige å kutte, som fra sementfabrikker. I Norge har CO₂ blitt lagret under havbunnen ved Sleipner-feltet siden 1990-tallet, og prosjektet **Langskip** med sementfabrikken i Brevik kom i drift i 2025.', 'It is useful for emissions that are hard to cut, such as from cement factories. In Norway, CO₂ has been stored under the sea floor at the Sleipner field since the 1990s, and the **Langskip** project with the cement factory in Brevik started operating in 2025.'),
      fact: o('CO₂-en fra Langskip fraktes med skip til Øygarden og lagres i berget under Nordsjøen (Northern Lights).', 'The CO₂ from Langskip is shipped to Øygarden and stored in the rock under the North Sea (Northern Lights).'),
      src: ['snl-karbonfangst']
    },
    forbruk: {
      name: o('Mindre forbruk og gjenbruk', 'Less consumption and reuse'), color: '#2e9e5b',
      what: o('Å kjøpe færre nye ting, reparere, låne og bruke ting om igjen.', 'Buying fewer new things, repairing, borrowing and reusing.'),
      does: o('Alt som produseres, krever energi og råvarer. Når ting varer lenger og brukes om igjen, blir det mindre utslipp.', 'Everything that is produced needs energy and raw materials. When things last longer and are reused, there are fewer emissions.'),
      src: ['snl-karbonkretslopet']
    },

    /* ================= Hvordan vet vi det? ================= */
    satellitt: {
      name: o('Satellitter', 'Satellites'), color: '#1f3c88',
      what: o('Satellitter går i bane rundt Jorda og måler fra verdensrommet.', 'Satellites orbit the Earth and measure from space.'),
      does: o('De måler blant annet havnivå, havis, isbreer, skog og CO₂ i atmosfæren – over hele Jorda samtidig.', 'Among other things they measure sea level, sea ice, glaciers, forests and CO₂ in the atmosphere – over the whole Earth at once.'),
      src: ['snl-karbonkretslopet', 'nasa-bevis']
    },
    maunaloa: {
      name: o('Mauna Loa-observatoriet', 'The Mauna Loa Observatory'), color: '#6d4c3d',
      what: o('En målestasjon høyt oppe på vulkanen Mauna Loa på Hawaii, langt fra byer og skog.', 'A measuring station high up on the volcano Mauna Loa in Hawaii, far from cities and forests.'),
      does: o('Her startet **Charles David Keeling** nøyaktige målinger av CO₂ i lufta i **1958**. Det er den lengste sammenhengende måleserien av CO₂. Grafen kalles **Keeling-kurven**.', 'Here **Charles David Keeling** started accurate measurements of CO₂ in the air in **1958**. It is the longest continuous record of CO₂. The graph is called **the Keeling curve**.'),
      src: ['snl-mauna-loa', 'noaa-co2']
    },
    vaerstasjon: {
      name: o('Værstasjoner', 'Weather stations'), color: '#14203a',
      what: o('Stasjoner som måler temperatur, nedbør og vind hver dag.', 'Stations that measure temperature, rain and wind every day.'),
      does: o('Tusenvis av værstasjoner på land og målinger fra skip gir den globale temperaturen tilbake til midten av 1800-tallet. Flere forskningsmiljøer regner ut temperaturen hver for seg – og får nesten det samme svaret.', 'Thousands of weather stations on land and measurements from ships give the global temperature back to the mid-1800s. Several research groups calculate the temperature separately – and get almost the same answer.'),
      src: ['snl-global-oppvarming', 'noaa-temp']
    },
    havboye: {
      name: o('Målebøyer i havet', 'Measuring floats in the ocean'), color: '#ffd166',
      what: o('Robotbøyer som dykker ned i havet og kommer opp igjen.', 'Robot floats that dive down into the ocean and come back up.'),
      does: o('De måler temperatur og saltinnhold i havet og sender dataene via satellitt. Slik vet forskerne at havet blir varmere.', 'They measure the temperature and saltiness of the ocean and send the data via satellite. This is how scientists know the ocean is getting warmer.'),
      src: ['nasa-bevis']
    },
    treringer: {
      name: o('Årringer i trær', 'Tree rings'), color: '#9a6a3a',
      what: o('Et tre lager en ny ring hvert år.', 'A tree makes a new ring every year.'),
      does: o('Brede ringer betyr ofte gode vekstår, smale ringer dårlige. Gamle trær og trestokker kan derfor fortelle om klimaet langt tilbake i tid. Furustokker høyt oppe på fjellet viser at skoggrensa var høyere for 9000 år siden.', 'Wide rings often mean good growing years, narrow rings poor ones. Old trees and logs can therefore tell us about the climate long ago. Pine logs high up in the mountains show that the tree line was higher 9000 years ago.'),
      src: ['nasa-bevis', 'fno-rondane']
    },
    bremaling: {
      name: o('Målinger av isbreer', 'Measuring glaciers'), color: '#e2402a',
      what: o('Forskere måler hvor mye snø som legger seg på breen om vinteren, hvor mye som smelter om sommeren, og hvor brefronten er.', 'Scientists measure how much snow falls on the glacier in winter, how much melts in summer, and where the front of the glacier is.'),
      does: o('Nigardsbreen har blitt målt systematisk siden 1900. Siden begynnelsen av 2000-tallet har de fleste breene i Norge smeltet mye tilbake.', 'Nigardsbreen has been measured systematically since 1900. Since the early 2000s most glaciers in Norway have melted back a lot.'),
      src: ['snl-nigardsbreen', 'snl-isbre']
    },
    vannstand: {
      name: o('Målinger av havnivå', 'Measuring sea level'), color: '#7a5230',
      what: o('Vannstandsmålere i havner og satellitter måler hvor høyt havet står.', 'Tide gauges in harbours and satellites measure how high the sea is.'),
      does: o('Det globale havnivået har steget med 21–24 cm fra 1880 til 2023, og stigningen går stadig raskere. I Norge hever landet seg fortsatt etter istida, så noen steder, som i Oslo, har havnivået sunket i forhold til land.', 'Global sea level rose by 21–24 cm from 1880 to 2023, and the rise is speeding up. In Norway the land is still rising after the ice age, so in some places, such as Oslo, sea level has fallen relative to the land.'),
      src: ['snl-global-oppvarming', 'snl-havniva']
    }
  };
})();
