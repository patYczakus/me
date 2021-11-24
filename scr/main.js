function start() {
    setTimeout(function() {
        go("home")
    }, 3000);
}

function go(anch) {
    if (anch.startsWith("https://") || anch.startsWith("http://"))
        window.open(anch, `target="_blank"`)
    else
        window.location.href = anch + ".html";
}
