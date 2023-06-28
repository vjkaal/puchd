import {input} from "./Interface";

export function Input(props:input) {
  return (
    <input type={props.type} value={props.value} placeholder={props.placeholder} onChange={(e)=>{props.setValue(e.target.value)}} />
  )
}