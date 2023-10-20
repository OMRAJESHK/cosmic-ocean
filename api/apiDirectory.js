export const baseUrl = "http://localhost:5000";
export const apiBaseUrl = `${baseUrl}/api`;

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
  SEARCH: (q) =>
    getUrl(`${process.env.NASA_SEARCH_BASE_URL}search?q=${q}&page=1`),
  USER_ME: () => getUrl(`${apiBaseUrl}/auth/me`),
  GET_ASSET: () => getUrl(`${apiBaseUrl}/asset`),
  PUT_ASSET: (id) => getUrl(`${apiBaseUrl}/asset/${id}`),
};

export default apiLocations;
