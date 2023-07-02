import {Departments} from "./AcadComps/Departments";
import {Institutes} from "./AcadComps/Institutes";
import {Centres} from "./AcadComps/Centres";
import {Excell} from "./AcadComps/Excell";
import {Facilities} from "./AcadComps/Facilities";
import {Chairs} from "./AcadComps/Chairs";
import {Schools} from "./AcadComps/Schools";
import {Distance} from "./AcadComps/Distance";
import {Colleges} from "./AcadComps/Colleges";

import './NavCompsDiv.sass'

export function Academics() {
  return(
    <div
      className="nav-comp-dropdown"
      id="acad-nav-dropdown-list"
      // onMouseOver={toggleList}
    >
      <div className="flex-class">
        <Departments />
        <Institutes />
        <Centres />
        <Excell />
        <Facilities />
        <Chairs />
        <Schools />
        <Distance />
        <Colleges />
      </div>
    </div>
  )
}