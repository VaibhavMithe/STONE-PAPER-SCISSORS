/////////////////////////////////////////////////////////////
let frame1 = document.querySelector(".container2");
let frame2 = document.querySelector(".contest1");

// frame2.style.display = "flex";

///////////////////////////////////////////////////////////

let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".sign");
const userScoreH1 = document.querySelector("#user-score");
const compScoreH1 = document.querySelector("#comp-score");
// const btn = document.querySelector("#tryAgianBtn")
let userChoiceForRound = undefined;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

function startNewRound() {
  userChoiceForRound = undefined;
}

choices.forEach((sign) => {
  sign.addEventListener("click", () => {
    userChoiceForRound = sign.getAttribute("id");
    console.log(userChoiceForRound);
    // console.log("Choice was clicked", signId)
    frame1.style.display = "none";
    frame2.style.display = "flex";
    gameLogic(userChoiceForRound);
  });
});

function gameLogic(userChoice) {
  console.log("User Choice = ", userChoice);
  const compChoice = getRandomMove();
  console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    getImgForChoice(userChoiceForRound, "userPickedImg");
    getImgForChoice(compChoice, "compPickedImg");
    if(userWin){
      document.getElementById("decisionText").innerText="YOU WIN";
    }
    else{
      document.getElementById("decisionText").innerText="YOU LOST";
    }
    showWinner(userWin);
  }
}

function getImgForChoice(choice, userImgId) {
  console.log("choice: ", choice);
  console.log("userImgId: ", userImgId);
  switch (choice) {
    case "rock":
      document.getElementById(userImgId).src = "images/Rock.png";
      // return 'images/Rock.png';
      break;
    case "paper":
      // return "images/Paper.png";
      document.getElementById(userImgId).src = "images/Paper.png";
      break;
    case "scissors":
      // return "images/Scissors.png";
      document.getElementById(userImgId).src = "images/Scissors.png";
      break;
    default:
      break;
  }
}

function hideAndShow() {
  frame1.style.display="flex";
  frame2.style.display="none";

}
function winnerPage(){
  
}

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScoreH1.innerHTML = userScore;
    console.log("you win");
  } else {
    console.log("You Lose");
    comScore++;
    compScoreH1.innerHTML = comScore;
  }
};

const drawGame = () => {
  console.log("Game Was Draw");
};
function getRandomMove() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

// Example usage:
// const computerMove = getRandomMove();
// console.log(`Computer move: ${computerMove}`);

// rock.addEventListener("click", getRandom);
// paper.addEventListener("click", getRandom);
// scissors.addEventListener("click", getRandom);
