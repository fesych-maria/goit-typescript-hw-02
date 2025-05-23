import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
    <Toaster position="top-right" />
  </StrictMode>
);
