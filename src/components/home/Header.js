import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import i18next from "i18next";

import { IoMdSearch } from "react-icons/io";
import logoBlack from "../../image/school.png";
import bell from "../../image/bell.png";
import ru from "../../image/ru.png";
import uz from "../../image/uz.png";

export default function HomeHeader() {
  const user = useSelector((state) => state.mainSlice.account);
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

  function getNumber() {
    return `${user.number.substring(0, 4)} ${user.number.substring(
      4,
      6
    )} ${user.number.substring(6, 9)} ${user.number.substring(
      9,
      11
    )} ${user.number.substring(11)}`;
  }

  return (
    <header>
      <Link to={"/"} className="logo">
        <img src={logoBlack} alt="Regular" width={120} />
      </Link>
      <div className="bar">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <IoMdSearch />
        </div>
        <div className="account">
          <button className="lang" onClick={changeLanguage}>
            <img
              src={i18n.language == "ru" ? ru : uz}
              alt={i18n.language == "ru" ? "ru" : "uz"}
            />
          </button>
          <button className="bell">
            <img src={bell} alt="bell" />
          </button>
          <div className="user">
            <img src={user.image} alt="user" />
            <div className="data">
              <h2>{`${user.firstname} ${user.lastname}`}</h2>
              <h3>{getNumber()}</h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
