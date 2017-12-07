//Aufgabe: Aufgabe 7
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 29.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen (a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 -> w oder 1 -> m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let dataArray = _input.split(","); //split: Teilt einen String in ein Array aus Substrings,
        //welcher durch Kommas getrennt ist
        //und gib das neue Array zur�ck
        let studentData = {
            matrikel: parseInt(dataArray[0]),
            lastname: dataArray[1],
            firstname: dataArray[2],
            age: parseInt(dataArray[3]),
            gender: parseInt(dataArray[4]) == 0,
            comment: dataArray[5]
        };
        if (Number.isNaN(studentData.matrikel)) {
            return "Die Matrikelnummer muss eine Zahl sein";
        }
        students.push(studentData);
        let gender;
        if (parseInt(dataArray[4]) == 0) {
            gender = "weiblich";
        }
        else {
            gender = "m�nnlich"; //Eingabe nicht null = String wird in "m�nnlich" umgewandelt
        }
        return "Deine Daten wurden erfolgreich gespeichert";
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            //eingespeicherten Matrikel �bereinstimmt
            if (students[i].matrikel == _matrikel) {
                let gender = students[i].gender ? "weiblich" : "m�nnlich"; //?-Operator pr�ft ob 0(weiblich) oder 1(m�nnlich) eingegeben wurde
                return "Gefundene Daten zur Matrikelnummer: " + students[i].matrikel + "\n\nName: " + students[i].firstname + students[i].lastname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }
            else {
                continue; //Setzt For-Schleife fort 
            }
        }
        return "Die eingegebene Matrikelnummer wurde noch nicht registriert";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe7.js.map