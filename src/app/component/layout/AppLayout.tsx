"use client";

import { ReactNode } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

const drawerWidth = 240;

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (<Box sx={{ display: "flex" }}>
        {/* SIDEBAR */}
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: {
                    width: drawerWidth,
                },
            }}
        >
            <Toolbar />
            <List>
                {["Dashboard", "Users", "Settings"].map((text) => (
                    <ListItem key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
        {/* MAIN AREA */}
      <Box sx={{ flexGrow: 1 }}>
        
        {/* HEADER */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Dashboard</Typography>
          </Toolbar>
        </AppBar>

        {/* CONTENT */}
        <Box sx={{ p: 3 }}>
          {children}
        </Box>

      </Box>

    </Box >);
}

export default AppLayout;