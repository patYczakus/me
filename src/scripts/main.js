let text = ""
let i, iSys, windowWidth = 0
var isEnd = false
const navigateData = [
    { "name": "Home", "href": "home.html" },
    { "name": "Rich Presence Games", "href": "games.html" },
    { "name": "Dowcipy na co dzień", "href": "dowcipy.html"}
]

const set = {
    navBox: function(number) {
        text = ""
        iSys = number
        for (i=number; i<navigateData.length; i++) {
            if (!window.location.href.endsWith(navigateData[iSys].href)) text += `<a href="${navigateData[iSys].href}">${navigateData[iSys].name}</a><br>`
            else text += `${navigateData[iSys].name}<br>`
            iSys++
        }

        document.getElementById("nav-box_info").innerHTML = text
    },
    nav: function() {            
        text = ""
        iSys = 0
        for (i=0; i<navigateData.length && i<3; i++) {
            if (!location.pathname.endsWith(navigateData[iSys].href)) text += `<button onclick="window.open('${navigateData[iSys].href}', '_self')">${navigateData[iSys].name}</button>`
            else text += `<button class="thisPage onlyBack">${navigateData[iSys].name}</button>`
            iSys++
        }
        if (iSys < navigateData.length) text += `<button onclick="showNav()" class="more onlyBack">⋅⋅⋅</button>`
        document.getElementById("nav").innerHTML = text
        if(iSys < navigateData.length) set.navBox(3)
    }
}

window.onload = checkIframe()

function checkMobileDevice() {
    setTimeout(() => {
        if (window.innerWidth <= window.innerHeight) {
            document.body.classList.add('phone');
            document.getElementById("nav").innerHTML = `<button onclick="showNav()" class="more onlyBack">⋅⋅⋅</button>`

            set.navBox(0)
        } else {
            set.nav()

            execute()
        }

        document.getElementById("banner").style.marginLeft = "-2000vw"

    }, 100)
}

function showNav() {
    document.getElementsByClassName("nav-box")[0].classList.toggle("active")
}

function hideNav()  {
    document.getElementsByClassName("nav-box")[0].classList.remove("active")
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function openAtNewWindow(adres, nazwa, szerokosc, wysokosc) {
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
    
    okno.focus();
}

function checkIframe() {
    if ( window.location !== window.parent.location ) { 
        alert(`Blokada przeciw iframemem!\n\nWykryto korzystanie z osadzenia - ta blokada służy do blokowania zawartości z osadzenia, ponieważ się ona poprawnie się nie wyświetli. Aby temu zapobiec, włącz stronę normalnie.`)
        setTimeout(() => { document.body.innerHTML = `<div id="banner" class><a onclick="window.parent.location.href = window.location.href">Idź do strony</a></div>` }, 500)
    } else {
        var errorlist = [] 

        function run() {
            setTimeout(() => {
                if (isEnd) return;
                try {
                    checkMobileDevice()
                    if (errorlist.length !== 0) console.warn("Pojawiły się w trakcie błędy. Oto cała lista błędów: ", errorlist)
                    else console.log("W trakcie uruchamiania skryptu nie pojawiły się błędy")
                    return isEnd = true
                } catch (err) {
                    errorlist[errorlist.length] = err
                    run()
                }
            }, 100)
        }

        run()
    }
}

function execute() {
    function theNav() {
            if (window.innerWidth == windowWidth) return
            windowWidth = window.innerWidth

            if (window.innerWidth <= 813) {
                document.getElementById("nav").innerHTML = `<button onclick="showNav()" class="more onlyBack" style="margin-top: 5px">⋅⋅⋅</button>`

                set.navBox(0)
            } else {
                set.nav()
            }
    }

    setTimeout(() => {
        theNav()
        //scrollbar()
        execute()
    }, 50)
}