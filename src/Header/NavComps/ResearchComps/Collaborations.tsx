import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Collaborations() {
  const heading = 'collaborations'

  const list = [
    {
      class: 'mou',
      href: '#',
      text: "MOUs"
    }
  ]


  return (
    <div className={heading + '-list'}>
      <Heading3 heading={heading} />
      <Links links={list} />
    </div>
  )
}