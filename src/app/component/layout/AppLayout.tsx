"use client";

import type { ReactNode } from "react";
import Box from "@mui/material/Box";

import Header from "@/app/component/global/header/page";

import AppSidebar from "./AppSidebar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
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
        <Header />
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
            minWidth: 0,
            overflow: "auto",
            p: 3,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
