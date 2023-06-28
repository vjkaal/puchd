import {imageLink} from "./Interface";

export function ImageLink(props:imageLink) {
  return(
    <div className={props.class}>
      <a href={props.href}>
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  )
}