import {Heading4} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Colleges() {
  const heading = "colleges"

  const list = [
    {
      class: "dean",
      href: "#",
      text: "Dean Colleges"
    },
    {
      class: "constituent",
      href: "#",
      text: "Constituent Colleges"
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