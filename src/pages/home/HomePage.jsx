import React from "react";
import HeroHome from "./HeroHome";
import RentalVillas from "./RentalVillas";
import Agency from "./Agency";
import HomeVlog from "./HomeVlog";
import InstagramPost from "./InstragramPost";
import Support from "./Support";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroHome />
      <RentalVillas />
      <Agency />
      <HomeVlog />
      <InstagramPost />
      <Support />
    </div>
  );
};

export default HomePage;
