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
        <span>{apodState.copyright}</span>
        <Card.Text
          style={{ textAlign: "justify" }}
          aria-label="fullscreen-explanation"
          test-id="fullscreen-explanation"
        >
          {apodState.explanation ?? ""}
        </Card.Text>
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
  apodState: PropTypes.object.isRequired,
};

export default FullscreenApod;
