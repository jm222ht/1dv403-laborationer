"use strict";

window.onload = function(){
	
	//Det hemliga talet slumpas fram
    var secret = Math.floor(Math.random() * 101);
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		//console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		//console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
var count = 0;
    do {
        
        //Jämförelse av tal samt meddelande
        if (number == null || number < 1 || number > 100) {
            return(number + "it not at number beteween 1-100");
        }
        ++count;
        if (number > randomnumber) {
            return(number + " is not the secret number. My number is lower.");
        }
        if (number < randomnumber) {
            return(number + " is not the secret number. My number is higher.");
        }
       
    } while (number != randomnumber)
if (number == randomnumber) {
        return("The secret number was " + number + ". You got the correct answer in " + count + " guesses.");
    }

		// Returnera exempelvis: 
		// [true, "Grattis du vann! Det hemliga talet var X och du behövde Y gissningar för att hitta det."]
		// [false, "Det hemliga talet är högre!"]
		// [false, "Det hemliga talet är lägre!"]
		// [false, "Talet är utanför intervallet 0 - 100"]		
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};
