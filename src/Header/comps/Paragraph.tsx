import {paragraph} from "./Interface";

export function Paragraph(props:paragraph) {
  return(
    <div className="paragraph">
      <span>{props.content}</span>
    </div>
  )
}