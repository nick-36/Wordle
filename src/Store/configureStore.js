import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";

const store = configureStore({
  reducer: gameReducer,
});

export default store;
