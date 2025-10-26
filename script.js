

function getCOmputerChoice() {
    const result = Math.floor(Math.random() * 3);

    if (result === 0) {
        console.log("Paper");
    } else if (result === 1) {
        console.log("Rock");
    } else {
        console.log("Scissors");
    }
}

function getHumanChoice() {
   
    const choice = prompt("Your choice: Paper(0) Rock(1) Scissor(2). ");
    if (choice === "0") {
        console.log("Paper");
    } else if (choice === "1") {
        console.log("Rock");
    } else if (choice === "2") {
        console.log("Scissor");
    } else {
        console.log("Invalid choice");
    }
}

getCOmputerChoice()
getHumanChoice()