import React, { Fragment } from "react";
import classes from "../apod.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";
import { Card } from "react-bootstrap";

const GalleryLoader = () => {
  return (
    <Fragment>
      <Flexbox gap={10}>
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className={classes["img-gallery-item-card-wrapper"]}>
            <div className={`${classes["media-gallery-wrapper"]}`}>
              <div
                className={`${classes["gallery-img"]} ${classes["skeleton"]}`}
              />
            </div>
            <Card.Body className={classes["gallery-item-text-wrapper"]}>
              <Card.Title style={{ marginTop: "0.65rem" }}>
                <div
                  className={`${classes["skeleton"]} ${classes["skeleton-text"]}`}
                />
                <div
                  className={`${classes["skeleton"]} ${classes["skeleton-text"]}`}
                />
              </Card.Title>
              <div
                className={`${classes["skeleton"]} ${classes["skeleton-text"]}`}
              />

              <div
                className={`${classes["skeleton"]} ${classes["skeleton-text"]}`}
              />
            </Card.Body>
          </Card>
        ))}
      </Flexbox>
    </Fragment>
  );
};

export default GalleryLoader;
