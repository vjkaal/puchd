import {Heading1} from "../Header/comps/Heading";
import {Paragraph} from "../Header/comps/Paragraph";
import {ButtonLink} from "../Header/comps/ButtonLink";

export function Brief() {
  const heading = "A University with Potential of Excellence"
  const brief = "One of the oldest Universities in India, the Panjab University (PU) initiated at Lahore in 1882, has a long tradition of pursuing excellence in teaching and research in science and technology, humanities, social sciences, performing arts and sports. The University supports excellence and innovation in academic programmes, promotes excellence in research, scholarship and teaching"
  const aboutClass = "about-btn-class"
  const aboutLink = '/about'
  const aboutText = 'Know More'
  return(
    <div className="brief">
      <Heading1 heading={heading} />
      <hr style={{'width': '60%'}} />
      <Paragraph content={brief} />
      <ButtonLink class={aboutClass} href={aboutLink} text={aboutText} />
    </div>
  )
}