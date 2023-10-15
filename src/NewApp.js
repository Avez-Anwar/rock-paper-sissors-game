import React, { useState } from "react";
import rockImage from "./images/rock2.png";
import sissorImage from "./images/scissor2.png";
import paperImage from "./images/paper2.png";

const choices = ["rock", "paper", "scissors"];

const getResult = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "It's a tie!";
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
};

const getRandomChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

const RPSGame = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleUserChoice = (choice) => {
    const computerChoice = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setResult(getResult(choice, computerChoice));
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <div className="choices-container">
        <div className="choice">
          <p>User Choice:</p>
          {userChoice && <img src={`./images/rock2.png`} alt={userChoice} />}
        </div>
        <div className="choice">
          <p>Computer Choice:</p>
          {computerChoice && (
            <img src={`./images/scissor2.png`} alt={computerChoice} />
          )}
        </div>
      </div>
      <div className="choices-container">
        {choices.map((choice) => (
          <div key={choice} className="choice">
            <img
              src={`./images/paper2.png`}
              alt={choice}
              onClick={() => handleUserChoice(choice)}
            />
          </div>
        ))}
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default RPSGame;
