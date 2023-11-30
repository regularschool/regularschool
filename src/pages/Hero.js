import React, { useEffect } from "react";
import Header from "../components/hero/Header";
import Heros from "../components/hero/main/Heros";
import About from "../components/hero/main/About";
import Course from "../components/hero/main/Course";
import Team from "../components/hero/main/Team";
import Footer from "../components/hero/Footer";
import "../style/hero.scss";
import { use } from "i18next";

export default function Hero() {
  function isMobile() {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  useEffect(() => {
    if (isMobile()) {
      document.querySelector("body").classList.remove("dektop");
      document.querySelector("body").classList.add("mobile");
    } else {
      document.querySelector("body").classList.remove("mobile");
      document.querySelector("body").classList.add("dektop");
    }
  }, [isMobile()]);

  console.log(isMobile());

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
      {isMobile() && <div id="iosScreen" />}
    </>
  );
}
