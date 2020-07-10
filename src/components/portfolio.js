import React from "react";
import Header from "../components/header.js"
import Textbox from "../components/textbox.js";
import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { projectsArray } from "../data/personalInfo.js";
import { NiceButton } from './Button/Button'



export default function Portfolio() {
	const data = useStaticQuery(graphql`
		query MyQuery {
		  file(relativePath: {eq: "smart-brain.jpg"}) {
		    childImageSharp {
		      fluid {
		        base64
		        tracedSVG
		        src
		        srcSet
		        sizes
		        aspectRatio
		      }
		    }
		  }
		allFile {
    	edges {
    	  node {
    	    relativePath
    	    childImageSharp {
    	      fluid {
          		aspectRatio
          		base64
          		sizes
          		src
          		srcSet    	      	
							
    	      }
    	    }
    	  }
    	}
  }
		}
	`)

  return (
    <section id='portfolio' className='pa3 ma3 center'>
      <Textbox id="portfolio" className=''>
          <Fade duration={2000} delay={1000} distance="30px">
              <Header className='center' headerText="Projects" />
            
            {projectsArray.map((project,index) => {
              const {URL, CodeBaseURL, Description, ImagePath, Name} = project;
              console.log(index);
              const image = data.allFile.edges.find(n => {
                  return n.node.relativePath.includes(ImagePath);
              });

              console.log(image);

              return (
                <div key={index} className='cf mt3 pa3 br2 shadow-2'>
                  <h2 className='mb3'>{Name}</h2>  
                  <div className='flex items-center justify-around'>           
                    <p className="br2 pa3 w-30 mr3 shadow-2 tc">
                      {Description}<br />
                      <NiceButton href={URL} target={`__blank`}>Live</NiceButton> {` `}
                      <NiceButton href={CodeBaseURL} target={`__blank`}>Codebase</NiceButton>
                    </p>
                    <Tilt
                      className="w-50 fr br2 shadow-2"  
                      options={{
                        reverse: true,
                        max: 20,
                        perspective: 1000,
                        scale: 1,
                        speed: 300,
                        transition: true,
                        axis: null,
                        reset: true,
                        easing: 'cubic-bezier(.03,.98,.52,.99)',}}>
                      <Img 
                        fluid={image.node.childImageSharp.fluid}
                        alt={`smart-brain`} /> 
                    </Tilt>
                  </div>
                </div>
              )
            })}
          	
        </Fade>
      </Textbox>
    </section>
  )
}


