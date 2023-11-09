import React from "react";
import PropTypes from "prop-types";
import Flexbox from "@/components/ui/flexbox/flexbox";
import { Form } from "react-bootstrap";
import classes from "../marsExploration.module.css";

const Select = (props) => {
  const { data = [], label = "", onChange = () => {} } = props;
  return (
    <Flexbox
      gap={10}
      alignItems="center"
      justifyContent="space-between"
      classProp={classes["select-wrapper"]}
    >
      <label>{label}</label>
      <Form.Select
        aria-label="Rover"
        className={classes["select"]}
        onChange={onChange}
      >
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </Form.Select>
    </Flexbox>
  );
};

Select.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default Select;
