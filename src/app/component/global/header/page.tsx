import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Grid, Badge, Avatar
} from "@mui/material";

import MailIcon from '@mui/icons-material/Mail';

import avatar2 from 'assets/images/users/avatar-2.png';
import beryllinusLogo from "../../../../../assets/beryllinus-logo-1.png";


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between', gap: 2 }}>
                {/* Left */}
                <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 0, gap: 2 }}>
                    <Avatar alt="Beryllinus" src={beryllinusLogo.src} />
                    <Typography variant="h6" noWrap>Berylinus Pte Ltd</Typography>
                </Box>

                {/* Center */}
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }}>
                    {/* e.g. search, tabs, breadcrumbs */}
                </Box>

                {/* Right */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                    <Badge color="secondary" badgeContent={0} showZero>
                        <MailIcon />
                    </Badge>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Header;