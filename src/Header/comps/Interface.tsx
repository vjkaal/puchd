export interface links {
  links: any
}

export interface imageLink {
  class: string,
  href: string,
  src: string,
  alt: string
}

export interface link {
  class: string,
  href: string,
  text: string,
  title: string
}

export interface buttonDropDown {
  class: string
  text: string,
  onMouseOver: ()=>void,
  onMouseOut: ()=>void
}

export interface input {
  type: string,
  value: string,
  setValue: any,
  placeholder: string
}

export interface heading {
  heading: string
}