import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";

import "aos/dist/aos.css";
import "rodal/lib/rodal.css";
import "./style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
