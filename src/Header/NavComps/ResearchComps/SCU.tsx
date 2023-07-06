import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function SCU() {
  const heading = "SAIF, CIL, AND UCIM"

  const list = [
    {
      class: 'about',
      href: '#',
      text: "About"

    },
    {
      class: 'courses',
      href: '#',
      text: "Courses"


    },
    {
      class: 'staff',
      href: '#',
      text: "Faculty and Staff"


    },
    {
      class: 'objectives',
      href: '#',
      text: "Objectives"


    },
    {
      class: 'facilities',
      href: '#',
      text: "Facilities"


    },
    {
      class: 'online',
      href: '#',
      text: "Online Submissions"


    },
    {
      class: 'service',
      href: '#',
      text: "Service Charges"


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