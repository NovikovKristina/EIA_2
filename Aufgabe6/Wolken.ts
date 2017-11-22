//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Aufgabe6 {

    export class Wolken extends MovingObject {


        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        update(): void {
            this.move();
            this.comeBack();
            this.draw();
        }

        move(): void {
            this.x += Math.random() * 0.3 + 0.3;
            this.y += Math.random() * 0;
        }

        comeBack(): void {
            if (this.x > 800) {
                this.x = -50;
            }
        }

        draw(): void {
            //Kreis links
            crc2.beginPath();
            crc2.arc(this.x, this.y, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis oben
            crc2.beginPath();
            crc2.arc(this.x + 25, this.y - 15, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis unten links
            crc2.beginPath();
            crc2.arc(this.x + 15, this.y + 20, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis unten rechts
            crc2.beginPath();
            crc2.arc(this.x + 45, this.y + 20, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis rechts
            crc2.beginPath();
            crc2.arc(this.x + 55, this.y - 5, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }

    }//Ende der Klasse

}//Ende Namespace