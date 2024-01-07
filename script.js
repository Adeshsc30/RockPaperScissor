let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePoints = document.querySelector("#user-score");
const compScorePoints = document.querySelector("#comp-score");

const newGame = document.querySelector("#NewGame");



const resetScores = () =>{
    userScore=0;
    compScore=0;
    userScorePoints.innerText = userScore;
    compScorePoints.innerText = compScore;
    msg.innerText = "game was reset";
    msg.style.backgroundColor = "blue";
}
newGame.addEventListener("click", resetScores);

const drawGame = () => {
    console.log("The match was draw!");
    msg.innerText = "The match was draw!";
    msg.style.backgroundColor = "#59114D";
    msg.style.color = "white";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore ++;
        userScorePoints.innerText = userScore;
        console.log("You Win.");
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore ++;
        compScorePoints.innerText = compScore;
        console.log("Computer win.");
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ",compChoice); 

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin =  compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
});
});

