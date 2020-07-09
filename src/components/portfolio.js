import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js";
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';


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
		}
	`)

  return (
    <Textbox id="portfolio" className=''>
      <Fade duration={3000} delay={500} distance="30px">
          <Header className='center' headerText="Projects" />
          <div className='cf pa3'>
        		<p className="fl w-40 mr3 shadow-2 tc">Smart Brain, face recognition app, made with React, Postgres, Node.js, Express</p>
        		<Img className="fl w-50 shadow-2 tc"fluid={data.file.childImageSharp.fluid} alt={`smart-brain`} />	
        	</div>
        	<a className=''href='https://github.com/mikewiner'>Click here.</a>
      </Fade>
    </Textbox>
  )
}


