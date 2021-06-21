import http from "./httpService";

const apiEndpoint = "https://api.gettelly.com/";

if (typeof window !== "undefined") {
  http.setJwt(getToken());
}

function login(phone) {
  return http.post(apiEndpoint + "login", { phone });
}

function validateToken(token) {
  return http.post(apiEndpoint + "validate", { token });
}

function register(profileId, name, phone) {
  return http.post(apiEndpoint + "register", {
    profileId,
    name,
    phone,
  });
}

function logout() {
  localStorage.removeItem("token");
}

function storeToken(token) {
  localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}

export default {
  login,
  register,
  logout,
  storeToken,
  validateToken,
};
