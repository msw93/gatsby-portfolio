import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
//import 'tachyons'


export default function Navbar() {
  return (   
  	 <header className='white f4-l f4-m f5'>
      <Fade className='' down={true} duration={1000} delay={300} distance="30px">
  	   	<ul className=''>
  	   	  <li><Link className='br3' to="#">Home</Link></li>
	     		<li><Link className='br3' to="#about">About Me</Link></li>
	     		<li><Link className='br3' to="#portfolio">Portfolio</Link></li>
	     		<li className="push"><Link className='br3' to="#contact">Contact</Link></li>
		   	</ul>
      </Fade>
  	 </header>
  );
}