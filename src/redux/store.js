import { configureStore } from "@reduxjs/toolkit";
import clubReducer from "./slices/clubsSlice";

export const store = configureStore({
  reducer: {
    clubs: clubReducer,
  },
});
