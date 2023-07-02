import { Link } from "./Link";
import {ImageLink} from "./ImageLink";
import {links} from "./Interface";

export function Links(props:links) {
  return(
    <div className="Links-container">
      {props.links.map((link: { type: string; class: string; href: string; src: string; alt: string; text: string; title: string; }, index:number) =>{
        if(link.type === 'image') return <ImageLink key={index} type={link.type} class={link.class} href={link.href} src={link.src} alt={link.alt} />
        return <Link key={index} type={link.type} class={link.class} href={link.href} text={link.text} title={link.title} />
      })}
    </div>
  )
}