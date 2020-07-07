import React from "react"
import AboutImg from "../images/pbc-about.jpg"

import "./about.scss"

export const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h1>DISCOVER PAINTBOX CAFE</h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <h2>Seriously good food in a not-so-serious setting.</h2>
          <p>
            Seriously good food in a not-so-serious setting. Feed your inner
            artist - build your own meal! Sandwiches, soups, salads, and endless
            desserts! Fun artistic atmosphere great for friends and families.
            Affordable pricing. You'll want to come back again and again, this
            is food you won't find anywhere else!
          </p>
        </div>
        <div className="about-right">
          <img src={AboutImg} alt="Grand re-Opening ribbon cutting ceremony" />
        </div>
      </div>
    </div>
  )
}
