"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <main className="flex items-center flex-col min-h-screen bg-gradient-to-b from-gradient-yellow to-main-yellow justify-center">
      <div className="py-6 flex flex-col items-center w-3/4 bg-white rounded-3xl border-gradient-yellow border-4 shadow-2xl ">
        <h1 className="mb-4 text-7xl text-dark-blue font-sans font-bold italic">
          Lift<br></br>Mate.
        </h1>

        <div className="w-4/5 mb-2">
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

        <div className="w-4/5 mb-2">
          <p className="w-full pl-4 font-sans font-bold italic">Password</p>
          <input
            type="text"
            id="userEmail"
            name="Email"
            className="mb-4 bg-gradient-yellow rounded-3xl border-dark-blue border-2 shadow-lg w-full p-4 placeholder-gray-500 text-dark-blue"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          ></input>
        </div>

        <div className="text-sm text-center font mb-5">
          <p>
            Or, sign in with <a>Google</a>.
          </p>

          <p>Don't have an account? Click here.</p>
        </div>

        <div className="w-4/5 mb-5">
          <button className="w-full p-4 bg-dark-blue text-white rounded-3xl text-center">
            Log in
          </button>
        </div>
      </div>
    </main>
  );
}

export default login;
