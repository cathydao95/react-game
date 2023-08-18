import { useState, useEffect } from "react";
import Letter from "./Letter";
import "./Row.css";

const Row = ({ guess, word }) => {
  let answer = word.split("");

  let countDictionary = {};

  answer.forEach((letter) => {
    countDictionary[letter] = (countDictionary[letter] || 0) + 1;
  });

  // create an array that will keep track of the colors to provide for each letter
  let checkedAnswer = answer.map((letter) => "");

  // do a first check to take in account all correct placed words first
  for (let i = 0; i < guess.length; i++) {
    console.log("firstcheck", countDictionary);

    // reset count dictionary
    if (guess[i] === answer[i]) {
      if (!checkedAnswer[i] && countDictionary[guess[i]] > 0) {
        countDictionary[guess[i]] = countDictionary[guess[i]] - 1;
        checkedAnswer[i] = "green";
      }
    }
  }

  for (let i = 0; i < guess.length; i++) {
    console.log("secondcheck", countDictionary);

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

  console.log("globalcheck", countDictionary);

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
