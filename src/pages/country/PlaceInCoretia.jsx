import React from "react";
import HeroInCroatia from "./HeroInCotatia";
import Destination from "./Destination";
import Gastronomy from "./Gastronomy";
import Adventures from "./Adventures";
import NewsAndTips from "./NewAndTips";

const PlaceInCoretia = () => {
  return (
    <div className="min-h-screen">
      <HeroInCroatia />
      <Destination />
      <Gastronomy />
      <Adventures />
      <NewsAndTips />
    </div>
  );
};

export default PlaceInCoretia;
