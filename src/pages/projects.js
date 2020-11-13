import React, { useEffect, useContext, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FluidImage from '../components/fluidImage';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import '../styles/projects.css'

const Projects = () => {

    const [unblur, setUnblur] = useState(false);

    const { 
        firstMount, 
        handleFirstMount,
        darkTheme,
        sideMenu,
        hideSideMenu,
        traceNavPointPosition
     } = useContext(AllCentralStateContext);

    const projectsArr = [
        {
            name: 'Stardust',
            url: 'http://www.stardust.eu5.org',
            technologies: 'Html, Css, Javascript',
        },
        {
            name: 'Amazing-shop',
            url: 'https://amazing-shop.netlify.app/',
            technologies: 'React JS, Css'
        },
        {
            name: 'Weather-forecast',
            url: 'https://weather-forecast-dj.netlify.app',
            technologies: 'React JS, Sass'
        },
        {
            name: 'Github-issues',
            url: 'https://github-issues-dj.netlify.app',
            technologies: 'React JS, Css'
        },
        {
            name: 'Calculator',
            url: 'https://my-calculator-dj.netlify.app',
            technologies: 'React JS, Sass'
        },
        {
            name: 'Hacker-news',
            url: 'https://hacker-news-dj.netlify.app',
            technologies: 'React JS, Css'
        }
    ] 

    const projectsList = projectsArr.map(project => {
        const { name, technologies } = project;
        const projectImage = {
            name: `${name.toLowerCase()}-img.jpg`,
            maxWidth: 800,
            durationFadeIn: 3500
        };
        return (
            <li key={name} className='project-li'>
                <a href={project.url} target='_blank' rel='noreferrer'>
                <figure className='project-figure'>
                    <div className={`project-img-wrap ${darkTheme ? 'project-img-dark' : ''}`}>
                        <FluidImage fluidImageProps={projectImage} />
                    </div>
                    <figcaption className={`project-details ${darkTheme ? 'project-details-dark' : ''}`}>
                        <span className='project-name'>
                            {name === 'Stardust' ? 'STAR DUST' : name.toUpperCase()}
                        </span>
                        {technologies}
                    </figcaption>
                </figure>
                </a>
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
        setUnblur(true);
    // eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <SEO title="Projects" />
            <section className={`main-section ${unblur ? 'unblur' : ''}`}>
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