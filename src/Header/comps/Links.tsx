import {links} from "./Interface";
import { Link } from "./Link";

export function Links(props:links) {
  return(
    <div className="Links-container">
      {props.links.map((link, index) =>{
        return <Link key={index} class={link.class} href={link.href} text={link.text} />
      })}
    </div>
  )
}