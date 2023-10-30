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
    title = "",
  } = props;
  return (
    <div
      title={title}
      className={`${classes.flex} ${classProp && classProp}`}
      style={{ gap: `${gap}px`, justifyContent, alignItems, flexDirection }}
    >
      {children}
    </div>
  );
};

Flexbox.propTypes = {
  gap: PropTypes.number,
  title: PropTypes.string,
  classProp: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node,
};

export default Flexbox;
