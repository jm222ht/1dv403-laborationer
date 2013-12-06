//exempel på object
var myObject = {
    var startObj = {
        init:function()
        {alert("hej, hopp");
        var mess = new Message("Testmeddelande", new Date());
        alert(mess);
        alert(mess.getText());
        mess.setText("En annan text");
        alert(mess);
        }
    }
    window.onload = startObj.init;
};
