import React, { useState } from "react";
import TopBar from "./topBar";
import Menu from "./menu";

const Header = () => {
  const [state, setState] = useState({
    open: false,
    logged_in: false,
  });

  const handleOpenMenu = (open) => {
    console.log("handling open menu", open);
    setState({ ...state, open: open });
  };

  return (
    <React.Fragment>
      <TopBar onOpenMenu={handleOpenMenu} />
      <Menu open={state.open} onCloseMenu={handleOpenMenu} />
    </React.Fragment>
  );
};

export default Header;
