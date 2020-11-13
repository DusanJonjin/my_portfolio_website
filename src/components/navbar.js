import React, { useContext }from 'react';
import { Link } from 'gatsby';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import '../styles/navbar.css';

const Navbar = () => {

    const { 
        darkTheme, 
        sideMenu,
        navPointPosition
    } = useContext(AllCentralStateContext);

    const linkIsActive = {
        background: ' rgb(199, 237, 250)',
        pointerEvents: 'none',
        border: '1px solid rgb(20, 20, 20)'
    };

    const linkNamesArr = ['profile', 'skills', 'projects', 'contact'];

    const navLinksList = linkNamesArr.map((name, i) =>
        <li key={i}>
            <Link className={`nav-link ${sideMenu ? 'nav-link-menu' : ''}`} 
                  to={`/${name === 'profile' ? '' : name}`} 
                  activeStyle={linkIsActive}
                  state={{text:{
                    first: 'Dušan Jonjin', 
                    second:'the real', 
                    third: "deal."
                }}}
            >
                <img src={require(`../images/${name}.png`)} alt={name} />
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
