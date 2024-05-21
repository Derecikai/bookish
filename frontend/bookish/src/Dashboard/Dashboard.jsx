import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import DashAnunt from "./DashAnunt";
import backgroundImage from "./3d-33q6a18khxgta4ll.webp";
import axios from "axios";
import { useAuth } from "../Contexts/AuthContext";
import PleaseLogin from "../PleaseLogIn";
import { useParams } from "react-router-dom";
import Anunt from "../Anunturi/Anunt";

const Dashboard = () => {
  const { id } = useParams();
  const { logout, isLoggedIn } = useAuth();
  const [dashData, setDashData] = useState(null);
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    /* Add other background-related styles as needed */
  };

  useEffect(() => {
    const dashData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/profiles/${id}/exchanges`
        );
        //localhost:8080/profiles/3/exchanges
        http: console.log(response.status);
        console.log(response.data);
        setDashData(response.data);
      } catch (err) {
        console.log("There is an error", err.response.data);
      }
    };
    dashData();
  }, [id]);

  return isLoggedIn ? (
    <div className="anunturi-dash-container">
      <div className="anunturi-form-dash-Container">
        <div className="dash-hero slide-in">
          <div className="image-dash"></div>
          <div className="text-img-dash">Anunturile tale</div>
        </div>
        {dashData && dashData.map((item) => <DashAnunt data={item} />)}
      </div>
    </div>
  ) : (
    // Redirect to login if not authenticated
    <PleaseLogin />
  );
};

export default Dashboard;
