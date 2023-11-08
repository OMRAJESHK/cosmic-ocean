import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import CustomImage from "@/components/ui/customImage";
import classes from "../apod.module.css";
import VideoPlayer from "./videoPlayer";

const FullscreenApod = ({ apodState = {} }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{apodState.title}</Card.Title>
        <div>
          <span>{apodState.copyright}</span>
          <span>{apodState.date}</span>
        </div>
        <Card.Text>{apodState.explanation ?? ""}</Card.Text>
      </Card.Body>
      <div className={classes["fullscreen-img-gallery-wrapper"]}>
        {apodState.media_type === "image" && (
          <CustomImage
            src={apodState.url}
            alt={apodState?.title}
            classProp={classes["fullscreen-img-gallery"]}
            width={1200}
            height={1200}
          />
        )}
        {apodState.media_type === "video" && (
          <VideoPlayer name={apodState?.title} src={apodState?.url} />
        )}
      </div>
    </Card>
  );
};

FullscreenApod.propTypes = {
  apodState: PropTypes.string.isRequired,
};

export default FullscreenApod;
