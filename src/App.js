import logo from "./logo.svg";
import "./App.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import NoteIcon from "@mui/icons-material/Note";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useState } from "react";
import Rock from "./component/Rock";
import Paper from "./component/Paper";
import Sisscors from "./component/Sisscors";

function App() {
  const [score, serScore] = useState(0);
  const [showRock, setShowRock] = useState(false);
  const [randomIcon, setRandomIcon] = useState(null);
  const [sameButton, setSameButton] = useState(null);

  const handleStoneClicked = () => {
    setSameButton("Rock");
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
    // setShowRock(!showRock);
    // console.log("stone button clicked");
  };

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
    content = (
      <div>
        <h1>Draw</h1>
      </div>
    );
  } else if (sameButton === "Rock" && randomIcon === "Paper") {
    content = (
      <div>
        <h1>YOU LOSE</h1>
      </div>
    );
  } else if (sameButton === "Rock" && randomIcon === "Scissors") {
    content = (
      <div>
        <h1>YOU WIN</h1>
      </div>
    );
  } else if (sameButton === "Paper" && randomIcon === "Paper") {
    content = (
      <div>
        <h1>Draw</h1>
      </div>
    );
  } else if (sameButton === "Paper" && randomIcon === "Rock") {
    content = (
      <div>
        <h1>YOU WIN</h1>
      </div>
    );
  } else if (sameButton === "Paper" && randomIcon === "Scissors") {
    content = (
      <div>
        <h1>YOU LOSE</h1>
      </div>
    );
  } else if (sameButton === "Scissors" && randomIcon === "Scissors") {
    content = (
      <div>
        <h1>Draw</h1>
      </div>
    );
  } else if (sameButton === "Scissors" && randomIcon === "Paper") {
    content = (
      <div>
        <h1>YOU WIN</h1>
      </div>
    );
  } else if (sameButton === "Scissors" && randomIcon === "Rock") {
    content = (
      <div>
        <h1>YOU LOSE</h1>
      </div>
    );
  }
  console.log(content);
  return (
    <>
      <div className="main-section">
        <div className="App">
          <div className="game-elements">
            <h1>Rock</h1>
            <h1>Paper</h1>
            <h1>Scissors</h1>
          </div>
          <div className="score">
            <h1>
              {}
              Score
              <br />
              {score}
            </h1>
          </div>
        </div>
        <div className="icons">
          <button
            style={{ padding: " 10px 20px", fontSize: "20px" }}
            onClick={() => setRandomIcon(handleStoneClicked())}
          >
            Rock
          </button>
          <button
            style={{ padding: " 10px 20px", fontSize: "20px" }}
            onClick={() => setRandomIcon(handlePaperClicked)}
          >
            Paper
          </button>
          <button
            style={{ padding: " 10px 20px", fontSize: "20px" }}
            onClick={() => setRandomIcon(handleSissorsClicked)}
          >
            Scissors
          </button>
        </div>
        <div className="output-values">
          <div
            style={{
              padding: "10px",
              border: "2px solid gray",
              marginRight: "40px",
            }}
          >
            <div>You</div>
            <div>{sameButton}</div>
          </div>
          <div style={{ padding: "10px", border: "2px solid gray" }}>
            <div>Computer</div>
            <div>{randomIcon}</div>
          </div>
        </div>
        <div className="output-values"> {content}</div>
      </div>
    </>
  );
}

export default App;
