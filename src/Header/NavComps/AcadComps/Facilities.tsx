import {Heading2, Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Facilities() {

  const heading = "facilities"

  const list = [
    {
      class: "library",
      href: "#",
      text: "library"
    },
    {
      class: "sports",
      href: "#",
      text: "health & sports"
    },
    {
      class: "skill",
      href: "#",
      text: "skill development"
    },
    {
      class: "career",
      href: "#",
      text: "placement & career"
    },
    {
      class: "education",
      href: "#",
      text: "education"
    },
    {
      class: "research",
      href: "#",
      text: "research"
    },
    {
      class: 'collab_research',
      href: "#",
      text: "Collaborative Research"
    },
    {
      class: "engg",
      href: "#",
      text: "Engineering & Technology"
    },
    {
      class: "human_rights",
      href: "#",
      text: "Human Rights"
    },
    {
      class: "interdisciplinary",
      href: "#",
      text: "Interdisciplinary"
    },
    {
      class: "radio",
      href: "#",
      text: "Radio"
    },
    {
      class: "others",
      href: "#",
      text: "Others"
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