import {link} from "./Interface";

export function Link(props:link) {
  return (
    // link type is passed normally but used only in case of image links
    <div className={props.class}>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}