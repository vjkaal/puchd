import {Links} from "../../comps/Links";

export function Centres() {
  const centres = [
    {
      class: "arts",
      href: "#",
      text: "arts"
    },
    {
      class: "social",
      href: "#",
      text: "social science"
    },
    {
      class: "language",
      href: "#",
      text: "languages"
    },
    {
      class: "science",
      href: "#",
      text: "science"
    },
    {
      class: "medical",
      href: "#",
      text: "medical sciences"
    },
    {
      class: "regional",
      href: "#",
      text: "regional centres"
    },
    {
      class: "rural",
      href: "#",
      text: "rural centres"
    },
    {
      class: "study",
      href: "#",
      text: "study centres"
    }
  ]

  return (
    <div className="centres-list">
      <Links links={centres} />
    </div>
  )
}