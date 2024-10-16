import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";

function PrivateRouteHandle({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (!token) {
      navigate("/login", { state: path });
    }
  }, [navigate, path]);

  return <>{children}</>;
}

export default PrivateRouteHandle;
