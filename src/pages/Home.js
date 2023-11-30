import React from "react";
import { Outlet } from "react-router-dom";

// HOME COMPONENTS
import HomeHeader from "../components/home/Header";
import HomeSidebar from "../components/home/Sidebar";
import "../style/home.scss";

export default function Home() {
  return (
    <div id="home">
      <HomeHeader />
      <HomeSidebar />
      <Outlet />
    </div>
  );
}
