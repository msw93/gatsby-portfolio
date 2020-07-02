import React from "react"
import Header from "../components/header.js"
import Navbar from "../components/navbar.js"
import FooterSelfmade from "../components/FooterSelfmade.js"
import Textbox from "../components/textbox.js";

export default function Portfolio() {
  return (
    <div style={{ color: `black` }}>
    	<Navbar />
    	<Textbox className="red">
      <Header headerText="Portfolio" />
      	<p className="">You can find my portfolio at Github</p>
      	<a href='https://github.com/mikewiner'>Click here.</a>
      </Textbox>
      <FooterSelfmade />
    </div>
  )
}