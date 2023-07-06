import {link} from "./Interface";
import './Link.sass'

export function Link(props:link) {
  return (
    // link type is passed normally but used only in case of image links
    <div className={props.class + " link-content"} title={props.title}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}