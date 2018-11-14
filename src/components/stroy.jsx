import React, { Component } from "react";

class Story extends Component {
  render() {
    const { number } = this.props;
    const story = [
      <React.Fragment>
        <h2>1. peatükk</h2>
        <h3>Kõrtsikaklus</h3>
        <p>
          Nelja Jõe kõrtsis on varajane õhtupooli ning maja on täis inimesi,
          haldjaid ja veel tosina rassi esindajaid – kõiks söömas, joomas,
          laulmas ja karjumas. Istute tagumises nurgas, oma tavapärases kohas,
          naudite sarve õlut ja mõtlete, mida õhtuks süüa, kui järsk mürts ja
          klirin ukse juures teie tähelepanu köidab. Näete ümber lükatud lauda,
          katkiseid nõusid ning maha aetud jooke, aga ka üht vihase moega
          päkapikku tõukamas samavõrd raevunud orki. Jälgite seda kõigest leebe
          huviga – Nelja Jõe kõrtsis on palju kaklusi.
        </p>
        <p>Siis märkate suitsu.</p>
        <p>
          Mustad pilvjad kombitsad voolavad mööda kõrtsi põrandat. Mil iganes
          suits mõnd külastajat puutub, ilmub tolle pilku metsikus ning ta
          kargab paljastatud relvadega püsti. Taipate ruttu, et kõrts on kurja
          loitsu rünnaku all. Kaklus puhkeb kakluse järel, kuid teie pilgud
          leiavad suitsu allika: grupp keepides tegelasi ukse juures. Nende
          rõivad ja maalingud meenutavad Necrode kultuse omi, kuid midagi nende
          juures on ... valesti. Tõusete püsti ja seate oma relvad valmis.
          Otsides läbi lämmatava suitsu teed sissetungijate poole lendab jalge
          ees pilbasteks õllevaat. Pöörate pilgu ülesse ning näete kolme
          hullunud kõrtsikülastajat enda poole tormamas. Peate neist kiiresti
          jagu saama, et selle tumeda maagia allikani jõuda.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>2. peatükk</h2>
        <h3>Kõrtsikaklus: lõpp</h3>
        <p>
          Tavalised külastajad ning mitu salapärast keebis tegelast lebavad
          teadvusetult te jalge ees ning võtate hetke, et vabastada keepides
          kurjamid nende relvadest ja varast. Siis kummutate ühe sõõmuga oma
          joogid ning ruttate kõrtsist välja ülejäänud keepides tegelasi
          jälitama.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>3. peatükk</h2>
        <h3>Tagaajamine</h3>
        <p>
          Kargate kõrtsi eesuksest välja ja näete käputäit salapäraseid keepides
          tegelasi üht noormeest läbi tänava vedamas. Mees püüdis vastu hakata,
          kuid löök vastu pead lõpetab tema vastupanu. Tekib kahtlus, et
          maagiliselt esile kutsutud kõrtsikaklus korraldati kõigest tähelepanu
          kõrvale juhtimiseks tolle ühe külastaja röövimiselt.
        </p>
        <p>
          Jooksete neile järele, kuid esimesel ristmikul nad jagunevad ja
          põgenevad eri teid pidi. Ühte salka juhib inimsoost mees. Teine
          paistab järgnevat ühele suurele paharetile. Pole näha, kumma salga
          käes noormees on.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>4. peatükk</h2>
        <h3>Võitlus Ruinose fanaatikuga</h3>
        <p>
          Jooksete salgale järele mööda käänulisi tänavaid. Hüüdmisulatusse
          jõudes hõikab üks teist: „Necrod! Seiske ja võidelge!”
        </p>
        <p>
          Pealik peatub ja pöördub aeglaselt teie poole. Ta langetab oma
          kapuutsi ja sülgab: „Necrod?” Ta paljastab oma teravad hambad. Käe
          välja sirutades istub tema õlale väike paharet. „Necrod on argpüksid.
          Nende jaoks on deemonid jõud ja midagi peale jõu nad ei ihkagi.”
        </p>
        <p>„Ning mida siis sina ihkad?” pärid vastu.</p>
        <p>Ta naeratus laieneb: „Turma.”</p>
      </React.Fragment>,
      <React.Fragment>
        <h2>5. peatükk</h2>
        <h3>Võitlus Ärritava Paharetiga</h3>
        <p>
          Jälitate paharetti ja tema jüngerid kitsa põiktänavani.
          Hüüdmisulatusse jõudes hõikab üks teist: „Deemon! Seisa ja võitle! Me
          ei karda sind, Necro kõnts.”
        </p>
        <p>
          iivad laperdamas, pöörab deemon ennast teie poole. Ta pea nõtkub üles
          ja alla ning kõlab hääl, nagu lämbuks keegi. Taipte, et see on deemoni
          naer: „Necrrrrod on narrrrid. Nad ei mõissssta meie tõelisssst
          otsssstarrrrvet. Mitte nii, kuis meie uued issssandad.”
        </p>
        <p>„Ja kes su isandad on?” pärite.</p>
        <p>Paharet avab oma laia suu: „Peatage nad! Mõrrrrvake nad.”</p>
      </React.Fragment>,
      <React.Fragment>
        <h2>6. peatükk</h2>
        <h3>Tagaajamise lõpp</h3>
        <p>
          Teie vaenlased lebavad alistatult maas, kuid röövitud noormeest
          nendega pole. Otsite langenud jüngritelt vihjeid, kuid ei leia midagi,
          peale paari kasuliku eseme. Siis kuulete oiet ja taipate, et üks
          vaenlastest on veel teadvusel – vaevu. Teda küsitledes saate teada
          kolm asja:
        </p>
        <p>
          Esiteks, tema grupp oli varem osa Necrode kultusest, kuid nad lõid
          neist lahku ja moodustasid oma sekti. Nad kutsuvad end Ruinose
          kultuseks.
        </p>
        <p>
          Teiseks, nad olid teel lädedal oleva kingsepapoe juurde, kus on peidus
          sissepääs Thandarialustesse koobastesse. Koopad viivad
          tseremooniaruumi, kus Ruinosed kogunevad.
        </p>
        <p>
          Kolmandaks, nad kavatsevad mõne tunni pärast deemoni manamiseks
          ohverdada röövitud mehe. Teil pole aega kaotada!
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>7. peatükk</h2>
        <h3>Rituaal</h3>
        <p>
          Lähete kingseppapoodi ning leiate sissepääsu koobastesse. Liigute
          kiiresti kustutatud laternatega, usaldades oma öist nägemist. Liikudes
          mööda varje jõuate suure tseremooniaruumini. Tosinate jüngrite ees
          seisab poodiumil loitsuv preestrinna. Preestrinna selja taga lõõmava
          söepanni kohal näete tohutut vormitut varju. Vari paistab loitsu iga
          taktiga kasvavat ja väänduvat.
        </p>
        <p>
          Taipate, et preestrinna on deemoni manamisest vaid loetud hetkede
          kaugusel. Paljastate oma relvad, kuid veel enne, kui jõuate varjust
          väljuda pöördub preestrinna teie poole: „ Teretulemast,” kaigub tema
          maagiliselt võimendatud hääl: „Tulge sisse ja olge tunnistajaks
          Thandari lõpule!”
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>8. peatükk</h2>
        <h3>Ruinose ülempreestrinna on alistatud</h3>
        <p>
          Preestrinna on surmavalt haavatud. Põlvili vajudes sisiseb ta:
          „Hiljaks jäite. Hiljaks ...”
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>9. peatükk</h2>
        <h3>Ruinose rituaal jõuab lõpule</h3>
        <p>
          Preestrinna karjub: „Hiljaks jäite”. Võidukalt ulgudes surub ta
          pistoda enesele rindu, viies rituaali nii lõpule. Põrandale vajudes
          kostub ta huulilt kähe sosin, mis ruumis kõhedusttekitavalt kajab:
          „Deemon on saabunud. Deemon on saabunud ja Thandar sureb!”
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>10. peatükk</h2>
        <h3>Ruinoslastel on vang</h3>
        <p>
          Üks lõrisev jünger surub sind vastu seina. Kiire hoobiga surmad oma
          vaenlase. Tajute miskit endast paremal ja pöördute järgmise ohu poole.
          Üllatuseks leiate enda eest noormehe, kelle Ruinoslased Nelja Jõe
          kõrtsist röövisid. Ribadel riietes on ta seina külge aheldatud. Kui
          vabastate ta köidikutest muutub õud tema pilgus süngeks
          otsusekindluseks. Ta korjab üles langenud jüngri relva ja koos asute
          taas võitlusesse.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>11. peatükk</h2>
        <h3>Deemon saab manatud</h3>
        <p>
          Vari tiheneb ja kambri täidab tohutu möire, kui deemon siseneb meie
          dimensiooni.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>12. peatükk</h2>
        <h3>Naerev vari</h3>
        <p>
          Möire valjeneb ja muutub seintel kajevaks madalaks naeruks. Söepanni
          kohal avaneb paar punaseid silmi ja irvitav sakiline suu. Kamber
          vappub deemoni naerus ning seinad mõranevad ja murduvad.
        </p>
        <p>
          Naeru toon muutub kõrgemaks, kuni sellest saab halisev kõkutamine, mis
          sunnib teid oma kõrvu katma. Laest pudeneb kivitkamakaid, kuid ulguv
          tuul tõstab need taas ülesse. Keerlevatest kividest moodustub pööris.
          Vaatate, kuidas jüngrid tõstavad oma käsi ülesse, kuid kivid rammivad
          end läbi nende kehade ja paiskavad neid kambris ringi.
        </p>
        <p>
          Deemoni silmade sära muutub eredamaks ning heidab põrandale ja
          sientele vormituid varje.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>13. peatükk</h2>
        <h3>Täitmatu Ingarash</h3>
        <p>
          Kambris kajava naeru saatel ilmub söepannist 6 meetri kõrgusele
          deemoni tohutu kogu. Deemon, nüüd tervenisti selles dimensioonis,
          kukub ja purustab oma tohutu kerega pedestali koos mitmete jüngritega.
          Põrand vappub ja olete kukkumise äärel. Deemon haarab lähima jüngri,
          topib ta oma avali suhu ning haukab temasse oma lõikavate hammastega.
          Vaatate õudusega, kuidas ta üha ja jälle jüngreid nopib ja neid enda
          kõrist alla heidab.{" "}
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>14. peatükk</h2>
        <h3>Slaughterclaw Tapaküüs</h3>
        <p>
          Möire valjeneb, kui söepannist 6 meetri kõrgusel moodustub suur
          sarviline koletis. Nüüd tervenisti selles dimensioonis, kukub deemon
          pedestalile. Ta maandub osavalt oma kätele ja jalgadele, tema lihased
          võtavad põrutuse vaevata vastu. Deemon tõmbab selja küüru ja näeb
          välja, nagu hüppevalmis kass.
        </p>
        <p>
          Samal ajal, kui ta liigutab ümbrust uurides aeglaselt oma pead, näete,
          kuidas tosinad kohad ta kätel lõhenevad, kui mustad ogad tema nahast
          välja kasvavad. Deemon hingab sisse ning tõmbute uue möirge ootuses
          tagasi, ent koletis hüppab hoopiski helitult jüngrite sekka.
        </p>
        <p>
          Ta tõmbab oma küünistega korra, kaks, kiskudes läbi liha ja luu. Ta
          hüppab edasi, pistes oma ogadega läbi kaks jüngrit, siis virutab oma
          sabaviibutusega kolmandale.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>15. peatükk</h2>
        <h3>Karaken Raudihu</h3>
        <p>
          Möire valjeneb, kui söepanni kohal võtab vormi deemoni tohutu keha.
          Nüüd tervenisti selles dimensioonis, kukub deemon raskelt oma
          kapjadega jalgele. Koletis sirutab ennast, kerkides vähemalt kolme
          mehe kõrguseks.
        </p>
        <p>
          Tema nahk on värske vere värvi. Deemon pingutab oma lihaseid, kõvasti.
          Vaatate, kuidas deemoni nahk jalgadel ja kätel poolest tosinast kohast
          lõheneb ning hallid plekilised turviseplaadid otse tema ihust välja
          kasvavad. Deemon uriseb.
        </p>
        <p>
          Ta haarab ühe jüngriitest oma küünistesse ja virutab abitu hingelise
          vastu maad. Siis astub ta pedestalilt maha.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h2>16. peatükk</h2>
        <h3>Kangelased on võidukad</h3>
        <p>
          Olete deemoni alistanud. Tahaksite kurnatult kokku vajuda, kuid
          sunnite end jalule jääma. On veel tööd teha. Enamus jüngreid on
          surnud, deemoni poolt armutult tapetud, kuid ellujäänud seote kinni,
          et Linnavalve saaks nad arreteerida.
        </p>
        <p>
          Lahingu käigus ahelaist päästetud noormees tõestas ennast väärt
          liitlasena. Ennast kogununa kõnetab ta teid ootamatu väärikusega.
        </p>
        <p>
          „Teie päralt on minu igavene tänu,” lausub ta madalalt kummardudes:
          „ma olen kindel, et mu isa tasustab teid suursuguselt.”
        </p>
        <p>Hämeldunult küsite, kes ta isa on.</p>
        <p>
          Noormees paistab jahmunud: „Te ei tea, kes ma olen? Ent ometi
          võitlesite selle kohutava deemoniga, et päästa minu elu? Ma kardan, et
          olen teie vooruslikkust alahinnanud, mu uued sõbrad.” Ta astub tagasi
          ja kummardub sügavalt: „Mina olen Kelathiel, Lord-Kuberner Rathieli
          poeg, teie teenistuses.”
        </p>
        <p>
          Naeraksite, kui nii väsinud poleks. Kõnelete kuningliku soo
          esindajaga, sest Rathiel on Imperaatori vend ning sinu ees olev mees
          on Imperaatori nõbu. Nähtavasti kavandas preestrinna deemonile
          kuninglikku ohvriandi.
        </p>
        <p>
          Ajal, mil Linnavalve vahistamistega tegeleb ja ravitseja Kelthaeli
          haavu hooldas, tõmbab miskit teid kambri ühe nurga poole. Leiate
          murtud jäänuse tapetud deemonist. Maine jäänus tuksleb käes õrnalt
          ning mõtisklete, mis maagiat selles veel peituda võib. Pakite eseme
          riidesse ja panete kotti. Tagasi maapinna poole kulgedes mõtlete, et
          mis ka kell olla võiks. Ehk on Nelja Jõe kõrts veel lahti. Jumalad
          teavad, üks jook kuluks ära.
        </p>
      </React.Fragment>,
      <React.Fragment>
        <h3>Epiloog</h3>
        <p>Mõned kuud hiljem.</p>
        <p>
          Tseremoonia on lühike ja privaatne. „Enamus thandarlasi ei tea, mis
          tol ööl sündis,” seletab Lord-Kuberner Rathiel: „ja ma eelistaksin,
          kui see nii ka jääks”
        </p>
        <p>
          Kaks valvurit vaatavad kiretult, kuidas Rathiel annab teile oma palava
          tänu ja tiitli: <strong>Thandari kaitsjad</strong>. Kui ta asetab
          lauale väikese kirstu kulda, proovite sellest keelduda, kuid tema
          keeldub omakorda teie keeldumisest.
        </p>
        <p>
          „Palun, võtke. Ma kardan, et teil läheb seda tervis varude
          soetamiseks.” Morni naeratusega rullib ta lahti kaardi. Ta osutab
          väikesele täpile kaardi servas: „See on Südame Lõpp. Väikene küla
          Alumisest jõest lõunas. Vaike kohake, hoiavad omaette – või nii on
          mulle räägitud. Nad on tuntud oma...” Lord-Kuberner vaikib. Ilmselgelt
          sügavas mõttes, kallutab ta oma pead ja annab siis nähtavasti alla.
          „Noh, nii palju, kui mina tean, pole nad millegi poolest tuntud. Teeb
          sama välja, kuna nad on vandunud Thandarile truudust ja on seega meie
          kaitse all.”
        </p>
        <p>
          Rathieli ilme muutub tõsiseks. „Tappes tolle koletise ja päästes mu
          poja tegite Thandarile suure teene. Nüüd palun ma taas teie abi. Minge
          Südame Lõppu. Minge ja uurige välja, mis juhtus. Ehk plaanib see
          Ruinose Sekt taas kord midagi kurja.”
        </p>
        <p>Pärite, et mis on Südame Lõpu rahvaga juhtunud.</p>
        <p>„Selles asi ongi,” vastab Lord-Kuberner: „kogu küla on kadunud.”</p>
      </React.Fragment>
    ];

    return <React.Fragment>{story[number]}</React.Fragment>;
  }
}

export default Story;
