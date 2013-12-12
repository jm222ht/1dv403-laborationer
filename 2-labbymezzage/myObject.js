"use strict"

var myObject = {

    messages:[],

    init: function () {
        
        var link = document.getElementById("skriv");
        link.addEventListener("click", function () {
            var myText = (document.getElementById("text").value);
            alert(myText);
            var mess = new Message(myText, new Date());
            myObject.messages.push(mess);
            alert(myObject.messages[0]);
        }, false);
    }
}

window.onload = myObject.init;

