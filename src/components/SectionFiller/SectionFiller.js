import React from 'react';
import style from './SectionFiller.module.scss';


const Filler = ({fill, id}) => {
	
  return(
  	<div >
  		
  		<div className='topHalf'>
    		<div id={`fill`} className={style.filler}> 
    				<p className=''>{fill}</p>
    		</div>
    	</div>

    	

    </div>


  )
}

export default Filler;