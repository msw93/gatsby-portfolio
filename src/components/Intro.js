import React from 'react';
import Textbox from "../components/textbox"
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import MikeInOsaka from "../images/Mike-In-Osaka.jpg";



const Intro = () => (
  <section id='intro' className = "pa3 center">
    <Textbox>
  		<Fade className="jumbotron" duration={1000} delay={800} distance="30px">
  			<div className="flex items-center">
  				<div className='w-50 shadow-1'>
  					<h1>Michael's Portfolio and Blog</h1>
  					<p>Hello welcome to my site! Click my face for my <b>resume</b></p>
  				</div>
  				<div className='w50 center'>
  					<Link to='/resume' alt='/resume'>
  					<img
  						//style={{border: `5px black solid`}}
  						className='shadow-2 b3 grow' 
  						src={MikeInOsaka}
  					 	alt="Michael in Osaka"
  					 	width="250px"
  					 />
  					</Link>
  				</div>
  			</div>
  		</Fade>
   	</Textbox>
  </section>  
)

export default Intro;