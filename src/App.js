import React from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";

// PAGES
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import Login from "./pages/Login";

AOS.init();

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
