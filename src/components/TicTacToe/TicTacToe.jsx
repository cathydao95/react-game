import Board from "./Board";
import "./TicTacToe.css";
import { useState } from "react";
import ReturnToMenu from "../ReturnToMenu";

const TicTacToe = ({ show, setShow }) => {
  // implement so that user can choose player vs hardcoding
  const player1 = "X";
  const player2 = "O";
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [gameActive, setGameActive] = useState(true);

  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  // const handlePlayerSelection = (e) => {
  //   setPlayer1(e.target.dataset.customValue);
  // };

  return (
    <div className={show ? "show" : "hide"}>
      <div className="ttt-board">
        <h1>Tic Tac Toe</h1>
        {/* <SelectPlayer handlePlayerSelection={handlePlayerSelection} /> */}
        <Board
          gameActive={gameActive}
          setGameActive={setGameActive}
          player1={player1}
          player2={player2}
          player1Turn={player1Turn}
          setPlayer1Turn={setPlayer1Turn}
          winCombos={winCombos}
        />
        <ReturnToMenu show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default TicTacToe;
