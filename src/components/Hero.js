import React from 'react';
//import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Textbox from './textbox.js'
//import 'tachyons'
//import Button from 'react-bootstrap/Button';



const Hero = () => {

  const hero = {
  	name:'Michael Winer',
  	subtitle:'Developer, Snowboarder, Japanese etc',
  	cta: 'Find out more here'
  }
  const { title, name, subtitle, cta } = hero;

  return (
    <section id='hero' className='pa3 ma3 center'>
      <Textbox>
        <Fade duration={2000} delay={1000} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade duration={2000} delay={2000} distance="30px">
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#contact">
              {cta || 'Know more'}
            </a>
          </p>
        </Fade>
      </Textbox>
    </section>
  );
};

export default Hero;