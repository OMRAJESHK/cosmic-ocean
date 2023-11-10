import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classes from "../apod.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";
import { Card } from "react-bootstrap";
import Loader from "@/components/ui/loader";

const GalleryLoader = ({ isLoading = [], apodState = [] }) => {
  return (
    <Fragment>
      {(isLoading || apodState.length === 0) && (
        <Flexbox gap={10}>
          {[1, 2, 3, 4].map((item) => (
            <Card
              key={item}
              className={classes["img-gallery-item-card-wrapper"]}
            >
              <Flexbox
                justifyContent="center"
                alignItems="center"
                styleProp={{ height: "22rem", width: "100%" }}
              >
                <Loader width={150} height={150} />
              </Flexbox>
            </Card>
          ))}
        </Flexbox>
      )}
    </Fragment>
  );
};
GalleryLoader.propTypes = {
  isLoading: PropTypes.bool,
  apodState: PropTypes.array,
};
export default GalleryLoader;
