import React from "react";
import HeroNationalPark from "./HeroNationalPark";
import BlogNationalPark from "./BlogNationalPark";

const NationalPark = () => {
  return (
    <div className="min-h-screen">
      <HeroNationalPark />
      <BlogNationalPark />
    </div>
  );
};

export default NationalPark;
