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
import { GET, withCatch } from "@/api/services";

const AstronomicalPictureOfTheDay = () => {
  const [modalShow, setModalShow] = useState(false);
  const [apodState, setApodState] = useState([]);
  const [selectedApod, setSelectedApod] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const onCardClickHandler = (id) => {
    const selected = apodState.find((apod) => apod.id === id);
    setSelectedApod(selected);
    setModalShow(true);
  };

  const getApods = async () => {
    try {
      setIsLoading(true);
      const { response } = await withCatch(GET, apiLocations.GET_APOD());
      if (response?.status === 200) {
        setApodState(response?.data || []);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setApodState([]);
      setIsLoading(false);
    }
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
            heroApod={apodState[0]}
            onClick={onCardClickHandler}
            isLoading={isLoading}
          />
        </Card>
        <Flexbox gap={10} classProp={classes["img-gallery-item-wrapper"]}>
          <ApodGallery
            apodState={[...apodState.slice(1)]}
            onClick={onCardClickHandler}
          />
          <GalleryLoader isLoading={isLoading} />
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
