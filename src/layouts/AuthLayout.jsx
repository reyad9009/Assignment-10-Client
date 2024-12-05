import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="font-poppins">
      <div className="max-w-[100rem] mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="max-w-[100rem] mx-auto mt-[5%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
