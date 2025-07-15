import React from "react";
import HeroVillas from "./HeroVillas";
import AllVillas from "./AllVillas";
import VillasInCroatia from "./VillasInCoretia";

const VillasPage = () => {
  return (
    <div className="min-h-screen">
      <HeroVillas />
      <AllVillas />
      <VillasInCroatia />
    </div>
  );
};

export default VillasPage;
