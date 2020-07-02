import React from "react";
import 'bootstrap';
//import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Document, Page } from 'react-pdf';
import ResumeFile from '../data/Fake-resume.pdf'

const pageNumber = 1;

export default function Resume() {
  return (
    <div className='tc ma3'>
 			<h1>FUCK YOU BUDDY</h1>
 			<Button variant="primary"><a className='white' href="/">Go back</a></Button>
 			<div className='ma3 pa2 shadow-2 w-50 center'>
 		  	<Document className=''s file={ResumeFile}>
 		  		<Page className='center' pageNumber={pageNumber} />
 		  	</Document>
 		  </div>

    </div>
  )
}