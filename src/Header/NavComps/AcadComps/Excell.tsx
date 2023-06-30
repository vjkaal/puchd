import {Links} from "../../comps/Links";
import {Heading2} from "../../comps/Heading";

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
    <div className={heading + "-list"}>
      <Heading2 heading={heading} />
      <Links links={list} />
    </div>
  )
}