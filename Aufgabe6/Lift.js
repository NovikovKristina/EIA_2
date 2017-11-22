//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    class Lift extends Aufgabe6.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.move();
            this.comeBack();
            this.draw();
        }
        move() {
            this.x += Math.random() * 5;
            this.y -= 0.22;
        }
        comeBack() {
            if (this.x > 800) {
                this.x = 0;
                this.y = 150;
            }
        }
        draw() {
            //Wagon
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 45, this.y + 120);
            Aufgabe6.crc2.lineTo(this.x + 45, this.y + 120);
            Aufgabe6.crc2.lineTo(this.x + 45, this.y + 60);
            Aufgabe6.crc2.lineTo(this.x - 45, this.y + 60);
            Aufgabe6.crc2.strokeStyle = "#610B0B";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#FA5858";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            //Fenster
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.rect(this.x - 35, this.y + 70, 15, 15);
            Aufgabe6.crc2.rect(this.x - 7, this.y + 70, 15, 15);
            Aufgabe6.crc2.rect(this.x + 20, this.y + 70, 15, 15);
            Aufgabe6.crc2.strokeStyle = "#CEF6F5";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#CEF6F5";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            //Halterung
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y + 60);
            Aufgabe6.crc2.lineTo(this.x, this.y);
            Aufgabe6.crc2.strokeStyle = "#000000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 45, this.y + 5);
            Aufgabe6.crc2.lineTo(this.x + 45, this.y - 3);
            Aufgabe6.crc2.moveTo(this.x - 45, this.y + 4);
            Aufgabe6.crc2.lineTo(this.x + 45, this.y - 4);
            Aufgabe6.crc2.moveTo(this.x - 45, this.y + 3);
            Aufgabe6.crc2.lineTo(this.x + 45, this.y - 5);
            Aufgabe6.crc2.moveTo(this.x - 45, this.y + 6);
            Aufgabe6.crc2.lineTo(this.x + 45, this.y - 2);
            Aufgabe6.crc2.strokeStyle = "#000000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
            //Seil
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(0, 150);
            Aufgabe6.crc2.lineTo(800, 80);
            Aufgabe6.crc2.strokeStyle = "#000000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
        }
    }
    Aufgabe6.Lift = Lift; //Ende der Klasse
})(Aufgabe6 || (Aufgabe6 = {})); //Ende Namespace
//# sourceMappingURL=Lift.js.map