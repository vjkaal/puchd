import {Links} from '../../comps/Links'
import {Heading2} from "../../comps/Heading";

export function Departments() {

  const heading = "departments"

  const list = [
    {
      class: "arts",
      href: "#",
      text: "arts"
    },
    {
      class: "design",
      href: "#",
      text: "design & fine arts"
    },
    {
      class: "education",
      href: "#",
      text: "education"
    },
    {
      class: "language",
      href: "#",
      text: "language"
    },
    {
      class: "law",
      href: "#",
      text: "law"
    },
    {
      class: "science",
      href: "#",
      text: "science"
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