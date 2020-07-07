import React from "react"

import "./imageBand.scss"
import pic1 from "../images/cookies.jpg"
import pic2 from "../images/pastries.jpg"
import pic3 from "../images/drinks.jpg"
import pic4 from "../images/soup.jpg"

export const ImageBand = () => {
  return (
    <div className="image-band">
      <img src={pic1} alt="cookies" className="border-1" />
      <img src={pic4} alt="cookies" className="border-4" />
      <img src={pic2} alt="cookies" className="border-2" />
      <img src={pic3} alt="cookies" className="border-3" />
    </div>
  )
}
