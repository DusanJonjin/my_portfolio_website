import React, { useContext } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MainSection from '../components/mainSection';
import usePageMount from '../hooks/usePageMount';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import FluidImage from '../components/fluidImage';
import '../styles/contact.css';

const Contact = () => {

    const { 
        darkTheme,
        firstMount,
        ...otherContext
    } = useContext(AllCentralStateContext);

    const socialIcons = {
        one: [
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/du%C5%A1an-jonjin-380b9a1bb/'
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
                name: 'facebook',
                url: 'https://www.facebook.com/dusan.jonjin'
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
                src={require(`../images/${icon.name}.png`).default} 
                alt={`${icon.name}-icon`}
                className='social-icon-img' 
            />
        </a>
    ));

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
                    <img src={require('../images/gmail.png').default} alt='gmail-logo'/>
                    <a href='mailto:dusan.jonjin@gmail.com'>dusan.jonjin@gmail.com</a>
                </address>
            </MainSection>
        </Layout>
    );
}

export default Contact