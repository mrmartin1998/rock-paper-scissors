// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RockPaperScissors {
    enum Move { Rock, Paper, Scissors }

    function play(Move playerMove) public view returns (string memory) {
        // Simplified randomness using block.timestamp (not recommended for production)
        uint computerMove = uint(keccak256(abi.encodePacked(block.timestamp))) % 3;
        Move compMove = Move(computerMove);

        if(playerMove == compMove) {
            return "It's a draw!";
        } else if ((playerMove == Move.Rock && compMove == Move.Scissors) || 
                   (playerMove == Move.Scissors && compMove == Move.Paper) || 
                   (playerMove == Move.Paper && compMove == Move.Rock)) {
            return "Player wins!";
        } else {
            return "Computer wins!";
        }
    }
}
