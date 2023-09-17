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
  const [sameIcon, setSameIcon] = useState(null);

  const handleStoneClicked = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return <Rock />;
      case 1:
        return <Paper />;
      case 2:
        return <Sisscors />;
      default:
        return null;
    }
    // setShowRock(!showRock);
    // console.log("stone button clicked");
  };

  const handlePaperClicked = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return <Rock />;
      case 1:
        return <Paper />;
      case 2:
        return <Sisscors />;
      default:
        return null;
    }
  };

  const handleSissorsClicked = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return <Rock />;
      case 1:
        return <Paper />;
      case 2:
        return <Sisscors />;
      default:
        return null;
    }
  };

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
              Score
              <br />
              {score}
            </h1>
          </div>
        </div>
        <div className="icons">
          <button onClick={() => setRandomIcon(handleStoneClicked())}>
            <Rock />
          </button>
          <button onClick={() => setRandomIcon(handlePaperClicked)}>
            <Paper />
          </button>
          <button onClick={() => setRandomIcon(handleSissorsClicked)}>
            <Sisscors />
          </button>
        </div>
        <div style={{ marginLeft: "400px" }}>{randomIcon}</div>
      </div>
    </>
  );
}

export default App;
