import {Heading2} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Chairs() {

  const heading = "chairs"

  const list = [
    {
      class: "languages",
      href: "#",
      text: "Languages"
    }
  ]

  return(
    <div className={heading + "-list"}>
      <Heading2 heading={heading} />
      <Links links={list} />
    </div>
  )
}