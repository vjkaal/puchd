import {buttonDropDown} from "./Interface";

import './DropDown.sass'

export function ButtonDropDown(props:buttonDropDown) {
  return(
    <div className={props.class + ' nav-dropdown-content'}>
      <button
        onMouseOver={() => props.onMouseOver()}
        // onMouseOut={() => props.onMouseOut()}
      >
        {props.text}
      </button>
    </div>
  )
}