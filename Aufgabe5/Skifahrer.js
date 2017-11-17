//Aufgabe: Aufgabe 5
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    class Skifahrer {
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
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 18, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#E6E6E6";
            Aufgabe5.crc2.fillStyle = "#F2F2F2";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
            //Nase
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x - 15, this.y - 20);
            Aufgabe5.crc2.lineTo(this.x - 15, this.y - 24);
            Aufgabe5.crc2.lineTo(this.x - 22, this.y - 23);
            Aufgabe5.crc2.strokeStyle = "#FF8000";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = "#FF8000";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
            //Kopf
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y - 22, 18 - 4, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#E6E6E6";
            Aufgabe5.crc2.fillStyle = "#F2F2F2";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
            //Auge
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 6, this.y - 25, 18 - 17, 0, 2 * Math.PI);
            Aufgabe5.crc2.strokeStyle = "#000000";
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = "#000000";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
            //Skier 
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x + 25, this.y + 18);
            Aufgabe5.crc2.lineTo(this.x - 30, this.y + 18);
            Aufgabe5.crc2.lineTo(this.x - 32, this.y + 16);
            Aufgabe5.crc2.strokeStyle = this.color;
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.closePath();
            //Schal
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.rect(this.x - 12, this.y - 16, 24, 4);
            Aufgabe5.crc2.rect(this.x - 6, this.y - 12, 6, 15);
            Aufgabe5.crc2.moveTo(this.x - 6, this.y + 8);
            Aufgabe5.crc2.lineTo(this.x - 6, this.y + 0);
            Aufgabe5.crc2.moveTo(this.x - 3, this.y + 8);
            Aufgabe5.crc2.lineTo(this.x - 3, this.y + 0);
            Aufgabe5.crc2.moveTo(this.x + 0, this.y + 8);
            Aufgabe5.crc2.lineTo(this.x + 0, this.y + 0);
            Aufgabe5.crc2.strokeStyle = this.color;
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
            //M�tze
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 1, this.y - 28, 18 - 5, 1 * Math.PI, 2 * Math.PI);
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 1, this.y - 45, 18 - 13, 0, 2 * Math.PI);
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.closePath();
        }
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    Aufgabe5.Skifahrer = Skifahrer; //Ende der Klasse
})(Aufgabe5 || (Aufgabe5 = {})); //Ende Namespace
//# sourceMappingURL=Skifahrer.js.map