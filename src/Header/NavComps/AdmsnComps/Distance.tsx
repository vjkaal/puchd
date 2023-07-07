import {Heading4} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Distance() {
  const heading = "distance learning"

  const list = [
    {
      class: 'usol',
      href: '#',
      text: 'University School of Open Learning'
    },
    {
      class: 'admsn',
      href: '#',
      text: 'USOL Admissions'


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