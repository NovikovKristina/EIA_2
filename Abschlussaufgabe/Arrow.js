//Aufgabe: Abschlussaufgabe
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 21.02.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Arrow {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.xd = 2.5;
            this.yd = -2.5;
            this.width = 4;
            this.height = 32;
            this.radius = 22;
        }
        move(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        detectCollision(_rx, _ry, _rwidth, _rheight) {
            let testX = this.x;
            let testY = this.y;
            if (this.x < _rx) {
                testX = _rx;
            }
            else if (this.x > _rx + _rwidth) {
                testX = _rx + _rwidth;
            }
            if (this.y < _ry) {
                testY = _ry;
            }
            else if (this.y > _ry + _rheight) {
                testY = _ry + _rheight;
            }
            let distX = this.x - testX;
            let distY = this.y - testY;
            let dist = Math.sqrt((distX * distX) + (distY * distY));
            //collision handling
            if (dist <= this.radius) {
                if (distX == 0)
                    this.yd *= -1;
                else if (distY == 0)
                    this.xd *= -1;
                else {
                    this.xd *= -1;
                    this.yd *= -1;
                }
                return true;
            }
            return false;
        }
        draw() {
            Abschlussaufgabe.crc2.globalAlpha = 1;
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y + 32);
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x - 2, this.y + 5);
            Abschlussaufgabe.crc2.lineTo(this.x + 2, this.y + 5);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y);
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y + 30);
            Abschlussaufgabe.crc2.lineTo(this.x - 2, this.y + 32);
            Abschlussaufgabe.crc2.lineTo(this.x - 2, this.y + 34);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y + 32);
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y + 30);
            Abschlussaufgabe.crc2.lineTo(this.x + 2, this.y + 32);
            Abschlussaufgabe.crc2.lineTo(this.x + 2, this.y + 34);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y + 32);
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Arrow = Arrow;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Arrow.js.map