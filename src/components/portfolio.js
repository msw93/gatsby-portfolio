import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js";
import Fade from 'react-reveal/Fade';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Projects } from "../data/personalInfo.js";


export default function Portfolio() {
	const {URL, Description, Name, CodeBaseURL} = Projects; 
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

	console.log(data.allFile.edges[1].node.childImageSharp.fluid);
// I want to try destructing the pictures
	const origenPicture = data.allFile.edges[5].node.childImageSharp.fluid;

  return (
    <Textbox id="portfolio" className=''>
      <Fade duration={2000} delay={1000} distance="30px">
          <Header className='center' headerText="Projects" />
          <div className='cf pa3 shadow-2'>
          	<h1>{Name}</h1>
        		<p className="fl w-30 mr3 shadow-2 tc">
        			{Description}<br />
        			<a href={URL}>Click here for demo</a><br />
        			<a href={CodeBaseURL}>Click here to see code</a>
        		</p>
        		<Img className="fr w-60 shadow-2"fluid={data.file.childImageSharp.fluid} alt={`smart-brain`} />	
        	</div>


        	<div className='cf mt3 pa3 shadow-2'>
          	<h1>Origen Water</h1>
        		<p className="fl w-30 mr3 shadow-2 tc">
        			Landing page done for Kickstarter UV Waterbottle. Made with Gatsby, graphql<br />
        			<a href='https://origen-water.surge.sh/'>Click here for demo</a><br />
        			<a href='https://github.com/mikewiner/origen-landing'>Click here to see code</a>
        		</p>
        		<Img className="fr w-60 shadow-2"fluid={origenPicture} alt={`Origen landing page`} />	
        	</div>
        	
      </Fade>
    </Textbox>
  )
}


