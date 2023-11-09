import React from "react";
import PropTypes from "prop-types";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomImage from "@/components/ui/customImage";
import classes from "./spaceSearch.module.css";
import { Card } from "react-bootstrap";

const SearchListItem = (props) => {
  const { selectedQueryItem } = props;
  const desc = selectedQueryItem?.data[0]?.description;
  return (
    <Card>
      <Card.Body>
        <article className={classes["search-listitem-wrapper"]}>
          <Flexbox gap={10}>
            <div className={classes["search-listitem-img-wrapper"]}>
              <CustomImage
                src={selectedQueryItem?.links[0]?.href}
                alt="photo"
                width={400}
                height={400}
              />
            </div>
            <div className={classes["search-listitem-text-wrapper"]}>
              <h3>{selectedQueryItem?.data[0]?.title || ""}</h3>
              <hr />
              <p>{selectedQueryItem?.data[0]?.date_created.split("T")[0]}</p>
              <p>{selectedQueryItem?.data[0]?.secondary_creator || ""}</p>
              <Card.Text dangerouslySetInnerHTML={{ __html: desc }} />
              {selectedQueryItem.data[0]?.location && (
                <>
                  <span>Credit : </span>
                  <strong>{`${selectedQueryItem.data[0]?.location}`}yui</strong>
                </>
              )}
              <br />
              {selectedQueryItem.data[0]?.photographer && (
                <>
                  <span>Location : </span>
                  <i>{selectedQueryItem.data[0]?.photographer}</i>
                </>
              )}
            </div>
          </Flexbox>
        </article>
      </Card.Body>
    </Card>
  );
};

SearchListItem.propTypes = {
  selectedQueryItem: PropTypes.object,
};

export default SearchListItem;
