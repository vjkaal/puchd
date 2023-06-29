import {TopBar} from "./TopBar/TopBar";
import {Nav} from "./Nav";

import './Header.sass'
import {MidBar} from "./MidBar/MidBar";

export function Header(){
  return(
    <header>
      <TopBar />
      <MidBar />
      <Nav />
    </header>
  )
}