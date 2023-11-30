import React from "react";
import { useTranslation } from "react-i18next";
import "../style/login.scss";

export default function Login() {
  const [t, i18n] = useTranslation("global");
  return (
    <main id="login">
      <h1>{t("homes")}</h1>
    </main>
  );
}
