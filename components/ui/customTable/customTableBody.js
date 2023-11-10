import React from "react";
import PropTypes from "prop-types";

const CustomTableBody = (props) => {
  const { columns = [], rows = [], onRowClick = () => {} } = props;

  const onRowClickHandler = (id) => {
    onRowClick(id);
  };
  const TD = ({ row }) => {
    const Row = columns.map((column) => {
      return (
        <td key={`${row[column.key]}-${row.epoch_date_close_approach}`}>
          {String(row[column.key])}
        </td>
      );
    });
    return <tr onClick={() => onRowClickHandler(row.id)}>{Row}</tr>;
  };
  TD.propTypes = {
    row: PropTypes.object,
  };
  return (
    <tbody>
      {rows.map((row, index) => (
        <TD key={index} row={row} />
      ))}
    </tbody>
  );
};

CustomTableBody.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default CustomTableBody;
