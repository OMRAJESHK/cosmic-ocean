import React from "react";
import PropTypes from "prop-types";

const CustomTableBody = (props) => {
  const { columns = [], rows = [], onRowClick = () => {} } = props;

  const onRowClickHandler = (id) => {
    onRowClick(id);
  };
  const TD = ({ row }) => {
    const Row = columns.map((column) => (
      <td key={`${column.key}-${row.id}`}>{String(row[column.key])}</td>
    ));
    return <tr onClick={() => onRowClickHandler(row.id)}>{Row}</tr>;
  };

  return (
    <tbody>
      {rows.map((row) => (
        <TD key={`${row.id}-${row.name}`} row={row} />
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
