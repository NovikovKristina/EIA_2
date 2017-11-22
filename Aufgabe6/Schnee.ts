//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Aufgabe6 {

    export class Schneeflocken extends MovingObject {


        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        update(): void {
            this.move();
            this.comeBack();
            this.draw();
        }

        move(): void {
            this.y += Math.random() * 2;
        }

        comeBack(): void {
            if (this.y > 450) {
                this.y = 0;
            }
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
        }

        setRandomSize(): void {
            this.size = Math.random() * 2 + 1;
        }

    }//Ende der Klasse

}//Ende Namespace