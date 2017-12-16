//Aufgabe: Aufgabe 9
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 15.12.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Erpresserbrief;
(function (Erpresserbrief) {
    window.addEventListener("load", init);
    document.addEventListener("keydown", removeLetter);
    let alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
    console.log(alphabet);
    let rememberLetter = "";
    let clickedLetter;
    let place = document.createElement("div");
    function init(_event) {
        for (let i = 0; i < alphabet.length; i++) {
            let letter = document.createElement("div");
            document.body.appendChild(letter);
            letter.style.width = "2%";
            letter.style.height = "5.5%";
            letter.style.backgroundColor = "lightblue";
            letter.style.margin = "0.5%";
            letter.style.paddingTop = "0.6%";
            letter.style.textAlign = "center";
            letter.style.fontFamily = "sans-serif";
            letter.style.fontWeight = "bold";
            letter.style.display = "inline-block";
            letter.innerText = alphabet[i];
            letter.id = alphabet[i];
            letter.className = "letter";
            letter.addEventListener("click", pickLetter);
        }
        let paper = document.createElement("div");
        document.body.appendChild(paper);
        paper.style.width = "68.5%";
        paper.style.height = "80%";
        paper.style.backgroundImage = "url('paper.jpg')";
        paper.style.marginLeft = "5%";
        paper.style.paddingTop = "8px";
        paper.addEventListener("click", placeLetter);
    }
    function pickLetter(_event) {
        console.log(_event.target);
        let pick = _event.target;
        pick.style.color = "white";
        rememberLetter = pick.innerText;
        clickedLetter = pick.id;
        let divList = document.getElementsByClassName("letter");
        for (let i = 0; i < divList.length; i++) {
            if (clickedLetter != divList[i].id) {
                divList[i].style.color = "black";
            }
        }
    }
    function placeLetter(_event) {
        //        let place: HTMLDivElement = document.createElement("div");
        document.body.appendChild(place);
        place.innerText = rememberLetter;
        place.style.fontFamily = "sans-serif";
        place.style.fontWeight = "bold";
        place.style.fontSize = "18px";
        place.style.position = "fixed";
        place.style.left = -10 + _event.pageX + "px";
        place.style.top = -10 + _event.pageY + "px";
    }
    //Funktioniert noch nicht ganz
    //Buchstabe wird gel�scht wenn man Alt dr�ckt
    //Aber zuvor platzierter Buchstabe verschwindet wenn ein neuer platziert wird
    function removeLetter(_event) {
        let altKey;
        if (_event.altKey == true) {
            document.body.removeChild(place);
        }
    }
})(Erpresserbrief || (Erpresserbrief = {}));
//# sourceMappingURL=Aufgabe9.js.map