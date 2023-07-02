import React, {useEffect, useState} from "react";
import {Admsn} from "./AdmsnComps/Admsn";
import {Entrance} from "./AdmsnComps/Entrance";
import {Distance} from "./AdmsnComps/Distance";
import {AcadProgs} from "./AdmsnComps/AcadProgs";
import {CetUg} from "./AdmsnComps/CetUg";
import {UgLaw} from "./AdmsnComps/UgLaw";
import {PuThat} from "./AdmsnComps/PuThat";
import {PuMeet} from "./AdmsnComps/PuMeet";
import {Online} from "./AdmsnComps/Online";
import {CetPg} from "./AdmsnComps/CetPg";
import {PuLeet} from "./AdmsnComps/PuLeet";
import {PgLaw} from "./AdmsnComps/PgLaw";

import './NavCompsDiv.sass'

export function Admission() {
  const [showList, setShowList] = useState(true);

  useEffect(()=>{
    console.log(showList)
    const elem: HTMLElement | null = document.getElementById('admissions-nav-dropdown-list')
    if(document.getElementById('admissions-nav-dropdown-list') !== undefined){
      if(!showList){
        // @ts-ignore
        elem.setAttribute('style', "display: none;")
      }
      else {
        // @ts-ignore
        elem.setAttribute('style', 'display: block;')
      }
    }

  }, [showList])

  const toggleList: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if(!showList) setShowList(true)
    else setShowList(false)
  };

  return(
    <div
      className="nav-comp-dropdown"
      id="admissions-nav-dropdown-list"
      // onMouseOver={toggleList}
    >
      <div className="flex-class">
        <Admsn />
        <Entrance />
        <Distance />
        <AcadProgs />
        <CetUg />
        <UgLaw />
        <PuThat />
        <PuMeet />
        <Online />
        <CetPg />
        <PuLeet />
        <PgLaw />
      </div>
    </div>
  )
}