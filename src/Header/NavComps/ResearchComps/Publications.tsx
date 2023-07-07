import {Heading4} from "../../comps/Heading";
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