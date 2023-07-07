import {Heading4} from "../../comps/Heading";
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