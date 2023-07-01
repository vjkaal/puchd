import {Heading3} from "../../comps/Heading";
import {useEffect, useState} from "react";
import {Links} from "../../comps/Links";

export function Admsn() {
  const heading = "university admissions"
  const [show, setShow] = useState(false)

  const list = [
    {
      class: 'prospectus',
      href: '#',
      text: "Prospectus"

    },
    {
      class: 'handbook',
      href: '#',
      text: "Handbook of Information"

    },
    {
      class: 'online',
      href: '#',
      text: "Online Admissions and Entrance"

    },
    {
      class: 'guidelines-23/24',
      href: '#',
      text: "Admission Guidelines 2023-2024"

    },
    {
      class: 'notices',
      href: '#',
      text: "Admission Notices"

    },
    {
      class: 'counselling',
      href: '#',
      text: "Counselling Schedule"

    },
    {
      class: 'migration',
      href: '#',
      text: "Migration(Lateral Entry)"
    },
    {
      class: 'guideline',
      href: '#',
      text: "Guidelines for Admission"

    }
  ]

  function setShowList(){
    if(show === true) setShow(false)
    else setShow(true)
  }

  useEffect(()=>{
    if(show){
      const elem : HTMLElement | null = document.querySelector('.')
    }
  })

  

  return (
    <div className={heading + ' nav-drop-list-container'}>
      <button onClick={setShowList}>
        <Heading3 heading={heading} />
      </button>
      <div className={heading+'-list nav-drop-list-content'}>
        <Links links={list} />
      </div>
    </div>
  )
}