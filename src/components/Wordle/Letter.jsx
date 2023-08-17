import React from "react";
import "./Letter.css";

const Letter = ({ letter, checkedAnswer }) => {
  return (
    <>
      <div className={`letter ${checkedAnswer}`}>{letter}</div>
    </>
  );
};

export default Letter;
