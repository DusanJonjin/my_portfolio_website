import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import Footer from './footer';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import '../styles/layout.css';

const Layout = ({ children, currentPage }) => {

    const { darkTheme, firstMount } = useContext(AllCentralStateContext);

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const isIndexPage = currentPage === 'profile';

    const isSiteFirstLoad = Object.keys(firstMount).every(key => firstMount[key]);

    const indexLayoutAnimated = isIndexPage && isSiteFirstLoad

    useEffect(() => {
        document.body.classList.toggle('dark-body', darkTheme)
    }, [darkTheme]);

    return (
        <div className={`whole-page-wrap ${indexLayoutAnimated ? '' : 'whole-permanent'} ${darkTheme ? 'whole-page-dark' : ''}`}>
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
