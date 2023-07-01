import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Publications() {
  const heading = "Publications"

  const list = [
    {
      class: '',
      href: '#',
      text: "Publications Bureau"
    },
    {
      class: 'approved',
      href: '#',
      text: "Approved Publishers"
    }
  ]

  return (
    <div className={heading + '-list'}>
      <Heading3 heading={heading} />
      <Links links={list} />
    </div>
  )
}