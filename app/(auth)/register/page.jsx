"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  LogOut,
  Plus,
  ChevronRight,
  ArrowLeft,
  Dumbbell,
  BarChart2,
  Award,
  Save,
} from "lucide-react";

function register() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-coolGray p-4">
      <div className="w-full max-w-md p-8 my-4 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slateBlue">LiftMate</h1>
          <div className="flex justify-center mt-2 text-palatinateBlue">
            <Dumbbell size={32} />
          </div>
        </div>

        <form onSubmit={console.log("hit")}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="firstname"
              type="text"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="lastName"
              type="text"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cnfPassword"
            >
              Confirm Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="cnfPassword"
              type="password"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button
            className="bg-palatinateBlue w-full py-2 px-4 rounded font-bold text-white focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="#" className="font-bold text-slateBlue">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default register;
