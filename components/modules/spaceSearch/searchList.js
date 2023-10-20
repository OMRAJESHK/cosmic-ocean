import React from "react";
import Pagination from "react-bootstrap/Pagination";

import Card from "react-bootstrap/Card";
import classes from "./spaceSearch.module.css";

const SearchList = () => {
  return (
    <Card>
      <Card.Body>
        <div className={classes["space-search-list-wrapper"]}>
          <Card>
            <Card.Body className={classes["space-search-list-card-body"]}>
              <div className={classes["space-search-list-item-wrapper"]}>
                <div>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1696863122595-f980e13edf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
                <div>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>photographor name and date</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className={classes["space-search-list-card-body"]}>
              <div className={classes["space-search-list-item-wrapper"]}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1693132038772-7ad13c7bad9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
                <div>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>photographor name and date</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className={classes["space-search-list-card-body"]}>
              <div className={classes["space-search-list-item-wrapper"]}>
                <div>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1696863122595-f980e13edf88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
                <div>
                  <span></span>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>photographor name and date</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Card.Body>
      <Card.Footer className={classes["space-search-footer-wrapper"]}>
        <Pagination className={classes["space-search-pagination-wrapper"]}>
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
        </Pagination>
      </Card.Footer>
    </Card>
  );
};

export default SearchList;
