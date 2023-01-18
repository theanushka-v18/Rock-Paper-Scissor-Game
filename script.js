let playerChoice = document.getElementById("player-choice");
let computerChoice = document.getElementById("computer-choice");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");
let playBtn = document.getElementById("play");
let result = document.getElementById("result");

playerChoice.style.display = "none";
computerChoice.style.display = "none";

let choiceArr = ["Rock", "Paper", "Scissor"];
let idx = Math.floor(Math.random()*3);
let choice = choiceArr[idx];

function rock() {
    playerChoice.innerHTML = rockBtn.innerHTML;
    playerChoice.style.display = "inherit";
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    rockBtn.disabled = true;

    playBtn.addEventListener("click", function() {
        computerChoice.innerHTML = choice;
        computerChoice.style.display = "inherit";

        if(playerChoice.innerHTML=="Rock" && computerChoice.innerHTML=="Rock") {
            result.innerHTML = "Game Tied Up";
        } else if(playerChoice.innerHTML=="Rock" && computerChoice.innerHTML=="Paper") {
            result.innerHTML = "Computer Won";
        } else if(playerChoice.innerHTML=="Rock" && computerChoice.innerHTML=="Scissor") {
            result.innerHTML = "You Won";
        }
    });


}
function paper() {
    playerChoice.innerHTML = paperBtn.innerHTML;
    playerChoice.style.display = "inherit";
    rockBtn.disabled = true;
    scissorBtn.disabled = true;
    paperBtn.disabled = true;

    playBtn.addEventListener("click", function() { 
        computerChoice.innerHTML = choice;
        computerChoice.style.display = "inherit";

        if(playerChoice.innerHTML=="Paper" && computerChoice.innerHTML=="Rock") {
            result.innerHTML = "You Won";
        } else if(playerChoice.innerHTML=="Paper" && computerChoice.innerHTML=="Paper") {
            result.innerHTML = "Game Tied Up";
        } else if(playerChoice.innerHTML=="Paper" && computerChoice.innerHTML=="Scissor") {
            result.innerHTML = "Computer Won";
        }
    });
}
function scissor() {
    playerChoice.innerHTML = scissorBtn.innerHTML;
    playerChoice.style.display = "inherit";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;

    playBtn.addEventListener("click", function() {
        computerChoice.innerHTML = choice;
        computerChoice.style.display = "inherit";

        if(playerChoice.innerHTML=="Scissor" && computerChoice.innerHTML=="Rock") {
            result.innerHTML = "Computer Won";
        } else if(playerChoice.innerHTML=="Scissor" && computerChoice.innerHTML=="Paper") {
            result.innerHTML = "You Won";
        } else if(playerChoice.innerHTML=="Scissor" && computerChoice.innerHTML=="Scissor") {
            result.innerHTML = "Game Tied Up";
        }
    });
}