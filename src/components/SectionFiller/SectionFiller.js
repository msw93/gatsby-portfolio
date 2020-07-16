import React from 'react';
import style from './SectionFiller.module.scss';


const Filler = ({fill}) => {

  return(
    <div className={style.filler}>
      <p>{fill}</p>
    </div>

  )
}

export default Filler;