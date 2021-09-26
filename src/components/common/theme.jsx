import { createMuiTheme, responsiveFontSizes, colors } from "@material-ui/core";


const theme = createMuiTheme({
  palette: {
    primary: { main: colors.green[400] },
    secondary: { main: colors.grey[300] },
  },
});

export default responsiveFontSizes(theme);
