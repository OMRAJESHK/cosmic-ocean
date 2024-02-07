import React from "react";
import PropTypes from "prop-types";
import classes from "../home.module.css";

const Blockquote = (props) => {
  const { quote = "", by = "" } = props;
  return (
    <blockquote className={classes["space-blockquote"]}>
      {quote}
      <span>{by}</span>
    </blockquote>
  );
};

Blockquote.propTypes = {
  quote: PropTypes.string,
  by: PropTypes.string,
};

export default Blockquote;
