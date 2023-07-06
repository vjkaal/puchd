import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Entrance() {
  const heading = "entrance"

  const list = [
    {
      class: 'cetug',
      href: '#',
      text: 'CET UG(Under Graduation)'
    },
    {
      class: 'uglaw',
      href: '#',
      text: 'UG LAW'

    },
    {
      class: 'puthat',
      href: '#',
      text: 'PUTHAT'

    },
    {
      class: 'pglaw',
      href: '#',
      text: 'PG LAW'

    },
    {
      class: 'cetpg',
      href: '#',
      text: 'CET PG(Post Graduation)'

    },
    {
      class: 'puleet',
      href: '#',
      text: 'PULEET'

    },
    {
      class: 'mbausol',
      href: '#',
      text: 'MBAUSOL'

    },
    {
      class: 'pumeet',
      href: '#',
      text: 'PUMEET'

    }
  ]

  return (
    <div className={heading +  ' nav-drop-list-container'}>
      <button>
        <Heading3 heading={heading} />
      </button>
      <div className={heading+'-list nav-drop-list-content'}>
        <Links links={list} />
      </div>
    </div>
  )
}