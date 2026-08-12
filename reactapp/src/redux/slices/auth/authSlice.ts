import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User{
    id: string;
    username: string;
    roles: string [];
}

interface AuthState{
    isAuthenticated: boolean;
    user: User | null;
}

 const initialState:AuthState = {
    isAuthenticated: false,
    user: null,
 }

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        loginSuccess : (state, action: PayloadAction<User>)=>{
            state.isAuthenticated = true;
            state.user = action.payload

        }
    }
});

export const {
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;