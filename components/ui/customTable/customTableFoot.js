import React from "react";
import PropTypes from "prop-types";
import CustomPagination from "../pagination/customPagination";

const CustomTableFoot = (props) => {
  const { rowCount = 0, columnCount = 0, onClick = () => {} } = props;

  return (
    <tfoot>
      <tr>
        <td colSpan={columnCount}>
          <CustomPagination rowCount={rowCount} onClick={onClick} />
        </td>
      </tr>
    </tfoot>
  );
};

CustomTableFoot.propTypes = {
  columnCount: PropTypes.number,
  rowCount: PropTypes.number,
  onClick: PropTypes.func,
};

export default CustomTableFoot;
