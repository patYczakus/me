function openAtNewWindow(adres, nazwa, szerokosc, wysokosc, center = Boolean(false)) {
    var fullScreen = false;
    if( isNaN(szerokosc) || szerokosc == 0 ) {
        var szerokosc = screen.width;
        fullScreen = true;
    }
    if( isNaN(wysokosc) || wysokosc == 0 ) {
        var wysokosc = screen.height;
        fullScreen = true;
    }
    okno=window.open(adres,nazwa,'width=' + szerokosc + ',height=' + wysokosc + ',resizable=yes,scrollbars');
    // for chrome in windows
    if (fullScreen) {
        okno.moveTo(0,0);
        okno.resizeTo(szerokosc, wysokosc);
    }

    if (center) {
        okno.moveTo(document.body.clientWidth/2 - szerokosc/1.9, document.getElementById("content").clientHeight/1.7 - wysokosc/2);
        okno.resizeTo(szerokosc, wysokosc);
    }
    
    okno.focus();
}

window.onload = setTimeout(function(){ 
    if (window.location.hash == "#run-TownClicker") {
        openAtNewWindow('../games/town-clicker/game.html','Clicker',0,0)
    }
}, 100)
