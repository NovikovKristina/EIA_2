//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    class Wolken extends Aufgabe6.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.move();
            this.comeBack();
            this.draw();
        }
        move() {
            this.x += Math.random() * 0.3 + 0.3;
            this.y += Math.random() * 0;
        }
        comeBack() {
            if (this.x > 800) {
                this.x = -50;
            }
        }
        draw() {
            //Kreis links
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 22, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#FFFFFF";
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fill();
            //Kreis oben
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 25, this.y - 15, 22, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#FFFFFF";
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fill();
            //Kreis unten links
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 15, this.y + 20, 22, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#FFFFFF";
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fill();
            //Kreis unten rechts
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 45, this.y + 20, 22, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#FFFFFF";
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fill();
            //Kreis rechts
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 55, this.y - 5, 22, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#FFFFFF";
            Aufgabe6.crc2.fillStyle = "#FFFFFF";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
        }
    }
    Aufgabe6.Wolken = Wolken; //Ende der Klasse
})(Aufgabe6 || (Aufgabe6 = {})); //Ende Namespace
//# sourceMappingURL=Wolken.js.map