import axios from "axios";

const BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_BASE_URI
  : import.meta.env.VITE_PROD_URI;

export const TASKS = "/api/tasks";

// document location host gives back the complete url;
// console.log(document.location.host);

export const AXIOS = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { Accept: "application/json" },
});
