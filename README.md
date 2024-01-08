# Rock Paper Scissors Blockchain Game

## Description

The Rock Paper Scissors Blockchain Game is a decentralized application (dApp) that brings the classic game of Rock Paper Scissors to the Ethereum blockchain. This project is designed to demonstrate blockchain and smart contract capabilities in a fun, interactive way. It allows players to compete against a computerized opponent with their choices being recorded and verified on the Ethereum network.

## Technologies Used

- **Solidity**: For writing the Ethereum smart contract.
- **HTML/CSS/JavaScript**: For creating the front-end user interface.
- **Truffle**: As a development framework for Ethereum.
- **Ganache**: For running a personal local blockchain for development purposes.
- **Web3.js**: A JavaScript library for interacting with the Ethereum blockchain.
- **MetaMask**: For Ethereum wallet and transaction management.

## Smart Contract

The `RockPaperScissors.sol` smart contract is the backbone of the game. It features the following key functions:

1. **Play Function**: Allows players to make their move (Rock, Paper, or Scissors) which is then compared against a computer-generated move.
2. **Randomness**: The contract implements basic randomness for the computer's move, making each game unique.
3. **Game Result**: After each play, the contract emits an event with the game result, which the front-end application listens for and displays to the user.

## Front-End

The front-end of the application is straightforward and user-friendly, consisting of:

- `index.html`: The main HTML file that users interact with.
- `app.js`: A JavaScript file that handles the interaction with the smart contract and updates the UI based on blockchain data.

### Installation

1. **Clone the Repository**: Clone this repository to your local machine.
2. **Set Up the Blockchain Environment**: Use Truffle and Ganache for a local Ethereum blockchain environment.
3. **Deploy the Contract**: Compile and migrate the smart contract to your local blockchain using Truffle.
4. **Connect the Front-End**: Update the contract's address and ABI in `app.js` with the relevant details from your deployment.

### Usage

1. **Open the Application**: Launch the `index.html` file in a web browser.
2. **Connect MetaMask**: Ensure MetaMask is set up with your local blockchain and has some test Ether.
3. **Play the Game**: Choose Rock, Paper, or Scissors and see the result against the computer's choice.

### Future Enhancements

- **Improved Randomness**: Implement more sophisticated algorithms for randomness to enhance the game's unpredictability.
- **Multiplayer Functionality**: Develop a multiplayer version where users can play against each other.
- **Enhanced UI/UX**: Focus on improving the user interface and experience with more interactive and visually appealing elements.
