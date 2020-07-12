import React from "react"
import { Link } from "gatsby"
//import 'tachyons'


export default function Navbar() {
  return (
  	<header className='pb5 white f4-l f4-m f5'>
  		<ul className=''>
  		  <li><Link className='br3' to="#">Home</Link></li>
	  		<li><Link className='br3' to="#about">About Me</Link></li>
	  		<li><Link className='br3' to="#portfolio">Portfolio</Link></li>
	  		<li className="push"><Link className='br3' to="#contact">Contact</Link></li>
			</ul>
  	</header>
  );
}