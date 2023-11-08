import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import classes from "../home.module.css";

const Celestial = ({ url, title, description }) => {
  return (
    <Card>
      <Card.Body className={classes["celestials-card-body"]}>
        <div className={classes["celestials-item-wrapper"]}>
          <div>
            <img src={url} alt={title} />
          </div>
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
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Celestial;
