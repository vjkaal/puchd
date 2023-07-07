import {Heading4} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function DST() {
  const heading = "DST - CENTRE FOR POLICY RESEARCH"

  return (
    <div className={heading + ' nav-drop-list-container'}>
      <button>
        <Heading4 heading={heading} />
      </button>
      {/*<div className={heading+'-list nav-drop-list-content'}>*/}
      {/*  <Links links={list} />*/}
      {/*</div>*/}
    </div>
  )
}