var obecnyDowcip = -1

const dowcipy = [
    // te z odsłanianiem
    {
        isJSON: true, 
        index: { "qu": "Dlaczego woda nie zdała egzaminu?", "an": "Bo ją oblała!" }
    },
    {
        isJSON: true, 
        index: { "qu": "Gdzie są dzieci po wybuchowej zabawie?", "an": "Wszędzie." }
    },
    {
        isJSON: true, 
        index: { "qu": "Dlaczego blondynka otworzyła okno po zrobieniu kisielu?", "an": "Bo na opakowaniu pisało \"gotowe w przeciągu 5 minut\"." }
    },
    {
        isJSON: true, 
        index: { "qu": "Jaki jest skład chemiczny małżeństwa?", "an": "Mało zasad, dużo kwasów." }
    },
    {
        isJSON: true, 
        index: { "qu": "Jak nazywa się rosyjskie małżeństwo?", "an": "Związek Radziecki." }
    },
    {
        isJSON: true, 
        index: { "qu": "Co mówi Rusek, kiedy chce użądlić ją pszczoła?", "an": "Nie, pani Maju!" }
    },
    {
        isJSON: true, 
        index: { "qu": "Dlaczego Ania ma przezwisko śmietana?", "an": "Bo jest bita." }
    },
    {
        isJSON: true, 
        index: { "qu": "Co robi Ania na huśtawce?", "an": "Wkurza snipera." }
    },
    

    // i te bez
    {
        isJSON: false, 
        index: "Dwóm przyjaciółkom po długich namowach, udało się wreszcie przekonać mężów, żeby zostali w domu, a one same wychodzą na kolację do knajpy, żeby przypomnieć sobie dawne czasy.<br />Po zabawnie spędzonym wieczorze, dwóch butelkach białego wina, szampanie i buteleczce wódki opuszczają restaurację całkowicie pijane!<br />W drodze powrotnej obie nachodzi nagła potrzeba, może dlatego że dużo wypiły.<br />Nie wiedząc gdzie iść się wysikać, jedna mówi do drugiej:<br />- Wejdźmy na ten cmentarz, tutaj na pewno nikogo nie będzie.<br />Wchodzą na cmentarz, najpierw jedna ściąga majtki, sika, wyciera się tymi majtkami i oczywiście je wyrzuca.<br />Widząc to, druga od razu sobie przypomina, ze ma na sobie drogą markową bieliznę od męża i szkoda by ją wyrzucić.<br />Ściąga więc majtki, wkłada je do kieszeni, sika i zrywa kokardę z pierwszego lepszego wieńca, żeby się podetrzeć.<br />Na drugi dzień mąż pierwszej, dzwoni do męża drugiej:<br />- Jurek, nawet sobie nie wyobrażasz co się stało! Koniec mojego małżeństwa!<br />- Dlaczego?<br />- Moja żona wróciła o 5 rano kompletnie pijana i na dodatek bez majtek! Od razu wywaliłem ją z domu.<br /> - Marek, to jeszcze nic, wiesz co wykombinowała moja! Nie tylko przyszła pijana i bez majtek, ale miała włożoną w tyłek czerwoną kokardę z napisem: NIGDY CIĘ NIE ZAPOMNIMY, ŁUKASZ, IGNAŚ, STASIEK I POZOSTALI PRZYJACIELE Z SIŁOWNI."
    },
    {
        isJSON: false, 
        index: " [Żona] Gdzieś był?<br />[Mąż] Na weselu kumpla, schlaliśmy się jak bąki, nie wyobrażasz sobie nawet jak popiliśmy.<br />[Ż] Czemu sobie nie wyobrażam?<br />[M] A wyobrażasz sobie?<br />[Ż] Widząc cię w tej sukni ślubnej? Taaak..."
    },
    {
        isJSON: false, 
        index: "[Pielęgniarka] Nie mogę Cię leczyć, Kasiu...<br />[Kasia] Czemu?<br />[P] Bo ja jestem lekarzem rodzinnym, a ty sierotą."
    },
    {
        isJSON: false, 
        index: "Pewnego dnia przybiegłem do Tomka. Po lunchu gadaliśmy i podzielił się ze mną sensacją.<br />- Marek - powiedział - Beata i ja rozwodzimy się.<br />Byłem zdumiony.<br />- Dlaczego? Co się stało?! Wyglądaliście na szczęśliwą parę!<br />- No cóż - powiedział - odkąd się pobraliśmy, żona próbowała mnie zmienić. Oduczyła mnie picia, palenia, powrotów w środku nocy. Nauczyła mnie, jak się elegancko ubierać, oglądać dobrą sztukę, wyrobić sobie gust kulinarny, muzyczny i robić zapasy w sklepie.<br />- I co, jesteś teraz zgorzkniały, bo tak bardzo cię zmieniła?<br />- Nie, nie jestem zgorzkniały. Teraz jestem tak dobry, że ona na mnie nie zasługuje."
    },
    {
        isJSON: false,
        index: "Lew zorganizował postawienie w lesie nowoczesnej toalety. Nie zwykłego ToiToia, ale zadaszonego budyneczku z dwoma kabinami, umywalki, mydło, papier, normalnie na bogato.<br />Po tygodniu, niestety, zdarzyło się nieszczęście. Lew wstępuje do toalety, patrzy, a tam okno wybite, w męskiej woda porozlewana, ściany wybrudzone. Natychmiast zorganizował zebranie i pyta:<br />– Kto tak zniszczył toaletę?!<br />Wychodzi zajączek i mówi:<br />– No ja i nie ja…<br />Lew pyta:<br />– Jak to ty i nie ty?<br />– No, bo srałem sobie spokojnie, nagle wpadł niedźwiedź, nasrał na mnie, podtarł się mną, a kiedy zobaczył, że jestem zajączkiem, a nie papierem toaletowym, to się wkurzył, wyrzucił mnie przez okno i uciekł.<br />Lew wkurzony, krzyczy na niedźwiedzia, każe mu zapłacić za szkody i żeby to się więcej nie powtórzyło. I rzeczywiście – przez następny miesiąc było względnie spokojnie.<br />Pewnego razu lew robi obchód, patrzy, a tu ta sama sytuacja: okno wybite, wszystko wybrudzone. – Kto to zrobił? – pyta lew na zebraniu, spoglądając w stronę niedźwiedzia. Wychodzi lisek:<br />– No ja i nie ja.<br />– Jak to ty i nie ty?<br />– Srałem sobie spokojnie, nagle wpadł niedźwiedź, nasrał na mnie, podtarł się mną, a kiedy zobaczył, że jestem liskiem, a nie papierem toaletowym, to się wkurzył, wyrzucił mnie przez okno i uciekł.<br />Lew już totalnie na załamaniu nerwowym krzyczy na niedźwiedzia, że ma zapłacić za szkody plus 10 000 odszkodowania i jak jeszcze raz to się zdarzy, to go wyrzuci z lasu.<br />Przez następne pół roku był spokój. Raz lew idzie do kibla, patrzy, a tam istny armagedon, okna wszystkie powybijane, papier wala się nie tylko po podłodze, ale leży wywleczony po lesie, wszystkie ściany wybrudzone, w męskiej sedes dosłownie wyrwany z podłogi.<br />Natychmiast zwołuje zebranie i wrzeszczy:<br />– KTO ROZWALIŁ KIBEL?!<br />Wstaje jeżyk i mówi:<br />– No ja i nie ja."
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
    
    document.getElementById("los-dowcipów").innerHTML = `<span style="font-size: 70%; color: rgb(100, 100, 100)">ID dowcipu: ${dowcip.id+1}</span><br />${text}`
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
        
    document.getElementById("los-dowcipów").innerHTML = text
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
        
    document.getElementById("los-dowcipów").innerHTML = text
}
