import React from "react";
import SportsHero from "./SportsHero";
import SportEvent from "./SportEventBlog";

const SportsPage = () => {
  return (
    <div className="min-h-screen">
      <SportsHero />
      <SportEvent />
    </div>
  );
};

export default SportsPage;
