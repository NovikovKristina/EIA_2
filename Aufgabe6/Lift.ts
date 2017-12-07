//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Aufgabe6 {

    export class Lift extends MovingObject {


        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

//        update(): void {
//            this.move();
//            this.comeBack();
//            this.draw();
//        }

        move(): void {
            this.x += Math.random() * 5;
            this.y -= 0.22;
        }

        comeBack(): void {
            if (this.x > 800) {
                this.x = 0;
                this.y = 150;
            }
        }

        draw(): void {
            //Wagon
            crc2.beginPath();
            crc2.moveTo(this.x - 45, this.y + 120);
            crc2.lineTo(this.x + 45, this.y + 120);
            crc2.lineTo(this.x + 45, this.y + 60);
            crc2.lineTo(this.x - 45, this.y + 60);
            crc2.strokeStyle = "#610B0B";
            crc2.stroke()
            crc2.fillStyle = "#FA5858";
            crc2.fill()
            crc2.closePath();
            //Fenster
            crc2.beginPath();
            crc2.rect(this.x - 35, this.y + 70, 15, 15);
            crc2.rect(this.x - 7, this.y + 70, 15, 15);
            crc2.rect(this.x + 20, this.y + 70, 15, 15);
            crc2.strokeStyle = "#CEF6F5";
            crc2.stroke()
            crc2.fillStyle = "#CEF6F5";
            crc2.fill()
            crc2.closePath();
            //Halterung
            crc2.beginPath()
            crc2.moveTo(this.x, this.y + 60);
            crc2.lineTo(this.x, this.y);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x - 45, this.y + 5);
            crc2.lineTo(this.x + 45, this.y - 3);
            crc2.moveTo(this.x - 45, this.y + 4);
            crc2.lineTo(this.x + 45, this.y - 4);
            crc2.moveTo(this.x - 45, this.y + 3);
            crc2.lineTo(this.x + 45, this.y - 5);
            crc2.moveTo(this.x - 45, this.y + 6);
            crc2.lineTo(this.x + 45, this.y - 2);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
            //Seil
            crc2.beginPath()
            crc2.moveTo(0, 150);
            crc2.lineTo(800, 80);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
        }


    }//Ende der Klasse

}//Ende Namespace