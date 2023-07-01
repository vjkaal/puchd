import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Journals() {
  const heading = 'journals'

  const list = [
    {
      class: 'arts',
      href: '#',
      text: "Arts Journals"

    },
    {
      class: 'social_science',
      href: '#',
      text: "Social Science Journals"

    },
    {
      class: 'science',
      href: '#',
      text: "Science Journals"

    },
    {
      class: 'law',
      href: '#',
      text: "Law Journals"

    },
    {
      class: 'sikh',
      href: '#',
      text: "Sikh studies Journals"

    },
    {
      class: 'paridosh',
      href: '#',
      text: "Paridosh: Hindi Journals"

    },
    {
      class: 'dialog',
      href: '#',
      text: "dialog: English and Cultural Science Journal"

    },
    {
      class: 'distance',
      href: '#',
      text: "Indian Journal of Distance Education"

    },
    {
      class: 'legal',
      href: '#',
      text: "Legal studies"

    },
    {
      class: 'parkh',
      href: '#',
      text: "Parkh: Punjabi Journal"

    },
    {
      class: 'indological',
      href: '#',
      text: "Vishveshvaranand Indological Journal"
    }
  ]


  return (
    <div className={heading + '-list'}>
      <Heading3 heading={heading} />
      <Links links={list} />
    </div>
  )
}