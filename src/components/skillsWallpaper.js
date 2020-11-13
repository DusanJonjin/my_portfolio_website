import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const SkillsWallpaper = () => {

    const data = useStaticQuery(graphql`
        query {
            smallImage: file(relativePath: { eq: "skills-wallpaper-small.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            mediumImage: file(relativePath: { eq: "skills-wallpaper-medium.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            largeImage: file(relativePath: { eq: "skills-wallpaper-large.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }   
        }
    `)

    const sources = [
        data.smallImage.childImageSharp.fluid,
        {
            ...data.mediumImage.childImageSharp.fluid,
            media: `(min-width: 600px) and (max-width: 1200px)`,
        },
        {
            ...data.largeImage.childImageSharp.fluid,
            media: `(min-width: 1201px)`,
        },
    ]


    return (
        <Img 
            fluid={sources} 
            alt='skills-wallpaper'
            durationFadeIn={4000}
        />
    )
}

export default SkillsWallpaper
