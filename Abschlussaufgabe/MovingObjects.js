//Aufgabe: Abschlussaufgabe
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 21.02.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class MovingObjects {
        constructor(_x, _y) {
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
            this.height = 20;
            this.width = 20;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            // abstract
        }
        draw() {
            // abstract
        }
        setRandomColor() {
            // abstract
        }
    }
    Abschlussaufgabe.MovingObjects = MovingObjects;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=MovingObjects.js.map