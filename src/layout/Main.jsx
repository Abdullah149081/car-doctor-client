import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Page/shared/Footer/Footer";
import Header from "../Page/shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="md:min-h-[calc(100vh-470px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
