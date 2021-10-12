function go(anch) {
    window.location.href = anch + ".html";
}

function select_all(obj) {
    var text_val=eval(obj);
    text_val.focus();
    text_val.select();
    if (!document.all) return; // IE only
    r = text_val.createTextRange();
    r.execCommand('copy');
}