import axios from "axios";

export const defaultHttpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const keycloakHttpClient = axios.create({
  //TODO remove hardcoaded URL
  baseURL: "http://localhost:8080",
  timeout: 30_000,
  headers: {
    "Content-Type": "application/json",
  },
});