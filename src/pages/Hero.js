import React from "react";
import Header from "../components/hero/Header";
import Heros from "../components/hero/main/Heros";
import About from "../components/hero/main/About";
import Course from "../components/hero/main/Course";
import Team from "../components/hero/main/Team";
import Footer from "../components/hero/Footer";
import "../style/hero.scss";

export default function Hero() {
  return (
    <>
      <Header />
      <main>
        <Heros />
        <About />
        <Course />
        <Team />
      </main>
      <Footer />
    </>
  );
}
