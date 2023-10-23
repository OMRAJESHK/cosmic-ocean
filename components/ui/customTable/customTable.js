import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import CustomTableHead from "./customTableHead";
import CustomTableBody from "./customTableBody";
import CustomTableFoot from "./customTableFoot";

const CustomTable = (props) => {
  const {
    pagination = true,
    columns = [],
    rows = [],
    onClick = () => {},
    classProp = "",
    onRowClick = () => {},
  } = props;

  return (
    <Table
      responsive="lg"
      striped
      bordered
      hover
      variant="light"
      className={`${classProp && classProp}`}
    >
      {columns.length > 0 && <CustomTableHead columns={columns} />}
      {rows.length > 0 && (
        <CustomTableBody
          columns={columns}
          rows={rows}
          onRowClick={onRowClick}
        />
      )}

      {pagination && rows.length > 0 && (
        <CustomTableFoot
          columnCount={columns.length}
          rowCount={rows.length}
          onClick={onClick}
        />
      )}
      {rows.length === 0 && (
        <tr>
          <td style={{ textAlign: "center" }}>No Records Found</td>
        </tr>
      )}
    </Table>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.array,
  rows: PropTypes.array,
  onClick: PropTypes.func,
  classProp: PropTypes.string,
  pagination: PropTypes.bool,
};

export default CustomTable;
