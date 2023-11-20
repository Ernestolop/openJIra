import { useContext } from "react";

import Link from "next/link";

import { AppBar, Toolbar, IconButton, Typography, Link as MuiLink } from "@mui/material";
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
                <Link href='/' passHref>
                    <Typography variant="h6" sx={{ color: 'white', textDecoration: 'none' }}>OpenJira</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;