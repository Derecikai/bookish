import {Link} from 'react-router-dom';
import './Navbar.css'
import myImage from './Screenshot_67.jpg'

const Navbar = () => {
  return (
    <div className='nav_container'>

      
      <div className='logo-div'>
      <img className='logo-type-shi' src={myImage} alt="" /></div>
      
      <ul className='nav_links'>
        <li>
          <Link to={"#"}>FLO</Link>
          </li>
        <li>
          <Link to={"/anunturi"}>ANUNTURI</Link>
          </li>
        <li>
          <Link to={"#"}>FLO3</Link>
          </li>
      </ul>
      
      <div className='auth_nav'>
        <Link className='log-in' to={"/login"}>Log In</Link>
        <Link className='sign-up' to={"/signup"}>Sign Up</Link>
      </div>
      
      </div>
  )
}

export default Navbar