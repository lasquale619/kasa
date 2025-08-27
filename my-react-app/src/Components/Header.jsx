import { NavLink } from 'react-router-dom';
import '@/Components/styles/header.css'
import logoUrl from '@/assets/KasaLogo.svg';

const Header = () => {
    return (

        <header className='header'>
            <NavLink to="/home" className="logo"><img src={logoUrl} alt="Kasa" /></NavLink>
            <nav>
                <ul>
                    <li><NavLink to="/home" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Accueil</NavLink></li>
                    <li><NavLink to="/about" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>A Propos</NavLink></li>
                </ul>
            </nav>
        </header>


    );
};

export default Header;