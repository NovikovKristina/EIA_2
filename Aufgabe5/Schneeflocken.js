//Aufgabe: Aufgabe 5
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    class Schneeflocken {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.comeBack();
            this.draw();
        }
        move() {
            this.y += Math.random() * 2;
        }
        comeBack() {
            if (this.y > 450) {
                this.y = 0;
            }
        }
        draw() {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#FFFFFF";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.fill();
        }
        setRandomSize() {
            this.size = Math.random() * 2 + 1;
        }
    }
    Aufgabe5.Schneeflocken = Schneeflocken; //Ende der Klasse
})(Aufgabe5 || (Aufgabe5 = {})); //Ende Namespace
//# sourceMappingURL=Schneeflocken.js.map