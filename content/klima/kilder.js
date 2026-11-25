/* =====================================================================
   Klimaendringer – KILDER og VIDEOER
   (samme oppbygning som content/jorda/kilder.js – se README.md)
   Alle lenker er sjekket 25. november 2026.
   Statped-siden (helhetslesing) kom fra læreren. Den er bak en
   sikkerhetssjekk og kunne ikke åpnes automatisk.
   ===================================================================== */
(function () {
  const T = NatLab.topic('klima');
  const checked = '2026-11-25';
  const snl = 'Store norske leksikon';
  const ndla = 'NDLA';
  const s = function (slug, title) { return { title: title, publisher: snl, url: 'https://snl.no/' + slug, type: 'artikkel', lang: 'nb' }; };
  const n = function (path, title) { return { title: title, publisher: ndla, url: 'https://ndla.no/r/' + path, type: 'artikkel', lang: 'nb' }; };
  const yt = function (id, title, who, lang) { return { title: title, publisher: who + ' (YouTube)', url: 'https://www.youtube.com/watch?v=' + id, type: 'video', lang: lang || 'en' }; };

  T.sources = {
    /* ---------- Store norske leksikon ---------- */
    'snl-klimaendringer': s('klimaendringer', 'Klimaendringer'),
    'snl-klima': s('klima', 'Klima'),
    'snl-arsaker': s('klimaendringer_-_%C3%A5rsaker', 'Klimaendringer – årsaker'),
    'snl-global-oppvarming': s('global_oppvarming', 'Global oppvarming'),
    'snl-drivhuseffekten': s('drivhuseffekten', 'Drivhuseffekten'),
    'snl-klimagasser': s('klimagasser', 'Klimagasser'),
    'snl-karbonkretslopet': s('karbonkretsl%C3%B8pet', 'Karbonkretsløpet'),
    'snl-karbon': s('karbon', 'Karbon'),
    'snl-fotosyntese': s('fotosyntese', 'Fotosyntese'),
    'snl-celleanding': s('celle%C3%A5nding', 'Celleånding'),
    'snl-fossilt-brensel': s('fossilt_brensel', 'Fossilt brensel'),
    'snl-kalkstein': s('kalkstein', 'Kalkstein'),
    'snl-havforsuring': s('havforsuring', 'Havforsuring'),
    'snl-kalkflagellater': s('kalkflagellater', 'Kalkflagellater'),
    'snl-permafrost': s('permafrost', 'Permafrost'),
    'snl-tilbakekoblinger': s('tilbakekoblinger_-_klima', 'Tilbakekoblinger – klima'),
    'snl-albedo': s('albedoeffekt', 'Albedoeffekt'),
    'snl-metan': s('metan', 'Metan'),
    'snl-vanndamp': s('vanndamp', 'Vanndamp'),
    'snl-straling': s('str%C3%A5ling', 'Stråling'),
    'snl-em-straling': s('elektromagnetisk_str%C3%A5ling', 'Elektromagnetisk stråling'),
    'snl-varmestraling': s('varmestr%C3%A5ling', 'Varmestråling'),
    'snl-infrarod': s('infrar%C3%B8d_str%C3%A5ling', 'Infrarød stråling'),
    'snl-absorpsjon': s('absorpsjon', 'Absorpsjon'),
    'snl-refleksjon': s('refleksjon_-_fysikk', 'Refleksjon – fysikk'),
    'snl-klimasystem': s('klimasystem', 'Klimasystem'),
    'snl-milankovic': s('Milankovi%C4%87-sykluser', 'Milanković-sykluser'),
    'snl-istid': s('istid', 'Istid'),
    'snl-solflekker': s('solflekker', 'Solflekker'),
    'snl-pinatubo': s('Pinatubo', 'Pinatubo'),
    'snl-klimadebatten': s('klimadebatten_-_faglige_sp%C3%B8rsm%C3%A5l', 'Klimadebatten – faglige spørsmål'),
    'snl-ipcc': s('FNs_klimapanel_-_IPCC', 'FNs klimapanel – IPCC'),
    'snl-parisavtalen': s('Parisavtalen', 'Parisavtalen'),
    'snl-karbonbudsjett': s('karbonbudsjett', 'Karbonbudsjett'),
    'snl-karbonfangst': s('karbonfangst_og_-lagring', 'Karbonfangst og -lagring'),
    'snl-klimatilpasning': s('klimatilpasning', 'Klimatilpasning'),
    'snl-fornybar': s('fornybar_energi', 'Fornybar energi'),
    'snl-vannkraft': s('vannkraft', 'Vannkraft'),
    'snl-vindkraft': s('vindkraft', 'Vindkraft'),
    'snl-solenergi': s('solenergi', 'Solenergi'),
    'snl-varmepumpe': s('varmepumpe', 'Varmepumpe'),
    'snl-elbil': s('elbil', 'Elbil'),
    'snl-skog': s('skog', 'Skog'),
    'snl-myr': s('myr', 'Myr'),
    'snl-isbre': s('isbre', 'Isbre'),
    'snl-jostedalsbreen': s('Jostedalsbreen', 'Jostedalsbreen'),
    'snl-nigardsbreen': s('Nigardsbreen', 'Nigardsbreen'),
    'snl-briksdalsbreen': s('Briksdalsbreen', 'Briksdalsbreen'),
    'snl-havis': s('havis', 'Havis'),
    'snl-gronlandsisen': s('Gr%C3%B8nlandsisen', 'Grønlandsisen'),
    'snl-antarktis': s('Antarktis', 'Antarktis'),
    'snl-havniva': s('havniv%C3%A5', 'Havnivå'),
    'snl-korallrev': s('korallrev', 'Korallrev'),
    'snl-korallbleking': s('korallbleking', 'Korallbleking'),
    'snl-gbr': s('Great_Barrier_Reef', 'Great Barrier Reef'),
    'snl-tuvalu': s('Tuvalu', 'Tuvalu'),
    'snl-maldivene': s('Maldivene', 'Maldivene'),
    'snl-mauna-loa': s('Mauna_Loa', 'Mauna Loa'),
    'snl-arrhenius': s('Svante_Arrhenius', 'Svante Arrhenius'),
    'snl-svalbard': s('Svalbard', 'Svalbard'),

    /* ---------- FNs klimapanel (IPCC) ---------- */
    'ipcc-spm': { title: 'Climate Change 2021: The Physical Science Basis – Summary for Policymakers (AR6)', publisher: 'IPCC', url: 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf', type: 'artikkel', lang: 'en' },
    'ipcc-ch5': { title: 'Climate Change 2021, kapittel 5: Global Carbon and other Biogeochemical Cycles and Feedbacks (figur 5.12)', publisher: 'IPCC', url: 'https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_Chapter05.pdf', type: 'artikkel', lang: 'en' },

    /* ---------- Måledata ---------- */
    'noaa-co2': { title: 'Trends in Atmospheric Carbon Dioxide (Mauna Loa)', publisher: 'NOAA Global Monitoring Laboratory', url: 'https://gml.noaa.gov/ccgg/trends/mlo.html', type: 'artikkel', lang: 'en' },
    'noaa-temp': { title: 'Climate at a Glance: Global Time Series', publisher: 'NOAA National Centers for Environmental Information', url: 'https://www.ncei.noaa.gov/access/monitoring/climate-at-a-glance/global/time-series', type: 'artikkel', lang: 'en' },
    'noaa-iskjerne': { title: 'Antarctic Ice Cores Revised 800KYr CO2 Data (Bereiter mfl. 2015)', publisher: 'NOAA National Centers for Environmental Information', url: 'https://www.ncei.noaa.gov/access/paleo-search/study/17975', type: 'artikkel', lang: 'en' },
    'noaa-epica': { title: 'EPICA Dome C Ice Core 800KYr Deuterium Data and Temperature Estimates (Jouzel mfl. 2007)', publisher: 'NOAA National Centers for Environmental Information', url: 'https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/epica_domec/edc3deuttemp2007.txt', type: 'artikkel', lang: 'en' },
    'ssb-utslipp': { title: 'Utslipp til luft', publisher: 'Statistisk sentralbyrå (SSB)', url: 'https://www.ssb.no/natur-og-miljo/forurensning-og-klima/statistikk/utslipp-til-luft', type: 'artikkel', lang: 'nb' },

    /* ---------- Our World in Data ---------- */
    'owid-mat': { title: 'Environmental Impacts of Food Production', publisher: 'Our World in Data', url: 'https://ourworldindata.org/environmental-impacts-of-food', type: 'artikkel', lang: 'en' },
    'owid-lokalmat': { title: 'You want to reduce the carbon footprint of your food? Focus on what you eat, not whether your food is local', publisher: 'Our World in Data', url: 'https://ourworldindata.org/food-choice-vs-eating-local', type: 'artikkel', lang: 'en' },
    'owid-reise': { title: 'Which form of transport has the smallest carbon footprint?', publisher: 'Our World in Data', url: 'https://ourworldindata.org/travel-carbon-footprint', type: 'artikkel', lang: 'en' },
    'owid-co2': { title: 'CO₂ and Greenhouse Gas Emissions', publisher: 'Our World in Data', url: 'https://ourworldindata.org/co2-and-greenhouse-gas-emissions', type: 'artikkel', lang: 'en' },

    /* ---------- NASA ---------- */
    'nasa-bevis': { title: 'Evidence: How Do We Know Climate Change Is Real?', publisher: 'NASA Science', url: 'https://science.nasa.gov/climate-change/evidence/', type: 'artikkel', lang: 'en' },
    'nasa-arsaker': { title: 'The Causes of Climate Change', publisher: 'NASA Science', url: 'https://science.nasa.gov/climate-change/causes/', type: 'artikkel', lang: 'en' },
    'nasa-effekter': { title: 'The Effects of Climate Change', publisher: 'NASA Science', url: 'https://science.nasa.gov/climate-change/effects/', type: 'artikkel', lang: 'en' },
    'nasa-world': { title: 'World of Change (satellittbilder før og etter)', publisher: 'NASA Earth Observatory', url: 'https://science.nasa.gov/earth/earth-observatory/world-of-change/', type: 'artikkel', lang: 'en' },
    'nasa-interaktiv': { title: 'Climate Interactives', publisher: 'NASA Science', url: 'https://science.nasa.gov/climate-change/climate-interactives/', type: 'artikkel', lang: 'en' },

    /* ---------- forskning.no ---------- */
    'fno-rondane': { title: 'Høyt oppå snaufjellet i Rondane ligger det furustokker. Hvordan havnet de der?', publisher: 'forskning.no (Elise Kjørstad, 20.11.2026)', url: 'https://www.forskning.no/istiden-klima/hoyt-oppa-snaufjellet-i-rondane-ligger-det-furustokker-hvordan-havnet-de-der/2739002', type: 'artikkel', lang: 'nb' },
    'fno-utslipp': { title: 'Dette gjør at de globale utslippene går litt ned i år', publisher: 'forskning.no (Elise Kjørstad, 10.11.2026)', url: 'https://www.forskning.no/forurensning-klima/dette-gjor-at-de-globale-utslippene-gar-litt-ned-i-ar/2735829', type: 'artikkel', lang: 'nb' },
    'fno-partner': { title: 'Havet stiger, men det rammer ulikt verden over', publisher: 'forskning.no (partnerinnhold fra Universitetet i Bergen, 6.9.2025)', url: 'https://www.forskning.no/havet-klimaendringer-partner/havet-stiger-men-det-rammer-ulikt-verden-over/2545939', type: 'artikkel', lang: 'nb' },
    'fno-om': { title: 'Om forskning.no', publisher: 'forskning.no', url: 'https://www.forskning.no/om-forskningno/om-forskningno/990992', type: 'artikkel', lang: 'nb' },

    /* ---------- Lesing og kildekritikk ---------- */
    'statped-helhet': { title: 'Helhetslesing', publisher: 'Statped', url: 'https://www.statped.no/ressurser-og-verktoy/ressurser/helhetslesing/', type: 'artikkel', lang: 'nb' },
    'kildekompasset': { title: 'Kildekompasset', publisher: 'Kildekompasset', url: 'https://kildekompasset.no/', type: 'artikkel', lang: 'nb' },
    'ndla-kildekritikk': n('naturfag-sf/kilder-og-kildekritikk/0328a386c8', 'Kilder og kildekritikk'),
    'ndla-vitenskap-kilde': n('tverrfaglige-temaer/vitenskap-og-kildekritikk/46324adbf1', 'Vitenskap og kildekritikk'),

    /* ---------- NDLA ---------- */
    'ndla-drivhus': n('naturfag-sf/hva-er-drivhuseffekt/01721c9289', 'Hva er drivhuseffekt?'),
    'ndla-karbon': n('naturfag-sf/karbonkretslopet/914c75c262', 'Karbonkretsløpet'),
    'ndla-havforsuring': n('naturfag-sf/hva-er-problemet-med-havforsuring/252abd0bb6', 'Hva er problemet med havforsuring?'),
    'ndla-surere-hav': n('naturfag-sf/surere-hav/2fbb221292', 'Surere hav'),
    'ndla-forsok-forsuring': n('naturfag-sf/forsok-forsuring-av-vann/9de3ff6126', 'Forsøk: Forsuring av vann'),
    'ndla-forsok-skjell': n('naturfag-sf/forsok-skjell-og-havforsuring/43bf786f85', 'Forsøk: Skjell og havforsuring'),
    'ndla-arsaker': n('geografi/arsaker-til-klimaendringene/c629d14457', 'Årsaker til klimaendringene'),
    'ndla-konsekvenser': n('geografi/konsekvenser-av-klimaendringer/a39499baf1', 'Konsekvenser av klimaendringer'),
    'ndla-klimasystemet': n('geografi/klimasystemet/a0057a2cb2', 'Klimasystemet'),
    'ndla-mangfold': n('naturfag-sf/klimaendringer-pavirker-mangfoldet/c924874d36', 'Klimaendringer påvirker mangfoldet'),
    'ndla-hvagjorvi': n('tverrfaglige-temaer/klimaendringer-hva-skjer-hva-gjor-vi/8a44f4a3b1', 'Klimaendringer: Hva skjer? Hva gjør vi?'),

    /* ---------- Videoer ---------- */
    'yt-nrk-drivhus': yt('OYeEKxtKNR0', 'Hva er drivhuseffekten?', 'NRK Skole', 'nb'),
    'yt-nrk-klima': yt('IWDrd1f7TRU', 'Hva er menneskeskapte klimaendringer?', 'NRK Skole', 'nb'),
    'yt-met-drivhus': yt('SsChuNA5eyQ', 'Drivhuseffekten', 'Meteorologisk institutt', 'nb'),
    'yt-paxi': yt('K9BJfsgIMcE', 'Paxi – Drivhuseffekten', 'European Space Agency, ESA', 'nb'),
    'yt-nasa-drivhus': yt('SN5-DnOHQmE', 'What Is the Greenhouse Effect?', 'NASA Space Place'),
    'yt-minuteearth': yt('sTvqIijqvTg', 'How Do Greenhouse Gases Actually Work?', 'MinuteEarth'),
    'yt-teded-karbon': yt('A4cPmHGegKI', 'The carbon cycle – Nathaniel Manning', 'TED-Ed'),
    'yt-natgeo': yt('G4H1N_yXBiA', 'Causes and Effects of Climate Change', 'National Geographic'),
    'yt-iskjerne': yt('VjTsj-fi-p0', 'What do Antarctic ice cores tell us about climate change?', 'Natural History Museum'),
    'yt-forsuring': yt('ogZkV-Yj7Hc', 'What Is Ocean Acidification? | A Cartoon Crash Course', 'Pew')
  };
  Object.keys(T.sources).forEach(function (k) { T.sources[k].checked = checked; });
})();
