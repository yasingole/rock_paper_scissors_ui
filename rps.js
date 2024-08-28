console.log("Hello from external JavaScript!");

// Global scores object
let scores = {
    humanScore: 0,
    computerScore: 0
};

// Get Computer choice, random number 0-2, equals R, P, S:
const computerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "ROCK";
    } else if (randomNumber === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

// Function for playing rounds:
const playRound = (humanSelection) => {
    const computerSelection = computerChoice();
    let result = "";

    if (humanSelection === computerSelection) {
        result = `It's a draw! You: ${humanSelection} Computer: ${computerSelection}`;
    } else if (
        (humanSelection === "ROCK" && computerSelection === "SCISSORS") || 
        (humanSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (humanSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        scores.humanScore++;
        result = `Human wins: ${humanSelection} beats ${computerSelection}`;
    } else {
        scores.computerScore++;
        result = `You lose: ${computerSelection} beats ${humanSelection}`;
    }

    updateResults(result);
    checkWinner();
}

// Function to update the results and scores on the page
const updateResults = (result) => {
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent = `Human: ${scores.humanScore} - Computer: ${scores.computerScore}`;
}

// Function to check if there is a winner
const checkWinner = () => {
    if (scores.humanScore === 5) {
        document.getElementById("winner").textContent = "Congratulations! You won the game!";
        resetGame();
    } else if (scores.computerScore === 5) {
        document.getElementById("winner").textContent = "The computer wins the game. Better luck next time!";
        resetGame();
    }
}

// Function to reset the game after a winner is announced
const resetGame = () => {
    scores.humanScore = 0;
    scores.computerScore = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("score").textContent = "";
    setTimeout(() => {
        document.getElementById("winner").textContent = "";
    }, 3000); // Clear the winner message after 3 seconds
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const choice = event.target.id.toUpperCase();
        playRound(choice);
    });
});
