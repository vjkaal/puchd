import {Heading4} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function PuThat() {
  const heading = 'PUTHAT'

  const list = [
    {
      class: 'login',
      href: '#',
      text: 'Login'
    },
    {
      class: 'dates',
      href: '#',
      text: 'Important Dates'
    },
    {
      class: 'prospectus',
      href: '#',
      text: 'Prospectus'
    },
    {
      class: 'uihtm',
      href: '#',
      text: 'UIHTM website'
    },
    {
      class: 'contact',
      href: '#',
      text: 'Contact'
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