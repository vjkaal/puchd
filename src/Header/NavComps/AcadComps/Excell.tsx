import {Links} from "../../comps/Links";
import {Heading2, Heading3} from "../../comps/Heading";

export function Excell() {
  const heading = "excell"

  const list = [
    {
      class: "cas",
      href: "#",
      text: "Centres for Advanced Study (CAS)"
    },
    {
      class: "drs",
      href: "#",
      text: "Departmental Research Support (DRS)"
    },
    {
      class: "dsa",
      href: "#",
      text: "Department of Special Assistance (DSA)"
    },
    {
      class: "fist",
      href: "#",
      text: "Funds for Improvement Of Science and Technology (FIST)"
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