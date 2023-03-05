import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ViewportProvider } from "./context/viewportContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ViewportProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ViewportProvider>
  </React.StrictMode>
);
