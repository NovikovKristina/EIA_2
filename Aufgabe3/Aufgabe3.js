//Aufgabe: Aufgabe 2
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 28.10.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", init);
    let crc2;
    let WolkeX = [];
    let WolkeY = [];
    let SkifahrerX = [];
    let SkifahrerY = [];
    let SchneeflockenX = [];
    let SchneeflockenY = [];
    let LiftX = [];
    let LiftY = [];
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
            let x = 0 + Math.random() * 550;
            let y = 560 + Math.random() * 50;
            drawTree(x, y, "#088A29");
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
        // Animation //     
        //Hintergrund speichern
        image = crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Startposition Wolke 1
        for (let i = 0; i < 1; i++) {
            WolkeX[0] = 175;
            WolkeY[0] = 65;
        }
        //Startposition Wolke 2
        for (let i = 0; i < 1; i++) {
            WolkeX[1] = 735;
            WolkeY[1] = 55;
        }
        //Startposition Lift
        for (let i = 0; i < 1; i++) {
            LiftX[i] = 0;
            LiftY[i] = 150;
        }
        //Startposition Skifahrer
        for (let i = 0; i < 1; i++) {
            SkifahrerX[i] = 750;
            SkifahrerY[i] = 492;
        }
        //Startposition Schneeflocken
        for (let i = 0; i < 80; i++) {
            SchneeflockenX[i] = 0 + Math.random() * canvas.width;
            SchneeflockenY[i] = 0 + Math.random() * 450;
        }
        animate();
        //window.setTimeout(animate, 150);
    } //Ende der Init-Funktion
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
    function drawSkiingSnowman(_x, _y, _radius, _startAngle, _endAngle, _color) {
        //K�rper
        crc2.beginPath();
        crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = "#E6E6E6";
        crc2.fillStyle = _color;
        crc2.stroke();
        crc2.fill();
        //Nase
        crc2.beginPath();
        crc2.moveTo(_x - 15, _y - 20);
        crc2.lineTo(_x - 15, _y - 24);
        crc2.lineTo(_x - 22, _y - 23);
        crc2.strokeStyle = "#FF8000";
        crc2.stroke();
        crc2.fillStyle = "#FF8000";
        crc2.fill();
        crc2.closePath();
        //Kopf
        crc2.beginPath();
        crc2.arc(_x, _y - 22, _radius - 4, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = "#E6E6E6";
        crc2.fillStyle = _color;
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        //Auge
        crc2.beginPath();
        crc2.arc(_x - 6, _y - 25, _radius - 17, _startAngle, _endAngle * Math.PI);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.closePath();
        //Skier 
        crc2.beginPath();
        crc2.moveTo(_x + 25, _y + 18);
        crc2.lineTo(_x - 30, _y + 18);
        crc2.lineTo(_x - 32, _y + 16);
        crc2.strokeStyle = "#0080FF";
        crc2.stroke();
        crc2.closePath();
        //Schal
        crc2.beginPath();
        crc2.rect(_x - 12, _y - 16, 24, 4);
        crc2.rect(_x - 6, _y - 12, 6, 15);
        crc2.moveTo(_x - 6, _y + 8);
        crc2.lineTo(_x - 6, _y + 0);
        crc2.moveTo(_x - 3, _y + 8);
        crc2.lineTo(_x - 3, _y + 0);
        crc2.moveTo(_x + 0, _y + 8);
        crc2.lineTo(_x + 0, _y + 0);
        crc2.strokeStyle = "#0174DF";
        crc2.stroke();
        crc2.fillStyle = "#0080FF";
        crc2.fill();
        crc2.closePath();
        //M�tze
        crc2.beginPath();
        crc2.arc(_x + 1, _y - 28, _radius - 5, 1 * Math.PI, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 1, _y - 45, _radius - 13, _startAngle, _endAngle * Math.PI);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    //Animation Wolken//
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0, 0);
        for (let i = 0; i < WolkeX.length; i++) {
            WolkeX[i] += Math.random() * 0.5;
            WolkeY[i] += Math.random() * 0 - 0;
            drawCloud(WolkeX[0], WolkeY[0], 22, 0, 2, "#FFFFFF");
            drawCloud(WolkeX[1], WolkeY[1], 22, 0, 2, "#FFFFFF");
            //Wenn Wolke aus dem Bild: Links wieder ins Bild kommen
            if (WolkeX[0] > 800) {
                WolkeX[0] = -50;
            }
            if (WolkeX[1] > 800) {
                WolkeX[1] = -50;
            }
        }
        //Animation Lift//
        for (let i = 0; i < LiftX.length; i++) {
            LiftX[i] += Math.random() * 5;
            LiftY[i] -= 0.22;
            drawLift(LiftX[i], LiftY[i]);
            if (LiftX[i] > 800) {
                LiftX[i] = 0;
                LiftY[i] = 150;
            }
        }
        //Animation Skifahrer//
        for (let i = 0; i < SkifahrerX.length; i++) {
            SkifahrerX[i] += Math.random() * 10 - 10;
            SkifahrerY[i] += Math.random() * 0 - 0;
            drawSkiingSnowman(SkifahrerX[i], SkifahrerY[i], 18, 0, 2, "#F2F2F2");
            if (SkifahrerX[i] < 0) {
                SkifahrerX[i] = 950;
            }
        }
        //Animation Schnee//
        for (let i = 0; i < SchneeflockenX.length; i++) {
            SchneeflockenY[i] += Math.random() * 2;
            drawSnowflake1(SchneeflockenX[i], SchneeflockenY[i], 2, 0, 2, "#FFFFFF");
            if (SchneeflockenY[i] > 450) {
                SchneeflockenY[i] = 0;
            }
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe3 || (Aufgabe3 = {})); //Ende des Namespaces
//# sourceMappingURL=Aufgabe3.js.map