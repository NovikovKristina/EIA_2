//Aufgabe: Aufgabe 5
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 16.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe5 {
    export let crc2: CanvasRenderingContext2D;

    let fahrer: Skifahrer;
    let skifahrer: Skifahrer[] = [];

    let wolke: Wolken;
    let wolken: Wolken[] = [];

    let schneeflocke: Schneeflocken;
    let schneeflocken: Schneeflocken[] = [];

    let liftX: number[] = [0];
    let liftY: number[] = [150];

    let image: ImageData;

    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.width = 800;
        canvas.height = 600;
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        console.log("setTimeout");


        //Skifahrer
        fahrer = new Skifahrer(780, 491);
        fahrer.setRandomColor();

        for (let i: number = 0; i < 3; i++) {
            let s: Skifahrer = new Skifahrer(Math.random() * canvas.width + 400, 490);
            s.setRandomColor();
            skifahrer[i] = s;
        }

        //Wolken
        wolke = new Wolken(10, 65);

        for (let i: number = 0; i < 2; i++) {
            let s: Wolken = new Wolken(Math.random() * 800, Math.random() * 65 + 45);
            wolken[i] = s;
        }

        //Schneeflocken
        schneeflocke = new Schneeflocken(canvas.width, 0);
        schneeflocke.setRandomSize();
        
        for (let i: number = 0; i < 80; i++) {
            let s: Schneeflocken = new Schneeflocken(0 + Math.random() * canvas.width, 0 + Math.random() * 450);
            s.setRandomSize();
            schneeflocken[i] = s;
        }     


        //Himmel//
        crc2.beginPath();
        crc2.rect(0, 0, 800, 600);
        crc2.strokeStyle = "#CEF6F5";
        crc2.fillStyle = "#CEF6F5";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();

        //Sonne//
        crc2.beginPath();
        crc2.arc(50, 50, 35, 0, 2 * Math.PI);
        crc2.strokeStyle = "#F7FE2E";
        crc2.fillStyle = "#F7FE2E";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();

        //Berge//
        //Berg 1
        crc2.beginPath();
        crc2.moveTo(100, 400);
        crc2.lineTo(320, 200);
        crc2.lineTo(550, 400);
        crc2.strokeStyle = "#D8D8D8";
        crc2.stroke();
        crc2.fillStyle = "#E6E6E6";
        crc2.fill();
        crc2.closePath();
        //Schneespitze
        crc2.beginPath();
        crc2.moveTo(276, 240);
        crc2.lineTo(320, 200);
        crc2.lineTo(355, 230);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();

        //Berg 2
        crc2.beginPath();
        crc2.moveTo(180, 450);
        crc2.lineTo(500, 150);
        crc2.lineTo(680, 450);
        crc2.strokeStyle = "#D8D8D8";
        crc2.stroke();
        crc2.fillStyle = "#D8D8D8";
        crc2.fill();
        crc2.closePath();
        //Schneespitze
        crc2.beginPath();
        crc2.moveTo(446, 200);
        crc2.lineTo(500, 150);
        crc2.lineTo(555, 240);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();

        //Berg 3
        crc2.beginPath();
        crc2.moveTo(10, 450);
        crc2.lineTo(230, 200);
        crc2.lineTo(451, 450);
        crc2.strokeStyle = "#D8D8D8";
        crc2.stroke();
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        crc2.closePath();
        //Schneespitze
        crc2.beginPath();
        crc2.moveTo(186, 250);
        crc2.lineTo(230, 200);
        crc2.lineTo(309, 290);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();

        //Hütte//
        //Vorne
        crc2.beginPath();
        crc2.moveTo(740, 410);
        crc2.lineTo(770, 410);
        crc2.lineTo(770, 390);
        crc2.lineTo(755, 360);
        crc2.lineTo(740, 390);
        crc2.strokeStyle = "#29220A";
        crc2.stroke();
        crc2.fillStyle = "#61380B";
        crc2.fill();
        crc2.closePath();
        //Seitlich
        crc2.beginPath();
        crc2.rect(770, 385, 800, 35);
        crc2.strokeStyle = "#29220A";
        crc2.stroke();
        crc2.fillStyle = "#61380B";
        crc2.fill();
        crc2.closePath();
        //Dach
        crc2.beginPath();
        crc2.moveTo(740, 390);
        crc2.lineTo(755, 360);
        crc2.lineTo(770, 390);
        crc2.lineTo(800, 390);
        crc2.lineTo(800, 360);
        crc2.lineTo(755, 360);
        crc2.lineTo(740, 390);
        crc2.strokeStyle = "#29220A";
        crc2.stroke();
        crc2.fillStyle = "#29220A";
        crc2.fill();
        crc2.closePath();

        //Hügel//
        //Hügel 1
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.bezierCurveTo(150, 380, 200, 420, 300, 450);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        //Viereck zum Schließen der Lücke
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(300, 450);
        crc2.lineTo(120, 540);
        crc2.lineTo(0, 550);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();

        // Hügel 2
        crc2.beginPath();
        crc2.moveTo(120, 540);
        crc2.bezierCurveTo(450, 350, 650, 350, 800, 420);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        //Dreieck zum Schließen der Lücke
        crc2.beginPath();
        crc2.moveTo(300, 500);
        crc2.lineTo(800, 420);
        crc2.lineTo(800, 550);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();

        //Hügel 3
        crc2.beginPath();
        crc2.rect(0, 500, 800, 100);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();

        //Tannen//
        drawTree(40, 396, "#088A29");
        drawTree(80, 396, "#088A29");
        drawTree(640, 381, "#088A29");
        drawTree(320, 600, "#088A29");
        drawTree(370, 600, "#088A29");

        //5 Tannen zufällig platzieren
        for (let i: number = 0; i < 5; i++) {
            let x: number = 400 + Math.random() * 300;
            let y: number = 420 + Math.random() * 50;
            drawTree(x, y, "#088A29");
        }


        //Schneemann//
        //Körper
        crc2.beginPath();
        crc2.arc(740, 600, 22, 0, 2 * Math.PI);
        crc2.arc(740, 580, 19, 0, 2 * Math.PI);
        crc2.arc(740, 560, 15, 0, 2 * Math.PI);
        crc2.strokeStyle = "#FFFFFF";
        crc2.fillStyle = "#F2F2F2";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Augen
        crc2.beginPath();
        crc2.arc(735, 553, 1.5, 0, 2 * Math.PI);
        crc2.arc(745, 553, 1.5, 0, 2 * Math.PI);
        crc2.strokeStyle = "#FFFFFF";
        crc2.fillStyle = "#000000";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Nase
        crc2.beginPath();
        crc2.moveTo(740, 556);
        crc2.lineTo(750, 558);
        crc2.lineTo(740, 560);
        crc2.strokeStyle = "#FF8000";
        crc2.stroke();
        crc2.fillStyle = "#FF8000";
        crc2.fill();
        crc2.closePath();
        //Knöpfe
        crc2.beginPath();
        crc2.arc(740, 575, 1.5, 0, 2 * Math.PI);
        crc2.arc(740, 587, 1.5, 0, 2 * Math.PI);
        crc2.arc(740, 599, 1.5, 0, 2 * Math.PI);
        crc2.strokeStyle = "#F2F2F2";
        crc2.fillStyle = "#000000";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();

        //Skier//
        //Erster Skier
        crc2.beginPath();
        crc2.moveTo(700, 600);
        crc2.lineTo(697, 550);
        crc2.lineTo(698, 547);
        crc2.lineTo(698, 547);
        crc2.lineTo(696, 547);
        crc2.lineTo(694, 550);
        crc2.lineTo(697, 600);
        crc2.strokeStyle = "#0431B4";
        crc2.fillStyle = "#0431B4";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Zweiter Skier
        crc2.beginPath();
        crc2.moveTo(690, 600);
        crc2.lineTo(702, 550);
        crc2.lineTo(704, 547);
        crc2.lineTo(704, 547);
        crc2.lineTo(702, 547);
        crc2.lineTo(700, 550);
        crc2.lineTo(687, 600);
        crc2.strokeStyle = "#0431B4";
        crc2.fillStyle = "#0431B4";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();




        //Hintergrund speichern
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        animate();

    }//Ende der Init-Funktion



    // Funktionen //

    //Skilift Funktion//
    function drawLift(_x: number, _y: number): void {
        //Wagon
        crc2.beginPath();
        crc2.moveTo(_x - 45, _y + 120);
        crc2.lineTo(_x + 45, _y + 120);
        crc2.lineTo(_x + 45, _y + 60);
        crc2.lineTo(_x - 45, _y + 60);
        crc2.strokeStyle = "#610B0B";
        crc2.stroke()
        crc2.fillStyle = "#FA5858";
        crc2.fill()
        crc2.closePath();
        //Fenster
        crc2.beginPath();
        crc2.rect(_x - 35, _y + 70, 15, 15);
        crc2.rect(_x - 7, _y + 70, 15, 15);
        crc2.rect(_x + 20, _y + 70, 15, 15);
        crc2.strokeStyle = "#CEF6F5";
        crc2.stroke()
        crc2.fillStyle = "#CEF6F5";
        crc2.fill()
        crc2.closePath();
        //Halterung
        crc2.beginPath()
        crc2.moveTo(_x, _y + 60);
        crc2.lineTo(_x, _y);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(_x - 45, _y + 5);
        crc2.lineTo(_x + 45, _y - 3);
        crc2.moveTo(_x - 45, _y + 4);
        crc2.lineTo(_x + 45, _y - 4);
        crc2.moveTo(_x - 45, _y + 3);
        crc2.lineTo(_x + 45, _y - 5);
        crc2.moveTo(_x - 45, _y + 6);
        crc2.lineTo(_x + 45, _y - 2);
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

    //Tannen Funktion//
    function drawTree(_x: number, _y: number, _color: string): void {
        //Oberer Teil
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 15, _y - 26);
        crc2.lineTo(_x + 30, _y);
        crc2.strokeStyle = _color;
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
        //Unterer Teil
        crc2.beginPath();
        crc2.moveTo(_x + 2, _y - 14);
        crc2.lineTo(_x + 15, _y - 36);
        crc2.lineTo(_x + 28, _y - 14);
        crc2.strokeStyle = _color;
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
    }



    // Animation //

    function animate(): void {
        console.log("Timeout");

        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0, 0);


        //Animation Wolken
        wolke.update();

        for (let i: number = 0; i < wolken.length; i++) {
            let s: Wolken = wolken[i];
            s.update();
        }

        //Animation Lift//
        for (let i: number = 0; i < liftX.length; i++) {
            liftX[i] += Math.random() * 5
            liftY[i] -= 0.22;
            drawLift(liftX[i], liftY[i]);

            if (liftX[i] > 800) {
                liftX[i] = 0;
                liftY[i] = 150;
            }
        }

        //Animation Skifahrer//
        fahrer.update();

        for (let i: number = 0; i < skifahrer.length; i++) {
            let s: Skifahrer = skifahrer[i];
            s.update();
        }

        //Animation Schnee//
        schneeflocke.update();
        
        for (let i: number = 0; i < schneeflocken.length; i++) {
            let s: Schneeflocken = schneeflocken[i];
            s.update();
        }

        window.setTimeout(animate, 20);
    }//Ende animate Funktion


}//Ende des Namespaces