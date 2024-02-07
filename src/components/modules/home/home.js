"use client";
import React, { Fragment } from "react";

import BannerSection from "./components/banner";
import classes from "./home.module.css";
import { quotes } from "./constants";

import SolarSystem from "./components/solarSystem";
import Celestials from "./components/celestials";
import Blockquote from "./components/blockquote";

const Home = () => {
  return (
    <Fragment>
      <BannerSection />
      <div className={classes["container"]}>
        <SolarSystem />
        <Blockquote quote={quotes[0].quote} by={quotes[0].by} />
        <Celestials />
        <Blockquote quote={quotes[1].quote} by={quotes[1].by} />
      </div>
    </Fragment>
  );
};

export default Home;
