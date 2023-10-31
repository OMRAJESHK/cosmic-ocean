"use client";
import React, { useState, useEffect } from "react";
import classes from "./apod.module.css";
import Card from "react-bootstrap/Card";
import CustomImage from "@/components/ui/customImage";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomModal from "@/components/ui/customModal";
import FullscreenApod from "./fullscreenApod";
import { GET, withCatch } from "@/api/services";
import apiLocations from "@/api/apiDirectory";

function getLastFourDates(currentDate) {
  let lastFourDates = [];
  [0, 1, 2, 3, 4].forEach((dateItem) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - dateItem);
    lastFourDates = [...lastFourDates, date.toISOString().split("T")[0]];
  });
  return lastFourDates;
}

const AstronomicalPictureOfTheDay = () => {
  const [modalShow, setModalShow] = useState(false);
  const [apodState, setApodState] = useState([]);

  const onCardClickHandler = () => {
    setModalShow(true);
  };

  const getApods = async () => {
    const currentDate = new Date();
    const lastFourDates = getLastFourDates(currentDate);
    lastFourDates.forEach(async (curdate) => {
      try {
        const { error, response } = await withCatch(
          GET,
          apiLocations.GET_APOD(curdate),
        );
        if (response.status === 200) {
          setApodState((prev) => [...prev, response.data]);
        }
      } catch (err) {
        console.error("error", err);
        // setApodState([]);
      }
    });
  };
  useEffect(() => {
    getApods();
    return () => {
      setApodState([]);
    };
  }, []);

  return (
    <div className={classes["apod-wrapper"]}>
      <Flexbox gap={20}>
        <Card
          className={classes["img-card-wrapper"]}
          onClick={onCardClickHandler}
        >
          <div className={classes["apod-img-wrapper"]}>
            <CustomImage
              src={apodState[0]?.url ?? ""}
              alt="photo"
              classProp={classes["apod-hero-img"]}
              width={900}
              height={900}
              onLoad={() => {}}
              onError={() => console.log("Image Loading Failed...!")}
            />
          </div>
          <Card.ImgOverlay>
            <h3 className={classes["apod-hero-img-desc"]}>
              {apodState[0]?.title ?? ""}
            </h3>
            <Card.Text className={classes["apod-hero-img-desc"]}>
              {`copyright - ${apodState[0]?.copyright ?? ""}`}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Flexbox gap={10} classProp={classes["img-gallery-item-wrapper"]}>
          {apodState?.length > 0 &&
            apodState.map((apod, index) => {
              if (index > 0) {
                return (
                  <Card
                    key={index}
                    className={classes["img-gallery-item-card-wrapper"]}
                  >
                    <div className={classes["img-gallery-wrapper"]}>
                      <CustomImage
                        src={apod.url}
                        alt="photo"
                        classProp={classes["gallery-img"]}
                        width={400}
                        height={400}
                        onLoad={() => {}}
                        onError={() => {}}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{apod.title}</Card.Title>
                      <Card.Text>{apod.date}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              }
            })}
        </Flexbox>
      </Flexbox>

      <CustomModal
        title="The Astronomical Picture Of The Day"
        show={modalShow}
        onHide={() => setModalShow(false)}
        fullscreen
      >
        <FullscreenApod
          apodState={apodState[0]}
          src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg"
        />
      </CustomModal>
    </div>
  );
};

export default AstronomicalPictureOfTheDay;
