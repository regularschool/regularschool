import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./router";

import "./fonts/gilroy/gilroy.css";
import "react-toastify/dist/ReactToastify.css";
import "rodal/lib/rodal.css";
import "aos/dist/aos.css";
import "./style/global.scss";

import { Provider } from "react-redux";
import store from "./store/store";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_ru from "./translations/ruGlobal.json";
import global_uz from "./translations/uzGlobal.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng:
    localStorage.getItem("lang") === null ? "uz" : localStorage.getItem("lang"),
  resources: {
    ru: {
      global: global_ru,
    },
    uz: {
      global: global_uz,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Router />
        <Analytics />
        <ToastContainer />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
  // </React.StrictMode>
);
