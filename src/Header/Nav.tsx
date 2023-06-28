import {Links} from "./comps/Links";

import './Nav.sass'

import home from './../res/logo/home_light.svg'
export function Nav() {
  const links = [
    {
      type: 'image',
      class: 'home',
      href: '#',
      src: home,
      alt: 'home'
    },
    {
      type: 'text',
      class: 'about',
      href: '#',
      text: 'about'
    },
    {
      type: 'text',
      class: 'academics',
      href: '#',
      text: 'academics'
    },
    {
      type: 'text',
      class: 'administration',
      href: '#',
      text: 'administration'
    },
    {
      type: 'text',
      class: 'research',
      href: '#',
      text: 'research'
    },
    {
      type: 'text',
      class: 'admission',
      href: '#',
      text: 'admission'
    },
    {
      type: 'text',
      class: 'campus',
      href: '#',
      text: 'campus'
    },
    {
      type: 'text',
      class: 'contact',
      href: '#',
      text: 'contact'
    },
  ]
  return (
    <div className='header-nav'>
      <Links links={links} />
    </div>
  )
}