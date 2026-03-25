import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://nodejs-psychologis.onrender.com";

export const fetchPsychologists = createAsyncThunk(
  "psychologists/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/psychologists");
      console.log("BACKEND RESPONSE:", response.data);
      return response.data.data;
    } catch (error) {
      console.error("REQUEST ERROR:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPsychologistById = createAsyncThunk(
  "psychologists/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/psychologists/${id}`);
      console.log("BACKEND RESPONSE ID:", response.data);
      return response.data;
    } catch (error) {
      console.error("REQUEST ERROR:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
