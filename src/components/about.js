import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js"
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
        fluid (maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
        }
        fixed(
          width: 350
          duotone: { highlight: "#ffffff", shadow: "#222222"}
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    }
  `)
    
  //console.log(data.file.childImageSharp.fluid);
  const DevProPic = data.file.childImageSharp.fluid;
  //const DevProPicFixed = data.file.childImageSharp.fixed;

  return(
    <section id='about' className='h-100-l h-100-m flex-l items-center-l flex-m items-center-m pa2 ma3 pb5 flex justify-center'>
  	 <Textbox className='w-90-l w-90-m w-100'>
        <div className='flex-l items-center-l justify-around-l w-100'>
        	<Fade bottom={true} duration={2000} delay={1000} distance="30px">
            <div className='ma3 pr4-l w-30-l w-40-m w-70 center'>
              <Img fluid={DevProPic} />
            </div>
            <div className='w-50-l f4-l f5 w-100 shadow-1 pa3 pr3 mr5'>
        	    <Header headerText='I am Michael!' />
              <p>{Blog}<a href={URL} target='__blank'> here!</a></p>
        	  </div>  
        	</Fade>
        </div>
      </Textbox>
    </section>

  )
}
//<img className='shadow-2 tc' src={ProfilePic} alt="Profile" width='300px'/>
