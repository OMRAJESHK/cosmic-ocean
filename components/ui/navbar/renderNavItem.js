import React from "react";
import Link from "next/link";
import classes from "./navbar.module.css";
import PropTypes from "prop-types";

const NavbarItem = ({ path, label }) => {
  return (
    <Link className={classes["nav-link"]} href={path}>
      {label}
    </Link>
  );
};

NavbarItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
NavbarItem.default = {
  path: "/",
  label: "",
};

export default NavbarItem;
