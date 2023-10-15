"use client";
import React, { useState } from "react";
import SearchList from "./searchList";
import classes from "./spaceSearch.module.css";

const SpaceSearch = () => {
  const [query, setQuery] = useState("");

  const onQuerySubmit = (e) => {
    e.preventDefault();
    if (query.length !== 0) console.log("the query", query);
  };

  const onQueryChangeHandler = (e) => {
    const { value } = e.target;
    setQuery(value);
  };
  return (
    <div className={classes["space-search-wrapper"]}>
      <h1>Search Results</h1>
      <form onSubmit={onQuerySubmit}>
        <input
          type="search"
          value={query}
          placeholder="search..."
          onChange={onQueryChangeHandler}
          className={classes["space-search-input"]}
        />
        <button type="submit" className={classes["space-search-submit"]}>
          search
        </button>
      </form>
      <SearchList />
    </div>
  );
};

export default SpaceSearch;
