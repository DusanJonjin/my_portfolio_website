import React, { useEffect, useContext } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MainSection from '../components/mainSection';
import FluidImage from '../components/fluidImage';
import SkillsWallpaper from '../components/skillsWallpaper';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import '../styles/skills.css';

const Skills = () => {
 
    const { 
        firstMount, 
        handleFirstMount,
        darkTheme,
        unblurPage,
        sideMenu,
        hideSideMenu,
        traceNavPointPosition
     } = useContext(AllCentralStateContext);

    const processImg = {
        name: 'process.png',
        maxWidth: 200,
        durationFadeIn: 3500
    };


    const mySkills = {
        one: [
            {
                name: 'HTML',
                icon: 'html-icon'
            }, 
            {
                name: 'CSS',
                icon: 'css-icon'
            }, 
            {
                name: 'Sass',
                icon: 'sass-icon'
            }
        ],
        two: [
            {
                name: 'JavaScript',
                icon: 'javascript-icon'
            }, 
            {
                name: 'React JS',
                icon: 'react-icon'
            },
            {
                name: 'Gatsby JS',
                icon: 'gatsby-icon'
            }
        ]
    };

    const skillsList = mySkillsOneTwo => mySkillsOneTwo.map((skill, i) => 
            <li key={i}>
                <span>&#10022; {skill.name}</span>
                <div className='skill-img-wrapper'>
                    <img 
                        className='skill-img'
                        src={require(`../images/${skill.icon}.png`)} 
                        alt={skill.name} 
                    />
                </div>
            </li>
    );


    /*const mySkillsList = () => {
        let listArr = [];
        for (const [key, value] of Object.entries(mySkills)) {
            listArr = [
                ...listArr, 
                <article key={key}>
                    <h2>
                        {key}
                    </h2>
                    <ul>
                        {value.map((v, i) => 
                            <li key={i}>
                                {v}
                            </li>)}
                    </ul>
                </article>
            ];
        }
        return listArr
    };*/

    const pageName = 'skills';

    const linkPosition = '137deg';

    useEffect(() => {
        firstMount[pageName] &&
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
        <Layout currentPage={pageName}>
            <SEO title="Skills" />
            <MainSection pageName={pageName} >
                <div className='all-skills-wrap'>
                    <ul className={`skills-list-one ${!firstMount[pageName] ? 'skills-list-permanent' : ''} ${darkTheme ? 'skills-list-dark' : ''}`}>
                        {skillsList(mySkills.one)}
                    </ul>
                    <div className={`process-img-wrap ${!firstMount[pageName] ? 'process-permanent' : ''}`}>
                        <FluidImage fluidImageProps={processImg} />
                    </div>
                    <ul className={`skills-list-two ${!firstMount[pageName] ? 'skills-list-permanent' : ''} ${darkTheme ? 'skills-list-dark' : ''}`}>
                        {skillsList(mySkills.two)}
                    </ul>
                </div>
                <figure className='skills-wall-wrap'>
                    <SkillsWallpaper />
                </figure>
            </MainSection>
        </Layout>
    );
}

export default Skills
