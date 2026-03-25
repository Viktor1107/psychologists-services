import { createSlice } from "@reduxjs/toolkit";
import { fetchPsychologistById, fetchPsychologists } from "../operations";

const psychologistsSlice = createSlice({
  name: "psychologists",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPsychologists.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPsychologists.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPsychologists.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchPsychologistById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPsychologistById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchPsychologistById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default psychologistsSlice.reducer;
