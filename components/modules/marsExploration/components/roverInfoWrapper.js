import React from "react";
import PropTypes from "prop-types";
import classes from "../marsExploration.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";
import OrbitalTitle from "../../nearEarthObjects/components/orbitalTitle";

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
          <OrbitalTitle
            title="Is Active"
            subTitle={roverObj?.isActive ? "Yes" : "No"}
          />
          <div></div>
          <OrbitalTitle title="Landing Site" subTitle={roverObj?.landingSite} />
        </ModelItemWrapper>
        <ModelItemWrapper>
          <OrbitalTitle title="Launch Date" subTitle={roverObj?.launchDate} />
          <OrbitalTitle title="Landing Date" subTitle={roverObj?.landingDate} />
        </ModelItemWrapper>
      </Flexbox>
      <p className={classes["sol-info"]}>
        <strong>*Sol</strong> is a solar day on Mars. A sol is slightly longer
        than an Earth day. It is approximately 24 hours, 39 minutes, 35 seconds
        long.
      </p>
    </div>
  );
};

RoverInfoWrapper.propTypes = { roverObj: PropTypes.object };
ModelItemWrapper.propTypes = { children: PropTypes.node };
ModelItem.propTypes = { label: PropTypes.string, value: PropTypes.string };

export default RoverInfoWrapper;
