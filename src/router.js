import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import AOS from "aos";

// PAGES
import Hero from "./pages/Hero";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Homes from "./components/home/main/Homes"
import Lessons from "./components/home/main/Lessons"
import Settings from "./components/home/main/Settings"
import Grouping from "./components/home/main/Grouping"
import Statistics from "./components/home/main/Statistics"
import Students from "./components/home/main/Students"

AOS.init();
export default function App() {
  const Auth = ({ children }) => {
    const confirm = useSelector((state) => state.mainSlice.account);
    return confirm ? children : (window.location.pathname = "/login");
  };
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/home" element={<Auth><Home /></Auth>} >
        <Route path="/home" element={<Homes />} />
        <Route path="/home/lessons" element={<Lessons />} />
        <Route path="/home/settings" element={<Settings />} />
        <Route path="/home/grouping" element={<Grouping />} />
        <Route path="/home/statistics" element={<Statistics />} />
        <Route path="/home/students" element={<Students />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
