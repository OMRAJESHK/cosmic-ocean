import axios from "axios";

const getHeaders = (token, isEmptyBody, hasFile) => {
  return {
    ...(!isEmptyBody &&
      !hasFile && {
        "Content-Type": "application/json",
      }),
    ...(hasFile && {
      "Content-Type": "multipart/form-data",
    }),
    ...(token && {
      "x-auth-token": token,
    }),
  };
};

const httpCall = (method) => async (url, token, payload, hasFile) => {
  const options = {
    method,
    url,
    // headers: getHeaders(token, payload === undefined, hasFile),
  };

  if (method === "GET") {
    options.params = payload;
  } else if (!hasFile && payload) {
    options.data = JSON.stringify(payload);
  } else if (hasFile && payload) {
    options.data = payload;
  }

  try {
    const response = await axios.request(options);
    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const GET = httpCall("GET");

export const withCatch = async (promise, ...delegate) => {
  try {
    const response = await promise(...delegate);
    return { error: {}, response };
  } catch (err) {
    return [err];
  }
};
