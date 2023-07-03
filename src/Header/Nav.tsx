import {Links} from "./comps/Links";

import './Nav.sass'

import home from './../res/logo/home_light.svg'
import React, {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import mouseDown = Simulate.mouseDown;
export function Nav() {

  const [showList, setShowList] = useState(-1)

  useEffect(()=>{
    console.log(showList)
    for(let i=0; i<3; i++){
      if(i === showList) document.getElementsByClassName('nav-comp-dropdown')[i].setAttribute('style', "display: block;")
      else document.getElementsByClassName('nav-comp-dropdown')[i].setAttribute('style', "display: none;")
    }
  }, [showList])

  // useEffect(()=>{
  //   if(showList !== -1){
  //     for(let i=0; i<3; i++){
  //       document.onclick = (e: MouseEvent) => {
  //
  //       }
  //     }
  //   }
  // }, [mouseDown])


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
    </div>
  )
}