import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Heros() {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="hero">
      <div className="container">
        <div className="title" data-aos="fade-right">
          <h1>
            <span>{t("heros.hero.regular")}</span> {t("heros.hero.title")}
          </h1>
          <p>{t("heros.hero.subtitle")}</p>
          <Link
            className="logo"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            {t("heros.hero.link")}
          </Link>
        </div>
      </div>
    </section>
  );
}
