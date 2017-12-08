//Aufgabe: Aufgabe 8
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 08.12.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var DynHTML;
(function (DynHTML) {
    window.addEventListener("load", init);
    function init() {
        let choice = prompt("Wähle eine Zahl zwischen 10 und 100");
        let choiceAsNumber = parseInt(choice);
        if (choiceAsNumber >= 10 && choiceAsNumber <= 100) {
            for (let i = 0; i < choiceAsNumber; i++) {
                placeDiv("hsl(" + Math.random() * 360 + ", 100%, 60%)", Math.random() * 1180 + 50, Math.random() * 550 + 20, 40, 40);
            }
        }
        else {
            window.alert("Deine Zahl muss zwischen 10 und 100 liegen");
            init();
        }
        function placeDiv(_color, _x, _y, _width, _height) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            let s = div.style;
            s.backgroundColor = _color;
            s.border = "1px solid black";
            s.width = "30px";
            s.height = "30px";
            //            s.position = "absolute";
            s.left = _x + "px";
            s.top = _y + "px";
        }
    } //Ende Init
})(DynHTML || (DynHTML = {})); //Ende Namespace
//# sourceMappingURL=Aufgabe8.js.map