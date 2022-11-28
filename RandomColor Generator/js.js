var container= document.querySelector('.container');
var colorcard= document.querySelector('.color-card');
var button= document.querySelector("button");
var hex= document.querySelector("span");

function getColor(){
    var symbol = '0123456789ABCDEF'

    var color='#';
    for(var i = 0;i<6;i++){
        color=color+symbol[Math.floor(Math.random()*16)];
    }
    document.body.style.background=color;
    document.getElementById("color-card").style.background=color;
    document.getElementById("hex").innerHTML=color;
    
}
button.addEventListener("click",getNewColor)