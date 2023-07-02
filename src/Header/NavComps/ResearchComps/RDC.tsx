import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";


export function RDC() {
  const heading = 'RESEARCH AND DEVELOPMENT CELL(RDC)'

  const list = [
    {
      class: 'about',
      href: '#',
      text: "About"
    },
    {
      class: 'politics',
      href: '#',
      text: "Research Policies and Manuals"
    },
    {
      class: 'staff',
      href: '#',
      text: "Staff"
    },
    {
      class: 'ongoing',
      href: '#',
      text: "Ongoing Research Projects"
    },
    {
      class: 'scholars',
      href: '#',
      text: "Reseach Scholars"
    },
    {
      class: 'contact',
      href: '#',
      text: "Contact"
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