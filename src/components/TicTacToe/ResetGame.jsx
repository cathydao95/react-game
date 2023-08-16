import "./ResetGame.css";

const ResetGame = ({
  setBoxes,
  setMarked,
  setPlayer1Turn,
  setWinningBoxes,
  setGameActive,
  setIsDraw,
}) => {
  const resetGame = () => {
    setBoxes(new Array(9).fill(""));
    setMarked(new Array(9).fill(false));
    setGameActive(true);
    setWinningBoxes([]);
    setPlayer1Turn(false);
    setIsDraw(false);
  };
  return (
    <>
      <button className="ttt-reset" onClick={resetGame}>
        Play Again
      </button>
    </>
  );
};

export default ResetGame;
