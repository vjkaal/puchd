import {Journals} from "./ResearchComps/Journals";
import {RDC} from "./ResearchComps/RDC";
import {DST} from "./ResearchComps/DST";
import {Notices_RDC} from "./ResearchComps/Notices_RDC";
import {Conferences} from "./ResearchComps/Conferences";
import {Publications} from "./ResearchComps/Publications";
import {Colloquium} from "./ResearchComps/Colloquium";
import {EYuva} from "./ResearchComps/EYuva";
import {SCU} from "./ResearchComps/SCU";
import {Notices_SCU} from "./ResearchComps/Notices_SCU";
import {Collaborations} from "./ResearchComps/Collaborations";

import './NavCompsDiv.sass'


export function Research() {
  return (
    <div className="research nav-comp-div">
      <Journals />
      <RDC />
      <DST />
      <Notices_RDC />
      <Conferences />
      <Publications />
      <Colloquium />
      <EYuva />
      <SCU />
      <Notices_SCU />
      <Collaborations />
    </div>
  )
}