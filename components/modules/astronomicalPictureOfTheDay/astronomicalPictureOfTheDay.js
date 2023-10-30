"use client";
import React from "react";
import classes from "./apod.module.css";
import Card from "react-bootstrap/Card";
import CustomImage from "@/components/ui/customImage";
import Flexbox from "@/components/ui/flexbox/flexbox";

const AstronomicalPictureOfTheDay = () => {
  return (
    <div className={classes["apod-wrapper"]}>
      <Card className={classes["img-card-wrapper"]}>
        <div className={classes["apod-img-wrapper"]}>
          <CustomImage
            src="https://apod.nasa.gov/apod/image/2310/M33_Triangulum1024.jpg"
            alt="photo"
            classProp={classes["rover-hero-img"]}
            width={900}
            height={900}
            onLoad={() => {}}
            onError={() => console.log("Image Loading Failed...!")}
          />
        </div>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </Card.Text>
          <Card.Text>copyright - Rajesh</Card.Text>
        </Card.Body>
      </Card>
      <Flexbox gap={10} classProp={classes["img-gallery-item-wrapper"]}>
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
          {/* <Card.Title> The Astronomical Picture Of The Day</Card.Title>
          <Card.Text>2023-Oct-10</Card.Text> */}
        </div>
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
          <p>afdfg</p>
        </div>
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
      </Flexbox>
    </div>
  );
};

export default AstronomicalPictureOfTheDay;
