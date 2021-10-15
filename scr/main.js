function start() {
    setTimeout(function() {
        go("home")
    }, 3000);
}

function go(anch) {
    window.location.href = anch + ".html";
}

function select_all(obj) {
    var text_val=eval(obj);
    text_val.focus();
    text_val.select();
    if (!document) return; // IE only
    r = text_val.createTextRange();
    r.execCommand('copy');
}