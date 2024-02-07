import React, { useState } from "react";
import PropTypes from "prop-types";
import Pagination from "react-bootstrap/Pagination";
import classes from "./customPagination.module.css";

const CustomPagination = (props) => {
  const { rowCount = 0, onClick = () => {} } = props;
  const DEFAULT_ACTIVE = 1;
  const [active, setActive] = useState(DEFAULT_ACTIVE);

  const pageSize = 10;
  const pageCount = Math.ceil(rowCount / pageSize);
  const pagesArray = Array.from({ length: pageCount }, (_, i) => i + 1);

  const onButtonClickHandler = (pageElement) => {
    setActive(pageElement);
    onClick({ activePage: pageElement, pageSize });
  };

  const onPrevButtonClickHandler = () => {
    active > DEFAULT_ACTIVE
      ? setActive((prev) => prev - 1)
      : setActive(DEFAULT_ACTIVE);
  };

  const onNextButtonClickHandler = () => {
    active < pageCount ? setActive((prev) => prev + 1) : setActive(pageCount);
  };
  const Pages = () => {
    const PageItems = pagesArray.map((pageElement) => (
      <Pagination.Item
        key={pageElement}
        active={pageElement === active}
        onClick={() => onButtonClickHandler(pageElement)}
      >
        {pageElement}
      </Pagination.Item>
    ));
    return PageItems;
  };

  return (
    <Pagination className={classes["pagination-wrapper"]}>
      <Pagination.First />
      <Pagination.Prev onClick={onPrevButtonClickHandler} />
      <Pages />
      <Pagination.Next onClick={onNextButtonClickHandler} />
      <Pagination.Last />
    </Pagination>
  );
};

CustomPagination.propTypes = {
  rowCount: PropTypes.number,
  onClick: PropTypes.func,
};

export default CustomPagination;
