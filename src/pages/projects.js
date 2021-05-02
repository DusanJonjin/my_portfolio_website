import React, { useContext } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MainSection from '../components/mainSection';
import FluidImage from '../components/fluidImage';
import usePageMount from '../hooks/usePageMount';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import githubImg from '../images/github-link.png';
import websiteImg from '../images/website.png';
import '../styles/projects.css';

const Projects = () => {

    const { 
        darkTheme,
        firstMount,
        ...otherContext
    } = useContext(AllCentralStateContext);

    const projectsArr = [
        {
            name: 'Stardust',
            url: 'http://www.stardust.eu5.org',
            github: '',
            technologies: 'HTML, CSS, JavaScript',
        },
        {
            name: 'Amazing-shop',
            url: 'https://amazing-shop.netlify.app/',
            github: 'https://github.com/DusanJonjin/amazing-shop',
            technologies: 'React JS, CSS'
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
            technologies: 'React JS, CSS'
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
            technologies: 'React JS, CSS'
        }
    ];
    
    const pageName = 'projects';

    const linkPosition = '230deg';

    const projectsList = projectsArr.map(project => {
        const { name, url, github, technologies } = project;
        const projectImage = {
            name: `${name.toLowerCase()}-img.jpg`,
            maxWidth: 800,
            durationFadeIn: 3000
        };
        return (
            <li key={name} className='project-li'>
                <figure className='project-figure'>
                    <div className={`project-img-wrap ${!firstMount[pageName] ? 'img-centered' : ''} ${darkTheme ? 'project-img-dark' : ''}`}>
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

    usePageMount(firstMount, otherContext, pageName, linkPosition);

    return (
        <Layout currentPage={pageName}>
            <Seo title="Projects" />
            <MainSection pageName={pageName} >
                <ul className='projects-ul'>
                    {projectsList}
                </ul>
            </MainSection>
        </Layout>
    );
}

export default Projects