import React, { useEffect, useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { AllCentralStateContext } from '../context/allCentralStateContext';
import FluidImage from '../components/fluidImage';
import '../styles/contact.css';

const Contact = () => {

    const { 
        firstMount, 
        handleFirstMount,
        darkTheme,
        blurred,
        unblurPage,
        sideMenu,
        hideSideMenu,
        traceNavPointPosition
    } = useContext(AllCentralStateContext);

    const socialIcons = {
        one: [
            {
                name: 'facebook',
                url: 'https://www.facebook.com/dusan.jonjin'
            }, 
            {
                name: 'twitter',
                url: 'https://twitter.com/DJonjin'
            }
        ],
        two: [
            {
                name: 'github',
                url: 'https://github.com/DusanJonjin'
            }, 
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/du%C5%A1an-jonjin-380b9a1bb/'
            }
        ]
    };

    const bigLogoImg = {
        name: 'logo_DJ_big.png',
        maxWidth: 500,
        durationFadeIn: 500
    }

    const socialIconsImages = icons => (icons.map((icon, i) => 
        <a 
            key={i}
            href={icon.url} 
            target='_blank' 
            rel='noreferrer'
        >
            <img 
                src={require(`../images/${icon.name}.png`)} 
                alt={`${icon.name}-icon`}
                className='social-icon-img' 
            />
        </a>
    ));

    const pageName = 'contact'

    const linkPosition = '230deg';

    useEffect(() => {
        firstMount &&
        setTimeout(() => 
            handleFirstMount(pageName), 1500
        )
    });

    useEffect(() => {
        if (sideMenu) hideSideMenu();
        traceNavPointPosition(linkPosition);
        unblurPage()
    // eslint-disable-next-line
    }, [])

    return (
        <Layout currentPage={pageName}>
            <SEO title="Contact" />
            <section className={`main-section ${!blurred ? 'unblur' : ''}`}>
                <h1 className={`main-section-h1 ${!firstMount[pageName] ? 'h1-permanent' : ''} ${darkTheme ? 'h1-dark' : ''}`}>
                    Contact
                </h1>
                <p className={`contact-me ${darkTheme ? 'contact-me-dark' : ''}`}>
                    If you like my work, and you can see me as a potential member of your team, or as a collaborator - contact me.
                </p>
                <div className='icons-wrap'>
                    <div className='social-wrap-one'>
                        {socialIconsImages(socialIcons.one)}
                    </div>
                    <div className={`dusan-logo-img ${!firstMount[pageName] ? 'logo-permanent' : ''}`}>
                        <FluidImage fluidImageProps={bigLogoImg} />
                    </div>
                    <div className='social-wrap-two'>
                        {socialIconsImages(socialIcons.two)}
                    </div>
                </div>
                <address className='mail-wrap'>
                    <img src={require('../images/gmail.png')} alt='gmail-logo'/>
                    <a href='mailto:dusan.jonjin@gmail.com'>dusan.jonjin@gmail.com</a>
                </address>
            </section>
        </Layout>
    );
}

export default Contact