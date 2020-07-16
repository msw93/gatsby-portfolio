import React from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
//import 'tachyons'


export default function Navbar() {
  
  //Javascript Scrolling found from https://css-tricks.com/styling-based-on-scroll-position/ Thank you :)!
  // The debounce function receives our function as a parameter
  const debounce = (fn) => {

  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) { 
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      
      // Call our function and pass any params we received
      fn(...params);
    });

  } 
};


// Reads out the scroll position and stores it in the data attribute
// so we can use it in our stylesheets
const storeScroll = () => { 
  if (typeof window !== `undefined` && typeof document !== `undefined`) {
    document.documentElement.dataset.scroll = window.scrollY;
  } 
}

// Listen for new scroll events, here we debounce our `storeScroll` function
if (typeof document !== `undefined`) {
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
}
// Update scroll position for first time
storeScroll();

  return (   
  	 <nav id='navbar' className='f3-l f4-m f5'>
      <Fade className='' down={true} duration={1000} delay={300} distance="30px">
  	   	<ul className=''>
  	   	  <li><Link to="#">Home</Link></li>
	     		<li><Link to="#about">About Me</Link></li>
	     		<li><Link to="#portfolio">Portfolio</Link></li>
	     		<li className="push"><Link  to="#contact">Contact</Link></li>
		   	</ul>
      </Fade>
  	 </nav>
  );
}