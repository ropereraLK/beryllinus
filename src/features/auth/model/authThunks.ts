import { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { login } from "../api/authApi";
import type { User } from "./types";

export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await login(email, password);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const message =
          typeof error.response?.data === "string"
            ? error.response.data
            : error.response?.data?.message;

        return rejectWithValue(message ?? "Login failed");
      }

      return rejectWithValue("Login failed");
    }
  }
);
