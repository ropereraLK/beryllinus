"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import ReduxProvider from "../providers/ReduxProvider";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </ReduxProvider>
  );
}