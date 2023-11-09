import React from "react";
import PropTypes from "prop-types";

const TH = ({ children }) => <th>{children}</th>;
const CustomTableHead = (props) => {
  const { columns = [] } = props;

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
TH.propTypes = { children: PropTypes.node };
export default CustomTableHead;
