import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar : React.FC = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to='/'>
                    <img src={logo} alt="YodaPlus Cocktail" className='logo'/>
                </Link>
                <ul className='nav-links'>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar