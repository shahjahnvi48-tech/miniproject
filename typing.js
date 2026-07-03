const quote = document.getElementById("quote").innerText;
const input = document.getElementById("input");

const timer = document.getElementById("time");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");

let timeLeft = 60;
let started = false;
let interval;

input.addEventListener("input", function(){

    if(!started){
        started = true;
        startTimer();
    }

    calculate();
});

function startTimer(){

    interval = setInterval(()=>{

        timeLeft--;
        timer.innerText = timeLeft;

        if(timeLeft<=0){
            clearInterval(interval);
            input.disabled = true;
        }

    },1000);

}

function calculate(){

    const typed = input.value;

    let correct = 0;

    for(let i=0;i<typed.length;i++){

        if(typed[i]===quote[i]){
            correct++;
        }

    }

    let words = typed.trim().split(/\s+/).length;

    if(typed.trim()==""){
        words=0;
    }

    let minutes = (60-timeLeft)/60;

    if(minutes>0){
        wpm.innerText = Math.round(words/minutes);
    }

    let acc = typed.length==0 ? 100 : Math.round((correct/typed.length)*100);

    accuracy.innerText = acc;

}

function restartTest(){

    clearInterval(interval);

    input.value="";
    input.disabled=false;

    timeLeft=60;
    started=false;

    timer.innerText=60;
    wpm.innerText=0;
    accuracy.innerText=100;
}