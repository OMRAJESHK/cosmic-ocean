import React from "react";
import classes from "../home.module.css";

const BannerSection = () => {
  return (
    <div className={classes["banner-section"]}>
      <div className={classes["banner-content"]}>
        <h1>A Cosmic Odyssey: Touring the Celestial Neighborhood.</h1>
        <p>
          Set Sail on a Cosmic Quest for Knowledge. Discover the Universe from
          the Comfort of Your Screen.
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
