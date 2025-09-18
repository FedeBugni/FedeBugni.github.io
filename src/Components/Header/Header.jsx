import { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleLogoClick = () => {
        setActiveLink('');
    };

    return (
        <header>
            <Link to='/' onClick={handleLogoClick}><img src={logo} alt="" className='logo'/></Link>
            <ul>
                <Link to='/tempio' onClick={() => handleLinkClick('/tempio')}>
                    <li className={activeLink === '/tempio' ? 'active' : ''}>Art Direction</li>
                </Link>
                <Link to='/setDesign' onClick={() => handleLinkClick('/setDesign')}>
                    <li className={activeLink === '/setDesign' ? 'active' : ''}>Set Design</li>
                </Link>
                <Link to='/projects' onClick={() => handleLinkClick('/projects')}>
                    <li className={activeLink === '/projects' ? 'active' : ''}>Projects</li>
                </Link>
                <Link to='/installation' onClick={() => handleLinkClick('/installation')}>
                    <li className={activeLink === '/installation' ? 'active' : ''}>Installation</li>
                </Link>
                <Link to='/testeIdra' onClick={() => handleLinkClick('/testeIdra')}>
                    <li className={activeLink === '/testeIdra' ? 'active' : ''}>Teste D&#39;Idra</li>
                </Link>
                <Link to='/exhibition' onClick={() => handleLinkClick('/exhibition')}>
                    <li className={activeLink === '/exhibition' ? 'active' : ''}>Exhibition</li>
                </Link>
                <Link to='/archive' onClick={() => handleLinkClick('/archive')}>
                    <li className={activeLink === '/archive' ? 'active' : ''}>Archive</li>
                </Link>
                <Link to='/contacts' onClick={() => handleLinkClick('/contacts')}>
                    <li className={activeLink === '/contacts' ? 'active' : ''}>Contacts</li>
                </Link>
                <Link to='/about' onClick={() => handleLinkClick('/about')}>
                    <li className={activeLink === '/about' ? 'active' : ''}>About us</li>
                </Link>
            </ul>
        </header>
    );
};

export default Header;