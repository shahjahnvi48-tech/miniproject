let userScore = 0;
let computerScore = 0;

function play(userChoice){

    const choices = ["Stone","Paper","Scissors"];

    const computerChoice = choices[Math.floor(Math.random()*3)];

    let message = "";

    if(userChoice === computerChoice){

        message = "It's a Draw!";

    }
    else if(
        (userChoice==="Stone" && computerChoice==="Scissors") ||
        (userChoice==="Paper" && computerChoice==="Stone") ||
        (userChoice==="Scissors" && computerChoice==="Paper")
    ){

        userScore++;
        message = "🎉 You Win!";

    }
    else{

        computerScore++;
        message = "😢 Computer Wins!";

    }

    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    document.getElementById("message").innerHTML = message;

    document.getElementById("moves").innerHTML =
    "You chose <b>" + userChoice +
    "</b> | Computer chose <b>" + computerChoice + "</b>";
}

function resetGame(){

    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;

    document.getElementById("message").innerHTML = "Choose your move!";
    document.getElementById("moves").innerHTML = "";
}