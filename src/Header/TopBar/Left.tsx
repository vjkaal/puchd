import {Links} from './../comps/Links'

export function Left(){
  const links = [
    {
      class: "students",
      href: "#",
      text: "students"
    },
    {
      class: "faculty",
      href: "#",
      text: "faculty/staff"
    },
    {
      class: "alumni",
      href: "#",
      text: "alumni"
    }
  ]
  return(
    <Links links={links} />
  )
}