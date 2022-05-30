let coin = 0
let i, iSub, text
var random = function(min = Number(1), max = Number(10)) {
    return Math.round(Math.random() * (max - min)) + min
}

var levels = {
    clicks: 1,
}

var shop = [
    {
        itemName: "Wartościowość +1",
        itemDescription: "Po zakupieniu zarobki zwiększą się na wskazany level",
        levelIndex: 1,
        money: {
            cost: 500,
            upTo: [ 3, "MULTIPLY" ]
        },
        function: function(){
            levels.clicks = levels.clicks + 1
        }
    },
]

function createShop() {
    iSub = 0
    text = ""
    for(i=0; i<shop.length; i++) {
        text += `<tr><td>${iSub+1}.</td><th>${shop[iSub].itemName}</th><td>${shop[iSub].itemDescription}</td><td class="shopItemInfo">Obecny level: ${shop[iSub].levelIndex}<br />Koszt: ${shop[iSub].money.cost}$<td><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})">Kup!</button></td></tr>\n`
        iSub++
    }
    document.getElementById("shop").innerHTML = text
}

function timeSet(){
    setTimeout(function(){
        let time = new Date()

        let hour = time.getHours()
        if (hour < 10) hour = `0${hour}`

        let minute = time.getMinutes()
        if (minute < 10) minute = `0${minute}`

        document.getElementById("time").innerText = `${hour}:${minute}`
        timeSet()
    }, 1000)
}

function getCoins(number = Number()){
    if (isNaN(number)) return
    coin = coin + (number * levels.clicks)
    document.getElementById("money").innerText = `${coin}$`
    document.getElementById("mainBtn").disabled = "true"
    timeRing1()
}

function timeRing1() {
    setTimeout(function(){document.getElementById("mainBtn").innerText = "1.0 s"; document.getElementById("mainBtn").style.background = "wheat"}, 0)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.9 s"}, 100)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.8 s"}, 200)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.7 s"}, 300)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.6 s"}, 400)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.5 s"}, 500)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.4 s"}, 600)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.3 s"}, 700)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.2 s"}, 800)
    setTimeout(function(){document.getElementById("mainBtn").innerText = "0.1 s"}, 900)
    setTimeout(function(){document.getElementById("mainBtn").outerHTML = `<button id="mainBtn" onclick="getCoins(random(5, 50))">Click!</button>`; document.getElementById("mainBtn").style = ""}, 1000)
}

function buyAtShop(id) {
    if (shop[id].money.cost > coin) return no_buttonInShop(id)
    coin = coin - shop[id].money.cost

    if (shop[id].money.upTo[1] = "MULTIPLY") shop[id].money.cost = shop[id].money.cost * shop[id].money.upTo[0]
    else if (shop[id].money.upTo[1] = "ADD") shop[id].money.cost = shop[id].money.cost + shop[id].money.upTo[0]
    else return function(){ coin = coin + shop[id].money.cost; console.error("Invalid tag at \".upTo[1]\"") }

    shop[id].levelIndex = shop[id].levelIndex + 1

    document.getElementById("money").innerText = `${coin}$`
    document.getElementsByClassName("shopItemInfo")[id].innerHTML = `Obecny level: ${shop[id].levelIndex}<br />Koszt: ${shop[id].money.cost}$`
    shop[id].function()
}

function no_buttonInShop(id) {
    document.getElementsByClassName("buttonShop")[id].style.background = "red"
    setTimeout(() => {document.getElementsByClassName("buttonShop")[id].style = ""}, 500)
}