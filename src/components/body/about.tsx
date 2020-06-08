import React from "react"
import AboutImg from "../images/pbc-about.jpg"

import "./about.scss"

export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          repellendus deserunt quas doloremque? Dignissimos dolorum eius
          quibusdam nihil quos distinctio eveniet, fugiat molestias quam
          consequatur error sint ipsa architecto cupiditate.
        </p>
      </div>
      <div className="about-right">
        <img src={AboutImg} alt="Grand re-Opening ribbon cutting ceremony" />
      </div>
    </div>
  )
}
