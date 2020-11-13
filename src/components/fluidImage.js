import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const FluidImage = ({ fluidImageProps }) => {

    const {
        name,
        maxWidth,
        zIndex,
        durationFadeIn
    } = fluidImageProps;

    const data = useStaticQuery(graphql`
    query {
        allImageSharp {
          edges {
            node {
              fluid (quality:100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    `);

    const fluidImage = data.allImageSharp.edges.reduce((acc, edge, i) => {
        const src = edge.node.fluid.src;
        const srcImageName = src.slice(src.lastIndexOf('/') + 1);
        if (srcImageName === name) return (
            [
                ...acc,
                <Img 
                    key={i} 
                    fluid={edge.node.fluid}  
                    durationFadeIn={durationFadeIn} 
                    imgStyle={{maxWidth: maxWidth}}
                    style={{maxWidth: maxWidth, zIndex: zIndex}}
                    alt={name.slice(0, name.lastIndexOf('.'))}
                />
            ]
        );
        else return acc;
    }, []);


    return (
        <React.Fragment>
            {fluidImage}
        </React.Fragment>
    )
}

export default FluidImage;