import {Left} from "./Left";
import {Right} from "./Right";

export function TopBar(){
  return(
    <div className="top-bar">
      <Left />
      <Right />
    </div>
  )
}