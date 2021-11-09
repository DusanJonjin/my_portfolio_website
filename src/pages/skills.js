import React, { useContext } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MainSection from '../components/mainSection';
import FluidImage from '../components/fluidImage';
import SkillsWallpaper from '../components/skillsWallpaper';
import usePageMount from '../hooks/usePageMount';
import { AllCentralStateContext } from '../context/allCentralStateContext';
import { mySkills } from '../data/personalData';
import '../styles/skills.css';

const Skills = () => {
 
    const { 
        darkTheme,
        firstMount,
        ...otherContext
    } = useContext(AllCentralStateContext);

    const processImg = {
        name: 'process.png',
        maxWidth: 200,
        durationFadeIn: 3500
    };

    const skillsList = num => {
        const oneHalf = Math.ceil(mySkills.length / 2);
        const skillsHalf = num === 1 ? mySkills.slice(oneHalf): mySkills.slice(oneHalf, mySkills.length);      
        return skillsHalf.map((skill, i) => 
            <li key={i}>
                <span>&#10022; {skill.name}</span>
                <div className='skill-img-wrapper'>
                    <img 
                        className='skill-img'
                        src={require(`../images/${skill.icon}.png`).default} 
                        alt={skill.name} 
                    />
                </div>
            </li>
        );
    };

    const pageName = 'skills';

    const linkPosition = '137deg';

    usePageMount(firstMount, otherContext, pageName, linkPosition);
 
    return (
        <Layout currentPage={pageName}>
            <Seo title="Skills" />
            <MainSection pageName={pageName} >
                <div className='all-skills-wrap'>
                    <ul className={`skills-list-one ${!firstMount[pageName] ? 'skills-list-permanent' : ''} ${darkTheme ? 'skills-list-dark' : ''}`}>
                        {skillsList(1)}
                    </ul>
                    <div className={`process-img-wrap ${!firstMount[pageName] ? 'process-permanent' : ''}`}>
                        <FluidImage fluidImageProps={processImg} />
                    </div>
                    <ul className={`skills-list-two ${!firstMount[pageName] ? 'skills-list-permanent' : ''} ${darkTheme ? 'skills-list-dark' : ''}`}>
                        {skillsList(2)}
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
