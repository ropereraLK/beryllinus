import httpClient from "@/lib/http/client";

import type { User } from "../model/types";

export async function login(email: string, password: string): Promise<User> {
  const response = await httpClient.post("/auth/login", {
    email,
    password,
  });

  return response.data;
}
