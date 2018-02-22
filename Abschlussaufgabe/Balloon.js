//Aufgabe: Abschlussaufgabe
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 21.02.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Balloon extends Abschlussaufgabe.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.width = 50;
            this.height = 50;
        }
        move() {
            this.x += Math.random() * 0;
            this.y += Math.random() * 2;
        }
        draw() {
            Abschlussaufgabe.crc2.globalAlpha = 0.5;
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 22, 0, 2 * Math.PI);
            Abschlussaufgabe.crc2.strokeStyle = "#E6E6E6";
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y + 20);
            Abschlussaufgabe.crc2.lineTo(this.x - 4, this.y + 27);
            Abschlussaufgabe.crc2.lineTo(this.x + 4, this.y + 27);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y + 27);
            Abschlussaufgabe.crc2.bezierCurveTo(this.x + 6, this.y + 42, this.x - 5, this.y + 35, this.x, this.y + 50);
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.closePath();
        }
        setRandomColor() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 70%)";
        }
    }
    Abschlussaufgabe.Balloon = Balloon;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Balloon.js.map