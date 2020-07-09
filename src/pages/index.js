import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar.js";
import Intro from "../components/Intro.js";
import FooterSelfmade from "../components/FooterSelfmade.js";
import Hero from '../components/Hero.js';
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Portfolio from '../components/portfolio.js';
//import ResumeFile from '../data/Fake-resume.pdf'

import 'tachyons';

const Home = () => ( 
  	<div className=''>
  		<Navbar />
      <Intro />
      <Hero />
  		<About />
  		<Portfolio />
  		<Contact />
  		<FooterSelfmade /> 
  	</div>
  );


export default Home;
