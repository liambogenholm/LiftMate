"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import WorkoutCard from "./components/WorkoutCard"

function workouts() {
  

  const router = useRouter();  

  return (
    <main className="flex items-center flex-col min-h-screen bg-gradient-to-b from-gradient-yellow to-main-yellow ">
      <h1 className="font-sans font-bold italic text-3xl text-dark-blue my-4">
        Workouts
      </h1>

      <div className="py-6 flex flex-col items-center w-11/12 bg-white rounded-3xl border-gradient-yellow border-4 shadow-2xl ">
        <WorkoutCard></WorkoutCard>
      </div>
    </main>
  );
}

export default workouts;
