import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import classes from "../home.module.css";
import CustomImage from "@/components/ui/customImage";

const CelestialImgWrapper = ({ src = "" }) => (
  <div className={classes["celestial-img-wrapper"]}>
    <CustomImage
      src={src}
      classProp={classes["solar-system-img"]}
      width={100}
      height={100}
    />
  </div>
);

const Celestial = ({ url, title, description }) => {
  return (
    <Card>
      <Card.Body className={classes["celestials-card-body"]}>
        <div className={classes["celestials-item-wrapper"]}>
          <CelestialImgWrapper src={url} />
          <div className={classes["celestials-desc-wrapper"]}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

Celestial.propTypes = {
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  description: PropTypes.string,
};
CelestialImgWrapper.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
export default Celestial;
