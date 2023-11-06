import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: grey[300]
        }
    }
});

export default lightTheme;