import React from "react";
import { useEffect } from "react";
import GameOverModal from "./GameOverModal";
import Line from "./Line";
import { useSelector, useDispatch } from "react-redux";
import {
  addGuess,
  setCurrentGuess,
  setIsWinner,
  setSolution,
  setIsNotWord,
} from "../Store/gameSlice";
import { checkIsLetter, checkIsWord } from "../utils/validate";

import words from "../utils/words";

function Board() {
  // const [solution, setSolution] = useState("");

  const { guesses, currentGuess, isGameOver, attempts, solution } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const fetchWords = (words) => {
    let randomWord = words[Math.floor(Math.random() * words.length)];

    dispatch(setSolution(randomWord));
  };

  useEffect(() => {
    fetchWords(words);
  }, []);

  useEffect(() => {
    const handleType = (event) => {
      let isLetter = checkIsLetter(event.key);

      if (isGameOver) {
        return;
      }
      if (event.key === "Enter") {
        if (currentGuess.length !== 5) {
          return;
        }

        let currentIndex = guesses.findIndex((val) => val == null);
        if (!checkIsWord(currentGuess)) {
          dispatch(setIsNotWord(true));
          return;
        }
        dispatch(setIsNotWord(false));
        dispatch(addGuess({ index: currentIndex, guess: currentGuess }));
        dispatch(setCurrentGuess({ key: event.key, isLetter }));

        if (attempts === 6) {
          dispatch(setIsWinner({ isWinner: false, isGameOver: true }));
        }

        const isCorrect = currentGuess === solution;
        if (isCorrect) {
          dispatch(setIsWinner({ isWinner: true, isGameOver: true }));
        }
      }

      if (event.key === "Backspace") {
        dispatch(setCurrentGuess({ key: event.key, isLetter }));
      }
      if (currentGuess.length >= 5) {
        return;
      }
      dispatch(setCurrentGuess({ key: event.key.toLowerCase(), isLetter }));
    };

    document.addEventListener("keydown", handleType);
    return () => document.removeEventListener("keydown", handleType);
  }, [currentGuess, isGameOver, solution, guesses, attempts, dispatch]);

  return (
    <div className={isGameOver ? "overlay" : ""}>
      <div className="container">
        <div className="board  ">
          {guesses.map((guess, i) => {
            const isCurrentGuess =
              i === guesses.findIndex((val) => val == null);

            return (
              <Line
                key={i}
                guess={isCurrentGuess ? currentGuess : guess ?? ""}
                isFinal={!isCurrentGuess && guess != null}
                solution={solution}
              />
            );
          })}
        </div>
      </div>

      {isGameOver && <GameOverModal fetchWords={fetchWords} />}
    </div>
  );
}

export default Board;
