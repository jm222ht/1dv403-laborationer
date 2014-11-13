"use strict";

window.onload = function () {

    //Det hemliga talet slumpas fram
    var secret = Math.floor(Math.random() * 101);

    var count = 0;

    // I denna funktion ska du skriva koden f�r att hantera "spelet"
    var guess = function (number) {
        console.log("Det hemliga talet: " + secret); // Du n�r den yttre variabeln secret innifr�n funktionen.
        console.log("Du gissade: " + number); // Detta nummer �r det som anv�ndaren gissade p�.

        var plupp = [];
        
        do {
            //J�mf�relse av tal samt meddelande
            if (number < 0 || number > 100 || isNaN(number)) {
                plupp[1] = ("ERROR! It is not a number beteween 1-100");
                return plupp;
            }

            ++count;
            if (number > secret) {
                var str = (number + " is not the secret number. My number is lower.");
                plupp[1] = str;
                return plupp;
            }
            if (number < secret) {
                var str2 = (number + " is not the secret number. My number is higher.");
                plupp[1] = str2;
                return plupp;
            }

        } while (number != secret);
        if (number == secret) {
            plupp[1] = ("The secret number was " + number + ". You got the correct answer in " + count + " guesses.");
            plupp[0] = true;
            return plupp;
        }
    

    // Returnera exempelvis: 
    // [true, "Grattis du vann! Det hemliga talet var X och du beh�vde Y gissningar f�r att hitta det."]
    // [false, "Det hemliga talet �r h�gre!"]
    // [false, "Det hemliga talet �r l�gre!"]
    // [false, "Talet �r utanf�r intervallet 0 - 100"]	

    };

    // ------------------------------------------------------------------------------



    // Kod f�r att hantera utskrift och inmatning. Denna ska du inte beh�va f�r�ndra
    var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
    var input = document.querySelector("#number");
    var submit = document.querySelector("#send");

    // Vi kopplar en eventhanterare till formul�rets skickaknapp som k�r en anonym funktion.
    submit.addEventListener("click", function (e) {
        e.preventDefault(); // Hindra formul�ret fr�n att skickas till servern. Vi hanterar allt p� klienten.

        var answer = guess(input.value) // L�ser in talet fr�n textrutan och skickar till funktionen "guess"
        p.innerHTML = answer[1];		// Skriver ut texten fr�n arrayen som skapats i funktionen.	

        if (answer[0] === true) {				// Om spelet �r slut, avaktivera knappen.
            submit.disabled = true;
        }

    });
};