import {Heading4} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function PgLaw() {
  const heading = 'pglaw'

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
      class: 'online',
      href: '#',
      text: 'Online Registration'
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