import type { RootState } from "../../store";

export const selectIsAuthenticated = (
  state: RootState
) => state.auth.isAuthenticated;

export const selectCurrentUser = (
  state: RootState
) => state.auth.user;