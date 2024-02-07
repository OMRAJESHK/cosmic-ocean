import React from "react";
import PropTypes from "prop-types";
import classes from "./loader.module.css";

const Loader = ({ height = "200px" }) => {
  return (
    <section
      className={classes["loader-wrapper"]}
      style={{ height }}
      data-testid="spinning-loader"
    >
      <span className={classes["loader"]} />
    </section>
  );
};
Loader.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Loader;
