import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js"
import Fade from 'react-reveal/Fade';
import { NiceButton, LocalButton} from './Button/Button'

export default function Contact() {
  return (

    <div>

      <div className='pt4 relative flex justify-center'>
        <div className="separator sepContact"></div>
        <p className="absolute o-10 f-subheadline items-center tc mt4 mb1 lh-s">Contact</p>
      </div>

      <section id='contact' className='pa3 pb5 ma3 tc flex justify-center '>
        <Fade bottom={true} duration={1000} delay={500} distance="30px">
          <Textbox>
          		<div className="bg-white">
          			<Header headerText="Let's talk!" />
          			<p>Contact me through email, click below!</p>
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
    </div>
  );
}