import React from 'react';
// import Textbox from "../components/textbox"
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import { LocalButton } from './Button/Button'
import avatarSVG from '../images/mike-avatar.svg'

const Intro = () => {

  return(

    <section id='intro' className = "pa3 tc">
    	<Fade duration={1000} delay={800} distance="30px">
    		<div className="flex-l flex-m justify-center-l justify-center-m items-center-l items-center-m w-100">
    			<div className='w-50-l w-50-m w-100 bg-white pa3 pt0 shadow-1'>
    				<h1 className='pt3'>Michael Winer, Front End Web Developer, Super Hero and more.</h1>
    				<p className='lh-copy'>Welcome, click <LocalButton className="pb2" to="/resume">HERE</LocalButton> or my face for my <b>resume</b></p>
    			</div>
    			<div className='w-30-l w-30-m w-100 pa3'>
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