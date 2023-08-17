import "./Form.css";

const Form = ({ getWord, checkGuess, guess }) => {
  return (
    <>
      <form className="input-container" onSubmit={checkGuess}>
        <input
          className="input"
          onChange={getWord}
          type="text"
          maxLength="5"
          minLength="5"
          value={guess}
          placeholder="Enter Guess"
        ></input>
      </form>
    </>
  );
};

export default Form;
