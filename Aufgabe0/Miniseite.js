/* Aufgabe: Aufgabe 0
Name: Kristina Novikov
Matrikel: 254136
Datum: 11.10.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
document.addEventListener('DOMContentLoaded', function () {
    var greeter = prompt("Hier bitte Ihren Namen eingeben");
    if (greeter != null) {
        document.getElementsByTagName("div")[0].innerHTML = "Hallo " + greeter + "! :-)";
    }
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("style").style.color = "#4D1933";
    document.getElementById("style").style.fontSize = "3em";
    document.getElementById("style").style.fontFamily = "sans-serif";
    document.getElementById("style").style.textAlign = "center";
    document.getElementById("style").style.backgroundColor = "#FFF8E7";
});
//# sourceMappingURL=Miniseite.js.map