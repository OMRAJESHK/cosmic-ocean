import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Flexbox from "../flexbox/flexbox";

const BasicPagination = ({ onBack, onNext }) => {
  return (
    <Fragment>
      <Flexbox justifyContent="center">
        <Button
          variant="warning"
          style={{
            marginRight: "1rem",
            backgroundColor: "var(--orange)",
            color: "var(--white)",
          }}
          onClick={onBack}
        >
          Back
        </Button>
        <Button
          variant="warning"
          onClick={onNext}
          style={{
            backgroundColor: "var(--orange)",
            color: "var(--white)",
          }}
        >
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
