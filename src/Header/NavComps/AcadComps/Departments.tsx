import {Links} from '../../comps/Links'

export function Departments() {
  const depts = [
    {
      class: "arts",
      href: "#",
      text: "arts"
    },
    {
      class: "design",
      href: "#",
      text: "design and fine arts"
    },
    {
      class: "education",
      href: "#",
      text: "education"
    },
    {
      class: "language",
      href: "#",
      text: "language"
    },
    {
      class: "law",
      href: "#",
      text: "law"
    },
    {
      class: "science",
      href: "#",
      text: "science"
    },
    {
      class: 'multi-fac',
      href: '#',
      text: 'multi-facility departments'
    }
  ]
  return(
    <div className="dept-links-list">
      <Links links={depts} />
    </div>
  )
}