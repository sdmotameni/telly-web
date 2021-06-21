import axios from "axios";
import logger from "./loggerService";

axios.interceptors.response.use(null, (error) => {
  const serversDown = !error.response || error.response.status == 503;

  if (serversDown) {
    return Promise.reject({
      errorMsg: "Servers are undergoing routine maintenance. Check back later.",
      serversDown: true,
    });
  }

  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log("Unexpected error logged.");
    return Promise.reject({
      errorMsg: error.response.data,
      serversDown: false,
    });
  }

  return Promise.reject({
    errorMsg: error.response.data,
    serversDown: false,
  });
});

function setJwt(token) {
  axios.defaults.headers.common["x-auth-token"] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
