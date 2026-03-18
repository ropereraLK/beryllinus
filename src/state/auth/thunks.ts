import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/authService";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      return await login(email, password);

    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  }
);