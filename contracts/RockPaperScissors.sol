// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RockPaperScissors {
    enum Move { Rock, Paper, Scissors }

    function play(Move playerMove) public view returns (string memory) {
        // Updated to use block.prevrandao for randomness
        uint computerMove = uint(keccak256(abi.encodePacked(block.timestamp, block.prevrandao))) % 3;
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
