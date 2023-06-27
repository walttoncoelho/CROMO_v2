import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import api from "../services/api";

const ProtectedRoute = ({ children }) => {
  let [component, setComponent] = useState(null);
  useEffect(() => {
    async function verificarLogin() {
      await api.get("/auth/verify", {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
      });
    };
    verificarLogin()
    .then(() => setComponent(children))
    .catch(() => setComponent(<Navigate to="/manager"/>));
  }, [children]);

  return (
    <>
    {(component !== null) && component}
    </>
  );
};

export default ProtectedRoute;