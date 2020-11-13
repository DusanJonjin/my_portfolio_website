import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const FixedImage = ({ fixedImgProps }) => {

    const {
        name,
        width,
        height,
        durationFadeIn
    } = fixedImgProps;

    const data = useStaticQuery(graphql`
    query {
        allImageSharp {
          edges {
            node {
              fixed (quality:100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    `);

    const fixedImage = data.allImageSharp.edges.reduce((acc, edge, i) => {
        const src = edge.node.fixed.src;
        const srcImageName = src.slice(src.lastIndexOf('/') + 1);
        if (srcImageName === name) return (
            [
                ...acc,
                <Img 
                    key={i} 
                    fixed={edge.node.fixed}  
                    durationFadeIn={durationFadeIn} 
                    imgStyle={{width: width, height: height}}
                    style={{maxWidth: width}}
                    alt={name}
                />
            ]
        );
        else return acc;
    }, [])
    
    return (
        <React.Fragment>
            {fixedImage}
        </React.Fragment>
    )
}

export default FixedImage;
