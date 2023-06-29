import {Logo} from "./Logo";
import {Search} from "./Search";

import './MidBar.sass'
export function MidBar() {
  return(
    <div className="midbar">
      <Logo />
      <Search />
    </div>
  )
}