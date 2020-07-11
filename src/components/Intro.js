import React from 'react';
// import Textbox from "../components/textbox"
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { LocalButton } from './Button/Button'
import avatarSVG from '../images/mike-avatar.svg'

const Intro = () => {

  return(

    <section id='intro' className = "pa3 center tc">
    	<Fade duration={1000} delay={800} distance="30px">
    		<div className="flex justify-center items-center">
    			<div className='fl w-50 bg-white pa3 pt0 shadow-1'>
    				<h1>Michael Winer, Front End Web Developer, Super Hero and more.</h1>
    				<p>Welcome, click <LocalButton to="/resume">HERE</LocalButton> or my face for my <b>resume</b></p>
    			</div>
    			<div className='fl w-30 pa3'>
    				<Link to='/resume' alt='/resume'>
              <img className=' grow'src={avatarSVG} alt="My face avatar" width=''/>
    				</Link>
    			</div>
    		</div>
    	</Fade>
    </section>  
  )
}

export default Intro;