import {buttonLink} from "./Interface";



export function ButtonLink(props:buttonLink) {
  return(
    <div className={props.class + " button-link"}>
      <a href={props.href}>
        <button>
          {props.text}
        </button>
      </a>
    </div>
  )
}