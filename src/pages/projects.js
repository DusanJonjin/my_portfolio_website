import React, { useEffect, useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FluidImage from '../components/fluidImage';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import githubImg from '../images/github-link.png';
import websiteImg from '../images/website.png';
import '../styles/projects.css';

const Projects = () => {

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

    const projectsArr = [
        {
            name: 'Stardust',
            url: 'http://www.stardust.eu5.org',
            github: '',
            technologies: 'Html, Css, Javascript',
        },
        {
            name: 'Amazing-shop',
            url: 'https://amazing-shop.netlify.app/',
            github: 'https://github.com/DusanJonjin/amazing-shop',
            technologies: 'React JS, Css'
        },
        {
            name: 'Weather-forecast',
            url: 'https://weather-forecast-dj.netlify.app',
            github: 'https://github.com/DusanJonjin/weather-forecast-ds',
            technologies: 'React JS, Sass'
        },
        {
            name: 'Github-issues',
            url: 'https://github-issues-dj.netlify.app',
            github: 'https://github.com/DusanJonjin/github-issues',
            technologies: 'React JS, Css'
        },
        {
            name: 'Calculator',
            url: 'https://my-calculator-dj.netlify.app',
            github: 'https://github.com/DusanJonjin/my-calculator',
            technologies: 'React JS, Sass'
        },
        {
            name: 'Hacker-news',
            url: 'https://hacker-news-dj.netlify.app',
            github: 'https://github.com/DusanJonjin/hacker-news-app',
            technologies: 'React JS, Css'
        }
    ] 

    const projectsList = projectsArr.map(project => {
        const { name, url, github, technologies } = project;
        const projectImage = {
            name: `${name.toLowerCase()}-img.jpg`,
            maxWidth: 800,
            durationFadeIn: 3500
        };
        return (
            <li key={name} className='project-li'>
                <figure className='project-figure'>
                    <div className={`project-img-wrap ${darkTheme ? 'project-img-dark' : ''}`}>
                        <FluidImage fluidImageProps={projectImage} />
                    </div>
                    <figcaption className={`project-details`}>
                        <span className='project-name'>
                            {name === 'Stardust' ? 'STAR DUST' : name.toUpperCase()}
                        </span>
                        {technologies}
                    </figcaption>
                    <div className='links-wrapper'>
                        {
                            name !== 'Stardust' && 
                            <a className='github-link' href={github} target='_blank' rel='noreferrer' >
                                <img src={githubImg} alt='github-link' />
                            </a>
                        }
                        <a className='website-link' href={url} target='_blank' rel='noreferrer'>
                            <img src={websiteImg} alt='website-link' />
                        </a>
                        </div>
                </figure>
            </li>
        )
    })

    const pageName = 'projects'

    const linkPosition = '312deg';

    useEffect(() => {
        firstMount &&
        setTimeout(() => 
            handleFirstMount(pageName), 1500
        )
    });

    useEffect(() => {
        if (sideMenu) hideSideMenu();
        traceNavPointPosition(linkPosition);
        unblurPage();
    // eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <SEO title="Projects" />
            <section className={`main-section ${!blurred ? 'unblur' : ''}`}>
                <h1 className={`main-section-h1 ${!firstMount[pageName] ? 'h1-permanent' : ''} ${darkTheme ? 'h1-dark' : ''}`}>
                    Projects
                </h1>
                <ul className='projects-ul'>
                    {projectsList}
                </ul>
            </section>
        </Layout>
    );
}

export default Projects