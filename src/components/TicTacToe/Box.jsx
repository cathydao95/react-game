import "./Box.css";

const Box = ({ markBox, index, box, isWinningBox, isDraw }) => {
  return (
    <>
      <div
        className={`box ${isWinningBox ? "win" : ""} ${isDraw ? "draw" : ""}`}
        onClick={() => markBox(index)}
      >
        {box}
      </div>
    </>
  );
};

export default Box;
