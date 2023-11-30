import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav_container'>
      
      <div className='nav_logo'> Bookish</div>
      
      <ul className='nav_links'>
        <li>
          <Link to={"#"}>FLO</Link>
          </li>
        <li>
          <Link to={"#"}>ANUNTURI</Link>
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