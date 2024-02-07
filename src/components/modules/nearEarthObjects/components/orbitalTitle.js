import React from "react";
import PropTypes from "prop-types";
import classes from "../nearEarthObjects.module.css";

const OrbitalTitle = ({ title = "", subTitle = "" }) => {
  return (
    <div className={classes["orbit-class-title-wrapper"]}>
      <h6>
        <em>{title}</em>
      </h6>
      <strong>{subTitle}</strong>
    </div>
  );
};

OrbitalTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default OrbitalTitle;
