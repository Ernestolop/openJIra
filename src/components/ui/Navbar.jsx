import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const Navbar = () => {
    return (
        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton
                    size='large'
                    edge="start"
                >
                    <MenuRoundedIcon />
                </IconButton>
                <Typography variant="h6">OpenJira</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;