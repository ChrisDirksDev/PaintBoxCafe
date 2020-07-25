import React from "react"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import "./footer.scss"

export const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-content-wrapper">
        <div className="footer-content">
          <div className="footer-about footer-column">
            <h3 className="column-title">We're Here For You</h3>
            <p>
              Proudly serving the Lake Ozark area for all of your dine-in or
              carryout lunch orders. Don't forget to treat yourself to (what our
              customers say is) the best carrot cake at the lake!
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
            <p>
              Connect with us to stay up to date on news and specials or read
              our reviews on: <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tripadvisor.com/Restaurant_Review-g44751-d3814514-Reviews-Paint_Box_Cafe-Osage_Beach_Lake_of_the_Ozarks_Missouri.html"
              >
                Tripadvisor
              </a>{" "}
              |{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.yelp.com/biz/paint-box-cafe-osage-beach"
              >
                Yelp
              </a>{" "}
              |{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/search?q=google+reviews+paintbox+cafe&oq=google+reviews+paintbox+cafe&aqs=chrome.0.69i59j69i64.3096j0j7&sourceid=chrome&ie=UTF-8#lrd=0x87c4db5276bdc733:0xbf0ceacb62d3c9b9,1,,,"
              >
                Google
              </a>
            </p>
            <div className="icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/PaintBoxCafe/"
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/cafepaintbox/"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-links">
          Website by Silk Feather Designs - Privacy Policy
        </div>
      </div>
    </div>
  )
}
