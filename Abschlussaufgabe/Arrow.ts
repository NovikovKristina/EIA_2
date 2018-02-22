//Aufgabe: Abschlussaufgabe
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 21.02.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Abschlussaufgabe {

    export class Arrow {
        
        x: number;
        y: number;
        xd: number;
        yd: number;
        width: number;
        height: number;
        radius: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.xd = 2.5;
            this.yd = -2.5;
            this.width = 4;
            this.height = 32;
            this.radius = 22;
        }

        move(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;

        }

        detectCollision(_rx: number, _ry: number, _rwidth: number, _rheight: number) {
            let testX: number = this.x;
            let testY: number = this.y;

            if (this.x < _rx) {
                testX = _rx;
            } else if (this.x > _rx + _rwidth) {
                testX = _rx + _rwidth;
            }

            if (this.y < _ry) {
                testY = _ry;
            } else if (this.y > _ry + _rheight) {
                testY = _ry + _rheight;
            }


            let distX: number = this.x - testX;
            let distY: number = this.y - testY;
            let dist: number = Math.sqrt((distX * distX) + (distY * distY));

            //collision handling
            if (dist <= this.radius) {
                if (distX == 0)
                    this.yd *= -1;
                else if (distY == 0)
                    this.xd *= -1;
                else {
                    this.xd *= -1
                    this.yd *= -1;
                }
                return true;
            }
            return false;
        }

        draw(): void {
            crc2.globalAlpha = 1;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 32);
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 2, this.y + 5);
            crc2.lineTo(this.x + 2, this.y + 5);
            crc2.lineTo(this.x, this.y);
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x - 2, this.y + 32);
            crc2.lineTo(this.x - 2, this.y + 34);
            crc2.lineTo(this.x, this.y + 32);
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x + 2, this.y + 32);
            crc2.lineTo(this.x + 2, this.y + 34);
            crc2.lineTo(this.x, this.y + 32);
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }

    }
}