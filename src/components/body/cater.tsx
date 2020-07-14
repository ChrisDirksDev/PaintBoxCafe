import React from "react"
import { FadePanel } from "./fadePanel"
import Fork from "../images/fork.svg"
import "./cater.scss"

export const Cater = () => {
  return (
    <div className="catering">
      <FadePanel className="cater">
        <div className="title">
          <h1>Planning an Event?</h1>
        </div>
        <h2>CATERING & EVENTS</h2>
        <p>
          In addition to our location in Osage Beach, the staff of the Paint Box
          Café provides event planning and catering for small groups (up to 50
          guests). With our focus on these more intimate venues, we can provide
          attention to every detail, making your entertaining experience much
          less stressful and significantly more enjoyable.
        </p>
        <p>
          Whether you are in need of appetizers, hand-crafted breads, main
          dishes, sumptuous salads, or decadent desserts, we can help. Call the
          café today to discuss the details. 573.552.7404.
        </p>
      </FadePanel>
      <div className="cater-testimonial">
        <div className="cater-testimonial-wrapper">
          <p>
            "We hosted a baby shower at the Paint Box today and its couldn't of
            been a better experience. We had a big area perfect for the 20-25
            people that we had. The food was DELICIOUS! We did sandwiches and a
            fruit tray & everyone went back for seconds! Cozy, cute &
            convenient. Highly recommend them for your shower location."
          </p>
          <div className="testimonial-name">
            <h3> - Randi Fowler</h3>
            <img src={Fork} alt="fork" />
          </div>
        </div>
      </div>
    </div>
  )
}
