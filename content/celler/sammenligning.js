/* =====================================================================
   Celler og virus – SAMMENLIGNING
   ===================================================================== */
NatLab.topic('celler').pages.sammenlign = {
  title: { nb: 'Sammenlign celler og virus', en: 'Compare cells and viruses' },
  lead: {
    nb: 'Hva har dyreceller, planteceller, bakterier og virus til felles – og hva skiller dem? Her får du hele oversikten.',
    en: 'What do animal cells, plant cells, bacteria and viruses have in common – and what sets them apart? Here is the full overview.'
  },
  page: {
    goals: [
      { nb: 'sammenligne celler hos ulike organismer og beskrive sammenhenger mellom oppbygning og funksjon', en: 'compare cells in different organisms and describe the links between structure and function' },
      { nb: 'forklare forskjellen på prokaryote og eukaryote celler', en: 'explain the difference between prokaryotic and eukaryotic cells' },
      { nb: 'forklare forskjellen på en bakterie og et virus', en: 'explain the difference between a bacterium and a virus' }
    ],
    keypoints: [
      { nb: 'Alle celler har **cellemembran, cytoplasma, arvestoff (DNA) og ribosomer**.', en: 'All cells have a **cell membrane, cytoplasm, genetic material (DNA) and ribosomes**.' },
      { nb: '**Eukaryote** celler (dyr og planter) har cellekjerne. **Prokaryote** celler (bakterier) har ikke.', en: '**Eukaryotic** cells (animals and plants) have a nucleus. **Prokaryotic** cells (bacteria) do not.' },
      { nb: 'Bare **planteceller** har kloroplaster og stor vakuole. Planter og bakterier har cellevegg – dyreceller har ikke.', en: 'Only **plant cells** have chloroplasts and a large vacuole. Plants and bacteria have a cell wall – animal cells do not.' },
      { nb: '**Virus er ikke celler.** De har bare arvestoff og proteinkappe, og må bruke en vertscelle for å formere seg.', en: '**Viruses are not cells.** They only have genetic material and a protein coat, and must use a host cell to multiply.' }
    ],
    sections: [
      {
        id: 'tabell', title: { nb: 'Hvem har hva?', en: 'Who has what?' },
        blocks: [
          { p: { nb: 'Tabellen viser hvilke deler som finnes hos de fire «prøvene». «Noen» betyr at det gjelder bare noen typer.', en: 'The table shows which parts are found in the four “specimens”. “Some” means it only applies to some types.' } },
          { grid: ['cellemembran', 'cytoplasma', 'arvestoff', 'ribosom', 'cellekjerne', 'mitokondrie', 'er', 'golgi', 'cellevegg', 'kloroplast', 'vakuole', 'lysosom', 'plasmid', 'flagell', 'kapsid', 'lipidhylster'] },
          { p: { nb: 'Legg merke til at det er fire ting **alle celler** har: cellemembran, cytoplasma, arvestoff og ribosomer. Virus mangler alle disse unntatt arvestoffet.', en: 'Notice that there are four things **all cells** have: a cell membrane, cytoplasm, genetic material and ribosomes. Viruses lack all of these except the genetic material.' }, src: ['snl-celle', 'sml-virus'] },
          { check: {
            q: { nb: 'Hvilken del finnes i bakterier, men IKKE i dyreceller?', en: 'Which part is found in bacteria but NOT in animal cells?' },
            options: [{ nb: 'Ribosomer', en: 'Ribosomes' }, { nb: 'Cellevegg', en: 'Cell wall' }, { nb: 'Cellemembran', en: 'Cell membrane' }],
            answer: 1,
            explain: { nb: 'Bakterier har cellevegg, det har ikke dyreceller. Ribosomer og cellemembran finnes i begge.', en: 'Bacteria have a cell wall, animal cells do not. Ribosomes and a cell membrane are found in both.' }
          } }
        ]
      },
      {
        id: 'pro-eu', title: { nb: 'Prokaryote og eukaryote celler', en: 'Prokaryotic and eukaryotic cells' },
        blocks: [
          { p: { nb: 'Biologer deler alle celler i to hovedgrupper. Ordene kommer fra gresk: **pro** betyr «før», **eu** betyr «ekte», og **karyon** betyr «kjerne».', en: 'Biologists divide all cells into two main groups. The words come from Greek: **pro** means “before”, **eu** means “true”, and **karyon** means “nucleus” (kernel).' }, src: ['sml-prokaryot', 'snl-eukaryoter'] },
          { table: {
            head: [{ nb: '', en: '' }, { nb: 'Prokaryote celler', en: 'Prokaryotic cells' }, { nb: 'Eukaryote celler', en: 'Eukaryotic cells' }],
            rows: [
              [{ nb: 'Eksempler', en: 'Examples' }, { nb: 'Bakterier', en: 'Bacteria' }, { nb: 'Dyr, planter, sopp', en: 'Animals, plants, fungi' }],
              [{ nb: 'Cellekjerne', en: 'Nucleus' }, { nb: 'Nei – DNA-et ligger fritt', en: 'No – the DNA lies free' }, { nb: 'Ja', en: 'Yes' }],
              [{ nb: 'Organeller med hinne', en: 'Membrane-bound organelles' }, { nb: 'Nei', en: 'No' }, { nb: 'Ja, f.eks. mitokondrier', en: 'Yes, e.g. mitochondria' }],
              [{ nb: 'Størrelse', en: 'Size' }, { nb: 'Små, ca. 1–5 µm', en: 'Small, about 1–5 µm' }, { nb: 'Større, ca. 10–100 µm', en: 'Larger, about 10–100 µm' }],
              [{ nb: 'Ribosomer', en: 'Ribosomes' }, { nb: 'Ja (litt mindre)', en: 'Yes (a bit smaller)' }, { nb: 'Ja', en: 'Yes' }]
            ],
            src: ['sml-prokaryot', 'snl-eukaryoter', 'sml-ribosom']
          } },
          { deeper: {
            title: { nb: 'Var mitokondriene en gang bakterier?', en: 'Were mitochondria once bacteria?' },
            blocks: [
              { p: { nb: 'Mitokondrier og kloroplaster har eget DNA og egne ribosomer som ligner bakterienes. Forskerne mener at de en gang var frittlevende bakterier som ble tatt opp av en større celle – og ble boende. Slik kan de første eukaryote cellene ha oppstått.', en: 'Mitochondria and chloroplasts have their own DNA and their own ribosomes that resemble those of bacteria. Scientists think they were once free-living bacteria that were taken up by a larger cell – and stayed. This may be how the first eukaryotic cells arose.' }, src: ['sml-mitokondrie', 'ndla-pro-eu'] }
            ]
          } }
        ]
      },
      {
        id: 'plante-dyr', title: { nb: 'Plantecelle og dyrecelle', en: 'Plant cell and animal cell' },
        blocks: [
          { p: { nb: 'Planteceller og dyreceller er begge eukaryote og har mye til felles. Forskjellene henger sammen med hvordan planter og dyr lever:', en: 'Plant cells and animal cells are both eukaryotic and have a lot in common. The differences are linked to how plants and animals live:' } },
          { list: [
            { nb: 'Planter står stille og lager sin egen mat av sollys → de har **kloroplaster**.', en: 'Plants stay in one place and make their own food from sunlight → they have **chloroplasts**.' },
            { nb: 'Planter har ikke skjelett → **cellevegg** og full **vakuole** gir støtte.', en: 'Plants have no skeleton → the **cell wall** and full **vacuole** provide support.' },
            { nb: 'Dyr beveger seg og spiser andre organismer → cellene er myke og kan ha mange former, og **lysosomer** bryter ned stoffer cellen tar inn.', en: 'Animals move and eat other organisms → their cells are soft and can have many shapes, and **lysosomes** break down substances the cell takes in.' }
          ], src: ['snl-kloroplaster', 'snl-vakuole', 'snl-lysosom'] },
          { diagram: 'plantecelle' },
          { explain: { nb: 'Forklar sammenhengen mellom **oppbygning og funksjon**: Hvorfor er det lurt for en plante at cellene har cellevegg, mens det er lurt for en hvit blodcelle å ikke ha det?', en: 'Explain the link between **structure and function**: why is it smart for a plant that its cells have a cell wall, while it is smart for a white blood cell not to have one?' } }
        ]
      },
      {
        id: 'bakterie-virus', title: { nb: 'Bakterie eller virus?', en: 'Bacterium or virus?' },
        blocks: [
          { p: { nb: 'Både bakterier og virus kan gi sykdom, og mange blander dem sammen. Men de er svært forskjellige:', en: 'Both bacteria and viruses can cause disease, and many people mix them up. But they are very different:' } },
          { table: {
            head: [{ nb: '', en: '' }, { nb: 'Bakterie', en: 'Bacterium' }, { nb: 'Virus', en: 'Virus' }],
            rows: [
              [{ nb: 'Er det en celle?', en: 'Is it a cell?' }, { nb: 'Ja, en hel organisme', en: 'Yes, a whole organism' }, { nb: 'Nei', en: 'No' }],
              [{ nb: 'Størrelse', en: 'Size' }, { nb: 'ca. 1–5 µm', en: 'about 1–5 µm' }, { nb: 'ofte ca. 0,02–0,3 µm (20–300 nm)', en: 'often about 0.02–0.3 µm (20–300 nm)' }],
              [{ nb: 'Formerer seg', en: 'Reproduces' }, { nb: 'Selv, ved å dele seg', en: 'By itself, by dividing' }, { nb: 'Bare inne i en vertscelle', en: 'Only inside a host cell' }],
              [{ nb: 'Ribosomer og stoffskifte', en: 'Ribosomes and metabolism' }, { nb: 'Ja', en: 'Yes' }, { nb: 'Nei', en: 'No' }],
              [{ nb: 'Behandling', en: 'Treatment' }, { nb: 'Antibiotika kan virke', en: 'Antibiotics can work' }, { nb: 'Antibiotika virker ikke. Vaksiner forebygger, noen antivirale midler finnes', en: 'Antibiotics do not work. Vaccines prevent, some antivirals exist' }],
              [{ nb: 'Eksempler på sykdom', en: 'Example diseases' }, { nb: 'Halsbetennelse, matforgiftning', en: 'Strep throat, food poisoning' }, { nb: 'Influensa, meslinger, forkjølelse', en: 'Flu, measles, colds' }]
            ],
            src: ['sml-bakterier', 'sml-virus', 'sml-antibiotika']
          } },
          { myth: { nb: '«Bakterier og virus er bare to ord for det samme – «baciller».»', en: '“Bacteria and viruses are just two words for the same thing – “germs”.”' }, truth: { nb: 'En bakterie er en levende celle med alt den trenger. Et virus er bare arvestoff i en proteinkappe og er rundt 10–100 ganger mindre. Derfor behandles de også ulikt.', en: 'A bacterium is a living cell with everything it needs. A virus is only genetic material in a protein coat and is about 10–100 times smaller. That is why they are also treated differently.' }, src: ['sml-virus', 'sml-bakterier'] },
          { discuss: { nb: 'Hvorfor tror du det er viktig at både leger og vanlige folk vet forskjellen på bakterier og virus?', en: 'Why do you think it matters that both doctors and ordinary people know the difference between bacteria and viruses?' } }
        ]
      }
    ],
    resources: ['yt-pro-eu', 'ndla-pro-eu', 'yt-bakterie-virus', 'yt-plante-dyr', 'yt-kapsel-kapsid']
  }
};
