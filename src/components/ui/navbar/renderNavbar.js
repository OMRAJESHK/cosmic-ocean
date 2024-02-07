import React, { Fragment } from "react";
import { cosmicNavbars } from "./constants";
import NavbarItem from "./renderNavItem";

const RenderNavbar = () => {
  return (
    <Fragment>
      {cosmicNavbars.map((navItem) => (
        <NavbarItem key={navItem.path} {...navItem} />
      ))}
    </Fragment>
  );
};

export default RenderNavbar;
