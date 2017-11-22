//Aufgabe: Aufgabe 6
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    //Array f�r sich bewegende Objekte
    let object = [];
    let image;
    window.addEventListener("load", init);
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        canvas.width = 800;
        canvas.height = 600;
        console.log(canvas);
        Aufgabe6.crc2 = canvas.getContext("2d");
        console.log(Aufgabe6.crc2);
        console.log("setTimeout");
        //Schleife Skifahrer
        for (let i = 0; i < 3; i++) {
            let s = new Aufgabe6.Skifahrer(Math.random() * canvas.width + 400, 490);
            object.push(s);
        }
        //Schleife Wolken
        for (let i = 0; i < 2; i++) {
            let s = new Aufgabe6.Wolken(Math.random() * 800, Math.random() * 65 + 45);
            object.push(s);
        }
        //Schleife Schneeflocken       
        for (let i = 0; i < 80; i++) {
            let s = new Aufgabe6.Schneeflocken(0 + Math.random() * canvas.width, 0 + Math.random() * 450);
            object.push(s);
        }
        //Schleife Lift
        for (let i = 0; i < 1; i++) {
            let s = new Aufgabe6.Lift(0, 150);
            object.push(s);
        }
        //Himmel//
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.rect(0, 0, 800, 600);
        Aufgabe6.crc2.strokeStyle = "#CEF6F5";
        Aufgabe6.crc2.fillStyle = "#CEF6F5";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Sonne//
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(50, 50, 35, 0, 2 * Math.PI);
        Aufgabe6.crc2.strokeStyle = "#F7FE2E";
        Aufgabe6.crc2.fillStyle = "#F7FE2E";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Berge//
        //Berg 1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(100, 400);
        Aufgabe6.crc2.lineTo(320, 200);
        Aufgabe6.crc2.lineTo(550, 400);
        Aufgabe6.crc2.strokeStyle = "#D8D8D8";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#E6E6E6";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Schneespitze
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(276, 240);
        Aufgabe6.crc2.lineTo(320, 200);
        Aufgabe6.crc2.lineTo(355, 230);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Berg 2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(180, 450);
        Aufgabe6.crc2.lineTo(500, 150);
        Aufgabe6.crc2.lineTo(680, 450);
        Aufgabe6.crc2.strokeStyle = "#D8D8D8";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#D8D8D8";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Schneespitze
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(446, 200);
        Aufgabe6.crc2.lineTo(500, 150);
        Aufgabe6.crc2.lineTo(555, 240);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Berg 3
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(10, 450);
        Aufgabe6.crc2.lineTo(230, 200);
        Aufgabe6.crc2.lineTo(451, 450);
        Aufgabe6.crc2.strokeStyle = "#D8D8D8";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#BDBDBD";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Schneespitze
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(186, 250);
        Aufgabe6.crc2.lineTo(230, 200);
        Aufgabe6.crc2.lineTo(309, 290);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //H�tte//
        //Vorne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(740, 410);
        Aufgabe6.crc2.lineTo(770, 410);
        Aufgabe6.crc2.lineTo(770, 390);
        Aufgabe6.crc2.lineTo(755, 360);
        Aufgabe6.crc2.lineTo(740, 390);
        Aufgabe6.crc2.strokeStyle = "#29220A";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#61380B";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Seitlich
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.rect(770, 385, 800, 35);
        Aufgabe6.crc2.strokeStyle = "#29220A";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#61380B";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Dach
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(740, 390);
        Aufgabe6.crc2.lineTo(755, 360);
        Aufgabe6.crc2.lineTo(770, 390);
        Aufgabe6.crc2.lineTo(800, 390);
        Aufgabe6.crc2.lineTo(800, 360);
        Aufgabe6.crc2.lineTo(755, 360);
        Aufgabe6.crc2.lineTo(740, 390);
        Aufgabe6.crc2.strokeStyle = "#29220A";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#29220A";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //H�gel//
        //H�gel 1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 400);
        Aufgabe6.crc2.bezierCurveTo(150, 380, 200, 420, 300, 450);
        Aufgabe6.crc2.strokeStyle = "#BDBDBD";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Viereck zum Schlie�en der L�cke
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 400);
        Aufgabe6.crc2.lineTo(300, 450);
        Aufgabe6.crc2.lineTo(120, 540);
        Aufgabe6.crc2.lineTo(0, 550);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        // H�gel 2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(120, 540);
        Aufgabe6.crc2.bezierCurveTo(450, 350, 650, 350, 800, 420);
        Aufgabe6.crc2.strokeStyle = "#BDBDBD";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Dreieck zum Schlie�en der L�cke
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(300, 500);
        Aufgabe6.crc2.lineTo(800, 420);
        Aufgabe6.crc2.lineTo(800, 550);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //H�gel 3
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.rect(0, 500, 800, 100);
        Aufgabe6.crc2.strokeStyle = "#BDBDBD";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FFFFFF";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
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
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(740, 600, 22, 0, 2 * Math.PI);
        Aufgabe6.crc2.arc(740, 580, 19, 0, 2 * Math.PI);
        Aufgabe6.crc2.arc(740, 560, 15, 0, 2 * Math.PI);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.fillStyle = "#F2F2F2";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Augen
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(735, 553, 1.5, 0, 2 * Math.PI);
        Aufgabe6.crc2.arc(745, 553, 1.5, 0, 2 * Math.PI);
        Aufgabe6.crc2.strokeStyle = "#FFFFFF";
        Aufgabe6.crc2.fillStyle = "#000000";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Nase
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(740, 556);
        Aufgabe6.crc2.lineTo(750, 558);
        Aufgabe6.crc2.lineTo(740, 560);
        Aufgabe6.crc2.strokeStyle = "#FF8000";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#FF8000";
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Kn�pfe
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(740, 575, 1.5, 0, 2 * Math.PI);
        Aufgabe6.crc2.arc(740, 587, 1.5, 0, 2 * Math.PI);
        Aufgabe6.crc2.arc(740, 599, 1.5, 0, 2 * Math.PI);
        Aufgabe6.crc2.strokeStyle = "#F2F2F2";
        Aufgabe6.crc2.fillStyle = "#000000";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Skier//
        //Erster Skier
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(700, 600);
        Aufgabe6.crc2.lineTo(697, 550);
        Aufgabe6.crc2.lineTo(698, 547);
        Aufgabe6.crc2.lineTo(698, 547);
        Aufgabe6.crc2.lineTo(696, 547);
        Aufgabe6.crc2.lineTo(694, 550);
        Aufgabe6.crc2.lineTo(697, 600);
        Aufgabe6.crc2.strokeStyle = "#0431B4";
        Aufgabe6.crc2.fillStyle = "#0431B4";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Zweiter Skier
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(690, 600);
        Aufgabe6.crc2.lineTo(702, 550);
        Aufgabe6.crc2.lineTo(704, 547);
        Aufgabe6.crc2.lineTo(704, 547);
        Aufgabe6.crc2.lineTo(702, 547);
        Aufgabe6.crc2.lineTo(700, 550);
        Aufgabe6.crc2.lineTo(687, 600);
        Aufgabe6.crc2.strokeStyle = "#0431B4";
        Aufgabe6.crc2.fillStyle = "#0431B4";
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Hintergrund speichern
        image = Aufgabe6.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    } //Ende der Init-Funktion
    //Tannen Funktion//
    function drawTree(_x, _y, _color) {
        //Oberer Teil
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x, _y);
        Aufgabe6.crc2.lineTo(_x + 15, _y - 26);
        Aufgabe6.crc2.lineTo(_x + 30, _y);
        Aufgabe6.crc2.strokeStyle = _color;
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = _color;
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
        //Unterer Teil
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x + 2, _y - 14);
        Aufgabe6.crc2.lineTo(_x + 15, _y - 36);
        Aufgabe6.crc2.lineTo(_x + 28, _y - 14);
        Aufgabe6.crc2.strokeStyle = _color;
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = _color;
        Aufgabe6.crc2.fill();
        Aufgabe6.crc2.closePath();
    }
    // Animation //
    function animate() {
        console.log("Timeout");
        Aufgabe6.crc2.clearRect(0, 0, 800, 600);
        Aufgabe6.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < object.length; i++) {
            let s = object[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    } //Ende animate Funktion
})(Aufgabe6 || (Aufgabe6 = {})); //Ende des Namespaces
//# sourceMappingURL=Aufgabe6.js.map