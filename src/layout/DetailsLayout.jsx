import React from "react";

import { Outlet } from "react-router-dom";
import DetailHeader from "../components/DetailHeader";
import Footer from "../components/Footer";

const DetailsLayout = () => {
  return (
    <div>
      <DetailHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DetailsLayout;
