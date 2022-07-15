import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let initialState = {
  currentGuess: "",
  solution: "",
  attempts: 0,
  guesses: Array(6).fill(null),
  isWinner: false,
  isGameOver: false,
  isNotWord: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSolution: (state, action) => {
      state.solution = action.payload;
    },
    addGuess: (state, action) => {
      const { index, guess } = action.payload;

      let newGuesses = [...state.guesses];

      newGuesses[index] = guess;
      state.guesses = newGuesses;
      if (state.attempts === 5) {
        state.isGameOver = true;
      }
      state.attempts += 1;
    },
    resetGame: (state, action) => {
      return (state = { ...initialState });
    },
    setCurrentGuess: (state, action) => {
      const { key, isLetter } = action.payload;
      if (key === "Backspace") {
        state.currentGuess = state.currentGuess.slice(0, -1);
      } else if (key === "Enter") {
        state.currentGuess = "";
      }
      if (isLetter) {
        state.currentGuess += key;
      }
    },
    setIsWinner: (state, action) => {
      const { isWinner, isGameOver } = action.payload;
      state.isWinner = isWinner;
      state.isGameOver = isGameOver;
    },
    setIsNotWord: (state, action) => {
      state.isNotWord = action.payload;
      if (state.isNotWord) {
        toast.error(`Not A Word`, {
          position: "bottom-left",
        });
      }
    },
  },
});

const { actions, reducer } = gameSlice;

export const {
  setSolution,
  addGuess,
  resetGame,
  setCurrentGuess,
  setIsWinner,
  setIsNotWord,
} = actions;
export default reducer;
