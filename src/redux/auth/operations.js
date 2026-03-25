import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://nodejs-psychologis.onrender.com",
});

const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const {data} =await api.post("/users/sigup, credentials")
     =
    } catch (error) {}
  },
);
