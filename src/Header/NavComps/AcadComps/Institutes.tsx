import {Links} from "../../comps/Links";

export function Institutes() {
  const insts = [
    {
      class: "arts",
      href: "#",
      text: "arts"
    },
    {
      class: "comm",
      href: "#",
      text: "business management and commerce"
    },
    {
      class: "education",
      href: "#",
      text: "education"
    },
    {
      class: "engg",
      href: "#",
      text: "engineering and technology"
    },
    {
      class: "language",
      href: "#",
      text: "languages"
    },
    {
      class: "law",
      href: "#",
      text: "law"
    },
    {
      class: "medical",
      href: "#",
      text: "medical sciences"
    },
    {
      class: "pharma",
      href: "#",
      text: "pharmaceutical sciences"
    },
    {
      class: "science",
      href: "#",
      text: "science"
    },
  ]

  return(
    <div className="inst-links-list">
      <Links links={insts} />
    </div>
  )
}