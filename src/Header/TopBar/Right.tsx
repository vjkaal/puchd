import {Links} from "../comps/Links";

export function Right(){
  const links = [
    {
      class: "jobs",
      href: "#",
      text: "jobs"
    },
    {
      class: "tenders",
      href: "#",
      text: "tenders"
    },
    {
      class: "accounts",
      href: "#",
      text: "accounts"
    },
    {
      class: "calendar",
      href: "#",
      text: "calendar"
    },
    {
      class: "publications",
      href: "#",
      text: "publications"
    },
    {
      class: "pu_mail",
      href: "#",
      text: "PU@MAIL"
    }
  ]
  return(
    <Links links={links} />
  )
}