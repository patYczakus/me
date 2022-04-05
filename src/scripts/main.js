let text, i, iSys
const navigateData = [
    { "name": "Home", "href": "home.html" },
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

window.onload = setTimeout(function(){
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
}, 300)

function checkMobileDevice() {
    if (window.innerWidth+150 <= window.innerHeight) {
        document.body.classList.add('phone');
        document.getElementById("nav").innerHTML = `<button onclick="showNav()" class="more onlyBack">⋅⋅⋅</button>`

        set.navBox(0)
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