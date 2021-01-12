import React, { useEffect, useContext, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FluidImage from '../components/fluidImage';
import SkillsWallpaper from '../components/skillsWallpaper'
import { AllCentralStateContext } from '../context/allCentralStateContext'
import '../styles/skills.css'

const Skills = () => {

    const [unblur, setUnblur] = useState(false);
 
    const { 
        firstMount, 
        handleFirstMount,
        darkTheme,
        sideMenu,
        hideSideMenu,
        traceNavPointPosition
     } = useContext(AllCentralStateContext);

    const processImg = {
        name: 'process.png',
        maxWidth: 200,
        durationFadeIn: 3500
    }


    const mySkills = {
        one: [
            {
                name: 'Html',
                icon: 'html-icon'
            }, 
            {
                name: 'Css',
                icon: 'css-icon'
            }, 
            {
                name: 'Sass',
                icon: 'sass-icon'
            }
        ],
        two: [
            {
                name: 'Javascript',
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

    const linkPosition = '132deg';

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
            <SEO title="Skills" />
            <section className={`main-section ${unblur ? 'unblur' : ''}`}>
                <h1 className={`main-section-h1 ${!firstMount[pageName] ? 'h1-permanent' : ''} ${darkTheme ? 'h1-dark' : ''}`}>
                    Skills
                </h1>
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
            </section>
        </Layout>
    );
}

export default Skills
