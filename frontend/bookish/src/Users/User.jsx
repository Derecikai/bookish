import React from "react";
import "./Users.css";
import axios from "axios";

export default function User({ props }) {
  const deleteUser = async () => {
    try {
      const response = axios.delete(`http://localhost:8080/users/${props.id}`);
      console.log(response);
    } catch (error) {
      console.log(error, error.message);
    }
  };

  console.log(props);
  return (
    <div className="profile-users">
      <img className="profile-pic-profiles" src={props.profilePicture} alt="" />
      <h1 className="username-profiles top-dawg">Email: {props.username}</h1>
      <h2 className="username-profiles">Location: {props.location}</h2>
      <button className="delete-profile" onClick={deleteUser}>
        Delete
      </button>
    </div>
  );
}
