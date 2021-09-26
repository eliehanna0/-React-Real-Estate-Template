import React from "react";
import { Route, Switch } from "react-router-dom";
import { CssBaseline, makeStyles, MuiThemeProvider } from "@material-ui/core/";
import Home from "./components/home/home";

const App = () => {
  return (
    <React.Fragment>
      <MuiThemeProvider>
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </MuiThemeProvider>
    </React.Fragment>
  );
};

export default App;
