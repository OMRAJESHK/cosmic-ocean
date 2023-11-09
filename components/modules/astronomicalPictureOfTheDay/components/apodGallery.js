import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "../apod.module.css";
import { Card } from "react-bootstrap";
import VideoPlayer from "./videoPlayer";
import CustomImage from "@/components/ui/customImage";

const ApodGallery = ({ apodState = [], onClick = () => {} }) => {
  return (
    <Fragment>
      {apodState?.length > 0 &&
        apodState.map((apod) => (
          <Card
            key={apod.id}
            className={classes["img-gallery-item-card-wrapper"]}
            onClick={() => onClick(apod.id)}
          >
            <div className={classes["media-gallery-wrapper"]}>
              {apod.media_type === "image" && (
                <CustomImage
                  src={apod.url}
                  alt={apod.title}
                  classProp={classes["gallery-img"]}
                  width={400}
                  height={400}
                />
              )}
              {apod.media_type === "video" && (
                <div style={{ height: "17.2rem" }}>
                  <VideoPlayer name={apod?.title} src={apod?.url} />
                </div>
              )}
            </div>
            <Card.Body>
              <Card.Title>{apod.title}</Card.Title>
              <Card.Text>{apod.date}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Fragment>
  );
};

ApodGallery.propTypes = { apodState: PropTypes.array, onClick: PropTypes.func };

export default ApodGallery;
