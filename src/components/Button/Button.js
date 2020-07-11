import React from "react"
import style from './button.module.scss'
import { Link } from 'gatsby'

export function NiceButton({href, target, children}) {
  return (
    <a href={href} target={target} className={style.testButton}>
      {children}
    </a>
  );
}

export function LocalButton({to, children}) {
  return (
    <span>
      <Link to={to} className={style.testButton}>
        {children}
      </Link> 
    </span>
    
  );
}