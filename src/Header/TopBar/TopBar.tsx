import {Left} from "./Left";
import {Right} from "./Right";

import './TopBar.sass'

export function TopBar(){
  return(
    <div className="top-bar">
      <Left />
      <Right />
    </div>
  )
}