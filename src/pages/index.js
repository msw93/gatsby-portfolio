import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import MikeInOsaka from "../images/Mike-In-Osaka.jpg";
import Navbar from "../components/navbar.js";
import FooterSelfmade from "../components/FooterSelfmade.js";
import Textbox from "../components/textbox.js";
import Hero from '../components/Hero.js';
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Portfolio from '../components/portfolio.js';
import Fade from 'react-reveal/Fade';
import ResumeFile from '../data/Fake-resume.pdf'


import 'tachyons';


const Home = () => ( 
  	<div className=''>
  		<Navbar />
  		<section id='intro' className = "pa3 center">
  		  <Textbox>
  				<Fade className="jumbotron" duration={1000} delay={800} distance="30px">
  					<div className="flex items-center">
  						<div className='w-50 shadow-1'>
  							<h1>Michael's Portfolio and Blog</h1>
  							<p>Hello welcome to my site! Click my face for my <b>resume</b></p>
  						</div>
  						<div className='w50 center'>
  							<a href='/resume' alt='/resume'>
  							<img
  								//style={{border: `5px black solid`}}
  								className='shadow-2 b3 grow' 
  								src={MikeInOsaka}
  							 	alt="Michael in Osaka"
  							 	width="250px"
  							 />
  							</a>
  						</div>
  					</div>
  				</Fade>
  		 	</Textbox>
  		 </section>

  		 <section id='hero' className='pa3 ma3 center'>
  		 		<Hero />
  		 </section>
  
  		 <section id='about' className='pa3 ma3 center'>
  		 		<About />
  		 </section>

  		 <section id='portfolio' className='pa3 ma3 center'>
  		 		<Portfolio />
  		 </section>
  		 
  		 <section id='contact' className='pa3 ma3 center'>
  		 		<Contact />
  		 </section>

  		<FooterSelfmade /> 
  	</div>
  );


export default Home;
