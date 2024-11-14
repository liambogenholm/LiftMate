"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <main className="flex items-center flex-col h-screen bg-gradient-to-b from-gradient-yellow to-main-yellow justify-center">
      <div className="flex flex-col items-center  h-3/4 w-3/4 bg-white rounded-3xl border-gradient-yellow border-4 shadow-lg ">
        <h1 className="my-16 text-8xl text-dark-blue font-sans font-bold italic">
          Lift<br></br>Mate.
        </h1>

        <input
          type="text"
          id="userEmail"
          name="Email"
          className="m-4 bg-gradient-yellow rounded-3xl border-dark-blue border-2 w-4/5 p-4 placeholder-gray-400 font-sans text-dark-blue"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="something@email.com"
        ></input>

        <input
          type="text"
          id="userEmail"
          name="Email"
          className="m-4 bg-gradient-yellow rounded-3xl border-dark-blue border-2 w-4/5 p-4 placeholder-gray-400 text-dark-blue"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
      </div>
    </main>
  );
}

export default login;
