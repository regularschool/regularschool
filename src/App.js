import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import About from "./components/main/About";
import Founder from "./components/main/Founder";
import Course from "./components/main/Course";
import Footer from "./components/footer/Footer";
import Team from "./components/main/Team";
import AOS from "aos";


AOS.init();

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Course />
        <Team />
      </main>
      <Footer />
    </>
  );
}
