import { Navigate } from "react-router-dom";

export default function Redirector() {

  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/transfer-detalle" replace />;
  }

  return <Navigate to="/login" replace />;
}