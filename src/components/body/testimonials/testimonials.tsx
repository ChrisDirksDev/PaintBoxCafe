import React from "react"
import { Testimonial } from "./testimonial"

import "./testimonials.scss"

export const Testimonals = () => {
  return (
    <div className="testimonials">
      <h1>Here's What Our Hungry Customers Say...</h1>
      <div className="testimonials-container">
        <Testimonial
          headline="Amazing food! It was really good!"
          text={
            "I got the Nathan's #1, best sandwich I've ever eaten. Great people there too! Service was fast and friendly. Really loved coming here, since it was a rainy day and me and my family are trying to enjoy our vacation. Definitely a highlight of the day!"
          }
          name="Chloe F."
        />
        <Testimonial
          headline="What a sweet cafe!"
          text={
            "We stumbled upon this place and we're so glad we did. The sandwiches were amazing and had the most delicious bread. Along with the tasty food, the space was quite charming, as was the pleasant chat with the owner. We will definitely be going back in the future."
          }
          name="Lois D."
        />
        <Testimonial
          headline="We had the best lunch today!"
          text={
            "Dale, the owner & baker, is such a genuine guy... AND he makes the best bread!! We all highly enjoyed our salads, sandwiches, soups, breads, and cookies! We have found our new place to go on our annual girls trip to the lake. Also, this place is SO cute!"
          }
          name="Jamie S."
        />
      </div>
    </div>
  )
}
