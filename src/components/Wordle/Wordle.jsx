import React from "react";
import Board from "./Board";
import "./Wordle.css";
import ReturnToMenu from "../ReturnToMenu";

const Wordle = ({ show, setShow }) => {
  return (
    <div className={`wordle-container ${show ? "show" : "hide"}`}>
      <h1>Guess The Word!</h1>
      <Board />
      <ReturnToMenu show={show} setShow={setShow} />
    </div>
  );
};

export default Wordle;
