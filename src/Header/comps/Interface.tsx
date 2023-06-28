export interface links {
  links: link[]
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
  text: string
}