import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { CssBaseline, makeStyles, MuiThemeProvider } from "@material-ui/core/";
import "./css/App.css";
import Header from "./components/header/header";
import PropertySingle from "./components/properties/property.single";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Head from "./components/common/head";
import theme from "./components/common/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Head title="" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/property/:id" component={PropertySingle} />
        </Switch>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default App;
