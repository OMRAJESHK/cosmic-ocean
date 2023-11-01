export const baseUrl = "http://localhost:3000";
export const apiBaseUrl = `${baseUrl}/api/`;

// https://api.nasa.gov/

// https://api.nasa.gov/planetary/apod?api_key=${process.env.API_URL}&date=2023-10-13

/* 
  https://api.nasa.gov/ - for Docs
  https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
  
  Neo - Feed
  -------------
  Retrieve a list of Asteroids based on their closest approach date to Earth.
  GET https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY
*/

/* 
  Neo - Lookup
  -------------
  Lookup a specific Asteroid based on its NASA JPL small body (SPK-ID) ID
  GET https://api.nasa.gov/neo/rest/v1/neo/
*/

/* 
  Neo - Browse
  -------------
  Browse the overall Asteroid data-set
  GET https://api.nasa.gov/neo/rest/v1/neo/browse/
*/

//https://images-api.nasa.gov/search?q=jwst&page=1

// https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=ZGRpnMltsDmQ4Z6NyY551gR7FpNozTyE4Cc3RWb6
// https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=ZGRpnMltsDmQ4Z6NyY551gR7FpNozTyE4Cc3RWb6

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ZGRpnMltsDmQ4Z6NyY551gR7FpNozTyE4Cc3RWb6
// https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=3975&api_key=ZGRpnMltsDmQ4Z6NyY551gR7FpNozTyE4Cc3RWb6&date=2023-10-16
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=ZGRpnMltsDmQ4Z6NyY551gR7FpNozTyE4Cc3RWb6 pagination
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-6-3&api_key=DEMO_KEY

export const getUrl = (location) => {
  return location;
};

const apiLocations = {
  GET_APOD: (date) => getUrl(`${apiBaseUrl}apod?date=${date}`),
  GET_MARS_PHOTOS: () => getUrl(`${apiBaseUrl}marsExploration`),
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
};

export default apiLocations;
