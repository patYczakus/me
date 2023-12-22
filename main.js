const inBuild = false
const ifs = {
    isInTop: true,
    isInBottom: false,
    canScroll: false,
}
const navigatorJSON = {
    deafult: "home",
    notFound: "nt",
    navNames: {
        home: {
            file: "home.md",
            showInNav: true,
        },
        kontakt: {
            file: "kontakt.md",
            showInNav: true,
        },
        nt: {
            file: "404.html",
            showInNav: false,
        },
    },
}
var file = {
    text: "",
    type: "",
    navname: "",
}

/**
 * Obraz przedstawiający Y
 */
class Y_img {
    /**
     * Konstruktor tworzy zdjęcie oraz nadaje odpowiednie wartości.
     * @param {number} size Skala zdjęcia. `this.width` == `this.height` => `size`
     * @param {boolean} animated Daje animację
     * @param {boolean} bigAnimation
     */
    constructor(size, animated = Boolean(true), bigAnimation = Boolean(false)) {
        var Y_img = document.createElement("img")
        Y_img.src = "Y.png"
        Y_img.width = size
        Y_img.height = size
        if (animated) Y_img.className = `YimgLoad noDragable ${bigAnimation ? "big" : ""}`

        /**
         * Faktyczny obraz, zapisany jako element `<img>`.
         */
        this.image = Y_img
        /**
         * Argument podający skalę
         */
        this.size = size
        /**
         * Klasy w elemencie `<img>`
         */
        this.class = {
            /**
             * Klasy jako tekst.
             */
            name: Y_img.className,
            /**
             * Klasy, jako `DOMTokenList`.
             */
            list: Y_img.classList,
            /**
             * Kod zawarty w argumentach.
             * `0` - brak animacji;
             * `10` - mała animacja;
             * `11` - duża animacja.
             */
            code: String(Number(animated)) + animated ? String(Number(bigAnimation)) : "",
        }
    }
}

function navigatorToogle() {
    if (document.querySelector("#navigator").classList.contains("_firstclick")) {
        document.querySelector("#navigator").classList.toggle("noactive")
    } else {
        document.querySelector("#navigator").classList.add("_firstclick")
    }
    document.querySelector("#navigator").classList.toggle("active")
    if (document.querySelector("#navigator").classList.contains("active")) {
        document.querySelector("#content .n").style.height = `${document.querySelector("#content .n").scrollHeight}px`
        document.querySelector("#content .c").style.height = "0"
    } else {
        document.querySelector("#content .n").style.height = "0"
        document.querySelector("#content .c").style.height = `${document.querySelector("#content .c").scrollHeight}px`
    }
}

/**
 * Tworzy główny interfejs
 */
function createHome() {
    document.body.innerHTML = `
    <div id="webpage">
        <div id="header" class="noDragable">Patryktopek</div>
        <div id="content"></div>
    </div>
    `

    var navbtn = document.createElement("button")
    navbtn.id = "navigator"
    navbtn.innerText = "Nawigacja"
    document.querySelector("#content").appendChild(navbtn)
    document.querySelector("#content").innerHTML = `<button id="navigator" onclick="navigatorToogle()">Nawigacja</button>
    <div class="n"><br /></div>
    <div class="c"></div>`

    //generuje w #content poszczególne elementy zależne od rodzaju pliku. Jeżeli to md - musi być użyte w marked.parse(), html idzie normalnie
    if (file.type == "md") {
        document.querySelector("#content .c").innerHTML = marked.parse(file.text)
    } else {
        document.querySelector("#content .c").innerHTML = file.text
    }

    //generowanie nawigacji
    Object.keys(navigatorJSON.navNames).forEach((navname) => {
        if (!navigatorJSON.navNames[navname].showInNav) return

        if (file.navname != navname)
            document.querySelector("#content .n").innerHTML += `<span class="navig"><a href="?nav=${navname}">
                <span style="opacity: 0.5">?nav=</span>${navname}
            </a></span>`
        else document.querySelector("#content .n").innerHTML += `<span class="navig"><span style="opacity: 0.5">?nav=</span>${navname}</span>`
    })

    //ustawianie stylów
    document.querySelector("#content .c").style.height = `${document.querySelector("#content .c").scrollHeight}px`
    document.querySelector("#content .n").style.height = "0"

    //nadawanie wartości ifs.canScroll
    ifs.canScroll = document.querySelector("#content").clientHeight < document.querySelector("#content").scrollHeight

    if (ifs.canScroll) {
        document.querySelector("#content").style.borderEndEndRadius = "0.5rem"
        document.querySelector("#content").style.borderEndStartRadius = "0.5rem"
    }

    setVisualClock()
}

function setVisualClock() {
    canScroll = document.querySelector("#content").clientHeight < document.querySelector("#content").scrollHeight

    //dodawanie zmiennych top i bottom
    var top = document.querySelector("#content").scrollTop > 15
    var bottom = document.querySelector("#content").scrollTop + document.querySelector("#content").clientHeight < document.querySelector("#content").scrollHeight - 15

    //spawdzanie warunku ze zmniennej top
    if (top == ifs.isInTop) {
        if (top) {
            document.querySelector("#content").style.borderStartEndRadius = "0.5rem"
            document.querySelector("#content").style.borderStartStartRadius = "0.5rem"
        } else {
            document.querySelector("#content").style.borderStartEndRadius = "1.5rem"
            document.querySelector("#content").style.borderStartStartRadius = "1.5rem"
        }
    }

    //sprawdzanie warunku ze zmiennej bottom + ifs.canScroll
    if (canScroll) {
        if (bottom == ifs.isInBottom) {
            if (bottom) {
                document.querySelector("#content").style.borderEndEndRadius = "0.5rem"
                document.querySelector("#content").style.borderEndStartRadius = "0.5rem"
            } else {
                document.querySelector("#content").style.borderEndEndRadius = "1.5rem"
                document.querySelector("#content").style.borderEndStartRadius = "1.5rem"
            }
        }
    } else {
        if (canScroll != ifs.canScroll) {
            document.querySelector("#content").style.borderEndEndRadius = "1.5rem"
            document.querySelector("#content").style.borderEndStartRadius = "1.5rem"
        }
    }

    //nadanie przeciwnej wartości ze zmiennych top i bottom, a normalnie do canScroll
    ifs.isInTop = !top
    ifs.isInBottom = !bottom
    ifs.canScroll = canScroll

    requestAnimationFrame(setVisualClock)
}

window.onload = () => {
    var loading = new Y_img(150, true, true)
    console.log(loading)

    var centered = document.createElement("div")
    centered.className = "centered standard"
    centered.id = "loadingScreen"

    centered.appendChild(loading.image)

    var span = document.createElement("span")
    if (inBuild) {
        span.style.fontSize = "20px"
        span.innerText = `Ta strona jest w budowie, przepraszamy za utrudnienia!`

        centered.appendChild(span)
    }

    document.body.appendChild(centered)

    if (!inBuild) {
        var nav = new URL(location.href).searchParams.get("nav")

        if (nav == null) nav = navigatorJSON.deafult
        else if (!(nav in navigatorJSON.navNames)) nav = navigatorJSON.notFound

        file.navname = nav
        nav = navigatorJSON.navNames[nav].file

        if (nav.endsWith(".md")) file.type = "md"
        else if (nav.endsWith(".html")) file.type = "html"

        fetch(`webFiles/${nav}`)
            .then((response) => response.text())
            .then((text) => {
                file.text = text
                setTimeout(() => {
                    document.querySelector("#loadingScreen").style.opacity = 0
                    setTimeout(() => {
                        document.querySelector("#loadingScreen").remove()
                        createHome()
                    }, 500)
                }, 1000)
            })
    }
}
