import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CustomImage from "@/components/ui/customImage";
import classes from "../apod.module.css";
import apiLocations from "@/api/apiDirectory";
import { GET, withCatch } from "@/api/services";
import { Card } from "react-bootstrap";
import VideoPlayer from "./videoPlayer";

const HeroImage = ({
  heroApod = {},
  setheroApod = () => {},
  onClick = () => {},
}) => {
  const getHeroApod = async () => {
    const currentDate = new Date().toISOString().split("T")[0];
    try {
      const { error, response } = await withCatch(
        GET,
        apiLocations.GET_APOD(currentDate),
      );
      if (response?.status === 200) {
        const resp = response.data;
        if (resp.id === undefined) resp.id = crypto.randomUUID();
        setheroApod(resp);
      }
      if (error) {
        return [];
      }
      return [];
    } catch (err) {
      console.log("error", err);
      return [];
    }
  };

  useEffect(() => {
    getHeroApod();
    return () => {
      setheroApod({});
    };
  }, []);
  return (
    <div className={classes["apod-media-wrapper"]}>
      {heroApod?.media_type === "image" && (
        <div
          className={classes["apod-img-wrapper"]}
          onClick={() => onClick(heroApod?.id, true)}
        >
          <CustomImage
            src={heroApod?.url ?? ""}
            alt="photo"
            classProp={classes["apod-hero-img"]}
            width={800}
            height={800}
          />
          <Card.ImgOverlay>
            <h3 className={classes["apod-hero-img-desc"]}>
              {heroApod.title ?? ""}
            </h3>
            <Card.Text className={classes["apod-hero-img-desc"]}>
              {`copyright - ${heroApod.copyright ?? ""}`}
            </Card.Text>
          </Card.ImgOverlay>
        </div>
      )}
      {heroApod?.media_type === "video" && (
        <VideoPlayer name={heroApod.title} src={heroApod?.url} />
      )}
    </div>
  );
};

HeroImage.propTypes = {};

export default HeroImage;
