import React, { useEffect, useState } from "react";
import { Link as LinkTo } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Link } from "react-scroll";
import i18next from "i18next";

import { IoClose } from "react-icons/io5";
import logoBlack from "../../image/school.png";
import logoWhite from "../../image/schoolWhite.png";
import langRU from "../../image/langRu.svg";
import langUZ from "../../image/langUz.svg";

export default function Header() {
  const [isScrolled, setScrolled] = useState(false);
  const [removeTesting, setRemoveTesting] = useState(true);

  const handleScroll = () => {
    if (window.pageYOffset > 100) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    toast.warning("Sayt test rejimida ishlamoqda!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [lang, setLang] = useState(true);
  const [t, i18n] = useTranslation("global");
  const language = localStorage.getItem("lang");
  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
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
          <LinkTo to="/login">{t("heros.header.login")}</LinkTo>
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
            <div className={`wrap ${isScrolled ? "active" : ""}`}></div>
            <div className={`list ${isScrolled ? "active" : ""}`}>
              <Link
                className="list-item"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Biz haqimizda
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="course"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Kurslar
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Jamoa
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="news"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Yangiliklar
              </Link>
              <Link
                className="list-item"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Aloqa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}