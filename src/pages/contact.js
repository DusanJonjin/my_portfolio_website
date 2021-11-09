import React, { useContext } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MainSection from '../components/mainSection';
import usePageMount from '../hooks/usePageMount';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import { socialNetworks } from '../data/personalData';
import FluidImage from '../components/fluidImage';
import '../styles/contact.css';

const Contact = () => {

    const { 
        darkTheme,
        firstMount,
        ...otherContext
    } = useContext(AllCentralStateContext);

    const bigLogoImg = {
        name: 'logo_DJ_big.png',
        maxWidth: 500,
        durationFadeIn: 500
    };

    const socialNetImgLinks = num => {
        const oneHalf = Math.ceil(socialNetworks.length / 2);
        const socialNetsHalf = num === 1 
            ? socialNetworks.slice(0, oneHalf)
            : socialNetworks.slice(oneHalf);
        ;  
        return socialNetsHalf.map((icon, i) => 
            <a 
                key={i}
                href={icon.url} 
                target='_blank' 
                rel='noreferrer'
            >
                <img 
                    src={require(`../images/${icon.name}.png`).default} 
                    alt={`${icon.name}-icon`}
                    className='social-icon-img' 
                />
            </a> 
        );
    };

    const pageName = 'contact'

    const linkPosition = '316deg';

    usePageMount(firstMount, otherContext, pageName, linkPosition);

    return (
        <Layout currentPage={pageName}>
            <Seo title="Contact" />
            <MainSection pageName={pageName} >
                <p className={`contact-me ${darkTheme ? 'contact-me-dark' : ''}`}>
                    If you like my work, and you can see me as a potential member of your team, or as a collaborator - contact me.
                </p>
                <div className='icons-wrap'>
                    <div className='social-wrap-one'>
                        {socialNetImgLinks(1)}
                    </div>
                    <div className={`dusan-logo-img ${!firstMount[pageName] ? 'logo-permanent' : ''}`}>
                        <FluidImage fluidImageProps={bigLogoImg} />
                    </div>
                    <div className='social-wrap-two'>
                        {socialNetImgLinks(2)}
                    </div>
                </div>
                <address className='mail-wrap'>
                    <img src={require('../images/gmail.png').default} alt='gmail-logo'/>
                    <a href='mailto:dusan.jonjin@gmail.com'>dusan.jonjin@gmail.com</a>
                </address>
            </MainSection>
        </Layout>
    );
}

export default Contact