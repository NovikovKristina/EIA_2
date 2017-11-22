//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    class Skifahrer extends Aufgabe6.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * -5 - 5;
            this.dy = Math.random() * -0.01 + 0.01;
        }
        update() {
            this.move();
            this.comeBack();
            this.draw();
        }
        move() {
            this.x += Math.random() * -5 - 5;
            this.y += Math.random() * -0.01 + 0.01;
        }
        comeBack() {
            if (this.x < 0) {
                this.x = 900;
            }
        }
        draw() {
            //K�rper
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 18, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#E6E6E6";
            Aufgabe6.crc2.fillStyle = "#F2F2F2";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            //Nase
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 15, this.y - 20);
            Aufgabe6.crc2.lineTo(this.x - 15, this.y - 24);
            Aufgabe6.crc2.lineTo(this.x - 22, this.y - 23);
            Aufgabe6.crc2.strokeStyle = "#FF8000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#FF8000";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            //Kopf
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y - 22, 18 - 4, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#E6E6E6";
            Aufgabe6.crc2.fillStyle = "#F2F2F2";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            //Auge
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x - 6, this.y - 25, 18 - 17, 0, 2 * Math.PI);
            Aufgabe6.crc2.strokeStyle = "#000000";
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = "#000000";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            //Skier 
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x + 25, this.y + 18);
            Aufgabe6.crc2.lineTo(this.x - 30, this.y + 18);
            Aufgabe6.crc2.lineTo(this.x - 32, this.y + 16);
            Aufgabe6.crc2.strokeStyle = this.color;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
            //Schal
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.rect(this.x - 12, this.y - 16, 24, 4);
            Aufgabe6.crc2.rect(this.x - 6, this.y - 12, 6, 15);
            Aufgabe6.crc2.moveTo(this.x - 6, this.y + 8);
            Aufgabe6.crc2.lineTo(this.x - 6, this.y + 0);
            Aufgabe6.crc2.moveTo(this.x - 3, this.y + 8);
            Aufgabe6.crc2.lineTo(this.x - 3, this.y + 0);
            Aufgabe6.crc2.moveTo(this.x + 0, this.y + 8);
            Aufgabe6.crc2.lineTo(this.x + 0, this.y + 0);
            Aufgabe6.crc2.strokeStyle = this.color;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            //M�tze
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 1, this.y - 28, 18 - 5, 1 * Math.PI, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 1, this.y - 45, 18 - 13, 0, 2 * Math.PI);
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
        }
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    Aufgabe6.Skifahrer = Skifahrer; //Ende der Klasse
})(Aufgabe6 || (Aufgabe6 = {})); //Ende Namespace
//# sourceMappingURL=Skifahrer.js.map