import React from "react";
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar.js";
import Intro from "../components/Intro.js";
import FooterSelfmade from "../components/FooterSelfmade.js";
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Portfolio from '../components/Portfolio.js';

const Home = ({data}) => ( 
  	 

    <div>    
      <Helmet>
        <meta lang="en" charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1 shrink-to-fit=no, viewport-fit=cover" />
        <title>{data.site.siteMetadata.title}</title>
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

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home;
