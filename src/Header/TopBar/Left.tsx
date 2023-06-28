import {Links} from './../comps/Links'

import './Left.sass'

export function Left(){
  const links = [
    {
      type: 'text',
      class: "students",
      href: "#",
      text: "students"
    },
    {
      type: 'text',
      class: "faculty",
      href: "#",
      text: "faculty/staff"
    },
    {
      type: 'text',
      class: "alumni",
      href: "#",
      text: "alumni"
    }
  ]
  return(
    <div className="left">
      <Links links={links} />
    </div>
  )
}