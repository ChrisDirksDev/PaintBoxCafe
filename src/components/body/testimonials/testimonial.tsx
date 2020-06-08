import React from "react"
import Doiley from "../../images/foraldoily2.svg"
import Fork from "../../images/fork.svg"
import "./testimonial.scss"

export interface testimonialProps {
  text: string
  img?: any
  name: string
  headline?: string
}

export const Testimonial = (props: testimonialProps) => {
  return (
    <div className="testimonial">
      <div className="icon">
        <img src={Doiley} alt="doiley" />
      </div>
      <div className="testimonial-text">
        <h3>"{props.headline}"</h3>
        <p>"{props.text}"</p>
        <div className="name">
          <img src={Fork} alt="fork" />
          <h3> -{props.name}</h3>
        </div>
      </div>
    </div>
  )
}
