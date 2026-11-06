/* =====================================================================
   Økologi – KILDER, VIDEOER og BILDER
   (samme oppbygning som content/celler/kilder.js – se README.md)
   ===================================================================== */
(function () {
  const T = NatLab.topic('okologi');
  const checked = '2026-11-06';
  const snl = 'Store norske leksikon';
  const ndla = 'NDLA';
  const s = function (slug, title) { return { title: title, publisher: snl, url: 'https://snl.no/' + slug, type: 'artikkel', lang: 'nb' }; };

  T.sources = {
    /* ---------- Store norske leksikon ---------- */
    'snl-okosystem': s('%C3%B8kosystem', 'økosystem'),
    'snl-okologi': s('%C3%B8kologi', 'økologi'),
    'snl-biotiske': s('biotiske_faktorar', 'biotiske faktorar'),
    'snl-abiotiske': s('abiotiske_faktorar', 'abiotiske faktorar'),
    'snl-naeringskjede': s('n%C3%A6ringskjede', 'næringskjede'),
    'snl-naeringsnett': s('n%C3%A6ringsnett', 'næringsnett'),
    'snl-naeringspyramide': s('n%C3%A6ringspyramide', 'næringspyramide'),
    'snl-samfunn': s('%C3%B8kologisk_samfunn', 'økologisk samfunn'),
    'snl-produsent': s('produsent_-_biologi', 'produsent – biologi'),
    'snl-konsument': s('konsument_-_organisme', 'konsument – organisme'),
    'snl-nedbrytere': s('nedbrytarar', 'nedbrytarar'),
    'snl-populasjon': s('populasjon', 'populasjon'),
    'snl-nisje': s('nisje_-_biologi', 'nisje – biologi'),
    'snl-konkurranse': s('konkurranse_-_%C3%B8kologi', 'konkurranse – økologi'),
    'snl-habitat': s('habitat', 'habitat'),
    'snl-interspesifikk': s('interspesifikk_konkurranse', 'interspesifikk konkurranse'),
    'snl-truede-arter': s('truede_arter', 'truede arter'),
    'snl-tilpasning': s('tilpasning_-_biologi', 'tilpasning – biologi'),
    'snl-energi': s('energi', 'energi'),
    'snl-termodynamikk': s('termodynamikk', 'termodynamikk'),
    'snl-raudate': s('raud%C3%A5te', 'raudåte'),
    'snl-norskehavet': s('Norskehavet', 'Norskehavet'),
    'snl-atlanterhavsstrommen': s('Den_norske_atlanterhavsstr%C3%B8mmen', 'Den norske atlanterhavsstrømmen'),
    'snl-sild': s('sild', 'sild'),
    'snl-torsk': s('torsk', 'torsk'),
    'snl-spekkhogger': s('spekkhogger', 'spekkhogger'),
    'snl-lunde': s('lunde', 'lunde'),
    'snl-havorn': s('hav%C3%B8rn', 'havørn'),
    'snl-steinkobbe': s('steinkobbe', 'steinkobbe'),
    'snl-taskekrabbe': s('taskekrabbe', 'taskekrabbe'),
    'snl-krakeboller': s('kr%C3%A5keboller', 'kråkeboller'),
    'snl-tareskog': s('tareskog', 'tareskog'),
    'snl-krill': s('krill', 'krill'),
    'snl-planteplankton': s('planteplankton', 'planteplankton'),
    'snl-dyreplankton': s('dyreplankton', 'dyreplankton'),
    'snl-gaupe': s('gaupe', 'gaupe'),
    'snl-ulv': s('ulv', 'ulv'),
    'snl-elg': s('elg', 'elg'),
    'snl-raadyr': s('r%C3%A5dyr', 'rådyr'),
    'snl-ekorn': s('ekorn', 'ekorn'),
    'snl-hare': s('hare', 'hare'),
    'snl-rodrev': s('r%C3%B8drev', 'rødrev'),
    'snl-kattugle': s('kattugle', 'kattugle'),
    'snl-kjottmeis': s('kj%C3%B8ttmeis', 'kjøttmeis'),
    'snl-honsehauk': s('h%C3%B8nsehauk', 'hønsehauk'),
    'snl-skogmus': s('sm%C3%A5skogmus', 'småskogmus'),
    'snl-gran': s('gran', 'gran'),
    'snl-blaabaer': s('bl%C3%A5b%C3%A6r', 'blåbær'),
    'snl-meitemark': s('meitemark', 'meitemark'),
    'snl-sopp': s('sopp', 'sopp'),
    'snl-barskog': s('barskog', 'barskog'),
    'snl-altetende': s('altetende_dyr', 'altetende dyr'),
    'snl-predator': s('predator', 'predator'),
    'snl-kamuflasje': s('kamuflasje_hos_dyr', 'kamuflasje hos dyr'),
    'snl-dvale': s('dvale', 'dvale'),
    'snl-trekkfugler': s('trekkfugler', 'trekkfugler'),
    'snl-biologisk-mangfold': s('biologisk_mangfold', 'biologisk mangfold'),
    'snl-naturkrisen': s('naturkrisen', 'naturkrisen'),
    'snl-habitatodeleggelse': s('habitat%C3%B8deleggelse', 'habitatødeleggelse'),
    'snl-rodliste': s('r%C3%B8dliste', 'rødliste'),
    'snl-fremmedarter': s('Fremmedartslista', 'Fremmedartslista'),
    'snl-brunskogsnegl': s('brunskogsnegl', 'brunsnegl (brunskogsnegl)'),
    'snl-miljogift': s('milj%C3%B8gift', 'miljøgift'),
    'snl-bioakkumulering': s('bioakkumulering', 'bioakkumulering'),
    'snl-overfiske': s('overfiske', 'overfiske'),
    'snl-klimaendringer': s('klimaendringer', 'klimaendringer'),
    'snl-rovviltforvaltning': s('rovviltforvaltning', 'rovviltforvaltning'),
    'snl-reindrift': s('reindrift', 'reindrift'),
    'snl-naturforvaltning': s('naturforvaltning', 'naturforvaltning'),
    'snl-attenborough': s('David_Attenborough', 'David Attenborough'),
    'snl-vippepunkt': s('vippepunkt_-_%C3%B8kologi', 'vippepunkter i natur, klima og økosystemer'),

    /* ---------- NDLA ---------- */
    'ndla-okologi': { title: 'Økologi og økosystemer', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/okologi-og-okosystemer/4d3fbaa1ba', type: 'artikkel', lang: 'nb' },
    'ndla-naeringskjeder': { title: 'Næringskjeder, næringsnett og stoffkretsløp', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/naringskjeder-naringsnett-og-stoffkretslop/e1bb5fefc1', type: 'artikkel', lang: 'nb' },
    'ndla-abiotisk': { title: 'Abiotiske og biotiske faktorer', publisher: ndla, url: 'https://ndla.no/r/forvaltning-og-drift-na-lga-vg2/abiotiske-og-biotiske-faktorer/fdaaa5acbd', type: 'artikkel', lang: 'nb' },
    'ndla-havmiljo': { title: 'Havmiljøet – abiotiske faktorer', publisher: ndla, url: 'https://ndla.no/r/naturbasert-produksjon-og-tjenesteyting-na-nab-vg1/havmiljoet---abiotiske-faktorer/fb9cbb5ddb', type: 'artikkel', lang: 'nb' },
    'ndla-tilpasning': { title: 'Tilpasning og evolusjon', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/tilpasning-og-evolusjon/3f20d0c21b', type: 'artikkel', lang: 'nb' },
    'ndla-konkurranse': { title: 'Konkurranse og nisjefordeling', publisher: ndla, url: 'https://ndla.no/r/forvaltning-og-drift-na-lga-vg2/konkurranse-og-nisjefordeling/6cc1c216f5', type: 'artikkel', lang: 'nb' },
    'ndla-biomangfold': { title: 'Biologisk mangfold', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/biologisk-mangfold/db1f76017b', type: 'artikkel', lang: 'nb' },
    'ndla-feltarbeid': { title: 'Planlegging av feltarbeid', publisher: ndla, url: 'https://ndla.no/r/biologi-1/planlegging-av-feltarbeid/c8e9b76126', type: 'artikkel', lang: 'nb' },
    'ndla-tradisjonell': { title: 'Tradisjonell kunnskap', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/tradisjonell-kunnskap/ed76e41d5d', type: 'artikkel', lang: 'nb' },
    'ndla-oppgaver': { title: 'Øvingsoppgaver om økologi', publisher: ndla, url: 'https://ndla.no/r/naturfag-sf/ovingsoppgaver-om-okologi/dbebc4b92a', type: 'artikkel', lang: 'nb' },

    /* ---------- Videoer ---------- */
    'yt-naeringsnett': { title: 'Food Webs and Energy Pyramids: Bedrocks of Biodiversity', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=-oVavgmveyY', type: 'video', lang: 'en' },
    'yt-relasjoner': { title: 'Ecological Relationships', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=rNjPI84sApQ', type: 'video', lang: 'en' },
    'yt-kretslop': { title: 'Carbon and Nitrogen Cycles', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=NHqEthRCqQ4', type: 'video', lang: 'en' },
    'yt-autotrof': { title: 'Autotrophs and Heterotrophs', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=f8G7IulYxiA', type: 'video', lang: 'en' },
    'yt-okologi-repetisjon': { title: 'Ecology Review: Food Chains & Webs, Relationships, Nitrogen & Carbon Cycles, Effects on Biodiversity', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=srpl5YRw-_U', type: 'video', lang: 'en' },
    'yt-plantetilpasning': { title: 'Plants: Diversity, Structure, & Adaptations', publisher: 'Amoeba Sisters (YouTube)', url: 'https://www.youtube.com/watch?v=A_DF246uVlU', type: 'video', lang: 'en' },
    'yt-our-planet-skog': { title: 'Our Planet | Forests | FULL EPISODE (David Attenborough)', publisher: 'Netflix (YouTube)', url: 'https://www.youtube.com/watch?v=JkaxUblCGz0', type: 'video', lang: 'en' },
    'yt-our-planet-en': { title: 'Our Planet | One Planet | FULL EPISODE (David Attenborough)', publisher: 'Netflix (YouTube)', url: 'https://www.youtube.com/watch?v=GfO-3Oir-qM', type: 'video', lang: 'en' },
    'yt-attenborough-life': { title: 'David Attenborough: A Life on Our Planet – Official Trailer', publisher: 'Netflix (YouTube)', url: 'https://www.youtube.com/watch?v=64R2MYUt394', type: 'video', lang: 'en' },
    'yt-spekkhogger-sild': { title: 'Humpback Whales and Orcas Feed Together | North Atlantic', publisher: 'BBC Earth (YouTube)', url: 'https://www.youtube.com/watch?v=MGwEXjv3fYw', type: 'video', lang: 'en' }
  };
  for (const k in T.sources) T.sources[k].checked = T.sources[k].checked || checked;

  /* ---------- Bilder (legges til i bilder.js når de er lastet ned) ---------- */
  T.media = T.media || {};
})();
