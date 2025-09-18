import { useState } from 'react';
import './Sidebar.css';
import logo from '../../assets/SempoStudio-Logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const handleLogoClick = () => {
        setActiveLink('');
    };

    return (
        <sidebar>
            <Link to='/' onClick={handleLogoClick}><img src={logo} alt="" className='logo'/></Link>
            <ul>
                <Link to='/about' onClick={() => handleLinkClick('/about')}>
                    <li className={activeLink === '/about' ? 'active' : ''}>About me</li>
                </Link>
                <Link to='/contacts' onClick={() => handleLinkClick('/contacts')}>
                    <li className={activeLink === '/contacts' ? 'active' : ''}>Contact</li>
                </Link>
            </ul>
            <ul>
                <Link to='/tempio' onClick={() => handleLinkClick('/tempio')}>
                    <li className={activeLink === '/tempio' ? 'active' : ''}>Tempio</li>
                </Link>
                <Link to='/setDesign' onClick={() => handleLinkClick('/setDesign')}>
                    <li className={activeLink === '/setDesign' ? 'active' : ''}>Eco Luminoso</li>
                </Link>
                <Link to='/projects' onClick={() => handleLinkClick('/projects')}>
                    <li className={activeLink === '/projects' ? 'active' : ''}>Giudizio</li>
                </Link>
                <Link to='/installation' onClick={() => handleLinkClick('/installation')}>
                    <li className={activeLink === '/installation' ? 'active' : ''}>Fashion Show</li>
                </Link>
                <Link to='/exhibition' onClick={() => handleLinkClick('/exhibition')}>
                    <li className={activeLink === '/exhibition' ? 'active' : ''}>Fontana</li>
                </Link>
                <Link to='/archive' onClick={() => handleLinkClick('/archive')}>
                    <li className={activeLink === '/archive' ? 'active' : ''}>Lavorare con la morte è difficile</li>
                </Link>
            </ul>
            <ul>
                <Link to='/testeIdra' onClick={() => handleLinkClick('/testeIdra')}>
                    <li className={activeLink === '/testeIdra' ? 'active' : ''}>Teste D&#39;Idra</li>
                </Link>
            </ul>
        </sidebar>
    );
};

export default Sidebar;