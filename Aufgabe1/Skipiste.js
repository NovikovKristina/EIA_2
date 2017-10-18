//Aufgabe: Aufgabe 1
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 13.10.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe1;
(function (Aufgabe1) {
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        let crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        drawSky(0, 0, "#CEF6F5", "#CEF6F5");
        function drawSky(_x, _y, _strokeStyle, _fillStyle) {
            crc2.beginPath();
            crc2.rect(0, 0, 800, 600);
            crc2.strokeStyle = "#CEF6F5";
            crc2.fillStyle = "#CEF6F5";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
        //Sonne
        drawSun(0, 0, "#F7FE2E", "#F7FE2E");
        function drawSun(_x, _y, _strokeStyle, _fillStyle) {
            crc2.beginPath();
            crc2.arc(50, 50, 35, 0, 2 * Math.PI);
            crc2.strokeStyle = "#F7FE2E";
            crc2.fillStyle = "#F7FE2E";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
        //Wolken
        drawCloud1(0, 0, "#FFFFFF", "#FFFFFF");
        function drawCloud1(_x, _y, _strokeStyle, _fillStyle) {
            //Kreis links
            crc2.beginPath();
            crc2.arc(175, 65, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis oben
            crc2.beginPath();
            crc2.arc(200, 50, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis unten links
            crc2.beginPath();
            crc2.arc(190, 85, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis unten rechts
            crc2.beginPath();
            crc2.arc(220, 85, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis rechts
            crc2.beginPath();
            crc2.arc(230, 60, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
        drawCloud2(0, 0, "#FFFFFF", "#FFFFFF");
        function drawCloud2(_x, _y, _strokeStyle, _fillStyle) {
            //Kreis links
            crc2.beginPath();
            crc2.arc(735, 55, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis oben
            crc2.beginPath();
            crc2.arc(760, 40, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis unten links
            crc2.beginPath();
            crc2.arc(750, 75, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis unten rechts
            crc2.beginPath();
            crc2.arc(780, 75, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kreis rechts
            crc2.beginPath();
            crc2.arc(785, 50, 22, 0, 2 * Math.PI);
            crc2.strokeStyle = "#FFFFFF";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
        }
        //Berge
        drawMountain2(0, 0, "#D8D8D8", "#E6E6E6");
        function drawMountain2(_x, _y, _strokeStyle, _fillSytle) {
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
        }
        drawMountain3(0, 0, "#D8D8D8", "#D8D8D8");
        function drawMountain3(_x, _y, _strokeStyle, _fillSytle) {
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
        }
        drawMountain1(0, 0, "#D8D8D8", "#BDBDBD");
        function drawMountain1(_x, _y, _strokeStyle, _fillSytle) {
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
        }
        //H�tte
        drawHut(0, 0, "#29220A", "#61380B");
        function drawHut(_x, _y, _strokeStyle, _fillStyle) {
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
        }
        //H�gel
        drawHill1(0, 0, 0, 0, 0, 0, "#BDBDBD", "#FFFFFF");
        function drawHill1(_cp1x, _cp1y, _cp2x, _cp2y, _x, _y, _strokeStyle, _fillStyle) {
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
        }
        drawHill2(0, 0, 0, 0, 0, 0, "#BDBDBD", "#FFFFFF");
        function drawHill2(_cp1x, _cp1y, _cp2x, _cp2y, _x, _y, _strokeStyle, _fillStyle) {
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
        }
        drawHill3(0, 0, "#BDBDBD", "#FFFFFF");
        function drawHill3(_x, _y, strokeStyle, _fillStyle) {
            crc2.beginPath();
            crc2.rect(0, 500, 800, 100);
            crc2.strokeStyle = "#BDBDBD";
            crc2.stroke();
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            crc2.closePath();
        }
        //Tannen
        drawTree1(0, 0, "#088A29", "#088A29");
        function drawTree1(_x, _y, _strokeStyle, _fillStyle) {
            crc2.beginPath();
            crc2.moveTo(40, 396);
            crc2.lineTo(55, 370);
            crc2.lineTo(70, 395);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(42, 382);
            crc2.lineTo(55, 360);
            crc2.lineTo(68, 382);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
        }
        drawTree2(0, 0, "#088A29", "#088A29");
        function drawTree2(_x, _y, _strokeStyle, _fillStyle) {
            crc2.beginPath();
            crc2.moveTo(80, 395);
            crc2.lineTo(95, 370);
            crc2.lineTo(110, 396);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(82, 382);
            crc2.lineTo(95, 362);
            crc2.lineTo(108, 382);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
        }
        drawTree3(0, 0, "#088A29", "#088A29");
        function drawTree3(_x, _y, _strokeStyle, _fillStyle) {
            crc2.beginPath();
            crc2.moveTo(640, 379);
            crc2.lineTo(655, 360);
            crc2.lineTo(670, 382);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(642, 366);
            crc2.lineTo(655, 350);
            crc2.lineTo(668, 367);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
        }
        drawTree4(0, 0, "#088A29", "#088A29");
        function drawTree4(_x, _y, _strokeStyle, _fillStyle) {
            crc2.beginPath();
            crc2.moveTo(320, 600);
            crc2.lineTo(340, 570);
            crc2.lineTo(360, 600);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(322, 578);
            crc2.lineTo(340, 555);
            crc2.lineTo(358, 578);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
        }
        drawTree5(0, 0, "#088A29", "#088A29");
        function drawTree5(_x, _y, _strokeStyle, _fillStyle) {
            crc2.beginPath();
            crc2.moveTo(370, 600);
            crc2.lineTo(395, 560);
            crc2.lineTo(420, 600);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(372, 575);
            crc2.lineTo(395, 542);
            crc2.lineTo(418, 575);
            crc2.strokeStyle = "#088A29";
            crc2.stroke();
            crc2.fillStyle = "#088A29";
            crc2.fill();
            crc2.closePath();
        }
        //Skilift
        drawLift(0, 0, "#000000", "#000000");
        function drawLift(_x, _y, strokeStyle, fillStyle) {
            //Seil
            crc2.beginPath();
            crc2.moveTo(0, 150);
            crc2.lineTo(800, 80);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
            //Wagon
            crc2.beginPath();
            crc2.moveTo(520, 220);
            crc2.lineTo(610, 220);
            crc2.lineTo(610, 160);
            crc2.lineTo(520, 160);
            crc2.strokeStyle = "#610B0B";
            crc2.stroke();
            crc2.fillStyle = "#FA5858";
            crc2.fill();
            crc2.closePath();
            //Fenster
            crc2.beginPath();
            crc2.rect(530, 170, 15, 15);
            crc2.rect(558, 170, 15, 15);
            crc2.rect(585, 170, 15, 15);
            crc2.strokeStyle = "#CEF6F5";
            crc2.stroke();
            crc2.fillStyle = "#CEF6F5";
            crc2.fill();
            crc2.closePath();
            //Halterung
            crc2.beginPath();
            crc2.moveTo(565, 160);
            crc2.lineTo(565, 100);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(520, 105);
            crc2.lineTo(610, 97);
            crc2.moveTo(520, 104);
            crc2.lineTo(610, 96);
            crc2.moveTo(520, 103);
            crc2.lineTo(610, 95);
            crc2.moveTo(520, 106);
            crc2.lineTo(610, 98);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
        }
        //Schneemann
        drawSnowman(0, 0, "#FFFFFF", "#FFFFFF");
        function drawSnowman(_x, _y, _strokeStyle, _fillStyle) {
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
        }
        //Skier
        drawSki(0, 0, "#0431B4", "#0431B4");
        function drawSki(_x, _y, _strokeStyle, _fillStyle) {
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
        }
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//# sourceMappingURL=Skipiste.js.map