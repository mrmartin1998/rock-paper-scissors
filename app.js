document.addEventListener('DOMContentLoaded', (event) => {
    // Your code to interact with the user goes here
    document.getElementById('rock').addEventListener('click', function() {
        playGame("Rock");
    });

    document.getElementById('paper').addEventListener('click', function() {
        playGame("Paper");
    });

    document.getElementById('scissors').addEventListener('click', function() {
        playGame("Scissors");
    });

    function playGame(playerChoice) {
        // Here you would handle the interaction with the smart contract
        // For now, let's just log the player's choice
        console.log("Player chose:", playerChoice);
        // Update the front end with the choice
        document.getElementById('result').innerText = "You chose " + playerChoice + ". Now let's see what the computer chose...";
    }
});

