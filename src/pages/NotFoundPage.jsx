import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return <h1 style={{ color: "red" }}>NotFoundPage</h1>;
}

export default NotFoundPage;
