import React from "react";
import Board from "./Board";
import "./Wordle.css";
import ReturnToMenu from "../ReturnToMenu";

const Wordle = ({ show, setShow }) => {
  return (
    <div className={`wordle-container ${show ? "show" : "hide"}`}>
      <h1
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          textTransform: "uppercase",
          letterSpacing: ".25rem",
        }}
      >
        Guess The Word!
      </h1>
      <Board />
      <ReturnToMenu show={show} setShow={setShow} />
    </div>
  );
};

export default Wordle;
