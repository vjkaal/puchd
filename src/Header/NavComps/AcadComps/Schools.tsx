import { Heading4} from "../../comps/Heading";
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

  return (
    <div className={heading + ' nav-drop-list-container'}>
      <button>
        <Heading4 heading={heading} />
      </button>
      <div className={heading+'-list nav-drop-list-content'}>
        <Links links={list} />
      </div>
    </div>
  )
}