import React, { useState } from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import classes from "./spaceSearch.module.css";
import CustomModal from "@/components/ui/customModal";
import SearchListItem from "./searchListItem";
import Loader from "@/components/ui/loader";

const SearchList = (props) => {
  const { isLoading, queryResults, onBack, onNext } = props;
  const rowLength = queryResults?.length ?? 0;
  const [modalShow, setModalShow] = useState(false);
  const [selectedQueryItem, setSelectedQueryItem] = useState({});

  const onqueryItemClickHandler = (selectedItem) => {
    setSelectedQueryItem(selectedItem);
    setModalShow(true);
  };

  return (
    <Card className={classes["search-list-wrapper"]}>
      <Card.Body>
        <div className={classes["space-search-list-wrapper"]}>
          {rowLength > 0 &&
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
                        <Card.Text
                          dangerouslySetInnerHTML={{ __html: desc }}
                          className={classes["search-listitem-text"]}
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          {!isLoading && rowLength === 0 && (
            <p className={classes["no-records-found-text"]}>No Records Found</p>
          )}
          {isLoading && <Loader />}
        </div>
        {Object.keys(selectedQueryItem).length > 0 && (
          <CustomModal
            title={selectedQueryItem?.data[0]?.title || ""}
            show={modalShow}
            onHide={() => setModalShow(false)}
            fullscreen
          >
            <SearchListItem selectedQueryItem={selectedQueryItem} />
          </CustomModal>
        )}
      </Card.Body>
      {rowLength > 0 && (
        <Card.Footer className={classes["space-search-footer-wrapper"]}>
          <Button
            variant="primary"
            size="sm"
            className={classes["space-search-back"]}
            onClick={onBack}
          >
            Back
          </Button>
          <Button variant="primary" size="sm" onClick={onNext}>
            Next
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};
SearchList.propTypes = {
  isLoading: PropTypes.bool,
  queryResults: PropTypes.array,
  onBack: PropTypes.func,
  onNext: PropTypes.func,
};
export default SearchList;
