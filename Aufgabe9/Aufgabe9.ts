//Aufgabe: Aufgabe 9
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 15.12.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Erpresserbrief {

    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);

    let alphabet: string[] = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
    console.log(alphabet);      
    let rememberLetter: string = "";    
    let clickedLetter: string;    
    
    
    function init(_event: Event): void {       
        for (let i: number = 0; i < alphabet.length; i++) {
            let letter: HTMLDivElement = document.createElement("div");

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
            letter.id = alphabet[i].toLowerCase();            
            letter.id = alphabet[i];
            letter.className = "letter";

            letter.addEventListener("mousedown", pickLetter);
            document.body.appendChild(letter);
        }
                   
        let paper: HTMLDivElement = document.createElement("div");
        paper.style.width = "68.5%";
        paper.style.height = "80%";
        paper.style.backgroundImage = "url('paper.jpg')";
        paper.style.marginLeft = "5%";
        paper.style.paddingTop = "8px";

        paper.addEventListener("mousedown", placeLetter);      
        document.body.appendChild(paper);
    }


    function pickLetter(_event: MouseEvent): void {
            let pick: HTMLElement = <HTMLElement>_event.target;

            pick.style.color = "white";
            rememberLetter = pick.innerText;              
            clickedLetter = pick.id;
            rememberLetter = pick.id.toUpperCase();
        
            let divList: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letter");        
            for (let i: number = 0; i < divList.length; i++ ) {
                if (clickedLetter != divList[i].id) {
                divList[i].style.color = "black";
                }
            }
    }
    

    function placeLetter(_event: MouseEvent): void {
        let place: HTMLDivElement = document.createElement("div");

        if (rememberLetter == "")
        return;
        
        place.innerText = rememberLetter;
        place.style.fontFamily = "sans-serif";
        place.style.fontWeight = "bold";
        place.style.fontSize = "18px";
        place.style.position = "fixed";
        place.style.left = 0 + _event.pageX + "px";
        place.style.top = 0 + _event.pageY + "px";
        
        place.addEventListener("mousedown", handleMousedown);        
        document.body.appendChild(place);        
    }
    
    
    function handleKeydown(_event: KeyboardEvent): void {
        if (alphabet.indexOf(_event.key.toUpperCase()) != -1) {
            let remove: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);
            rememberLetter = _event.key.toUpperCase();
        }
    }
    

    function handleMousedown(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        else {
            let remove: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(remove);
        }
    }
    
}