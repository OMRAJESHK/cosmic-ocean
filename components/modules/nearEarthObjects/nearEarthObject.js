"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import classes from "./nearEarthObjects.module.css";
import Astroid from "@/assets/svgs/astroid";
import Flexbox from "@/components/ui/flexbox/flexbox";

import earth from "assets/images/neo/earth.png";
import CustomTable from "@/components/ui/customTable";
import { closeApproachesColumns } from "./constants";
import { formatDecimal } from "@/utils/commons";

const NearEarthObject = ({ selectedRow = {} }) => {
  const [closeApproach, setCloseApproach] = useState({ past: [], future: [] });

  const getCloseApproach = () => {
    const currentYear = new Date().getFullYear();
    const closeApproachData = selectedRow?.close_approach_data || [];
    const updatedApproaches = { past: [], future: [] };
    const LIMIT = 5;
    let pastCount = 0;
    let futureCount = 0;

    for (const item of closeApproachData) {
      if (pastCount < LIMIT || futureCount < LIMIT) {
        const itemDate = new Date(item.close_approach_date).getFullYear();
        item.relative_velocity = `${formatDecimal(
          item.relative_velocity.kilometers_per_second,
        )} km/s`;
        item.miss_distance = `${formatDecimal(
          item.miss_distance.astronomical,
          4,
        )} AU`;
        if (itemDate < currentYear) {
          if (pastCount < LIMIT) {
            updatedApproaches.past = [...updatedApproaches.past, item];
            pastCount++;
          }
        } else {
          if (futureCount < LIMIT) {
            updatedApproaches.future = [...updatedApproaches.future, item];
            futureCount++;
          }
        }
      } else {
        break;
      }
    }

    setCloseApproach(updatedApproaches);
  };

  useEffect(() => {
    getCloseApproach();
  }, []);

  return (
    <div>
      <Flexbox
        alignItems="center"
        justifyContent="space-between"
        classProp={classes["earth-astroid-wrapper"]}
      >
        <div className={classes["earth-img-wrapper"]}>
          <Image
            src={earth}
            width={130}
            height={130}
            alt="Picture of the author"
          />
        </div>
        <div className={classes["neo-distance-wrapper"]}>
          <div className={classes["neo-details-desc-wrapper"]}>
            <i>Orbital Period (in days)</i>
            <strong>{selectedRow.orbital_period}</strong>
          </div>
          <div className={classes["neo-details-desc-wrapper"]}>
            <i>Perihelion Distance</i>
            <strong>{selectedRow.perihelion_distance}</strong>
          </div>
          <div className={classes["neo-details-desc-wrapper"]}>
            <i>Aphelion Distance</i>
            <strong>{selectedRow.aphelion_distance}</strong>
          </div>
        </div>
        <div className={classes["astroidsvg-wrapper"]}>
          <Astroid size={10} />
          <Astroid size={60} />
          <Astroid size={5} />
        </div>
      </Flexbox>

      <Flexbox>
        <div className={classes["neo-details-desc-wrapper"]}>
          <i>Is Potentially Hazardious</i>
          <strong>{selectedRow.is_potentially_hazardous_asteroid}</strong>
          <hr />
        </div>
        <div className={classes["neo-details-desc-wrapper"]}>
          <i>Estimated Diameter</i>
          <strong>{selectedRow.estimated_diameter}</strong>
          <hr />
        </div>

        <div className={classes["neo-details-desc-wrapper"]}>
          <i>First Observed</i>
          <strong>{selectedRow.first_observation_date}</strong>
          <hr />
        </div>
        <div className={classes["neo-details-desc-wrapper"]}>
          <i>Last Observed</i>
          <strong>{selectedRow.last_observation_date}</strong>
          <hr />
        </div>
      </Flexbox>

      <div>
        <h5>Close Approaches</h5>
        <CustomTable
          classProp={classes["neo-table"]}
          columns={closeApproachesColumns}
          rows={closeApproach.past}
          pagination={false}
        />
        <h5>Future Encounters</h5>
        <CustomTable
          classProp={classes["neo-table"]}
          columns={closeApproachesColumns}
          rows={closeApproach.future}
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
