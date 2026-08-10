// src/api/endpoints.ts

export const ENDPOINTS = {
  USERS: "/users",
  BOOKINGS: "/bookings",
  ROOMS: "/rooms",
  AUTH: {
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
  },
} as const;