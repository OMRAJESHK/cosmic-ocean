import React from "react";
import PropTypes from "prop-types";

import classes from "./flexbox.module.css";

const Flexbox = (props) => {
  const {
    gap = 0,
    justifyContent = "flex-start",
    alignItems = "flex-start",
    flexDirection = "row",
    classProp = "",
    children,
  } = props;
  return (
    <div
      className={`${classes.flex} ${classProp && classProp}`}
      style={{ gap: `${gap}px`, justifyContent, alignItems, flexDirection }}
    >
      {children}
    </div>
  );
};

Flexbox.propTypes = {
  gap: PropTypes.number,
  classProp: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node,
};

export default Flexbox;
