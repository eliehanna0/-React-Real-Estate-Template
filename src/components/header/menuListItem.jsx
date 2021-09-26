import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

let styles = makeStyles((theme) => ({
  active: {
    color: theme.palette.primary.main,
  },
}));

const MenuListItem = (props) => {
  const { icon, label, url, parentProps, active } = props;

  const c = styles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <div>
          <Link to={url} ref={ref} {...itemProps} />
        </div>
      )),
    [url]
  );

  MenuListItem.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };

  return (
    <ListItem
      button
      component={renderLink}
      onClick={() => parentProps.onCloseMenu(false)}
      className={active ? c.active : ""}
    >
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={label} />
    </ListItem>
  );
};

export default MenuListItem;
