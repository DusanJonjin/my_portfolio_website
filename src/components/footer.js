import React, { useContext } from 'react';
import '../styles/footer.css';
import { AllCentralStateContext } from '../context/allCentralStateContext';

const Footer = () => {

    const { darkTheme } = useContext(AllCentralStateContext);
    
    return (
        <footer className={darkTheme ? 'foot-dark' : ''}>
           Copyright © {new Date().getFullYear()} Dušan Jonjin
        </footer>
    )
};


export default Footer;
