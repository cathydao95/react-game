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
  const [marked, setMarked] = useState(new Array(9).fill(false));
  const [winningBoxes, setWinningBoxes] = useState([]);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (player) => {
    const newWinningBoxes = [];
    winCombos.forEach((combo) => {
      const [a, b, c] = combo;
      if (boxes[a] === player && boxes[b] === player && boxes[c] === player) {
        console.log(a, b, c);
        newWinningBoxes.push(a, b, c);
        setGameActive(false);
        setWinningBoxes(newWinningBoxes);
      } else if (boxes.every((box) => box !== "")) {
        setGameActive(false);
        setIsDraw(true);
      }
    });
    // setWinningBoxes(newWinningBoxes);
  };

  // Is there a better way to implement this besides setting player1Turn to false from the start? Had to use useEffect because console was one step behind the DOM.
  useEffect(() => {
    checkWinner(player1Turn ? player1 : player2);
    setPlayer1Turn(!player1Turn);
  }, [boxes]);

  const markBox = (index) => {
    if (gameActive && boxes[index] === "") {
      let newBoxes = [...boxes];
      let checked = [...marked];
      newBoxes[index] = player1Turn ? player1 : player2;
      checked[index] = true;
      setBoxes((prevBoxes) => newBoxes);
      setMarked((prevMarked) => checked);
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
        setMarked={setMarked}
        setPlayer1Turn={setPlayer1Turn}
        setWinningBoxes={setWinningBoxes}
        setIsDraw={setIsDraw}
      />
    </>
  );
};

export default Board;
