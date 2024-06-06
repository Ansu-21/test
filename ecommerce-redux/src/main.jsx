import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="Home" element={}></Route>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Routes>
  </BrowserRouter>
);
