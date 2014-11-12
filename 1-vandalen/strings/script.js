"use strict";

window.onload = function(){


   
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.		
		// Returnera den konverterade strängen.
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
	    //Stringförändrare

	    //Konverterar strängen
	    //if (str = "") {
	    //Error( "text saknas, var vänlig skriv i text.")}
	       
	   // try{
	       // str == ""}
	   // catch (error)
	    //{
	       // return "Text saknas, var vänlig skriv i text";
	    //}
	    if (str == "")
	    { return "FEL! Text saknas, var vänlig skriv i text"; }

	        var anotherEvert = "";
	        for ( var index = 0; index < str.length; index++) {
	            var char1 = switchCase(str[index]);
	            if (char1 == "A" || char1 == "a") {
	                char1 = "#";
	            }

	            anotherEvert += char1;
	           
	        }

	        return anotherEvert;
	    

	    //Ändrar versaler och gemener
	    function switchCase(char) {
	        if (char == char.toUpperCase()) {
	            char == char.toLowerCase();
	        }
	        else {
	            char = char.toUpperCase();
	        }
	        return char;
	    }

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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};