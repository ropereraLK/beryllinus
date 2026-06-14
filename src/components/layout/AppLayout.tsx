"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";

import AppHeader from "./AppHeader";

import AppSidebar from "./AppSidebar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        minWidth: 0,
        overflow: "hidden",
      }}
    >
      {/* Full viewport width */}
      <Box
        component="header"
        sx={{
          flexShrink: 0,
          width: "100%",
        }}
      >
        <AppHeader />
      </Box>

      {/* Sidebar + main below header */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          minHeight: 0,
          minWidth: 0,
        }}
      >
        <AppSidebar />

        <Box
          component="main"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            minHeight: 0,
            overflow: "auto",
            p: { xs: 1.5, sm: 2, md: 3 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
