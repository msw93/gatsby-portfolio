import React from 'react';
// import Textbox from "../components/textbox"
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { NiceButton, LocalButton } from './Button/Button'
import avatarSVG from '../images/mike-avatar-v2.svg'
import resumePDF from '../data/Michael-Winer-Resume-2020.pdf'

const Intro = () => {

  return(

    <section id='intro' className = "pa3 tc flex justify-center pb0">
    	
    		<div className=" vh-100-l flex-l justify-center-l items-center-l vh-100-m flex-m justify-center-m items-center-m w-100">

    			<Fade left={true} duration={1000} delay={800} distance="50px">
            <div className='w-50-l w-100 bg-white pa3 pt0 shadow-1'>
    			 	  <h1 className='pt3'>Michael Winer, Front-End Web Developer, Adventurer and more.</h1>
    			    <p className='lh-copy'>Welcome, click <LocalButton className="pb2" to={resumePDF}>HERE</LocalButton> or my face for my <b>resume</b></p>
    			  </div>
          </Fade>

          <Fade right={true} duration={1000} delay={800} distance="50px">
    			  <div className='w-30-l w-100 pa3'>
    			   	<Link to='/resume' alt='/resume'>
                  <img className='grow' src={avatarSVG} alt="My face avatar" width=''/>
    			   	</Link>
    			  </div>
          </Fade>

    		</div>
    </section>  
  )
}

export default Intro;