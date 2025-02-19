import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/all.scss"; //引入scss
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom"; //React路由

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
