import React from "react";
import PropTypes from "prop-types";
import CustomImage from "@/components/ui/customImage";
import classes from "../apod.module.css";
import { Card } from "react-bootstrap";
import VideoPlayer from "./videoPlayer";
import Loader from "@/components/ui/loader";

const HeroImage = ({ isLoading = false, heroApod, onClick = () => {} }) => {
  const copyrightText = `${heroApod?.copyright ? heroApod.copyright : ""}`;
  return (
    <div className={classes["apod-media-wrapper"]}>
      {isLoading && <Loader height="44.6rem" />}
      {heroApod?.media_type === "image" && (
        <div
          className={classes["apod-img-wrapper"]}
          onClick={() => onClick(heroApod?.id)}
        >
          <CustomImage
            src={heroApod?.url ?? ""}
            alt={heroApod.title}
            classProp={classes["apod-hero-img"]}
            width={800}
            height={800}
          />
          <Card.ImgOverlay>
            <h3 className={classes["apod-hero-img-desc"]}>
              {heroApod.title ?? ""}
            </h3>
            <Card.Text className={classes["apod-hero-img-desc"]}>
              {copyrightText}
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

HeroImage.propTypes = {
  heroApod: PropTypes.object,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default HeroImage;
