import React, { useEffect, useState } from "react";
import { Link as LinkTo, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import i18next from "i18next";

import { IoClose } from "react-icons/io5";
import { info } from "../../utility/toastify";
import logoBlack from "../../image/school.png";
import logoWhite from "../../image/schoolWhite.png";
import langRU from "../../image/langRu.svg";
import langUZ from "../../image/langUz.svg";

export default function Header() {
  const confirm = useSelector((state) => state.mainSlice.account);
  const [isScrolled, setScrolled] = useState(false);
  const [removeTesting, setRemoveTesting] = useState(true);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.pageYOffset > 100) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    info("Sayt test rejimida ishlamoqda!", "bottom-left");
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [lang, setLang] = useState(true);
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    document.querySelector("html").setAttribute("lang", lang);
  };

  useEffect(() => {
    handleChangeLanguage(language);
  }, [lang]);

  function changeLanguage() {
    if (lang) {
      localStorage.setItem("lang", "ru");
      setLang(!lang);
    } else {
      localStorage.setItem("lang", "uz");
      setLang(!lang);
    }
  }

  return (
    <header id="header" className={`${isScrolled ? "active" : ""}`}>
      <div className="container" data-aos="fade-down">
        <Link
          className="logo"
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src={isScrolled ? logoBlack : logoWhite} alt=" " />
        </Link>

        <nav>
          <ul>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {t("heros.header.about")}
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="course"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {t("heros.header.courses")}
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {t("heros.header.team")}
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="founder"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                {t("heros.header.news")}
              </Link>
            </li>
            <li>
              <Link
                className="logo"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                {t("heros.header.call")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="login">
          <button onClick={changeLanguage}>
            <img
              src={i18n.language == "ru" ? langRU : langUZ}
              alt={i18n.language == "ru" ? "ru" : "uz"}
            />
          </button>
          {confirm ? (
            confirm.image ? (
              <div className="user" onClick={() => navigate("/home")}>
                <img src={confirm.image} alt="user" />
              </div>
            ) : (
              <LinkTo to="/home">{t("login.profile")}</LinkTo>
            )
          ) : (
            <LinkTo to="/login">{t("heros.header.login")}</LinkTo>
          )}
        </div>

        <div className="menu">
          <div
            onClick={() =>
              document.querySelector(".menu").classList.toggle("active")
            }
            className={`toggle ${isScrolled ? "active" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="switch">
            <div className={`list ${isScrolled ? "active" : ""}`}>
              <Link
                className="list-item"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() =>
                  document.querySelector(".menu").classList.toggle("active")
                }
              >
                {t("heros.header.about")}
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="course"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() =>
                  document.querySelector(".menu").classList.toggle("active")
                }
              >
                {t("heros.header.courses")}
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() =>
                  document.querySelector(".menu").classList.toggle("active")
                }
              >
                {t("heros.header.team")}
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="news"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() =>
                  document.querySelector(".menu").classList.toggle("active")
                }
              >
                {t("heros.header.news")}
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() =>
                  document.querySelector(".menu").classList.toggle("active")
                }
              >
                {t("heros.header.call")}
              </Link>
            </div>
            <div className="mobileLogin">
              <button onClick={changeLanguage}>
                <img
                  src={i18n.language == "ru" ? langRU : langUZ}
                  alt={i18n.language == "ru" ? "ru" : "uz"}
                />
              </button>
              {confirm ? (
                <LinkTo to="/home">{t("login.profile")}</LinkTo>
              ) : (
                <LinkTo to="/login">{t("heros.header.login")}</LinkTo>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
