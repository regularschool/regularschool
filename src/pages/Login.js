import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { wrong, success, warning } from "../utility/toastify";
import "../style/login.scss";

// GET IMAGE
import regular from "../image/logo.png";
import logo from "../image/logo.jpg";
// TEXTURA FRONT
import c1 from "../image/login/c1.svg";
import y2 from "../image/login/y2.svg";
import l3 from "../image/login/l3.svg";
// TEXTURA BACK
import z1 from "../image/login/z1.svg";
import z2 from "../image/login/z2.svg";
import o1 from "../image/login/o1.svg";
import o2 from "../image/login/o2.svg";
import l1 from "../image/login/l1.svg";
import l2 from "../image/login/l2.svg";
import y1 from "../image/login/y1.svg";
// REACT ICONS
import { IoIosArrowBack, IoMdEye, IoMdEyeOff } from "react-icons/io";

// FIREBASE
import { db } from "../firebase/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
  const [wait, setWait] = useState(false);
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [number, setNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    let formattedPhoneNumber = e.target.value.replace(/[^\d]/g, "");

    if (formattedPhoneNumber.length > 2)
      formattedPhoneNumber = `${formattedPhoneNumber.substring(
        0,
        2
      )} ${formattedPhoneNumber.substring(2)}`;
    if (formattedPhoneNumber.length > 6)
      formattedPhoneNumber = `${formattedPhoneNumber.substring(
        0,
        6
      )} ${formattedPhoneNumber.substring(6)}`;
    if (formattedPhoneNumber.length > 9)
      formattedPhoneNumber = `${formattedPhoneNumber.substring(
        0,
        9
      )} ${formattedPhoneNumber.substring(9)}`;

    setPhoneNumber(formattedPhoneNumber);

    if (formattedPhoneNumber.length == 12) {
      setNumber(`+998${formattedPhoneNumber.replaceAll(" ", "")}`);
    } else {
      setNumber("");
    }
  };

  const onSubmit = (data) => {
    setWait(true);
    if (number.length == 13 && password.length > 7) {
      try {
        // setDoc(doc(db, "users", number.substring(1)), {
        //   number,
        //   password,
        // });
        // success("Success");

        onSnapshot(
          query(
            collection(db, "users"),
            where("number", "==", number),
            where("password", "==", password)
          ),
          (snapshot) => {
            let failed = true;
            snapshot.docs.map((doc) => {
              dispatch({ type: "GET_ACCOUNT", payload: doc.data() });
              navigate("/home");
              failed = false;
              console.log("snapshot ishladi");
            });
            if (failed) wrong("Parol yoki telefoningiz xato !");
            console.log("snapshot ishlamadi");
          }
        );
        setTimeout(() => setWait(false), 3000);
      } catch (e) {
        setTimeout(() => setWait(false), 2000);
        wrong("Qandaydir xatolik yuz berdi !");
      }
    } else {
      setTimeout(() => setWait(false), 2000);
      if (number.length != 13) wrong("Telefon raqamingizni kiriting !");
      if (password.length < 8) wrong("Parol 8ta belgidan kam bo'lmasin!");
    }
  };

  function handleValidation() {
    if (errors.email) warning(t("login.validation.email"));
    if (errors.password) warning(t("login.validation.password"));
  }

  function changeEyePasword() {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  }

  return (
    <main id="login">
      <div className="wrapper">
        <div className="head">
          <Link to={"/"} className="back">
            <IoIosArrowBack />
            <h3>{t("login.back")}</h3>
          </Link>
          <Link to={"/"} className="regular">
            <img src={logo} alt="regular" />
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="child phone">
            <label htmlFor="phone">{t("login.phone")}</label>
            <input
              type="text"
              id="phone"
              placeholder="XX XXX XX XX"
              title="Telefon raqamingizni kiriting !"
              maxLength={12}
              value={phoneNumber}
              onChange={handleChange}
            />
            <span className="uztel">+998</span>
          </div>
          <div className="child password">
            <label htmlFor="password">{t("login.password")}</label>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              value={password}
              placeholder="••••••••"
              title="8ta belgidan kam bo'lmagan parol kiriting !"
              onChange={({ target }) => setPassword(target.value)}
            />
            <div className="eye" onClick={changeEyePasword}>
              {showPass ? (
                <IoMdEye></IoMdEye>
              ) : (
                <IoMdEyeOff color="#bcbec0"></IoMdEyeOff>
              )}
            </div>
          </div>
          <div className="child">
            <label id="forget">
              <span>{t("login.forget")}</span>
            </label>
            <button disabled={wait} onClick={handleValidation} type="submit">
              {t("login.signin")}
            </button>
          </div>
          <p>{t("login.last")}</p>
        </form>
      </div>
      <div className="textura">
        {window.innerWidth > 480 && (
          <>
            <img id="z1" src={z1} alt="z1" />
            <img id="z2" src={z2} alt="z2" />
            <img id="o1" src={o1} alt="o1" />
            <img id="o2" src={o2} alt="o2" />
            <img id="l1" src={l1} alt="l1" />
            <img id="l2" src={l2} alt="l2" />
            <img id="c1" src={c1} alt="c1" />
            <img id="l3" src={l3} alt="l3" />
          </>
        )}
        <img id="y1" src={y1} alt="y1" />
        <img id="y2" src={y2} alt="y2" />
      </div>
    </main>
  );
}
