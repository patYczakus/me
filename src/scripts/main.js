let text, i, iSys
const navigateData = [
    { "name": "Home", "href": "home.html" },
    { "name": "Pomoc w nauce", "href": "pomoc.html" },
    { "name": "Pomoc w nauce", "href": "pomoc.html" },
    { "name": "Rich Presence Games", "href": "games.html" },
    { "name": "Pomoc w nauce", "href": "pomoc.html" },
    { "name": "Pomoc w nauce", "href": "pomoc.html" },
    { "name": "Pomoc w nauce", "href": "pomoc.html" },
    { "name": "Pomoc w nauce", "href": "pomoc.html" },
]

window.onload = setTimeout(function(){
    checkMobileDevice()
}, 0)

function checkMobileDevice() {
    if (window.innerWidth+150 <= window.innerHeight) {
        document.body.classList.add('phone');
        document.getElementById("nav").innerHTML = `<button onclick="showNav()" class="more onlyBack">⋅⋅⋅</button>`
    } else {
        text = ""
        iSys = 0
        for (i=0; i<navigateData.length && i<5; i++) {
            if (!window.location.href.endsWith(navigateData[iSys].href)) text += `<button onclick="window.open('${navigateData[iSys].href}', '_self')">${navigateData[iSys].name}</button>`
            else text += `<button class="thisPage onlyBack">${navigateData[iSys].name}</button>`
            iSys++
        }
        if (iSys < navigateData.length) text += `<button onclick="showNav()" class="more onlyBack">⋅⋅⋅</button>`
        document.getElementById("nav").innerHTML = text
    }
}

function showNav() {
    document.getElementsByClassName("nav-box")[0].classList.toggle("active")
}

function hideNav()  {
    document.getElementsByClassName("nav-box")[0].classList.remove("active")
}