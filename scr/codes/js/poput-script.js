let TGLclicks = 0

function PoputCreate(title, text) {
    if (~text.indexOf("<iframe")) { document.getElementById("content").style.height = "auto"; document.getElementById("content").style.width = "auto"; document.getElementById("content").innerHTML = `<div class="closePoput" onclick="tooglePoput()">&times;</div>${text.replace("{br}","<br />")}`; }
    else { document.getElementById("content").style.width = "30%"; document.getElementById("content").style.minHeight = "220px"; document.getElementById("content").innerHTML = `<div class="closePoput" onclick="tooglePoput()">&times;</div><h1>${title}</h1>${text}` }
    tooglePoput()
}

function tooglePoput() {
    TGLclicks++
    document.getElementById(`poput`).classList.toggle("active")
    if (TGLclicks % 2 == 0) document.getElementById("content").innerHTML = ""
}