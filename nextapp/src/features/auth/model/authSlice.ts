import { createSlice } from "@reduxjs/toolkit";

import { loginUser } from "./authThunks";
import type { AuthState } from "./types";

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = action.payload ?? "Login failed";
            });
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;
