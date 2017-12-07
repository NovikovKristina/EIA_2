//Aufgabe: Aufgabe 7
//Name: Kristina Novikov
//Matrikel: 254136
//Datum: 29.11.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.


namespace StudiVZ {
    interface StudentData {
        //Datenstruktur
        matrikel: number;
        lastname: string;
        firstname: string;
        age: number;
        gender: boolean;
        comment: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {  //solange stop = false, Codeblock ausf�hren
        var action: string = prompt("Datensatz anlegen (n), abfragen (a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {  //switch: Ausf�hren eines Codeblocks, abh�ngig von verschiedenen F�llen(cases)
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 -> w oder 1 -> m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {  //Die Funktion gibt einen String zur�ck
        let dataArray: string[] = _input.split(",");  //split: Teilt einen String in ein Array aus Substrings,
                                                      //welcher durch Kommas getrennt ist
                                                      //und gib das neue Array zur�ck
        let studentData: StudentData = {
            matrikel: parseInt(dataArray[0]),  //parseInt wandelt einen String in eine Number um
            lastname: dataArray[1],  //nimmt mit [1] das zweite Element aus dem Array
            firstname: dataArray[2], //mit [2] das dritte, ...
            age: parseInt(dataArray[3]),
            gender: parseInt(dataArray[4]) == 0,
            comment: dataArray[5]
        };

        if (Number.isNaN(studentData.matrikel)) {  //NaN = Not a Number, gibt einen Boolschen Wert aus (true/false)
            return "Die Matrikelnummer muss eine Zahl sein";
        }

        students.push(studentData);

        let gender: string;
        if (parseInt(dataArray[4]) == 0) {  //Bei Eingabe von 0 bei gender, wird 0 in String "weiblich" umgewandelt
            gender = "weiblich";
        }
        else {
            gender = "m�nnlich";  //Eingabe nicht null = String wird in "m�nnlich" umgewandelt
        }

        return "Deine Daten wurden erfolgreich gespeichert";
    }

    function queryData(_matrikel: number): string {  //Funktion gibt einen String zur�ck
        for (let i: number = 0; i < students.length; i++) {  //Pr�ft, ob eingegebene Matrikel mit einer bereits 
                                                             //eingespeicherten Matrikel �bereinstimmt
            if (students[i].matrikel == _matrikel) {  //Wenn �bereinstimmende Matrikel gefunden wurde...
                let gender: string = students[i].gender ? "weiblich" : "m�nnlich";  //?-Operator pr�ft ob 0(weiblich) oder 1(m�nnlich) eingegeben wurde
                return "Gefundene Daten zur Matrikelnummer: " + students[i].matrikel + "\n\nName: " + students[i].firstname + students[i].lastname + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }

            else {  //Wird eine noch nicht gespeicherte Matrikel eingegeben, kommt eine Fehlermeldung
                continue;  //Setzt For-Schleife fort 
            }
        }
        return "Die eingegebene Matrikelnummer wurde noch nicht registriert";
    }
}