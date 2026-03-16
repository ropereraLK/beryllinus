import httpClient from "../lib/httpClient";

export async function login(email: string, password: string) {
  const response = await httpClient.post("/auth/login", {
    email,
    password,
  });

  return response.data;
}