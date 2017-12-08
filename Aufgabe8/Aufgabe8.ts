//Aufgabe: Aufgabe 8
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 08.12.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace DynHTML {

    window.addEventListener("load", init);
    
    function init(): void {

        let choice: string = prompt("Wähle eine Zahl zwischen 10 und 100");
        let choiceAsNumber: number = parseInt(choice);
        
        if (choiceAsNumber >= 10 && choiceAsNumber <= 100) {
            for (let i: number = 0; i < choiceAsNumber; i++) {
                placeDiv("hsl(" + Math.random() * 360 + ", 100%, 60%)", Math.random() * 1180 + 50, Math.random() * 550 + 20, 40, 40);
            }
        } else {
            window.alert("Deine Zahl muss zwischen 10 und 100 liegen");
            init();

        }


        function placeDiv(_color: string, _x: number, _y: number, _width: number, _height: number): void {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

            let s: CSSStyleDeclaration = div.style;
            s.backgroundColor = _color;
            s.border = "1px solid black";
            s.width = "30px";
            s.height = "30px";
//            s.position = "absolute";
            s.left = _x + "px";
            s.top = _y + "px";
        }
        
    }//Ende Init
}//Ende Namespace