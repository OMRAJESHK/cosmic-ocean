"use client";
import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import classes from "./nearEarthObjects.module.css";
import Astroid from "@/assets/svgs/astroid";
import Flexbox from "@/components/ui/flexbox/flexbox";

import earth from "assets/images/neo/earth.png";
import CustomTable from "@/components/ui/customTable";
import { closeApproachesColumns, closeApproachesRows } from "./constants";

const NearEarthObject = ({ selectedRow = {} }) => {
  console.log("selectedRow", selectedRow);
  return (
    <div>
      <Flexbox
        alignItems="center"
        justifyContent="space-between"
        classProp={classes["earth-astroid-wrapper"]}
      >
        <div>
          <Image
            src={earth}
            width={130}
            height={130}
            alt="Picture of the author"
          />
        </div>
        <div className={classes["astroidsvg-wrapper"]}>
          <Astroid size={10} />
          <Astroid size={60} />
          <Astroid size={5} />
        </div>
      </Flexbox>
      <h4>{selectedRow?.name || ""}</h4>

      <Flexbox justifyContent="initial">
        <div className={classes["neo-details-flex-item-wrapper"]}>
          <h5>Orbital Class</h5>
          <label>AMOR</label>
          <hr />
          <h5>Estimated Diameter</h5>
          <label>2.1234 km</label>
          <hr />
        </div>
        <div className={classes["neo-details-flex-item-wrapper"]}>
          <h5>Is Potentially Hazardious</h5>
          <label>false</label>
          <hr />
          <h5>Is Potentially Hazardious</h5>
          <label>false</label>
          <hr />
        </div>
      </Flexbox>
      <div>
        <h5>Close Approaches</h5>
        <CustomTable
          classProp={classes["neo-table"]}
          columns={closeApproachesColumns}
          rows={closeApproachesRows}
          pagination={false}
        />
        <h5>Future Encounters</h5>
        <CustomTable
          classProp={classes["neo-table"]}
          columns={closeApproachesColumns}
          rows={closeApproachesRows}
          pagination={false}
        />
      </div>
    </div>
  );
};

NearEarthObject.propTypes = {
  selectedRow: PropTypes.object,
};
export default NearEarthObject;
