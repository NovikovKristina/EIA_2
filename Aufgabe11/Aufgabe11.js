//Aufgabe: Aufgabe 11
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 22.01.2018
//Der Code wurde in Zusammenarbeit mit Bersu Inanir erstellt
var Weihnachtsbaumkonfigurator;
(function (Weihnachtsbaumkonfigurator) {
    window.addEventListener("load", init);
    //Auswahl gespeichert in Arrays
    let baumart = ["Kunstbaum", "Nordmanntanne", "Fichte", "Kiefer"];
    let halterung = ["Typ A", "Typ B", "Typ C"];
    let schmuckartikel = ["Lichterketten", "Weihnachtskugeln", "Zuckerstangen", "Schleifen", "Lametta"];
    let kerzentyp = ["LED-Kerzen", "Echte Kerzen"];
    //Arrays f�r die Inputs
    let baumartInput = [];
    let halterungInput = [];
    let schmuckInput = [];
    let kerzentypInput = [];
    //HTMLElemente f�r die Inputs
    let Baumart;
    let Halterung;
    let Schmuckartikel;
    let Kerzentyp;
    let Bestellung;
    let Button;
    function init() {
        Baumart = document.getElementById("Baumart");
        Halterung = document.getElementById("Halterung");
        Schmuckartikel = document.getElementById("Schmuckartikel");
        Kerzentyp = document.getElementById("Kerzentyp");
        Bestellung = document.getElementById("Bestellung");
        Button = document.getElementById("Button");
        //Aufruf der Funktion zur Erstellung der verschiedenen Inputs
        createInputs();
        Bestellung.addEventListener("change", change);
        Baumart.addEventListener("change", change);
        Halterung.addEventListener("change", change);
        Schmuckartikel.addEventListener("change", change);
        Kerzentyp.addEventListener("change", change);
        Button.addEventListener("click", DatenPruefen);
    }
    //Erstellen von Inputs f�r Baumart(Halterung (Radiobutton) und Schmuck/Kerzen (Stepper)   
    function createInputs() {
        for (let i = 0; i < baumart.length; i++) {
            createRadio(baumart[i]);
        }
        for (let i = 0; i < halterung.length; i++) {
            createRadio2(halterung[i]);
        }
        for (let i = 0; i < schmuckartikel.length; i++) {
            createStepper(schmuckartikel[i]);
        }
        for (let i = 0; i < kerzentyp.length; i++) {
            createStepper2(kerzentyp[i]);
        }
    }
    //Funktionen um jeweilige Inputs (Stepper, Radiobuttons) zu erstellen    
    function createStepper(_schmuck) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.innerText = _schmuck;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        input.name = _schmuck;
        Schmuckartikel.appendChild(label);
        schmuckInput.push(input);
    }
    function createStepper2(_kerzen) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.innerText = _kerzen;
        label.appendChild(input);
        input.type = "number";
        input.min = "0";
        input.value = "0";
        input.name = _kerzen;
        Kerzentyp.appendChild(label);
        kerzentypInput.push(input);
    }
    function createRadio(_baum) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.innerText = _baum;
        //        console.log(_baum);
        label.appendChild(input);
        input.type = "radio";
        input.required = true;
        input.name = "baum";
        input.value = _baum;
        //        console.log(input);
        Baumart.appendChild(label);
        console.log(Baumart);
        baumartInput.push(input);
    }
    function createRadio2(_behaelter) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.innerText = _behaelter;
        //        console.log(label);
        label.appendChild(input);
        input.type = "radio";
        input.required = true;
        input.name = "behaelter";
        input.value = _behaelter;
        Halterung.appendChild(label);
        halterungInput.push(input);
    }
    //Ver�nderung der Auswahl   
    function change() {
        let summe = 0;
        for (let i = 0; i < baumartInput.length; i++) {
            if (baumartInput[i].checked) {
                summe += 50;
            }
        }
        for (let i = 0; i < halterungInput.length; i++) {
            if (halterungInput[i].checked) {
                summe += 5;
            }
        }
        for (let i = 0; i < schmuckInput.length; i++) {
            summe += parseInt(schmuckInput[i].value);
        }
        for (let i = 0; i < kerzentypInput.length; i++) {
            summe += parseInt(kerzentypInput[i].value);
        }
        BestellungAnzeigen(summe);
    }
    //Bestell�bersicht
    function BestellungAnzeigen(_summe) {
        document.getElementById("Baumartwahl").innerText = "";
        document.getElementById("Halterungswahl").innerText = "";
        document.getElementById("Schmuckartikelwahl").innerText = "";
        document.getElementById("Kerzentypwahl").innerText = "";
        for (let i = 0; i < baumartInput.length; i++) {
            if (baumartInput[i].checked) {
                document.getElementById("Baumartwahl").innerText += baumart[i] + " : 50 Euro" + "\n";
            }
        }
        for (let i = 0; i < halterungInput.length; i++) {
            if (halterungInput[i].checked) {
                document.getElementById("Halterungswahl").innerText += halterung[i] + " : 5 Euro" + "\n";
            }
        }
        for (let i = 0; i < schmuckInput.length; i++) {
            if (parseInt(schmuckInput[i].value) > 0) {
                document.getElementById("Schmuckartikelwahl").innerText += schmuckartikel[i] + " " + ": " + (parseInt(schmuckInput[i].value) * 1) + "x 1 Euro" + "\n";
            }
        }
        for (let i = 0; i < kerzentypInput.length; i++) {
            if (parseInt(kerzentypInput[i].value) > 0) {
                document.getElementById("Kerzentypwahl").innerText += kerzentyp[i] + " " + ": " + (parseInt(kerzentypInput[i].value) * 1) + "x 1 Euro" + "\n";
            }
        }
        //Anzeigen der Gesamtsumme
        document.getElementById("Summe").innerText = _summe.toString() + " Euro";
    }
    //Bei Klick auf den Button werden die eingegeben Daten �berpr�ft und Feebdack gegeben   
    function DatenPruefen() {
        let nachname = document.getElementById("Nachname");
        let vorname = document.getElementById("Vorname");
        let strasse = document.getElementById("Strasse");
        let plz = document.getElementById("PLZ");
        let ort = document.getElementById("Ort");
        if (nachname.checkValidity() == false || vorname.checkValidity() == false || strasse.checkValidity() == false || plz.checkValidity() == false || ort.checkValidity() == false) {
            alert("Ihre Eingaben sind nicht vollstaendig oder nicht korrekt");
        }
        else {
            alert("Vielen Dank, Ihre Bestellung wird nun verarbeitet");
        }
    }
})(Weihnachtsbaumkonfigurator || (Weihnachtsbaumkonfigurator = {}));
//# sourceMappingURL=Aufgabe11.js.map