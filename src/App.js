import logo from "./logo.svg";
import "./App.css";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import NoteIcon from "@mui/icons-material/Note";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { useState } from "react";

function App() {
  const [score, serScore] = useState(0);
  const handleStoneClicked = () => {
    console.log("stone button clicked");
  };
  const handlePapperClicked = () => {
    console.log("paper button clicked");
  };
  const handleSissorsClicked = () => {
    console.log("sissors button clicked");
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
          <button onClick={handleStoneClicked}>
            <SportsSoccerIcon
              sx={{ fontSize: 100, color: "grey", padding: "0 50px" }}
            />
          </button>
          <button onClick={handlePapperClicked}>
            <NoteIcon
              sx={{ fontSize: 100, color: "grey", padding: "0 50px" }}
            />
          </button>
          <button onClick={handleSissorsClicked}>
            <RestaurantIcon
              sx={{ fontSize: 100, color: "grey", padding: "0 50px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
