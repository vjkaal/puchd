import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function UgLaw() {
  const heading = 'UGLAW'

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
      class: 'nriGuidelines',
      href: '#',
      text: 'Guidelines for NRI(Foreign Nationals Category)'
    },
    {
      class: 'nriAdmsn',
      href: '#',
      text: 'Admission form for NRI'
    },
    {
      class: 'sportsAdmsn',
      href: '#',
      text: 'Guidelines for Sports Category'
    },
    {
      class: 'impDocs',
      href: '#',
      text: 'Important Documents'
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