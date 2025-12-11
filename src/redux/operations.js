import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://nodejs-psychologis.onrender.com";

export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/psychologists");
      console.log("BACKEND RESPONSE:", response.data);
      return response.data.data.data;
    } catch (err) {
      console.error("REQUEST ERROR:", err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
