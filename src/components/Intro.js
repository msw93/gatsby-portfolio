import React from 'react';
import Textbox from "../components/textbox"
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { LocalButton } from './Button/Button'


const Intro = () => {
  const data = useStaticQuery(graphql`
    query OsakaPicQuery {
    file(relativePath: {eq: "Mike-In-Osaka.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
        fixed (width: 300, height: 350) {
          ...GatsbyImageSharpFixed
        } 
      }
    }
  }
  `)

  //console.log(data.file.childImageSharp.fluid);
  //const MikeInOsaka = data.file.childImageSharp.fluid;
  const MikeInOsakaFixed = data.file.childImageSharp.fixed;

  return(
    <section id='intro' className = "pa3 center">
      <Textbox>
    		<Fade className="jumbotron" duration={1000} delay={800} distance="30px">
    			<div className="flex items-center justify-around">
    				<div className='w-50 pa3 pt0 fl shadow-1 tc'>
    					<h1>Michael's Winer, Full-Stack Web Developer</h1>
    					<p>Welcome, click <LocalButton to="/resume">HERE</LocalButton> or my face for my <b>resume</b></p>
    				</div>
    				<div className='fr pa3 w-40'>
    					<Link to='/resume' alt='/resume'>
    					<Img
    						className='shadow-2 br2 b3 grow' 
                fixed={MikeInOsakaFixed}
    					 	alt={`Michael in Osaka`}
    					 />
    					</Link>
    				</div>
    			</div>
    		</Fade>
     	</Textbox>
    </section>  
  )
}

export default Intro;