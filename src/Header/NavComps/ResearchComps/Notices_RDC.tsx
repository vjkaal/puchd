import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Notices_RDC() {
  const heading = "NOTICES(RDC)"

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
    <div className={heading + '-list'}>
      <Heading3 heading={heading} />
      <Links links={list} />
    </div>
  )
}