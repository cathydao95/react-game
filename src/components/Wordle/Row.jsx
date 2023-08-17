import { useState, useEffect } from "react";
import Letter from "./Letter";
import "./Row.css";

const Row = ({ guess, word }) => {
  let answer = word.split("");

  let countDictionary = {};

  answer.forEach((letter) => {
    countDictionary[letter] = (countDictionary[letter] || 0) + 1;
  });

  let checkedAnswer = answer.map((letter) => "");

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      if (!checkedAnswer[i] && countDictionary[guess[i]] > 0) {
        countDictionary[guess[i]] = countDictionary[guess[i]] - 1;
        checkedAnswer[i] = "green";
      }
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (answer.includes(guess[i])) {
      if (!checkedAnswer[i] && countDictionary[guess[i]] > 0) {
        countDictionary[guess[i]] = countDictionary[guess[i]] - 1;
        checkedAnswer[i] = "yellow";
      } else if (!checkedAnswer[i] && countDictionary[guess[i]] === 0) {
        checkedAnswer[i] = "grey";
      }
    } else {
      checkedAnswer[i] = "grey";
    }
  }

  return (
    <div className="row">
      {guess.split("").map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={letter}
            checkedAnswer={checkedAnswer[index]}
          />
        );
      })}
    </div>
  );
};

export default Row;
