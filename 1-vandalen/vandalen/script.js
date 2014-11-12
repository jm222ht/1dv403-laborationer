"use strict";

var makePerson = function (persArr) {

   
    var evert = { names:[], minAge: minAge, maxAge: maxAge, averageAge: averageAge }
   
    //loopa igenom arrayen, skilj ut nummer och strängar
    for (var index = 0; index < persArr.length; index++) {
        
        //ett objekt
        var pers = persArr[index];
        var date = pers.born;
        var namn = pers.name;

        //namn Array som sorteras
        var names = [0];
        names.push(namn);
        names.sort();

        //sortera åäö, saknas

        //åldersuträkning
        var miliDate = Date.parse(date);
        var toDay = new Date()
        var toDayMili = Date.parse(toDay);
        var miliAge = toDayMili - miliDate;

        var miliYear = 1000 * 60 * 60 * 24 * 365;
        var persAge = miliAge / miliYear;

        //Skapa array och lägg till ålder
       var theArray = [0];
       theArray.push(persAge);

        theArray.sort(compare);
        var minAgenotParsed = theArray[0];
        var minAge = parseInt(minAgenotParsed);
        var maxAgenotParsed = theArray[theArray.length - 1];
        var maxAge = parseInt(maxAgenotParsed);

        var numbers = [0];
        var box = 0;
        for (var i = 0; i < theArray.length; i++) {
            var finnsIPaket = numbers[i];
            box += finnsIPaket;
        }

        var averageAgenotParsed = finnsIPaket / theArray.length;
        var averageAge = parseInt(averageAgenotParsed);
       
    }
    
    
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
    //utbojekt
   
    return evert;
}
       
     



