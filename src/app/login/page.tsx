"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../state/auth/slice";
import {
  selectAuthError,
  selectAuthLoading,
  selectIsAuthenticated,
} from "../../state/auth/selectors";
import { loginUser } from "@/state/auth/thunks";


export default function LoginPage(){

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //TODO: async
  const handleSubmit = async (e:FormEvent)=>{
    e.preventDefault();

    dispatch(loginStart());

    //Api Call to login
    dispatch(
      loginUser({
        email,
        password,
      })
    );


  }

  if (isAuthenticated) {
    // If already logged in, redirect away from login
    router.push("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">

      {/* Title: Sign in */}
      <h1 className="mb-6 text-center text-2xl font-semibold text-gray-900">
        Sign in
      </h1>

      {/* Form: Email and Password */}

      <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>

      </form>
      


      </div>
    </div>
  );
}