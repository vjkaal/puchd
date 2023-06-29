import logo from './../../res/logo/panjab-university.svg'
import './Logo.sass'

export function Logo() {
  return(
    <div className="logo">
      <div className="image">
        <img src={logo} alt="Panjab University" width="200px" />
      </div>
      <div className="text">
        <h1>PANJAB UNIVERSITY</h1>
        <h4>Established in 1882</h4>
      </div>
    </div>
  )
}