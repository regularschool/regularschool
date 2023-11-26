import React from "react";
import { Outlet } from "react-router-dom";

// HOME COMPONENTS
import HomeHeader from "../components/home/Header";
import HomeSidebar from "../components/home/Sidebar";
import "../style/home.scss";

export default function Home() {
  return (
    <div id="home">
      <h1 id="soon">Coming Soon!</h1>
      <HomeHeader />
      <HomeSidebar />
      <Outlet />
    </div>
  );
}
