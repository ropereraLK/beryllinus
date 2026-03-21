"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import { LAYOUT_NAV_ITEMS } from "./layoutNav";

const WIDTH_PX = 240;

const drawerSx = {
  width: WIDTH_PX,
  flexShrink: 0,
  height: "100%",
  alignSelf: "stretch",
  [`& .MuiDrawer-paper`]: {
    width: WIDTH_PX,
    height: "100%",
    boxSizing: "border-box" as const,
    display: "flex",
    flexDirection: "column" as const,
    position: "relative" as const,
    borderRight: 1,
    borderColor: "divider",
  },
} as const;

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Drawer variant="permanent" sx={drawerSx}>
      <Typography
        variant="subtitle2"
        color="text.secondary"
        fontWeight={600}
        sx={{ px: 2, py: 1.5 }}
      >
        Menu
      </Typography>

      <Box component="nav" sx={{ flex: 1, overflow: "auto" }}>
        <List disablePadding sx={{ px: 1, pb: 1 }}>
          {LAYOUT_NAV_ITEMS.map(({ label, href }) => {
            const selected = pathname === href;

            return (
              <ListItem key={href} disablePadding sx={{ mb: 0.25 }}>
                <ListItemButton
                  component={Link}
                  href={href}
                  selected={selected}
                  aria-current={selected ? "page" : undefined}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      variant: "body2",
                      fontWeight: selected ? 600 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}

export { WIDTH_PX as APP_SIDEBAR_WIDTH };
