import axios from "axios";

console.log(
  "BFF URL:",
  import.meta.env.VITE_BFF_BASE_URL
);

console.log("MODE:", import.meta.env.MODE);
export const defaultHttpClient = axios.create({
  baseURL: import.meta.env.VITE_BFF_BASE_URL,
  timeout: 30_000,
  headers: {
    "Content-Type": "application/json",
  },
});

console.log("Axios baseURL:", defaultHttpClient.defaults.baseURL);

export const keycloakHttpClient = axios.create({
  //TODO remove hardcoaded URL
  baseURL: "http://localhost:8080",
  timeout: 30_000,
  headers: {
    "Content-Type": "application/json",
  },
});