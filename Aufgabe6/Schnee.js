//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    class Schneeflocken extends Aufgabe6.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
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
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#FFFFFF";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.fill();
        }
        setRandomSize() {
            this.size = Math.random() * 2 + 1;
        }
    }
    Aufgabe6.Schneeflocken = Schneeflocken; //Ende der Klasse
})(Aufgabe6 || (Aufgabe6 = {})); //Ende Namespace
//# sourceMappingURL=Schnee.js.map