"use strict";

window.onload = function(){

	
    var birthday = function (date) {

        //läser in datum
        var usersDate = Date.parse(date);
        

        //Läser in månad
        //var month = prompt("Vilken månad fyller du år 1-12)?");
        //var intMonth = (parseInt(month) - 1);

        //Läser in dag
        //var day = prompt("Vilken dag fyller du år (1-31)?");
        //var intDay = parseInt(day);

        //Skapa två datumobjekt
        var toDay = new Date();
        //var birthdaytoDay = Date.UTC(toDay.getFullYear(), intMonth, (intDay) + 1);
        var toDayMili = Date.parse(toDay);

        //var secondsToDay = toDay.getTime();

        //Milisekunder till dag
        var miliDay = 1000 * 60 * 60 * 24

        //Beräkning av dagar kvar
        var miliDaysLeft = usersDate - toDayMili;

        //Om födelsedagen inträffar nästkommande år
        
        if (miliDaysLeft < 0) {
            //birthday = Date.UTC((toDay.getFullYear()) + 1, intMonth, (intDay) + 1);
            //miliDaysLeft = usersDate - secondsToDay;
        }
        //Om födelsedagen har inträffat
        

        //Meddelande om dagar kvar
        var daysLeft = (miliDaysLeft + miliDay) / miliDay;
        var intDay = parseInt(daysLeft);
        return intDay;

        //alert("Det är " + intDay + " dagar kvar till din födelsedag!");

		


			// Din kod här.




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