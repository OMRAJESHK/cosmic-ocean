import React, { Fragment } from "react";
import Link from "next/link";
import { cosmicNavbars } from "./constants";
import classes from "./navbar.module.css";
import { useRouter } from "next/router";
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
