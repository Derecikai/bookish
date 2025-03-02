import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { Link } from "react-router-dom";
import User from "./User";
import { useAuth } from "../Contexts/AuthContext";
import { jwtDecode } from "jwt-decode";

export default function Users() {
  const [profiles, setProfiles] = useState(null);
  const { isLoggedIn } = useAuth();
  const [role, setRole] = useState(null);

  const getProfiles = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users/all");
      console.log(response.data);
      setProfiles(response.data);
    } catch (error) {}
  };

  const getId = () => {
    const token = localStorage.getItem("jwtToken");
    console.log("Token:", token); // Log the token
    if (token && isLoggedIn) {
      const decoded = jwtDecode(token);
      console.log("Decoded:", decoded); // Log the decoded object
      setRole(decoded.role);
    }
  };

  useEffect(() => {
    getProfiles();
    getId();
  }, [role, isLoggedIn]);

  if (role != "ADMIN")
    return (
      <div>
        <h3>You do not have permission here</h3>
      </div>
    );

  return (
    <div className="anunturi-container">
      <div className="anunturi-form-Container morepadding">
        <div className="books-grid">
          {profiles &&
            profiles.map((item, index) => (
              <Link key={index} to={`/profile/${item.id}`}>
                <User key={index} props={item} />{" "}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
