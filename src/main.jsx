import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../css/common.css";
import "../css/about.css";
import "../css/footer.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
