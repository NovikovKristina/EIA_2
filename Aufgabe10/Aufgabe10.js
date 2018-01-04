//Aufgabe: Aufgabe 10
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 03.01.2018
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var Weihnachtsbaumkonfigurator;
(function (Weihnachtsbaumkonfigurator) {
    window.addEventListener("load", init);
    //Array aller Schmuckartikel
    let schmuckartikel = ["Lichterketten", "Weihnachtskugeln", "Zuckerstangen", "Schleifen", "Lametta"];
    let inputSchmuckartikel = [];
    //Array aller Kerzenarten
    let kerzenart = ["LED-Kerzen", "Echte Kerzen"];
    let inputKerzenart = [];
    //Array aller Halterungsarten
    let halterungen = ["Typ A", "Typ B", "Typ C"];
    let inputHalterungen = [];
    //HTMLElemente kreieren
    let halterung;
    let schmuck;
    let kerzen;
    let bestelluebersicht;
    let bestellbutton;
    function init() {
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
    function createSchmuckartikel() {
        for (let i = 0; i < schmuckartikel.length; i++) {
            createInput(schmuckartikel[i]);
        }
    }
    function createInput(_schmuck) {
        let label = document.createElement("label");
        let input = document.createElement("input");
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
    function createKerzenart() {
        for (let i = 0; i < kerzenart.length; i++) {
            createInput2(kerzenart[i]);
        }
    }
    function createInput2(_kerzen) {
        let label = document.createElement("label");
        let input = document.createElement("input");
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
    function createHalterung() {
        for (let i = 0; i < halterungen.length; i++) {
            createRadio(halterungen[i]);
        }
    }
    function createRadio(_radiobutton) {
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _radiobutton;
        label.appendChild(input);
        input.type = "radio"; //Art des Inputs
        input.name = "Radiobutton";
        label.id = _radiobutton;
        halterung.appendChild(label);
        inputHalterungen.push(input);
    }
    //Ausgew�hlte Produkte inkl. Preis in der Bestell�bersicht anzeigen
    function changeAuswahluebersicht(_summe) {
        let BestellungUebersicht = document.getElementById("auswahl");
        BestellungUebersicht.innerText = "";
        for (let i = 0; i < inputHalterungen.length; i++) {
            if (inputHalterungen[i].checked) {
                BestellungUebersicht.innerText += halterungen[i] + "\n";
            }
        }
        for (let i = 0; i < inputSchmuckartikel.length; i++) {
            if (parseInt(inputSchmuckartikel[i].value) > 0) {
                BestellungUebersicht.innerText += schmuckartikel[i] + " " + (parseInt(inputSchmuckartikel[i].value) * 1) + " Euro" + "\n";
            }
        }
        for (let i = 0; i < inputKerzenart.length; i++) {
            if (parseInt(inputKerzenart[i].value) > 0) {
                BestellungUebersicht.innerText += kerzenart[i] + " " + (parseInt(inputKerzenart[i].value) * 1) + " Euro" + "\n";
            }
        }
        //Summe im HTML
        let summeHtml = document.getElementById("summe");
        summeHtml.innerText = _summe.toString() + " Euro";
    }
    function change() {
        let summe = 0;
        for (let i = 0; i < inputSchmuckartikel.length; i++) {
            summe += parseInt(inputSchmuckartikel[i].value);
        }
        for (let i = 0; i < inputKerzenart.length; i++) {
            summe += parseInt(inputKerzenart[i].value);
        }
        changeAuswahluebersicht(summe);
    }
    //Bestellung wird auf Vollst�ndigkeit gepr�ft
    function bestellungPruefen() {
        let pruefen = ["Folgende Eingaben fehlen: \n"];
        //Name
        let name = document.getElementById("name");
        if (name.validity.valid == false) {
            pruefen.push("\nName \n");
        }
        //Vorname
        let vorname = document.getElementById("vorname");
        if (vorname.validity.valid == false) {
            pruefen.push("Vorname \n");
        }
        //Stra�e
        let strasse = document.getElementById("strasse");
        if (strasse.validity.valid == false) {
            pruefen.push("Strasse \n");
        }
        //PLZ
        let PLZ = document.getElementById("PLZ");
        if (PLZ.validity.valid == false) {
            pruefen.push("PLZ \n");
        }
        //Ort
        let ort = document.getElementById("ort");
        if (ort.validity.valid == false) {
            pruefen.push("Ort \n");
        }
        //Halterungsart
        let halterungsArt = 0;
        for (let i = 0; i < inputHalterungen.length; i++) {
            if (inputHalterungen[i].checked)
                halterungsArt += 1;
        }
        if (halterungsArt == 0)
            pruefen.push("Halterungstyp");
        if (pruefen.length > 1) {
            for (let i = 0; i < pruefen.length; i++)
                pruefen.push;
            alert(pruefen.join(""));
        }
        else {
            alert("Vielen Dank, Ihre Bestellung wird verarbeitet!");
        }
    }
})(Weihnachtsbaumkonfigurator || (Weihnachtsbaumkonfigurator = {}));
//# sourceMappingURL=Aufgabe10.js.map