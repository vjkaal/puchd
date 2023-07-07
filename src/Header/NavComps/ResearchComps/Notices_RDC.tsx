import {Heading4} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Notices_RDC() {
  const heading = "NOTICES (RDC)"

  const list = [
    {
      class: 'notice',
      href: '#',
      text: "Notice Board"
    },
    {
      class: 'politics',
      href: '#',
      text: "Grievance Redressal"

    },
    {
      class: 'staff',
      href: '#',
      text: "Minutes of Meetings"

    },
    {
      class: 'ongoing',
      href: '#',
      text: "Ph.D. / M.Phil. Guidelines and Notifications"

    },
    {
      class: 'scholars',
      href: '#',
      text: "Quotations"

    },
    {
      class: 'contact',
      href: '#',
      text: "Seminars/ Workshops/ Lectures"

    },
    {
      class: 'contact',
      href: '#',
      text: "Student Notices"

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