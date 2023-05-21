import React from "react";
import { BannerPage } from "../banner";
import { PopularGame } from "../poulargame/PopularGame.js";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <PopularGame />
    </div>
  );
}
