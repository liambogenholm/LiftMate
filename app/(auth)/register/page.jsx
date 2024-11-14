"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const router = useRouter();

  return (
    <main className="flex items-center flex-col min-h-screen bg-gradient-to-b from-gradient-yellow to-main-yellow ">
      <h1 className="font-sans font-bold italic text-3xl text-dark-blue my-4">
        Register
      </h1>

      <div className="py-6 flex flex-col items-center w-3/4 bg-white rounded-3xl border-gradient-yellow border-4 shadow-2xl ">
        <div className="w-4/5 ">
          <p className="w-full pl-4 font-sans font-bold italic">First Name</p>
          <input
            type="text"
            id="firstName"
            name="FirstName"
            className="mb-4 bg-gradient-yellow rounded-3xl border-dark-blue border-2 shadow-lg w-full p-4 placeholder-gray-500 font-sans text-dark-blue"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="something@email.com"
          ></input>
        </div>

        <div className="w-4/5">
          <p className="w-full pl-4 font-sans font-bold italic">Last Name</p>
          <input
            type="text"
            id="lastName"
            name="LastName"
            className="mb-4 bg-gradient-yellow rounded-3xl border-dark-blue border-2 shadow-lg w-full p-4 placeholder-gray-500 font-sans text-dark-blue"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="something@email.com"
          ></input>
        </div>

        <div className="w-4/5">
          <p className="w-full pl-4 font-sans font-bold italic">Email</p>
          <input
            type="text"
            id="userEmail"
            name="Email"
            className="mb-4 bg-gradient-yellow rounded-3xl border-dark-blue border-2 shadow-lg w-full p-4 placeholder-gray-500 font-sans text-dark-blue"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="something@email.com"
          ></input>
        </div>

        <div className="w-4/5">
          <p className="w-full pl-4 font-sans font-bold italic">Password</p>
          <input
            type="text"
            id="userPassword"
            name="Password"
            className="mb-4 bg-gradient-yellow rounded-3xl border-dark-blue border-2 shadow-lg w-full p-4 placeholder-gray-500 font-sans text-dark-blue"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="something@email.com"
          ></input>
        </div>

        <div className="w-4/5 mb-2">
          <p className="w-full pl-4 font-sans font-bold italic">
            Confirm Password
          </p>
          <input
            type="text"
            id="userConfirmPassword"
            name="ConfirmPassword"
            className="mb-4 bg-gradient-yellow rounded-3xl border-dark-blue border-2 shadow-lg w-full p-4 placeholder-gray-500 font-sans text-dark-blue"
            value={cPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="something@email.com"
          ></input>
        </div>

        <div className="w-4/5 my-5">
          <button className="w-full p-4 bg-dark-blue text-white rounded-3xl text-center">
            Log in
          </button>
        </div>
      </div>
    </main>
  );
}

export default register;
