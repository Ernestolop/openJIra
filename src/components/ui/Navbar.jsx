import { useContext } from "react";

import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import { UIContext } from "@/context/ui";

const Navbar = () => {

    const { openSideMenu } = useContext(UIContext);

    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge="start"
                    onClick={() => openSideMenu()}
                >
                    <MenuRoundedIcon />
                </IconButton>
                <Typography variant="h6">OpenJira</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;