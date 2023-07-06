import React, {useEffect, useState} from "react";
import {Links} from "./comps/Links";
import {Academics} from "./NavComps/Academics";
import {Research} from './NavComps/Research';
import {Admission} from "./NavComps/Admission";

import home from './../res/logo/home_light.svg'

import './Nav.sass'

export function Nav() {

  const [showList, setShowList] = useState(-1)

  useEffect(()=>{
    console.log(showList)
    for(let i=0; i<3; i++){
      if(i === showList) document.getElementsByClassName('nav-comp-dropdown')[i].setAttribute('style', "display: block;")
      else document.getElementsByClassName('nav-comp-dropdown')[i].setAttribute('style', "display: none;")
    }
  }, [showList])

  document.onclick = (e) => {
    const targetElem = e.target as HTMLElement
    console.log(targetElem)
    const element = document.getElementsByClassName('click-to-hide')[showList]
    if(element === undefined) return
    console.log(element.id, targetElem.id)
    if(targetElem.id === element.id) return
    if(targetElem.id !== element.id){
      element.setAttribute('style', 'display: none;')
      setShowList(-1)
    }
  }


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
      type: 'buttonDropDown',
      class: 'academics',
      mouseOver: () => setShowList(0),
      // mouseOut: ()=>setShowList(-1),
      text: 'academics'
    },
    {
      type: 'text',
      class: 'administration',
      href: '#',
      text: 'administration'
    },
    {
      type: 'buttonDropDown',
      class: 'research',
      mouseOver:()=> setShowList(1),
      // mouseOut:()=> setShowList(-1),
      text: 'research'
    },
    {
      type: 'buttonDropDown',
      class: 'admission',
      mouseOver: ()=>setShowList(2),
      // mouseOut: ()=>setShowList(-1),
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
      <Academics />
      <Research />
      <Admission />
    </div>
  )
}