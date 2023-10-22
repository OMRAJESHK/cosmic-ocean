import React from "react";
import PropTypes from "prop-types";

const CustomTableHead = (props) => {
  const { columns = [] } = props;

  const TH = ({ children }) => <th>{children}</th>;

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <TH key={column.id}>{column.name}</TH>
        ))}
      </tr>
    </thead>
  );
};

CustomTableHead.propTypes = { columns: PropTypes.array, rows: PropTypes.array };

export default CustomTableHead;
