const Eris = require("eris");
var x5bzteam = new Eris("NDc1MjMzNDk5NjQxODA2ODQ5.DvgzyQ.Y4uhD7dUGUtT8N9Zpl2WC0-qw3U");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "510886212978999296";
nick = "źerø, MixGamer";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();
