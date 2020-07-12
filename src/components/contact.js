import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js"
import Fade from 'react-reveal/Fade';
import { NiceButton, LocalButton} from './Button/Button'

export default function Contact() {
  return (
    <section id='contact' className='pa3 ma3 tc flex justify-center vh-50-l mt5-l vh-50-m mt5-m '>
      <Fade bottom={true} duration={1000} delay={500} distance="30px">
        <Textbox>
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
        </Textbox>
      </Fade>
    </section>
  );
}