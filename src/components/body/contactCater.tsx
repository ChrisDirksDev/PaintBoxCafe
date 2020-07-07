import React from "react"

import Cater from "../images/cater.jpg"
import Fork from "../images/fork.svg"
import "./contactCater.scss"

export const ContactCater = () => {
  return (
    <div className="contact-cater" id="cater">
      <div className="cater">
        <div className="above">
          <div className="left">
            <h2>CATERING & EVENTS</h2>
            <p>
              In addition to our location in Osage Beach, the staff of the Paint
              Box Café provides event planning and catering for small groups (up
              to 50 guests). With our focus on these more intimate venues, we
              can provide attention to every detail, making your entertaining
              experience much less stressful and significantly more enjoyable.
            </p>
            <p>
              Whether you are in need of appetizers, hand-crafted breads, main
              dishes, sumptuous salads, or decadent desserts, we can help. Call
              the café today to discuss the details. 573.552.7404.
            </p>
          </div>
          <div className="right">
            <img src={Cater} alt="Catering" />
          </div>
        </div>
        <div className="cater-testimonial">
          <div className="cater-testimonial-wrapper">
            <p>
              "We hosted a baby shower at the Paint Box today and its couldn't
              of been a better experience. We had a big area perfect for the
              20-25 people that we had. The food was DELICIOUS! We did
              sandwiches and a fruit tray & everyone went back for seconds!
              Cozy, cute & convenient. Highly recommend them for your shower
              location."
            </p>
            <div className="testimonial-name">
              <h3> - Randi Fowler</h3>
              <img src={Fork} alt="fork" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
