import http from "./httpService";

const apiEndpoint = "https://api.gettelly.com/user/";

function getMe() {
  return http.get(apiEndpoint + "me");
}

function updateSettings(data) {
  return http.post(apiEndpoint + "settings", data);
}

function updateLinks(data) {
  return http.post(apiEndpoint + "links", data);
}

function uploadProfilePicture(formData, cb) {
  return http.post(apiEndpoint + "upload", formData, {
    onUploadProgress: (progressEvent) => {
      cb(Math.round((progressEvent.loaded / progressEvent.total) * 100));
    },
  });
}

export default {
  getMe,
  updateSettings,
  updateLinks,
  uploadProfilePicture,
};
