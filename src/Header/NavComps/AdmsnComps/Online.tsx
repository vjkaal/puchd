import {Heading3} from "../../comps/Heading";
import {Links} from "../../comps/Links";

export function Online() {
  const heading = 'ONLINE ADMISSIONS'


  const list = [
    {
      class: 'notices',
      href: '#',
      text: 'Admission notice'
    },
    {
      class: 'registration',
      href: '#',
      text: 'Online Registration'
    },
    {
      class: 'passForgot',
      href: '#',
      text: 'Forgot your password'
    },
    {
      class: 'deptEmail',
      href: '#',
      text: 'Department Email/Notices'
    },
    {
      class: 'dates',
      href: '#',
      text: 'Important Dates'
    },
    {
      class: 'handbook',
      href: '#',
      text: 'Handbook of Information'
    },
    {
      class: 'CertFormat',
      href: '#',
      text: 'Format of Certificates'
    },
    {
      class: 'nriGuidelines',
      href: '#',
      text: 'Guidelines for NR(Foreign Nationals Category)'
    },
    {
      class: 'nriAdmsn',
      href: '#',
      text: 'Admission form for NRI'
    },
    {
      class: 'sportsGuidelines',
      href: '#',
      text: 'Guidelines for Sports Category'
    },
    {
      class: 'contact',
      href: '#',
      text: 'Contact'
    }
  ]

  return (
    <div className={heading + ' nav-drop-list-container'}>
      <button>
        <Heading3 heading={heading} />
      </button>
      <div className={heading+'-list nav-drop-list-content'}>
        <Links links={list} />
      </div>
    </div>
  )
}