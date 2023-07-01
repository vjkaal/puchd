import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function EYuva() {
  const heading = "E_Yuva, empovering youth"

  const list = [
    {
      class: 'conferences',
      href: '#',
      text: "University Conferences"
    }
  ]

  return (
    <div className={heading + '-list'}>
      <Heading3 heading={heading} />
      <Links links={list} />
    </div>
  )
}