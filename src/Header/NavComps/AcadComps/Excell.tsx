import {Links} from "../../comps/Links";

export function Excell() {
  const excel = [
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
      text: "Funds for Improvement Of Science and Technology (FlST)"
    }
  ]

  return (
    <div className="excell-list">
      <Links links={excel} />
    </div>
  )
}