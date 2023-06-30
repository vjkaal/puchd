import {Links} from "../../comps/Links";
import {Heading2} from "../../comps/Heading";

export function Institutes() {
  const heading = "institutes"

  const list = [
    {
      class: "arts",
      href: "#",
      text: "arts"
    },
    {
      class: "comm",
      href: "#",
      text: "business management & commerce"
    },
    {
      class: "education",
      href: "#",
      text: "education"
    },
    {
      class: "engg",
      href: "#",
      text: "engineering & technology"
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
    }
  ]

  return(
    <div className="inst-links-list">
      <Heading2 heading={heading} />
      <Links links={list} />
    </div>
  )
}