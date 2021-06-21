import http from "./httpService";

const apiEndpoint = "https://api.gettelly.com/profile/";

function getProfile(id) {
  return http.get(apiEndpoint + id);
}

export default {
  getProfile,
};
