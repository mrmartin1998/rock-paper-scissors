document.addEventListener('DOMContentLoaded', (event) => {
    let web3;
    let rockPaperScissorsContract;

    async function connectMetaMask() {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log("Connected to MetaMask");
                initializeWeb3AndContract();
            } catch (error) {
                console.error("User denied account access:", error);
            }
        } else {
            console.error("MetaMask is not installed!");
        }
    }

    function initializeWeb3AndContract() {
        web3 = new Web3(window.ethereum);
        rockPaperScissorsContract = new web3.eth.Contract(correctRockPaperScissorsABI, contractAddress);
        console.log("Web3 and Contract Initialized");
    }

    connectMetaMask();

    document.getElementById('rock').addEventListener('click', () => playGame("Rock"));
    document.getElementById('paper').addEventListener('click', () => playGame("Paper"));
    document.getElementById('scissors').addEventListener('click', () => playGame("Scissors"));

    const correctRockPaperScissorsABI = [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "result",
              "type": "string"
            }
          ],
          "name": "GameResult",
          "type": "event"
        },
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
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ]; // Replace with the actual ABI of RockPaperScissors contract
    const contractAddress = "0xc1FB05267a5Bc91B0d17C1A7101A24D09CdC553e"; // Replace with your contract's address

    function playGame(playerChoice) {
        console.log(`Attempting to play game with choice: ${playerChoice}`);
        if (!web3 || !rockPaperScissorsContract) {
            console.error("Web3 or contract not initialized");
            document.getElementById('result').innerText = "MetaMask is not connected. Please refresh and connect.";
            return;
        }

        let move = { "Rock": 0, "Paper": 1, "Scissors": 2 }[playerChoice];

        web3.eth.getAccounts()
        .then(accounts => {
            let playerAccount = accounts[0];
            console.log("Using account:", playerAccount);
            return rockPaperScissorsContract.methods.play(move).send({from: playerAccount});
        })
        .then(receipt => {
            console.log("Transaction receipt:", receipt);
            document.getElementById('result').innerText = "Transaction complete! Check console for receipt.";
        })
        .catch(err => {
            console.error("Error playing the game:", err);
            document.getElementById('result').innerText = "Error playing the game. Check console.";
        });
    }
});
