console.log("Hello from external JavaScript!");

// Global scores object
let scores = {
    humanScore: 0,
    computerScore: 0
};

// Get Computer choice, random number 1-3, equals R, P, S:
const computerChoice= () => {
    const randomNumber= Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return "ROCK";
    } else if (randomNumber === 1) {
        return "PAPER";
    } else if (randomNumber === 2) {
        return "SCISSORS";
    }
}

// Get humanChoice function:
const humanChoice= () => {
    let choice= "";

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice= prompt("Choose: Rock, Paper, Scissors!").toLowerCase();
        
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice.toUpperCase();
        } else {
            console.log("You have chosen an incorrect response ...")
        }
    }
}

// Function for playing rounds:
const playRound = (humanSelection, computerSelection) => {
    if (humanSelection === computerSelection) {
        return "It's a draw! You:"+ humanSelection + " Computer: " + computerSelection;
    } else if (
        (humanSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (humanSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (humanSelection === "PAPER" && computerSelection === "ROCK")
     ) {
        scores.humanScore++;
        return "Human wins: " + humanSelection + " beats " + computerSelection;
    } else {
        scores.computerScore++;
        return "You lose: " + computerSelection + " beats " + humanSelection;
    }
}

const playGame= () => {
    for (let i=0; i<5; i++) {
        let humanSelection= humanChoice();
        let computerSelection= computerChoice();
        let result= playRound(humanSelection, computerSelection);
        console.log(result);
        console.log(`Round ${i + 1} Scores: Human ${scores.humanScore} - Computer ${scores.computerScore}`);
    }

    if (scores.humanScore > scores.computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (scores.computerScore > scores.humanScore) {
        console.log("The computer wins the game. Better luck next time!");
    } else {
        console.log("It's a tie game!");
    }

    console.log(`Final Scores: Human ${scores.humanScore} - Computer ${scores.computerScore}`);
}

playGame();