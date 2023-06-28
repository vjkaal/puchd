import {TopBar} from "./TopBar/TopBar";
import {Nav} from "./Nav";
import {Logo} from "./Logo";

export function Header(){
  return(
    <header>
      <TopBar />
      <Logo/>
      <Nav />
    </header>
  )
}