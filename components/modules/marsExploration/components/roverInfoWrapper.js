import React from "react";
import PropTypes from "prop-types";
import classes from "../marsExploration.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";

const ModelItemWrapper = ({ children = undefined }) => {
  return <div className={classes["model-flex-item-wrapper"]}>{children}</div>;
};
const ModelItem = ({ label = "", value = "" }) => {
  return (
    <>
      <h5>{label}</h5>
      <label>{value}</label>
      <hr />
    </>
  );
};

const RoverInfoWrapper = ({ roverObj = {} }) => {
  return (
    <div className={classes["rover-additional-info-wrapper"]}>
      <Flexbox justifyContent="initial">
        <ModelItemWrapper>
          <ModelItem
            label="Is Active"
            value={roverObj?.isActive ? "Yes" : "No"}
          />
          <ModelItem label="Landing Site" value={roverObj?.landingSite} />
        </ModelItemWrapper>
        <ModelItemWrapper>
          <ModelItem label="Launch Date" value={roverObj?.launchDate} />
          <ModelItem label="Landing Date" value={roverObj?.landingDate} />
        </ModelItemWrapper>
      </Flexbox>
      <p className={classes["sol-info"]}>
        <strong>*Sol</strong> is a solar day on Mars.A sol is slightly longer
        than an Earth day.
      </p>
    </div>
  );
};

RoverInfoWrapper.propTypes = { roverObj: PropTypes.object };
ModelItemWrapper.propTypes = { children: PropTypes.node };
ModelItem.propTypes = { label: PropTypes.string, value: PropTypes.string };

export default RoverInfoWrapper;
