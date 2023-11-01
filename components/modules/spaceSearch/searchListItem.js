import React from "react";
import PropTypes from "prop-types";
import Flexbox from "@/components/ui/flexbox/flexbox";
import CustomImage from "@/components/ui/customImage";
import classes from "./spaceSearch.module.css";

const SearchListItem = (props) => {
  const { selectedQueryItem } = props;
  const desc = selectedQueryItem?.data[0]?.description;
  const desc508 = selectedQueryItem?.data[0]?.description_508;
  return (
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
          <p dangerouslySetInnerHTML={{ __html: desc }} />
          <p dangerouslySetInnerHTML={{ __html: desc508 }} />
        </div>
      </Flexbox>
    </article>
  );
};

SearchListItem.propTypes = {
  selectedQueryItem: PropTypes.object,
};

export default SearchListItem;
