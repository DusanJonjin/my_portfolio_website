import React, { useContext } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navbar from './navbar'
import { AllCentralStateContext } from '../context/allCentralStateContext';
import '../styles/header.css'

const Header = ({ siteTitle, currentPage }) => {

    const { 
        darkTheme, 
        handleThemeChange,
        sideMenu,
        showHideSideMenu,
    } = useContext(AllCentralStateContext);

    return (
        <header className={`head ${darkTheme ? 'head-dark' : ''}`}>
            <div className='logo-wrap'>
                <Link to='/' className='home-link-logo'>
                    <img src={require('../images/logo_DJ_black.png')} alt='logo' />
                </Link>
                <p>{siteTitle}</p>
            </div>
            <Navbar currentPage={currentPage} />
            <div className='theme-toggle-bar-wrap'>
                <div onClick={() => handleThemeChange()} 
                     className={`theme-toggle-bar ${darkTheme ? 'bar-dark' : ''}`}
                >               
                </div>
            </div>
            <div className='hamburger-wrap' onClick={() => showHideSideMenu()}>
                <div className={`open-close-menu ${darkTheme ? 'open-close-dark' : ''} ${sideMenu ? 'close' : ''}`}></div>
            </div>
        </header>
    );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
