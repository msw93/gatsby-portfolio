import React, { useState, useEffect } from 'react';
// import Textbox from "../components/textbox"
import Fade from 'react-reveal/Fade';
import { NiceButton } from './Button/Button'
import avatarSVG from '../data/smiley-green-avatar.svg'
import resumePDF from '../data/mwiner-resume.pdf'

const Intro = () => {

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  return(

    <section id='intro' className = "mt0-l mt4-m mt5-ns mt4 pa3 tc flex justify-center pb0">
    	
    		<div className=" vh-100-l flex-l justify-center-l items-center-l vh-100-m flex-m justify-around-m items-center-m w-100">

    			<Fade left={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="50px">
            <div className='w-50-l w-50-m w-100 bg-white pa3 pt0 shadow-1'>
    			 	  <h1 className='fw5 pt3 f2-l f3-m f4-ns f2 '>Mike Winer, Full-Stack Web Development, Digital Design, Adventure and more.</h1>
    			    <span className='lh-copy relative flex inline-flex items-center'>Click&nbsp;<NiceButton className="pb2" href={resumePDF}>HERE</NiceButton>&nbsp;or my face for my resume</span>
    			  </div>
          </Fade>

          <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={800} distance="50px">
    			  <div className='w-20-xl w-30-l w-40-m w-100 pa3'>
    			   	<a href={resumePDF} alt='/404'>
                  <img className='grow' src={avatarSVG} alt="My face avatar" width=''/>
    			   	</a>
    			  </div>
          </Fade>

    		</div>
    </section>  
  )
}

export default Intro;