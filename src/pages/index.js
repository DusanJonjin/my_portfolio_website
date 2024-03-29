import React, { useContext } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MainSection from '../components/mainSection';
import FluidImage from '../components/fluidImage';
import usePageMount from '../hooks/usePageMount';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import { myDetails } from '../data/personalData';
import { Link } from 'gatsby';
import CV from '../files/Dusan_Jonjin_CV.pdf';
import '../styles/index.css';

const IndexPage = ({ location }) => {

    /* const {state} = location; */

    const { 
        darkTheme,
        firstMount,
        ...otherContext
    } = useContext(AllCentralStateContext);

    const profileImage = {
        name: 'dusan.jpg',
        maxWidth: 400,
        durationFadeIn: 3500
    };

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

    const pageName = 'profile';

    const linkPosition = '50deg';

    usePageMount(firstMount, otherContext, pageName, linkPosition);

    return (
        <Layout currentPage={pageName}>
            <Seo title="Profile" />
            <MainSection pageName={pageName} >
                <div className='profile-all-content-wrap'>
                    <div className='profile-text-wrap'>
                        <p className={`profile-txt-question ${darkTheme ? 'txt-question-dark' : ''}`}>
                            Do you know that feeling when you want something very badly -
                            that satisfaction and joy which come when you finally get it, 
                            but you've got it only with your own hard work and full effort?
                        </p>
                        <div className={`profile-txt-answer-wrap ${darkTheme ? 'txt-answer-dark' : ''}`}>
                            <p className='profile-txt-answer'>
                                Well, it's exactly the feeling, this thrill I get, when I'm working
                                on some project or even some problem within it, and finish or solve
                                it successfully. This feeling keeps me motivated to work hard, be creative
                                and never give up, no matter what it takes...
                            </p>    
                            <p className='profile-txt-conclusion'> 
                                Coding gives me the ability to create stuff, flexibly and creatively
                                solve logical problems in many different ways, learn and adopt cool 
                                new techniques and technologies, thus to constantly improve my knowlegde - 
                                and therefore I enjoy doing it!
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
                            <a href={CV} download='Dusan_CV' className={`dwnload-btn ${darkTheme ? 'dark-btn' : ''}`}>                             
                                Download CV
                            </a>
                            <ul className='profile-details-ul'>
                                {myDetailsList()}
                            </ul>
                            <Link to='/contact' className={`contact-btn ${darkTheme ? 'dark-btn' : ''}`}>
                                Contact me
                            </Link>
                        </div>    
                        <figure className='profile-details-img-wrap'>
                            <FluidImage fluidImageProps={profileImage} />
                        </figure>
                    </div>
                </div>
            </MainSection>
        </Layout>
    );
}         

export default IndexPage