let lights = ["red","yellow","green"];

let messages = [
    "🔴 Red - Stop",
    "🟡 Yellow - Wait",
    "🟢 Green - Go"
];

let index = 0;

function showSignal(){

    document.getElementById("red").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
    document.getElementById("green").classList.remove("active");

    document.getElementById(lights[index]).classList.add("active");

    document.getElementById("status").innerHTML = messages[index];
}

function changeSignal(){

    index++;

    if(index > 2){
        index = 0;
    }

    showSignal();
}

showSignal();

setInterval(changeSignal,3000);