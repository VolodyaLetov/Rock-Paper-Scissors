function getComputerChoice() {
  const x = Math.random();

  if (x <= 0.33) {
    return "rock";
  } else if (x <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  let choice = prompt("Please write down rock/paper/scissors").toLowerCase();
  console.log(choice);
  return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  if (humanChoice === computerChoice) {
    console.log("It's a Draw!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Human Wins! computer chose " + computerChoice + " !");
    humanScore++;
    return humanScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Human Wins! computer chose " + computerChoice + " !");
    humanScore++;
    return humanScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Human Wins! computer chose " + computerChoice + " !");
    humanScore++;
    return humanScore;
  } else {
    console.log("Computer Wins with " + computerChoice + " !");
    computerScore++;
    return computerScore;
  }
}
function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    console.log(
      "Human Wins! With " +
        humanScore +
        " points and computer has " +
        computerScore +
        " points!"
    );
  } else if (computerScore > humanScore) {
    console.log(
      "Computer Wins! With " +
        computerScore +
        " points and human has " +
        humanScore +
        " points!"
    );
  } else {
    console.log(
      "it's a Draw computer has " +
        computerScore +
        " points and Human has " +
        humanScore +
        " points!"
    );
  }
}
