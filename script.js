let playerChoice = document.getElementById("player-choice");
let computerChoice = document.getElementById("computer-choice");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");
let playBtn = document.getElementById("play");
let result = document.getElementById("result");
let againPlay = document.getElementById("againPlay");

againPlay.addEventListener("click", function(e) {
    e.preventDefault();
    playerChoice.style.display = "none";
    computerChoice.style.display = "none";
    againPlay.style.display = "none";
    playBtn.disabled = true;
    result.innerHTML = "Result Will Display Here...";
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
    rockBtn.disabled = false;
    playBtn.disabled = false;
})

let choice;

playerChoice.style.display = "none";
computerChoice.style.display = "none";
againPlay.style.display = "none";

function getidx() {
    let choiceArr = ["Rock", "Paper", "Scissor"];
    let idx = Math.floor(Math.random()*3);
    choice = choiceArr[idx];
}


function rock() {
    playerChoice.innerHTML = rockBtn.innerHTML;
    playerChoice.style.display = "inherit";
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    rockBtn.disabled = true;

    getidx();
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
        againPlay.style.display = "inherit";
    });
}
function paper() {
    playerChoice.innerHTML = paperBtn.innerHTML;
    playerChoice.style.display = "inherit";
    rockBtn.disabled = true;
    scissorBtn.disabled = true;
    paperBtn.disabled = true;

    getidx();
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
        againPlay.style.display = "inherit";
    });
}

function scissor() {
    playerChoice.innerHTML = scissorBtn.innerHTML;
    playerChoice.style.display = "inherit";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;

    getidx();
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
        againPlay.style.display = "inherit";
    });
}