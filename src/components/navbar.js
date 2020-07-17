import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'
//import 'tachyons'
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'


const useIsMobile = () => {
  const [isMobile, setMobile] = useState(false);
  
  useEffect(() => {
    if(window.innerWidth < 600) {
      setMobile(true)
    }
    const handleResize = () => {
      console.log(window.innerWidth)
      if(window.innerWidth > 600) {
        setMobile(false)
        
      } else {
        setMobile(true)
      }
    }
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);  

  return isMobile 
}


export default function Navbar() {
  
  // $('.navTrigger').click(function () {
  //   $(this).toggleClass('active');
  //   console.log("Clicked menu");
  //   $("#mainListDiv").toggleClass("show_list");
  //   $("#mainListDiv").fadeIn();

  // });


  //const [width, setWidth] = useState(window.innerWidth);
  //const [isMobile, setMobile] = useState(false);
  const [toggle, setToggle] = useState(false);


  // useEffect(() => {
  //   window.addEventListener("click", () => {
  //     console.log('click')
  //   })

  // }, []);

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

  const isMobile = useIsMobile();

  const handleClick = () => {
    console.log('FUCK YOU')
  }

  if (isMobile)
    return (
      <nav id='mobNav' className='mobNav f3-l f4-m f5 fw5'>
        <div>
          <p>LOGO</p>
          <ul onClick={handleClick} className=''>
            <li className=""><Link to="#">F</Link></li>
            <li><Link to="#about">B</Link></li>
            <li><Link to="#portfolio">G</Link></li>
            <li><Link  to="#contact">M</Link></li>
          </ul>
        </div>
      </nav>
    )

    return (   
  	 <nav id='navbar' className='f3-l f4-m f5 fw5'>
      <Fade className='' down={true} duration={1000} delay={300} distance="30px">
  	   	<ul className=''>
  	   	  <li><Link to="#">Home</Link></li>
	     		<li><Link to="#about">About Me</Link></li>
	     		<li><Link to="#portfolio">Portfolio</Link></li>
	     		<li className="push"><Link  to="#contact">Contact</Link></li>
		   	</ul>
      </Fade>

  	 </nav>
    )
  
}


  // <nav class="nav">
  //       <div class="container">
  //           <div class="logo">
  //               <a href="#">Your Logo</a>
  //           </div>
  //           <div id="mainListDiv" class="main_list">
  //               <ul class="navlinks">
  //                   <li><a href="#">About</a></li>
  //                   <li><a href="#">Portfolio</a></li>
  //                   <li><a href="#">Services</a></li>
  //                   <li><a href="#">Contact</a></li>
  //               </ul>
  //           </div>
  //           <span class="navTrigger">
  //               <i></i>
  //               <i></i>
  //               <i></i>
  //           </span>
  //       </div>
  //   </nav>
