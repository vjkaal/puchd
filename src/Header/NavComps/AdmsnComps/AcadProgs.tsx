import {Heading4} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function AcadProgs() {
  const heading = 'ACADEMIC PROGRAMMES OFFERED'


  const list = [
    {
      class: 'ug',
      href: '#',
      text: 'Under Graduation'

    },
    {
      class: 'pg',
      href: '#',
      text: 'Post Graduation'

    },
    {
      class: 'distance',
      href: '#',
      text: 'Distance Learning'
    },
    {
      class: 'continuing',
      href: '#',
      text: 'Continuing Education'
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