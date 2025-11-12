import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/pages-styles/AddGame.css";
import AddGame from "./AddGame.jsx";

function pruebas() {
  return (
    <div>
      <Header menuType="main" className="header-vertical" />
      <AddGame />
      <Footer />
    </div>
  );
}

export default pruebas;
