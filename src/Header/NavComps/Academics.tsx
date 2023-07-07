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
      className="nav-comp-dropdown click-to-hide"
      id="acad-nav-dropdown-list"
      // onMouseOver={toggleList}
    >
      <div className="flex-class">
        <Departments />
        <Centres />
        <Institutes />
        <Excell />
        <Facilities />
        <Chairs />
        <Schools />
        <Colleges />
        <Distance />
      </div>
    </div>
  )
}