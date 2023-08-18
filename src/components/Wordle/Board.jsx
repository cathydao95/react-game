import { useState, useEffect } from "react";
import Form from "./Form";
import Row from "./Row";

const Board = () => {
  // hard-coded answer
  let word = "paste";
  // user's guess
  const [guess, setGuess] = useState("");
  // history of all guesses to be displayed by rows
  const [guessHistory, setGuessHistory] = useState([]);
  const [wordleActive, setWordleActive] = useState(true);
  const [remainingGuess, setremainingGuess] = useState(6);

  useEffect(() => {
    console.log("testing useEffect");
  }, []);
  // on submit run checkGuess to check if guess is correct and to add new guess to history
  const checkGuess = (e) => {
    e.preventDefault();

    if (guess === word || remainingGuess === 1) {
      setWordleActive(false);
    }
    wordleActive && setGuessHistory((prevHistory) => [...prevHistory, guess]);
    setremainingGuess((prev) => prev - 1);
    setGuess("");
  };

  console.log("remain guesses", remainingGuess);

  const getWord = (e) => {
    wordleActive && setGuess(e.target.value);
  };

  return (
    <>
      <Form getWord={getWord} checkGuess={checkGuess} guess={guess} />
      {guessHistory?.map((guess, index) => {
        return <Row key={index} guess={guess} word={word} />;
      })}
      <h3
        className="game-message"
        style={{
          color: "black",
          fontSize: "1.5rem",
          letterSpacing: ".15rem",
          textTransform: "uppercase",
          lineHeight: "2.5rem",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {remainingGuess > 0
          ? wordleActive
            ? `Remaining Guesses: ${remainingGuess}`
            : `You Won! The word is ${word.toUpperCase()}`
          : `Game Over`}
      </h3>
    </>
  );
};

export default Board;
