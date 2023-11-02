"use client";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import Card from "react-bootstrap/Card";

import classes from "./nearEarthObjects.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomImage from "@/components/ui/customImage";
import CustomDatePicker from "@/components/ui/customDatePicker";
import CustomTable from "@/components/ui/customTable/customTable";
import { neoTableColumns, neoTableRows } from "./constants";
import CustomModal from "@/components/ui/customModal";
import NearEarthObject from "./nearEarthObject";
import amor from "assets/images/neo/amor-class.png";
import apollo from "assets/images/neo/apollo-class.png";
import aten from "assets/images/neo/aten-class.png";
import atira from "assets/images/neo/atira-class.png";
import { GET, withCatch } from "@/api/services";
import apiLocations from "@/api/apiDirectory";

const NearEarthObjects = () => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
  const [modalShow, setModalShow] = useState(false);
  const [neoData, setNeoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const onStartChangeHandler = (date) => {
    setStartDate(date);
  };
  const onEndChangeHandler = (date) => {
    setEndDate(date);
  };

  const onTablePagination = (pagination) => {
    console.log("pagination=>", pagination);
  };

  const onRowClickHandler = (rowid) => {
    console.log("rowid=>", rowid);
    setModalShow(true);
  };

  const getNeos = async (params = { start_date, end_date, page }) => {
    try {
      const { error, response } = await withCatch(
        GET,
        apiLocations.GET_NEO(),
        params,
      );
      if (response?.status === 200) {
        setNeoData(response?.data ?? []);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      console.error("error", err);
      setIsLoading(false);
      setNeoData([]);
    }
  };

  useEffect(() => {
    const params = {
      start_date: "2015-09-07",
      end_date: "2015-09-08",
      page,
    };
    getNeos(params);
  }, []);
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
          <Flexbox alignItems="center" gap={10}>
            <label className={`${classes["table-card-label"]}`}>NEO</label>
            <Flexbox
              alignItems="center"
              gap={10}
              classProp={classes["lookup-select-wrapper"]}
            >
              <label>LookUp</label>
              <Form.Select
                aria-label="LookUp"
                className={classes["lookup-select"]}
              >
                <option value={0}>Closest Approach</option>
                <option value={1}>All NEOs</option>
              </Form.Select>
            </Flexbox>

            <Flexbox
              alignItems="center"
              gap={10}
              classProp={classes["lookup-date-wrapper"]}
            >
              <label>From Date</label>
              <CustomDatePicker
                selectedDate={startDate}
                onChange={onStartChangeHandler}
              />
            </Flexbox>
            <Flexbox
              alignItems="center"
              gap={10}
              classProp={classes["lookup-date-wrapper"]}
            >
              <label>End Date &nbsp;</label>
              <CustomDatePicker
                selectedDate={endDate}
                onChange={onEndChangeHandler}
              />
            </Flexbox>
          </Flexbox>
        </Card.Header>
        <Card.Body className={classes["orbital-class-item"]}>
          <CustomTable
            classProp={classes["neo-table"]}
            columns={neoTableColumns}
            rows={neoTableRows}
            onChange={onTablePagination}
            onRowClick={onRowClickHandler}
          />
        </Card.Body>
      </Card>
      <CustomModal
        title="NEO Details"
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <NearEarthObject />
      </CustomModal>
    </div>
  );
};

export default NearEarthObjects;
