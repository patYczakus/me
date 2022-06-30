var obecnyDowcip

const dowcipy = [
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
        index: { "qu": "Jak nazywa się rosyjskie małżeństwo?", "an": "Związek Radziecki" }
    },
    {
        isJSON: true, 
        index: { "qu": "Co mówi Ukrainka, kiedy chce użądlić ją pszczoła?", "an": "Nie, pani Maju" }
    },
    {
        isJSON: false, 
        index: "Dwóm przyjaciółkom po długich namowach, udało się wreszcie przekonać mężów, żeby zostali w domu, a one same wychodzą na kolację do knajpy, żeby przypomnieć sobie dawne czasy.<br />Po zabawnie spędzonym wieczorze, dwóch butelkach białego wina, szampanie i buteleczce wódki opuszczają restaurację całkowicie pijane!<br />W drodze powrotnej obie nachodzi nagła potrzeba, może dlatego że dużo wypiły.<br />Nie wiedząc gdzie iść się wysikać, jedna mówi do drugiej:<br />- Wejdźmy na ten cmentarz, tutaj na pewno nikogo nie będzie.<br />Wchodzą na cmentarz, najpierw jedna ściąga majtki, sika, wyciera się tymi majtkami i oczywiście je wyrzuca.<br />Widząc to, druga od razu sobie przypomina, ze ma na sobie drogą markową bieliznę od męża i szkoda by ją wyrzucić.<br />Ściąga więc majtki, wkłada je do kieszeni, sika i zrywa kokardę z pierwszego lepszego wieńca, żeby się podetrzeć.<br />Na drugi dzień mąż pierwszej, dzwoni do męża drugiej:<br />- Jurek, nawet sobie nie wyobrażasz co się stało! Koniec mojego małżeństwa!<br />- Dlaczego?<br />- Moja żona wróciła o 5 rano kompletnie pijana i na dodatek bez majtek! Od razu wywaliłem ją z domu.<br /> - Marek, to jeszcze nic, wiesz co wykombinowała moja! Nie tylko przyszła pijana i bez majtek, ale miała włożoną w tyłek czerwoną kokardę z napisem: NIGDY CIĘ NIE ZAPOMNIMY, ŁUKASZ, IGNAŚ, STASIEK I POZOSTALI PRZYJACIELE Z SIŁOWNI."
    },
    {
        isJSON: false, 
        index: "[Pielęgniarka] Nie mogę Cię leczyć, Kasiu...<br />[Kasia] Czemu?<br />[P] Bo ja jestem lekarzem rodzinnym, a ty sierotą."
    },
]

function walnijDowcip() {
    var dowcip = Math.floor(Math.random() * dowcipy.length)
    dowcip = dowcipy[dowcip]
    if (dowcip == obecnyDowcip) return walnijDowcip()
    obecnyDowcip = dowcip

    if (dowcip.isJSON) {
        var text = `${dowcip.index.qu}<br /><div id="qu" onclick="reviev()">${dowcip.index.an}</div>`
    } else {
        var text = dowcip.index
    }
    
    document.getElementById("los-dowcipów").innerHTML = text
}

function reviev() {
    var btn = document.getElementById("qu")
    
    btn.classList.add("odslon")
    btn.onclick = () => {}
}
