//Aufgabe: Aufgabe 10
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 03.01.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Weihnachtsbaumkonfigurator {
    window.addEventListener("load", init);

    //Array aller Schmuckartikel
    let schmuckartikel: string[] = ["Lichterketten", "Weihnachtskugeln", "Zuckerstangen", "Schleifen", "Lametta"];
    let inputSchmuckartikel: HTMLInputElement[] = [];

    //Array aller Kerzenarten
    let kerzenart: string[] = ["LED-Kerzen", "Echte Kerzen"];
    let inputKerzenart: HTMLInputElement[] = [];

    //Array aller Halterungsarten
    let halterungen: string[] = ["Typ A", "Typ B", "Typ C"];
    let inputHalterungen: HTMLInputElement[] = [];

    //HTMLElemente kreieren
    let halterung: HTMLElement;
    let schmuck: HTMLElement;
    let kerzen: HTMLElement;
    let bestelluebersicht: HTMLElement;
    let bestellbutton: HTMLElement;


    function init(): void {
        schmuck = document.getElementById("schmuckartikel"); //Auf Schmuckartikel im HTML zugreifen
        schmuck.addEventListener("change", change);

        kerzen = document.getElementById("kerzenart");
        kerzen.addEventListener("change", change);

        halterung = document.getElementById("halterung");
        halterung.addEventListener("change", change);

        bestelluebersicht = document.getElementById("bestelluebersicht");
        bestellbutton = document.getElementById("bestellungAbschicken");
        bestellbutton.addEventListener("click", bestellungPruefen);

        createHalterung();
        createSchmuckartikel();
        createKerzenart();
    }



    function createSchmuckartikel(): void {
        for (let i: number = 0; i < schmuckartikel.length; i++) {
            createInput(schmuckartikel[i]);
        }
    }
    function createInput(_schmuck: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _schmuck;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.max = "100";
        input.value = "0";
        label.id = _schmuck;
        schmuck.appendChild(label);
        inputSchmuckartikel.push(input);
    }


    function createKerzenart(): void {
        for (let i: number = 0; i < kerzenart.length; i++) {
            createInput2(kerzenart[i]);
        }
    }
    function createInput2(_kerzen: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _kerzen;
        label.appendChild(input);
        input.type = "number"; //Art des Inputs
        input.min = "0";
        input.max = "100";
        input.value = "0";
        label.id = _kerzen;
        kerzen.appendChild(label);
        inputKerzenart.push(input);
    }


    function createHalterung(): void {
        for (let i: number = 0; i < halterungen.length; i++) {
            createRadio(halterungen[i]);
        }
    }
    function createRadio(_radiobutton: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _radiobutton;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "Radiobutton";
        label.id = _radiobutton;
        halterung.appendChild(label);
        inputHalterungen.push(input);
    }


    //Ausgew‰hlte Produkte inkl. Preis in der Bestell¸bersicht anzeigen
    function changeAuswahluebersicht(_summe: number): void {
        let BestellungUebersicht: HTMLElement = document.getElementById("auswahl");
        BestellungUebersicht.innerText = "";

        for (let i: number = 0; i < inputHalterungen.length; i++) {
            if (inputHalterungen[i].checked) {
                BestellungUebersicht.innerText += halterungen[i] + "\n";
            }
        }

        for (let i: number = 0; i < inputSchmuckartikel.length; i++) {
            if (parseInt(inputSchmuckartikel[i].value) > 0) {
                BestellungUebersicht.innerText += schmuckartikel[i] + " " + (parseInt(inputSchmuckartikel[i].value) * 1) + " Euro" + "\n";
            }
        }

        for (let i: number = 0; i < inputKerzenart.length; i++) {
            if (parseInt(inputKerzenart[i].value) > 0) {
                BestellungUebersicht.innerText += kerzenart[i] + " " + (parseInt(inputKerzenart[i].value) * 1) + " Euro" + "\n";
            }
        }

        //Summe im HTML
        let summeHtml: HTMLElement = document.getElementById("summe");
        summeHtml.innerText = _summe.toString() + " Euro";
    }


    function change(): void {
        let summe: number = 0;

        for (let i: number = 0; i < inputSchmuckartikel.length; i++) {
            summe += parseInt(inputSchmuckartikel[i].value);
        }

        for (let i: number = 0; i < inputKerzenart.length; i++) {
            summe += parseInt(inputKerzenart[i].value);
        }

        changeAuswahluebersicht(summe);
    }


    //Bestellung wird auf Vollst‰ndigkeit gepr¸ft
    function bestellungPruefen(): void {
        let pruefen: string[] = ["Folgende Eingaben fehlen: \n"];

        //Name
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        if (name.validity.valid == false) {
            pruefen.push("\nName \n");
        }

        //Vorname
        let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("vorname");
        if (vorname.validity.valid == false) {
            pruefen.push("Vorname \n")
        }

        //Straﬂe
        let strasse: HTMLInputElement = <HTMLInputElement>document.getElementById("strasse");
        if (strasse.validity.valid == false) {
            pruefen.push("Strasse \n");
        }

        //PLZ
        let PLZ: HTMLInputElement = <HTMLInputElement>document.getElementById("PLZ");
        if (PLZ.validity.valid == false) {
            pruefen.push("PLZ \n");
        }

        //Ort
        let ort: HTMLInputElement = <HTMLInputElement>document.getElementById("ort");
        if (ort.validity.valid == false) {
            pruefen.push("Ort \n");
        }

        //Halterungsart
        let halterungsArt: number = 0;
        for (let i: number = 0; i < inputHalterungen.length; i++) {
            if (inputHalterungen[i].checked)
                halterungsArt += 1;
        }
        if (halterungsArt == 0)
            pruefen.push("Halterungstyp");

        if (pruefen.length > 1) {
            for (let i: number = 0; i < pruefen.length; i++)
                pruefen.push
            alert(pruefen.join(""));
        }
        else {
            alert("Vielen Dank, Ihre Bestellung wird verarbeitet!");
        }
    }
}