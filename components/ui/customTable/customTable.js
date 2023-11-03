import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import CustomTableHead from "./customTableHead";
import CustomTableBody from "./customTableBody";
import CustomTableFoot from "./customTableFoot";
import Loader from "../loader";

const CustomTable = (props) => {
  const {
    isLoading = false,
    pagination = true,
    columns = [],
    rows = [],
    onClick = () => {},
    classProp = "",
    onRowClick = () => {},
    onBack,
    onNext,
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
      {isLoading && (
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }} colSpan={columns.length}>
              <Loader />
            </td>
          </tr>
        </tbody>
      )}
      {!isLoading && rows.length > 0 && (
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
          onBack={onBack}
          onNext={onNext}
        />
      )}
      {!isLoading && rows.length === 0 && (
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }} colSpan={columns.length}>
              No Records Found
            </td>
          </tr>
        </tbody>
      )}
    </Table>
  );
};

CustomTable.propTypes = {
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  rows: PropTypes.array,
  onClick: PropTypes.func,
  classProp: PropTypes.string,
  pagination: PropTypes.bool,
  onRowClick: PropTypes.func,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};

export default CustomTable;
