import React from "react"
import Header from "../components/header.js"
import Textbox from "../components/textbox.js"
import Fade from 'react-reveal/Fade';
import ProfilePic from "../images/DevProPic1.jpg";
import { Bio } from "../data/personalInfo.js";

const { Blog, URL} = Bio;

export default function About() {
  return(
  	<Textbox className=''>
      <div className='flex'>
      	<Fade className='' duration={8000} delay={500} distance="30px">
          <div className='w-50'>
      	    <Header headerText='Hello WORLD' />
      	    <h1>I am Michael!</h1>
            <p>{Blog}<a href={URL}> here!</a></p>
      	   </div>  
          <div className='ma3 w-50'>
            <img className='shadow-2'
              src={ProfilePic}
              alt="Profile"
              width='300px'/>
          </div>
      	</Fade>
      </div>
    </Textbox>
  )
}
