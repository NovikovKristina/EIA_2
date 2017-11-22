//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    class MovingObject {
        constructor(_x, _y) {
            console.log("Create shape");
            this.setRandomSize();
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.comeBack();
            this.draw();
        }
        move() {
            // abstract
        }
        comeBack() {
            // abstract
        }
        draw() {
            // abstract
        }
        setRandomSize() {
            // abstract
        }
        setRandomColor() {
            // abstract
        }
    }
    Aufgabe6.MovingObject = MovingObject;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=MovingObjects.js.map