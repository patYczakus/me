let indexes = {
    coins: 50,
    users: 6,
    bulids: 3,
}

let i, iSub, text
var random = function(min = Number(1), max = Number(10)) {
    return Math.round(Math.random() * (max - min)) + min
}

var levels = {
    clicks: 1,
    farm: 0,
    fabric: 0,
}

var shop = [
    {
        itemName: "Mieszkanie",
        itemDescription: "Buduje dom i od razu dodaje mieszkańców\nPo zakupieniu kupno zwiększa się o 100$",
        level: { enable: false },
        money: {
            cost: 150,
            upTo: [ 100, "ADD" ]
        },
        function: function(){
            indexes.users = indexes.users + random(1, 6)
            indexes.bulids = indexes.bulids + 1
        }
    },
    {
        itemName: "Kamienica",
        itemDescription: "Buduje kamienicę i od razu dodaje mieszkańców\nPo zakupieniu kupno zwiększa się o 400$",
        level: { enable: false },
        money: {
            cost: 600,
            upTo: [ 400, "ADD" ]
        },
        function: function(){
            indexes.users = indexes.users + random(10, 75)
            indexes.bulids = indexes.bulids + 1
        }
    },
    {
        itemName: "Blok",
        itemDescription: "Buduje blok i od razu dodaje mieszkańców\nPo zakupieniu kupno zwiększa się o 1000$",
        level: { enable: false },
        money: {
            cost: 1500,
            upTo: [ 1000, "ADD" ]
        },
        function: function(){
            indexes.users = indexes.users + random(40, 400)
            indexes.bulids = indexes.bulids + 1
        }
    },
    {
        itemName: "Wartościowość +1",
        itemDescription: "Po zakupieniu zarobki zwiększą się na wskazany level",
        level: { enable: true, index: 1 },
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
        if (shop[iSub].level.enable) text += `<tr><td>${iSub+1}.</td><th>${shop[iSub].itemName}</th><td>${shop[iSub].itemDescription.replace("\n", "<br />")}</td><td class="shopItemInfo">Obecny level: ${shop[iSub].level.index}<br />Koszt: ${shop[iSub].money.cost}$<td><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})">Kup!</button></td></tr>\n`
        else text += `<tr><td>${iSub+1}.</td><th>${shop[iSub].itemName}</th><td>${shop[iSub].itemDescription.replace("\n", "<br />")}</td><td class="shopItemInfo">Koszt: ${shop[iSub].money.cost}$<td><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})">Kup!</button></td></tr>\n`
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

function getCoins(){
    indexes.coins = indexes.coins + (random(5, 50) * levels.clicks)
    document.getElementById("mainBtn").disabled = "true"
    timeRing1()
}

function timeRing1() {
    setTimeout(function(){document.getElementById("mainBtn").innerText = "1.0 s"; document.getElementById("mainBtn").style.background = "transparent"}, 0)
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
    if (shop[id].money.cost > indexes.coins) return reaction_buttonInShop(id, "red")
    indexes.coins = indexes.coins - shop[id].money.cost

    if (shop[id].money.upTo[1] == "MULTIPLY") shop[id].money.cost = shop[id].money.cost * shop[id].money.upTo[0]
    else if (shop[id].money.upTo[1] == "ADD") shop[id].money.cost = shop[id].money.cost + shop[id].money.upTo[0]
    else return function(){ indexes.coins = indexes.coins + shop[id].money.cost; console.error("Invalid tag at \".upTo[1]\"") }

    if (shop[id].level.enable) shop[id].level.index = shop[id].level.index + 1

    if (shop[id].level.enable) document.getElementsByClassName("shopItemInfo")[id].innerHTML = `Obecny level: ${shop[id].level.index}<br />Koszt: ${shop[id].money.cost}$`
    else document.getElementsByClassName("shopItemInfo")[id].innerHTML = `Koszt: ${shop[id].money.cost}$`
    reaction_buttonInShop(id, "chartreuse")
    shop[id].function()
}

function reaction_buttonInShop(id, color) {
    document.getElementsByClassName("buttonShop")[id].style.background = color
    setTimeout(() => {document.getElementsByClassName("buttonShop")[id].style = ""}, 500)
}

function reloadIndexes() {
    setTimeout(() => {
        document.getElementById("money").innerText = `${indexes.coins}$`
        document.getElementById("town").innerHTML = `<td>👥 ${indexes.users}</td><td>🏘️ ${indexes.bulids}</td>`
        reloadIndexes()
    }, 20)
}