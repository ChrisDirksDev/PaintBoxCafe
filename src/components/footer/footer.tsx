import React from "react"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import "./footer.scss"

export const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-content-wrapper">
        <div className="footer-content">
          <div className="footer-about footer-column">
            <h3 className="column-title">About Us</h3>
            <p>
              Seriously good food in a not-so-serious setting. Feed your inner
              artist - build your own meal! Sandwiches, soups, salads, and
              endless desserts! Fun artistic atmosphere great for friends and
              families. Affordable pricing. You'll want to come back again and
              again, this is food you won't find anywhere else!
            </p>
          </div>
          <div className="contact footer-column">
            <h3 className="column-title">Contact Us</h3>
            <div className="column-items">
              <div className="location">
                <LocationOnIcon />
                1026 Palisades Blvd Ste 7<br />
                Osage Beach, Missouri 65065
              </div>
              <div className="email">
                <EmailIcon />
                pbcatthelake@hotmail.com
              </div>
              <div className="phone">
                <PhoneIcon />
                (573) 552-7404
              </div>
            </div>
          </div>
          <div className="social footer-column">
            <h3 className="column-title">Social</h3>
          </div>
        </div>
        <div className="bottom-links">
          Site by Silk Feather Designs - Privacy Policy
        </div>
      </div>
    </div>
  )
}
