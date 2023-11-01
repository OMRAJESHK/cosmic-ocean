"use client";
import React, { useEffect, useState } from "react";
import SearchList from "./searchList";
import classes from "./spaceSearch.module.css";
import Button from "react-bootstrap/Button";
import Flexbox from "@/components/ui/flexbox/flexbox";
import { useSearchParams } from "next/navigation";
import { GET, withCatch } from "@/api/services";
import apiLocations from "@/api/apiDirectory";

const SpaceSearch = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [query, setQuery] = useState(searchQuery);
  const [queryResults, setQueryResults] = useState([]);
  const [page, setPage] = useState(1);
  const onQuerySubmit = (e) => {
    e.preventDefault();
    if (query.length !== 0) getQueryResults();
  };

  const onQueryChangeHandler = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const getQueryResults = async () => {
    const payload = { q: query, page };

    try {
      const { error, response } = await withCatch(
        GET,
        apiLocations.GET_SPACE_SEARCH(),
        payload,
      );
      if (response?.status === 200) {
        setQueryResults(response?.data ?? []);
        return;
      }
    } catch (err) {
      console.log("error", err);
      setQueryResults([]);
    }
  };
  useEffect(() => {
    getQueryResults();
  }, []);
  return (
    <div className={classes["space-search-wrapper"]}>
      <h1>Search Results</h1>
      <form onSubmit={onQuerySubmit}>
        <Flexbox alignItems="center">
          <input
            type="search"
            value={query}
            placeholder="search..."
            onChange={onQueryChangeHandler}
            className={classes["space-search-input"]}
          />
          <Button
            variant="primary"
            size="sm"
            type="submit"
            className={classes["space-search-submit"]}
          >
            Search
          </Button>
        </Flexbox>
      </form>
      <SearchList queryResults={queryResults} />
    </div>
  );
};

export default SpaceSearch;
