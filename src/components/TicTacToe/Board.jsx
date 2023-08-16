import Box from "./Box";
import { useState } from "react";
import "./Board.css";

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

  // WHY ISNT CHECK WINNER WORKING??? not taking in account first click
  const checkWinner = (player) => {
    winCombos.forEach((combo) => {
      const [a, b, c] = combo;
      console.log(a, b, c, boxes[a], boxes[b], boxes[c]);
      if (boxes[a] === player && boxes[b] === player && boxes[c] === player) {
        console.log("winner");
      } else {
        console.log("no");
      }
    });
  };

  // const markBox = (index) => {
  //   if (gameActive) {
  //     let newBoxes = [...boxes];
  //     let checked = [...marked];
  //     if (player1Turn && marked[index] !== true) {
  //       newBoxes[index] = player1;
  //       setBoxes((prevBoxes) => newBoxes);
  //       setPlayer1Turn(false);
  //       checked[index] = true;
  //       setMarked((prevMarked) => checked);
  //       checkWinner(player1);
  //     }

  //     if (!player1Turn && marked[index] !== true) {
  //       newBoxes[index] = player2;
  //       setBoxes((prevBoxes) => newBoxes);
  //       checked[index] = true;
  //       setMarked((prevMarked) => checked);
  //       setPlayer1Turn(true);
  //       checkWinner(player2);
  //     }

  //     // checkDraw();
  //   }
  // };

  const markBox = (index) => {
    if (gameActive && boxes[index] === "") {
      let newBoxes = [...boxes];
      let checked = [...marked];
      newBoxes[index] = player1Turn ? player1 : player2;
      setBoxes((prevBoxes) => newBoxes);
      player1Turn ? setPlayer1Turn(false) : setPlayer1Turn(true);
      checked[index] = true;
      setMarked((prevMarked) => checked);
      // checkWinner()

      // checkDraw();
    }
  };

  return (
    <div className="board">
      {boxes.map((box, index) => {
        return (
          <Box
            key={index}
            index={index}
            gameActive={gameActive}
            markBox={markBox}
            box={box}
          />
        );
      })}
    </div>
  );
};

export default Board;
