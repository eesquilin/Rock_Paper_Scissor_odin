function getCOmputerChoice() {
  const choices = ["Paper", "Rock", "Scissors"];
  const result = Math.floor(Math.random() * 3);
  console.log(choices[result]);
  return result;
}

function getHumanChoice() {
  const choice = prompt("Your choice: Paper(0) Rock(1) Scissor(2). ");
  if (choice === "0") {
    console.log("Paper");
    return "Paper";
  } else if (choice === "1") {
    console.log("Rock");
    return "Rock";
  } else if (choice === "2") {
    console.log("Scissor");
    return "Scissor";
  }
}

//Variables for score
humanScore = 0;
ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice().toLowerCase();
  computerChoice = getCOmputerChoice().toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("Round is a tie.");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Human wins the round.");
    humanScore++;
  } else {
    console.log("Computer wins the round.");
    ComputerScore++;
  }
}
