//Aufgabe: Aufgabe 2
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 18.10.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Aufgabe2 {

    window.addEventListener("load", init);

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
        console.log(crc2);

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


        //Wolken//
        drawCloud(175, 65, 22, 0, 2, "#FFFFFF");
        drawCloud(735, 55, 22, 0, 2, "#FFFFFF");

        function drawCloud(_x: number, _y: number, _radius: number, _startAngle: number, _endAngle: number, _color: string): void {
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
            let x: number = 0 + Math.random() * 550;
            let y: number = 560 + Math.random() * 50;
            drawTree(x, y, "#088A29");
        }

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


        //Skilift//
        //Seil
        crc2.beginPath()
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
        crc2.stroke()
        crc2.fillStyle = "#FA5858";
        crc2.fill()
        crc2.closePath();
        //Fenster
        crc2.beginPath();
        crc2.rect(530, 170, 15, 15);
        crc2.rect(558, 170, 15, 15);
        crc2.rect(585, 170, 15, 15);
        crc2.strokeStyle = "#CEF6F5";
        crc2.stroke()
        crc2.fillStyle = "#CEF6F5";
        crc2.fill()
        crc2.closePath();
        //Halterung
        crc2.beginPath()
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


        //Schneeflocken//       
        drawSnowflake1(20, 20, 2, 0, 2, "#FFFFFF"); //größerer Radius
        drawSnowflake2(40, 40, 1, 0, 2, "#FFFFFF"); //kleinerer Radius

        //100 größere Flocken zufällig platzieren
        for (let i: number = 0; i < 100; i++) {
            let x: number = 0 + Math.random() * canvas.width;
            let y: number = 0 + Math.random() * 450;
            let radius: number = 2;
            let startAngle: number = 0;
            let endAngle: number = 2;
            drawSnowflake1(x, y, radius, startAngle, endAngle, "#FFFFFF");
        }

        //200 kleinere Flocken zufällig platzieren
        for (let i: number = 0; i < 200; i++) {
            let x: number = 0 + Math.random() * canvas.width;
            let y: number = 0 + Math.random() * 450;
            let radius: number = 1;
            let startAngle: number = 0;
            let endAngle: number = 2;
            drawSnowflake2(x, y, radius, startAngle, endAngle, "#FFFFFF");
        }

        function drawSnowflake1(_x: number, _y: number, _radius: number, _startAngle: number, _endAngle: number, _color: string): void {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            crc2.strokeStyle = _color;
            crc2.stroke();
            crc2.fillStyle = _color;
            crc2.fill();
        }

        function drawSnowflake2(_x: number, _y: number, _radius: number, _startAngle: number, _endAngle: number, _color: string): void {
            crc2.beginPath();
            crc2.arc(_x, _y, _radius, _startAngle, _endAngle * Math.PI);
            crc2.strokeStyle = _color;
            crc2.stroke();
            crc2.fillStyle = _color;
            crc2.fill();
        }
    }
}