"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import classes from "./nearEarthObjects.module.css";
import Astroid from "@/assets/svgs/astroid";
import Flexbox from "@/components/ui/flexbox/flexbox";

import earth from "assets/images/neo/earth.png";
import CustomTable from "@/components/ui/customTable";
import {
  closeApproachesColumns,
  getCloseApproaches,
  neoDetailsDesc,
} from "./constants";
import OrbitalTitle from "./components/orbitalTitle";

const NeoDetailsDescWrapper = ({ title = "", value }) => {
  return (
    <div className={classes["neo-details-desc-wrapper"]}>
      <i>{title}</i>
      <strong>{value}</strong>
    </div>
  );
};

const NeoDistanceWrapper = ({ data = [], selectedRow = {} }) => {
  if (data.length > 0)
    return (
      <div className={classes["neo-distance-wrapper"]}>
        {data.map((description) => (
          <NeoDetailsDescWrapper
            key={description.id}
            title={description.title}
            value={selectedRow[description.value]}
          />
        ))}
      </div>
    );
};

const NearEarthObject = ({ selectedRow = {} }) => {
  const [closeApproach, setCloseApproach] = useState({ past: [], future: [] });
  const neoDescriptions = neoDetailsDesc.filter((item) => item.id >= 3);

  useEffect(() => {
    if (Object.keys(selectedRow).length > 0) {
      const closeApproaches = getCloseApproaches(selectedRow);
      setCloseApproach(closeApproaches);
    }
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
          <NeoDistanceWrapper
            data={neoDetailsDesc.filter((item) => item.id < 3)}
            selectedRow={selectedRow}
          />
        </div>
        <div className={classes["astroidsvg-wrapper"]}>
          <Astroid size={10} />
          <Astroid size={60} />
          <Astroid size={5} />
        </div>
      </Flexbox>
      <Flexbox>
        {neoDescriptions.map((neoDescription) => (
          <div
            key={neoDescription.id}
            className={classes["neo-details-desc-wrapper"]}
          >
            <OrbitalTitle
              title={neoDescription.title}
              subTitle={selectedRow[neoDescription.value]}
            />
          </div>
        ))}
      </Flexbox>

      <div className={classes["neo-encounter-table-wrapper"]}>
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
NeoDetailsDescWrapper.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
NeoDistanceWrapper.propTypes = {
  data: PropTypes.array,
  selectedRow: PropTypes.object,
};
export default NearEarthObject;
