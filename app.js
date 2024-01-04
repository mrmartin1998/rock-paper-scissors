document.addEventListener('DOMContentLoaded', (event) => {
    // Connect to MetaMask
    async function connectMetaMask() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request account access
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log("Connected to MetaMask");
            } catch (error) {
                console.error("User denied account access");
            }
        } else {
            console.error("MetaMask is not installed!");
        }
    }

    connectMetaMask();

    // Event listeners for buttons
    document.getElementById('rock').addEventListener('click', function() {
        playGame("Rock");
    });

    document.getElementById('paper').addEventListener('click', function() {
        playGame("Paper");
    });

    document.getElementById('scissors').addEventListener('click', function() {
        playGame("Scissors");
    });

    // Global variables for contract (fill in with your actual data)
    const contractABI = [
        {
          "inputs": [
            {
              "internalType": "enum RockPaperScissors.Move",
              "name": "playerMove",
              "type": "uint8"
            }
          ],
          "name": "play",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ]; // Replace with your contract's ABI
    const contractAddress = "0xCfb5E120827D186A6272cc6eA30daba0fD907932"; // Replace with your contract's address

    // Initialize web3 and contract
    let web3 = new Web3(window.ethereum);
    let rockPaperScissorsContract = new web3.eth.Contract(contractABI, contractAddress);

    function playGame(playerChoice) {
        // Convert player choice to number as expected by the smart contract
        let move = { "Rock": 0, "Paper": 1, "Scissors": 2 }[playerChoice];

        // Get the user's account
        web3.eth.getAccounts()
        .then(accounts => {
            // Use the first account to play
            let playerAccount = accounts[0];
            
            // Interact with the contract
            rockPaperScissorsContract.methods.play(move).send({from: playerAccount})
            .then(result => {
                console.log("Game played!", result);
                // Update the frontend with the result here
                document.getElementById('result').innerText = "Game played! Check console for result.";
            })
            .catch(err => {
                console.error("Error playing the game:", err);
                document.getElementById('result').innerText = "Error playing the game. Check console.";
            });
        })
        .catch(err => {
            console.error("Error getting accounts:", err);
            document.getElementById('result').innerText = "Error getting accounts. Check console.";
        });
    }
});
