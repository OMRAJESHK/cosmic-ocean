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
    classProp = "",
    onRowClick = () => {},
    onBack,
    onNext,
  } = props;

  const TBody = ({ children }) => {
    return (
      <tbody>
        <tr>
          <td style={{ textAlign: "center" }} colSpan={columns.length}>
            {children}
          </td>
        </tr>
      </tbody>
    );
  };

  TBody.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

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
        <TBody>
          <Loader />
        </TBody>
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
          onBack={onBack}
          onNext={onNext}
        />
      )}
      {!isLoading && rows.length === 0 && <TBody>{"No Records Found"}</TBody>}
    </Table>
  );
};

CustomTable.propTypes = {
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  rows: PropTypes.array,
  classProp: PropTypes.string,
  pagination: PropTypes.bool,
  onRowClick: PropTypes.func,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};

export default CustomTable;
