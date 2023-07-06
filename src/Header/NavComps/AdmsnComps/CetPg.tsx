import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function CetPg() {
  const heading = 'CET UG'

  const list = [
    {
      class: 'login',
      href: '#',
      text: 'Login'
    },
    {
      class: 'press',
      href: '#',
      text: 'Press Release'
    },
    {
      class: 'dates',
      href: '#',
      text: 'Important Dates'
    },
    {
      class: 'online',
      href: '#',
      text: 'Online Registration'
    },
    {
      class: 'prospectus',
      href: '#',
      text: 'Prospectus'
    },
    {
      class: 'datesheet',
      href: '#',
      text: 'Date Sheet'
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
        <Heading3 heading={heading} />
      </button>
      <div className={heading+'-list nav-drop-list-content'}>
        <Links links={list} />
      </div>
    </div>
  )
}