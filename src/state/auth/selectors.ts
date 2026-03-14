import { RootState } from "../store";

/** Base selector for the auth slice */
export const selectAuthState = (state: RootState) => state.auth;

/** Returns the logged-in user */
export const selectUser = (state: RootState) => state.auth.user;

/** Returns authentication status */
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

/** Returns loading state for auth operations */
export const selectAuthLoading = (state: RootState) => state.auth.isLoading;

/** Returns authentication error messages */
export const selectAuthError = (state: RootState) => state.auth.error;
