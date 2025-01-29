import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          WORK<span className="text-blue-400">OUT</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        I take responsibility if these workouts make me{" "}
        <span className="text-blue-400 font-medium">tremendously built</span>{" "}
        and am not undermining the difficulties of being{" "}
        <span className="text-blue-400 font-medium">ripped</span>.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept and Begin"}
      />
    </div>
  );
}
