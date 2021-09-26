import React from "react";
import {
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  makeStyles,
  Grid,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import TopMenu from "./topMenu";

////////////////////////

let useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
  },
  toolbar: {
    minHeight: 160,
    alignItems: "stretch",
    paddingTop: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(1),
    textAlign: "center",
    flexGrow: 1,
  },
  container: {},
}));

const TopBar = (props) => {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      position="static"
      color="transparent"
      elevation={1}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container className={classes.container}>
          <Grid item container xs={12}>
            <Hidden mdUp>
              <Grid item xs={1}>
                <IconButton
                  className={classes.menuButton}
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => props.onOpenMenu(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>

            <Grid item xs>
              <Typography
                variant="h4"
                color="primary"
                className={classes.title}
              >
                React Real Estate Template
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Hidden smDown>
              <TopMenu />
            </Hidden>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
