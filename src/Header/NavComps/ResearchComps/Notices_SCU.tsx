import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Notices_SCU() {
  const heading = "Notices(SAIF, CIL, AND UCIM)"

  const list = [
    {
      class: 'about',
      href: '#',
      text: "Notice Board"


    },
    {
      class: 'admsn',
      href: '#',
      text: "Admission Notices"


    },
    {
      class: 'attendance',
      href: '#',
      text: "Attendance of Students"


    },
    {
      class: 'quotations',
      href: '#',
      text: "Quotations"


    },
    {
      class: 'syllabi',
      href: '#',
      text: "Scheme and Syllabi"


    },
    {
      class: 'seminar',
      href: '#',
      text: "Seminars/ Workshops/ Lectures"


    },
    {
      class: 'study-material',
      href: '#',
      text: "Study Materials(e-SLMs)"


    },
    {
      class: 'time-table',
      href: '#',
      text: "Time Table"


    },
    {
      class: 'rti',
      href: '#',
      text: "RTI Section 4"


    },
    {
      class: 'tenders',
      href: '#',
      text: "Tenders"

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