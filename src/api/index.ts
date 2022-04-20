import axios from "axios";

const $api = axios.create({
  baseURL: "http://87.249.49.88:8000/",
  headers: {
    "Content-type": "application/json",
  },
});

$api.interceptors.request.use((config) => {
  if (localStorage.getItem("token"))
    config.headers!.Authorization = `Token ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
