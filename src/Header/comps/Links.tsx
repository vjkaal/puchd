import { Link } from "./Link";
import {ImageLink} from "./ImageLink";
import {links} from "./Interface";
import {ButtonDropDown} from "./ButtonDropDown";

export function Links(props:links) {
  return(
    <div className="Links-container">
      {props.links.map(
        (link:
           { type: string;
             class: string;
             href: string;
             src: string;
             alt: string;
             text: string;
             title: string;
             mouseOver: ()=>void;
             mouseOut: ()=>void;},
         index:number) =>{
        if(link.type === 'image')
          return <ImageLink
                    key={index}
                    class={link.class}
                    href={link.href}
                    src={link.src}
                    alt={link.alt} />
        else if(link.type === 'buttonDropDown')
          return <ButtonDropDown
                    key={index}
                    class={link.class}
                    onMouseOver={link.mouseOver}
                    onMouseOut={link.mouseOut}
                    text={link.text} />
        return <Link
                  key={index}
                  class={link.class}
                  href={link.href}
                  text={link.text}
                  title={link.title} />
      })}
    </div>
  )
}