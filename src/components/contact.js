import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js"
import Fade from 'react-reveal/Fade';
import { NiceButton, LocalButton} from './Button/Button'

export default function Contact() {
  return (
    <section id='contact' className='pa3 ma3 center'>
      <Textbox>
      	<Fade duration={2000} delay={1000} distance="30px">
      		<div className="bg-white">
      				<Header headerText="Contact" />
      				<p>Contact me through email!</p>
              <NiceButton 
                href={`mailto:winer.mike@gmail.com`} 
                target={`__blank`}>
                  Email me here
              </NiceButton>{` `}
              <LocalButton to={`#`}>Go back to top</LocalButton>

        	</div>
        </Fade>
      </Textbox>
    </section>
  );
}