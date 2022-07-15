import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetGame } from "../Store/gameSlice";
import words from "../utils/words";

function GameOverModal({ fetchWords }) {
  const { isWinner, solution } = useSelector((state) => state);
  const dispatch = useDispatch();

  const playAgain = (e) => {
    e.preventDefault();
    dispatch(resetGame());
    fetchWords(words);
    // setGuesses(Array(6).fill(null));

    // setCurrentGuess("");
    // setIsGameOver(false);
  };

  function onKeyDown(e) {
    if (e.charCode || e.keyCode === 13) {
      e.preventDefault();
    }
  }
  return (
    <div className="result">
      <div className="result_content">
        {isWinner ? (
          <h2>Congratulaion! You're Guess Is Correct!</h2>
        ) : (
          <h2>
            Better Luck Next Time! Correct Word Was{" "}
            <span className="solution">{solution}</span>
          </h2>
        )}
        <div className="play_again">
          <form action="" onKeyDown={onKeyDown}>
            <button
              type="submit"
              onClick={playAgain}
              className="btn-play_again"
            >
              Play Again
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GameOverModal;
