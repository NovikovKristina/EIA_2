//Aufgabe: Abschlussaufgabe
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 21.02.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace Abschlussaufgabe {

    export class MovingObjects {
        
        x: number;
        y: number;
        size: number;
        color: string;
        width: number;
        height: number;

        constructor(_x: number, _y: number) {
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
            this.height = 20;
            this.width = 20;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            // abstract
        }

        draw(): void {
            // abstract
        }

        setRandomColor(): void {
            // abstract
        }
    }
}