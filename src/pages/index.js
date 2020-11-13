import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FluidImage from '../components/fluidImage';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import { Link } from 'gatsby';
import '../styles/index.css';

const IndexPage = ({ location }) => {

    /* const {state} = location; */
    
    const [unblur, setUnblur] = useState(false);

    const { 
        firstMount,
        handleFirstMount,
        darkTheme,
        sideMenu, 
        hideSideMenu, 
        traceNavPointPosition 
    } = useContext(AllCentralStateContext);

    const profileImage = {
        name: 'dusan.jpg',
        maxWidth: 400,
        durationFadeIn: 3500
    };

    const myDetails = {
        name: 'Dušan Jonjin',
        adress: 'Novi Kneževac',
        occupation: 'Front-end web developer'
    }

    //iterate through myDetails object and return array of li elements
    const myDetailsList = () => {
        let listArr = [];
        for (const [key, value] of Object.entries(myDetails)) {
            listArr = [
                ...listArr, 
                <li key={key} className={`details-li ${darkTheme ? 'li-dark' : ''}`}>
                    {key.toUpperCase()}:<br /> 
                    <span className={`details-span ${darkTheme ? 'span-dark' : ''}`}>
                        {value}
                    </span>
                </li>
            ];
        }
        return listArr
    };

    const pageName = 'index';

    const linkPosition = '46deg';

    useEffect(() => {
        firstMount &&
        setTimeout(() => 
            handleFirstMount(pageName), 2000
        )
    });

    /*We need this so that mobile view nav menu can have slide effect, 
      because on every page change component mounts and unmounts: */
    useEffect(() => {
        if (sideMenu) hideSideMenu();
        traceNavPointPosition(linkPosition);
        setUnblur(true);
    // eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <SEO title="Profile" />
            <section className={`main-section ${unblur ? 'unblur' : ''}`}>
                <h1 className={`main-section-h1 ${!firstMount[pageName] ? 'h1-permanent' : ''} ${darkTheme ? 'h1-dark' : ''}`}>
                    Profile
                </h1>
                <div className='profile-all-content-wrap'>
                    <div className='profile-text-wrap'>
                        <p className={`profile-txt-question ${darkTheme ? 'txt-question-dark' : ''}`}>
                            Do you know that feeling when you want something very badly -
                            that satisfaction and joy which come when you finally get it, 
                            but you've got it only with your own hard work and full effort?
                        </p>
                        <div className={`profile-txt-answer-wrap ${darkTheme ? 'txt-answer-dark' : ''}`}>
                            <p className='profile-txt-answer'>
                                Well, it's exactly the feeling, this thrill I get when I'm working
                                on some project or even some problem within it, and finish or solve
                                it successfully. <br />This feeling keeps me motivated to work hard, be creative and never give up, no matter what...
                            </p>    
                            <p className='profile-txt-conclusion'> 
                                Coding gives me the ability to create stuff, flexibly and creatively
                                solve logical problems in many different ways, learn and adopt cool 
                                new techniques and technologies, thus to constantly improve my knowlegde - 
                                and therefore I really enjoy doing it!
                            </p>
                        </div>
                        <div className='profile-final-txt-wrap'>
                            <p className={`final-old-saying ${!firstMount[pageName] ? 'old-saying-permanent' : ''}`}>
                                As the old saying goes:<br />
                                <span className={`chase ${!firstMount[pageName] ? 'chase-permanent' : ''}`}>
                                     "The chase is better than the catch!"
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='profile-details-wrap'> 
                        <div className='profile-details-ul-btn-wrap'>
                            <button className='dwnload-btn'>Download CV</button>
                            <ul className='profile-details-ul'>
                                {myDetailsList()}
                            </ul>
                            <Link to='/contact' className='page-link'>
                                <button className='contact-btn'>Contact me</button>
                            </Link>
                        </div>    
                        <figure className='profile-details-img-wrap'>
                            <FluidImage fluidImageProps={profileImage} />
                        </figure>
                    </div>
                </div>
            </section>
        </Layout>
    );
}         

export default IndexPage
