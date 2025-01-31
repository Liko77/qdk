import React, { useState } from 'react';
import './App.css';

function App() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState("Rock");
  const [robotChoice, setRobotChoice] = useState(choices[Math.floor(Math.random() * 3)]);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [robotScore, setRobotScore] = useState(0);
  const [rounds, setRounds] = useState(0); // Keeps track of the number of rounds played

  const calculateResult = (user, robot) => {
    if (user === robot) {
      return "Beraber!🧠";
    } else if (
      (user === "Rock" && robot === "Scissors") ||
      (user === "Paper" && robot === "Rock") ||
      (user === "Scissors" && robot === "Paper")
    ) {
      return "Sen qalib oldun!🤓";
    } else {
      return "Robot Qalib geldi!💀";
    }
  };

  const updateScores = (gameResult) => {
    if (gameResult === "Sen qalib oldun!🤓") {
      setUserScore(userScore + 1);
    } else if (gameResult === "Robot Qalib geldi!💀") {
      setRobotScore(robotScore + 1);
    }
    setRounds(rounds + 1);
  };

  const handleChoice = (choice) => {
    const robotRandomChoice = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setRobotChoice(robotRandomChoice);
    const gameResult = calculateResult(choice, robotRandomChoice);
    setResult(gameResult);
    updateScores(gameResult);
  };

  return (
    <div className="App">
      <h2>Birini seç!</h2>
      <div className="buttons">
        <button onClick={() => handleChoice("Rock")}>Rock</button>
        <button onClick={() => handleChoice("Paper")}>Paper</button>
        <button onClick={() => handleChoice("Scissors")}>Scissors</button>
      </div>
      
      <h1>
        Robot {robotChoice} seçti. Sen {userChoice} seçtin. {result}
      </h1>

      <div className="scoreboard">
        <h2>Skor Tablosu:</h2>
        <p>Sen: {userScore}</p>
        <p>Robot: {robotScore}</p>
        <p>Toplam Tur: {rounds}</p>
      </div>

      <div className="footer">
        <p>Yapabileceğiniz seçimler: Rock, Paper, Scissors.</p>
      </div>
    </div>
  );
}

export default App;
