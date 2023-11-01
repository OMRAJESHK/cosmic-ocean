import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import classes from "./spaceSearch.module.css";
import CustomPagination from "@/components/ui/pagination/customPagination";
import CustomModal from "@/components/ui/customModal";
import SearchListItem from "./searchListItem";

const SearchList = (props) => {
  const { queryResults } = props;
  console.log("queryResults", queryResults);
  const [modalShow, setModalShow] = useState(false);
  const [selectedQueryItem, setSelectedQueryItem] = useState({});

  const onqueryItemClickHandler = (selectedItem) => {
    setSelectedQueryItem(selectedItem);
    setModalShow(true);
  };
  return (
    <Card>
      <Card.Body>
        <div className={classes["space-search-list-wrapper"]}>
          {queryResults?.length > 0 &&
            queryResults.map((queryResult) => {
              const desc = queryResult?.data[0]?.description;
              return (
                <Card
                  key={queryResult?.data[0].nasa_id}
                  onClick={() => onqueryItemClickHandler(queryResult)}
                >
                  <Card.Body className={classes["space-search-list-card-body"]}>
                    <div className={classes["space-search-list-item-wrapper"]}>
                      <div className={classes["query-item-img-wrapper"]}>
                        <img src={queryResult?.links[0]?.href} alt="" />
                      </div>
                      <div className={classes["query-item-text-wrapper"]}>
                        <Card.Title>{queryResult.data[0]?.title}</Card.Title>
                        <Card.Text dangerouslySetInnerHTML={{ __html: desc }} />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
        <CustomModal
          title={""}
          // title={selectedQueryItem?.data[0]?.title || ""}
          show={modalShow}
          onHide={() => setModalShow(false)}
          fullscreen
        >
          <SearchListItem selectedQueryItem={selectedQueryItem} />
        </CustomModal>
      </Card.Body>
      <Card.Footer className={classes["space-search-footer-wrapper"]}>
        <CustomPagination
          rowCount={123}
          onClick={(pagination) => console.log(pagination)}
        />
        {/* <Pagination className={classes["space-search-pagination-wrapper"]}>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
      </Card.Footer>
    </Card>
  );
};
SearchList.propTypes = { queryResults: PropTypes.array };
export default SearchList;
