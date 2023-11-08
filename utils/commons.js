import apiLocations from "@/api/apiDirectory";
import axios from "axios";

export const formatDecimal = (number, decimalPlace = 2) => {
  const formattedNumber = Number(number).toFixed(decimalPlace) || number;
  return formattedNumber;
};

export const multiApiCall = async (apis = []) => {
  const apiResults = [];
  if (apis.length < 0) return [];
  apis.map((api) => {
    const res = axios.get(api);
    apiResults.push(res);
  });
  return apiResults;
};

export const getMultiApis = (lastFourDates) => {
  let urlList = [];
  lastFourDates.forEach((date = "", url = "") => {
    urlList = [...urlList, url];
  });
  return urlList;
};
