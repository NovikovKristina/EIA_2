//Aufgabe: Abschlussaufgabe
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 21.02.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    Abschlussaufgabe.balloon = [];
    Abschlussaufgabe.arrows = [];
    let moved = false;
    let gameEnd = false;
    let time = 0;
    Abschlussaufgabe.scoreNumber = 0;
    let score;
    let image;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.height = 500;
        canvas.width = 800;
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        //Hintergrund zeichnen
        let gardient = Abschlussaufgabe.crc2.createLinearGradient(0, 600, 500, 50);
        gardient.addColorStop(0, "lightblue");
        gardient.addColorStop(1, "#ecfafc");
        Abschlussaufgabe.crc2.fillStyle = gardient;
        Abschlussaufgabe.crc2.fillRect(0, 0, 800, 500);
        //Limit Linie
        Abschlussaufgabe.crc2.beginPath();
        Abschlussaufgabe.crc2.fillStyle = "#0174DF";
        Abschlussaufgabe.crc2.fillRect(0, 499, 800, 1);
        Abschlussaufgabe.crc2.closePath();
        alert("Bringe die Ballons zum Platzen, bevor sie den Boden beruehren.\nErreiche einen Score von 50 um das Spiel zu gewinnen.");
        //Punktestand
        score = document.getElementById("score");
        score.innerText = "Score: 0";
        //Intervall um Ballons hinzuzuf�gen
        setInterval(function () {
            let b = new Abschlussaufgabe.Balloon(Math.random() * 800, 0);
            Abschlussaufgabe.balloon.push(b);
        }, 400);
        Abschlussaufgabe.arrow = new Abschlussaufgabe.Arrow(500, 500);
        let a = new Abschlussaufgabe.Arrow(200, 200);
        function updateArrow() {
            if (!gameEnd) {
                a.draw();
                setTimeout(updateArrow, 10);
            }
        }
        //Position des Mauszeigers
        function getMousePos(canvas, evt) {
            let rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }
        canvas.addEventListener("mousemove", function (evt) {
            let mousePos = getMousePos(canvas, evt);
            if (!moved) {
                updateArrow();
            }
            moved = true;
            a.move(mousePos.x, mousePos.y);
            checkBalloonHit(mousePos.x, mousePos.y);
        }, true);
        //Hintergrund speichern
        image = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } //Ende init Funktion
    function animate() {
        Abschlussaufgabe.crc2.clearRect(0, 0, 800, 500);
        Abschlussaufgabe.crc2.putImageData(image, 0, 0);
        spliceHitBalloon();
        for (let i = 0; i < Abschlussaufgabe.balloon.length; i++) {
            let b = Abschlussaufgabe.balloon[i];
            b.update();
            //Wenn Ballon Boden ber�hrt, Game over
            if (Abschlussaufgabe.balloon[i].y > 520) {
                Abschlussaufgabe.balloon.splice(0, 1);
                alert("Game over \nLade die Seite neu, um erneut zu spielen.");
            }
        }
        //Punktestand jede Sekunde um 1 erh�hen
        if (time >= 1) {
            Abschlussaufgabe.scoreNumber += 1;
            score.innerText = "Score: " + Abschlussaufgabe.scoreNumber + " / 50";
            time = 0;
        }
        else {
            time += 0.02;
        }
        //Wenn 50 Punkte erspielt wurden, hat man gewonnen
        if (Abschlussaufgabe.scoreNumber >= 50) {
            alert("You Won \nLade die Seite neu, um erneut zu spielen.");
        }
        window.setTimeout(animate, 20);
    } //Ende animate Funktion
    //Collision Detection
    function checkBalloonHit(_x, _y) {
        for (let i = 0; i < Abschlussaufgabe.balloon.length; i++) {
            if (Math.abs(Abschlussaufgabe.balloon[i].x - _x) < 10 && Math.abs(Abschlussaufgabe.balloon[i].y - _y) < 10) {
                Abschlussaufgabe.balloon.splice(i, 1);
                for (var j; j < Abschlussaufgabe.balloon.length; j++) {
                    let newTrash = new Abschlussaufgabe.Balloon(Abschlussaufgabe.balloon[j].x, Abschlussaufgabe.balloon[j].y);
                    newTrash.draw();
                }
            }
        }
    }
    function spliceHitBalloon() {
        for (let i = 0; i < Abschlussaufgabe.balloon.length; i++) {
            let hit = Abschlussaufgabe.arrow.detectCollision(Abschlussaufgabe.balloon[i].x, Abschlussaufgabe.balloon[i].y, Abschlussaufgabe.balloon[i].width, Abschlussaufgabe.balloon[i].height);
            if (hit == true) {
                Abschlussaufgabe.balloon.splice(i, 1);
            }
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {})); //Ende Namsespace
//# sourceMappingURL=Abschluss.js.map