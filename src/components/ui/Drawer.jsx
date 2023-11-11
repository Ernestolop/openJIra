import { useContext } from "react";

import { Drawer as MaterialDrawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material"
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';

import { UIContext } from "@/context/ui";

const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];

const Drawer = () => {

    const { sideMenuOpen, openSideMenu, closeSideMenu } = useContext(UIContext);

    return (
        <MaterialDrawer
            anchor="left"
            open={sideMenuOpen}
            onClose={() => closeSideMenu()}

        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>
                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxIcon /> : <EmailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))
                    }
                </List>
                <Divider />
            </Box>
        </MaterialDrawer>
    )
}

export default Drawer;