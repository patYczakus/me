var obecnyDowcip = -1

const dowcipy = [
    // te z odsłanianiem
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Dlaczego woda nie zdała egzaminu?", "an": "Bo ją oblała!" }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Gdzie są dzieci po wybuchowej zabawie?", "an": "Wszędzie." }
    },
    {
        isJSON: true,
        author: "Patryktopek [👑] [⚜️]", 
        index: { "qu": "Dlaczego blondynka otworzyła okno po zrobieniu kisielu?", "an": "Bo na opakowaniu pisało \"gotowe w przeciągu 5 minut\"." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Jaki jest skład chemiczny małżeństwa?", "an": "Mało zasad, dużo kwasów." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Jak nazywa się rosyjskie małżeństwo?", "an": "Związek Radziecki." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Co mówi Rusek, kiedy chce użądlić ją pszczoła?", "an": "Nie, pani Maju!" }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Dlaczego Ania ma przezwisko śmietana?", "an": "Bo jest bita." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Co robi Ania na huśtawce?", "an": "Wkurza snipera." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Wiedzieliście, że największy problem z podróbkami ma przemysł obuwniczy?", "an": "Nawet połowa wszystkich butów jest lewa." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Co oznacza 200 tysięcy podniesionych rąk?", "an": "100-tysięczną armię francuską." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Co to jest - kiedy się go nie używa to wisi, kiedy jest potrzebny to stoi, a później z niego kapie?", "an": "Parasol." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Co mówi informatyk jak dostanie na urodziny pendriva?", "an": "Dzięki za pamięć." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Jakie jest najgorsze połączenie chorób?", "an": "Alzheimer i biegunka - biegniesz, ale nie wiesz dokąd." }
    },
    {
        isJSON: true, 
        author: "Patryktopek [👑] [⚜️]",
        index: { "qu": "Śniadanie na kacu jest jak przeszczep.", "an": "Przyjmie się albo nie." }
    },

    // i te bez
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]", 
        index: "Dwóm przyjaciółkom po długich namowach, udało się wreszcie przekonać mężów, żeby zostali w domu, a one same wychodzą na kolację do knajpy, żeby przypomnieć sobie dawne czasy.<br />Po zabawnie spędzonym wieczorze, dwóch butelkach białego wina, szampanie i buteleczce wódki opuszczają restaurację całkowicie pijane!<br />W drodze powrotnej obie nachodzi nagła potrzeba, może dlatego że dużo wypiły.<br />Nie wiedząc gdzie iść się wysikać, jedna mówi do drugiej:<br />- Wejdźmy na ten cmentarz, tutaj na pewno nikogo nie będzie.<br />Wchodzą na cmentarz, najpierw jedna ściąga majtki, sika, wyciera się tymi majtkami i oczywiście je wyrzuca.<br />Widząc to, druga od razu sobie przypomina, ze ma na sobie drogą markową bieliznę od męża i szkoda by ją wyrzucić.<br />Ściąga więc majtki, wkłada je do kieszeni, sika i zrywa kokardę z pierwszego lepszego wieńca, żeby się podetrzeć.<br />Na drugi dzień mąż pierwszej, dzwoni do męża drugiej:<br />- Jurek, nawet sobie nie wyobrażasz co się stało! Koniec mojego małżeństwa!<br />- Dlaczego?<br />- Moja żona wróciła o 5 rano kompletnie pijana i na dodatek bez majtek! Od razu wywaliłem ją z domu.<br /> - Marek, to jeszcze nic, wiesz co wykombinowała moja! Nie tylko przyszła pijana i bez majtek, ale miała włożoną w tyłek czerwoną kokardę z napisem: NIGDY CIĘ NIE ZAPOMNIMY, ŁUKASZ, IGNAŚ, STASIEK I POZOSTALI PRZYJACIELE Z SIŁOWNI."
    },
    {
        isJSON: false, 
        author: "Patryktopek [👑] [⚜️]",
        index: "[Żona] Gdzieś był?<br />[Mąż] Na weselu kumpla, schlaliśmy się jak bąki, nie wyobrażasz sobie nawet jak popiliśmy.<br />[Ż] Czemu sobie nie wyobrażam?<br />[M] A wyobrażasz sobie?<br />[Ż] Widząc cię w tej sukni ślubnej? Taaak..."
    },
    {
        isJSON: false, 
        author: "Patryktopek [👑] [⚜️]",
        index: "[Pielęgniarka] Nie mogę Cię leczyć, Kasiu...<br />[Kasia] Czemu?<br />[P] Bo ja jestem lekarzem rodzinnym, a ty sierotą."
    },
    {
        isJSON: false, 
        author: "Patryktopek [👑] [⚜️]",
        index: "Pewnego dnia przybiegłem do Tomka. Po lunchu gadaliśmy i podzielił się ze mną sensacją.<br />- Marek - powiedział - Beata i ja rozwodzimy się.<br />Byłem zdumiony.<br />- Dlaczego? Co się stało?! Wyglądaliście na szczęśliwą parę!<br />- No cóż - powiedział - odkąd się pobraliśmy, żona próbowała mnie zmienić. Oduczyła mnie picia, palenia, powrotów w środku nocy. Nauczyła mnie, jak się elegancko ubierać, oglądać dobrą sztukę, wyrobić sobie gust kulinarny, muzyczny i robić zapasy w sklepie.<br />- I co, jesteś teraz zgorzkniały, bo tak bardzo cię zmieniła?<br />- Nie, nie jestem zgorzkniały. Teraz jestem tak dobry, że ona na mnie nie zasługuje."
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "Lew zorganizował postawienie w lesie nowoczesnej toalety. Nie zwykłego ToiToia, ale zadaszonego budyneczku z dwoma kabinami, umywalki, mydło, papier, normalnie na bogato.<br />Po tygodniu, niestety, zdarzyło się nieszczęście. Lew wstępuje do toalety, patrzy, a tam okno wybite, w męskiej woda porozlewana, ściany wybrudzone. Natychmiast zorganizował zebranie i pyta:<br />– Kto tak zniszczył toaletę?!<br />Wychodzi zajączek i mówi:<br />– No ja i nie ja…<br />Lew pyta:<br />– Jak to ty i nie ty?<br />– No, bo srałem sobie spokojnie, nagle wpadł niedźwiedź, nasrał na mnie, podtarł się mną, a kiedy zobaczył, że jestem zajączkiem, a nie papierem toaletowym, to się wkurzył, wyrzucił mnie przez okno i uciekł.<br />Lew wkurzony, krzyczy na niedźwiedzia, każe mu zapłacić za szkody i żeby to się więcej nie powtórzyło. I rzeczywiście – przez następny miesiąc było względnie spokojnie.<br />Pewnego razu lew robi obchód, patrzy, a tu ta sama sytuacja: okno wybite, wszystko wybrudzone. – Kto to zrobił? – pyta lew na zebraniu, spoglądając w stronę niedźwiedzia. Wychodzi lisek:<br />– No ja i nie ja.<br />– Jak to ty i nie ty?<br />– Srałem sobie spokojnie, nagle wpadł niedźwiedź, nasrał na mnie, podtarł się mną, a kiedy zobaczył, że jestem liskiem, a nie papierem toaletowym, to się wkurzył, wyrzucił mnie przez okno i uciekł.<br />Lew już totalnie na załamaniu nerwowym krzyczy na niedźwiedzia, że ma zapłacić za szkody plus 10 000 odszkodowania i jak jeszcze raz to się zdarzy, to go wyrzuci z lasu.<br />Przez następne pół roku był spokój. Raz lew idzie do kibla, patrzy, a tam istny armagedon, okna wszystkie powybijane, papier wala się nie tylko po podłodze, ale leży wywleczony po lesie, wszystkie ściany wybrudzone, w męskiej sedes dosłownie wyrwany z podłogi.<br />Natychmiast zwołuje zebranie i wrzeszczy:<br />– KTO ROZWALIŁ KIBEL?!<br />Wstaje jeżyk i mówi:<br />– No ja i nie ja."
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "[Ojciec] A ty co się tak kręcisz po domu, przecież masz lekcje online?<br />[Syn] Tak, ale dziś jest wycieczka!"
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "[Dyrektor] Wy, Kowalski, lubicie ciepłą wódkę?<br />[Kowalski] Nie, dyrektorze.<br />[D] A możne lubicie spocone baby?<br />[K] Też nie.<br />[D] To dobrze - dostaniecie urlop w listopadzie."
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "[Policjant] Proszę usiąść na krześle i zaczniemy przesłuchanie.<br />[Prawnik > Ja] Zaprzeczaj wszystkiemu.<br />[Ja] TO NIE JEST KRZESŁO!"
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "Narkoman trafił do piekła. Otwierają się wrota, a tu całe łany marihuany. Narkoman napalony biegnie i rwie całe naręcza. Nagle słyszy głos diabła:<br />- No i po co rwiesz, jak tam pełno narwane!<br />Patrzy, a tu faktycznie pełno świeżego ziela. Biegnie i zaczyna przerzucać, żeby schło. A tu diabeł:<br />- I po co suszysz, jak już tam ususzone!<br />I rzeczywiście. Narkoman podbiega i zaczyna skręcać skręty. Skręca, skręca, na co diabeł:<br />- I czego skręcasz, jak tam tyle naskręcane!<br />Narkoman patrzy, a tu góry skrętów! Wybiera największego i pyta diabła:<br />- Masz może ogień?<br />A diabeł z uśmiechem:<br />- Gdybym miał ogień, to byłby raj!"
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "[Nauczycielka] Jakie dźwięki wydaje krowa?<br />[Małgosia] Muuuu, proszę pani.<br />[N] Bardzo dobrze Gosiu. A jaki odgłos wydają koty?<br />[Grześ] Miauuu, proszę pani.<br />[N] Bardzo dobrze, Grzesiu bardzo dobrze. A jaki dźwięk wydają psy?<br /><i>Jasio podnosi rękę.</i><br />[N] No Jasiu, powiedz!<br />[Jaś] Na ziemię skurczybyku, ręce na głowę i szeroko nogi."
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "[Sędzia] Czy przyznaje się pan do winy?<br />[Oskarżony] Nie, wysoki sądzie. Mowa mego obrońcy i zeznania świadków przekonały mnie, że jestem niewinny!"
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "Pewien gość, właściciel sklepu, bardzo nie lubił Chińczyków. Pewnego dnia przyszedł do niego Chińczyk i pyta:<br />- Ma Pan Whiskas? Potrzebuję go dla mój kot.<br />- A gdzie masz tego kota? - pyta sprzedawca.<br />- No ja kot zostawić w domu, ja go nie brać ze sobą do sklep.<br />- To jak go przyniesiesz, to ja ci sprzedam ten Whiskas.<br />Chińczyk rad nie rad poszedł po kota do domu, a gdy wrócił otrzymał Whiskas. Dwa dni później przychodzi ponownie, ale tym razem prosi:<br />- Ja chcieć kupić Pedigripal dla mój pies.<br />Sprzedawca pyta:<br />- A gdzie masz tego psa? Bez niego ci nic nie sprzedam!<br />Chińczyk oburzony:<br />- Ja nie chodzić z pies na zakupy!<br />- Bez psa nie wracaj! - burknął sprzedawca. Tak się i stało, po przyjściu z psem, Chińczyk otrzymał swój Pedigripal.<br />Następnego dnia Chińczyk przychodzi do sklepu z dużą papierową torbą i mówi do sprzedawcy:<br />- Pan tu włożyć ręka.<br />- A po co?<br />- Pan włożyć<br />Sprzedawca wkłada rękę do torby, a Chińczyk mówi:<br />- Pan pomacać! Miękkie?<br />- No tak...<br />- Ciepłe?<br />- No tak...<br />Na to Chińczyk uprzejmym głosem prosi:<br />- Ja chcieć kupić papier toaletowy!"
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "[Matka] Co to był za łomot w nocy jak wróciłeś?<br />[Syn] Aaa nic, kurtka mi spadła.<br />[M] To co tam było w tej kurtce?<br />[S] Ja"
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index: "Majster poucza budowlańców:<br />- Słuchajcie, jutro przyjeżdża komisja odbiorcza. Cokolwiek by się nie działo, udawajcie, że tak miało być.<br />Następnego dnia komisja ogląda budynek, a tu nagle łup - jedna ze ścian wali się z wielkim hukiem. Inspektorzy odskakują przerażeni, a stojący obok robotnik spokojnie spoglądając na zegarek oznajmia:<br />- No tak, 10.43. Wszystko zgodnie z harmonogramem."
    },
    {
        isJSON: false,
        author: "Patryktopek [👑] [⚜️]",
        index:"[Pacjent] Panie doktorze, co się dzieje po śmierci?<br />[Doktor] Zmieniamy pościel."
    },

    // a tu reszta, co ludzie wysłali :P
    {
        isJSON: true, 
        author: null,
        index: { "qu": "Jak nazywa się auto które pomieści cztery dziki?", "an": "Fordzik." }
    },
    {
        isJSON: false,
        author: "Haker1000",
        index: "[Tata] Po co Ci w domu łopata i kompas?<br />[Jaś] Zamierzam posprzątać w moim pokoju"
    }
]

function walnijDowcip() {
    var dowcip = Math.floor(Math.random() * dowcipy.length)
    dowcip = {id: dowcip, main: dowcipy[dowcip]}
    if (dowcip.id == obecnyDowcip) return walnijDowcip()
    obecnyDowcip = dowcip.id

    if (dowcip.main.isJSON) {
        var text = `${dowcip.main.index.qu}<br /><div id="qu" onclick="reviev()">${dowcip.main.index.an}</div>`
    } else {
        var text = dowcip.main.index
    }
    
    document.getElementById("los-dowcipów").innerHTML = `<span style="font-size: 70%; color: rgb(100, 100, 100)">ID dowcipu: ${dowcip.id+1} | ${dowcip.main.author == null ? "Nieznany użytkownik" : "Od: " + dowcip.main.author}</span><br />${text}`
}

function reviev() {
    var btn = document.getElementById("qu")
    
    btn.classList.add("odslon")
    btn.onclick = () => {}
}

function wybierzDowcip() {
    let num = prompt(`Podaj ID dowcipu`, dowcipy.length)
    if (num == "" || num == null) return;
    num = Number(num)
    if (isNaN(num) || num < 1 || num > dowcipy.length) return wybierzDowcipZBłędem()

    if (dowcipy[num-1].isJSON) {
        var text = `${dowcipy[num-1].index.qu}<br /><div id="qu" onclick="reviev()">${dowcipy[num-1].index.an}</div>`
    } else {
        var text = dowcipy[num-1].index
    }
        
    document.getElementById("los-dowcipów").innerHTML = `<span style="font-size: 70%; color: rgb(100, 100, 100)">${dowcipy[num-1].author == null ? "Nieznany użytkownik" : "Od: " + dowcipy[num-1].author}</span><br />${text}`
}

function wybierzDowcipZBłędem() {
    let num = prompt("Spróbuj jeszcze raz - podaj ID dowcipu", dowcipy.length)
    if (num == "" || num == null) return;
    num = Number(num)
    if ((isNaN(num) || num < 1 || num > dowcipy.length)) return wybierzDowcipZBłędem()

    if (dowcipy[num-1].isJSON) {
        var text = `${dowcipy[num-1].index.qu}<br /><div id="qu" onclick="reviev()">${dowcipy[num-1].index.an}</div>`
    } else {
        var text = dowcipy[num-1].index
    }
        
    document.getElementById("los-dowcipów").innerHTML = `<span style="font-size: 70%; color: rgb(100, 100, 100)">${dowcipy[num-1].author == null ? "Nieznany użytkownik" : "Od: " + dowcipy[num-1].author}</span><br />${text}`
}
