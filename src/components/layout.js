import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import backgroundDark from '../images/Endless-Constellation-dark.svg';
import backgroundLight from '../images/Endless-Constellation-light.svg';
import '../styles/layout.css';

const Layout = ({ children, currentPage }) => {

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

    const isIndexPage = currentPage === 'profile';

    const layoutAnimation = isIndexPage && firstMount[pageName]

    useEffect(() => {
        const bodyStyle = document.body.style;
        if (darkTheme) bodyStyle.background = `url(${backgroundDark})`;
        else bodyStyle.background = `url(${backgroundLight})`;
    }, [darkTheme]);

    useEffect(() => {
        firstMount[pageName] &&
        setTimeout(() => 
            handleFirstMount(pageName), 1000
        )
    });

    return (
        <div className={`whole-page-wrap ${layoutAnimation ? '' : 'whole-permanent'} ${darkTheme ? 'whole-page-dark' : ''}`}>
            <Header 
                siteTitle={data.site.siteMetadata.title}
                currentPage={currentPage} 
            />
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
