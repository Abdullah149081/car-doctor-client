import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import logo from "../../public/logo.svg";
import Footer from "../Page/shared/Footer/Footer";
import Header from "../Page/shared/Header/Header";
import { AuthContext } from "../providers/AuthProviders";

const Main = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col gap-8 justify-center items-center">
        <img className="animate-ping" src={logo} alt="" />
        <RiseLoader color="#3ad636" size={15} />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Toaster />
      <div className="md:min-h-[calc(100vh-470px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
