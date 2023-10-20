import React from "react";
import PropTypes from "prop-types";

import classes from "./flexbox.module.css";

const Flexbox = (props) => {
  const { gap, justifyContent, alignItems, children, flexDirection } = props;
  return (
    <div
      className={classes.flex}
      style={{ gap: `${gap}px`, justifyContent, alignItems, flexDirection }}
    >
      {children}
    </div>
  );
};

Flexbox.propTypes = {
  gap: PropTypes.number,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node,
};

Flexbox.defaultProps = {
  gap: 0,
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexDirection: "row",
  children: {},
};

export default Flexbox;
