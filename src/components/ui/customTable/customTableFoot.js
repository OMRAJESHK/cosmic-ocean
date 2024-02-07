import React from "react";
import PropTypes from "prop-types";
import BasicPagination from "../basicPagination";

const CustomTableFoot = (props) => {
  const { columnCount = 0, onBack, onNext } = props;

  return (
    <tfoot data-testid="table-foot">
      <tr>
        <td colSpan={columnCount} data-testid="footer-row">
          <BasicPagination onBack={onBack} onNext={onNext} />
        </td>
      </tr>
    </tfoot>
  );
};

CustomTableFoot.propTypes = {
  columnCount: PropTypes.number,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};

export default CustomTableFoot;
