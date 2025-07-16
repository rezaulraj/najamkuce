import React from "react";
import HeroTown from "./HeroTown";
import TownsBlog from "./TownsBlog";

const TownPage = () => {
  return (
    <div className="min-h-screen">
      <HeroTown />
      <TownsBlog />
    </div>
  );
};

export default TownPage;
