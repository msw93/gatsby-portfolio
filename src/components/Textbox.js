import React from "react"

export default function Textbox(props) {
  
  //console.log(props)
  
  return (
    <div className={`bg-white fl tc shadow-2 br2 pa3 `+ props.className}>{props.children}</div>
  );
}