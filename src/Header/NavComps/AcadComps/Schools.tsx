import {Heading2} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Schools() {

  const heading = "schools"

  const list = [
    {
      class: "arts",
      href: "#",
      text: "Arts"
    },
    {
      class: "comm",
      href: "#",
      text: "business management & commerce"
    },
    {
      class: 'multi-fac',
      href: '#',
      text: 'multi-facility departments'
    }
  ]

  return(
    <div className={heading + "-list"}>
      <Heading2 heading={heading} />
      <Links links={list} />
    </div>
  )
}