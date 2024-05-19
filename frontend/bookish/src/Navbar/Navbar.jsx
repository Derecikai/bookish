import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
//import myImage from './Screenshot_67.jpg'
import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const { logout, isLoggedIn } = useAuth();
  const [role, setRole] = useState("user");
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const getId = () => {
      const token = localStorage.getItem("jwtToken");
      if (token && isLoggedIn) {
        const decoded = jwtDecode(token);
        console.log("ROLE!!!!!!!!!!!!!!!", decoded.role);
        setRole(decoded.role);
      }
    };
    getId();
    const handleScroll = () => {
      const isScrolled = window.scrollY > 125;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [role, isLoggedIn]);

  return (
    <>
      <div className="nav_placeholder" />
      <div className={`nav_container ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-div">Bookish</div>
        {/* aici avem linkurile */}
        <ul className="nav_links">
          <li>
            <Link to={"/Home"}>Home</Link>
          </li>

          <li>
            {role === "ADMIN" ? (
              <Link to={"/books"}>Books</Link>
            ) : (
              <Link to={"/anunturi"}>Anunturi</Link>
            )}
          </li>
          <li>
            {role === "ADMIN" ? (
              <Link to={"/personal"}>Users</Link>
            ) : (
              <Link to={"/personal"}>Personal</Link>
            )}
          </li>
        </ul>
        {/* aici in functie daca e login sau nu aratam anumite lucruri */}
        <div className="auth_nav">
          {isLoggedIn ? (
            <>
              <Link className="log-in" to="/login" onClick={logout}>
                Log Out
              </Link>
              <Link className="sign-up" to="/adauga">
                Adauga Anunt
              </Link>
            </>
          ) : (
            <>
              <Link className="log-in" to="/login">
                Log In
              </Link>
              <Link className="sign-up" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
