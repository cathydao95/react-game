import "./ResetGame.css";

const ResetGame = ({
  setBoxes,
  setPlayer1Turn,
  setWinningBoxes,
  setGameActive,
  setIsDraw,
}) => {
  const resetGame = () => {
    setBoxes(new Array(9).fill(""));
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
