import logo from './../../res/logo/panjab-university.svg'
import './Logo.sass'

export function Logo() {
  return(
    <div className="logo">
      <div className="image">
        <img src={logo} alt="Panjab University" width="120px" />
      </div>
      <div className="text">
        <h1>PANJAB UNIVERSITY</h1>
        <p>Established under The Panjab University Act VII of 1947
          <br />
          - enacted by Govt. of India</p>
      </div>
    </div>
  )
}