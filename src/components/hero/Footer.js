import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";

import { IoIosArrowDown } from "react-icons/io";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTelegram,
  BiSolidPhoneCall,
} from "react-icons/bi";

export default function Footer() {
  const [t, i18n] = useTranslation("global");
  const [coursess, setCourses] = useState("");
  const [telnumber, setTelnumber] = useState("");
  const [state, handleSubmit] = useForm("xqkvwgjr");

  useEffect(() => {
    if (telnumber.toLowerCase() == "e") setTelnumber("");
    setTelnumber(telnumber.toLowerCase().replace("e", ""));
  }, [telnumber]);

  function taost() {
    if (state.succeeded)
      toast.success(t("heros.footer.petition"), {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  }

  useEffect(() => taost(), [state.succeeded]);

  return (
    <footer id="contact">
      <div className="container">
        <div className="title" data-aos="fade-up">
          <h2 className="heading">{t("heros.footer.title")}</h2>
          <form className="formes" onSubmit={handleSubmit}>
            <div className="form">
              <input
                type="text"
                id="name"
                name="Ism Sharif"
                autoComplete="off"
                required
              />
              <label htmlFor="name">{t("heros.footer.name")}</label>
            </div>
            <div className="form">
              <input
                type="number"
                id="tel"
                name="Telefon raqam"
                autoComplete="off"
                value={telnumber}
                onChange={({ target }) => setTelnumber(target.value)}
                required
              />
              <label htmlFor="tel">{t("heros.footer.phone")}</label>
            </div>

            <div
              className="dropdown"
              onClick={() =>
                document.querySelector(".dropdown").classList.toggle("active")
              }
            >
              <div className="form">
                <input
                  type="text"
                  id="coursess"
                  name="Kurs turi"
                  autoComplete="off"
                  value={coursess}
                  required
                />
                <label
                  htmlFor="coursess"
                  onClick={() =>
                    document
                      .querySelector(".dropdown")
                      .classList.toggle("active")
                  }
                >
                  {t("heros.footer.course")}
                </label>
                <IoIosArrowDown />
              </div>

              <div className="option">
                <div onClick={() => setCourses("Frontend")}>Frontend</div>
                <div onClick={() => setCourses("Backend")}>Backend</div>
                <div onClick={() => setCourses("Ingliz tili")}>Ingliz tili</div>
              </div>
            </div>

            <button type="submit" disabled={state.submitting}>
              {t("heros.footer.success")}
            </button>
          </form>
        </div>

        <div className="map" data-aos="fade-left">
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.216432%2C41.252041&mode=search&oid=2471714961&ol=biz&z=17.22"
            frameBorder="0"
            width="100%"
            height="100%"
            lang="uz_UZ"
          ></iframe>
        </div>
      </div>

      <div className="nav">
        <div className="container">
          <div className="socials">
            <a
              className="social"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100095528861838"
            >
              <BiLogoFacebook /> <h6>Facebook</h6>
            </a>
            <a
              className="social"
              target="_blank"
              href="https://www.instagram.com/regular_school"
            >
              <BiLogoInstagram /> <h6>Instagram</h6>
            </a>
            <a
              className="social"
              target="_blank"
              href="https://t.me/regular_school"
            >
              <BiLogoTelegram /> <h6>Telegram</h6>
            </a>
            <a className="social" href="tel:+998555003663">
              <BiSolidPhoneCall /> <h5>+998555003663</h5>
            </a>
          </div>
          <p>{`OOO "Regular AR SIM" © 2022-${new Date().getFullYear()}.`}</p>
        </div>
      </div>
    </footer>
  );
}
