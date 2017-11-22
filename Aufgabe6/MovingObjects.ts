//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Aufgabe6 {

    export class MovingObject {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            console.log("Create shape");
            this.setRandomSize();
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.comeBack();
            this.draw();
        }

        move(): void {
            // abstract
        }

        comeBack(): void {
            // abstract
        }

        draw(): void {
            // abstract
        }

        setRandomSize(): void {
            // abstract
        }

        setRandomColor(): void {
            // abstract
        }
    }
}