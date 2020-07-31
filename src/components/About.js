import React, { useEffect, useState} from "react"
import Header from "./Header.js"
import Textbox from "./Textbox.js"
import Fade from 'react-reveal/Fade';
import { Bio } from "../data/personalInfo.js";
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const { Blog, URL} = Bio;

export default function About() {
    const data = useStaticQuery(graphql`
    query Query {
    file(relativePath: {eq: "DevProPic1.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        fixed(
          width: 280
        ) {
          ...GatsbyImageSharpFixed
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
  //console.log(data.file.childImageSharp.fluid);
  const DevProPic = data.file.childImageSharp.fluid;
  //const DevProPicFixed = data.file.childImageSharp.fixed;

  return(
    <div>
      
      <div className='fillers relative flex justify-center'>
        <div className="separator"></div>
        <p className="absolute o-10 f-subheadline tc mt4 lh-s">About Me</p>
      </div>

      <section id='about' className='h-100-l h-100-m flex-l items-center-l flex-m items-center-m pa2 ma3 pb5 flex justify-center'>
       <Textbox className='w-90-l w-90-m w-100'>
          <div className='flex-l items-center-l justify-around-l w-100'>
          	<Fade bottom={true} duration={1000} delay={500} distance="30px">
              <div className='ma3 pr4-l w-30-l w-40-m w-70 center'>
                <Img className="" fluid= {DevProPic} />
              </div>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="60px">
              <div className='w-50-l f4-l f5 w-100 shadow-1 pa3 pr3 mr5'>
          	    <Header headerText='I am Mike!' />
                <p className=''>{Blog}<a className='extLink no-underline' href={URL} target='__blank'> here!</a></p>
          	  </div>  
            </Fade>
          	
          </div>
        </Textbox>
      </section>

      <div className="fillers separatorEnd"></div>
      
    </div>

  )
}
