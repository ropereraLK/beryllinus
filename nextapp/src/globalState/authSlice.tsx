import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string;
        user: User;
      }>,
    ) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

// Default export is the reducer of the slice
export default authSlice.reducer;

 
