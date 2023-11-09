"use client";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import classes from "./nearEarthObjects.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomImage from "@/components/ui/customImage";
import CustomTable from "@/components/ui/customTable/customTable";
import { neoHeading, neoTableColumns, orbitClasses } from "./constants";
import CustomModal from "@/components/ui/customModal";
import NearEarthObject from "./nearEarthObject";
import { GET, withCatch } from "@/api/services";
import apiLocations from "@/api/apiDirectory";
import { formatDecimal } from "@/utils/commons";
import OrbitalTitle from "./components/orbitalTitle";

const NearEarthObjects = () => {
  const DEFAULT_ACTIVE = 1;
  const [modalShow, setModalShow] = useState(false);
  const [neoData, setNeoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(DEFAULT_ACTIVE);
  const [selectedRow, setSelectedRow] = useState({});

  const onTablePagination = (pagination) => {
    console.log("pagination=>", pagination);
  };

  const onRowClickHandler = (rowid) => {
    const row = neoData.find((noe) => noe.id === rowid);
    setSelectedRow(row);
    setModalShow(true);
  };

  const formatNeoData = (neoResponse = []) => {
    let updatedNeoData = [];
    if (neoResponse.length > 0) {
      neoResponse.forEach((neo) => {
        const param = {
          id: neo.id,
          name: neo.name,
          estimated_diameter: `${formatDecimal(
            neo.estimated_diameter.kilometers.estimated_diameter_min,
          )} KM - ${formatDecimal(
            neo.estimated_diameter.kilometers.estimated_diameter_max,
          )} KM`,
          perihelion_distance:
            `${formatDecimal(neo.orbital_data?.perihelion_distance)} AU` || "",
          aphelion_distance:
            `${formatDecimal(neo.orbital_data?.aphelion_distance)} AU` || "",
          is_potentially_hazardous_asteroid:
            neo.is_potentially_hazardous_asteroid ? "YES" : "NO",
          orbital_period: parseInt(neo.orbital_data.orbital_period),
          orbit_class: neo.orbital_data.orbit_class.orbit_class_type,
          orbit_class_range: neo.orbital_data.orbit_class.orbit_class_range,
          close_approach_data: neo?.close_approach_data,
          neo_diameter: neo.estimated_diameter,
          first_observation_date: neo.orbital_data.first_observation_date,
          last_observation_date: neo.orbital_data.last_observation_date,
        };
        updatedNeoData = [...updatedNeoData, param];
      });
      return updatedNeoData;
    }
    return updatedNeoData;
  };
  const getNeos = async (params) => {
    try {
      setNeoData([]);
      setIsLoading(true);
      // eslint-disable-next-line no-unused-vars
      const { error, response } = await withCatch(
        GET,
        apiLocations.GET_NEO(),
        params,
      );
      if (response?.status === 200) {
        const formattedData = formatNeoData(response?.data?.near_earth_objects);
        setNeoData(formattedData);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      console.error("error", err);
      setIsLoading(false);
      setNeoData([]);
    }
  };

  const onBackClickHandler = () => {
    if (page <= DEFAULT_ACTIVE) setPage(DEFAULT_ACTIVE);
    else setPage((prev) => prev - 1);
  };
  const onNextClickHandler = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const params = { page };
    getNeos(params);
  }, [page]);

  return (
    <div className={classes["neo-wrapper"]}>
      <div className={classes["neo-title-wrapper"]}>
        <h2>{neoHeading.title}</h2>
        <p>{neoHeading.description}</p>
      </div>
      <Flexbox gap={10} styleProp={{ marginBottom: "2rem" }}>
        {orbitClasses.map((orbitClass) => (
          <div
            key={orbitClass.id}
            className={classes["orbital-class-item-wrapper"]}
          >
            <Card>
              <OrbitalTitle
                title={orbitClass.title}
                subTitle={orbitClass.subTitle}
              />
              <Card.Body className={classes["orbital-class-item"]}>
                <Flexbox gap={10} alignItems="stretch">
                  <div className={classes["orbital-class-item--text"]}>
                    <Card.Title>{orbitClass.range}</Card.Title>
                    <Card.Text>{orbitClass.description}</Card.Text>
                  </div>
                  <div className={classes["orbital-class-item--img"]}>
                    <CustomImage
                      src={orbitClass.url}
                      alt={orbitClass.subTitle}
                      classProp={classes["apod-hero-img"]}
                      width={900}
                      height={900}
                    />
                  </div>
                </Flexbox>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Flexbox>
      <Card>
        <OrbitalTitle title="Near-Earth Objects" subTitle="LookUp" />
        <Card.Body className={classes["orbital-class-item"]}>
          <CustomTable
            isLoading={isLoading}
            classProp={classes["neo-table"]}
            columns={neoTableColumns}
            rows={neoData}
            onChange={onTablePagination}
            onRowClick={onRowClickHandler}
            onBack={onBackClickHandler}
            onNext={onNextClickHandler}
          />
        </Card.Body>
      </Card>
      <CustomModal
        title={selectedRow?.name || ""}
        subtitle={`${selectedRow.orbit_class} - Orbit Class ${selectedRow.orbit_class_range} - Orbit Range`}
        show={modalShow}
        onHide={() => {
          setSelectedRow({});
          setModalShow(false);
        }}
      >
        <NearEarthObject selectedRow={selectedRow} />
      </CustomModal>
    </div>
  );
};

export default NearEarthObjects;
