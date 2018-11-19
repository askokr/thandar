export default [
  {
    id: 1,
    title: "Kõrtsikaklus",
    content: [
      "Nelja Jõe kõrtsis on varajane õhtupooli ning maja on täis inimesi, haldjaid ja veel tosina rassi esindajaid – kõik söömas, joomas, laulmas ja karjumas. Istute tagumises nurgas, oma tavapärases kohas, naudite sarve õlut ja mõtlete, mida õhtuks süüa, kui järsk mürts ja klirin ukse juures teie tähelepanu köidab. Näete ümber lükatud lauda, katkiseid nõusid ning maha aetud jooke, aga ka üht vihase moega päkapikku tõukamas samavõrd raevunud orki. Jälgite seda kõigest leebe huviga – Nelja Jõe kõrtsis on palju kaklusi.",
      "Siis märkate suitsu.",
      "Mustad pilvjad kombitsad voolavad mööda kõrtsi põrandat. Mil iganes suits mõnd külastajat puutub, ilmub tolle pilku metsikus ning ta kargab paljastatud relvadega püsti. Taipate ruttu, et kõrts on kurja loitsu rünnaku all. Kaklus puhkeb kakluse järel, kuid teie pilgud leiavad suitsu allika: grupp keepides tegelasi ukse juures. Nende rõivad ja maalingud meenutavad Necrode kultuse omi, kuid midagi nende juures on ... valesti. Tõusete püsti ja seate oma relvad valmis. Otsides läbi lämmatava suitsu teed sissetungijate poole lendab jalge ees pilbasteks õllevaat. Pöörate pilgu ülesse ning näete kolme hullunud kõrtsikülastajat enda poole tormamas. Peate neist kiiresti jagu saama, et selle tumeda maagia allikani jõuda."
    ],
    buttons: [
      {
        id: 2,
        class: "light",
        message: "Võit!"
      }
    ],
    rules: {
      title: "Ettevalmistus",
      content: [
        "Esimeseks vastaseks on Kütkestatud Külastajad (<strong>Enthralled Regulars</strong>)",
        "Moodusta vastase pakk segades kokku esimese võitluse kaardid (<b>1</b>) ja üldised kaardid (<b>S</b>).",
        "<strong>NB! Kui mängijaid on alla viie, võta iga puuduva mängija kohta üldistest kaartidest välja 3 kaarti!</strong>"
      ]
    }
  },
  {
    id: 2,
    title: "Kõrtsikaklus: lõpplahendus",
    content: [
      "Tavalised külastajad ning mitu salapärast keebis tegelast lebavad teadvusetult te jalge ees ning võtate hetke, et vabastada keepides kurjamid nende relvadest ja varast. Siis kummutate ühe sõõmuga oma joogid ning ruttate kõrtsist välja ülejäänud keepides tegelasi jälitama."
    ],
    buttons: [
      {
        id: 3,
        class: "light",
        message: "Edasi"
      }
    ],
    rules: {
      title: "Tasu",
      content: [
        "Sega 5 eliksiirikaarti (<b>Elixir</b>) ja jaga igale mängijale üks. <stroong>NB! Eliksiire saab kasutada vaid järgmise võitluse jooksul!</strong> Ülejäänud kaardid pane tagasi karpi.",
        "Kõik mängijad leiavad klassiaarde. Mängijad segavad oma klassi aardekaardid, tõmbavad neidt ühe ja lisavad selle enda isiklikku pakki (vajadusel võttes mõne kaardi välja).  Ülejäänud kaardid pane tagasi karpi."
      ]
    }
  },
  {
    id: 3,
    title: "Tagaajamine",
    content: [
      "Kargate kõrtsi eesuksest välja ja näete käputäit salapäraseid keepides tegelasi üht noormeest läbi tänava vedamas. Mees püüdis vastu hakata, kuid löök vastu pead lõpetab tema vastupanu. Tekib kahtlus, et maagiliselt esile kutsutud kõrtsikaklus korraldati kõigest tähelepanu kõrvale juhtimiseks tolle ühe külastaja röövimiselt.",
      "Jooksete neile järele, kuid esimesel ristmikul nad jagunevad ja põgenevad eri teid pidi. Ühte salka juhib inimsoost mees. Teine paistab järgnevat ühele suurele paharetile. Pole näha, kumma salga käes noormees on."
    ],
    buttons: [
      {
        id: 4,
        class: "secondary",
        message: "Jälita inimest"
      },
      {
        id: 5,
        class: "secondary",
        message: "Jälita paharetti"
      }
    ],
    rules: {
      title: "Ettevalmistus",
      content: [
        "Moodusta vastase pakk teise võitluse jaoks segades kokku teise võitluse kaardid (<b>2</b>) ja mängijate arvule vastav hulk üldisi kaarte (<b>S</b>).",
        "Kui järgned inimesele, on su vastaseks Ruinose Fanaatik (<b>Ruinos Zealot</b>), kui järgned paharetile, on su vastaseks Ärritav Paharet (<b>Vexing Imp</b>)"
      ]
    }
  },
  {
    id: 4,
    title: "Võitlus Ruinose fanaatikuga",
    content: [
      "Jooksete salgale järele mööda käänulisi tänavaid. Hüüdmisulatusse jõudes hõikab üks teist: „Necrod! Seiske ja võidelge!”",
      "Pealik peatub ja pöördub aeglaselt teie poole. Ta langetab oma kapuutsi ja sülgab: „Necrod?” Ta paljastab oma teravad hambad. Käe välja sirutades istub tema õlale väike paharet. „Necrod on argpüksid. Nende jaoks on deemonid jõud ja midagi peale jõu nad ei ihkagi.”",
      "„Ning mida siis sina ihkad?” pärite vastu.",
      "Ta naeratus laieneb: „Turma.”"
    ],
    buttons: [
      {
        id: 6,
        class: "light",
        message: "Võit"
      },
      {
        id: 3,
        class: "dark",
        message: "Kaotus"
      }
    ]
  },
  {
    id: 5,
    title: "Võitlus Ärritava Paharetiga",
    content: [
      "Jälitate paharetti ja tema jüngerid kitsa põiktänavani. Hüüdmisulatusse jõudes hõikab üks teist: „Deemon! Seisa ja võitle! Me ei karda sind, Necro kõnts.”",
      "Tiivad laperdamas, pöörab deemon ennast teie poole. Ta pea nõtkub üles ja alla ning kõlab hääl, nagu lämbuks keegi. Taipte, et see on deemoni naer: „Necrrrrod on narrrrid. Nad ei mõissssta meie tõelisssst otsssstarrrrvet. Mitte nii, kuis meie uued issssandad.”",
      "„Ja kes su isandad on?” pärite.",
      "Paharet avab oma laia suu: „Peatage nad! Mõrrrrvake nad.”"
    ],
    buttons: [
      {
        id: 6,
        class: "light",
        message: "Võit"
      },
      {
        id: 3,
        class: "dark",
        message: "Kaotus"
      }
    ],
    rules: {
      title: "Erireegel!",
      content: [
        "Kui võidad mõnda paharetist alamat (<b>Imp minion</b>), ära pane seda maha pandud kaartide hulka. Pane need hoopis eraldi mänguvälisesse hunnuksse."
      ]
    }
  },
  {
    id: 6,
    title: "Tagaajamise lõpp",
    content: [
      "Teie vaenlased lebavad alistatult maas, kuid röövitud noormeest nendega pole. Otsite langenud jüngritelt vihjeid, kuid ei leia midagi, peale paari kasuliku eseme. Siis kuulete oiet ja taipate, et üks vaenlastest on veel teadvusel – vaevu. Teda küsitledes saate teada kolm asja:",
      "Esiteks, tema grupp oli varem osa Necrode kultusest, kuid nad lõid neist lahku ja moodustasid oma sekti. Nad kutsuvad end Ruinose kultuseks.",
      "Teiseks, nad olid teel lädedal oleva kingsepapoe juurde, kus on peidus sissepääs Thandarialustesse koobastesse. Koopad viivad tseremooniaruumi, kus Ruinosed kogunevad.",
      "Kolmandaks, nad kavatsevad mõne tunni pärast deemoni manamiseks ohverdada röövitud mehe. Teil pole aega kaotada!"
    ],
    buttons: [
      {
        id: 7,
        class: "light",
        message: "Edasi"
      }
    ],
    rules: {
      title: "Tasu",
      content: [
        "Kõik mängijad leiavad klassiaarde. Mängijad segavad oma klassi aardekaardid, tõmbavad neidt ühe ja lisavad selle enda isiklikku pakki (vajadusel võttes mõne kaardi välja).  Ülejäänud kaardid pane tagasi karpi.",
        "Kõik mängjad saavad ühe Tegelaspunkti (<b>Character Point</b>), mille eest võivad nad tõsta mõnda enda oskust (<b>skill</b>), võimet (<b>aibility</b>) või hankida endale elupunkte juurde (<b>Aditional Health</b>)."
      ]
    }
  },
  {
    id: 7,
    title: "Rituaal",
    content: [
      "Lähete kingseppapoodi ning leiate sissepääsu koobastesse. Liigute kiiresti kustutatud laternatega, usaldades oma öist nägemist. Liikudes mööda varje jõuate suure tseremooniaruumini. Tosinate jüngrite ees seisab poodiumil loitsuv preestrinna. Preestrinna selja taga lõõmava söepanni kohal näete tohutut vormitut varju. Vari paistab loitsu iga taktiga kasvavat ja väänduvat.",
      "Taipate, et preestrinna on deemoni manamisest vaid loetud hetkede kaugusel. Paljastate oma relvad, kuid veel enne, kui jõuate varjust väljuda pöördub preestrinna teie poole: „ Teretulemast,” kaigub tema maagiliselt võimendatud hääl: „Tulge sisse ja olge tunnistajaks Thandari lõpule!”"
    ],
    buttons: [
      {
        id: 8,
        class: "light",
        message: "Ruinose ülempreestrinna on alistatud"
      },
      {
        id: 9,
        class: "dark",
        message: "Ruinose rituaal jõuab lõpule"
      }
    ],
    rules: {
      title: "Ettevalmistus",
      content: [
        "Vastaseks on Ruinose Ülempreestrinna (<b>Ruinos Archpriestess</b>).",
        "Moodusta vastase pakk teise võitluse jaoks segades kokku kolmanda võitluse kaardid (<b>3</b>) ja mängijate arvule vastav hulk üldisi kaarte (<b>S</b>).",
        "Otsi vastase pakist välja Ruinose Fanaatiku (<b>Ruinos Zealot</b>) ja Ärritava Pahareti (<b>Vexing Imp</b>) kaardid. Pane see, kumba sa võitsid eelmise võitluse ajal tagasi karpi, teine alustab võitlust Ruinose Ülempreestrinna ees (<b>Masters's area</b>).",
        "Mitmed efektid käsevad lisada kaarte Rituaalile. Pane need kaardid eraldi mänguvälisesse rituaalihunnikusse. (Neid läheb võitluse edenedes vaja.)",
        "Kõik Ruinose Ülempreesrinna võimed on eelistatud (<b>Favoured</b>). Kui vastase pakist tuleb valge kaart, käivituvad kõik tema võimed, ülevalt alla. Iga võime lahenemise järel täida tugu (<b>Market</b>) vastavalt vajadusele",
        "Kui mitu kaarti vastab võime tingimustele, lisa kõik Rituaali.",
        "See on mitmeosalone võitlus!  Ülempreestrinna võitmise järel, ära pane oma kaarte ära, võitlus jätkub samade elupunktide ja kaartidega."
      ]
    }
  },
  {
    id: 8,
    title: "Ruinose ülempreestrinna on alistatud",
    content: [
      "Preestrinna on surmavalt haavatud. Põlvili vajudes sisiseb ta: „Hiljaks jäite. Hiljaks ...”"
    ],
    buttons: [
      {
        id: 11,
        class: "light",
        message: "Edasi"
      }
    ],
    rules: {
      title: "Tulemus",
      content: [
        "Preestrinnat võites nõrgestasid Rituaali, pane Rituaali pealmised viis kaarti turupaki (<b>Market Deck</b>) alla.",
        "Preestrinnat võitnud mängija käik jätkub. Ta ei või rünnata ega mõjutada uut vastast, küll aga tema alamaid. "
      ]
    }
  },
  {
    id: 9,
    title: "Ruinose rituaal jõuab lõpule",
    content: [
      "Preestrinna karjub: „Hiljaks jäite”. Võidukalt ulgudes surub ta pistoda enesele rindu, viies rituaali nii lõpule. Põrandale vajudes kostub ta huulilt kähe sosin, mis ruumis kõhedusttekitavalt kajab: „Deemon on saabunud. Deemon on saabunud ja Thandar sureb!”"
    ],
    buttons: [
      {
        id: 11,
        class: "light",
        message: "Edasi"
      }
    ],
    rules: {
      title: "Ettevalmistus",
      content: [
        "Lisa kõik turul olevad kaardid rituaalile.Pane uued kaardid turule.",
        "Mängija käik jätkub. Ta ei või rünnata ega mõjutada uut vastast, küll aga tema alamaid. "
      ]
    }
  },
  {
    id: 10,
    title: "Ruinoslastel on vang",
    content: [
      "Üks lõrisev jünger surub sind vastu seina. Kiire hoobiga surmad oma vaenlase. Tajute miskit endast paremal ja pöördute järgmise ohu poole. Üllatuseks leiate enda eest noormehe, kelle Ruinoslased Nelja Jõe kõrtsist röövisid. Ribadel riietes on ta seina külge aheldatud. Kui vabastate ta köidikutest muutub õud tema pilgus süngeks otsusekindluseks. Ta korjab üles langenud jüngri relva ja koos asute taas võitlusesse."
    ],
    rules: {
      title: "Erireeglid",
      content: [
        "Kui vastase pakist tuleb välja vangi kaart (<b>Captive</b>), pane see kaart vastase kaardi kõrvale, aga mitte mängu",
        "Kui mõni mängija saab elupunkte, võib ta need endale või läheduses asuva mängija asemel anda vangile. Vang saab ühe käigu jooksul 4 või rohkem elu, läheb vangistatu kaart tema mahapandud kaartide hunnikusse. Seejärel on vang lihtsalt tavaline kaart mängija pakis.",
        "Vangile ei saa elupunkte anda, kuni vastase või mängija ees on mõni alam."
      ]
    }
  },
  {
    id: 11,
    title: "Deemon saab manatud",
    content: [
      "Vari tiheneb ja kambri täidab tohutu möire, kui deemon siseneb meie dimensiooni."
    ],
    buttons: [
      {
        id: 12,
        class: "primary",
        message: "Sinine rituaal"
      },
      {
        id: 13,
        class: "success",
        message: "Roheline rituaal"
      },
      {
        id: 14,
        class: "danger",
        message: "Punane rituaal"
      },
      {
        id: 15,
        class: "warning",
        message: "Kollane rituaal"
      }
    ],
    rules: {
      title: "Erireeglid",
      content: [
        "<strong>Enne vastase käiku lahenda rituaal!</strong>",
        "Võta Rituaali kaardid ja jaga need värvi järgi hunnikutesse",
        "Kõige rogkemate kaartidega värv määrab rituaali värvi. Kui mõned värvid on viigis, lisa turupakist rituaalile kaarte, kuni mõni värv saavutab edu.",
        "Iga värviline kaart omab järgnevat mõju: <ul><li><b>Sinine:</b> iga sinise kaardi eest, pane kõigi mägijate seas kõige tugevam kilbiga tšempion maha.</li><li><b>Roheline:</b> alustades aktiivsest mängijast ja liikudes päripäeva, panevad mängijad iga rohelise kaardi eest oma käest ühe juhusliku kaardi maha.</li><li><b>Punane:</b> kõik mängijad kaotavad kahekordse punaste kaartide arvu elupunkte.</li><li><b>Kollane:</b> vastane saab kolmekordse kollaste kaartide arvu elusid juurde.</li></ul>",
        "Sega kõik rituaali kaardid tagasi turupakki. Sega kõik Ülempreestrinna küljes olnud <b>Mastery</b> kaardid ja kõik vastase mahapandud kaardid tagasi vastase pakki. Mängus olevad alamad jäävad mängu."
      ]
    }
  },
  {
    id: 12,
    title: "Naerev vari",
    content: [
      "Möire valjeneb ja muutub seintel kajevaks madalaks naeruks. Söepanni kohal avaneb paar punaseid silmi ja irvitav sakiline suu. Kamber vappub deemoni naerus ning seinad mõranevad ja murduvad.",
      "Naeru toon muutub kõrgemaks, kuni sellest saab halisev kõkutamine, mis sunnib teid oma kõrvu katma. Laest pudeneb kivitkamakaid, kuid ulguv tuul tõstab need taas ülesse. Keerlevatest kividest moodustub pööris. Vaatate, kuidas jüngrid tõstavad oma käsi ülesse, kuid kivid rammivad end läbi nende kehade ja paiskavad neid kambris ringi.",
      "Deemoni silmade sära muutub eredamaks ning heidab põrandale ja sientele vormituid varje."
    ],
    buttons: [
      {
        id: 16,
        class: "light",
        message: "Deemon on surnud"
      },
      {
        id: 7,
        class: "dark",
        message: "Kaotus"
      }
    ],
    rules: {
      title: "Erireeglid",
      content: [
        "Kui Naerev Vari heidab varju (<b>Casts a Shadow</b>), pane turupaki ülemine kaart nägu allapoole turu kõige vasema kaardi alla, millel juba pole varju.",
        "Kui sa ostad turult kaardi, pane selle all olev vari mängust välja.",
        "Kui mängija peab lisama varju, aga kõigil kaartidel turul juba on vari, ei pea see käik enam varje lisama. Kui vastase võimed on lahenenud, ründavad varjud. Keera kõik viis Varju ümber. Vastane saab viie varju maksumusele võrdselt rünnakupunke. Seejärel ohverda kõik varjud."
      ]
    }
  },
  {
    id: 13,
    title: "Täitmatu Ingarash",
    content: [
      "Kambris kajava naeru saatel ilmub söepannist 6 meetri kõrgusele deemoni tohutu kogu. Deemon, nüüd tervenisti selles dimensioonis, kukub ja purustab oma tohutu kerega pedestali koos mitmete jüngritega. Põrand vappub ja olete kukkumise äärel. Deemon haarab lähima jüngri, topib ta oma avali suhu ning haukab temasse oma lõikavate hammastega. Vaatate õudusega, kuidas ta üha ja jälle jüngreid nopib ja neid enda kõrist alla heidab."
    ],
    buttons: [
      {
        id: 16,
        class: "light",
        message: "Deemon on surnud"
      },
      {
        id: 7,
        class: "dark",
        message: "Kaotus"
      }
    ],
    rules: {
      title: "Erireeglid",
      content: [
        "Kui Ingarash 'kugistab' (<b>Gobble Up</b>) mõne kaardi, lisa see nägu allapoole mänguvälisesse 'kugistatud' kaartide hunnikusse.",
        "Enne võitluse algust kugistab Ingarash kogu turu."
      ]
    }
  },
  {
    id: 14,
    title: "Tapaküüs Slaughterclaw",
    content: [
      "Möire valjeneb, kui söepannist 6 meetri kõrgusel moodustub suur sarviline koletis. Nüüd tervenisti selles dimensioonis, kukub deemon pedestalile. Ta maandub osavalt oma kätele ja jalgadele, tema lihased võtavad põrutuse vaevata vastu. Deemon tõmbab selja küüru ja näeb välja, nagu hüppevalmis kass.",
      "Samal ajal, kui ta liigutab ümbrust uurides aeglaselt oma pead, näete, kuidas tosinad kohad ta kätel lõhenevad, kui mustad ogad tema nahast välja kasvavad. Deemon hingab sisse ning tõmbute uue möirge ootuses tagasi, ent koletis hüppab hoopiski helitult jüngrite sekka.",
      "Ta tõmbab oma küünistega korra, kaks, kiskudes läbi liha ja luu. Ta hüppab edasi, pistes oma ogadega läbi kaks jüngrit, siis virutab oma sabaviibutusega kolmandale."
    ],
    buttons: [
      {
        id: 16,
        class: "light",
        message: "Deemon on surnud"
      },
      {
        id: 7,
        class: "dark",
        message: "Kaotus"
      }
    ],
    rules: {
      title: "Erireeglid",
      content: [
        "Kui Tapaküüs 'kasvatab oga' (<b>Sprouts a Spike</b>), pane turupaki ülemine kaart nägu ülespoole tema kõrvale ogaks.",
        "Kui mõni mängija teeb Tapaküünele kahju, saab ta ogade kogumaksumise jagu kagju vastu. Seejärel ohverda kõik ogad. Tšempionid ei kaitse selle kahju eest!"
      ]
    }
  },
  {
    id: 15,
    title: "Karaken Raudihu",
    content: [
      "Möire valjeneb, kui söepanni kohal võtab vormi deemoni tohutu keha. Nüüd tervenisti selles dimensioonis, kukub deemon raskelt oma kapjadega jalgele. Koletis sirutab ennast, kerkides vähemalt kolme mehe kõrguseks.",
      "Tema nahk on värske vere värvi. Deemon pingutab oma lihaseid, kõvasti. Vaatate, kuidas deemoni nahk jalgadel ja kätel poolest tosinast kohast lõheneb ning hallid plekilised turviseplaadid otse tema ihust välja kasvavad. Deemon uriseb.",
      "Ta haarab ühe jüngriitest oma küünistesse ja virutab abitu hingelise vastu maad. Siis astub ta pedestalilt maha."
    ],
    buttons: [
      {
        id: 16,
        class: "light",
        message: "Deemon on surnud"
      },
      {
        id: 7,
        class: "dark",
        message: "Kaotus"
      }
    ],
    rules: {
      title: "Erireeglid",
      content: [
        "Kui Karaken 'kasvatab lihast turvise' (<b>Forges a Flesh Armor</b>), pane turupaki ülemie kaart nägu ülespoole Karakeni kõrvale 'lihast turviseks'.",
        "Kui mõni mängija teeb Karakenile kahju ja Karakenil on mõni kaart 'lihast turviseks', peab ta tegema esmalt tegema kahju 'lihast turvisele'.",
        "Kui turvisekaart saab kahju võrdselt oma maksuvusega, ohverda see.",
        "Kui turvisekaart ei saa käigu jooksul piisavalt kahju, et see tuleks ohverdada, läheb kahju kaotsi.",
        "Turvisekaardid pole alamad. Kui mingi kaart teeb 4 kahju vastasele ja kõigile tema alamatele, saab Karaken 4 kahju ja see tuleb jaotada tema turvisekaartide ja tema vahel ülalmainitud reeglite alusel."
      ]
    }
  },
  {
    id: 16,
    title: "Kangelased on võidukad",
    content: [
      "Olete deemoni alistanud. Tahaksite kurnatult kokku vajuda, kuid sunnite end jalule jääma. On veel tööd teha. Enamus jüngreid on surnud, deemoni poolt armutult tapetud, kuid ellujäänud seote kinni, et Linnavalve saaks nad arreteerida.",
      "Lahingu käigus ahelaist päästetud noormees tõestas ennast väärt liitlasena. Ennast kogununa kõnetab ta teid ootamatu väärikusega.",
      "„Teie päralt on minu igavene tänu,” lausub ta madalalt kummardudes: „ma olen kindel, et mu isa tasustab teid suursuguselt.”",
      "Hämeldunult küsite, kes ta isa on.",
      "Noormees paistab jahmunud: „Te ei tea, kes ma olen? Ent ometi võitlesite selle kohutava deemoniga, et päästa minu elu? Ma kardan, et olen teie vooruslikkust alahinnanud, mu uued sõbrad.” Ta astub tagasi ja kummardub sügavalt: „Mina olen Kelathiel, Lord-Kuberner Rathieli poeg, teie teenistuses.”",
      "Naeraksite, kui nii väsinud poleks. Kõnelete kuningliku soo esindajaga, sest Rathiel on Imperaatori vend ning sinu ees olev mees on Imperaatori nõbu. Nähtavasti kavandas preestrinna deemonile kuninglikku ohvriandi.",
      "Ajal, mil Linnavalve vahistamistega tegeleb ja ravitseja Kelthaeli haavu hooldas, tõmbab miskit teid kambri ühe nurga poole. Leiate murtud jäänuse tapetud deemonist. Maine jäänus tuksleb käes õrnalt ning mõtisklete, mis maagiat selles veel peituda võib. Pakite eseme riidesse ja panete kotti. Tagasi maapinna poole kulgedes mõtlete, et mis ka kell olla võiks. Ehk on Nelja Jõe kõrts veel lahti. Jumalad teavad, üks jook kuluks ära."
    ],
    buttons: [
      {
        id: 17,
        class: "light",
        message: "Edasi"
      }
    ],
    rules: {
      title: "Erireeglid",
      content: [
        "Lisa deemonile vastav Reliikvia kaart turupakki.",
        "Kõik mängjad saavad ühe Tegelaspunkti (<b>Character Point</b>), mille eest võivad nad tõsta mõnda enda oskust (<b>skill</b>), võimet (<b>aibility</b>) või hankida endale elupunkte juurde (<b>Aditional Health</b>)."
      ]
    }
  },
  {
    id: 17,
    title: "Epiloog",
    content: [
      "Tseremoonia on lühike ja privaatne. „Enamus thandarlasi ei tea, mis tol ööl sündis,” seletab Lord-Kuberner Rathiel: „ja ma eelistaksin, kui see nii ka jääks”",
      "Kaks valvurit vaatavad kiretult, kuidas Rathiel annab teile oma palava tänu ja tiitli: <strong>Thandari kaitsjad</strong>. Kui ta asetab lauale väikese kirstu kulda, proovite sellest keelduda, kuid tema keeldub omakorda teie keeldumisest.",
      "„Palun, võtke. Ma kardan, et teil läheb seda tervis varude soetamiseks.” Morni naeratusega rullib ta lahti kaardi. Ta osutab väikesele täpile kaardi servas: „See on Südame Lõpp. Väikene küla Alumisest jõest lõunas. Vaike kohake, hoiavad omaette – või nii on mulle räägitud. Nad on tuntud oma...” Lord-Kuberner vaikib. Ilmselgelt sügavas mõttes, kallutab ta oma pead ja annab siis nähtavasti alla. „Noh, nii palju, kui mina tean, pole nad millegi poolest tuntud. Teeb sama välja, kuna nad on vandunud Thandarile truudust ja on seega meie kaitse all.”",
      "Rathieli ilme muutub tõsiseks. „Tappes tolle koletise ja päästes mu poja tegite Thandarile suure teene. Nüüd palun ma taas teie abi. Minge Südame Lõppu. Minge ja uurige välja, mis juhtus. Ehk plaanib see Ruinose Sekt taas kord midagi kurja.”",
      "Pärite, et mis on Südame Lõpu rahvaga juhtunud.",
      "„Selles asi ongi,” vastab Lord-Kuberner: „kogu küla on kadunud.”"
    ]
  }
];
