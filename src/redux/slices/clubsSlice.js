import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clubs: [],
};

export const clubSlice = createSlice({
  name: "clubs",
  initialState,
  reducers: {
    addClub: (state, action) => {
      state.clubs.push(action.payload);
    },
    deleteClub: (state, action) => {
      state.clubs = state.clubs.filter((club) => club.id !== action.payload);
    },
  },
});

export const { addClub, deleteClub } = clubSlice.actions;

export default clubSlice.reducer;
