//Aufgabe: Abschlussaufgabe
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 21.02.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Abschlussaufgabe {

    export class Balloon extends MovingObjects {
        
        w: number = 20;
        h: number = 20;
        radius: number = 22;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.width = 50;
            this.height = 50;
        }

        move(): void {
            this.x += Math.random() * 0;
            this.y += Math.random() * 2;
        }

        draw(): void {
            crc2.globalAlpha = 0.5;
            crc2.beginPath();
            crc2.arc(this.x, this.y, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#E6E6E6";
            crc2.fillStyle = this.color;
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x - 4, this.y + 27);
            crc2.lineTo(this.x + 4, this.y + 27);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 27);
            crc2.bezierCurveTo(this.x + 6, this.y + 42, this.x - 5, this.y + 35, this.x, this.y + 50);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
        }

        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 70%)";
        }

    }
}