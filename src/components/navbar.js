import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import Fade from 'react-reveal/Fade'


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



  // $('.navTrigger').click(function () {
  //   $(this).toggleClass('active');
 //   $("#mainListDiv").toggleClass("show_list");
  //   $("#mainListDiv").fadeIn();

  // });




  const isMobile = useIsMobile();
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
    console.log('toggle is ', toggle)
  }

  if (isMobile)
    
    return (
      <nav id='mobNav' className='mobNav nav f3-l f4-m f5 fw5'>
        <div>
        {toggle === false ?
          <div id="mainListDiv" className="">
            <ul className='navLinks'>
              <li className=""><Link onClick={handleClick} to="#">Mike</Link></li>
              <a href onClick={handleClick} className='navTrigger'>
                <i></i>
                <i></i>
                <i></i>
              </a>
            </ul>
          </div>
          :

          <div id="mainListDiv show_list" className="main_list">
            <ul className='navLinks'>
              <li className=""><Link onClick={handleClick} to="#">Home</Link></li>
              <li><Link onClick={handleClick} to="#about">About</Link></li>
              <li><Link onClick={handleClick}to="#portfolio">Portfolio</Link></li>
              <li><Link onClick={handleClick} to="#contact">Contact</Link></li>
              <a href className='navTrigger active' onClick={handleClick} >
                <i></i>
                <i></i>
                <i></i>
              </a>
            </ul>
          </div>
        }
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
    
    // OLD NAV BAR IT WORKS YA DUMMY


    //   <nav class="nav">
    //     <div class="container">
    //         <div class="logo">
    //             <a href="#">Your Logo</a>
    //         </div>
    //         <div id="mainListDiv" class="main_list">
    //             <ul class="navlinks">
    //                 <li><a href="#">About</a></li>
    //                 <li><a href="#">Portfolio</a></li>
    //                 <li><a href="#">Services</a></li>
    //                 <li><a href="#">Contact</a></li>
    //             </ul>
    //         </div>
    //         <span class="navTrigger">
    //             <i></i>
    //             <i></i>
    //             <i></i>
    //         </span>
    //     </div>
    // </nav>




