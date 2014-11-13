"use strict";

window.onload = function(){

	
    var birthday = function (date) {

        //läser in datum
        var usersDate = Date.parse(date);
        
        if (isNaN(usersDate)) {
            return alert("Datum saknas");
        }
        //Skapa två datumobjekt
        var toDay = new Date();
        var toDayMili = Date.parse(toDay);

        //Milisekunder till dag
        var miliDay = 1000 * 60 * 60 * 24

        //Beräkning av dagar kvar
        var miliDaysLeft = usersDate - toDayMili;

        //Om födelsedagen har inträffat
        if (miliDaysLeft < 0) {
            alert("Du har fyllt år");
            
            var daysLeft = (miliDaysLeft + miliDay) / miliDay;
            var intDayYear = (parseInt(daysLeft)-1);
            return "1 år " + intDayYear;
        }
       
        //Meddelande om dagar kvar
        var daysLeft = (miliDaysLeft + miliDay) / miliDay;
        var intDay = parseInt(daysLeft);
        return intDay;

      

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};