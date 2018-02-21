//Aufgabe: Abschlussaufgabe
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 21.02.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    export let balloon: Balloon[] = [];
    export let arrow: Arrow;
    export let arrows: Arrow[] = [];

    let moved = false;
    let gameEnd = false;

    let time: number = 0;
    export let scoreNumber: number = 0;
    let score: HTMLElement;

    let image: ImageData;
    

    function init() {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.height = 500;
        canvas.width = 800;

        crc2 = canvas.getContext("2d");

        //Hintergrund zeichnen
        let gardient = crc2.createLinearGradient(0, 600, 500, 50);
        gardient.addColorStop(0, "lightblue");
        gardient.addColorStop(1, "#ecfafc");

        crc2.fillStyle = gardient;
        crc2.fillRect(0, 0, 800, 500);

        //Limit Linie
        crc2.beginPath();
        crc2.fillStyle = "#0174DF";
        crc2.fillRect(0, 499, 800, 1);
        crc2.closePath();
        
        
        alert("Bringe die Ballons zum Platzen, bevor sie den Boden beruehren.\nErreiche einen Score von 50 um das Spiel zu gewinnen.");
        

        //Punktestand
        score = document.getElementById("score");
        score.innerText = "Score: 0";

        //Intervall um Ballons hinzuzufügen
        setInterval(function() {
            let b: Balloon = new Balloon(Math.random() * 800, 0);
            balloon.push(b);
        }, 400);


        arrow = new Arrow(500, 500);

        let a: Arrow = new Arrow(200, 200);

        function updateArrow(): void {
            if (!gameEnd) {
                a.draw();
                setTimeout(updateArrow, 10);
            }
        }

        //Position des Mauszeigers
        function getMousePos(canvas: any, evt: any) {
            let rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }

        canvas.addEventListener("mousemove", function(evt) {
            let mousePos = getMousePos(canvas, evt);
            if (!moved) {
                updateArrow();
            }
            moved = true;
            a.move(mousePos.x, mousePos.y);
            checkBalloonHit(mousePos.x, mousePos.y);
        }, true);


        //Hintergrund speichern
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();
    }//Ende init Funktion



    function animate(): void {

        crc2.clearRect(0, 0, 800, 500);
        crc2.putImageData(image, 0, 0);

        spliceHitBalloon();

        for (let i: number = 0; i < balloon.length; i++) {
            let b: MovingObjects = balloon[i];
            b.update();

            //Wenn Ballon Boden berührt, Game over
            if (balloon[i].y > 520) {
                balloon.splice(0, 1);
                alert("Game over \nLade die Seite neu, um erneut zu spielen.");
            }
        }

        //Punktestand jede Sekunde um 1 erhöhen
        if (time >= 1) {
            scoreNumber += 1;
            score.innerText = "Score: " + scoreNumber + " / 50";
            time = 0;
        }
        else {
            time += 0.02;
        }

        //Wenn 50 Punkte erspielt wurden, hat man gewonnen
        if (scoreNumber >= 50) {
            alert("You Won \nLade die Seite neu, um erneut zu spielen.");
        }


        window.setTimeout(animate, 20);
    }//Ende animate Funktion


    
    //Collision Detection
    function checkBalloonHit(_x: number, _y: number): void {
        for (let i: number = 0; i < balloon.length; i++) {
            if (Math.abs(balloon[i].x - _x) < 10 && Math.abs(balloon[i].y - _y) < 10) {
                balloon.splice(i, 1);
                for (var j: number; j < balloon.length; j++) {
                    let newTrash: Balloon = new Balloon(balloon[j].x, balloon[j].y);
                    newTrash.draw();
                }
            }
        }

    }

    function spliceHitBalloon(): void {
        for (let i: number = 0; i < balloon.length; i++) {
            let hit: boolean = arrow.detectCollision(balloon[i].x, balloon[i].y, balloon[i].width, balloon[i].height);

            if (hit == true) {
                balloon.splice(i, 1);
            }
        }
    }


}//Ende Namsespace