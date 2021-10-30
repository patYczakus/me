function start() {
    setTimeout(function() {
        go("home")
    }, 3000);
}

function go(anch) {
    window.location.href = anch + ".html";
}