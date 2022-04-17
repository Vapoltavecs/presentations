import axios from "axios";

const $api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-type": "application/json"
  }
});

$api.interceptors.request.use((config) => {
  if (localStorage.getItem("token"))
    config.headers!.Authorization = `Token ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
