"use client";
import React from "react";
import classes from "./apod.module.css";
import Card from "react-bootstrap/Card";

const AstronomicalPictureOfTheDay = () => {
  return (
    <div className={classes["apod-wrapper"]}>
      <input type="date" />
      <Card style={{ height: "auto", width: "60rem" }}>
        <div>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1695462615087-e7f5a7a09fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>

        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>- Rajesh</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AstronomicalPictureOfTheDay;
