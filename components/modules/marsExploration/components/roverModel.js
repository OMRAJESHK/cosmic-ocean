import React from "react";
import PropTypes from "prop-types";
import classes from "../marsExploration.module.css";

const RoverModel = ({ selectedRoverObj }) => {
  return (
    <div className={classes["rover-model"]}>
      <iframe src={selectedRoverObj?.model} width="100%" height="500px" />
    </div>
  );
};
RoverModel.propTypes = {
  selectedRoverObj: PropTypes.object,
};
export default RoverModel;
