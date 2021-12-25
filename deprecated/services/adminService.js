import http from "../../services/httpService";

const apiEndpoint = "https://api.gettelly.com/admin";

if (typeof window !== "undefined") {
  http.setJwt(getToken());
}

function getToken() {
  return localStorage.getItem("token");
}

function getAllUsers() {
  return http.get(apiEndpoint);
}

function getUser(id) {
  return http.get(apiEndpoint + id);
}

export default {
  getAllUsers,
  getUser,
};
