"use client";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import classes from "./nearEarthObjects.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomImage from "@/components/ui/customImage";
import CustomTable from "@/components/ui/customTable/customTable";
import { neoTableColumns } from "./constants";
import CustomModal from "@/components/ui/customModal";
import NearEarthObject from "./nearEarthObject";
import amor from "assets/images/neo/amor-class.png";
import apollo from "assets/images/neo/apollo-class.png";
import aten from "assets/images/neo/aten-class.png";
import atira from "assets/images/neo/atira-class.png";
import { GET, withCatch } from "@/api/services";
import apiLocations from "@/api/apiDirectory";
import { formatDecimal } from "@/utils/commons";

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
    console.log("rowid=>", rowid);
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
  console.log("pagination=>", neoData);

  return (
    <div className={classes["neo-wrapper"]}>
      <h2>Near-Earth Objects (NEOs)</h2>
      <p>
        Are a group of celestial objects that have orbits that bring them into
        proximity with Earth. NEOs can be classified into three main categories:
        asteroids, comets, and meteoroids. These objects are of particular
        interest to scientists and astronomers because of their potential to
        impact Earth and the valuable insights they can provide about the early
        solar system.
      </p>
      <Flexbox gap={10}>
        <div className={classes["orbital-class-item-wrapper"]}>
          <Card>
            <Card.Header>Atira or Interior-Earth Objects (IEOs)</Card.Header>
            <Card.Body className={classes["orbital-class-item"]}>
              <Flexbox gap={10} alignItems="stretch">
                <div className={classes["orbital-class-item--text"]}>
                  <Card.Title>Less than 1 Astronomical Unit</Card.Title>
                  <Card.Text>
                    These NEOs have orbits that entirely lie within Earth&apos;s
                    orbit. In other words, they stay closer to the Sun than
                    Earth. The semi-major axis of their orbits is less than 1
                    astronomical unit (AU), and they never venture beyond
                    Earth&apos;s orbit.
                  </Card.Text>
                </div>
                <div className={classes["orbital-class-item--img"]}>
                  <CustomImage
                    src={atira ?? ""}
                    alt="photo"
                    classProp={classes["apod-hero-img"]}
                    width={900}
                    height={900}
                  />
                </div>
              </Flexbox>
            </Card.Body>
          </Card>
        </div>
        <div className={classes["orbital-class-item-wrapper"]}>
          <Card>
            <Card.Header>Amor</Card.Header>
            <Card.Body className={classes["orbital-class-item"]}>
              <Flexbox gap={10} alignItems="stretch">
                <div className={classes["orbital-class-item--text"]}>
                  <Card.Title>
                    Between 1.017 and 1.3 Astronomical Unit
                  </Card.Title>
                  <Card.Text>
                    Amor asteroids have orbits that approach but do not cross
                    Earth&apos;s orbit. Their orbits typically have a perihelion
                    distance (closest approach to the Sun). They come close to
                    Earth&apos;s orbit without intersecting it.
                  </Card.Text>
                </div>
                <div className={classes["orbital-class-item--img"]}>
                  <CustomImage
                    src={amor ?? ""}
                    alt="photo"
                    classProp={classes["apod-hero-img"]}
                    width={900}
                    height={900}
                  />
                </div>
              </Flexbox>
            </Card.Body>
          </Card>
        </div>
        <div className={classes["orbital-class-item-wrapper"]}>
          <Card>
            <Card.Header>Apollo</Card.Header>
            <Card.Body className={classes["orbital-class-item"]}>
              <Flexbox gap={10} alignItems="stretch">
                <div className={classes["orbital-class-item--text"]}>
                  <Card.Title>Greater than 1 Astronomical Unit</Card.Title>
                  <Card.Text>
                    Apollo asteroids have orbits that cross Earth&apos;s orbit.
                    Their eccentric orbits bring them near Earth. They have a
                    wide range of perihelion distances.
                  </Card.Text>
                </div>
                <div className={classes["orbital-class-item--img"]}>
                  <CustomImage
                    src={apollo ?? ""}
                    alt="photo"
                    classProp={classes["apod-hero-img"]}
                    width={900}
                    height={900}
                  />
                </div>
              </Flexbox>
            </Card.Body>
          </Card>
        </div>
        <div className={classes["orbital-class-item-wrapper"]}>
          <Card>
            <Card.Header>Aten</Card.Header>
            <Card.Body className={classes["orbital-class-item"]}>
              <Flexbox gap={10} alignItems="stretch">
                <div className={classes["orbital-class-item--text"]}>
                  <Card.Title>less than 1 Astronomical Unit</Card.Title>
                  <Card.Text>
                    Aten asteroids are similar to Apollo asteroids. Tthey spend
                    more time within Earth&apos;s orbit. They often have orbits
                    that bring them within Earth&apos;s vicinity.
                  </Card.Text>
                </div>
                <div className={classes["orbital-class-item--img"]}>
                  <CustomImage
                    src={aten ?? ""}
                    alt="photo"
                    classProp={classes["apod-hero-img"]}
                    width={900}
                    height={900}
                  />
                </div>
              </Flexbox>
            </Card.Body>
          </Card>
        </div>
      </Flexbox>
      <Card>
        <Card.Header>
          <label className={`${classes["table-card-label"]}`}>
            Near-Earth Objects LookUp
          </label>
        </Card.Header>
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
        onHide={() => setModalShow(false)}
      >
        <NearEarthObject selectedRow={selectedRow} />
      </CustomModal>
    </div>
  );
};

export default NearEarthObjects;
