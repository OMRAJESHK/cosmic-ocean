import React from "react";
import classes from "./home.module.css";

const BannerSection = () => {
  return (
    <div className={classes["banner-section"]}>
      <div className={classes["banner-content"]}>
        <h1>
          You can create full screen banner sections without use of javascript.
        </h1>
        <p>its great, Resize your browser and see how they adapt.</p>
      </div>
    </div>
  );
};

export default BannerSection;
