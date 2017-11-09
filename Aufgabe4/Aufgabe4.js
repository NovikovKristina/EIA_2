//Aufgabe: Aufgabe 4
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 9.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    let crc2;
    let skifahrer = [];
    let wolkeX = [];
    let wolkeY = [];
    //    let skifahrerX: number[] = [];
    //    let skifahrerY: number[] = [];
    let schneeflockenX = [];
    let schneeflockenY = [];
    let liftX = [0];
    let liftY = [150];
    let image;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 800;
        canvas.height = 600;
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");
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
        //H�tte//
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
        //H�gel//
        //H�gel 1
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.bezierCurveTo(150, 380, 200, 420, 300, 450);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        //Viereck zum Schlie�en der L�cke
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
        // H�gel 2
        crc2.beginPath();
        crc2.moveTo(120, 540);
        crc2.bezierCurveTo(450, 350, 650, 350, 800, 420);
        crc2.strokeStyle = "#BDBDBD";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        //Dreieck zum Schlie�en der L�cke
        crc2.beginPath();
        crc2.moveTo(300, 500);
        crc2.lineTo(800, 420);
        crc2.lineTo(800, 550);
        crc2.strokeStyle = "#FFFFFF";
        crc2.stroke();
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        //H�gel 3
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
        //5 Tannen zuf�llig platzieren
        for (let i = 0; i < 5; i++) {
            let x = 400 + Math.random() * 300;
            let y = 420 + Math.random() * 50;
            drawTree(x, y, "#088A29");
        }
        //Schneemann//
        //K�rper
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
        //Kn�pfe
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
        //Random Startposition Wolken
        for (let i = 0; i < 2; i++) {
            wolkeX[i] = Math.random() * canvas.width;
            wolkeY[i] = Math.random() * 65 + 45;
        }
        //Startposition Skifahrer
        for (let i = 0; i < 3; i++) {
            skifahrer[i] = {
                x: 800,
                y: (Math.random() * 7) + 490,
                dx: Math.random() * -5 - 5,
                dy: Math.random() * -0.01 + 0.01,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        //Startposition Schneeflocken
        for (let i = 0; i < 80; i++) {
            schneeflockenX[i] = 0 + Math.random() * canvas.width;
            schneeflockenY[i] = 0 + Math.random() * 450;
        }
        animate();
    } //Ende der Init-Funktion
    // Funktionen //
    //Wolken Funktion//
    function drawCloud(_x, _y, _radius, _startAngle, _endAngle, _color) {
        //Kreis links
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = _color;
        crc2.fillStyle = _color;
        crc2.stroke();
        crc2.fill();
        //Kreis oben
        crc2.beginPath();
        crc2.arc(_x + 25, _y - 15, _radius, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = _color;
        crc2.fillStyle = _color;
        crc2.stroke();
        crc2.fill();
        //Kreis unten links
        crc2.beginPath();
        crc2.arc(_x + 15, _y + 20, _radius, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = _color;
        crc2.fillStyle = _color;
        crc2.stroke();
        crc2.fill();
        //Kreis unten rechts
        crc2.beginPath();
        crc2.arc(_x + 45, _y + 20, _radius, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = _color;
        crc2.fillStyle = _color;
        crc2.stroke();
        crc2.fill();
        //Kreis rechts
        crc2.beginPath();
        crc2.arc(_x + 55, _y - 5, _radius, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = _color;
        crc2.fillStyle = _color;
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    //Skilift Funktion//
    function drawLift(_x, _y) {
        //Wagon
        crc2.beginPath();
        crc2.moveTo(_x - 45, _y + 120);
        crc2.lineTo(_x + 45, _y + 120);
        crc2.lineTo(_x + 45, _y + 60);
        crc2.lineTo(_x - 45, _y + 60);
        crc2.strokeStyle = "#610B0B";
        crc2.stroke();
        crc2.fillStyle = "#FA5858";
        crc2.fill();
        crc2.closePath();
        //Fenster
        crc2.beginPath();
        crc2.rect(_x - 35, _y + 70, 15, 15);
        crc2.rect(_x - 7, _y + 70, 15, 15);
        crc2.rect(_x + 20, _y + 70, 15, 15);
        crc2.strokeStyle = "#CEF6F5";
        crc2.stroke();
        crc2.fillStyle = "#CEF6F5";
        crc2.fill();
        crc2.closePath();
        //Halterung
        crc2.beginPath();
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
        crc2.beginPath();
        crc2.moveTo(0, 150);
        crc2.lineTo(800, 80);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();
    }
    //Tannen Funktion//
    function drawTree(_x, _y, _color) {
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
    //Schneeflocken Funktionen//
    function drawSnowflake1(_x, _y, _radius, _startAngle, _endAngle, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = _color;
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    //Skifahrer Funktion
    function moveAndDrawSkifahrer(_skifahrer) {
        _skifahrer.x += _skifahrer.dx;
        _skifahrer.y += _skifahrer.dy;
        //K�rper
        crc2.beginPath();
        crc2.arc(_skifahrer.x, _skifahrer.y, 18, 0, 2 * Math.PI);
        crc2.strokeStyle = "#E6E6E6";
        crc2.fillStyle = "#F2F2F2";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Nase
        crc2.beginPath();
        crc2.moveTo(_skifahrer.x - 15, _skifahrer.y - 20);
        crc2.lineTo(_skifahrer.x - 15, _skifahrer.y - 24);
        crc2.lineTo(_skifahrer.x - 22, _skifahrer.y - 23);
        crc2.strokeStyle = "#FF8000";
        crc2.stroke();
        crc2.fillStyle = "#FF8000";
        crc2.fill();
        crc2.closePath();
        //Kopf
        crc2.beginPath();
        crc2.arc(_skifahrer.x, _skifahrer.y - 22, 18 - 4, 0, 2 * Math.PI);
        crc2.strokeStyle = "#E6E6E6";
        crc2.fillStyle = "#F2F2F2";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Auge
        crc2.beginPath();
        crc2.arc(_skifahrer.x - 6, _skifahrer.y - 25, 18 - 17, 0, 2 * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.closePath();
        //Skier 
        crc2.beginPath();
        crc2.moveTo(_skifahrer.x + 25, _skifahrer.y + 18);
        crc2.lineTo(_skifahrer.x - 30, _skifahrer.y + 18);
        crc2.lineTo(_skifahrer.x - 32, _skifahrer.y + 16);
        crc2.strokeStyle = "#0080FF";
        crc2.stroke();
        crc2.closePath();
        //Schal
        crc2.beginPath();
        crc2.rect(_skifahrer.x - 12, _skifahrer.y - 16, 24, 4);
        crc2.rect(_skifahrer.x - 6, _skifahrer.y - 12, 6, 15);
        crc2.moveTo(_skifahrer.x - 6, _skifahrer.y + 8);
        crc2.lineTo(_skifahrer.x - 6, _skifahrer.y + 0);
        crc2.moveTo(_skifahrer.x - 3, _skifahrer.y + 8);
        crc2.lineTo(_skifahrer.x - 3, _skifahrer.y + 0);
        crc2.moveTo(_skifahrer.x + 0, _skifahrer.y + 8);
        crc2.lineTo(_skifahrer.x + 0, _skifahrer.y + 0);
        crc2.strokeStyle = _skifahrer.color;
        crc2.stroke();
        crc2.fillStyle = _skifahrer.color;
        crc2.fill();
        crc2.closePath();
        //M�tze
        crc2.beginPath();
        crc2.arc(_skifahrer.x + 1, _skifahrer.y - 28, 18 - 5, 1 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_skifahrer.x + 1, _skifahrer.y - 45, 18 - 13, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    // Animation //
    //Animation Wolken//
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0, 0);
        //Animation Wolken
        for (let i = 0; i < wolkeX.length; i++) {
            wolkeX[i] += Math.random() * 0.7;
            drawCloud(wolkeX[i], wolkeY[i], 22, 0, 2, "#FFFFFF");
            //Wenn Wolke aus dem Bild: Links wieder ins Bild kommen
            if (wolkeX[i] > 800) {
                wolkeX[i] = -50;
            }
        }
        //Animation Lift//
        for (let i = 0; i < liftX.length; i++) {
            liftX[i] += Math.random() * 5;
            liftY[i] -= 0.22;
            drawLift(liftX[i], liftY[i]);
            if (liftX[i] > 800) {
                liftX[i] = 0;
                liftY[i] = 150;
            }
        }
        //Animation Skifahrer//
        for (let i = 0; i < skifahrer.length; i++) {
            moveAndDrawSkifahrer(skifahrer[i]);
            if (skifahrer[i].x < 0) {
                skifahrer[i].x = 950;
            }
        }
        //Animation Schnee//
        for (let i = 0; i < schneeflockenX.length; i++) {
            schneeflockenY[i] += Math.random() * 2;
            drawSnowflake1(schneeflockenX[i], schneeflockenY[i], 2, 0, 2, "#FFFFFF");
            if (schneeflockenY[i] > 450) {
                schneeflockenY[i] = 0;
            }
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe4 || (Aufgabe4 = {})); //Ende des Namespaces
//# sourceMappingURL=Aufgabe4.js.map