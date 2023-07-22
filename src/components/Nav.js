import './Nav.css'
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <div>
            <ul className='ul'>
                <li className='li' ><NavLink to="/form">Form</NavLink></li>
                <li className='li' ><NavLink to="/news">News</NavLink></li>
                <li className='li'><NavLink to="/contact">Contact</NavLink></li>
                <li className='li'><NavLink to="/about">About</NavLink></li>
                <li className='li'><NavLink exact="true" to="/">Home</NavLink></li>
            </ul>
        </div>
    );
  }
  
  export default Nav;
  