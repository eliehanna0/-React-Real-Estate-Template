import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Link from "react-router-link-nostack";
import MenuListItem from "./menuListItem";

let styles = makeStyles((theme) => ({
  button: {
    padding: "6px 28px",
  },
}));

const MenuItem = (props) => {
  let c = styles();
  const { url, label, active, list = false } = props;
  return (
    <React.Fragment>
      {!list && (
        <Button
          // component={Link}
          color={active ? "primary" : "default"}
          className={c.button}
        >
          <Link to={url}>{label}</Link>
        </Button>
      )}
      {list && <MenuListItem {...props} />}
    </React.Fragment>
  );
};

export default withRouter(({ location, ...props }) => {
  const active = location.pathname === props.url;

  return <MenuItem {...props} active={active} />;
});

//export default MenuItem;
