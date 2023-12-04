import {Link, useNavigate} from 'react-router-dom';
import './Navbar.css'
import myImage from './Screenshot_67.jpg'
import { useEffect,useState } from 'react';
import { useAuth } from '../Contexts/AuthContext';


const Navbar = () => {

  const { logout, isLoggedIn} = useAuth();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() =>{


    const handleScroll = () => {
      const isScrolled = window.scrollY > 125;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[])




  return (

    <>
      <div className="nav_placeholder" />
      <div className={`nav_container ${scrolled ? "scrolled" : ""}`}>
        <div className='logo-div'>
        Bookish
      </div>
      
      <ul className='nav_links'>
        <li>
          <Link to={"#"}>Noutati</Link>
          </li>
        <li>
          <Link to={"/anunturi"}>Anunturi</Link>
          </li>
          <li>
          <Link to={"/home"}>Home</Link>
          </li>
      </ul>
      
      <div className='auth_nav'>
        {isLoggedIn ? (
    <>
      <Link className='log-in' to='/login' onClick={logout}>
        Log Out
      </Link>
      <Link className='sign-up' to='/anunturi'>
        Adauga Anunt
      </Link>
    </>
  ) : (
    <>
      <Link className='log-in' to='/login'>
        Log In
      </Link>
      <Link className='sign-up' to='/signup'>
        Sign Up
      </Link>
    </>
  )}
      </div>
      </div>
    </>      
  )
}

export default Navbar