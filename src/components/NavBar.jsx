import {Link} from 'react-router-dom';
import logo from '@/assets/logo.webp';

function NavBar() {
    return (<nav className="navbar">
        <Link to="dish-roulette/"><img className="navbar-logo" src={logo} alt="logo"/></Link>
        <Link to="dish-roulette/about"><div className="navbar-link">About Us</div></Link>
    </nav>);
}

export default NavBar;