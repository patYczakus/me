function go(anch) {
    if (anch.startsWith("https://") || anch.startsWith("http://"))
        window.open(anch, `target="_blank"`)
    else
        window.location.href = anch + ".html";
};

function write(where, text, at_time) {
    var text1 = ""
    var x = 0
    for (i=0; i<text.lenght; i++) {
        x++
        setTimeout(function() {
            text1 = text1 + text.charAt(i)
            document.getElementById(where).innerText = text1
        }, x*at_time)
    }
};

