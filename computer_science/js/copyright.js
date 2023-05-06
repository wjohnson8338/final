/* Copyright */
function getCopyrightYear() {
    var date = new Date();
    document.getElementById("copyright").innerHTML = date.getFullYear();
}

window.onload = function() {
    getCopyrightYear();
}