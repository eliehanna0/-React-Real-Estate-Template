import React from "react";
import MenuItem from "./menuItem";

const TopMenu = () => {
  return (
    <React.Fragment>
      <MenuItem url="/" label="Properties" />
      <MenuItem url="/about" label="About Us" />
    </React.Fragment>
  );
};

export default TopMenu;
