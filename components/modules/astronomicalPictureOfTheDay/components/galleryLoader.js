import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CustomImage from "@/components/ui/customImage";
import classes from "../apod.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";
import { Card } from "react-bootstrap";

const GalleryLoader = ({ apodState = [] }) => {
  return (
    <Fragment>
      {(!apodState || apodState.length === 0) && (
        <Flexbox gap={10}>
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className={classes["img-gallery-item-card-wrapper"]}
            >
              <div
                className={classes["img-gallery-wrapper"]}
                style={{ height: "21.5rem" }}
              >
                <CustomImage
                  classProp={classes["gallery-img"]}
                  width={10}
                  height={10}
                />
              </div>
            </Card>
          ))}
        </Flexbox>
      )}
    </Fragment>
  );
};
GalleryLoader.propTypes = { apodState: PropTypes.array };
export default GalleryLoader;
