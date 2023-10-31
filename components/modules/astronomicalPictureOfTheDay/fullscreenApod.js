import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import CustomImage from "@/components/ui/customImage";
import classes from "./apod.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";

const FullscreenApod = ({ apodState = {} }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{apodState.title}</Card.Title>
        <Flexbox gap={10}>
          <Card.Text>{apodState.copyright}</Card.Text>
          <Card.Text>{apodState.date}</Card.Text>
        </Flexbox>
        <Card.Text>{apodState.explanation ?? ""}</Card.Text>
      </Card.Body>
      <div className={classes["fullscreen-img-gallery-wrapper"]}>
        <CustomImage
          src={apodState.hdurl}
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
  apodState: PropTypes.string.isRequired,
};

export default FullscreenApod;
