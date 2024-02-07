// export const baseUrl = "http://localhost:3000";
export const baseUrl = "https://cosmic-ocean.vercel.app";
export const apiBaseUrl = `${baseUrl}/api/`;

export const getUrl = (location) => {
  return location;
};

const apiLocations = {
  GET_APOD: () => getUrl(`${apiBaseUrl}apod`),
  GET_MARS_PHOTOS: () => getUrl(`${apiBaseUrl}marsExploration`),
  GET_NEO: () => getUrl(`${apiBaseUrl}neo`),
  GET_SPACE_SEARCH: () => getUrl(`${apiBaseUrl}spaceSearch`),

  SEARCH: (q) =>
    getUrl(`${process.env.NASA_SEARCH_BASE_URL}search?q=${q}&page=1`),
  APOD: (date) =>
    getUrl(
      `${process.env.NASA_BASE_URL}planetary/apod?api_key=${process.env.NASA_API_TOKEN}&date=${date}`,
    ),
  MARS_PHOTOS: (rover) =>
    getUrl(
      `${process.env.NASA_MARS_BASE_API}${rover}/photos?api_key=${process.env.NASA_API_TOKEN}`,
    ),
  SPACE_SEARCH: () => getUrl(`${process.env.NASA_SEARCH_BASE_URL}search`),
  NEO: (lookUp) =>
    getUrl(
      `${process.env.NASA_BASE_URL}neo/rest/v1/${
        lookUp === 0 ? "feed" : "neo/browse"
      }?api_key=${process.env.NASA_API_TOKEN}`,
    ),
};

export default apiLocations;
