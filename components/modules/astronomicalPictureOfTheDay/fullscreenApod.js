import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import CustomImage from "@/components/ui/customImage";
import classes from "./apod.module.css";

const FullscreenApod = ({ src = "" }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Text>{`The Astronomical Picture Of The Day. the shoet discription of the fullscreen image`}</Card.Text>
        <Card.Text>2023-Oct-10</Card.Text>
      </Card.Body>
      <div className={classes["fullscreen-img-gallery-wrapper"]}>
        <CustomImage
          src={src}
          alt="photo"
          width={1100}
          height={1100}
          classProp={classes["fullscreen-img-gallery"]}
        />
      </div>
    </Card>
  );
};

FullscreenApod.propTypes = {
  src: PropTypes.string.isRequired,
};

export default FullscreenApod;
