import Box from "./Box";
import { useState, useEffect } from "react";
import "./Board.css";
import ResetGame from "./ResetGame";

const Board = ({
  gameActive,
  setGameActive,
  player1,
  player2,
  player1Turn,
  setPlayer1Turn,
  winCombos,
}) => {
  const [boxes, setBoxes] = useState(new Array(9).fill(""));
  const [winningBoxes, setWinningBoxes] = useState([]);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = () => {
    let player = player1Turn ? "X" : "O";
    const newWinningBoxes = [];
    winCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (boxes[a] === player && boxes[b] === player && boxes[c] === player) {
        newWinningBoxes.push(a, b, c);
        setGameActive(false);
        setWinningBoxes(newWinningBoxes);
      } else if (boxes.every((box) => box !== "")) {
        setGameActive(false);
        setIsDraw(true);
      }
    });
  };

  useEffect(() => {
    checkWinner();
    setPlayer1Turn(!player1Turn);
  }, [boxes]);

  const markBox = (index) => {
    if (gameActive && boxes[index] === "") {
      let newBoxes = [...boxes];
      newBoxes[index] = player1Turn ? player1 : player2;
      setBoxes(newBoxes);
    }
  };

  return (
    <>
      <div className="board">
        {boxes.map((box, index) => {
          return (
            <Box
              key={index}
              index={index}
              gameActive={gameActive}
              markBox={markBox}
              box={box}
              isWinningBox={winningBoxes.includes(index)}
              isDraw={isDraw}
            />
          );
        })}
      </div>
      <ResetGame
        setGameActive={setGameActive}
        setBoxes={setBoxes}
        setPlayer1Turn={setPlayer1Turn}
        setWinningBoxes={setWinningBoxes}
        setIsDraw={setIsDraw}
      />
    </>
  );
};

export default Board;
