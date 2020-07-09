import React from 'react';
import { Link } from 'gatsby';

const Resume = () => (
	<div className='flex flex-column tc'>
		<h1>COMING SOON TO A THEATER NEAR YOU</h1>
		<button className='w-20 br3 bg-purple center'>
			<Link className='white no-underline hover-black' to="/">Go BACK</Link>		
		</button>
	</div>	
)

export default Resume;