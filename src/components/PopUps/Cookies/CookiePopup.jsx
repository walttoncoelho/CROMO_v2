import React, { useState, useEffect } from "react";
import "./Style.css"

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookie_accepted");
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  function handleAcceptClick() {
    localStorage.setItem("cookie_accepted", true);
    setIsVisible(false);
  }

  return (
    <div className={`cookie-popup  ${isVisible ? "visible" : ""}`}>
      <div className="style-barra"></div>
    <p className="paragraf">
      Nós usamos cookies para garantir que você tenha a melhor experiência em nosso site. Ao continuar a navegar, você concorda com o uso de cookies.
    </p>
    <button className="button-active" onClick={handleAcceptClick}>Aceitar</button>
    <button className="button-cancelar" onClick={handleAcceptClick}>Cancelar</button>
  </div>
  )
}
