import {heading} from "./Interface";

import './Heading.sass'

export function Heading1(props:heading) {
  return(
    <div className="heading">
      <h1>{props.heading}</h1>
    </div>
  )
}

export function Heading2(props:heading) {
  return(
    <div className="heading">
      <h2>{props.heading}</h2>
    </div>
  )
}


export function Heading3(props:heading) {
  return(
    <div className="heading">
      <h3>{props.heading}</h3>
    </div>
  )
}

export function Heading4(props:heading) {
  return(
    <div className="heading">
      <h4>{props.heading}</h4>
    </div>
  )
}