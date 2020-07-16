import React from "react";
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar.js";
import Intro from "../components/Intro.js";
import FooterSelfmade from "../components/FooterSelfmade.js";
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Portfolio from '../components/portfolio.js';
import upArrow from '../images/up-arrow-teal-ng.svg'
//import ResumeFile from '../data/Fake-resume.pdf'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/global.scss';
// import 'tachyons';

const Home = () => ( 
  	<div>
    
      <Helmet>
        <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no, viewport-fit=cover" />
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


      // <div id="upArrow" className='flex justify-center tc pb3'>
      //   <Link to='/#'>
      //     <img className='w-30' src={upArrow} alt='arrow'/>
      //   </Link>
      // </div>