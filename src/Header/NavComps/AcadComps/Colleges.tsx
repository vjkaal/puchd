import {Heading2} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Colleges() {
  const heading = "colleges"

  const list = [
    {
      class: "dean",
      href: "#",
      text: "Dean Colleges"
    },
    {
      class: "constituent",
      href: "#",
      text: "Constituent Colleges"
    }
  ]

  return(
    <div className={heading + '-list'}>
      <Heading2 heading={heading} />
      <Links links={list} />
    </div>
  )
}