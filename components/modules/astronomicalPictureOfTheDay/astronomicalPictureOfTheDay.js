"use client";
import React, { useState, useEffect } from "react";
import classes from "./apod.module.css";
import Card from "react-bootstrap/Card";
import CustomImage from "@/components/ui/customImage";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomModal from "@/components/ui/customModal";
import FullscreenApod from "./fullscreenApod";
import { GET, withCatch } from "@/api/services";

const AstronomicalPictureOfTheDay = () => {
  const [modalShow, setModalShow] = useState(false);
  const [apodState, setApodState] = useState([]);

  const onCardClickHandler = () => {
    console.log("hi");
    setModalShow(true);
  };

  const getApod = async () => {
    try {
      const { error, response } = await withCatch(
        GET,
        "http://localhost:3000/api/apod",
      );
      if (response.status === 200) {
        setApodState([response.data]);
        return response.data;
      }
      if (error) {
        setApodState([]);
      }
    } catch (err) {
      console.log("error", err);
      setApodState([]);
    }
  };
  useEffect(() => {
    getApod();
  }, []);
  console.log("apodState", apodState);

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
          <Card className={classes["img-gallery-item-card-wrapper"]}>
            <div className={classes["img-gallery-wrapper"]}>
              <CustomImage
                src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg"
                alt="photo"
                classProp={classes["gallery-img"]}
                width={400}
                height={400}
                onLoad={() => {}}
                onError={() => {}}
              />
            </div>
            <Card.Body>
              <Card.Title> The Astronomical Picture Of The Day</Card.Title>
              <Card.Text>2023-Oct-10</Card.Text>
            </Card.Body>
          </Card>
          <Card className={classes["img-gallery-item-card-wrapper"]}>
            <div className={classes["img-gallery-wrapper"]}>
              <CustomImage
                src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg"
                alt="photo"
                classProp={classes["gallery-img"]}
                width={400}
                height={400}
                onLoad={() => {}}
                onError={() => {}}
              />
            </div>
            <Card.Body>
              <Card.Title> The Astronomical Picture Of The Day</Card.Title>
              <Card.Text>2023-Oct-10</Card.Text>
            </Card.Body>
          </Card>

          <Card className={classes["img-gallery-item-card-wrapper"]}>
            <div className={classes["img-gallery-wrapper"]}>
              <CustomImage
                src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg"
                alt="photo"
                classProp={classes["gallery-img"]}
                width={400}
                height={400}
                onLoad={() => {}}
                onError={() => {}}
              />
            </div>
            <Card.Body>
              <Card.Title> The Astronomical Picture Of The Day</Card.Title>
              <Card.Text>2023-Oct-10</Card.Text>
            </Card.Body>
          </Card>

          <Card className={classes["img-gallery-item-card-wrapper"]}>
            <div className={classes["img-gallery-wrapper"]}>
              <CustomImage
                src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg"
                alt="photo"
                classProp={classes["gallery-img"]}
                width={400}
                height={400}
                onLoad={() => {}}
                onError={() => {}}
              />
            </div>
            <Card.Body>
              <Card.Title>The Astronomical Picture Of The Day</Card.Title>
              <Card.Text>2023-Oct-10</Card.Text>
            </Card.Body>
          </Card>
        </Flexbox>
      </Flexbox>

      <CustomModal
        title="The Astronomical Picture Of The Day"
        show={modalShow}
        onHide={() => setModalShow(false)}
        fullscreen
      >
        <FullscreenApod apodState={apodState[0]} src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg" />
      </CustomModal>
    </div>
  );
};

export default AstronomicalPictureOfTheDay;
