import { useState } from "react";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Wordle from "./components/Wordle/Wordle";
import "./App.css";

function App() {
  const reactGames = ["Tic-Tac-Toe", "Wordle"];
  const [showTTT, setShowTTT] = useState(false);
  const [showWordle, setShowWordle] = useState(false);

  const showGame = (e) => {
    let game = e.target.dataset.game;

    if (game === "Tic-Tac-Toe") {
      setShowTTT(true);
      setShowWordle(false);
    } else if (game === "Wordle") {
      setShowWordle(true);
      setShowTTT(false);
    }
  };
  return (
    <>
      <div
        className={`games-container ${showTTT || showWordle ? "hide" : "show"}`}
      >
        <h1 className="title">React Games</h1>
        <div className="game-btn-container">
          {reactGames.map((game) => {
            return (
              <button
                onClick={showGame}
                key={game}
                data-game={game}
                className="game-btn"
              >
                {game}
              </button>
            );
          })}
        </div>
      </div>
      <TicTacToe show={showTTT} setShow={setShowTTT} />

      <Wordle show={showWordle} setShow={setShowWordle} />
    </>
  );
}

export default App;
