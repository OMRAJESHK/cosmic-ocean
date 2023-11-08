"use client";
import React, { useState, useEffect } from "react";
import classes from "./apod.module.css";
import Card from "react-bootstrap/Card";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomModal from "@/components/ui/customModal";
import FullscreenApod from "./components/fullscreenApod";
import apiLocations from "@/api/apiDirectory";
import HeroImage from "./components/heroImage";
import GalleryLoader from "./components/galleryLoader";
import ApodGallery from "./components/apodGallery";
import { multiApiCall } from "@/utils/commons";

function getLastFourDates(currentDate) {
  let lastFourDates = [];
  [1, 2, 3, 4].forEach((dateItem) => {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - dateItem);
    lastFourDates = [...lastFourDates, date.toISOString().split("T")[0]];
  });
  return lastFourDates;
}

function getMultiApis(lastFourDates) {
  let urlList = [];
  lastFourDates.forEach((date) => {
    urlList = [...urlList, apiLocations.GET_APOD(date)];
  });
  return urlList;
}
const AstronomicalPictureOfTheDay = () => {
  const [modalShow, setModalShow] = useState(false);
  const [apodState, setApodState] = useState([]);
  const [heroApod, setheroApod] = useState({});
  const [selectedApod, setSelectedApod] = useState({});

  const onCardClickHandler = (id, isHero = false) => {
    setModalShow(true);
    const selected = isHero
      ? heroApod
      : apodState.find((apod) => apod.id === id);
    setSelectedApod(selected);
  };

  const getApods = async () => {
    const currentDate = new Date();
    const lastFourDates = getLastFourDates(currentDate);
    const multiApis = getMultiApis(lastFourDates);
    const resultResponses = await multiApiCall(multiApis);
    Promise.allSettled(resultResponses).then((result) => {
      result.map(async ({ status, value }) => {
        if (status === "fulfilled" && value?.status === 200) {
          setApodState((prev) => [
            ...prev,
            { ...value?.data, id: crypto.randomUUID() },
          ]);
        }
      });
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
        <Card className={classes["img-card-wrapper"]}>
          <HeroImage
            heroApod={heroApod}
            setheroApod={setheroApod}
            onClick={onCardClickHandler}
          />
        </Card>
        <Flexbox gap={10} classProp={classes["img-gallery-item-wrapper"]}>
          <ApodGallery apodState={apodState} onClick={onCardClickHandler} />
          <GalleryLoader apodState={apodState} />
        </Flexbox>
      </Flexbox>

      <CustomModal
        title="The Astronomical Picture Of The Day"
        show={modalShow}
        onHide={() => setModalShow(false)}
        fullscreen
      >
        <FullscreenApod apodState={selectedApod} />
      </CustomModal>
    </div>
  );
};

export default AstronomicalPictureOfTheDay;
