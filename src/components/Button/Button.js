import React from "react"
import style from './button.module.scss'
import { Link } from 'gatsby'

export function NiceButton({href, target, children, className}) {
  return (
    <a href={href} target={target} className={style.testButton +` `+ className}>
      {children}
    </a>
  );
}

export function LocalButton({to, children, className}) {
  return (
    <span>
      <Link to={to} className={style.testButton}>
        {children}
      </Link> 
    </span>
    
  );
}