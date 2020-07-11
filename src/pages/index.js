import React from "react";
import { Helmet } from "react-helmet"
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar.js";
import Intro from "../components/Intro.js";
import FooterSelfmade from "../components/FooterSelfmade.js";
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Portfolio from '../components/portfolio.js';
//import ResumeFile from '../data/Fake-resume.pdf'

import 'tachyons';

const Home = () => ( 
  	<div className=''>
    
      <Helmet>
        <meta charSet="utf-8" />
        <title>Michael Winer</title>
        <link rel="canonical" href="https://mikewiner.github.io/gatsby-portfolio/" />
        
      </Helmet>

  		<Navbar />
      <Intro />
  		<About />
  		<Portfolio />
  		<Contact />
  		<FooterSelfmade /> 
  	</div>
  );


export default Home;
