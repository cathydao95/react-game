import { useState, useEffect } from "react";
import Form from "./Form";
import Row from "./Row";

const Board = () => {
  let word = "paste";
  const [guess, setGuess] = useState("");
  const [guessHistory, setGuessHistory] = useState([]);
  const [wordleActive, setWordleActive] = useState(true);
  const [remainingGuess, setremainingGuess] = useState(6);

  const checkGuess = (e) => {
    e.preventDefault();
    if (guess === word || remainingGuess === 1) {
      setWordleActive(false);
    }
    wordleActive && setGuessHistory((prevHistory) => [...prevHistory, guess]);
    setremainingGuess((prev) => prev - 1);
    setGuess("");
  };
  console.log("remainguess", remainingGuess);

  const getWord = (e) => {
    // console.log(e.target.value);
    wordleActive && setGuess(e.target.value);
  };

  return (
    <>
      <div>Board</div>
      <Form getWord={getWord} checkGuess={checkGuess} guess={guess} />
      {guessHistory?.map((guess, index) => {
        return <Row key={index} guess={guess} word={word} />;
      })}
      <h3>
        {remainingGuess > 0
          ? `Remaining Guesses: ${remainingGuess}`
          : `Game Over`}
      </h3>
    </>
  );
};

export default Board;
