import logo from "./logo.svg";
import "./App.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import NoteIcon from "@mui/icons-material/Note";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useState } from "react";
import Rock from "./component/Rock";
import Paper from "./component/Paper";
import Sisscors from "./component/Sisscors";
import rockImage from "./images/rock2.png";
import sissorImage from "./images/scissor2.png";
import paperImage from "./images/paper2.png";
function App() {
  const [score, setScore] = useState(0);
  const [showRock, setShowRock] = useState(false);
  const [randomIcon, setRandomIcon] = useState(null);
  const [sameButton, setSameButton] = useState(null);

  const handlePaperClicked = () => {
    setSameButton("Paper");
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
      default:
        return null;
    }
  };

  const handleSissorsClicked = () => {
    setSameButton("Scissors");
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
      default:
        return null;
    }
  };
  let content;
  if (sameButton === "Rock" && randomIcon === "Rock") {
    content = "Draw";
  } else if (sameButton === "Rock" && randomIcon === "Paper") {
    content = "YOU LOSE";
  } else if (sameButton === "Rock" && randomIcon === "Scissors") {
    content = "YOU WIN";
  } else if (sameButton === "Paper" && randomIcon === "Paper") {
    content = "Draw";
  } else if (sameButton === "Paper" && randomIcon === "Rock") {
    content = "YOU WIN";
  } else if (sameButton === "Paper" && randomIcon === "Scissors") {
    content = "YOU LOSE";
  } else if (sameButton === "Scissors" && randomIcon === "Scissors") {
    content = "Draw";
  } else if (sameButton === "Scissors" && randomIcon === "Paper") {
    content = "YOU WIN";
  } else if (sameButton === "Scissors" && randomIcon === "Rock") {
    content = "YOU LOSE";
  }
  console.log(content);
  const handleStoneClicked = () => {
    setSameButton("Rock");
    if (content === "Draw") {
      setScore(score + 0);
    } else if (content === "YOU WIN") {
      setScore(score + 1);
    } else if (content === "YOU LOSE") {
      setScore(score - 1);
    }
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "Rock";
      case 1:
        return "Paper";
      case 2:
        return "Scissors";
      default:
        return null;
    }
  };
  return (
    <>
      <div className="main-section">
        <div className="transperant-background">
          <div className="output-values device-color"> {content}</div>
          <div className="flex-style">
            <div style={{ padding: "10px", border: "2px solid gray" }}>
              <div className="device-color">Player</div>
            </div>
            <div className="flex-result">
              <div className="device-color">{sameButton}</div>
              <div className="device-color ">{randomIcon}</div>
            </div>
            <div style={{ padding: "10px", border: "2px solid gray" }}>
              <div className="device-color">Computer</div>
            </div>
          </div>
          <div className="icons">
            <button
              className="button-color"
              onClick={() => setRandomIcon(handleStoneClicked())}
            >
              <img
                src={rockImage}
                alt="Full Screen Image"
                style={{ width: "70px", height: "70px" }}
              />
            </button>
            <button
              className="button-color"
              onClick={() => setRandomIcon(handlePaperClicked)}
            >
              <img
                src={paperImage}
                alt="Full Screen Image"
                style={{ width: "70px", height: "70px" }}
              />
            </button>
            <button
              className="button-color"
              onClick={() => setRandomIcon(handleSissorsClicked)}
            >
              <img
                src={sissorImage}
                alt="Full Screen Image"
                style={{ width: "70px", height: "70px" }}
              />
            </button>
          </div>
        </div>
        {/* <div className="App">
          <div className="game-elements">
            <h1>Rock</h1>
            <h1>Paper</h1>
            <h1>Scissors</h1>
          </div>
          <div className="score">
            <h1 style={{ color: "pink" }}>
              Score
              <br />
              {score}
            </h1>
          </div>
        </div>

        <div className="output-values">
          <div className="device-color">{sameButton}</div>
          <div className="device-color ">{randomIcon}</div>
        </div> */}
        {/* <div className="output-values device-color"> {content}</div> */}
      </div>
    </>
  );
}

export default App;
