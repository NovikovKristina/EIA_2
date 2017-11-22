//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Aufgabe6 {

    export class Skifahrer extends MovingObject {
        dx: number;
        dy: number;


        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.dx = Math.random() * - 5 - 5;
            this.dy = Math.random() * - 0.01 + 0.01; 
        }

        update(): void {
            this.move();
            this.comeBack();
            this.draw();
        }

        move(): void {
            this.x += Math.random() * - 5 - 5;
            this.y += Math.random() * - 0.01 + 0.01;
        }

        comeBack(): void {
            if (this.x < 0) {
                this.x = 900;
            }
        }

        draw(): void {
            //Körper
            crc2.beginPath();
            crc2.arc(this.x, this.y, 18, 0, 2 * Math.PI);
            crc2.strokeStyle = "#E6E6E6";
            crc2.fillStyle = "#F2F2F2";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            //Nase
            crc2.beginPath();
            crc2.moveTo(this.x - 15, this.y - 20);
            crc2.lineTo(this.x - 15, this.y - 24);
            crc2.lineTo(this.x - 22, this.y - 23);
            crc2.strokeStyle = "#FF8000";
            crc2.stroke();
            crc2.fillStyle = "#FF8000";
            crc2.fill();
            crc2.closePath();
            //Kopf
            crc2.beginPath();
            crc2.arc(this.x, this.y - 22, 18 - 4, 0, 2 * Math.PI);
            crc2.strokeStyle = "#E6E6E6";
            crc2.fillStyle = "#F2F2F2";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            //Auge
            crc2.beginPath();
            crc2.arc(this.x - 6, this.y - 25, 18 - 17, 0, 2 * Math.PI);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
            //Skier 
            crc2.beginPath();
            crc2.moveTo(this.x + 25, this.y + 18);
            crc2.lineTo(this.x - 30, this.y + 18);
            crc2.lineTo(this.x - 32, this.y + 16);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.closePath();
            //Schal
            crc2.beginPath();
            crc2.rect(this.x - 12, this.y - 16, 24, 4);
            crc2.rect(this.x - 6, this.y - 12, 6, 15);
            crc2.moveTo(this.x - 6, this.y + 8);
            crc2.lineTo(this.x - 6, this.y + 0);
            crc2.moveTo(this.x - 3, this.y + 8);
            crc2.lineTo(this.x - 3, this.y + 0);
            crc2.moveTo(this.x + 0, this.y + 8);
            crc2.lineTo(this.x + 0, this.y + 0);
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            //Mütze
            crc2.beginPath();
            crc2.arc(this.x + 1, this.y - 28, 18 - 5, 1 * Math.PI, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 1, this.y - 45, 18 - 13, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }

        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

    }//Ende der Klasse

}//Ende Namespace