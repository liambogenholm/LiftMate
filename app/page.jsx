"use client";

import React from "react";
import { useRouter } from "next/navigation";

function login() {
  const router = useRouter();

  const handleLogin = () => {
    //nav
    router.push("/home");
  };

  return (
    <main
      className=" flex-1 flex-col h-screen bg-gradient-to-b from-gradient-yellow to-main-yellow align-center
    "
    >
      <div className="h-3/4 w-3/4 bg-white">
        <p>LOGIN</p>
        <button onClick={handleLogin}>Click for home page</button>
      </div>
    </main>
  );
}

export default login;
