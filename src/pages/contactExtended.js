import React from "react"
import Header from "../components/header.js"
import Navbar from "../components/navbar.js"
import FooterSelfmade from "../components/FooterSelfmade.js"
import Textbox from "../components/textbox.js";
//import 'tachyons';


export default function Contact() {
  return (
    <div style={{ color: `teal` }}>
    	<Navbar />
    	<div className="bg-white">
    		<Textbox className >
    			<Header headerText="Contact" />
    			<p>Find me on github <a href='https://github.com/mikewiner'>Click here.</a></p>
    			<p>Hello again</p>
    		</Textbox>
      </div>
      <FooterSelfmade />
    </div>
  );
}