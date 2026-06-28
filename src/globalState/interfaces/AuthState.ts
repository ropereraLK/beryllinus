interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
}