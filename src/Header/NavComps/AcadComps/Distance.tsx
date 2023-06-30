import {Heading2} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Distance() {
  const heading = 'distance'

  const list = [
    {
      class: 'open',
      href: '#',
      text: 'University School of Open Learning'
    }
  ]

  return(
    <div className={heading +'-list'}>
      <Heading2 heading={heading} />
      <Links links={list} />
    </div>
  )
}