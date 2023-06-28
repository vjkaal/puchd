import {TopBar} from "./TopBar/TopBar";
import {Nav} from "./Nav";
import {Logo} from "./Logo";
import {Search} from "./Search";

export function Header(){
  return(
    <header>
      <TopBar />
      <Logo/>
      <Search />
      <Nav />
    </header>
  )
}