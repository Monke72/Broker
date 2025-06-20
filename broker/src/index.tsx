import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./App/styles/index.scss";
import "./shared/assets/fonts/fonts.scss";
import { StoreProvider } from "@app/Providers/StoreProvider/index.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </StoreProvider>
  </BrowserRouter>
);
