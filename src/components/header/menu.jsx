import React from "react";
import { Drawer, List, makeStyles, Typography } from "@material-ui/core";
import { HomeWork, Person, Smartphone } from "@material-ui/icons";
import MenuItem from "./menuItem";

const styles = makeStyles((theme) => ({
  list: {
    width: 250,
  },

  logo: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
}));

const list = (anchor, classes, parentProps) => (
  <div role="presentation" className={classes.list}>
    <List>
      <MenuItem
        list={true}
        url="/"
        label="PROPERTIES"
        icon={<HomeWork />}
        parentProps={parentProps}
      />
    </List>
  </div>
);

const Menu = (props) => {
  const c = styles();

  let open = props.open;

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => props.onCloseMenu(false)}
      >
        <Typography className={c.logo} variant="h5">
          React Real Estate
        </Typography>
        {list("left", c, props)}
      </Drawer>
    </React.Fragment>
  );
};

export default Menu;
