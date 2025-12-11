import { configureStore } from "@reduxjs/toolkit";
import psychologistsReducer from "./psychologists/psychologistsSlice";

export const store = configureStore({
  reducer: {
    psychologists: psychologistsReducer,
  },
});
