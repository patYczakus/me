let clicks = 0

function PoputCreate(title, text) {
    if (~text.indexOf("<iframe")) { document.getElementById("content").style.height = "600px"; document.getElementById("content").style.width = "600px"; document.getElementById("content").innerHTML = `<div class="closePoput" onclick="tooglePoput()">&times;</div>${text.replace("{br}","<br />")}`; }
    else { document.getElementById("content").style.width = "30%"; document.getElementById("content").style.minHeight = "220px"; document.getElementById("content").innerHTML = `<div class="closePoput" onclick="tooglePoput()">&times;</div><h1>${title}</h1>${text}` }
    tooglePoput()
}

function tooglePoput() {
    clicks++
    document.getElementById(`poput`).classList.toggle("active")
    if (clicks % 2 == 0) document.getElementById("content").innerHTML = ""
}