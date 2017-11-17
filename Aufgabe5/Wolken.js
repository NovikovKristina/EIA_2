//Aufgabe: Aufgabe 5
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    class Wolken {
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 22, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#FFFFFF";
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fill();
            //Kreis oben
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 25, this.y - 15, 22, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#FFFFFF";
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fill();
            //Kreis unten links
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 15, this.y + 20, 22, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#FFFFFF";
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fill();
            //Kreis unten rechts
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 45, this.y + 20, 22, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#FFFFFF";
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fill();
            //Kreis rechts
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 55, this.y - 5, 22, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#FFFFFF";
            Aufgabe5.crc2.fillStyle = "#FFFFFF";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
        }
    }
    Aufgabe5.Wolken = Wolken; //Ende der Klasse
})(Aufgabe5 || (Aufgabe5 = {})); //Ende Namespace
//# sourceMappingURL=Wolken.js.map