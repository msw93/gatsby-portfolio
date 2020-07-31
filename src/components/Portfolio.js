import React, { useEffect, useState } from "react";
import Textbox from "./Textbox.js";
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

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (

    <div>
    
        <div className='fillers flex justify-center'>
          <p className="o-10 f-subheadline tc m3 pa3 mb1 lh-s unselect">Portfolio</p>
        </div>
  
        <section id='portfolio' className='pa1 ma3 flex justify-center items-center'>
          <Textbox id="portfolio" className='w-90-l w-100'>
              <Fade bottom={true} duration={1000} delay={300} distance="30px">
                  <h1 className='mt1'>Projects</h1>
                
                {projectsArray.map((project,index) => {
                  const {URL, CodeBaseURL, Description, ImagePath, Name} = project;
                  //console.log(index);
                  const image = data.allFile.edges.find(n => {
                      return n.node.relativePath.includes(ImagePath);
                  });
  
                  //console.log(image);
  
                  return (
                    <div key={index} className='mt3 pa3 br2 shadow-2'>
                      <h2 className=' mt0 mb3'>{Name}</h2>

                      <div className='flex-l items-center-l justify-around-l flex-m items-center-m justify-around-m w-100 h-auto-l'>           
                        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={600} distance="30px">
                          <p className="br2 pa3 mr3 shadow-2 tc w-30-l w-50-m w-100">
                            {Description}<br />
                            <NiceButton href={URL} target={`__blank`}>Live</NiceButton> {` `}
                            <NiceButton href={CodeBaseURL} target={`__blank`}>Codebase</NiceButton>
                          </p>
                        </Fade>
                        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                          <div className='br2 w-50-l w-50-m w-100'>
                            <Tilt
                              className="shadow-2"  
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
                        </Fade>
                      </div>
                    </div>
                  )
                })}
              	
            </Fade>
            <p className="shadow-2 tc pa3 mb0">Press the little cat in the bottom right corner to see more of my code on <a className="extLink no-underline" href="https://github.com/mikewiner/" target="__blank">Github!</a></p>
          </Textbox>
      </section>

    </div>
  )
}


