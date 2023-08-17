const Form = ({ getWord, checkGuess, guess }) => {
  return (
    <div>
      <form onSubmit={checkGuess}>
        <input
          onChange={getWord}
          type="text"
          maxLength="5"
          minLength="5"
          value={guess}
        ></input>
      </form>
    </div>
  );
};

export default Form;
