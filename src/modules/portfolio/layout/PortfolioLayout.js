import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PortfolioLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-soft-black text-slate-200 font-sans selection:bg-accent-blue selection:text-white relative">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioLayout;
