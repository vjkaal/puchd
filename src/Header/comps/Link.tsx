import {link} from "./Interface";

export function Link(props:link) {
  return (
    <div className={props.class}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}