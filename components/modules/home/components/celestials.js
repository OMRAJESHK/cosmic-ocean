import React from "react";
import { Card } from "react-bootstrap";
import { celestials } from "../constants";
import Celestial from "./celestial";
import classes from "../home.module.css";

const Celestials = () => {
  return (
    <Card>
      <Card.Header className={classes["celestial-title-wrapper"]}>
        The Celestials
      </Card.Header>
      <Card.Body>
        <div className={classes["celestials-wrapper"]}>
          {celestials.map((celestial) => (
            <Celestial key={celestial.id} {...celestial} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Celestials;
