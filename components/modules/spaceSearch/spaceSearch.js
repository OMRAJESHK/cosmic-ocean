"use client";
import React, { useEffect, useState } from "react";
import SearchList from "./searchList";
import classes from "./spaceSearch.module.css";
import Flexbox from "@/components/ui/flexbox/flexbox";
import { useSearchParams } from "next/navigation";
import { GET, withCatch } from "@/api/services";
import apiLocations from "@/api/apiDirectory";

const SpaceSearch = () => {
  const DEFAULT_ACTIVE = 1;
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [query, setQuery] = useState(searchQuery);
  const [queryResults, setQueryResults] = useState([]);
  const [page, setPage] = useState(DEFAULT_ACTIVE);
  const [isLoading, setIsLoading] = useState(true);

  const onQueryChangeHandler = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const getQueryResults = async (payload) => {
    try {
      setQueryResults([]);
      setIsLoading(true);
      // eslint-disable-next-line no-unused-vars
      const { error, response } = await withCatch(
        GET,
        apiLocations.GET_SPACE_SEARCH(),
        payload,
      );
      if (response?.status === 200) {
        setQueryResults(response?.data ?? []);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      console.log("error", err);
      setQueryResults([]);
      setIsLoading(false);
    }
  };

  const onBackClickHandler = () => {
    if (page <= DEFAULT_ACTIVE) setPage(DEFAULT_ACTIVE);
    else setPage((prev) => prev - 1);
  };
  const onNextClickHandler = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const payload = { q: query, page };
    getQueryResults(payload);
  }, [query, page]);

  return (
    <div className={classes["space-search-wrapper"]}>
      <div className={classes["title-wrapper"]}>
        <h1>Search Results</h1>
      </div>
      <form>
        <Flexbox alignItems="center">
          <input
            type="search"
            value={query}
            placeholder="search..."
            onChange={onQueryChangeHandler}
            className={classes["space-search-input"]}
          />
        </Flexbox>
      </form>
      <SearchList
        isLoading={isLoading}
        queryResults={queryResults}
        onBack={onBackClickHandler}
        onNext={onNextClickHandler}
      />
    </div>
  );
};

export default SpaceSearch;
