"use strict";

var makePerson = function (persArr) {

   
    var evert = { minAge: 0, maxAge:0, averageAge:0, names:"" }
    var theArray = [];
    var names1 = [];
    //loopa igenom arrayen, skilj ut nummer och strängar
    for (var index = 0; index < persArr.length; index++) {
        
        //ett objekt
        var pers = persArr[index];
        var alder = pers.age;
        var namn = pers.name;

        // lägger till namn i array       
        names1.push(namn);
       theArray.push(alder);   
    }
    
    names1.sort(localeSort);
    var names = names1.join(", ");

    theArray.sort(compare);

    //Plockar ut första och sista posten ur sorterad array
    var minAge = theArray[0];
    var maxAge = theArray[theArray.length - 1];

    //Medelvärde
    var box = 0;
    for (var i = 0; i < theArray.length; i++) {
    var finnsIPaket = theArray[i];
    box += finnsIPaket;
    }

    var averageAge1 = box / theArray.length;
    var averageAge = Math.round(averageAge1);
   
    //Tilldela objekt värde
    evert.minAge = minAge;
    evert.maxAge = maxAge;
    evert.averageAge =averageAge;
    evert.names = names;


    //Referens läroboken s. 115
    function compare(value1, value2) {
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
     //sortera åäö
    function localeSort(string1, string2) {
        return string1.toString().localeCompare(string2.toString());
    }

    //utbojekt
    return evert;
}
       
     



