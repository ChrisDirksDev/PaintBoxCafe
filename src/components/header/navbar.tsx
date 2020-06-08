import React from "react"
import logo from "../images/paintbox-logoframe.svg"
import "./navbar.scss"
import AnchorLink from "react-anchor-link-smooth-scroll"

export const Navbar = () => (
  <div className="navbar">
    <AnchorLink href="#home">Home</AnchorLink>
    <AnchorLink offset="100" href="#menu">
      Menu
    </AnchorLink>
    <img className="logo" src={logo} alt="Paint Box Cafe"></img>
    <a>Cater</a>
    <a>Contact</a>
  </div>
)
