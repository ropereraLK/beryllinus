import { configureStore, Tuple } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

//create config store
// 1. with reducer of slices
const globalStateStore = configureStore({
  reducer: {
    // reducer of auth slice
    auth: authReducer,
  },
});
export default globalStateStore;
