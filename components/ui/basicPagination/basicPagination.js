import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Flexbox from "../flexbox/flexbox";

const BasicPagination = ({ onBack, onNext }) => {
  return (
    <Fragment>
      <Flexbox justifyContent="center">
        <Button
          variant="primary"
          style={{ marginRight: "1rem" }}
          onClick={onBack}
        >
          Back
        </Button>
        <Button variant="primary" onClick={onNext}>
          Next
        </Button>
      </Flexbox>
    </Fragment>
  );
};

BasicPagination.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};

export default BasicPagination;
