let windowWidth = -1

let indexes = {
    coins: 50,
    bankCoins: 0,
    users: 6,
    bulids: 3,
}

let i, iSub, text
var random = function(min = Number(1), max = Number(10)) {
    return Math.round(Math.random() * (max - min)) + min
}

var levels = {
    clicks: 1,
    bank: {
        values: 1,
        bulids: 0,
    },
}

var shop = [
    {
        itemName: "Mieszkanie",
        itemDescription: "Buduje mieszkanie i od razu dodaje mieszkańców",
        level: { enable: false },
        money: {
            cost: 50,
            upTo: [ 0, "ADD" ]
        },
        function: 'indexes.users = indexes.users + random(1, 6); indexes.bulids = indexes.bulids + 1'
    },
    {
        itemName: "Trzy mieszkania",
        itemDescription: "Buduje trzy mieszkania i od razu dodaje mieszkańców",
        level: { enable: false },
        money: {
            cost: 150,
            upTo: [ 0, "ADD" ]
        },
        function: 'indexes.users = indexes.users + random(3, 18); indexes.bulids = indexes.bulids + 3'
    },
    {
        itemName: "Kamienica",
        itemDescription: "Buduje kamienicę i od razu dodaje mieszkańców",
        level: { enable: false },
        money: {
            cost: 600,
            upTo: [ 0, "ADD" ]
        },
        function: 'indexes.users = indexes.users + random(10, 75); indexes.bulids++'
    },
    {
        itemName: "Blok",
        itemDescription: "Buduje blok i od razu dodaje mieszkańców",
        level: { enable: false },
        money: {
            cost: 1500,
            upTo: [ 0, "ADD" ]
        },
        function: 'indexes.users = indexes.users + random(40, 400); indexes.bulids++'
    },
    {
        itemName: "Wartościowość +1",
        itemDescription: "Po zakupieniu zarobki zwiększą się na wskazany poziom",
        level: { enable: true, index: 1, max: 100 },
        money: {
            cost: 500,
            upTo: [ 3, "MULTIPLY" ]
        },
        function: 'levels.clicks = levels.clicks + 1'
    },
    {
        itemName: "Bank",
        itemDescription: "Buduje bank, który powoduje większe zarobki.<br />Pierwsze postawienie dodaje przycisk.<br />Po zakupieniu zwiększają się mieszkańcy, ale też i kupno o 470$!",
        level: { enable: false },
        money: {
            cost: 10000,
            upTo: [ 470, "ADD" ]
        },
        function: 'indexes.users = indexes.users + random(3, 10); indexes.bulids++; if (levels.bank.bulids == 0) { document.getElementById("main").innerHTML += `<div><button type="button" id="bankBtn" onclick="getBankMoney()" disabled="true">Zbierz! (+ 0$)</button></div>`; bankSplit(); }; levels.bank.bulids++`'
    },
    {
        itemName: "Większe zarobki banku",
        itemDescription: "Do wszystkich banków zwiększa poziom o jeden punkt.<br />Do pięciu poziomów wyłącznie!",
        level: { enable: true, index: 1, max: 5 },
        money: {
            cost: 100000,
            upTo: [ 7, "MULTIPLY" ]
        },
        function: 'levels.bank.values++'
    },
]

function createShop() {
    iSub = 0
    text = ""
    if (window.innerWidth > 671) for (i=0; i<shop.length; i++) {
        if (shop[iSub].level.enable) {
            if (isNaN(shop[iSub].level.max) || shop[iSub].level.index < shop[iSub].level.max) text += `<tr><td>${iSub+1}.</td><th class="big">${shop[iSub].itemName}</th><td>${shop[iSub].itemDescription.replace("\n", "<br />")}</td><td class="shopItemInfo">Obecny level: ${shop[iSub].level.index}<br />Koszt: ${shop[iSub].money.cost}$<td><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})">Kup!</button></td></tr>\n`
            else text += `<tr><td>${iSub+1}.</td><th class="big">${shop[iSub].itemName}</th><td>${shop[iSub].itemDescription}</td><td class="shopItemInfo">Obecny level: MAX<td><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})" disabled="true">Kup!</button></td></tr>\n`
        }
        else text += `<tr><td>${iSub+1}.</td><th class="big">${shop[iSub].itemName}</th><td>${shop[iSub].itemDescription}</td><td class="shopItemInfo">Koszt: ${shop[iSub].money.cost}$<td><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})">Kup!</button></td></tr>\n`
        iSub++
    }
    else for (i=0; i<shop.length; i++) {
        if (shop[iSub].level.enable) { 
            if (isNaN(shop[iSub].level.max) || shop[iSub].level.index < shop[iSub].level.max) text += `<tr><td class="small"><div class="big">${iSub+1}. ${shop[iSub].itemName}</div><div>${shop[iSub].itemDescription.replace("\n", "<br />")}</div><div class="shopItemInfo">Obecny level: ${shop[iSub].level.index}<br />Koszt: ${shop[iSub].money.cost}$</div><div><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})" style="margin-top: 7px; width: 50% ">Kup!</button></div></td></tr>\n`
            else text += `<tr><td class="small"><div class="big">${iSub+1}. ${shop[iSub].itemName}</div><div>${shop[iSub].itemDescription}</div><div class="shopItemInfo">Obecny level: MAX</div><div><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})" style="margin-top: 7px; width: 50% " disabled="true">Kup!</button></div></td></tr>\n`
        }
        else text += `<tr><td class="small"><div class="big">${iSub+1}. ${shop[iSub].itemName}</div><div>${shop[iSub].itemDescription}</div><div class="shopItemInfo">Koszt: ${shop[iSub].money.cost}$</div><div><button class="buttonShop" type="button" onclick="buyAtShop(${iSub})" style="margin-top: 7px; width: 50% ">Kup!</button></div></td></tr>\n`
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
    indexes.coins = indexes.coins + Math.floor((random(5, 50) * levels.clicks * ((indexes.users - 6) / 10000 + 1)) / (1 + indexes.bulids / 3))
    document.getElementById("mainBtn").disabled = "true"
    timeRing1()
}

function timeRing1() {
    setTimeout(function(){document.getElementById("mainBtn").innerText = "Czekaj..."}, 0)
    setTimeout(function(){document.getElementById("mainBtn").outerHTML = `<button id="mainBtn" onclick="getCoins(random(5, 50))">Click!</button>`}, 1000)
}

function buyAtShop(id) {
    if (shop[id].money.cost > indexes.coins) return reaction_buttonInShop(id, "red")
    indexes.coins = indexes.coins - shop[id].money.cost

    if (shop[id].money.upTo[1] == "MULTIPLY") shop[id].money.cost = shop[id].money.cost * shop[id].money.upTo[0]
    else if (shop[id].money.upTo[1] == "ADD") shop[id].money.cost = shop[id].money.cost + shop[id].money.upTo[0]
    else return function(){ indexes.coins = indexes.coins + shop[id].money.cost; console.error("Invalid tag at \".upTo[1]\"") }


    if (shop[id].level.enable) {
        shop[id].level.index = shop[id].level.index + 1

        if (!isNaN(shop[id].level.max) && shop[id].level.index >= shop[id].level.max) {
            document.getElementsByClassName("shopItemInfo")[id].innerHTML = `Obecny level: MAX`
            document.getElementsByClassName("buttonShop")[id].disabled = "true"
        } else {
            document.getElementsByClassName("shopItemInfo")[id].innerHTML = `Obecny level: ${shop[id].level.index}<br />Koszt: ${shop[id].money.cost}$`
        }
    }
    else 
        document.getElementsByClassName("shopItemInfo")[id].innerHTML = `Koszt: ${shop[id].money.cost}$`
    //-
    
    reaction_buttonInShop(id, "chartreuse")
    eval(shop[id].function)
}

function reaction_buttonInShop(id, color) {
    document.getElementsByClassName("buttonShop")[id].style.background = color
    setTimeout(() => {document.getElementsByClassName("buttonShop")[id].style.background = "rgb(0, 0, 0, 0.2)"}, 500)
}

function reloadIndexes() {
    setTimeout(() => {
        document.getElementById("money").innerText = `${indexes.coins}$`
        document.getElementById("town").innerHTML = `<td>👥 ${indexes.users}</td><td>🏘️ ${indexes.bulids}</td>`
        document.getElementById("bank").innerHTML = `<td>🏦 ${levels.bank.bulids}</td><td>📊 ${levels.bank.values}</td>`
        
        if (windowWidth !== window.innerWidth) {
            createShop()
            windowWidth = window.innerWidth
        }

        reloadIndexes()
    }, 5)
}

function bankSplit() {
    setTimeout(() => {
        var moneyB = 0
        for (i = 0; i < levels.bank.bulids; i++) {
            moneyB = moneyB + random(10, 100) * levels.bank.values
        }

        if (indexes.bankCoins == 0) {
            document.getElementById("bankBtn").outerHTML = `<div><button type="button" id="bankBtn" onclick="getBankMoney()">Zbierz! (+ ${moneyB}$)</button></div>`

        }

        indexes.bankCoins = indexes.bankCoins + moneyB
        document.getElementById("bankBtn").innerText = `Zbierz! (+ ${indexes.bankCoins}$)`
        
        bankSplit()
    }, 3000)
}

function getBankMoney() {
    indexes.coins += indexes.bankCoins
    indexes.bankCoins = 0
    document.getElementById("bankBtn").outerHTML = `<div><button type="button" id="bankBtn" disabled>Zbierz! (+ 0$)</button></div>`
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

window.onload = () => {
    console.log(levels, indexes, shop)
    if (window.localStorage.getItem("gameData") != null) {
        const gameData = JSON.parse(window.localStorage.getItem("gameData"))

        indexes = gameData.a
        levels = gameData.b
        shop = gameData.c
    }

    timeSet(); createShop(); reloadIndexes(); dataSave();
    if (levels.bank.bulids > 0) {
        document.getElementById("main").innerHTML += `<div><button type="button" id="bankBtn" onclick="getBankMoney()" disabled="true">Zbierz! (+ 0$)</button></div>`
        bankSplit()
    }
}

function dataSave() {
    setTimeout(() => {
        window.localStorage.setItem("dddd", indexes.coins)
        window.localStorage.removeItem("dddd")
        window.localStorage.setItem("dddd", levels.clicks)
        window.localStorage.removeItem("dddd")
        window.localStorage.setItem("dddd", shop[1].itemName)
        window.localStorage.removeItem("dddd")
        window.localStorage.setItem("gameData", JSON.stringify({a:indexes,b:levels,c:shop}))
        dataSave()
    }, 2000)
}

function deleteData() {
    const r = confirm("Jesteś pewien, że chcesz usunąć dane? Tej czynności NIE MOŻNA COFNĄĆ, oraz zaczniesz od początku!")

    if (r) {
        dataSave = () => {}
        window.localStorage.removeItem("gameData")
        location.reload()
    }
}