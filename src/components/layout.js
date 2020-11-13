import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import backgroundDark from '../images/background-dark.jpg';
import backgroundLight from '../images/background-light.png';
import '../styles/layout.css';

const Layout = ({ children }) => {

    const { darkTheme, firstMount, handleFirstMount } = useContext(AllCentralStateContext);

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const pageName = 'layout';

    useEffect(() => {
        const bodyStyle = document.body.style;
        if (darkTheme) bodyStyle.background = `url(${backgroundDark})`;
        else bodyStyle.background = `url(${backgroundLight})`;
    }, [darkTheme]);

    useEffect(() => {
        firstMount &&
        setTimeout(() => 
            handleFirstMount(pageName), 1000
        )
    });

    return (
        <div className={`whole-page-wrap ${!firstMount[pageName] ? 'whole-permanent' : ''} ${darkTheme ? 'whole-page-dark' : ''}`}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout