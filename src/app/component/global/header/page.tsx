"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Badge,
  Avatar,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

import beryllinusLogo from "../../../../../assets/beryllinus-logo-1.png";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", minWidth: 0, gap: 2 }}>
          <Avatar alt="Beryllinus" src={beryllinusLogo.src} />
          <Typography variant="h6" noWrap>
            Berylinus Pte Ltd
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 0 }} />

        <Box sx={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
          <Badge color="secondary" badgeContent={0} showZero>
            <MailIcon />
          </Badge>
          <Avatar alt="User" src="/static/images/avatar/2.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
