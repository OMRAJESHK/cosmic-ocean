import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import classes from "./customDatePicker.module.css";

const CustomDatePicker = (props) => {
  const { selectedDate, cls, onChange } = props;

  const onChangeHandler = (date) => {
    onChange(date);
  };
  return (
    <div>
      <DatePicker
        className={`${classes["date-picker"]} ${cls ? cls : ""}`}
        selected={selectedDate}
        onChange={onChangeHandler}
      />
    </div>
  );
};

CustomDatePicker.propTypes = {
  selectedDate: PropTypes.string,
  cls: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomDatePicker;
