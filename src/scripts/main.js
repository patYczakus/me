let text, i, iSys
const navigateData = [
    { "name": "Home", "href": "home.html" },
    { "name": "Rich Presence Games", "href": "games.html" },
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
    }
}

window.onload = checkIframe()

function checkMobileDevice() {
    if (window.innerWidth+150 <= window.innerHeight) {
        document.body.classList.add('phone');
        document.getElementById("nav").innerHTML = `<button onclick="showNav()" class="more onlyBack">⋅⋅⋅</button>`

        set.navBox(0)
    } else {
        text = ""
        iSys = 0
        for (i=0; i<navigateData.length && i<3; i++) {
            if (!window.location.pathname.endsWith(navigateData[iSys].href)) text += `<button onclick="window.open('${navigateData[iSys].href}', '_self')">${navigateData[iSys].name}</button>`
            else text += `<button class="thisPage onlyBack">${navigateData[iSys].name}</button>`
            iSys++
        }
        if (iSys < navigateData.length) text += `<button onclick="showNav()" class="more onlyBack">⋅⋅⋅</button>`
        document.getElementById("nav").innerHTML = text
        if (iSys < navigateData.length) set.navBox(5)
    }

    document.getElementById("banner").style.marginLeft = "-2000vw"
}

function showNav() {
    document.getElementsByClassName("nav-box")[0].classList.toggle("active")
}

function hideNav()  {
    document.getElementsByClassName("nav-box")[0].classList.remove("active")
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function scrollProgress() {
    const totalheight_Page = document.getElementById("content").scrollHeight
    const currentDistanceFromTop = document.getElementById("content").scrollTop

    const windowHeight = document.getElementById("content").clientHeight

    let scrolledPrestange = (currentDistanceFromTop / (totalheight_Page - windowHeight)) * 100

    document.getElementById("progress_scroll").style.width = `${Math.round(scrolledPrestange)}%`
}

function proces() {
    scrollProgress()
    setTimeout(function(){
        proces()
    }, 10)
}

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

function checkIframe() {
    if ( window.location !== window.parent.location ) { 
        alert(`Blokada przeciw iframemem!\n\nWykryto korzystanie z osadzenia - ta blokada służy do blokowania zawartości z osadzenia, ponieważ się ona poprawnie się nie wyświetli. Aby temu zapobiec, włącz stronę normalnie.`)
        setTimeout(() => { document.body.innerHTML = `<div id="banner" class><a onclick="window.parent.location.href = window.location.href">Idź do strony</a></div>` }, 500)
    } else {
        setTimeout(function(){
            try {
                checkMobileDevice()
                proces()
            } catch (err) {
                try {
                    checkMobileDevice()
                    proces()
                } catch (err) {
                    try {
                        checkMobileDevice()
                        proces()
                    } catch (err) {
                        console.error(err)
                        checkMobileDevice()
                    }
                }
            }
        }, 500)
    }
}