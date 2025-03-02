import React, { useEffect } from "react";
import Users from "./Users";
import { get } from "react-hook-form";

export default function CheckUsers() {
  const { logout, isLoggedIn } = useAuth();
  const [role, setRole] = useState("");

  const getId = () => {
    const token = localStorage.getItem("jwtToken");
    if (token && isLoggedIn) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }
  };

  useEffect(() => {
    getId();
  }, [role, isLoggedIn]);

  return <div>{role === "ADMIN" ? <Users /> : <NotPermision />}</div>;
}

function NotPermision() {
  return (
    <div>
      <h2>You do not have permission here</h2>
    </div>
  );
}
