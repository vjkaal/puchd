import {Links} from "../../comps/Links";
import {Heading2, Heading3} from "../../comps/Heading";

export function Centres() {
  const heading = "centres"

  const list = [
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