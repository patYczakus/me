const inBuild = true

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
        if (animated) Y_img.className = `YimgLoad ${bigAnimation ? "big" : ""}`

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
        span.innerText = `Ta strona jest w budowie, przepraszamy za utrudnienia!
        Tworzona jest 4. wersja strony Patryktopek. Oczekuj na aktualizację...`

        centered.appendChild(span)
    }
    
    document.body.appendChild(centered)

    if (!inBuild) {
        setTimeout(() => {
            document.querySelector("#loadingScreen").style.opacity = 0
            setTimeout(() => {
                document.querySelector("#loadingScreen").remove()
            }, 500)
        }, 5000)
    }
}