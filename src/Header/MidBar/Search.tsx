import {useState} from "react";
import {Input} from './../comps/Input';

import search from './../../res/logo/search_light.svg'

import './Search.sass'

export function Search(){
  const [exp, setExp] = useState("");

  function search_exp(){
    // currently does nothing, implementation later along with backend
  }

  return(
    <div className="main-search-container">
      <Input type="text" value={exp} placeholder="Search Panjab University" setValue={setExp}/>
      <button onChange={search_exp}>
        <img src={search} alt="Search" width="10rem" />
      </button>
    </div>
  )
}