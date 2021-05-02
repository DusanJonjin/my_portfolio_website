import React, { useContext }from 'react';
import { Link } from 'gatsby';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import '../styles/navbar.css';

const Navbar = ({ currentPage }) => {

    const { 
        darkTheme, 
        blurPage,
        sideMenu,
        navPointPosition
    } = useContext(AllCentralStateContext);

    const linkNamesArr = ['profile', 'skills', 'contact', 'projects'];

    const navLinksList = linkNamesArr.map((name, i) =>
        <li key={i} onClick={name !== currentPage ? (() => blurPage()) : undefined}>
            <Link 
                className={`nav-link ${name === currentPage? 'nav-link-active' : ''} ${sideMenu ? 'nav-link-menu' : ''}`} 
                to={`/${name === 'profile' ? '' : name}`}               
            >
                <img src={require(`../images/${name}.png`).default} alt={name} />
            </Link>
        </li>
    );

    return (
        <nav className={`nav ${sideMenu ? 'nav-side-menu' : ''}`}>
            <div className={`nav-ul-wrapper ${darkTheme ? 'nav-ul-wrapper-dark' : ''} ${sideMenu ? 'nav-side-menu': ''}`}>
                <ul>
                    {navLinksList}
                </ul> 
            </div>
            <div className={`nav-point ${darkTheme ? 'nav-point-dark' : ''}`} 
                style={{transform: `rotate(${navPointPosition})`}}>
            </div>
        </nav>
    )
}

export default Navbar;
