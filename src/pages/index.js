import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar.js"
import Intro from "../components/Intro.js"
import FooterSelfmade from "../components/FooterSelfmade.js"
import About from "../components/About.js"
import Contact from "../components/Contact.js"
import Portfolio from "../components/Portfolio.js"
import ClientOnly from "../components/ClientOnly"

const Home = ({ data }) => (
  <div>
    <Helmet>
      <meta
        charSet="utf-8"
        name="viewport"
        content="width=device-width, initial-scale=1 shrink-to-fit=no, viewport-fit=cover"
      />
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <link rel="canonical" href="https://mikewiner.ca" />
      <meta name="description" content={data.site.siteMetadata.description} />
    </Helmet>

    <ClientOnly>
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
      <FooterSelfmade />
    </ClientOnly>
  </div>
)

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Home
