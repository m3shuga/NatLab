/* =====================================================================
   Klimaendringer – BILDER (fotografier med lisens)
   Filene ligger i content/klima/bilder/. Se README.md, del 8.
   Alle bildene er hentet fra Wikimedia Commons 25.11.2026.
   ===================================================================== */
(function () {
  const c = 'https://commons.wikimedia.org/wiki/File:';
  const P = { license: 'Offentlig eiendom (public domain)', licenseUrl: '' };
  const m = function (file, w, h, title, author, license, licenseUrl, nb, en) {
    return { file: 'content/klima/bilder/' + file + '.webp', width: w, height: h, title: title, author: author, license: license, licenseUrl: licenseUrl, source: 'Wikimedia Commons', url: c + encodeURIComponent(title.replace(/ /g, '_')), alt: { nb: nb, en: en } };
  };
  NatLab.topic('klima').media = {
    nigards1898: m('nigards1898', 900, 1075, 'Elvekrok and Nigardsbreen glacier, ca. 1898. (12608909375).jpg', 'Nils Olsson Reppen / Fylkesarkivet i Sogn og Fjordane', 'Ingen kjente begrensninger (Flickr Commons)', 'https://www.flickr.com/commons/usage/',
      'Svart-hvitt-bilde fra rundt 1898: gamle tømmerhus og en kvinne i forgrunnen, og Nigardsbreen som strekker seg ned i dalen bak.', 'Black-and-white photo from about 1898: old log houses and a woman in the foreground, and Nigardsbreen stretching down into the valley behind.'),
    nigards2017: m('nigards2017', 720, 837, 'Nigardsbreen from afar.jpg', 'Carsten Steger', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/',
      'Nigardsbreen i 2017, sett på avstand. Brearmen ligger høyt oppe mellom bratte fjellsider, med skog i forgrunnen.', 'Nigardsbreen in 2017, seen from a distance. The glacier tongue lies high up between steep mountainsides, with forest in the foreground.'),
    briksdal2003: m('briksdal2003', 700, 1050, 'Briksdalsbreen and the lake in Briksdalen, Stryn, Sogn og Fjordane, Norway, 2003 July.jpg', 'Aulikki Räsänen (foto), Ximonic / Simo Räsänen', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/',
      'Briksdalsbreen i 2003. Isen når nesten helt ned til vannet, og mange turister står ved breen.', 'Briksdalsbreen in 2003. The ice reaches almost down to the lake, and many tourists stand by the glacier.'),
    briksdal2013: m('briksdal2013', 960, 642, 'Briksdalsbreen with glacial lake, Sogn og Fjordane, Norway, 2013 June.jpg', 'Ximonic (Simo Räsänen)', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/',
      'Briksdalsbreen i 2013. Breen har trukket seg opp i fjellsiden, og det er bart berg mellom isen og vannet.', 'Briksdalsbreen in 2013. The glacier has pulled back up the mountainside, and there is bare rock between the ice and the lake.'),
    muir1941: m('muir1941', 492, 367, 'Changes in Glacier Bay- Muir Glacier (SVS25).jpg', 'William O. Field / NASA Scientific Visualization Studio', P.license, P.licenseUrl,
      'Muir Glacier i Alaska i august 1941: en bred, hvit brefront som går helt ut i fjorden.', 'Muir Glacier in Alaska in August 1941: a wide, white glacier front reaching all the way into the fjord.'),
    muir2004: m('muir2004', 622, 412, 'Muir Glacier, 2004, Glacier Bay National Park & Preserve (6808651941).jpg', 'Bruce Molnia, USGS / National Park Service', P.license, P.licenseUrl,
      'Samme sted i 2004: Fjorden er åpen, isen er borte fra bildet, og fjellsidene er grønne av skog.', 'The same place in 2004: the fjord is open, the ice has gone from the picture, and the mountainsides are green with forest.'),
    grinnell: m('grinnell', 861, 600, 'Grinnell Glacier 1938-2009.jpg', 'T. J. Hileman (1938, Glacier National Park Archives) og Lindsey Bengtson (2009)', P.license, P.licenseUrl,
      'To bilder av Grinnell Glacier: til venstre i 1938 med mye is, til høyre i 2009 med en liten isbre og en innsjø.', 'Two pictures of Grinnell Glacier: on the left in 1938 with a lot of ice, on the right in 2009 with a small glacier and a lake.'),
    arktisis: m('arktisis', 720, 1005, 'Arctic Sea Ice Minimum Comparison.png', 'NASA Earth Observatory (Jesse Allen)', P.license, P.licenseUrl,
      'To kart over havisen i Arktis i september: øverst i 2012 med mye mindre is, nederst i 1984.', 'Two maps of the Arctic sea ice in September: at the top in 2012 with much less ice, at the bottom in 1984.'),
    shishmaref: m('shishmaref', 960, 659, 'Shishmaref 1950-2012 grey.jpg', 'Hans Erren', 'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/',
      'Kart over øya Sarichef ved Shishmaref i Alaska som viser kystlinjen i 1950 og i 2012.', 'Map of Sarichef Island by Shishmaref in Alaska showing the coastline in 1950 and in 2012.'),
    kiribati: m('kiribati', 960, 640, 'As an extremely low-lying country, surrounded by vast oceans, Kiribati is at risk from the negative effects of climate change, such as sea-level rise and storm surges, 2011. Photo- Erin Magee - DFAT (12426392094).jpg', 'Erin Magee / DFAT', 'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0/',
      'Et skilt i Kiribati: «Det høyeste punktet på Sør-Tarawa: 3 meter. Stigende hav, druknende øyer. Redd disse øyene!»', 'A sign in Kiribati: “The highest point on South Tarawa: 3 metres. Rising seas, drowning islands. Save these islands!”'),
    holland: m('holland', 960, 720, 'Holland Island house.jpg', 'Flickr-bruker baldeaglebluff', 'CC BY-SA 2.0', 'https://creativecommons.org/licenses/by-sa/2.0/',
      'Et gammelt hus som står helt ute i vannet på en nesten forsvunnet øy.', 'An old house standing right out in the water on an island that has almost disappeared.'),
    korallbleking: m('korallbleking', 960, 720, 'NMSAS - coral bleaching (27416199680).jpg', 'NOAA National Marine Sanctuaries', P.license, P.licenseUrl,
      'Koraller under vann. Noen er brune og friske, andre er hvite og blekede.', 'Corals under water. Some are brown and healthy, others are white and bleached.'),
    gbr: m('gbr', 960, 679, 'Extensive bleaching in the Great Barrier Reef (Copernicus 2024-03-05).jpg', 'Den europeiske union, Copernicus Sentinel-2', 'Copernicus (fri bruk med kreditering)', '',
      'Satellittbilde av korallrev i Great Barrier Reef. Revene ser lyse turkise ut i det mørke havet.', 'Satellite image of coral reefs in the Great Barrier Reef. The reefs look light turquoise in the dark sea.')
  };
})();
