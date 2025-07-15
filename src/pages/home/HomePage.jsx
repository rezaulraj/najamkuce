import React from "react";
import HeroHome from "./HeroHome";
import RentalVillas from "./RentalVillas";
import Agency from "./Agency";
import HomeVlog from "./HomeVlog";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <RentalVillas />
      <Agency />
      <HomeVlog />
    </div>
  );
};

export default HomePage;
